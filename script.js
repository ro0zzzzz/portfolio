/* ===== CONTENT: edit your details here ===== */
const CONTENT = {
  tagline: "I turn attention into customers through ads, edits and motion.",
  role: "DIGITAL MARKETER & VIDEO EDITOR",
  idMeta: "ID · 2026 · NR-01",
  strapText: "DIGITAL MARKETER, VIDEO EDITOR, GRAPHICS DESIGNER, META ADS SPECIALIST, GOOGLE ADS SPECIALIST & SEO SPECIALIST  •  NAHIDUL ISLAM RAHAN  •  ",
  tools: ["Pr", "Ae", "Ps", "Ai", "Meta Ads", "CapCut"],
  skills: ["Meta Ads", "Google Ads", "SEO", "Video Editing", "Motion Graphics", "Graphic Design"],
  steps: [
    ["Hook", "Find the one idea and the first three seconds that stop the scroll."],
    ["Strategy", "Pick the audience, offer and platform before touching the timeline."],
    ["Edit & motion", "Cut, animate and design the creative to hold attention."],
    ["Launch & improve", "Run the ads, read the numbers, keep what works."]
  ],
  /* Google Drive file IDs. Move an ID from "long" to "short" for a vertical video. */
  work: {
    long: ["1qvlpXC8zcUZBMwvl6Tm0Elt8LxAck37L","1sC6U8vwwO-K9ZJ5SzEsh1HWU2xJSMJ1x","1zjvAzB7FhibofOqspr6TR7RB0Qr7E1F1","1uHsTAedBP2OLg4JE7PVilNH0KM-EYTgB","1O3yuBEjZEm5nFW6q9_poOsTaqbd2omx4","1TLmfWI13vpViz_781ynukwQVUZ1dAUj4","1EnSsbzz4fhmGjfum1a_6yV-zs353RRz8","1UGOuE_Jz8tIfA6nTacw4oVL1qTUUKlOY","1xb4yywe3842g6d5HDlh8nZ08xjFnS5TW","17AGXgV1YMsRkN5AOW_9GvblzTGlo15a8","1fc3xD1Dh95oeQ9LEwcaUMeHEclggFKNJ","1YhYE4Jq7ucxWCNDDedMBzMng3iNZmDE-","17Cd0CPmwKNxmTP-Hg-FGYasBz3rorWLs","1DSzzvlIZwPkR3BQR4PSByMkq5sdoFXrV","1cUt1Xt0fXXUmwH4Xmfq0XawaZogbnOmp"],
    short: [],
    folder: "https://drive.google.com/drive/folders/1nmUDiMaCM-13S1c_MLpXLha5_V88xk4G"
  },
  email: "rahanul052@gmail.com",
  whatsapp: "8801871554448",
  waText: "Hi Nahidul, I found your portfolio and want to work together.",
  collabLabel: "let’s collab",
  socials: [
    ["Facebook", "https://www.facebook.com/ro0zzzzz", "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"],
    ["Instagram", "https://www.instagram.com/ro0zzzzz/", "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM17.3 5.8a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z"],
    ["LinkedIn", "https://www.linkedin.com/in/nahidul-islam-rahan-04ab5627a/", "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V21h-4v-5c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V21h-4z"],
    ["YouTube", "https://www.youtube.com/@technahid7865", "M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5 3z"]
  ]
};

/* ===== helpers ===== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
const waUrl = `https://wa.me/${CONTENT.whatsapp}?text=${encodeURIComponent(CONTENT.waText)}`;
const pad = n => String(n).padStart(2, "0");

/* ===== loader ===== */
(function () {
  const el = $("#loaderTime"), t0 = performance.now(), D = 900;
  (function tick(now) {
    const e = Math.min(now - t0, D), f = Math.floor(e / 1000 * 30);
    el.textContent = `00:00:${pad(Math.floor(f / 30))}:${pad(f % 30)}`;
    if (e < D) return requestAnimationFrame(tick);
    $("#loader").classList.add("done");
    window.dispatchEvent(new Event("site-loaded"));
  })(t0);
})();

