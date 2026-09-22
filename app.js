/* ============================================================ ICONS */
const ICON_PATHS = {
  home:'M3 11l9-8 9 8v10a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2z',
  store:'M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0',
  landmark:'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z',
  plus:'M12 5v14M5 12h14',
  edit:'M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4z',
  trash:'M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6',
  save:'M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2zM17 21v-8H7v8M7 3v5h8',
  undo:'M3 7v6h6M3 13a9 9 0 1 0 3-7.7L3 8',
  cancel:'M18 6L6 18M6 6l12 12',
  refresh:'M23 4v6h-6M1 20v-6h6M20.49 9A9 9 0 0 0 5.64 5.64L1 10M3.51 15a9 9 0 0 0 14.85 3.36L23 14',
  location:'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
  pan:'M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10V5a2 2 0 0 0-4 0v9M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34L2.05 15.9a2 2 0 0 1 2.83-2.82L7 15',
  pencil:'M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4z',
  pin:'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z',
  map:'M1 6v16l7-4 8 4 7-4V2l-7 4-8-4z M8 2v16M16 6v16',
  target:'M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M16 21h3a2 2 0 0 0 2-2v-3M8 21H5a2 2 0 0 1-2-2v-3',
  arrowRight:'M5 12h14M13 5l7 7-7 7',
  share:'M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13',
  comment:'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  building:'M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M3 21h18M9 7h1.5M13.5 7h1.5M9 11h1.5M13.5 11h1.5M9 15h1.5M13.5 15h1.5',
  condo:'M6 21V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v18M3 21h18M9 6h1.5M13.5 6h1.5M9 10h1.5M13.5 10h1.5M9 14h1.5M13.5 14h1.5M10 21v-3h4v3',
  mall:'M4 21V9l2-4h12l2 4v12M4 9h16M8 13h1.5M14.5 13h1.5M8 17h1.5M14.5 17h1.5',
  storeAlt:'M4 21V9l1.5-3h13L20 9v12M4 9h16M9 21v-5h6v5',
  road:'M4 21L9 3M20 21L15 3M12 5v2M12 11v2M12 17v2',
  walk:'M12 4.5a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6M12 6.5v5.5M12 12l-3 3v6M12 12l4 3v6',
  flag:'M4 22V3M4 4h12l-2.5 4L16 12H4',
  coverage:'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z'
};

const SUBTYPE_MARKER_PATHS = {
  'Regular House': { shape:'M3 11l9-8 9 8v10a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2z', accent:'' },
  'Apartment': { shape:'M4 22V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18z', accent:'<rect x="7" y="6" width="2" height="2" fill="#fff"/><rect x="11" y="6" width="2" height="2" fill="#fff"/><rect x="15" y="6" width="2" height="2" fill="#fff"/><rect x="7" y="10" width="2" height="2" fill="#fff"/><rect x="11" y="10" width="2" height="2" fill="#fff"/><rect x="15" y="10" width="2" height="2" fill="#fff"/><rect x="7" y="14" width="2" height="2" fill="#fff"/><rect x="11" y="14" width="2" height="2" fill="#fff"/><rect x="15" y="14" width="2" height="2" fill="#fff"/><rect x="10" y="18" width="4" height="4" fill="#fff"/>' },
  'Condo': { shape:'M7 22V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v19z', accent:'<rect x="9" y="6" width="2" height="2" fill="#fff"/><rect x="13" y="6" width="2" height="2" fill="#fff"/><rect x="9" y="10" width="2" height="2" fill="#fff"/><rect x="13" y="10" width="2" height="2" fill="#fff"/><rect x="9" y="14" width="2" height="2" fill="#fff"/><rect x="13" y="14" width="2" height="2" fill="#fff"/><rect x="10" y="18" width="4" height="4" fill="#fff"/>' },
  'Mall': { shape:'M3 21V8l2-4h14l2 4v13z', accent:'<rect x="5" y="10" width="3" height="3" fill="#fff"/><rect x="10" y="10" width="4" height="3" fill="#fff"/><rect x="16" y="10" width="3" height="3" fill="#fff"/><rect x="9" y="15" width="6" height="6" fill="#fff"/>' },
  'Small Store': { shape:'M4 7h16l-1 14H5zM9 7V5a3 3 0 0 1 6 0v2h-2V5a1 1 0 0 0-2 0v2z', accent:'' },
  'Other Store': { shape:'M4 21V9l1.5-3h13L20 9v12z', accent:'<rect x="7" y="12" width="10" height="3" fill="#fff"/><rect x="9" y="16" width="6" height="5" fill="#fff"/>' },
  'Road': { shape:'M4 22L9 2h6l5 20z', accent:'<path d="M11 5h2v2h-2zM11 9h2v2h-2zM11 13h2v2h-2zM11 17h2v2h-2z" fill="#fff"/>' },
  'Path Walk': { shape:'M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7z', accent:'' },
  'Other Landmark': { shape:'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z', accent:'' }
};

function svgIcon(name, size = 16, strokeWidth = 2){
  const path = ICON_PATHS[name] || '';
  const parts = path.split(' M ').map((p, i) => i === 0 ? p : 'M ' + p);
  const d = parts.map(p => `<path d="${p.trim()}"/>`).join('');
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
}

function renderStaticIcons(){
  const map = {
    'ic-loc':'location','ic-refresh':'refresh','ic-save-edit':'save',
    'ic-plus-pin':'plus','ic-undo-pin':'undo','ic-pan-pin':'pan',
    'ic-x-pin':'cancel','ic-save-pin':'save',
    'ic-pencil':'pencil','ic-undo-tr':'undo','ic-pan-tr':'pan',
    'ic-x-tr':'cancel','ic-save-tr':'save',
    'ic-coverage':'coverage','ic-undo-cov':'undo','ic-pan-cov':'pan','ic-x-cov':'cancel','ic-save-cov':'save',
    'ic-pin-rename':'edit','ic-pin-jump':'target','ic-pin-share':'share','ic-pin-del':'trash'
  };
  Object.entries(map).forEach(([id, name]) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = svgIcon(name, 16);
  });
  document.querySelectorAll('[data-ic]').forEach(el => {
    const name = el.getAttribute('data-ic');
    const size = el.classList.contains('big-ic') ? 40 : 20;
    el.innerHTML = svgIcon(name, size, name === 'map' ? 1.5 : 2);
  });
  const pf = document.getElementById('panFabIcon');
  if (pf) pf.innerHTML = svgIcon('pan', 16);
}

/* ============================================================ CONFIG */
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwD9x7ztrDySel0ERqDRS558dRZVVXsGMJS37c2pBOYC3DolP96R9F2M3LfpJXycW9rlA/exec";
const TRACE_RADIUS_METERS = 300;
const IS_TOUCH = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
const POINT_SCALE  = IS_TOUCH ? 11 : 7;
const VERTEX_SCALE = IS_TOUCH ? 12 : 8;
const DRAG_THRESHOLD_PX = 12;
const DRAFT_KEY = 'territory-mapper-draft-v1';
const COVERAGE_DRAFT_KEY = 'territory-mapper-coverage-draft-v1';
const PREVENT_TRACE_OVERLAP = true;
const DECLUSTER_MIN_METERS = 30;
const DECLUSTER_RADIUS_METERS = 28;

const TOKEN_KEY = 'tm-auth-token';
const USER_KEY = 'tm-auth-user';

/* ============================================================ AUTH STATE */
let currentUser = null;
let currentToken = null;

function saveAuth(token, user){
  currentToken = token;
  currentUser = user;
  try {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch(e){}
}
function clearAuth(){
  currentToken = null; currentUser = null;
  try { localStorage.removeItem(TOKEN_KEY); localStorage.removeItem(USER_KEY); } catch(e){}
}
function loadStoredAuth(){
  try {
    const t = localStorage.getItem(TOKEN_KEY);
    const u = localStorage.getItem(USER_KEY);
    if (!t || !u) return null;
    return { token: t, user: JSON.parse(u) };
  } catch(e){ return null; }
}
function role(){ return currentUser ? currentUser.role : "viewer"; }
function isMapper(){ return role() === "mapper" || role() === "admin"; }
function isAdmin(){ return role() === "admin"; }
function applyRoleToBody(){ document.body.setAttribute("data-role", currentUser ? currentUser.role : "viewer"); }

/* ============================================================ AUTH API */
async function authPost(payload){
  const res = await fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload)
  });
  const text = await res.text();
  try { return JSON.parse(text); }
  catch(e){ throw new Error("Invalid response from server"); }
}
async function authGet(params){
  const qs = Object.entries(params).map(([k,v]) =>
    encodeURIComponent(k) + "=" + encodeURIComponent(v)
  ).join("&");
  const res = await fetch(APPS_SCRIPT_URL + "?" + qs + "&t=" + Date.now());
  const text = await res.text();
  try { return JSON.parse(text); }
  catch(e){ throw new Error("Invalid response from server"); }
}
async function verifyStoredToken(){
  const stored = loadStoredAuth();
  if (!stored) return null;
  try {
    const res = await authGet({ action:'verify', token: stored.token });
    if (res && res.valid && res.user){ saveAuth(stored.token, res.user); return res.user; }
  } catch(e){}
  clearAuth();
  return null;
}

/* ============================================================ AUTH UI */
let authMode = "login";

function openAuthModal(){
  const root = document.getElementById("authRoot");
  const loading = document.getElementById("authLoading");
  const content = document.getElementById("authContent");
  if (!root) return;
  root.hidden = false;
  loading.hidden = false;
  content.hidden = true;
  document.body.style.overflow = "hidden";
  document.getElementById("authError").hidden = true;
  document.getElementById("authForm").reset();
  setTimeout(() => {
    loading.hidden = true;
    content.hidden = false;
    setAuthMode(authMode);
    setTimeout(() => {
      const target = authMode === "register" ? document.getElementById("authDisplayName") : document.getElementById("authEmail");
      target?.focus();
    }, 40);
  }, 260);
}
function closeAuthModal(){
  const root = document.getElementById("authRoot");
  if (root) root.hidden = true;
  document.body.style.overflow = "";
}
function setAuthMode(mode){
  authMode = mode;
  const isReg = mode === "register";
  document.getElementById("authTitle").textContent = isReg ? "Create account" : "Sign in";
  document.getElementById("authSubtitle").textContent = isReg ? "Join Territory Mapper as a viewer" : "Welcome back to Territory Mapper";
  document.getElementById("authNameField").hidden = !isReg;
  document.getElementById("authSubmitText").textContent = isReg ? "Create account" : "Sign in";
  document.getElementById("authFootLogin").hidden = isReg;
  document.getElementById("authFootRegister").hidden = !isReg;
  document.getElementById("authPassword").setAttribute("autocomplete", isReg ? "new-password" : "current-password");
  document.getElementById("authError").hidden = true;
  const nameInput = document.getElementById("authDisplayName");
  if (nameInput) nameInput.required = isReg;
}

document.getElementById("authRoot").addEventListener("click", (e) => {
  const link = e.target.closest("[data-action]");
  if (!link) return;
  e.preventDefault();
  if (link.dataset.action === "switch-register") setAuthMode("register");
  if (link.dataset.action === "switch-login")    setAuthMode("login");
});

document.getElementById("authForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const errEl = document.getElementById("authError");
  const submitBtn = document.getElementById("authSubmit");
  const submitText = document.getElementById("authSubmitText");

  const email = document.getElementById("authEmail").value.trim();
  const password = document.getElementById("authPassword").value;
  const displayName = document.getElementById("authDisplayName").value.trim();

  errEl.hidden = true;
  if (!email || !password){ showAuthError("Email and password are required."); return; }
  if (password.length < 6){ showAuthError("Password must be at least 6 characters."); return; }
  if (authMode === "register" && !displayName){ showAuthError("Please enter your name."); return; }

  submitBtn.disabled = true;
  submitText.textContent = authMode === "register" ? "Creating…" : "Signing in…";
  try {
    const payload = authMode === "register"
      ? { action: "register", email, password, displayName }
      : { action: "login", email, password };
    const res = await authPost(payload);
    if (!res || res.result !== "success"){ showAuthError((res && res.message) || "Something went wrong."); return; }
    saveAuth(res.token, res.user);
    closeAuthModal();
    onAuthReady();
    toast(`Welcome, ${res.user.displayName}`, "success", 2400);
  } catch(err){
    showAuthError("Could not reach the server. Try again.");
    console.error(err);
  } finally {
    submitBtn.disabled = false;
    submitText.textContent = authMode === "register" ? "Create account" : "Sign in";
  }
});

function showAuthError(msg){
  const el = document.getElementById("authError");
  el.textContent = msg; el.hidden = false; haptic(12);
}

/* ============================================================ USER BAR */
function paintUserBar(){
  const bar = document.getElementById("userBar");
  const nameEl = document.getElementById("userName");
  const roleEl = document.getElementById("userRole");
  const avatar = document.getElementById("userAvatar");
  if (!bar || !currentUser) return;
  bar.hidden = false;
  nameEl.textContent = currentUser.displayName;
  const r = currentUser.role;
  roleEl.textContent = r.charAt(0).toUpperCase() + r.slice(1);
  roleEl.className = "user-role role-" + r;
  const parts = currentUser.displayName.trim().split(/\s+/);
  const initials = (parts.length >= 2 ? parts[0][0] + parts[parts.length - 1][0] : (parts[0] ? parts[0].slice(0, 2) : "?")).toUpperCase();
  avatar.textContent = initials;
  const gear = document.getElementById("adminOpen");
  if (gear) gear.hidden = currentUser.role !== "admin";
}

document.getElementById("userLogout").addEventListener("click", async () => {
  const ok = await showConfirm({
    title: "Sign out?",
    message: "You'll need to sign back in to use the app.",
    okText: "Sign out", cancelText: "Cancel"
  });
  if (!ok) return;
  const overlay = document.getElementById("signoutOverlay");
  if (overlay) overlay.hidden = false;
  document.body.style.overflow = "hidden";
  const minVisible = new Promise(r => setTimeout(r, 700));
  try { await Promise.all([authPost({ action: "logout", token: currentToken }).catch(() => {}), minVisible]); } catch(e){}
  clearAuth(); applyRoleToBody(); location.reload();
});

/* ============================================================ ADMIN PANEL */
function openAdminPanel(){
  if (!isAdmin()) return;
  const root = document.getElementById('adminRoot');
  if (!root) return;
  root.hidden = false;
  document.body.style.overflow = 'hidden';
  loadUsersIntoAdmin();
  haptic(8);
}
function closeAdminPanel(){
  const root = document.getElementById('adminRoot');
  if (!root) return;
  root.hidden = true;
  document.body.style.overflow = '';
}
document.getElementById('adminOpen')?.addEventListener('click', openAdminPanel);
document.getElementById('adminClose')?.addEventListener('click', closeAdminPanel);

/* ============================================================ SIDEBAR */
const SIDEBAR_KEY = 'tm-sidebar-collapsed';
function isMobileLayout(){ return window.matchMedia('(max-width: 768px)').matches; }
function toggleSidebar(){
  if (isMobileLayout()){ toggleMobileSheet(); return; }
  const sidebar = document.getElementById('sidebar');
  const showBtn = document.getElementById('sidebarShowBtn');
  const willCollapse = !sidebar.classList.contains('collapsed');
  sidebar.classList.toggle('collapsed', willCollapse);
  showBtn.hidden = !willCollapse;
  try { localStorage.setItem(SIDEBAR_KEY, willCollapse ? '1' : '0'); } catch(e){}
  if (map){ setTimeout(() => { google.maps.event.trigger(map, 'resize'); const c = map.getCenter(); if (c) map.setCenter(c); }, 320); }
  haptic(8);
}
function restoreSidebarState(){
  try {
    if (localStorage.getItem(SIDEBAR_KEY) === '1' && !isMobileLayout()){
      const sidebar = document.getElementById('sidebar');
      const showBtn = document.getElementById('sidebarShowBtn');
      sidebar.classList.add('collapsed');
      showBtn.hidden = false;
      if (map) setTimeout(() => { google.maps.event.trigger(map, 'resize'); }, 100);
    }
  } catch(e){}
}
function toggleMobileSheet(){
  const sidebar = document.getElementById('sidebar');
  const h = sidebar.getBoundingClientRect().height / window.innerHeight * 100;
  const collapsed = h < 30;
  if (collapsed){ sidebar.style.setProperty('--sheet-height', '45dvh'); sidebar.classList.remove('sheet-collapsed'); }
  else { sidebar.style.setProperty('--sheet-height', '18dvh'); sidebar.classList.add('sheet-collapsed'); }
  haptic(8);
}
window.addEventListener('resize', () => {
  if (isMobileLayout()){
    const showBtn = document.getElementById('sidebarShowBtn');
    if (showBtn) showBtn.hidden = true;
  } else {
    const sidebar = document.getElementById('sidebar');
    const showBtn = document.getElementById('sidebarShowBtn');
    let collapsed = false;
    try { collapsed = localStorage.getItem(SIDEBAR_KEY) === '1'; } catch(e){}
    sidebar.classList.toggle('collapsed', collapsed);
    showBtn.hidden = !collapsed;
    if (map) setTimeout(() => { if (google.maps && google.maps.event) google.maps.event.trigger(map, 'resize'); }, 320);
  }
});

