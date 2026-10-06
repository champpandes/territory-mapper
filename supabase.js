/* ============================================================ SUPABASE API LAYER
   Drop-in replacement for the Apps Script calls in app.js.
   Loaded AFTER app.js — uses the existing globals it declares.
*/

const SB_URL  = 'https://hfzcchwrbsocswcmuvai.supabase.co';
const SB_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmemNjaHdyYnNvY3N3Y211dmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEyODkzMzQsImV4cCI6MjEwNjg2NTMzNH0.XTdIwRBXyFEEl2zhmqKLJz-qf2HdUAtqfxFMMn76TVk';
const sb = supabase.createClient(SB_URL, SB_ANON);

/* ============================================================ AUTH STATE */
async function loadProfileRow(userId){
  const { data } = await sb.from('profiles')
    .select('id,email,display_name,role').eq('id', userId).single();
  if (!data) return null;
  return { id: data.id, email: data.email, displayName: data.display_name, role: data.role };
}

async function verifyStoredToken(){
  const { data: { session } } = await sb.auth.getSession();
  if (!session){ currentUser = null; currentToken = null; return null; }
  currentToken = session.access_token;
  currentUser  = await loadProfileRow(session.user.id);
  return currentUser;
}

/* ============================================================ ROW MAPPERS */
function parseCoords(v){
  if (!v) return null;
  if (typeof v === 'object') return v;
  try { return JSON.parse(v); } catch(e){ return null; }
}
function parsePinIds(v){
  if (Array.isArray(v)) return v;
  if (!v) return [];
  return String(v).split(',').map(s => s.trim()).filter(Boolean);
}
function placeToRow(p){
  return {
    id: String(p.id || crypto.randomUUID().replace(/-/g,'').slice(0,16)),
    latitude:  p.latitude  != null && p.latitude  !== '' ? Number(p.latitude)  : null,
    longitude: p.longitude != null && p.longitude !== '' ? Number(p.longitude) : null,
    title:    p.title   || '',
    type:     p.type    || '',
    subtype:  p.subtype || '',
    coordinates: parseCoords(p.coordinates),
    parent_id: p.parentId || null,
    notes:     p.notes    || '',
    covered_at: p.coveredAt || null,
    guide:     p.guide    || '',
    pin_ids:   parsePinIds(p.pinIds)
  };
}
function rowToPlace(r){
  return {
    id: r.id,
    latitude:  r.latitude,
    longitude: r.longitude,
    title:    r.title    || '',
    type:     r.type     || '',
    subtype:  r.subtype  || '',
    coordinates: r.coordinates ? JSON.stringify(r.coordinates) : '',
    parentId: r.parent_id || '',
    notes:    r.notes    || '',
    coveredAt: r.covered_at || '',
    guide:    r.guide    || '',
    createdBy: r.created_by,
    pinIds:   (r.pin_ids || []).join(',')
  };
}
function requestToRow(r){
  return {
    id: r.id, userId: r.user_id, displayName: r.display_name,
    latitude: r.latitude, longitude: r.longitude,
    title: r.title, notes: r.notes || '', status: r.status,
    createdAt: r.created_at, resolvedAt: r.resolved_at,
    resolvedBy: r.resolved_by, pinId: r.pin_id
  };
}