/* ===== split headings into hoverable letters ===== */
$$("[data-split]").forEach(el => {
  const t = el.textContent;
  el.setAttribute("aria-label", t);
  el.innerHTML = t.split(" ").map(w => `<span class="w">${[...w].map(c => `<span class="ch" aria-hidden="true">${c}</span>`).join("")}</span>`).join(" ");
});

/* ===== render content ===== */
$("#tagline").textContent = CONTENT.tagline;
$("#idRole").textContent = CONTENT.role;
$("#idMeta").textContent = CONTENT.idMeta;
$("#strapText").textContent = CONTENT.strapText.repeat(6);
$("#tools").innerHTML = CONTENT.tools.map(t => `<li>${t}</li>`).join("");
const skillHtml = CONTENT.skills.map(s => `<span>${s}</span>`).join("");
$("#strip").innerHTML = skillHtml + skillHtml + skillHtml + skillHtml;
$("#steps").innerHTML = CONTENT.steps.map(s => `<li><b>${s[0]}</b><p>${s[1]}</p></li>`).join("");
$("#startProject").href = waUrl; $("#startProject").target = "_blank"; $("#startProject").rel = "noopener";
$("#collabLink").href = waUrl;
$("#emailLink").href = "mailto:" + CONTENT.email; $("#emailLink").textContent = CONTENT.email;
$("#waLink").href = waUrl; $("#waLink").textContent = "+" + CONTENT.whatsapp;
$("#socials").innerHTML = CONTENT.socials.map(s => `<li><a href="${s[1]}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${s[2]}"/></svg>${s[0]}</a></li>`).join("");
$("#year").textContent = "© " + new Date().getFullYear();
$("#copyEmail").addEventListener("click", async e => {
  try { await navigator.clipboard.writeText(CONTENT.email); } catch (_) {
    const r = document.createRange(); r.selectNodeContents($("#emailLink")); getSelection().removeAllRanges(); getSelection().addRange(r); document.execCommand("copy");
  }
  e.target.textContent = "Copied"; setTimeout(() => e.target.textContent = "Copy", 1500);
});

/* ===== work rails (Google Drive) ===== */
function rail(id, ids, wrapId, offset) {
  if (!ids.length) return;
  $(wrapId).hidden = false;
  $(id).innerHTML = ids.map((v, i) => `<button type="button" class="vcard" data-id="${v}" aria-label="Play Project ${pad(i + 1 + offset)}"><span class="ph"></span><img src="https://drive.google.com/thumbnail?id=${v}&sz=w800" alt="" loading="lazy" onerror="this.remove()"><span class="play"></span><span class="vt">Project ${pad(i + 1 + offset)}</span></button>`).join("");
}
rail("#longRail", CONTENT.work.long, "#longWrap", 0);
rail("#shortRail", CONTENT.work.short, "#shortWrap", CONTENT.work.long.length);
if (CONTENT.work.folder) { const m = $("#moreWork"); m.href = CONTENT.work.folder; m.hidden = false; }
document.addEventListener("click", e => {
  const c = e.target.closest(".vcard");
  if (c && !c.classList.contains("playing")) {
    c.classList.add("playing");
    c.insertAdjacentHTML("beforeend", `<iframe src="https://drive.google.com/file/d/${c.dataset.id}/preview" allow="autoplay; fullscreen" allowfullscreen title="Project video"></iframe>`);
  }
  const b = e.target.closest("[data-rail]");
  if (b) { const r = document.getElementById(b.dataset.rail); r.scrollBy({ left: r.clientWidth * .9 * b.dataset.dir, behavior: "smooth" }); }
});