/* ============================================================ PALETTE */
const PALETTE = ['#2563eb','#059669','#d97706','#e11d48','#7c3aed','#0891b2','#65a30d','#ea580c','#c026d3','#475569'];
function pickNextPaletteColor(existingTraces){
  const used = new Set();
  existingTraces.forEach(t => {
    try { const p = JSON.parse(t.item.coordinates); if (p && p.color) used.add(p.color.toUpperCase()); } catch(e){}
  });
  for (const c of PALETTE){ if (!used.has(c.toUpperCase())) return c; }
  return PALETTE[used.size % PALETTE.length];
}

/* ============================================================ PIN SUBTYPES */
const PIN_SUBTYPES = {
  House:    ['Regular House', 'Apartment', 'Condo'],
  Store:    ['Mall', 'Small Store', 'Other Store'],
  Landmark: ['Road', 'Path Walk', 'Other Landmark']
};
const SUBTYPE_ICONS = {
  'Regular House':'home','Apartment':'building','Condo':'condo',
  'Mall':'mall','Small Store':'store','Other Store':'storeAlt',
  'Road':'road','Path Walk':'walk','Other Landmark':'flag'
};
let selectedSubtype = '';

function renderSubtypeChips(type){
  const container = document.getElementById('subtypeChips');
  if (!container) return;
  const list = PIN_SUBTYPES[type] || [];
  if (list.length === 0){ container.innerHTML = ''; selectedSubtype = ''; return; }
  if (!list.includes(selectedSubtype)) selectedSubtype = list[0];
  container.innerHTML = list.map(s => {
    const ic = SUBTYPE_ICONS[s] || 'pin';
    const active = s === selectedSubtype ? ' active' : '';
    return `<button class="subtype-chip${active}" type="button" data-subtype="${esc(s)}" title="${esc(s)}">
      ${svgIcon(ic, 14, 2.2)}
      <span class="st-label">${esc(s)}</span>
    </button>`;
  }).join('');
}

const MAP_STYLE = [
  {elementType:"geometry",stylers:[{color:"#f1f4f8"}]},
  {elementType:"labels.icon",stylers:[{visibility:"off"}]},
  {elementType:"labels.text.fill",stylers:[{color:"#7a8696"}]},
  {elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},
  {featureType:"administrative",elementType:"geometry",stylers:[{color:"#d5dce6"}]},
  {featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{color:"#c3ccd9"}]},
  {featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#6b7280"}]},
  {featureType:"poi",elementType:"geometry",stylers:[{color:"#e3e8ee"}]},
  {featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},
  {featureType:"poi.park",elementType:"geometry",stylers:[{color:"#dcefdb"}]},
  {featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},
  {featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#8a94a4"}]},
  {featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#ffffff"}]},
  {featureType:"road.highway",elementType:"geometry",stylers:[{color:"#f4e0b6"}]},
  {featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#e4c992"}]},
  {featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"}]},
  {featureType:"transit",stylers:[{visibility:"off"}]},
  {featureType:"water",elementType:"geometry",stylers:[{color:"#bfdbfe"}]},
  {featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#7391b0"}]}
];

/* ============================================================ STATE */
let map, clusterer;
let userLocation = { lat: 13.5571, lng: 123.3650 };
let isTracing = false;
let isCoverage = false;
let pendingParentId = null;
let pendingParentTrace = null;
let subTraceParentOverlay = null;
let currentTracePoints = [];
let undoStack = [];
let activePolyline = null;
let activePolygon = null;
let tempMarkers = [];
let isPinning = false;
let currentTempPins = [];
let tempPinMarkers = [];
let allRecords = [];
let allTraces = [];
let allCoverages = [];
let drawnOverlays = [];
let coverageOverlays = [];
let pinMarkerObjects = [];
let traceLabels = [];
const featureIndex = new Map();
let lastRecordCount = 0;
let lastJumpMarker = null;

let isEditing = false;
let editingTraceItem = null;
let editingCoords = [];
let editingMarkers = [];
let editingPolyline = null;
let editingFill = null;

let panMode = false;
let markerInteractionLock = false;
let allUsersCache = [];

let currentPinId = null;
let currentPinComments = [];

// Coverage-specific state
let coveragePinEntries = [];
let coverageHighlightMarkers = [];
let rawPinData = [];              // undecorated pins from the sheet
let lastPinClickTime = 0;         // guards against map click firing after pin click

/* ============================================================ HAPTIC */
function haptic(ms = 8){ if (navigator.vibrate) navigator.vibrate(ms); }

/* ============================================================ MODAL */
function showModal({title='',message='',input=null,textarea=null,okText='OK',cancelText='Cancel'}){
  return new Promise(resolve => {
    const root = document.getElementById('modalRoot');
    const tEl = document.getElementById('modalTitle');
    const mEl = document.getElementById('modalMsg');
    const iEl = document.getElementById('modalInput');
    const aEl = document.getElementById('modalTextarea');
    const okBtn = document.getElementById('modalOk');
    const caBtn = document.getElementById('modalCancel');

    tEl.textContent = title; tEl.hidden = !title;
    mEl.textContent = message || ''; mEl.hidden = !message;
    okBtn.textContent = okText; caBtn.textContent = cancelText;

    const hasInput = input !== null;
    const hasTextarea = textarea !== null;
    iEl.hidden = !hasInput; aEl.hidden = !hasTextarea;
    if (hasInput) iEl.value = input ?? '';
    if (hasTextarea) aEl.value = textarea ?? '';

    root.hidden = false;
    document.body.style.overflow = 'hidden';

    const cleanup = () => {
      root.hidden = true;
      document.body.style.overflow = '';
      okBtn.onclick = null; caBtn.onclick = null;
      document.getElementById('modalBackdrop').onclick = null;
      iEl.onkeydown = null; aEl.onkeydown = null;
    };
    const confirm = () => {
      let v = true;
      if (hasInput) v = { input: iEl.value, textarea: hasTextarea ? aEl.value : null };
      else if (hasTextarea) v = { textarea: aEl.value };
      cleanup(); resolve(v);
    };
    const cancel = () => { cleanup(); resolve(null); };

    okBtn.onclick = confirm;
    caBtn.onclick = cancel;
    document.getElementById('modalBackdrop').onclick = cancel;

    if (hasInput || hasTextarea){
      const onKey = (e) => {
        if (e.key === 'Escape'){ e.preventDefault(); cancel(); }
        if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA'){ e.preventDefault(); confirm(); }
      };
      iEl.onkeydown = onKey; aEl.onkeydown = onKey;
      setTimeout(() => { (hasInput ? iEl : aEl).focus(); iEl.select?.(); }, 60);
    } else {
      setTimeout(() => okBtn.focus(), 60);
    }
  });
}
function showConfirm({title='',message='',okText='OK',cancelText='Cancel'}){
  return showModal({ title, message, input: null, okText, cancelText }).then(v => v !== null);
}

/* ============================================================ BUSY BUTTON */
async function withButtonBusy(btn, busyText, fn){
  if (!btn) return await fn();
  if (btn.dataset.busy === '1') return;
  const orig = btn.innerHTML;
  btn.dataset.busy = '1'; btn.disabled = true; btn.innerHTML = busyText;
  try { return await fn(); }
  finally { btn.dataset.busy = ''; btn.disabled = false; btn.innerHTML = orig; }
}

/* ============================================================ HELPERS */
function esc(s){
  return String(s ?? '').replace(/[&<>"']/g, c => (
    {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]
  ));
}

function markerSvgIcon(type, subtype){
  const t = (type || '').toLowerCase();
  let fill = '#dc2626';
  if (t.includes('house')) fill = '#2563eb';
  else if (t.includes('store') || t.includes('shop')) fill = '#16a34a';

  const entry = subtype ? SUBTYPE_MARKER_PATHS[subtype] : null;
  let inner;
  if (entry){
    inner = `<path d="${entry.shape}" fill="${fill}" stroke="#ffffff" stroke-width="1.6" stroke-linejoin="round"/>${entry.accent || ''}`;
  } else {
    let path = ICON_PATHS.pin;
    if (t.includes('house')) path = ICON_PATHS.home;
    else if (t.includes('store') || t.includes('shop')) path = ICON_PATHS.store;
    const d = path.split(' M ').map((p, i) => i === 0 ? p : 'M ' + p)
      .map(p => `<path d="${p.trim()}" fill="${fill}" stroke="#ffffff" stroke-width="1.6" stroke-linejoin="round"/>`).join('');
    inner = d;
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">${inner}</svg>`;
  const isPinAnchor = subtype === 'Other Landmark' || (!subtype && !t.includes('house') && !t.includes('store') && !t.includes('shop'));
  return {
    url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg),
    scaledSize: new google.maps.Size(30, 30),
    anchor: new google.maps.Point(15, isPinAnchor ? 28 : 15)
  };
}

function declusterPins(pinObjs){
  if (pinObjs.length < 2) return pinObjs.map(p => ({ item:p.item, pos:p.pos, realPos:p.pos }));
  const used = new Array(pinObjs.length).fill(false);
  const out = [];
  for (let i = 0; i < pinObjs.length; i++){
    if (used[i]) continue;
    const cluster = [pinObjs[i]]; used[i] = true;
    for (let j = i + 1; j < pinObjs.length; j++){
      if (used[j]) continue;
      if (haversineMeters(pinObjs[i].pos, pinObjs[j].pos) < DECLUSTER_MIN_METERS){ cluster.push(pinObjs[j]); used[j] = true; }
    }
    if (cluster.length === 1){ const p = cluster[0]; out.push({ item:p.item, pos:p.pos, realPos:p.pos }); continue; }
    let lat = 0, lng = 0;
    cluster.forEach(p => { lat += p.pos.lat; lng += p.pos.lng; });
    const center = { lat: lat / cluster.length, lng: lng / cluster.length };
    const n = cluster.length;
    cluster.forEach((p, idx) => {
      const angle = (2 * Math.PI * idx) / n - Math.PI / 2;
      const dLat = (DECLUSTER_RADIUS_METERS * Math.cos(angle)) / 111320;
      const dLng = (DECLUSTER_RADIUS_METERS * Math.sin(angle)) / (111320 * Math.cos(center.lat * Math.PI / 180));
      out.push({ item: p.item, pos: { lat: center.lat + dLat, lng: center.lng + dLng }, realPos: p.pos });
    });
  }
  return out;
}

function pinColorForType(type){
  const t = (type || '').toLowerCase();
  if (t.includes('house')) return '#2563eb';
  if (t.includes('store') || t.includes('shop')) return '#16a34a';
  if (t.includes('landmark')) return '#dc2626';
  return '#64748b';
}
function countPinsByType(pins){
  const c = { house:0, store:0, landmark:0, other:0 };
  pins.forEach(p => {
    const t = (p.item.type || '').toLowerCase();
    if (t.includes('house')) c.house++;
    else if (t.includes('store') || t.includes('shop')) c.store++;
    else if (t.includes('landmark')) c.landmark++;
    else c.other++;
  });
  return c;
}

function renderPinSummary(counts, hasDetails, groupKey){
  const total = counts.house + counts.store + counts.landmark + counts.other;
  const chips = [];
  if (counts.house) chips.push(`<span class="pin-chip house">${svgIcon('home',13,2.2)}<span>${counts.house}</span></span>`);
  if (counts.store) chips.push(`<span class="pin-chip store">${svgIcon('store',13,2.2)}<span>${counts.store}</span></span>`);
  if (counts.landmark) chips.push(`<span class="pin-chip landmark">${svgIcon('landmark',13,2.2)}<span>${counts.landmark}</span></span>`);
  if (counts.other) chips.push(`<span class="pin-chip other"><span>${counts.other}</span></span>`);
  if (total === 0) return `<div class="pin-summary"><span class="pin-chip empty">No pins yet</span></div>`;
  const showBtn = hasDetails ? `<button class="show-pins-btn" data-toggle-pins="${esc(groupKey)}">Show&nbsp;▾</button>` : '';
  return `<div class="pin-summary">${chips.join('')}${showBtn}</div>`;
}

function distanceToSegmentMeters(p, a, b){
  const R = 6371000, toRad = d => d * Math.PI / 180;
  const latRef = toRad((a.lat + b.lat) / 2);
  const X = lng => toRad(lng) * R * Math.cos(latRef);
  const Y = lat => toRad(lat) * R;
  const px = X(p.lng), py = Y(p.lat);
  const ax = X(a.lng), ay = Y(a.lat);
  const bx = X(b.lng), by = Y(b.lat);
  const dx = bx - ax, dy = by - ay;
  const len2 = dx*dx + dy*dy;
  let t = len2 === 0 ? 0 : ((px-ax)*dx + (py-ay)*dy) / len2;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (ax + t*dx), py - (ay + t*dy));
}
function distanceToPathMeters(p, coords){
  let min = Infinity;
  for (let i = 0; i < coords.length - 1; i++) min = Math.min(min, distanceToSegmentMeters(p, coords[i], coords[i+1]));
  if (coords.length === 1) min = distanceToSegmentMeters(p, coords[0], coords[0]);
  return min;
}
function haversineMeters(a, b){
  const R = 6371000, toRad = d => d * Math.PI / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat), lat2 = toRad(b.lat);
  const x = Math.sin(dLat/2)**2 + Math.cos(lat1)*Math.cos(lat2)*Math.sin(dLng/2)**2;
  return 2*R*Math.asin(Math.sqrt(x));
}
function projectPointOnSegment(p, a, b){
  const R = 6371000, toRad = d => d * Math.PI / 180;
  const latRef = toRad((a.lat + b.lat) / 2);
  const X = lng => toRad(lng) * R * Math.cos(latRef);
  const Y = lat => toRad(lat) * R;
  const px = X(p.lng), py = Y(p.lat);
  const ax = X(a.lng), ay = Y(a.lat);
  const bx = X(b.lng), by = Y(b.lat);
  const dx = bx - ax, dy = by - ay;
  const len2 = dx*dx + dy*dy;
  let t = len2 === 0 ? 0 : ((px-ax)*dx + (py-ay)*dy) / len2;
  t = Math.max(0, Math.min(1, t));
  const x = ax + t*dx, y = ay + t*dy;
  return { lat: y / R * 180 / Math.PI, lng: x / (R * Math.cos(latRef)) * 180 / Math.PI };
}

/* ============================================================ LONG-PRESS */
function attachLongPress(marker, onLongPress, duration = 550){
  let timer = null;
  const start = () => { if (timer) clearTimeout(timer); timer = setTimeout(() => { timer = null; onLongPress(); }, duration); };
  const cancel = () => { if (timer){ clearTimeout(timer); timer = null; } };
  ['mousedown','touchstart'].forEach(ev => google.maps.event.addListener(marker, ev, start));
  ['mouseup','touchend','mouseout','dragstart','drag','dragend'].forEach(ev => google.maps.event.addListener(marker, ev, cancel));
}

/* ============================================================ RAY-CAST */
function pointInPolygonRayCast(lat, lng, coords){
  let inside = false;
  for (let i = 0, j = coords.length - 1; i < coords.length; j = i++){
    const xi = Number(coords[i].lng), yi = Number(coords[i].lat);
    const xj = Number(coords[j].lng), yj = Number(coords[j].lat);
    const intersect = ((yi > lat) !== (yj > lat)) && (lng < (xj - xi) * (lat - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}
function pointInRing_(latLng, coords){ return pointInPolygonRayCast(latLng.lat(), latLng.lng(), coords); }

/* ============================================================ TRACE MEMBERSHIP */
function traceContains_(t, latLng){
  if (t.coords.length >= 3) return pointInRing_(latLng, t.coords);
  if (t.coords.length >= 1){
    const d = distanceToPathMeters({ lat: latLng.lat(), lng: latLng.lng() }, t.coords);
    return d <= TRACE_RADIUS_METERS;
  }
  return false;
}
function findTraceContaining(latLng){
  for (const t of allTraces){ if (t.parentId && traceContains_(t, latLng)) return t; }
  for (const t of allTraces){ if (!t.parentId && traceContains_(t, latLng)) return t; }
  return null;
}

/* ============================================================ TRACE OVERLAP */
function segmentIntersect(p1, p2, p3, p4){
  const d1x = p2.lng - p1.lng, d1y = p2.lat - p1.lat;
  const d2x = p4.lng - p3.lng, d2y = p4.lat - p3.lat;
  const denom = d1x * d2y - d1y * d2x;
  if (Math.abs(denom) < 1e-14) return false;
  const dx = p3.lng - p1.lng, dy = p3.lat - p1.lat;
  const t = (dx * d2y - dy * d2x) / denom;
  const u = (dx * d1y - dy * d1x) / denom;
  return t > 0 && t < 1 && u > 0 && u < 1;
}
function polygonsOverlap(A, B){
  if (A.length < 3 || B.length < 3) return false;
  for (const p of A){ if (pointInPolygonRayCast(p.lat, p.lng, B)) return true; }
  for (const p of B){ if (pointInPolygonRayCast(p.lat, p.lng, A)) return true; }
  for (let i = 0; i < A.length; i++){
    const a1 = A[i], a2 = A[(i + 1) % A.length];
    for (let j = 0; j < B.length; j++){
      const b1 = B[j], b2 = B[(j + 1) % B.length];
      if (segmentIntersect(a1, a2, b1, b2)) return true;
    }
  }
  return false;
}
function tracesToCheckAgainst(){
  if (pendingParentId) return allTraces.filter(t => String(t.item.id) !== String(pendingParentId));
  return allTraces;
}
function findOtherTraceContainingPoint(latLng){
  for (const t of tracesToCheckAgainst()){
    if (t.coords.length < 3) continue;
    if (pointInRing_(latLng, t.coords)) return t;
  }
  return null;
}
function findOverlappingTrace(newCoords){
  if (newCoords.length < 3) return null;
  for (const t of tracesToCheckAgainst()){
    if (t.coords.length < 3) continue;
    if (polygonsOverlap(newCoords, t.coords)) return t;
  }
  return null;
}

/* ============================================================ TOASTS */
function toast(msg, kind = 'info', ms = 2600){
  const box = document.getElementById('toasts');
  const el = document.createElement('div');
  el.className = 'toast' + (kind !== 'info' ? ' ' + kind : '');
  el.textContent = msg;
  box.appendChild(el);
  setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 240); }, ms);
}

/* ============================================================ API */
async function submitToSheet(payload){
  const res = await authPost({ ...payload, token: currentToken });
  if (res && res.result === "error"){
    if (/sign in|permission/i.test(res.message || "")) handleAuthExpired();
    throw new Error(res.message || "Server rejected the request");
  }
  return res;
}
async function deleteOnServer(id){
  const res = await authPost({ action:'delete', id, token: currentToken });
  if (!res || res.result !== 'success'){
    if (res && /sign in|permission/i.test(res.message || "")) handleAuthExpired();
    throw new Error((res && res.message) || 'Server rejected the request');
  }
  return res;
}
async function refreshUntil(expectedAtLeast, maxAttempts = 6){
  for (let attempt = 1; attempt <= maxAttempts; attempt++){
    await new Promise(r => setTimeout(r, attempt === 1 ? 600 : 900));
    clearOverlays();
    const count = await fetchPlacesFromSheet();
    if (typeof count === 'number' && count >= expectedAtLeast) return true;
  }
  return false;
}
function handleAuthExpired(){
  clearAuth(); applyRoleToBody();
  toast("Your session expired. Please sign in again.", "error", 5000);
  setTimeout(() => location.reload(), 1200);
}

/* ============================================================ DRAFT */
function saveDraft(){
  try {
    if (isTracing && currentTracePoints.length > 0){
      const data = {
        points: currentTracePoints.map(pt => ({
          lat: typeof pt.lat === 'function' ? pt.lat() : pt.lat,
          lng: typeof pt.lng === 'function' ? pt.lng() : pt.lng
        })),
        pendingParentId: pendingParentId,
        savedAt: Date.now()
      };
      localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
    }
    if (isCoverage && currentTracePoints.length > 0){
      const data = {
        points: currentTracePoints.map(pt => ({
          lat: typeof pt.lat === 'function' ? pt.lat() : pt.lat,
          lng: typeof pt.lng === 'function' ? pt.lng() : pt.lng
        })),
        pinIds: coveragePinEntries.map(e => String(e.item.id)),
        savedAt: Date.now()
      };
      localStorage.setItem(COVERAGE_DRAFT_KEY, JSON.stringify(data));
    }
  } catch(e){}
}
function clearDraft(){
  try { localStorage.removeItem(DRAFT_KEY); } catch(e){}
  try { localStorage.removeItem(COVERAGE_DRAFT_KEY); } catch(e){}
}
function loadDraft(){
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return null;
    const d = JSON.parse(raw);
    if (Date.now() - (d.savedAt || 0) > 6 * 3600 * 1000){ localStorage.removeItem(DRAFT_KEY); return null; }
    return d;
  } catch(e){ return null; }
}

/* ============================================================ GHOST-TAP */
let pointerStart = null;
function installPointerTracking(){
  const mapEl = document.getElementById('map');
  const down = (x, y) => { pointerStart = { x, y, t: Date.now() }; };
  const move = (x, y) => {
    if (!pointerStart) return;
    if (Math.hypot(x - pointerStart.x, y - pointerStart.y) > DRAG_THRESHOLD_PX) pointerStart.moved = true;
  };
  mapEl.addEventListener('touchstart', e => { const t = e.touches[0]; if (t) down(t.clientX, t.clientY); }, { passive: true });
  mapEl.addEventListener('touchmove', e => { const t = e.touches[0]; if (t) move(t.clientX, t.clientY); }, { passive: true });
  mapEl.addEventListener('mousedown', e => down(e.clientX, e.clientY));
  mapEl.addEventListener('mousemove', e => move(e.clientX, e.clientY));
}
function shouldIgnoreMapClick(){
  if (markerInteractionLock) return true;
  if (!pointerStart) return false;
  if (pointerStart.moved) return true;
  return false;
}

/* ============================================================ TRACE LABELS */
function createTraceLabel(trace, pinCount){
  let lat = 0, lng = 0;
  trace.coords.forEach(c => { lat += Number(c.lat); lng += Number(c.lng); });
  const pos = new google.maps.LatLng(lat / trace.coords.length, lng / trace.coords.length);

  const div = document.createElement('div');
  div.className = 'trace-label' + (trace.parentId ? ' small' : '');
  div.innerHTML = `<span class="tl-name">${esc(trace.item.title)}</span>` +
                  `<span class="tl-count">${pinCount} pin${pinCount === 1 ? '' : 's'}</span>`;

  const overlay = new google.maps.OverlayView();
  overlay.onAdd = function(){ this.getPanes().overlayMouseTarget.appendChild(div); };
  overlay.draw = function(){
    const proj = this.getProjection();
    if (!proj) return;
    const px = proj.fromLatLngToDivPixel(pos);
    div.style.left = px.x + 'px';
    div.style.top = px.y + 'px';
  };
  overlay.onRemove = function(){ if (div.parentNode) div.parentNode.removeChild(div); };
  overlay.setMap(map);
  return { overlay, div, position: pos, traceId: String(trace.item.id) };
}

function createCoverageLabel(cov){
  let lat = 0, lng = 0;
  cov.coords.forEach(c => { lat += Number(c.lat); lng += Number(c.lng); });
  const pos = new google.maps.LatLng(lat / cov.coords.length, lng / cov.coords.length);

  const date = cov.item.coveredAt || "";
  const guide = cov.item.guide || "—";
  const pinCount = String(cov.item.pinIds || "").split(",").filter(s => s.trim()).length;
  const div = document.createElement('div');
  div.className = 'trace-label small coverage';
  div.innerHTML = `<span class="tl-name">${esc(date || "Covered area")}</span>` +
                  `<span class="tl-count">${pinCount} pin${pinCount === 1 ? '' : 's'} · Guide: ${esc(guide)}</span>`;

  const overlay = new google.maps.OverlayView();
  overlay.onAdd = function(){ this.getPanes().overlayMouseTarget.appendChild(div); };
  overlay.draw = function(){
    const proj = this.getProjection();
    if (!proj) return;
    const px = proj.fromLatLngToDivPixel(pos);
    div.style.left = px.x + 'px';
    div.style.top = px.y + 'px';
  };
  overlay.onRemove = function(){ if (div.parentNode) div.parentNode.removeChild(div); };
  overlay.setMap(map);
  return { overlay, div, position: pos };
}

function updateTraceLabelVisibility(){
  if (!map) return;
  const z = map.getZoom();
  traceLabels.forEach(l => { l.div.style.display = z >= 12 ? '' : 'none'; });
}

/* ============================================================ PIN MARKER BUILDER */
/* Re-renders pin markers. In coverage mode, pins sit at their TRUE locations
   so tapping the pin you see adds exactly that pin. In normal mode, clusters
   get fanned out so each is tappable. */
function rebuildPinMarkers(){
  if (clusterer){ clusterer.clearMarkers(); clusterer = null; }
  pinMarkerObjects.forEach(e => { if (e.marker) e.marker.setMap(null); });
  pinMarkerObjects = [];

  const ordered = isCoverage ? rawPinData.map(p => ({ item:p.item, pos:p.pos, realPos:p.pos })) : declusterPins(rawPinData);

  ordered.forEach(pinObj => {
    const marker = new google.maps.Marker({
      position: pinObj.pos, title: pinObj.item.type || 'Pin',
      icon: markerSvgIcon(pinObj.item.type, pinObj.item.subtype)
    });
    marker.addListener("click", () => {
      lastPinClickTime = Date.now();
      const entry = pinMarkerObjects.find(e => e.marker === marker);
      if (!entry) return;
      if (isCoverage){ addPinToCoverage(entry); return; }
      openPinSheet(entry.item.id);
    });
    pinMarkerObjects.push({
      marker,
      item: pinObj.item,
      pos: pinObj.pos,
      realPos: pinObj.realPos || pinObj.pos
    });
  });

  if (!isCoverage && !window.__noClusterer && typeof markerClusterer !== 'undefined' && markerClusterer.MarkerClusterer){
    clusterer = new markerClusterer.MarkerClusterer({
      map, markers: pinMarkerObjects.map(e => e.marker),
      algorithm: new markerClusterer.GridAlgorithm({ gridSize: 40 })
    });
  } else {
    pinMarkerObjects.forEach(e => e.marker.setMap(map));
  }
}

/* ============================================================ MAP */
function initMap(){
  map = new google.maps.Map(document.getElementById("map"), {
    center: userLocation, zoom: 14, styles: MAP_STYLE,
    mapTypeControl: false, streetViewControl: false, fullscreenControl: false,
    zoomControlOptions: { position: google.maps.ControlPosition.RIGHT_BOTTOM },
    clickableIcons: false,
    gestureHandling: "greedy",
    draggable: true
  });

  installPointerTracking();

  map.addListener("click", (e) => {
    const ignore = shouldIgnoreMapClick();
    pointerStart = null;
    if (ignore) return;
    if (panMode) return;

    if (isCoverage){
      // If a pin click just fired, don't process the same physical tap twice
      if (Date.now() - lastPinClickTime < 300) return;
      // Fallback: snap to nearest pin within a generous radius
      const mpp = 156543.03392 * Math.cos(e.latLng.lat() * Math.PI / 180) / Math.pow(2, map.getZoom());
      const thresholdMeters = Math.max(35, 50 * mpp);
      const nearest = findNearestPin(e.latLng, thresholdMeters);
      if (nearest) addPinToCoverage(nearest);
      else toast("Tap directly on a pin to include it in the covered area.", "info", 2400);
      return;
    }

    if (isTracing) addTracePoint(e.latLng);
    else if (isPinning) addTempPin(e.latLng);
  });

  map.addListener("zoom_changed", updateTraceLabelVisibility);

  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        userLocation = { lat: position.coords.latitude, lng: position.coords.longitude };
        map.setCenter(userLocation);
        const you = new google.maps.Marker({
          position: userLocation, map, title: "You are here", zIndex: 999,
          icon: { path: google.maps.SymbolPath.CIRCLE, scale: 8,
                  fillColor: "#2563eb", fillOpacity: 1,
                  strokeColor: "#ffffff", strokeWeight: 3 }
        });
        drawnOverlays.push(you);
      },
      () => toast("Location permission denied", "error")
    );
  }

  restoreSidebarState();
  fetchPlacesFromSheet().then(() => {
    const draft = loadDraft();
    if (draft && draft.points && draft.points.length > 0 && isMapper()){
      setTimeout(() => {
        showConfirm({
          title: 'Resume unfinished trace?',
          message: `An unfinished trace with ${draft.points.length} unsaved point${draft.points.length === 1 ? '' : 's'} was found from your previous session. Would you like to resume?`,
          okText: 'Resume', cancelText: 'Discard'
        }).then(ok => {
          if (ok){
            startTracing(draft.pendingParentId || null, true);
            draft.points.forEach(p => addTracePoint(new google.maps.LatLng(p.lat, p.lng), true));
            toast('Draft restored', 'success');
          } else localStorage.removeItem(DRAFT_KEY);
        });
      }, 400);
    } else if (draft) {
      localStorage.removeItem(DRAFT_KEY);
    }
  });
}

