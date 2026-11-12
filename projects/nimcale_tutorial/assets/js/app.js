/* Nimcale tutorial: language switching, animation toggle, table of contents, lightbox. No dependencies. */
(function () {
  "use strict";
  var I = window.NIMCALE_I18N, root = document.documentElement;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode / file:// */ } }
  };

  // ---------------------------------------------------------------- language
  var codes = I.langs.map(function (l) { return l[0]; });
  function detect() {
    var saved = store.get("nimcale_lang");
    if (saved && codes.indexOf(saved) >= 0) return saved;
    var navs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || ""];
    for (var i = 0; i < navs.length; i++) {
      var n = (navs[i] || "").toLowerCase();
      if (!n) continue;
      if (n.indexOf("pt") === 0) return "pt-BR";            // pt-PT users also get the Portuguese page
      if (n.indexOf("zh") === 0) return "zh-CN";
      for (var j = 0; j < codes.length; j++) {
        if (codes[j].toLowerCase() === n || codes[j].toLowerCase().split("-")[0] === n.split("-")[0]) return codes[j];
      }
    }
    return I.def;
  }
  var sel = document.getElementById("langSel");
  I.langs.forEach(function (l) {
    var o = document.createElement("option");
    o.value = l[0]; o.textContent = l[1]; sel.appendChild(o);
  });
  /* ---- release config (window.NIMCALE_CONFIG at the top of index.html) ---- */
  var DEF = {
    VERSION: "1.1.0", RELEASE_TAG: "v{VERSION}", GITHUB_REPO: "https://github.com/cleitinhodev/nimcale",
    RELEASE_URL: "{GITHUB_REPO}/releases/tag/{RELEASE_TAG}", RELEASES_URL: "{GITHUB_REPO}/releases",
    WINDOWS_ZIP_URL: "{GITHUB_REPO}/releases/download/{RELEASE_TAG}/Nimcale-{VERSION}-windows-x64.zip",
    LINUX_APPIMAGE_URL: "{GITHUB_REPO}/releases/download/{RELEASE_TAG}/Nimcale-{VERSION}-x86_64.AppImage",
    LINUX_TARGZ_URL: "{GITHUB_REPO}/releases/download/{RELEASE_TAG}/Nimcale-{VERSION}-linux-x86_64.tar.gz",
    WINDOWS_SIZE: "", APPIMAGE_SIZE: "", TARGZ_SIZE: "", SCREENSHOTS_VERSION: "{VERSION}",
    SITE_URL: "https://www.bugzinho.com/", DONATE_URL: "https://www.bugzinho.com/donate"
  };
  var C = {}, user = window.NIMCALE_CONFIG || {};
  Object.keys(DEF).forEach(function (k) { C[k] = String(user[k] != null && user[k] !== "" ? user[k] : DEF[k]); });
  Object.keys(user).forEach(function (k) { if (!(k in C)) C[k] = String(user[k]); });
  function fill(str) {
    return String(str).replace(/\{([A-Z0-9_]+)\}/g, function (m, k) { return (k in C) ? C[k] : m; });
  }
  for (var pass = 0; pass < 6; pass++) Object.keys(C).forEach(function (k) { C[k] = fill(C[k]); });
  function fileOf(u) { try { return decodeURIComponent(u.split("?")[0].split("#")[0].split("/").pop()); } catch (e) { return u.split("/").pop(); } }
  C.WINDOWS_FILE = fileOf(C.WINDOWS_ZIP_URL);
  C.APPIMAGE_FILE = fileOf(C.LINUX_APPIMAGE_URL);
  C.TARGZ_FILE = fileOf(C.LINUX_TARGZ_URL);
  C.TARGZ_DIR = C.TARGZ_FILE.replace(/\.tar\.gz$|\.tgz$/, "");
  window.NIMCALE_CONFIG_RESOLVED = C;
  document.querySelectorAll("[data-cfg-href]").forEach(function (el) { el.setAttribute("href", fill(el.getAttribute("data-cfg-href"))); });
  document.querySelectorAll("[data-cfg-text]").forEach(function (el) {
    var v = fill(el.getAttribute("data-cfg-text"));
    el.textContent = v.replace(/ · $/, "");
  });

  function t(lang, key) {
    var s = I.strings[lang] || {};
    var v = (key in s) ? s[key] : (I.strings[I.fallback] || {})[key];
    return v == null ? v : fill(v);
  }
  function apply(lang) {
    root.lang = lang;
    sel.value = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = t(lang, el.getAttribute("data-i18n"));
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var p = pair.split(":"), v = t(lang, p[1]);
        if (v != null) el.setAttribute(p[0], v.replace(/<[^>]+>/g, ""));
      });
    });
    document.title = t(lang, "page_title");
  }
  var current = detect();
  apply(current);
  sel.addEventListener("change", function () {
    current = sel.value; store.set("nimcale_lang", current); apply(current);
  });

  // ---------------------------------------------------------------- animations
  var anim = document.getElementById("animToggle");
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var savedAnim = store.get("nimcale_anim");
  var on = savedAnim === null ? !reduced : savedAnim === "1";
  function setAnim(v) {
    anim.checked = v;
    root.classList.toggle("no-anim", !v);
    root.classList.toggle("force-anim", v && reduced);   // explicit opt-in overrides the OS setting
  }
  setAnim(on);
  anim.addEventListener("change", function () { store.set("nimcale_anim", anim.checked ? "1" : "0"); setAnim(anim.checked); });

  // ---------------------------------------------------------------- table of contents
  var toc = document.getElementById("toc"), btn = document.getElementById("menuBtn");
  btn.addEventListener("click", function () {
    var open = toc.classList.toggle("open"); btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  toc.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { toc.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
  });
  var links = {};
  toc.querySelectorAll("a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
  if ("IntersectionObserver" in window) {
    var visible = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { visible[en.target.id] = en.isIntersecting ? en.intersectionRatio : 0; });
      var best = null, bestR = 0;
      Object.keys(visible).forEach(function (id) { if (visible[id] > bestR) { bestR = visible[id]; best = id; } });
      if (best) Object.keys(links).forEach(function (id) { links[id].classList.toggle("active", id === best); });
    }, { rootMargin: "-70px 0px -45% 0px", threshold: [0, 0.1, 0.25, 0.5] });
    document.querySelectorAll("section.sec").forEach(function (s) { io.observe(s); });
  }
  var top = document.getElementById("toTop");
  window.addEventListener("scroll", function () { top.classList.toggle("show", window.scrollY > 700); }, { passive: true });
  top.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: root.classList.contains("no-anim") ? "auto" : "smooth" }); });

  // ---------------------------------------------------------------- lightbox
  var lb = document.getElementById("lightbox"), lbImg = document.getElementById("lbImg"), lbCap = document.getElementById("lbCap");
  var imgs = Array.prototype.slice.call(document.querySelectorAll(".shot img")), idx = 0, lastFocus = null;
  function show(i) {
    idx = (i + imgs.length) % imgs.length;
    var im = imgs[idx], cap = im.parentNode.querySelector("figcaption");
    lbImg.src = im.getAttribute("src"); lbImg.alt = im.alt; lbCap.innerHTML = cap ? cap.innerHTML : "";
  }
  function openLb(i) { lastFocus = document.activeElement; show(i); lb.hidden = false; document.getElementById("lbClose").focus(); }
  function closeLb() { lb.hidden = true; lbImg.removeAttribute("src"); if (lastFocus) lastFocus.focus(); }
  imgs.forEach(function (im, i) {
    im.tabIndex = 0;
    im.addEventListener("click", function () { openLb(i); });
    im.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLb(i); } });
  });
  document.getElementById("lbClose").addEventListener("click", closeLb);
  document.getElementById("lbPrev").addEventListener("click", function () { show(idx - 1); });
  document.getElementById("lbNext").addEventListener("click", function () { show(idx + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLb();
    else if (e.key === "ArrowLeft") show(idx - 1);
    else if (e.key === "ArrowRight") show(idx + 1);
  });
  var sx = null;
  lb.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) {
    if (sx === null) return;
    var dx = e.changedTouches[0].clientX - sx; sx = null;
    if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
  });
})();