/* ===== scroll: nav, progress, timeline ===== */
const nav = $("#nav"), stage = $(".timeline-stage"), tl = $("#timeline"), stepEls = $$("#steps li");
let lastY = 0, tick = false;
function onScroll() {
  tick = false;
  const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
  $("#progress").style.setProperty("--p", max > 0 ? y / max : 0);
  nav.classList.toggle("hide", y > lastY && y > 120); lastY = y;
  const r = stage.getBoundingClientRect(), vh = innerHeight;
  tl.style.setProperty("--t", reduce ? 1 : clamp((vh - r.top) / (vh * .75), 0, 1));
  const p = clamp((vh * .85 - r.top) / (vh * .9), 0, 1);
  tl.style.setProperty("--ph", p);
  const idx = Math.min(stepEls.length - 1, Math.floor(p * stepEls.length));
  stepEls.forEach((s, i) => s.classList.toggle("on", p > 0 && i <= idx));
}
addEventListener("scroll", () => { if (!tick) { tick = true; requestAnimationFrame(onScroll); } }, { passive: true });
addEventListener("resize", onScroll); onScroll();

/* ===== cursor follower ===== */
if (fine && !reduce) {
  document.documentElement.classList.add("has-cursor");
  const cur = $("#cursor"), dot = $(".dot", cur), ring = $(".ring", cur), halo = $(".halo", cur);
  let mx = -100, my = -100, rx = mx, ry = my, hx = mx, hy = my;
  addEventListener("pointermove", e => {
    mx = e.clientX; my = e.clientY;
    cur.classList.toggle("hot", !!e.target.closest("a,button,.vcard,.idcard,input"));
    cur.classList.toggle("off", !!e.target.closest("#reveal"));
  }, { passive: true });
  document.addEventListener("pointerleave", () => cur.classList.add("off"));
  (function loop() {
    rx = lerp(rx, mx, .2); ry = lerp(ry, my, .2); hx = lerp(hx, mx, .12); hy = lerp(hy, my, .12);
    dot.style.transform = `translate3d(${mx}px,${my}px,0)`;
    ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
    halo.style.transform = `translate3d(${hx}px,${hy}px,0)`;
    requestAnimationFrame(loop);
  })();
}