function lockMapForMarkerDrag(){
  markerInteractionLock = true;
  map.setOptions({ draggable: false, gestureHandling: 'none' });
}
function unlockMapAfterMarkerDrag(){
  setTimeout(() => {
    markerInteractionLock = false;
    map.setOptions({ draggable: true, gestureHandling: 'greedy' });
  }, 180);
}

/* ============================================================ JUMP TO PIN */
function jumpToPin(pinId){
  const entry = pinMarkerObjects.find(e => String(e.item.id) === String(pinId));
  if (!entry){ toast("Pin location not found", "error"); return; }
  const target = entry.realPos || entry.pos;
  map.panTo(target);
  map.setZoom(Math.max(17, map.getZoom()));
  if (lastJumpMarker){ lastJumpMarker.setMap(null); lastJumpMarker = null; }
  lastJumpMarker = new google.maps.Marker({
    position: target, map, zIndex: 2000,
    icon: { path: google.maps.SymbolPath.CIRCLE, scale: 16,
            fillColor: pinColorForType(entry.item.type), fillOpacity: 0.28,
            strokeColor: pinColorForType(entry.item.type), strokeWeight: 3, strokeOpacity: 0.9 }
  });
  setTimeout(() => { if (lastJumpMarker){ lastJumpMarker.setMap(null); lastJumpMarker = null; } }, 2500);
  haptic(12);
}

/* ============================================================ PAN MODE */
function togglePanMode(){
  if (!isTracing && !isPinning && !isCoverage){
    toast("Start trace, coverage, or pin mode first to use pan mode", "info", 2400); return;
  }
  panMode = !panMode;
  updatePanUI();
  applyMarkerDraggability();
  haptic(10);
  if (panMode){
    toast("Pan mode enabled — drag the map freely. Tap Draw to resume.", "info", 3000);
    showMapBadge("Pan mode — drag the map freely", isTracing || isCoverage);
  } else {
    toast("Drawing resumed", "success", 2000);
    updateMapBadgeForCurrentMode();
  }
}
function applyMarkerDraggability(){
  const shouldBeDraggable = (isTracing || isCoverage) && !panMode;
  tempMarkers.forEach(m => m.setDraggable(shouldBeDraggable));
}
function updatePanUI(){
  const inMode = isTracing || isPinning || isCoverage;
  const fab = document.getElementById('panFab');
  const fabIcon = document.getElementById('panFabIcon');
  const fabText = document.getElementById('panFabText');
  fab.hidden = !inMode;
  if (inMode){
    fab.classList.toggle('active', panMode);
    fabIcon.innerHTML = svgIcon(panMode ? 'pencil' : 'pan', 16);
    fabText.textContent = panMode ? "Draw" : "Pan map";
  }
  const btnTrace = document.getElementById('panBtnTrace');
  const btnPin = document.getElementById('panBtnPin');
  const btnCov = document.getElementById('panBtnCoverage');
  [btnTrace, btnPin, btnCov].forEach(b => {
    if (!b) return;
    b.classList.toggle('btn-dark', panMode);
    b.classList.toggle('btn-amber', !panMode);
    b.innerHTML = `<span class="ic">${svgIcon(panMode ? 'pencil' : 'pan', 16)}</span> ${panMode ? 'Draw' : 'Pan'}`;
  });
  ['#traceActiveControls .mode-bar','#pinActiveControls .mode-bar','#coverageActiveControls .mode-bar'].forEach(sel => {
    const bar = document.querySelector(sel);
    if (bar) bar.classList.toggle('dark', panMode);
  });
  if (isTracing) updateTraceControls();
  if (isCoverage) updateCoverageControls();
}
function updateMapBadgeForCurrentMode(){
  if (isTracing){
    if (pendingParentTrace) showMapBadge(`Inside "${pendingParentTrace.item.title}" — tap to add points`, true);
    else showMapBadge("Trace mode — tap the map to draw", true);
  } else if (isCoverage){
    showMapBadge("Coverage mode — tap pins to include them", true);
  } else if (isPinning){
    showMapBadge("Pin mode — tap inside a traced area");
  }
}