/* ============================================================ API — replaces authPost */
async function authPost(payload){
  const action = payload.action || '';
  try {
    switch (action) {

      case 'register': {
        const { data, error } = await sb.auth.signUp({
          email: payload.email, password: payload.password,
          options: { data: { display_name: payload.displayName } }
        });
        if (error) return { result:'error', message: error.message };
        if (!data.session) return { result:'error', message:'Check your email to confirm, then sign in.' };
        currentToken = data.session.access_token;
        currentUser  = await loadProfileRow(data.user.id);
        return { result:'success', user: currentUser };
      }

      case 'login': {
        const { data, error } = await sb.auth.signInWithPassword({
          email: payload.email, password: payload.password
        });
        if (error) return { result:'error', message: error.message };
        currentToken = data.session.access_token;
        currentUser  = await loadProfileRow(data.user.id);
        return { result:'success', user: currentUser };
      }

      case 'logout': {
        await sb.auth.signOut();
        currentUser = null; currentToken = null;
        return { result:'success' };
      }

      case 'listUsers': {
        const { data, error } = await sb.from('profiles')
          .select('id,email,display_name,role,created_at').order('created_at');
        if (error) return { result:'error', message: error.message };
        return { result:'success', users: data.map(u => ({
          id: u.id, email: u.email,
          displayName: u.display_name, role: u.role,
          createdAt: u.created_at
        })) };
      }

      case 'setRole': {
        const { error } = await sb.from('profiles')
          .update({ role: payload.role }).eq('id', payload.userId);
        if (error) return { result:'error', message: error.message };
        return { result:'success' };
      }

      case 'deleteUser': {
        const { data, error } = await sb.functions.invoke('delete-user', {
          body: { userId: payload.userId }
        });
        if (error) return { result:'error', message: error.message };
        if (data && data.error) return { result:'error', message: data.error };
        return { result:'success' };
      }

      case 'listComments': {
        const { data, error } = await sb.from('comments')
          .select('*').eq('pin_id', payload.pinId).order('created_at');
        if (error) return { result:'error', message: error.message };
        return { result:'success', comments: data.map(c => ({
          id: c.id, pinId: c.pin_id, userId: c.user_id,
          displayName: c.display_name, text: c.text, createdAt: c.created_at
        })) };
      }

      case 'addComment': {
        const { data: { user } } = await sb.auth.getUser();
        if (!user) return { result:'error', message:'Sign in required.' };
        const row = {
          id: crypto.randomUUID().replace(/-/g,'').slice(0,16),
          pin_id: payload.pinId, user_id: user.id,
          display_name: (currentUser && currentUser.displayName) || 'Unknown',
          text: String(payload.text || '').slice(0, 500)
        };
        const { data, error } = await sb.from('comments').insert(row).select().single();
        if (error) return { result:'error', message: error.message };
        return { result:'success', comment: {
          id: data.id, pinId: data.pin_id, userId: data.user_id,
          displayName: data.display_name, text: data.text, createdAt: data.created_at
        }};
      }

      case 'deleteComment': {
        const { error } = await sb.from('comments').delete().eq('id', payload.commentId);
        if (error) return { result:'error', message: error.message };
        return { result:'success' };
      }

      case 'commentCounts': {
        const { data, error } = await sb.from('comments').select('pin_id');
        if (error) return { result:'error', message: error.message };
        const counts = {};
        data.forEach(c => { counts[c.pin_id] = (counts[c.pin_id] || 0) + 1; });
        return { result:'success', counts };
      }

      case 'delete': {
        const { data: orphaned } = await sb.from('places')
          .update({ parent_id: null }).eq('parent_id', payload.id).select('id');
        const { error } = await sb.from('places').delete().eq('id', payload.id);
        if (error) return { result:'error', message: error.message };
        return { result:'success', orphanedCount: (orphaned && orphaned.length) || 0 };
      }

      case 'createRequest': {
        const { data: { user } } = await sb.auth.getUser();
        if (!user) return { result:'error', message:'Sign in required.' };
        const row = {
          id: crypto.randomUUID().replace(/-/g,'').slice(0,16),
          user_id: user.id,
          display_name: (currentUser && currentUser.displayName) || 'Unknown',
          latitude:  Number(payload.latitude),
          longitude: Number(payload.longitude),
          title: String(payload.title || '').slice(0, 80),
          notes: String(payload.notes || '').slice(0, 300),
          status: 'pending'
        };
        const { data, error } = await sb.from('requests').insert(row).select().single();
        if (error) return { result:'error', message: error.message };
        return { result:'success', request: requestToRow(data) };
      }

      case 'listRequests': {
        let q = sb.from('requests').select('*').order('created_at', { ascending: false });
        if (payload.scope === 'pending') q = q.eq('status', 'pending');
        const { data, error } = await q;
        if (error) return { result:'error', message: error.message };
        return { result:'success', requests: data.map(requestToRow) };
      }

      case 'approveRequest': {
        const { data, error } = await sb.rpc('approve_request', {
          request_id:  payload.requestId,
          pin_type:    payload.type,
          pin_subtype: payload.subtype || ''
        });
        if (error) return { result:'error', message: error.message };
        return { result:'success', pinId: data };
      }

      case 'rejectRequest': {
        const { error } = await sb.from('requests').update({
          status: 'rejected',
          resolved_at: new Date().toISOString(),
          resolved_by: currentUser && currentUser.id
        }).eq('id', payload.requestId);
        if (error) return { result:'error', message: error.message };
        return { result:'success' };
      }

      case 'cancelRequest': {
        const { error } = await sb.from('requests').delete().eq('id', payload.requestId);
        if (error) return { result:'error', message: error.message };
        return { result:'success' };
      }

      default:
        return await upsertPlace(payload);
    }
  } catch (e){
    console.error('authPost error:', e);
    return { result:'error', message: e.message || 'Request failed' };
  }
}

async function upsertPlace(payload){
  const row = placeToRow(payload);
  const { data, error } = await sb.from('places').upsert(row).select().single();
  if (error) return { result:'error', message: error.message };
  return { result:'success', record: rowToPlace(data), updated: true };
}
async function fetchPlacesRaw(){
  const { data, error } = await sb.from('places').select('*');
  if (error) throw new Error(error.message);
  return data.map(rowToPlace);
}
async function submitToSheet(payload){
  const res = await authPost(payload);
  if (res && res.result === 'error') throw new Error(res.message || 'Rejected');
  return res;
}
async function deleteOnServer(id){
  return await authPost({ action:'delete', id });
}
async function refreshUntil(){
  clearOverlays();
  const count = await fetchPlacesFromSheet();
  return typeof count === 'number' && count >= 0;
}

/* ============================================================ REALTIME */
let __rtTimer = null;
sb.channel('places-rt')
  .on('postgres_changes', { event:'*', schema:'public', table:'places' }, () => {
    if (typeof isTracing    !== 'undefined' && isTracing)    return;
    if (typeof isPinning    !== 'undefined' && isPinning)    return;
    if (typeof isCoverage   !== 'undefined' && isCoverage)   return;
    if (typeof isEditing    !== 'undefined' && isEditing)    return;
    if (typeof isRequesting !== 'undefined' && isRequesting) return;
    clearTimeout(__rtTimer);
    __rtTimer = setTimeout(async () => {
      try {
        if (typeof clearOverlays === 'function') clearOverlays();
        if (typeof fetchPlacesFromSheet === 'function') await fetchPlacesFromSheet();
        if (typeof loadCommentCounts === 'function') loadCommentCounts();
      } catch(e){ console.error('rt refresh', e); }
    }, 600);
  })
  .subscribe();

sb.channel('requests-rt')
  .on('postgres_changes', { event:'*', schema:'public', table:'requests' }, () => {
    if (typeof loadRequests === 'function') loadRequests();
  })
  .subscribe();