/* ===== hanging ID card (Verlet rope) ===== */
(function () {
  const box = $("#lanyard"), card = $("#idcard"), shape = $("#strapShape"), center = $("#strapPath");
  const N = 12, G = .55, DAMP = .982, MAXV = 16;
  let seg, ax, cw, ch, pts, drag = null, running = false, started = false;
  const rope = () => seg * N;
  function size() {
    const r = box.getBoundingClientRect(), cs = getComputedStyle(card);
    cw = parseFloat(cs.width); ch = parseFloat(cs.height);
    seg = innerWidth < 900 ? 13 : 26; ax = r.width * .5;
  }
  function init() {
    size();
    const y0 = -(rope() + ch + 60);
    pts = Array.from({ length: N + 1 }, (_, i) => ({ x: ax, y: y0 + i * seg, px: ax, py: y0 + i * seg }));
    if (reduce) pts.forEach((p, i) => { p.x = p.px = ax; p.y = p.py = i * seg; });
    draw();
  }
  function step() {
    pts.forEach((p, i) => {
      if (i === 0) { p.x = p.px = ax; p.y = p.py = 0; return; }
      if (drag && i === N) return;
      let vx = (p.x - p.px) * DAMP, vy = (p.y - p.py) * DAMP;
      const s = Math.hypot(vx, vy); if (s > MAXV) { vx *= MAXV / s; vy *= MAXV / s; }
      p.px = p.x; p.py = p.y; p.x += vx; p.y += vy + G;
    });
    for (let k = 0; k < 8; k++) for (let i = 0; i < N; i++) {
      const a = pts[i], b = pts[i + 1], dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy) || .001;
      if (d <= seg) continue;                      // only pulls, never pushes
      const f = (d - seg) / d, wa = i === 0 ? 0 : (drag && i === N - 1 ? 1 : 1), wb = drag && i + 1 === N ? 0 : 1, t = wa + wb || 1;
      a.x += dx * f * wa / t; a.y += dy * f * wa / t; b.x -= dx * f * wb / t; b.y -= dy * f * wb / t;
    }
  }
  function draw() {
    const L = pts[N], P = pts[N - 4], ang = -Math.atan2(L.x - P.x, L.y - P.y);   // angle of the last few segments: steadier than one segment
    card.style.transformOrigin = "50% 0";
    card.style.transform = `translate(${L.x - cw / 2}px,${L.y}px) rotate(${ang}rad)`;
    let c = "", left = [], right = [];
    pts.forEach((p, i) => {
      const q = pts[Math.min(i + 1, N)], o = pts[Math.max(i - 1, 0)], tx = q.x - o.x, ty = q.y - o.y, n = Math.hypot(tx, ty) || 1, nx = -ty / n * 8, ny = tx / n * 8;
      left.push(`${p.x + nx},${p.y + ny}`); right.unshift(`${p.x - nx},${p.y - ny}`);
      c += (i ? "L" : "M") + p.x + " " + p.y;
    });
    center.setAttribute("d", c);
    shape.setAttribute("d", "M" + left.join("L") + "L" + right.join("L") + "Z");
  }
  function loop() {
    step(); draw();
    const moving = pts.some((p, i) => i && Math.hypot(p.x - p.px, p.y - p.py) > .06);
    if (moving || drag) requestAnimationFrame(loop); else running = false;
  }
  const go = () => { if (!running && !reduce) { running = true; requestAnimationFrame(loop); } };
  const local = e => { const r = box.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
  card.addEventListener("pointerdown", e => {
    card.setPointerCapture(e.pointerId); const m = local(e), L = pts[N];
    drag = { dx: L.x - m.x, dy: L.y - m.y }; go(); e.preventDefault();
  });
  card.addEventListener("pointermove", e => {
    if (!drag) return; const m = local(e), L = pts[N];
    L.x = m.x + drag.dx; L.y = m.y + drag.dy; L.px = L.x; L.py = L.y;
    const dx = L.x - ax, dy = L.y, d = Math.hypot(dx, dy), max = rope() + 2;
    if (d > max) { L.x = ax + dx * max / d; L.y = dy * max / d; }
  });
  const up = () => {
    if (!drag) return; drag = null;
    pts.forEach((p, i) => { if (i) { p.px = p.x - (p.x - p.px) * .35; p.py = p.y - (p.y - p.py) * .35; } });   // calm the throw so it never whips off-screen
    go();
  };
  card.addEventListener("pointerup", up); card.addEventListener("pointercancel", up);
  addEventListener("resize", () => { size(); if (reduce) init(); });
  init();
  addEventListener("site-loaded", () => { if (!started) { started = true; go(); } });
})();

/* ===== superhero mask reveal ===== */
(function () {
  const f = $("#reveal"); let tx = 0, ty = 0, x = 0, y = 0, r = 0, tr = 0, pressed = false, on = false;
  const rect = () => f.getBoundingClientRect();
  const set = e => { const b = rect(); tx = e.clientX - b.left; ty = e.clientY - b.top; };
  const radius = () => rect().width * (pressed ? .32 : .2);
  function loop() {
    x = lerp(x, tx, .18); y = lerp(y, ty, .18); r = lerp(r, tr, .18);
    f.style.setProperty("--mx", x + "px"); f.style.setProperty("--my", y + "px"); f.style.setProperty("--r", Math.max(0, r) + "px");
    if (Math.abs(x - tx) + Math.abs(y - ty) + Math.abs(r - tr) > .4) requestAnimationFrame(loop); else on = false;
  }
  const go = () => { if (!on) { on = true; requestAnimationFrame(loop); } };
  f.addEventListener("pointerenter", e => { set(e); if (r < 1) { x = tx; y = ty; } tr = radius(); go(); });
  f.addEventListener("pointermove", e => { set(e); tr = radius(); go(); });
  f.addEventListener("pointerdown", e => { pressed = true; set(e); tr = radius(); go(); });
  addEventListener("pointerup", () => { if (pressed) { pressed = false; tr = radius(); go(); } });
  f.addEventListener("pointerleave", () => { pressed = false; tr = 0; go(); });
  f.addEventListener("pointercancel", () => { pressed = false; tr = 0; go(); });
})();