/* ============================================================ PIN CHIPS */
document.getElementById('pinTypeChips').addEventListener('click', (e) => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  document.querySelectorAll('#pinTypeChips .chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  renderSubtypeChips(chip.dataset.type);
  haptic(6);
});
document.getElementById('subtypeChips').addEventListener('click', (e) => {
  const chip = e.target.closest('.subtype-chip');
  if (!chip) return;
  selectedSubtype = chip.dataset.subtype || '';
  document.querySelectorAll('#subtypeChips .subtype-chip').forEach(c => {
    c.classList.toggle('active', c.dataset.subtype === selectedSubtype);
  });
  haptic(6);
});
function selectedPin(){
  const activeChip = document.querySelector('#pinTypeChips .chip.active');
  const type = activeChip ? activeChip.dataset.type : 'Landmark';
  return { type, subtype: selectedSubtype || '' };
}

/* ============================================================ PIN SNAPPING / COVERAGE */
function findNearestPin(latLng, maxMeters){
  const target = { lat: latLng.lat(), lng: latLng.lng() };
  let best = null, bestD = Infinity;
  for (const entry of pinMarkerObjects){
    const real = entry.realPos || entry.pos;
    const d = haversineMeters(target, real);
    if (d < bestD){ bestD = d; best = entry; }
  }
  return (best && bestD <= maxMeters) ? best : null;
}
function coverageAlreadyHasPin(pinId){
  return coveragePinEntries.some(e => String(e.item.id) === String(pinId));
}
function addPinToCoverage(entry){
  const pinId = String(entry.item.id);
  if (coverageAlreadyHasPin(pinId)){
    toast("That pin is already part of the coverage", "info", 1800);
    return;
  }

  const real = entry.realPos || entry.pos;
  const latLng = new google.maps.LatLng(real.lat, real.lng);

  pushUndoSnapshot();
  const index = currentTracePoints.length;
  currentTracePoints.push(latLng);
  tempMarkers.push(createTraceMarker(latLng, index));

  coveragePinEntries.push(entry);

  // Non-clickable highlight so it never steals taps from the pin underneath
  const hl = new google.maps.Marker({
    position: real, map, zIndex: 400, clickable: false,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 20,
      fillColor: "#2563eb", fillOpacity: 0.20,
      strokeColor: "#2563eb", strokeWeight: 2.5, strokeOpacity: 0.95
    }
  });
  coverageHighlightMarkers.push(hl);

  renderActiveTrace();
  updateCoverageControls();
  saveDraft();
  haptic(8);
}

/* ============================================================ COVERAGE MODE */
function toggleCoverage(){
  if (isCoverage){ cancelCoverage(); return; }
  if (isTracing){ toast("Finish or cancel your current trace first", "error"); return; }
  if (isPinning){ toast("Finish pinning first", "error"); return; }
  if (isEditing){ toast("Finish editing the shape first", "error"); return; }
  if (rawPinData.length === 0){
    toast("No pins on the map yet — drop some pins first.", "error", 4000);
    return;
  }

  isCoverage = true;
  panMode = false;
  currentTracePoints = [];
  undoStack = [];
  coveragePinEntries = [];
  coverageHighlightMarkers = [];

  document.getElementById("coverageBtn").hidden = true;
  document.getElementById("pinModeBtn").disabled = true;
  document.getElementById("traceBtn").disabled = true;
  document.getElementById("coverageActiveControls").hidden = false;

  // Re-render pins at their TRUE locations for accurate tapping
  rebuildPinMarkers();

  renderActiveTrace();
  updateCoverageControls();
  updatePanUI();
  showMapBadge("Coverage mode — tap pins to include them", true);
  toast("Tap pins one by one. Tap the last pin, then hit Save.", "info", 4800);
  haptic(12);
}
function updateCoverageControls(){
  const n = coveragePinEntries.length;
  const el = document.getElementById("coverageCountText");
  if (panMode){ el.textContent = "Pan mode — drag the map freely"; return; }
  if (n === 0) el.textContent = "Tap pins to include them";
  else if (n < 3) el.textContent = `${n} pin${n === 1 ? '' : 's'} selected — need at least 3`;
  else el.textContent = `${n} pins selected · ready to save`;
}
async function cancelCoverage(){
  if (!isCoverage) return;
  const n = coveragePinEntries.length;
  const ok = await showConfirm({
    title: 'Discard this covered area?',
    message: n > 0 ? `${n} pin${n > 1 ? 's' : ''} will be unselected.` : 'Nothing has been selected yet.',
    okText: 'Discard', cancelText: 'Keep going'
  });
  if (!ok) return;
  resetCoverageMode();
  try { localStorage.removeItem(COVERAGE_DRAFT_KEY); } catch(e){}
  toast("Coverage cancelled", "info", 2200);
}
function resetCoverageMode(){
  isCoverage = false;
  panMode = false;
  currentTracePoints = [];
  undoStack = [];
  coveragePinEntries = [];
  coverageHighlightMarkers.forEach(m => m.setMap(null));
  coverageHighlightMarkers = [];
  tempMarkers.forEach(m => m.setMap(null));
  tempMarkers = [];
  if (activePolyline){ activePolyline.setMap(null); activePolyline = null; }
  if (activePolygon){ activePolygon.setMap(null); activePolygon = null; }
  document.getElementById("coverageBtn").hidden = false;
  document.getElementById("pinModeBtn").disabled = false;
  document.getElementById("traceBtn").disabled = false;
  document.getElementById("coverageActiveControls").hidden = true;
  document.getElementById("panFab").hidden = true;
  // Restore declustered fan so clustered pins are individually tappable again
  rebuildPinMarkers();
  hideMapBadge();
}
function finishCoverage(btn){
  if (coveragePinEntries.length < 3){
    toast("Select at least 3 pins to form a covered area", "error");
    return;
  }
  openCoverageModal();
}

/* -------- Coverage modal -------- */
function openCoverageModal(){
  const modal = document.getElementById("coverageModal");
  const dateInput = document.getElementById("coverageDate");
  const guideInput = document.getElementById("coverageGuide");
  const today = new Date();
  dateInput.value = today.toISOString().substring(0,10);
  guideInput.value = "";
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  setTimeout(() => guideInput.focus(), 80);
}
function closeCoverageModal(){
  document.getElementById("coverageModal").hidden = true;
  document.body.style.overflow = "";
}
document.getElementById("coverageCancel").addEventListener("click", closeCoverageModal);
document.getElementById("coverageModalBackdrop").addEventListener("click", closeCoverageModal);
document.getElementById("coverageSave").addEventListener("click", async () => {
  const dateInput = document.getElementById("coverageDate");
  const guideInput = document.getElementById("coverageGuide");
  const coveredAt = dateInput.value;
  const guide = guideInput.value.trim();

  if (!coveredAt){ toast("Please pick a date", "error"); dateInput.focus(); return; }
  if (!guide){ toast("Please enter the guide", "error"); guideInput.focus(); return; }

  const btn = document.getElementById("coverageSave");
  await withButtonBusy(btn, "Saving…", async () => {
    const pointsSnapshot = currentTracePoints.map(pt => ({
      lat: typeof pt.lat === 'function' ? pt.lat() : pt.lat,
      lng: typeof pt.lng === 'function' ? pt.lng() : pt.lng
    }));
    const pinIds = coveragePinEntries.map(e => String(e.item.id));

    const record = {
      id: Date.now().toString(),
      title: `Covered ${coveredAt}`,
      type: "coverage",
      coveredAt, guide, pinIds,
      coordinates: JSON.stringify({ points: pointsSnapshot, closed: true })
    };
    if (record.coordinates.length > 49000){ toast("Area is too large — try fewer pins.", "error", 6000); return; }

    const expectedTotal = lastRecordCount + 1;
    toast("Saving covered area…");
    try {
      await submitToSheet(record);
      haptic(20);
      toast("Covered area saved — refreshing…", "success");
    } catch(e){
      console.error(e);
      toast("Save failed: " + (e.message || "network error"), "error", 5000);
    }
    closeCoverageModal();
    resetCoverageMode();
    try { localStorage.removeItem(COVERAGE_DRAFT_KEY); } catch(e){}
    const ok = await refreshUntil(expectedTotal);
    toast(ok ? "Synced — covered area visible" : "Saved, but the list has not updated.",
          ok ? "success" : "error", 5000);
  });
});

/* ============================================================ PIN MODE */
function togglePinMode(){
  if (!isMapper()){ toast("You don't have permission to add pins", "error"); return; }
  if (isEditing){ toast("Finish editing the shape first", "error"); return; }
  if (isTracing || isCoverage){ toast("Finish or cancel your current drawing first", "error"); return; }
  if (allTraces.length === 0){ toast("No traced areas yet — draw a trace first.", "error", 4000); return; }
  isPinning = true; currentTempPins = [];
  panMode = false;
  document.getElementById("pinModeBtn").hidden = true;
  document.getElementById("traceBtn").disabled = true;
  document.getElementById("coverageBtn").disabled = true;
  document.getElementById("pinActiveControls").hidden = false;
  updatePanUI();
  showMapBadge("Pin mode — tap inside a traced area");
  haptic(12);
}
function addTempPin(latLng){
  if (allTraces.length === 0){ toast("No traces loaded yet — try refreshing.", "error", 3200); return; }
  const containing = findTraceContaining(latLng);
  if (!containing){
    toast(`Pins must be placed inside a traced area. (${allTraces.length} trace${allTraces.length>1?'s':''} loaded)`, "error", 3600);
    return;
  }
  const sel = selectedPin();
  currentTempPins.push({
    id: Date.now().toString() + Math.random(),
    latitude: latLng.lat(), longitude: latLng.lng(),
    title: sel.type, type: sel.type, subtype: sel.subtype,
    coordinates: null, parentId: String(containing.item.id)
  });
  const marker = new google.maps.Marker({
    position: latLng, map, title: sel.type,
    icon: markerSvgIcon(sel.type, sel.subtype),
    animation: google.maps.Animation.DROP
  });
  tempPinMarkers.push(marker);
  haptic(8);
  const n = currentTempPins.length;
  const subtypeHint = sel.subtype ? ` (${sel.subtype})` : '';
  document.getElementById("pinCountText").textContent =
    `${n} pin${n > 1 ? 's' : ''} ready · ${sel.type}${subtypeHint} inside "${containing.item.title}"`;
}
function undoLastPin(){
  if (!currentTempPins.length) return;
  currentTempPins.pop();
  const m = tempPinMarkers.pop();
  if (m) m.setMap(null);
  haptic(6);
  document.getElementById("pinCountText").textContent = currentTempPins.length
    ? `${currentTempPins.length} pin${currentTempPins.length > 1 ? 's' : ''} ready`
    : 'Tap inside a traced area to drop a pin';
}
async function cancelPinMode(){
  if (!isPinning && !currentTempPins.length) return;
  const n = currentTempPins.length;
  const ok = await showConfirm({
    title: n > 0 ? 'Discard unsaved pins?' : 'Cancel pin mode?',
    message: n > 0 ? `${n} unsaved pin${n > 1 ? 's' : ''} will be discarded.` : 'Nothing has been added yet.',
    okText: n > 0 ? 'Discard' : 'Yes, cancel',
    cancelText: 'Keep going'
  });
  if (!ok) return;
  resetPinMode();
  toast(n > 0 ? `Discarded ${n} pin(s)` : "Pin mode cancelled", "info", 2200);
}
async function finishPinning(btn){
  if (!currentTempPins.length){ toast("Drop at least one pin first", "error"); return; }
  await withButtonBusy(btn, "Saving…", async () => {
    const pins = currentTempPins.slice();
    isPinning = false;
    const n = pins.length;
    const expectedTotal = lastRecordCount + n;
    toast(`Saving ${n} pin(s)…`);
    let failed = 0;
    for (const pin of pins){
      try { await submitToSheet(pin); }
      catch(e){ console.error("Network error:", pin, e); failed++; }
    }
    haptic(20);
    if (failed > 0) toast(`${failed} of ${n} failed to send.`, "error", 5000);
    else toast(`${n} pin(s) submitted — refreshing…`, "success");
    resetPinMode();
    const ok = await refreshUntil(expectedTotal);
    toast(ok ? `Synced — ${n} new pin(s)` : "Saved, but the list has not updated. Tap Refresh.",
          ok ? "success" : "error", 5000);
  });
}
function resetPinMode(){
  isPinning = false; currentTempPins = [];
  panMode = false;
  tempPinMarkers.forEach(m => m.setMap(null));
  tempPinMarkers = [];
  document.getElementById("pinModeBtn").hidden = false;
  document.getElementById("traceBtn").disabled = false;
  document.getElementById("coverageBtn").disabled = false;
  document.getElementById("pinActiveControls").hidden = true;
  document.getElementById("panFab").hidden = true;
  hideMapBadge();
}

/* ============================================================ PIN DETAIL SHEET */
function openPinSheet(pinId){
  const entry = pinMarkerObjects.find(e => String(e.item.id) === String(pinId));
  if (!entry){ toast("Pin not found", "error"); return; }

  currentPinId = String(pinId);
  const sheet = document.getElementById("pinSheet");
  sheet.hidden = false;
  document.body.style.overflow = "hidden";

  const item = entry.item;
  const typeLabel = item.type || 'Pin';
  const subtypeLabel = item.subtype || '';
  const rawTitle = (item.title || '').trim();
  const isCustomName = rawTitle && rawTitle !== typeLabel && rawTitle !== subtypeLabel;
  const displayName = isCustomName ? rawTitle : (subtypeLabel || typeLabel);
  const fullType = subtypeLabel ? `${typeLabel} · ${subtypeLabel}` : typeLabel;

  const iconEl = document.getElementById("pinSheetIcon");
  if (iconEl) iconEl.innerHTML = svgIcon(SUBTYPE_ICONS[subtypeLabel] || (typeLabel.toLowerCase().includes('house') ? 'home' : (typeLabel.toLowerCase().includes('store') ? 'store' : 'landmark')), 22, 2);

  document.getElementById("pinSheetName").textContent = displayName;
  document.getElementById("pinSheetType").textContent = fullType;

  document.getElementById("pinSheetFooter").hidden = !isMapper();

  const textarea = document.getElementById("pinSheetCommentInput");
  textarea.value = "";
  textarea.disabled = false;
  document.getElementById("pinSheetCommentPost").disabled = false;

  loadComments(pinId);
  haptic(8);
}
function closePinSheet(){
  const sheet = document.getElementById("pinSheet");
  if (!sheet) return;
  sheet.hidden = true;
  document.body.style.overflow = "";
  currentPinId = null;
  currentPinComments = [];
}
async function loadComments(pinId){
  const listEl = document.getElementById("pinSheetComments");
  const countEl = document.getElementById("pinSheetCommentCount");
  listEl.innerHTML = `<div class="pin-sheet-comments-empty">Loading…</div>`;
  countEl.textContent = "…";
  try {
    const res = await authPost({ action: 'listComments', pinId, token: currentToken });
    if (!res || res.result !== 'success'){
      listEl.innerHTML = `<div class="pin-sheet-comments-empty" style="color:var(--danger)">Couldn't load comments.</div>`;
      countEl.textContent = "0";
      return;
    }
    currentPinComments = res.comments || [];
    renderComments();
  } catch(e){
    console.error(e);
    listEl.innerHTML = `<div class="pin-sheet-comments-empty" style="color:var(--danger)">Couldn't load comments.</div>`;
    countEl.textContent = "0";
  }
}
function renderComments(){
  const listEl = document.getElementById("pinSheetComments");
  const countEl = document.getElementById("pinSheetCommentCount");
  const comments = currentPinComments;
  countEl.textContent = String(comments.length);
  if (comments.length === 0){
    listEl.innerHTML = `<div class="pin-sheet-comments-empty">No comments yet. Be the first.</div>`;
    return;
  }
  listEl.innerHTML = comments.map(c => {
    const isMine = currentUser && String(c.userId) === String(currentUser.id);
    const canDelete = isMine || isAdmin();
    const parts = (c.displayName || '?').trim().split(/\s+/);
    const initials = (parts.length >= 2 ? parts[0][0] + parts[parts.length - 1][0] : (parts[0] ? parts[0].slice(0, 2) : '?')).toUpperCase();
    const time = formatRelativeTime(c.createdAt);
    const delBtn = canDelete
      ? `<button class="comment-del" data-comment-del="${esc(c.id)}" title="Delete">${svgIcon('trash', 12)}</button>`
      : '';
    return `
      <div class="comment-row">
        <div class="comment-avatar">${esc(initials)}</div>
        <div class="comment-body">
          <div class="comment-head">
            <span class="comment-author">${esc(c.displayName)}</span>
            <span class="comment-time">${esc(time)}</span>
          </div>
          <div class="comment-text">${esc(c.text)}</div>
        </div>
        ${delBtn}
      </div>
    `;
  }).join('');
}
function formatRelativeTime(iso){
  if (!iso) return "";
  const then = new Date(iso).getTime();
  if (isNaN(then)) return "";
  const diff = Date.now() - then;
  const min = Math.floor(diff / 60000);
  if (min < 1) return "just now";
  if (min < 60) return `${min}m ago`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}h ago`;
  const d = Math.floor(hr / 24);
  if (d < 7) return `${d}d ago`;
  return new Date(iso).toLocaleDateString();
}

document.getElementById("pinSheetClose").addEventListener("click", closePinSheet);
document.getElementById("pinSheetRename").addEventListener("click", () => {
  if (!currentPinId) return;
  closePinSheet();
  renamePin(currentPinId);
});
document.getElementById("pinSheetJump").addEventListener("click", () => {
  if (!currentPinId) return;
  jumpToPin(currentPinId);
  closePinSheet();
});
document.getElementById("pinSheetShare").addEventListener("click", () => {
  if (!currentPinId) return;
  const entry = pinMarkerObjects.find(e => String(e.item.id) === String(currentPinId));
  if (!entry){ return; }
  const real = entry.realPos || entry.pos;
  const label = entry.item.title || entry.item.type || "Pin";
  const url = `https://www.google.com/maps/search/?api=1&query=${real.lat},${real.lng}`;
  if (navigator.share){
    navigator.share({ title: label, text: `Location: ${label}`, url })
      .catch(() => { window.open(url, '_blank'); });
  } else {
    window.open(url, '_blank');
  }
  haptic(8);
});
document.getElementById("pinSheetDelete").addEventListener("click", async () => {
  if (!currentPinId) return;
  const entry = pinMarkerObjects.find(e => String(e.item.id) === String(currentPinId));
  const title = entry ? (entry.item.title || entry.item.type) : "this pin";
  closePinSheet();
  deleteRecord(currentPinId, title, "pin", null);
});
document.getElementById("pinSheetCommentPost").addEventListener("click", postComment);
document.getElementById("pinSheetCommentInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey){ e.preventDefault(); postComment(); }
});
async function postComment(){
  if (!currentPinId) return;
  const textarea = document.getElementById("pinSheetCommentInput");
  const btn = document.getElementById("pinSheetCommentPost");
  const text = textarea.value.trim();
  if (!text){ textarea.focus(); return; }
  btn.disabled = true;
  try {
    const res = await authPost({ action: 'addComment', pinId: currentPinId, text, token: currentToken });
    if (!res || res.result !== 'success'){
      toast((res && res.message) || 'Could not post comment', 'error', 4000);
      return;
    }
    textarea.value = "";
    currentPinComments.push(res.comment);
    renderComments();
    haptic(10);
  } catch(e){
    toast('Could not post comment: ' + e.message, 'error', 5000);
  } finally {
    btn.disabled = false;
    textarea.focus();
  }
}
document.getElementById("pinSheetComments").addEventListener("click", async (e) => {
  const btn = e.target.closest("[data-comment-del]");
  if (!btn) return;
  const commentId = btn.dataset.commentDel;
  const ok = await showConfirm({
    title: "Delete comment?",
    message: "This cannot be undone.",
    okText: "Delete", cancelText: "Cancel"
  });
  if (!ok) return;
  try {
    const res = await authPost({ action: 'deleteComment', commentId, token: currentToken });
    if (!res || res.result !== 'success'){ toast((res && res.message) || 'Delete failed', 'error', 4000); return; }
    currentPinComments = currentPinComments.filter(c => String(c.id) !== String(commentId));
    renderComments();
    toast("Comment deleted", "success", 1800);
  } catch(err){
    toast('Delete failed: ' + err.message, 'error', 5000);
  }
});

/* ============================================================ RENAME PIN */
async function renamePin(pinId){
  const entry = pinMarkerObjects.find(e => String(e.item.id) === String(pinId));
  if (!entry){ toast("Pin not found", "error"); return; }

  const typeLabel = entry.item.type || 'Pin';
  const subtypeLabel = entry.item.subtype || '';
  const fullType = subtypeLabel ? `${typeLabel} · ${subtypeLabel}` : typeLabel;
  const rawTitle = (entry.item.title || '').trim();
  const hasCustomName = rawTitle && rawTitle !== typeLabel && rawTitle !== subtypeLabel;

  const result = await showModal({
    title: 'Rename pin',
    message: `Type: ${fullType}\nLeave blank to reset to the type name.`,
    input: hasCustomName ? rawTitle : '',
    okText: 'Save', cancelText: 'Cancel'
  });
  if (!result) return;

  const newTitle = (result.input || '').trim();
  const fallback = subtypeLabel || typeLabel;
  const finalTitle = newTitle || fallback;
  if (finalTitle === entry.item.title) return;

  const updated = { ...entry.item, title: finalTitle };
  toast("Saving…");
  try {
    await submitToSheet(updated);
    haptic(20);
    toast("Renamed", "success");
    await new Promise(r => setTimeout(r, 500));
    clearOverlays();
    await fetchPlacesFromSheet();
  } catch(e){
    console.error("Rename failed:", e);
    toast("Rename failed: " + (e.message || "network error"), "error", 5000);
  }
}

/* ============================================================ TRACE MODE */
function toggleTracing(){ startTracing(null); }

function startTracing(parentId, silent){
  if (!isMapper()){ toast("You don't have permission to trace", "error"); return; }
  if (isEditing){ toast("Finish editing the shape first", "error"); return; }
  if (isPinning || isCoverage){ toast("Finish your current action first", "error"); return; }
  if (isTracing) return;

  pendingParentId = parentId ? String(parentId) : null;
  pendingParentTrace = pendingParentId ? (allTraces.find(t => String(t.item.id) === pendingParentId) || null) : null;

  if (pendingParentId && (!pendingParentTrace || pendingParentTrace.coords.length < 3)){
    toast("Parent must be a closed shape with 3 or more points.", "error", 4000);
    pendingParentId = null; pendingParentTrace = null;
    return;
  }

  isTracing = true;
  panMode = false;
  currentTracePoints = [];
  undoStack = [];

  document.getElementById("traceBtn").hidden = true;
  document.getElementById("pinModeBtn").disabled = true;
  document.getElementById("coverageBtn").disabled = true;
  document.getElementById("traceActiveControls").hidden = false;

  renderActiveTrace();
  updateTraceControls();
  updatePanUI();

  const hint = document.getElementById('traceHintText');
  if (pendingParentTrace){
    fitBoundsToCoords(pendingParentTrace.coords);
    showSubTraceParentOverlay(pendingParentTrace);
    if (hint){
      hint.innerHTML =
        `• <b>Restricted area:</b> "${esc(pendingParentTrace.item.title)}"<br>` +
        `• All points must remain <b>inside</b> the parent area<br>` +
        `• Tap <b>Pan</b> to move the map`;
    }
    showMapBadge(`Sub-trace inside "${pendingParentTrace.item.title}" — stay inside`, true);
    if (!silent) toast(`Drawing inside "${pendingParentTrace.item.title}"`, "info", 4200);
  } else {
    if (hint){
      hint.innerHTML =
        `• <b>Drag the yellow dot</b> to adjust a point's position<br>` +
        `• New traces <b>cannot overlap</b> existing traces<br>` +
        `• Tap <b>Pan</b> to move the map`;
    }
    showMapBadge("Trace mode — tap the map to draw", true);
  }
  haptic(12);
}
function showSubTraceParentOverlay(parentTrace){
  clearSubTraceParentOverlay();
  subTraceParentOverlay = new google.maps.Polygon({
    paths: parentTrace.coords, geodesic: true,
    strokeColor: "#1d4ed8", strokeOpacity: 0.95, strokeWeight: 5,
    fillColor: "#1d4ed8", fillOpacity: 0.10,
    clickable: false, zIndex: 5, map
  });
}
function clearSubTraceParentOverlay(){
  if (subTraceParentOverlay){ subTraceParentOverlay.setMap(null); subTraceParentOverlay = null; }
}
async function cancelTracing(){
  if (!isTracing) return;
  const n = currentTracePoints.length;
  const isSub = !!pendingParentTrace;
  const ok = await showConfirm({
    title: `Discard this ${isSub ? 'sub-trace' : 'trace'}?`,
    message: n > 0 ? `${n} point${n > 1 ? 's' : ''} will be discarded.` : 'Nothing has been drawn yet.',
    okText: 'Discard', cancelText: 'Keep drawing'
  });
  if (!ok) return;
  const parentTitle = isSub ? pendingParentTrace.item.title : null;
  resetTraceMode();
  try { localStorage.removeItem(DRAFT_KEY); } catch(e){}
  toast(parentTitle ? `Sub-trace of "${parentTitle}" cancelled` : "Trace cancelled", "info", 2200);
}
function renderActiveTrace(){
  if (activePolyline){ activePolyline.setMap(null); activePolyline = null; }
  if (activePolygon){ activePolygon.setMap(null); activePolygon = null; }
  if (currentTracePoints.length < 2) return;

  let stroke, fillColor, fillOp, weight;
  if (isCoverage){ stroke = '#2563eb'; fillColor = '#3b82f6'; fillOp = 0.14; weight = 2.5; }
  else if (pendingParentTrace){ stroke = "#1d4ed8"; fillColor = "#1d4ed8"; fillOp = 0.18; weight = 4; }
  else { stroke = "#d97706"; fillColor = "#d97706"; fillOp = 0.18; weight = 4; }

  if (currentTracePoints.length >= 3){
    activePolygon = new google.maps.Polygon({
      paths: currentTracePoints, geodesic: true,
      strokeColor: stroke, strokeOpacity: 0.95, strokeWeight: weight,
      fillColor: fillColor, fillOpacity: fillOp,
      clickable: false, zIndex: 10, map
    });
  } else {
    activePolyline = new google.maps.Polyline({
      path: currentTracePoints, geodesic: true,
      strokeColor: stroke, strokeOpacity: 0.95, strokeWeight: weight,
      clickable: false, zIndex: 10, map
    });
  }
}
function pushUndoSnapshot(){
  undoStack.push({
    points: currentTracePoints.map(pt => ({
      lat: typeof pt.lat === 'function' ? pt.lat() : pt.lat,
      lng: typeof pt.lng === 'function' ? pt.lng() : pt.lng
    })),
    pinEntryIds: coveragePinEntries.map(e => String(e.item.id))
  });
  if (undoStack.length > 100) undoStack.shift();
}
function createTraceMarker(latLng, index){
  const fillColor = isCoverage ? "#2563eb" : (pendingParentTrace ? "#1d4ed8" : "#f59e0b");
  const marker = new google.maps.Marker({
    position: latLng, map,
    draggable: !panMode && !isCoverage, cursor: "grab", zIndex: 100 + index,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: POINT_SCALE,
      fillColor: fillColor, fillOpacity: 1,
      strokeWeight: 2.5, strokeColor: "#ffffff"
    }
  });
  if (isCoverage){
    // Non-draggable; still long-pressable to remove
    attachLongPress(marker, async () => {
      const ok = await showConfirm({
        title: 'Remove this pin from coverage?',
        message: 'You can re-add it later by tapping the pin again.',
        okText: 'Remove', cancelText: 'Keep'
      });
      if (!ok) return;
      const idx = tempMarkers.indexOf(marker);
      if (idx < 0) return;
      pushUndoSnapshot();
      removeCoverageEntryAt(idx);
      renderActiveTrace();
      updateCoverageControls();
      saveDraft();
      haptic(10);
    });
    return marker;
  }
  marker.addListener("dragstart", () => lockMapForMarkerDrag());
  marker.addListener("dragend", (e) => {
    if (pendingParentTrace && !pointInRing_(e.latLng, pendingParentTrace.coords)){
      toast(`Cannot move the point outside "${pendingParentTrace.item.title}".`, "error", 3000);
      marker.setPosition(currentTracePoints[index]);
      unlockMapAfterMarkerDrag();
      return;
    }
    if (PREVENT_TRACE_OVERLAP){
      const conflict = findOtherTraceContainingPoint(e.latLng);
      if (conflict){
        toast(`Can't place this point inside "${conflict.item.title}". Traces can't overlap.`, "error", 3200);
        marker.setPosition(currentTracePoints[index]);
        unlockMapAfterMarkerDrag();
        return;
      }
    }
    currentTracePoints[index] = e.latLng;
    renderActiveTrace();
    tempMarkers[index] = marker;
    saveDraft();
    haptic(6);
    unlockMapAfterMarkerDrag();
  });
  attachLongPress(marker, async () => {
    if (currentTracePoints.length <= 1) return;
    const ok = await showConfirm({
      title: 'Remove this point?', message: 'You can undo this with the Undo button.',
      okText: 'Remove', cancelText: 'Keep'
    });
    if (!ok) return;
    pushUndoSnapshot();
    currentTracePoints.splice(index, 1);
    rebuildTraceMarkers();
    renderActiveTrace();
    if (isTracing) updateTraceControls();
    saveDraft();
    haptic(10);
    toast('Point removed', "info", 1600);
  });
  return marker;
}
function removeCoverageEntryAt(index){
  currentTracePoints.splice(index, 1);
  coveragePinEntries.splice(index, 1);
  const hl = coverageHighlightMarkers.splice(index, 1);
  if (hl[0]) hl[0].setMap(null);
  rebuildTraceMarkers();
}
function addTracePoint(latLng, silent){
  if (pendingParentTrace){
    if (!pointInRing_(latLng, pendingParentTrace.coords)){
      if (!silent) toast(`Tap was outside "${pendingParentTrace.item.title}". Points must remain inside the parent area.`, "error", 3200);
      return;
    }
  }
  if (PREVENT_TRACE_OVERLAP){
    const conflict = findOtherTraceContainingPoint(latLng);
    if (conflict){
      if (!silent) toast(`Can't place a point inside "${conflict.item.title}". Traces can't overlap.`, "error", 3200);
      return;
    }
  }
  pushUndoSnapshot();
  const index = currentTracePoints.length;
  currentTracePoints.push(latLng);
  tempMarkers.push(createTraceMarker(latLng, index));
  renderActiveTrace();
  if (isTracing) updateTraceControls();
  saveDraft();
  if (!silent) haptic(6);
}
function rebuildTraceMarkers(){
  tempMarkers.forEach(m => m.setMap(null));
  tempMarkers = [];
  currentTracePoints.forEach((latLng, index) => {
    tempMarkers.push(createTraceMarker(latLng, index));
  });
}
function undoLastTracePoint(){
  if (!currentTracePoints.length) return;
  pushUndoSnapshot();

  if (isCoverage){
    currentTracePoints.pop();
    const m = tempMarkers.pop();
    if (m) m.setMap(null);
    coveragePinEntries.pop();
    const hl = coverageHighlightMarkers.pop();
    if (hl) hl.setMap(null);
  } else {
    currentTracePoints.pop();
    const m = tempMarkers.pop();
    if (m) m.setMap(null);
  }

  renderActiveTrace();
  if (isTracing) updateTraceControls();
  if (isCoverage) updateCoverageControls();
  saveDraft();
  haptic(6);
}
function performGlobalUndo(){
  if (!(isTracing || isCoverage) || undoStack.length === 0) return;
  const snapshot = undoStack.pop();
  currentTracePoints = snapshot.points.map(p => new google.maps.LatLng(p.lat, p.lng));

  if (isCoverage){
    coverageHighlightMarkers.forEach(m => m.setMap(null));
    coverageHighlightMarkers = [];
    const wantedIds = snapshot.pinEntryIds || [];
    coveragePinEntries = [];
    wantedIds.forEach(pid => {
      const entry = pinMarkerObjects.find(e => String(e.item.id) === String(pid));
      if (!entry) return;
      coveragePinEntries.push(entry);
      const real = entry.realPos || entry.pos;
      const hl = new google.maps.Marker({
        position: real, map, zIndex: 400, clickable: false,
        icon: { path: google.maps.SymbolPath.CIRCLE, scale: 20,
                fillColor: "#2563eb", fillOpacity: 0.20,
                strokeColor: "#2563eb", strokeWeight: 2.5, strokeOpacity: 0.95 }
      });
      coverageHighlightMarkers.push(hl);
    });
  }

  rebuildTraceMarkers();
  renderActiveTrace();
  if (isTracing) updateTraceControls();
  if (isCoverage) updateCoverageControls();
  saveDraft();
  haptic(6);
  toast('Undone', "info", 1400);
}
function updateTraceControls(){
  const n = currentTracePoints.length;
  const el = document.getElementById("traceCountText");
  if (panMode){ el.textContent = "Pan mode — drag the map freely"; return; }
  if (pendingParentTrace){
    el.textContent = `Inside "${pendingParentTrace.item.title}" · ${n} point${n === 1 ? '' : 's'}`;
  } else {
    el.textContent = n === 0 ? "Tap the map to start drawing" : `${n} point${n > 1 ? 's' : ''}${n >= 3 ? ' · area' : ''}`;
  }
}
async function finishTracing(btn){
  if (currentTracePoints.length < 3){ toast("Tap at least 3 points to make an area", "error"); return; }
  const isSub = !!pendingParentTrace;
  if (pendingParentTrace){
    const offending = currentTracePoints.find(pt =>
      !pointInRing_(new google.maps.LatLng(
        typeof pt.lat === 'function' ? pt.lat() : pt.lat,
        typeof pt.lng === 'function' ? pt.lng() : pt.lng
      ), pendingParentTrace.coords));
    if (offending){
      toast(`One or more points are outside "${pendingParentTrace.item.title}". Please adjust them before saving.`, "error", 4000);
      return;
    }
  }
  if (PREVENT_TRACE_OVERLAP){
    const newCoords = currentTracePoints.map(pt => ({
      lat: typeof pt.lat === 'function' ? pt.lat() : pt.lat,
      lng: typeof pt.lng === 'function' ? pt.lng() : pt.lng
    }));
    const conflict = findOverlappingTrace(newCoords);
    if (conflict){
      toast(`This shape would overlap "${conflict.item.title}". Please adjust it before saving.`, "error", 5500);
      return;
    }
  }

  const result = await showModal({
    title: isSub ? 'Name this sub-trace' : 'Name this traced area',
    message: isSub ? `This sub-trace will be inside "${pendingParentTrace.item.title}".` : 'Give it a short, recognizable name.',
    input: isSub ? 'Sub-area' : 'Property Boundary',
    textarea: '', okText: 'Save', cancelText: 'Cancel'
  });
  if (!result || !result.input || !result.input.trim()) return;

  const title = result.input.trim();
  const notes = (result.textarea || '').trim();
  const pointsSnapshot = currentTracePoints.map(pt => ({
    lat: typeof pt.lat === 'function' ? pt.lat() : pt.lat,
    lng: typeof pt.lng === 'function' ? pt.lng() : pt.lng
  }));
  const parentIdSnapshot = pendingParentId;
  const parentTraceSnapshot = pendingParentTrace;

  await withButtonBusy(btn, "Saving…", async () => {
    isTracing = false;
    panMode = false;

    let color;
    if (parentTraceSnapshot){
      try { const parsed = JSON.parse(parentTraceSnapshot.item.coordinates); if (parsed && parsed.color) color = parsed.color; } catch(e){}
    }
    if (!color) color = pickNextPaletteColor(allTraces);

    const traceRecord = {
      id: Date.now().toString(),
      title, type: "trace",
      parentId: parentIdSnapshot || "",
      notes: notes || "",
      coordinates: JSON.stringify({ points: pointsSnapshot, color, closed: true })
    };

    if (traceRecord.coordinates.length > 49000){
      toast(`Trace is too large (${pointsSnapshot.length} points). Try fewer points.`, "error", 6000);
      isTracing = true;
      return;
    }
    const expectedTotal = lastRecordCount + 1;
    toast("Saving trace…");
    try {
      await submitToSheet(traceRecord);
      haptic(20);
      toast("Trace submitted — refreshing…", "success");
    } catch(e){
      console.error("Save error:", e);
      toast("Save failed: " + (e.message || "network error"), "error", 5000);
    }
    resetTraceMode();
    try { localStorage.removeItem(DRAFT_KEY); } catch(e){}
    const ok = await refreshUntil(expectedTotal);
    toast(ok ? `Synced — "${title}" is now visible` : "Saved, but the list has not updated. Tap Refresh.",
          ok ? "success" : "error", 5000);
  });
}
function resetTraceMode(){
  isTracing = false;
  pendingParentId = null;
  pendingParentTrace = null;
  panMode = false;
  currentTracePoints = [];
  undoStack = [];
  tempMarkers.forEach(m => m.setMap(null));
  tempMarkers = [];
  if (activePolyline){ activePolyline.setMap(null); activePolyline = null; }
  if (activePolygon){ activePolygon.setMap(null); activePolygon = null; }
  clearSubTraceParentOverlay();
  document.getElementById("traceBtn").hidden = false;
  document.getElementById("pinModeBtn").disabled = false;
  document.getElementById("coverageBtn").disabled = false;
  document.getElementById("traceActiveControls").hidden = true;
  document.getElementById("panFab").hidden = true;
  hideMapBadge();
}