/* ===== 3D goo button (Venom Button by exteestudio, MIT) with CSS fallback ===== */
(function () {
  const wrap = $("#collab"), fr = $("#collabFrame"), pill = $("#collabLink");
  pill.textContent = CONTENT.collabLabel;
  const skip = !fine || reduce || innerWidth < 760;
  const q = new URLSearchParams(location.search).get("3d");      // ?3d=1 forces the 3D button, ?3d=0 turns it off
  try { localStorage.removeItem("collab-slow"); } catch (_) {}   // clear the old permanent flag from the first version
  let slow = false; try { slow = sessionStorage.getItem("collab-slow") === "1"; } catch (_) {}
  if (q === "1") slow = false;
  if (skip || slow || q === "0") return;
  const send = m => fr.contentWindow && fr.contentWindow.postMessage(Object.assign({ venom: "ptr" }, m), "*");
  const rel = e => { const b = fr.getBoundingClientRect(); return { x: e.clientX - b.left, y: e.clientY - b.top, pt: e.pointerType || "mouse" }; };
  const fallback = () => { wrap.classList.remove("live"); pill.removeAttribute("style"); fr.remove(); try { sessionStorage.setItem("collab-slow", "1"); } catch (_) {} };
  function speedTest() {
    setTimeout(() => {                                          // let the shaders warm up first
      const t = []; let last = performance.now();
      (function f(now) {
        t.push(now - last); last = now;
        if (t.length < 40) return requestAnimationFrame(f);
        const m = t.slice(1).sort((a, b) => a - b), med = m[Math.floor(m.length / 2)];
        if (med > 34) fallback();                               // under about 30 fps: use the light CSS pill
      })(last);
    }, 2500);
  }
  const start = () => {
    fr.hidden = false; fr.src = "collab/venom.html?label=" + encodeURIComponent(CONTENT.collabLabel);
    const bail = setTimeout(() => fr.remove(), 15000);          // never loaded: keep the CSS pill
    addEventListener("message", e => {
      if (e.source !== fr.contentWindow || !e.data || !e.data.venom) return;
      const d = e.data;
      if (d.venom === "ready") { clearTimeout(bail); wrap.classList.add("live"); send({ t: "layout" }); speedTest(); }
      if (d.venom === "layout") {                              // put the real link exactly over the 3D pill
        pill.style.setProperty("--cx", d.cx + "px"); pill.style.setProperty("--cy", (d.cy - d.hh) + "px");
        pill.style.setProperty("--cb", "auto"); pill.style.setProperty("--cw2", d.hw * 2 + "px"); pill.style.setProperty("--ch2", d.hh * 2 + "px");
      }
    });
    addEventListener("pointermove", e => send(Object.assign({ t: "move" }, rel(e))), { passive: true });
    addEventListener("pointerdown", e => send(Object.assign({ t: "down" }, rel(e))), { passive: true });
    addEventListener("pointerup", e => send(Object.assign({ t: "up" }, rel(e))), { passive: true });
    document.addEventListener("pointerleave", () => send({ t: "leave", x: -1, y: -1 }));
    addEventListener("resize", () => send({ t: "layout" }));
  };
  addEventListener("site-loaded", () => setTimeout(() => (window.requestIdleCallback || setTimeout)(start), 3500), { once: true });
})();