/* ============================================================ EDIT MODE */
function startEditingTrace(itemId){
  if (!isMapper()){ toast("You don't have permission to edit", "error"); return; }
  if (isPinning || isTracing || isCoverage){ toast("Finish your current action first", "error"); return; }
  if (isEditing){ toast("Already editing a shape", "error"); return; }

  const t = allTraces.find(x => String(x.item.id) === String(itemId));
  if (!t){ toast("Trace not found", "error"); return; }
  if (t.coords.length < 3){ toast("Only shapes with 3 or more points can be edited", "error"); return; }

  isEditing = true;
  editingTraceItem = t.item;
  editingCoords = t.coords.map(c => ({ lat: Number(c.lat), lng: Number(c.lng) }));

  const panel = document.getElementById("editPanel");
  panel.hidden = false;
  const input = document.getElementById("editTraceNameInput");
  const notesInput = document.getElementById("editTraceNotesInput");
  input.value = t.item.title || "";
  notesInput.value = t.item.notes || "";

  document.getElementById("pinModeBtn").disabled = true;
  document.getElementById("traceBtn").disabled = true;
  document.getElementById("coverageBtn").disabled = true;

  document.querySelectorAll('.group.editing, .subgroup.editing').forEach(g => g.classList.remove('editing'));
  const row = document.querySelector(`[data-shape-edit="${CSS.escape(String(itemId))}"]`);
  if (row){
    const card = row.closest('.subgroup') || row.closest('.group');
    if (card) card.classList.add('editing');
  }
  showMapBadge("Edit shape — drag dots · tap edge to add · long-press dot to remove", true);
  renderEditingShape();
  panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  haptic(12);

  if (IS_TOUCH){
    setTimeout(() => { input.focus(); input.select(); input.scrollIntoView({ block: 'center', behavior: 'smooth' }); }, 300);
  }
}
function renderEditingShape(){
  if (editingPolyline){ editingPolyline.setMap(null); editingPolyline = null; }
  if (editingFill){ editingFill.setMap(null); editingFill = null; }
  editingMarkers.forEach(m => m.setMap(null));
  editingMarkers = [];
  if (editingCoords.length < 2) return;

  editingFill = new google.maps.Polygon({
    paths: editingCoords, geodesic: true,
    strokeColor: "#2563eb", strokeOpacity: 1, strokeWeight: 6,
    fillColor: "#2563eb", fillOpacity: 0.12,
    clickable: false, map
  });
  editingPolyline = new google.maps.Polyline({
    path: editingCoords, geodesic: true,
    strokeColor: "#1d4ed8", strokeOpacity: 0, strokeWeight: 22,
    clickable: true, map
  });
  editingPolyline.addListener("click", (e) => handleEdgeClick(e.latLng));

  editingCoords.forEach((c, i) => {
    const marker = new google.maps.Marker({
      position: c, map, draggable: true, cursor: "grab", zIndex: 500 + i,
      icon: { path: google.maps.SymbolPath.CIRCLE, scale: VERTEX_SCALE,
              fillColor: "#f59e0b", fillOpacity: 1, strokeWeight: 2.5, strokeColor: "#ffffff" }
    });
    marker.addListener("dragstart", () => lockMapForMarkerDrag());
    marker.addListener("dragend", (e) => {
      const previous = editingCoords[i];
      editingCoords[i] = { lat: e.latLng.lat(), lng: e.latLng.lng() };
      if (PREVENT_TRACE_OVERLAP && wouldEditedShapeOverlap()){
        editingCoords[i] = previous;
        renderEditingShape();
        toast("That would make the shape overlap another trace.", "error", 3200);
        unlockMapAfterMarkerDrag();
        return;
      }
      updateEditingPaths();
      unlockMapAfterMarkerDrag();
      haptic(6);
    });
    marker.addListener("rightclick", () => removeEditingVertex(i));
    attachLongPress(marker, () => removeEditingVertex(i));
    editingMarkers.push(marker);
  });
}
function wouldEditedShapeOverlap(){
  if (!editingTraceItem || editingCoords.length < 3) return false;
  const myId = String(editingTraceItem.id);
  for (const t of allTraces){
    if (String(t.item.id) === myId) continue;
    if (t.coords.length < 3) continue;
    if (t.parentId && String(t.parentId) === myId) continue;
    if (String(t.item.id) === String(editingTraceItem.parentId || '')) continue;
    if (polygonsOverlap(editingCoords, t.coords)) return true;
  }
  return false;
}
function updateEditingPaths(){
  if (editingPolyline) editingPolyline.setPath(editingCoords);
  if (editingFill) editingFill.setPath(editingCoords);
}
function handleEdgeClick(latLng){
  const pt = { lat: latLng.lat(), lng: latLng.lng() };
  let bestI = 0, bestDist = Infinity, bestProjected = pt;
  for (let i = 0; i < editingCoords.length; i++){
    const a = editingCoords[i];
    const b = editingCoords[(i + 1) % editingCoords.length];
    const proj = projectPointOnSegment(pt, a, b);
    const d = haversineMeters(pt, proj);
    if (d < bestDist){ bestDist = d; bestI = i; bestProjected = proj; }
  }
  const mpp = 156543.03392 * Math.cos(pt.lat * Math.PI / 180) / Math.pow(2, map.getZoom());
  const threshold = (IS_TOUCH ? 45 : 30) * mpp;
  if (bestDist > threshold) return;

  if (PREVENT_TRACE_OVERLAP){
    const test = editingCoords.slice();
    test.splice(bestI + 1, 0, bestProjected);
    if (test.length >= 3){
      const myId = String(editingTraceItem.id);
      for (const t of allTraces){
        if (String(t.item.id) === myId) continue;
        if (t.coords.length < 3) continue;
        if (t.parentId && String(t.parentId) === myId) continue;
        if (String(t.item.id) === String(editingTraceItem.parentId || '')) continue;
        if (polygonsOverlap(test, t.coords)){
          toast("Adding a point there would overlap another trace.", "error", 3200);
          return;
        }
      }
    }
  }
  editingCoords.splice(bestI + 1, 0, bestProjected);
  renderEditingShape();
  haptic(8);
  toast(`Point added (${editingCoords.length} total)`, "success", 1600);
}
async function removeEditingVertex(index){
  if (editingCoords.length <= 3){ toast("A shape needs at least 3 points", "error"); return; }
  const ok = await showConfirm({
    title: 'Remove this point?', message: 'The shape will be redrawn without it.',
    okText: 'Remove', cancelText: 'Keep'
  });
  if (!ok) return;
  editingCoords.splice(index, 1);
  renderEditingShape();
  haptic(10);
  toast(`Point removed (${editingCoords.length} remaining)`, "info", 1600);
}
async function saveEditedTrace(btn){
  if (editingCoords.length < 3){ toast("At least 3 points are required", "error"); return; }
  if (PREVENT_TRACE_OVERLAP && wouldEditedShapeOverlap()){
    toast("This shape would overlap another trace. Please adjust it before saving.", "error", 5000);
    return;
  }
  const nameInput = document.getElementById("editTraceNameInput");
  const notesInput = document.getElementById("editTraceNotesInput");
  const newTitle = (nameInput.value || "").trim();
  if (!newTitle){ toast("Please enter a name", "error"); nameInput.focus(); return; }
  const newNotes = (notesInput.value || "").trim();

  await withButtonBusy(btn, "Saving…", async () => {
    let color = "#2563eb";
    try { const parsed = JSON.parse(editingTraceItem.coordinates); if (parsed && parsed.color) color = parsed.color; } catch(e){}
    const updated = {
      ...editingTraceItem,
      title: newTitle,
      notes: newNotes,
      coordinates: JSON.stringify({ points: editingCoords, color, closed: true })
    };
    if (updated.coordinates.length > 49000){
      toast(`Shape is too large (${editingCoords.length} points).`, "error", 6000); return;
    }
    toast("Saving changes…");
    try {
      await submitToSheet(updated);
      haptic(20);
      toast("Changes submitted — refreshing…", "success");
    } catch(e){
      console.error("Save error:", e);
      toast("Save failed: " + (e.message || "network error"), "error", 5000);
    }
    cancelEditingTrace();
    const ok = await refreshUntil(lastRecordCount, 4);
    toast(ok ? "Synced — shape updated" : "Saved, but the list has not updated. Tap Refresh.",
          ok ? "success" : "error", 5000);
  });
}
function cancelEditingTrace(){
  isEditing = false;
  editingTraceItem = null;
  editingCoords = [];
  editingMarkers.forEach(m => m.setMap(null));
  editingMarkers = [];
  if (editingPolyline){ editingPolyline.setMap(null); editingPolyline = null; }
  if (editingFill){ editingFill.setMap(null); editingFill = null; }
  document.getElementById("editPanel").hidden = true;
  document.getElementById("pinModeBtn").disabled = false;
  document.getElementById("traceBtn").disabled = false;
  document.getElementById("coverageBtn").disabled = false;
  document.querySelectorAll('.group.editing, .subgroup.editing').forEach(g => g.classList.remove('editing'));
  hideMapBadge();
}

/* ============================================================ MAP BADGE */
function showMapBadge(text, amber = false){
  const b = document.getElementById('mapBadge');
  if (!b) return;
  b.hidden = false;
  b.classList.toggle('amber', amber);
  document.getElementById('mapBadgeText').textContent = text;
}
function hideMapBadge(){
  const b = document.getElementById('mapBadge');
  if (b) b.hidden = true;
}

/* ============================================================ ADMIN · USERS */
async function loadUsersIntoAdmin(){
  if (!isAdmin()) return;
  const listEl = document.getElementById('userList');
  const countEl = document.getElementById('userCount');
  if (!listEl) return;
  listEl.innerHTML = `<div class="hint-empty">Loading users…</div>`;
  try {
    const res = await authPost({ action: 'listUsers', token: currentToken });
    if (!res || res.result !== 'success'){
      listEl.innerHTML = `<div class="hint-empty" style="color:var(--danger)">Couldn't load users.</div>`;
      return;
    }
    allUsersCache = res.users || [];
    if (countEl) countEl.textContent = String(allUsersCache.length);
    renderUserList();
  } catch(e){
    console.error(e);
    listEl.innerHTML = `<div class="hint-empty" style="color:var(--danger)">Couldn't load users.</div>`;
  }
}
function renderUserList(){
  const listEl = document.getElementById('userList');
  if (!listEl) return;
  const q = (document.getElementById('userSearchInput')?.value || '').trim().toLowerCase();
  const filtered = allUsersCache.filter(u => {
    if (!q) return true;
    return (u.displayName || '').toLowerCase().includes(q)
        || (u.email || '').toLowerCase().includes(q)
        || (u.role || '').toLowerCase().includes(q);
  });
  if (filtered.length === 0){
    listEl.innerHTML = `<div class="hint-empty">${q ? 'No matching users.' : 'No users yet.'}</div>`;
    return;
  }
  const meId = currentUser ? String(currentUser.id) : '';
  listEl.innerHTML = filtered.map(u => {
    const isMe = String(u.id) === meId;
    const parts = (u.displayName || '?').trim().split(/\s+/);
    const initials = (parts.length >= 2 ? parts[0][0] + parts[parts.length - 1][0] : (parts[0] ? parts[0].slice(0, 2) : '?')).toUpperCase();
    const selectDisabled = isMe ? ' disabled' : '';
    const delDisabled = isMe ? ' disabled' : '';
    return `
      <div class="user-row${isMe ? ' is-me' : ''}" data-user-id="${esc(u.id)}">
        <div class="user-avatar-sm">${esc(initials)}</div>
        <div class="user-row-info">
          <div class="user-row-name">${esc(u.displayName)}${isMe ? ' (you)' : ''}</div>
          <div class="user-row-email">${esc(u.email)}</div>
        </div>
        <select class="user-role-select" data-user-id="${esc(u.id)}"${selectDisabled}>
          <option value="viewer"${u.role === 'viewer' ? ' selected' : ''}>Viewer</option>
          <option value="mapper"${u.role === 'mapper' ? ' selected' : ''}>Mapper</option>
          <option value="admin"${u.role === 'admin' ? ' selected' : ''}>Admin</option>
        </select>
        <button class="user-del-btn" data-user-id="${esc(u.id)}" data-user-name="${esc(u.displayName)}" title="Delete user"${delDisabled}>
          ${svgIcon('trash', 12)}
        </button>
      </div>
    `;
  }).join('');
}
document.getElementById('userSearchInput')?.addEventListener('input', renderUserList);
document.getElementById('userList')?.addEventListener('click', async (e) => {
  const delBtn = e.target.closest('.user-del-btn');
  if (delBtn && !delBtn.disabled){
    const userId = delBtn.dataset.userId;
    const userName = delBtn.dataset.userName || 'this user';
    const ok = await showConfirm({
      title: 'Delete user?',
      message: `"${userName}" will be removed and signed out everywhere. Their pins and traces stay on the map.`,
      okText: 'Delete', cancelText: 'Cancel'
    });
    if (!ok) return;
    try {
      const res = await authPost({ action: 'deleteUser', userId, token: currentToken });
      if (!res || res.result !== 'success'){ toast((res && res.message) || 'Delete failed', 'error', 4000); return; }
      toast(`Deleted "${userName}"`, 'success');
      allUsersCache = allUsersCache.filter(u => String(u.id) !== String(userId));
      document.getElementById('userCount').textContent = String(allUsersCache.length);
      renderUserList();
    } catch(err){
      toast('Delete failed: ' + err.message, 'error', 5000);
    }
  }
});
document.getElementById('userList')?.addEventListener('change', async (e) => {
  const sel = e.target.closest('.user-role-select');
  if (!sel) return;
  const userId = sel.dataset.userId;
  const newRole = sel.value;
  const prevRole = allUsersCache.find(u => String(u.id) === String(userId))?.role;
  if (newRole === prevRole) return;
  sel.disabled = true;
  try {
    const res = await authPost({ action: 'setRole', userId, role: newRole, token: currentToken });
    if (!res || res.result !== 'success'){
      toast((res && res.message) || 'Could not change role', 'error', 4000);
      sel.value = prevRole || 'viewer';
      return;
    }
    const target = allUsersCache.find(u => String(u.id) === String(userId));
    if (target) target.role = newRole;
    toast(`Role updated to ${newRole}`, 'success', 2200);
  } catch(err){
    toast('Could not change role: ' + err.message, 'error', 5000);
    sel.value = prevRole || 'viewer';
  } finally {
    sel.disabled = false;
  }
});

/* ============================================================ DATA */
function clearOverlays(){
  drawnOverlays.forEach(o => o.setMap(null));
  drawnOverlays = [];
  coverageOverlays.forEach(o => o.setMap(null));
  coverageOverlays = [];
  featureIndex.clear();
  traceLabels.forEach(l => l.overlay.setMap(null));
  traceLabels = [];
  if (clusterer) { clusterer.clearMarkers(); clusterer = null; }
  pinMarkerObjects.forEach(e => { if (e.marker) e.marker.setMap(null); });
  pinMarkerObjects = [];
  if (lastJumpMarker){ lastJumpMarker.setMap(null); lastJumpMarker = null; }
}
async function manualRefresh(btn){
  await withButtonBusy(btn, "…", async () => {
    toast("Refreshing…");
    try {
      clearOverlays();
      const count = await fetchPlacesFromSheet();
      toast(`Loaded ${count} record${count === 1 ? '' : 's'}`, "success");
      if (isAdmin() && !document.getElementById('adminRoot').hidden) loadUsersIntoAdmin();
    } catch(e){ toast("Refresh failed", "error"); }
  });
}

async function fetchPlacesFromSheet(){
  const listContainer = document.getElementById("listContainer");
  try {
    const response = await fetch(APPS_SCRIPT_URL + "?nocache=" + Date.now());
    allRecords = await response.json();
    listContainer.innerHTML = "";

    if (!Array.isArray(allRecords) || allRecords.length === 0){
      allTraces = []; allCoverages = []; rawPinData = [];
      lastRecordCount = 0;
      listContainer.innerHTML = `<div class="empty"><span class="big-ic">${svgIcon('map', 40, 1.5)}</span>No saved items yet.</div>`;
      document.getElementById('recordCount').textContent = '0';
      const aggEl = document.getElementById('aggregateCounts');
      if (aggEl) aggEl.innerHTML = '';
      const badgeEl = document.getElementById('recentPinBadge');
      if (badgeEl) badgeEl.hidden = true;
      return 0;
    }

    const traces = [], pins = [], coverages = [];
    allRecords.forEach(item => {
      const type = String(item.type || "");
      if (type === "coverage" && item.coordinates && item.coordinates !== ""){
        let coords = [];
        try {
          let parsed = JSON.parse(item.coordinates);
          if (typeof parsed === 'string') parsed = JSON.parse(parsed);
          if (Array.isArray(parsed)) coords = parsed;
          else if (parsed && parsed.points) coords = parsed.points;
        } catch(e){ return; }
        if (coords.length > 0) coverages.push({ item, coords });
      }
      else if (item.coordinates && item.coordinates !== ""){
        let coords = [], strokeColor = '#2563eb';
        try {
          let parsed = JSON.parse(item.coordinates);
          if (typeof parsed === 'string') parsed = JSON.parse(parsed);
          if (Array.isArray(parsed)) coords = parsed;
          else if (parsed && parsed.points){ coords = parsed.points; strokeColor = parsed.color || strokeColor; }
        } catch(e){ return; }
        if (coords.length > 0) traces.push({ item, coords, strokeColor, parentId: item.parentId ? String(item.parentId) : "" });
      }
      else if (item.latitude && item.longitude){
        pins.push({ item, pos: { lat: parseFloat(item.latitude), lng: parseFloat(item.longitude) } });
      }
    });

    allTraces = traces;
    allCoverages = coverages;

    coverages.forEach(c => {
      if (c.coords.length < 3) return;
      const poly = new google.maps.Polygon({
        paths: c.coords, geodesic: true,
        strokeColor: "#2563eb", strokeOpacity: 0.7, strokeWeight: 2,
        fillColor: "#3b82f6", fillOpacity: 0.08,
        clickable: false, zIndex: 3, map
      });
      coverageOverlays.push(poly);
      featureIndex.set(String(c.item.id), { kind: 'coverage', coords: c.coords });
      traceLabels.push(createCoverageLabel(c));
    });

    const traceById = new Map();
    traces.forEach(t => traceById.set(String(t.item.id), t));
    const roots = [];
    const childrenMap = new Map();
    traces.forEach(t => {
      if (t.parentId && traceById.has(t.parentId)){
        if (!childrenMap.has(t.parentId)) childrenMap.set(t.parentId, []);
        childrenMap.get(t.parentId).push(t);
      } else roots.push(t);
    });

    const sorted = [...traces].sort((a, b) => (a.parentId ? 1 : 0) - (b.parentId ? 1 : 0));

    sorted.forEach(t => {
      const isSub = !!t.parentId && traceById.has(t.parentId);
      const hasChildren = childrenMap.has(String(t.item.id));
      let fillOpacity, strokeWeight, strokeOpacity;
      if (isSub){ fillOpacity = 0.24; strokeWeight = 3; strokeOpacity = 0.9; }
      else if (hasChildren){ fillOpacity = 0.06; strokeWeight = 4; strokeOpacity = 0.65; }
      else { fillOpacity = 0.18; strokeWeight = 4; strokeOpacity = 0.85; }

      featureIndex.set(String(t.item.id), { kind:'trace', coords: t.coords });
      let poly;
      if (t.coords.length >= 3){
        poly = new google.maps.Polygon({
          paths: t.coords, geodesic: true,
          strokeColor: t.strokeColor, strokeOpacity, strokeWeight,
          fillColor: t.strokeColor, fillOpacity,
          clickable: false, map
        });
      } else {
        poly = new google.maps.Polyline({
          path: t.coords, geodesic: true,
          strokeColor: t.strokeColor, strokeOpacity: 0.85, strokeWeight: 4,
          clickable: false, map
        });
      }
      drawnOverlays.push(poly);
    });

    const pinsByTraceId = new Map();
    const unassignedPins = [];
    pins.forEach(pinObj => {
      let containing = null;
      if (pinObj.item.parentId){
        containing = allTraces.find(t => String(t.item.id) === String(pinObj.item.parentId)) || null;
      }
      if (!containing) containing = findTraceContaining(new google.maps.LatLng(pinObj.pos));
      if (containing){
        const key = String(containing.item.id);
        if (!pinsByTraceId.has(key)) pinsByTraceId.set(key, []);
        pinsByTraceId.get(key).push(pinObj);
      } else unassignedPins.push(pinObj);
      featureIndex.set(String(pinObj.item.id), { kind:'pin', pos: pinObj.pos });
    });

    // Store raw pin data; rebuildPinMarkers() chooses positions based on mode
    rawPinData = pins.map(p => ({ item: p.item, pos: p.pos, realPos: p.pos }));
    rebuildPinMarkers();

    traces.forEach(t => {
      if (t.coords.length < 3) return;
      const cnt = (pinsByTraceId.get(String(t.item.id)) || []).length;
      traceLabels.push(createTraceLabel(t, cnt));
    });
    updateTraceLabelVisibility();

    roots.forEach(root => {
      const children = childrenMap.get(String(root.item.id)) || [];
      const directPins = pinsByTraceId.get(String(root.item.id)) || [];
      renderParentGroup(root, children, directPins, pinsByTraceId);
    });
    if (unassignedPins.length) renderUnassignedGroup(unassignedPins);
    if (coverages.length) renderCoverageGroup(coverages);

    lastRecordCount = allRecords.length;
    document.getElementById('recordCount').textContent = allRecords.length;

    renderAggregateCounts(traces, pins, coverages);
    updateRecentBadge(pins);
    applySearchFilter();

    return allRecords.length;

  } catch (error){
    console.error("Error loading sheet data:", error);
    listContainer.innerHTML = `<div class="empty" style="color:var(--danger)">Couldn't load your saved items.</div>`;
    return -1;
  }
}

/* ============================================================ AGGREGATES + RECENT + SEARCH */
function renderAggregateCounts(traces, pins, coverages){
  const el = document.getElementById('aggregateCounts');
  if (!el) return;
  const mains = traces.filter(t => !t.parentId).length;
  const subs  = traces.filter(t =>  t.parentId).length;
  const counts = countPinsByType(pins);
  const covCount = (coverages || []).length;

  const chips = [];
  if (mains) chips.push(`<span class="stat-chip trace">${mains} area${mains === 1 ? '' : 's'}</span>`);
  if (subs)  chips.push(`<span class="stat-chip">${subs} sub-area${subs === 1 ? '' : 's'}</span>`);
  if (covCount) chips.push(`<span class="stat-chip coverage">${covCount} covered</span>`);
  if (counts.house)    chips.push(`<span class="pin-chip house">${svgIcon('home',13,2.2)}<span>${counts.house}</span></span>`);
  if (counts.store)    chips.push(`<span class="pin-chip store">${svgIcon('store',13,2.2)}<span>${counts.store}</span></span>`);
  if (counts.landmark) chips.push(`<span class="pin-chip landmark">${svgIcon('landmark',13,2.2)}<span>${counts.landmark}</span></span>`);
  if (counts.other)    chips.push(`<span class="pin-chip other"><span>${counts.other}</span></span>`);
  el.innerHTML = chips.join('');
}

let knownPinIds = new Set();
let recentBadgeTimer = null;
let hasLoadedOnce = false;
function updateRecentBadge(pins){
  const badge = document.getElementById('recentPinBadge');
  if (!badge) return;
  const currentIds = pins.map(p => String(p.item.id));
  if (!hasLoadedOnce){
    currentIds.forEach(id => knownPinIds.add(id));
    hasLoadedOnce = true;
    return;
  }
  const fresh = pins.filter(p => !knownPinIds.has(String(p.item.id)));
  currentIds.forEach(id => knownPinIds.add(id));
  if (fresh.length === 0) return;
  const c = countPinsByType(fresh);
  const parts = [];
  if (c.house)    parts.push(`${c.house} house${c.house === 1 ? '' : 's'}`);
  if (c.store)    parts.push(`${c.store} store${c.store === 1 ? '' : 's'}`);
  if (c.landmark) parts.push(`${c.landmark} landmark${c.landmark === 1 ? '' : 's'}`);
  if (c.other)    parts.push(`${c.other} other`);
  badge.textContent = `${fresh.length} new pin${fresh.length === 1 ? '' : 's'} added — ${parts.join(', ')}`;
  badge.hidden = false;
  clearTimeout(recentBadgeTimer);
  recentBadgeTimer = setTimeout(() => { badge.hidden = true; }, 8000);
}

function applySearchFilter(){
  const input = document.getElementById('searchInput');
  const clearBtn = document.getElementById('searchClear');
  if (!input || !clearBtn) return;
  const q = (input.value || '').trim().toLowerCase();
  clearBtn.hidden = !q;
  document.querySelectorAll('#listContainer .group').forEach(group => {
    const groupTitle = (group.querySelector('.group-title')?.textContent || '').toLowerCase();
    let groupMatch = !q || groupTitle.includes(q);
    group.querySelectorAll('.subgroup').forEach(sg => {
      const sgTitle = (sg.querySelector('.subgroup-title')?.textContent || '').toLowerCase();
      let sgMatch = !q || sgTitle.includes(q);
      let pinHit = false;
      sg.querySelectorAll('.pin-row').forEach(row => {
        const t = (row.dataset.search || '').toLowerCase();
        const hit = !q || t.includes(q);
        row.classList.toggle('filtered-out', !!q && !hit);
        if (q && hit) pinHit = true;
      });
      const visible = sgMatch || pinHit;
      sg.style.display = visible ? '' : 'none';
      if (q && visible) groupMatch = true;
    });
    let directHit = false;
    group.querySelectorAll('.pin-details').forEach(det => {
      if (det.closest('.subgroup')) return;
      det.querySelectorAll('.pin-row').forEach(row => {
        const t = (row.dataset.search || '').toLowerCase();
        const hit = !q || t.includes(q);
        row.classList.toggle('filtered-out', !!q && !hit);
        if (q && hit) directHit = true;
      });
    });
    if (directHit) groupMatch = true;
    group.style.display = groupMatch ? '' : 'none';
    if (q && groupMatch) group.classList.add('open');
  });
}
function installSearch(){
  const input = document.getElementById('searchInput');
  const clearBtn = document.getElementById('searchClear');
  if (!input || !clearBtn) return;
  input.addEventListener('input', applySearchFilter);
  clearBtn.addEventListener('click', () => { input.value = ''; applySearchFilter(); input.focus(); });
}

/* ============================================================ RENDERING */
function traceActionButtons(id, title, isSub){
  const zoomBtn = `<button class="zoom-btn" data-zoom="${esc(id)}" title="Zoom">${svgIcon('target', isSub ? 14 : 15)}</button>`;
  if (!isMapper()) return zoomBtn;
  return zoomBtn + `
    <button class="icon-btn edit" data-shape-edit="${esc(id)}" title="Edit shape">${svgIcon('edit', isSub ? 13 : 14)}</button>
    ${isSub ? '' : `<button class="icon-btn sub" data-add-sub="${esc(id)}" title="Add sub-trace">${svgIcon('plus', 14)}</button>`}
    <button class="icon-btn del" data-del="${esc(id)}" data-del-title="${esc(title)}" data-del-kind="trace" title="Delete trace">${svgIcon('trash', isSub ? 13 : 14)}</button>
  `;
}

function renderParentGroup(rootTrace, children, directPins, pinsByTraceId){
  const container = document.getElementById("listContainer");
  const group = document.createElement("div");
  group.className = "group";
  group.dataset.traceId = String(rootTrace.item.id);

  const treePins = [...directPins];
  children.forEach(c => { (pinsByTraceId.get(String(c.item.id)) || []).forEach(p => treePins.push(p)); });
  const treeCounts = countPinsByType(treePins);

  const childrenHtml = children.map(child => renderSubGroupHtml(child, pinsByTraceId.get(String(child.item.id)) || [])).join('');
  const directDetailsHtml = directPins.length ? renderPinDetails(directPins, `parent-${rootTrace.item.id}`) : '';
  const notesHtml = rootTrace.item.notes ? `<div class="trace-notes">${esc(rootTrace.item.notes)}</div>` : '';

  group.innerHTML = `
    <div class="group-head" data-toggle>
      <span class="caret">▶</span>
      <span class="swatch" style="background:${esc(rootTrace.strokeColor)}"></span>
      <span class="group-title">${esc(rootTrace.item.title)}</span>
      ${traceActionButtons(rootTrace.item.id, rootTrace.item.title, false)}
    </div>
    <div class="group-body"><div class="inner">
      ${notesHtml}
      ${renderPinSummary(treeCounts, directPins.length > 0, `parent-${rootTrace.item.id}`)}
      ${childrenHtml}
      ${directDetailsHtml}
    </div></div>
  `;
  container.appendChild(group);
}

function renderSubGroupHtml(subTrace, childPins){
  const counts = countPinsByType(childPins);
  const detailsHtml = childPins.length ? renderPinDetails(childPins, `sub-${subTrace.item.id}`) : '';
  const notesHtml = subTrace.item.notes ? `<div class="trace-notes">${esc(subTrace.item.notes)}</div>` : '';
  return `
    <div class="subgroup" data-trace-id="${esc(subTrace.item.id)}">
      <div class="subgroup-head" data-toggle-sub>
        <span class="caret">▶</span>
        <span class="swatch" style="background:${esc(subTrace.strokeColor)}"></span>
        <span class="subgroup-title">${esc(subTrace.item.title)}</span>
        ${traceActionButtons(subTrace.item.id, subTrace.item.title, true)}
      </div>
      ${notesHtml}
      ${renderPinSummary(counts, childPins.length > 0, `sub-${subTrace.item.id}`)}
      ${detailsHtml}
    </div>
  `;
}

function renderPinDetails(pins, key){
  const rows = pins.map(p => {
    const color = pinColorForType(p.item.type);
    const typeLabel = p.item.type || 'Pin';
    const subtypeLabel = p.item.subtype || '';
    const rawTitle = (p.item.title || '').trim();
    const isCustomName = rawTitle && rawTitle !== typeLabel && rawTitle !== subtypeLabel;
    const displayName = isCustomName ? rawTitle : (subtypeLabel || typeLabel);
    let badgeText = '';
    if (isCustomName) badgeText = subtypeLabel ? `${typeLabel} · ${subtypeLabel}` : typeLabel;
    else if (subtypeLabel) badgeText = typeLabel;
    const searchText = (rawTitle + ' ' + typeLabel + ' ' + subtypeLabel).toLowerCase();
    const commentIcon = `<span class="pin-go" style="margin-right:2px;opacity:.65">${svgIcon('comment', 13, 2)}</span>`;
    return `
      <div class="pin-row" data-goto-pin="${esc(p.item.id)}" data-search="${esc(searchText)}">
        <span class="pin-dot" style="background:${color}"></span>
        <span class="pin-label">
          <span class="pin-name">${esc(displayName)}</span>
          ${badgeText ? `<span class="pin-type-small">${esc(badgeText)}</span>` : ''}
        </span>
        ${commentIcon}
        <span class="pin-go">${svgIcon('arrowRight', 13, 2.2)}</span>
      </div>`;
  }).join('');
  return `<div class="pin-details" data-pins-for="${esc(key)}"><div class="pin-details-list">${rows}</div></div>`;
}

function renderUnassignedGroup(unassignedPins){
  const container = document.getElementById("listContainer");
  const group = document.createElement("div");
  group.className = "group";
  const counts = countPinsByType(unassignedPins);
  group.innerHTML = `
    <div class="group-head" data-toggle>
      <span class="caret">▶</span>
      <span class="swatch" style="background:#94a3b8"></span>
      <span class="group-title" style="color:var(--text-dim)">Unassigned pins</span>
    </div>
    <div class="group-body"><div class="inner">
      ${renderPinSummary(counts, unassignedPins.length > 0, 'unassigned')}
      ${renderPinDetails(unassignedPins, 'unassigned')}
    </div></div>
  `;
  container.appendChild(group);
}

function renderCoverageGroup(coverages){
  const container = document.getElementById("listContainer");
  const group = document.createElement("div");
  group.className = "group";
  const canDelete = isMapper();

  const rows = coverages.map(c => {
    const date = c.item.coveredAt || "—";
    const guide = c.item.guide || "—";
    const pinCount = String(c.item.pinIds || "").split(",").filter(s => s.trim()).length;
    const searchText = (date + ' ' + guide + ' coverage').toLowerCase();
    const delBtn = canDelete
      ? `<button class="pin-del" data-del="${esc(c.item.id)}" data-del-title="Covered ${esc(date)}" data-del-kind="coverage" title="Delete">${svgIcon('trash',13)}</button>`
      : '';
    return `
      <div class="pin-row" data-coverage-id="${esc(c.item.id)}" data-search="${esc(searchText)}">
        <span class="pin-dot" style="background:#2563eb"></span>
        <span class="pin-label">
          <span class="pin-name">${esc(date)}</span>
          <span class="pin-type-small">${pinCount} pin${pinCount === 1 ? '' : 's'} · ${esc(guide)}</span>
        </span>
        <button class="zoom-btn" data-zoom="${esc(c.item.id)}" title="Zoom">${svgIcon('target',13)}</button>
        ${delBtn}
      </div>
    `;
  }).join('');

  group.innerHTML = `
    <div class="group-head" data-toggle>
      <span class="caret">▶</span>
      <span class="swatch" style="background:#2563eb"></span>
      <span class="group-title" style="color:var(--text-dim)">Covered areas</span>
      <span class="pin-type-small" style="margin-left:auto;flex-shrink:0;background:var(--surface-2);color:var(--text-dim);padding:3px 8px;border-radius:99px;font-size:.62rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;">${coverages.length}</span>
    </div>
    <div class="group-body"><div class="inner">
      <div class="pin-details" style="display:block;padding:0 10px 10px">
        <div class="pin-details-list">${rows}</div>
      </div>
    </div></div>
  `;
  container.appendChild(group);
}

/* ============================================================ LIST CLICKS */
document.getElementById('listContainer').addEventListener('click', (e) => {
  const pinDelBtn = e.target.closest('.pin-del');
  if (pinDelBtn){
    e.stopPropagation();
    deleteRecord(pinDelBtn.dataset.del, pinDelBtn.dataset.delTitle, pinDelBtn.dataset.delKind, pinDelBtn);
    return;
  }
  const showPinsBtn = e.target.closest('[data-toggle-pins]');
  if (showPinsBtn){
    e.stopPropagation();
    const scope = showPinsBtn.closest('.group, .subgroup');
    if (scope){
      scope.classList.toggle('pins-open');
      const isOpen = scope.classList.contains('pins-open');
      showPinsBtn.innerHTML = isOpen ? 'Hide&nbsp;▴' : 'Show&nbsp;▾';
    }
    haptic(6);
    return;
  }
  const gotoPinRow = e.target.closest('[data-goto-pin]');
  if (gotoPinRow){ e.stopPropagation(); openPinSheet(gotoPinRow.dataset.gotoPin); return; }

  const addSubBtn = e.target.closest('[data-add-sub]');
  if (addSubBtn){ e.stopPropagation(); startTracing(addSubBtn.dataset.addSub); return; }

  const shapeEditBtn = e.target.closest('[data-shape-edit]');
  if (shapeEditBtn){ e.stopPropagation(); startEditingTrace(shapeEditBtn.dataset.shapeEdit); return; }

  const zoomBtn = e.target.closest('[data-zoom]');
  if (zoomBtn){
    e.stopPropagation();
    const f = featureIndex.get(zoomBtn.dataset.zoom);
    if (f && (f.kind === 'trace' || f.kind === 'coverage')) fitBoundsToCoords(f.coords);
    return;
  }
  const subHead = e.target.closest('[data-toggle-sub]');
  if (subHead){
    e.stopPropagation();
    subHead.closest('.subgroup').classList.toggle('open');
    haptic(4);
    return;
  }
  const head = e.target.closest('[data-toggle]');
  if (head){
    head.closest('.group').classList.toggle('open');
    haptic(4);
  }
});

/* ============================================================ DELETE */
async function deleteRecord(id, title, kind, btn){
  if (kind === 'coverage'){
    const canDelete = isMapper() || (currentUser && allCoverages.find(c => String(c.item.id) === String(id) && String(c.item.createdBy) === String(currentUser.id)));
    if (!canDelete){ toast("You can only delete your own covered areas", "error"); return; }
  } else if (!isMapper()){
    toast("You don't have permission to delete", "error"); return;
  }
  if (isEditing){ toast("Finish editing the shape first", "error"); return; }

  let childCount = 0;
  if (kind === 'trace') childCount = allTraces.filter(t => t.parentId === String(id)).length;

  let message;
  if (kind === 'trace'){
    message = `Delete the trace "${title}"?`;
    if (childCount > 0) message += `\n\nThis trace has ${childCount} sub-trace(s). They will become top-level traces.`;
    message += `\n\nPins inside it will NOT be deleted — they'll move to "Unassigned pins".`;
  } else if (kind === 'coverage'){
    message = `Delete this covered area?`;
  } else message = `Delete this pin?`;

  const ok = await showConfirm({
    title: kind === 'trace' ? 'Delete trace?' : (kind === 'coverage' ? 'Delete covered area?' : 'Delete pin?'),
    message, okText: 'Delete', cancelText: 'Cancel'
  });
  if (!ok) return;

  await withButtonBusy(btn, "…", async () => {
    toast("Deleting…");
    try {
      const result = await deleteOnServer(id);
      haptic(20);
      const orphaned = (result && result.orphanedCount) ? result.orphanedCount : 0;
      if (orphaned > 0) toast(`Deleted — ${orphaned} pin${orphaned === 1 ? '' : 's'} moved to Unassigned`, "success", 4000);
      else toast("Deleted", "success");
      await new Promise(r => setTimeout(r, 400));
      clearOverlays();
      await fetchPlacesFromSheet();
    } catch(e){
      console.error("Delete failed:", e);
      toast(`Delete failed: ${e.message}`, "error", 5000);
    }
  });
}

/* ============================================================ BOTTOM SHEET DRAG */
function installBottomSheet(){
  if (!IS_TOUCH || window.innerWidth > 768) return;
  const sidebar = document.getElementById('sidebar');
  const handle = document.getElementById('sheetHandle');
  if (!sidebar || !handle) return;

  const STATES = { collapsed: 18, half: 45, full: 85 };
  let startY = 0, startHeightVh = 45;
  let dragging = false, moved = false;
  let lastTap = 0, tapTimer = null;

  const setHeight = vh => sidebar.style.setProperty('--sheet-height', vh + 'dvh');
  const getHeightVh = () => (sidebar.getBoundingClientRect().height / window.innerHeight) * 100;

  handle.addEventListener('touchstart', (e) => {
    if (e.target.closest('.sheet-toggle')) return;
    startY = e.touches[0].clientY;
    startHeightVh = getHeightVh();
    dragging = true; moved = false;
    sidebar.classList.add('dragging');
    e.preventDefault();
  }, { passive: false });
  handle.addEventListener('touchmove', (e) => {
    if (!dragging) return;
    const dy = e.touches[0].clientY - startY;
    if (Math.abs(dy) > 6) moved = true;
    const newVh = Math.max(15, Math.min(92, startHeightVh - (dy / window.innerHeight) * 100));
    setHeight(newVh);
    e.preventDefault();
  }, { passive: false });
  handle.addEventListener('touchend', () => {
    if (!dragging) return;
    dragging = false;
    sidebar.classList.remove('dragging');
    if (moved){
      const current = getHeightVh();
      let nearest = 'half', bestDist = Infinity;
      Object.entries(STATES).forEach(([name, v]) => {
        const d = Math.abs(current - v);
        if (d < bestDist){ bestDist = d; nearest = name; }
      });
      setHeight(STATES[nearest]);
      sidebar.classList.toggle('sheet-collapsed', nearest === 'collapsed');
      haptic(6);
      lastTap = 0; clearTimeout(tapTimer);
      return;
    }
    const now = Date.now();
    if (now - lastTap < 320){
      clearTimeout(tapTimer);
      const current = getHeightVh();
      const expand = current < 60;
      setHeight(expand ? STATES.full : STATES.collapsed);
      sidebar.classList.toggle('sheet-collapsed', !expand);
      haptic(8);
      lastTap = 0;
      return;
    }
    lastTap = now;
    clearTimeout(tapTimer);
    tapTimer = setTimeout(() => {
      const current = getHeightVh();
      const collapsed = current < 30;
      setHeight(collapsed ? STATES.half : STATES.collapsed);
      sidebar.classList.toggle('sheet-collapsed', !collapsed);
      haptic(6);
    }, 300);
  });
}

/* ============================================================ KEYBOARD */
function installKeyboardShortcuts(){
  document.addEventListener('keydown', (e) => {
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;
    if (e.ctrlKey || e.metaKey){
      if (e.key === 'z' || e.key === 'Z'){
        if (isTracing || isCoverage){ e.preventDefault(); performGlobalUndo(); }
        return;
      }
      if (e.key === 's' || e.key === 'S'){
        e.preventDefault();
        if (isTracing && currentTracePoints.length >= 3) finishTracing(document.getElementById('saveTraceBtn'));
        else if (isCoverage && coveragePinEntries.length >= 3) finishCoverage(document.getElementById('saveCoverageBtn'));
        else if (isPinning && currentTempPins.length) finishPinning(document.getElementById('savePinsBtn'));
        else if (isEditing && editingCoords.length >= 3) saveEditedTrace(document.getElementById('saveEditBtn'));
        return;
      }
      if (e.key === 'b' || e.key === 'B'){ e.preventDefault(); toggleSidebar(); return; }
      return;
    }
    switch (e.key){
      case 'Escape':
        if (!document.getElementById('pinSheet').hidden){ closePinSheet(); }
        else if (!document.getElementById('coverageModal').hidden){ closeCoverageModal(); }
        else if (!document.getElementById('adminRoot').hidden){ closeAdminPanel(); }
        else if (isTracing) cancelTracing();
        else if (isCoverage) cancelCoverage();
        else if (isPinning) cancelPinMode();
        else if (isEditing) cancelEditingTrace();
        break;
      case 't': case 'T':
        if (!isTracing && !isPinning && !isEditing && !isCoverage) toggleTracing();
        break;
      case 'p': case 'P':
        if (!isTracing && !isPinning && !isEditing && !isCoverage) togglePinMode();
        break;
      case 'c': case 'C':
        if (!isTracing && !isPinning && !isEditing && !isCoverage) toggleCoverage();
        break;
      case 'd': case 'D':
        if (isTracing || isPinning || isCoverage) togglePanMode();
        break;
    }
  });
}

/* ============================================================ LEAVE WARNING */
function installLeaveWarning(){
  window.addEventListener('beforeunload', (e) => {
    const busy = (isTracing || isCoverage) && currentTracePoints.length > 0;
    const busyPin = isPinning && currentTempPins.length > 0;
    const busyEdit = isEditing;
    if (busy || busyPin || busyEdit){
      saveDraft();
      e.preventDefault();
      e.returnValue = '';
      return '';
    }
  });
}

/* ============================================================ NAV */
function fitBoundsToCoords(coords){
  const bounds = new google.maps.LatLngBounds();
  coords.forEach(pt => bounds.extend(pt));
  map.fitBounds(bounds, { top: 70, right: 70, bottom: 70, left: 70 });
}
function goToCurrentGPS(){
  map.panTo(userLocation);
  map.setZoom(16);
  haptic(10);
  toast("Centered on your location");
}

/* ============================================================ BOOT */
function onAuthReady(){
  applyRoleToBody();
  paintUserBar();
}

window.addEventListener('load', async () => {
  renderStaticIcons();
  renderSubtypeChips('House');
  installBottomSheet();
  installKeyboardShortcuts();
  installLeaveWarning();
  installSearch();

  // Bridge: Google Maps may already have called window.initMap (the shim above).
  // Now that app.js is fully evaluated, wire the real initMap in and fire it if needed.
  window.__realInitMap = initMap;
  if (window.__initMapPending){
    window.__initMapPending = false;
    initMap();
  }

  const user = await verifyStoredToken();
  if (!user){ openAuthModal(); return; }
  onAuthReady();
});