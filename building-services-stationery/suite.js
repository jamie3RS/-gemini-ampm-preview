/* AMPM Building Services — stationery suite engine
   Logo rendering (SVG + canvas), downloads, scaled doc previews, email signature. */

(function () {
  "use strict";

  /* ————————————————————————————————————————————————
     PALETTE
  ———————————————————————————————————————————————— */
  var C = {
    orange: "#E8742C", green: "#3D8E2E", blue: "#2E5FAB", purple: "#7A2E8F",
    ink: "#1a1f2b", paper: "#f6f3ec", leadSoft: "#5BAA47", ink3: "#6b7080"
  };

  var SWATCHES = [
    { nm: "Ink", hex: "#1a1f2b", ref: "C72 M64 Y48 K38", fg: "#f6f3ec" },
    { nm: "Warm paper", hex: "#f6f3ec", ref: "C3 M3 Y8 K0", fg: "#1a1f2b", border: true },
    { nm: "Working green · lead", hex: "#3D8E2E", ref: "Pantone 363 C", fg: "#fff" },
    { nm: "Meridian green", hex: "#5BAA47", ref: "Pantone 7489 C", fg: "#fff" },
    { nm: "Meridian orange", hex: "#E8742C", ref: "Pantone 1585 C", fg: "#fff" },
    { nm: "Meridian blue", hex: "#2E5FAB", ref: "Pantone 7686 C", fg: "#fff" },
    { nm: "Meridian purple", hex: "#7A2E8F", ref: "Pantone 2602 C", fg: "#fff" },
    { nm: "Metadata grey", hex: "#6b7080", ref: "C58 M48 Y38 K8", fg: "#fff" }
  ];

  /* ————————————————————————————————————————————————
     LOCKUP — SVG STRINGS (vector, for on-page render + SVG download)
     Geometry mirrors the print files (viewBox 0 0 172 96).
  ———————————————————————————————————————————————— */
  function meridianRects(colors) {
    var xs = [1, 42, 83, 124];
    var s = "";
    for (var i = 0; i < 4; i++) {
      s += '<rect x="' + xs[i] + '" y="63" width="40" height="6" fill="' + colors[i] + '"/>';
    }
    return s;
  }

  function stackedSVG(opt) {
    // opt: textFill, subFill, tickFill, meridian[4], bg(optional)
    var w = 172, h = 96;
    var bg = opt.bg ? '<rect width="' + w + '" height="' + h + '" fill="' + opt.bg + '"/>' : "";
    return '<svg class="lk" viewBox="0 0 ' + w + ' ' + h + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AMPM Building Services">' +
      bg +
      '<text x="0" y="52" font-family="\'Source Serif 4\',Georgia,serif" font-weight="600" font-size="50" letter-spacing="-0.012em" fill="' + opt.textFill + '">AMPM</text>' +
      meridianRects(opt.meridian) +
      '<rect x="1" y="84" width="15" height="2" fill="' + opt.tickFill + '"/>' +
      '<text x="23" y="88" font-family="\'JetBrains Mono\',monospace" font-size="10" letter-spacing="0.235em" fill="' + opt.subFill + '">BUILDING SERVICES</text>' +
      '</svg>';
  }

  function horizontalSVG(opt) {
    // AMPM | BUILDING / SERVICES  + small meridian under AMPM
    var w = 320, h = 70;
    var bg = opt.bg ? '<rect width="' + w + '" height="' + h + '" fill="' + opt.bg + '"/>' : "";
    var mx = [2, 38, 74, 110];
    var mer = "";
    for (var i = 0; i < 4; i++) mer += '<rect x="' + mx[i] + '" y="50" width="35" height="5" fill="' + opt.meridian[i] + '"/>';
    return '<svg class="lk" viewBox="0 0 ' + w + ' ' + h + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AMPM Building Services">' +
      bg +
      '<text x="0" y="42" font-family="\'Source Serif 4\',Georgia,serif" font-weight="600" font-size="44" letter-spacing="-0.012em" fill="' + opt.textFill + '">AMPM</text>' +
      mer +
      '<line x1="172" y1="8" x2="172" y2="56" stroke="' + opt.ruleFill + '" stroke-width="1.5"/>' +
      '<text x="188" y="28" font-family="\'JetBrains Mono\',monospace" font-size="12" letter-spacing="0.22em" fill="' + opt.subFill + '">BUILDING</text>' +
      '<text x="188" y="46" font-family="\'JetBrains Mono\',monospace" font-size="12" letter-spacing="0.22em" fill="' + opt.subFill2 + '">SERVICES</text>' +
      '</svg>';
  }

  function iconSVG(opt) {
    // rounded ink tile, serif A, meridian under
    var s = 120;
    return '<svg class="lk" viewBox="0 0 ' + s + ' ' + s + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AMPM Building Services icon">' +
      '<rect width="' + s + '" height="' + s + '" rx="22" fill="' + opt.tile + '"/>' +
      '<text x="60" y="78" text-anchor="middle" font-family="\'Source Serif 4\',Georgia,serif" font-weight="600" font-size="74" letter-spacing="-0.01em" fill="' + opt.glyph + '">A</text>' +
      '<rect x="30" y="92" width="15" height="6" fill="' + C.orange + '"/>' +
      '<rect x="45" y="92" width="15" height="6" fill="' + C.green + '"/>' +
      '<rect x="60" y="92" width="15" height="6" fill="' + C.blue + '"/>' +
      '<rect x="75" y="92" width="15" height="6" fill="' + C.purple + '"/>' +
      '</svg>';
  }

  var FULL = [C.orange, C.green, C.blue, C.purple];

  function variantSVG(v) {
    switch (v) {
      case "primary":
        return stackedSVG({ textFill: C.ink, subFill: C.ink3, tickFill: C.green, meridian: FULL });
      case "reversed":
        return stackedSVG({ textFill: C.paper, subFill: "rgba(246,243,236,0.78)", tickFill: C.leadSoft, meridian: FULL });
      case "mono":
        return stackedSVG({ textFill: C.ink, subFill: C.ink, tickFill: C.ink, meridian: ["#1a1f2b", "rgba(26,31,43,0.74)", "rgba(26,31,43,0.5)", "rgba(26,31,43,0.3)"] });
      case "white":
        return stackedSVG({ textFill: C.paper, subFill: "rgba(246,243,236,0.9)", tickFill: C.paper, meridian: ["#f6f3ec", "rgba(246,243,236,0.78)", "rgba(246,243,236,0.56)", "rgba(246,243,236,0.36)"] });
      case "horizontal":
        return horizontalSVG({ textFill: C.ink, subFill: C.ink, subFill2: C.ink3, ruleFill: "#b8af9a", meridian: FULL });
      case "icon":
        return iconSVG({ tile: C.ink, glyph: C.paper });
      default:
        return variantSVG("primary");
    }
  }

  /* ————————————————————————————————————————————————
     RENDER lockups into placeholders (inline SVG → web font applies)
  ———————————————————————————————————————————————— */
  function inject(id, v, scale) {
    var el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = '<span class="lockup" style="display:inline-block;width:' + (scale || 260) + 'px;max-width:100%;">' + variantSVG(v) + "</span>";
  }

  /* ————————————————————————————————————————————————
     CANVAS render (real fonts) → PNG download + signature logo
  ———————————————————————————————————————————————— */
  function drawStacked(ctx, S, opt) {
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = opt.textFill;
    ctx.font = '600 ' + (50 * S) + 'px "Source Serif 4", Georgia, serif';
    try { ctx.letterSpacing = (-0.012 * 50 * S) + "px"; } catch (e) {}
    ctx.fillText("AMPM", 0, 52 * S);
    try { ctx.letterSpacing = "0px"; } catch (e) {}
    var xs = [1, 42, 83, 124];
    for (var i = 0; i < 4; i++) { ctx.fillStyle = opt.meridian[i]; ctx.fillRect(xs[i] * S, 63 * S, 40 * S, 6 * S); }
    ctx.fillStyle = opt.tickFill; ctx.fillRect(1 * S, 84 * S, 15 * S, 2 * S);
    ctx.fillStyle = opt.subFill;
    ctx.font = (10 * S) + 'px "JetBrains Mono", monospace';
    try { ctx.letterSpacing = (0.235 * 10 * S) + "px"; } catch (e) {}
    ctx.fillText("BUILDING SERVICES", 23 * S, 88 * S);
    try { ctx.letterSpacing = "0px"; } catch (e) {}
  }

  function drawHorizontal(ctx, S, opt) {
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = opt.textFill;
    ctx.font = '600 ' + (44 * S) + 'px "Source Serif 4", Georgia, serif';
    ctx.fillText("AMPM", 0, 42 * S);
    var mx = [2, 38, 74, 110];
    for (var i = 0; i < 4; i++) { ctx.fillStyle = FULL[i]; ctx.fillRect(mx[i] * S, 50 * S, 35 * S, 5 * S); }
    ctx.strokeStyle = "#b8af9a"; ctx.lineWidth = 1.5 * S;
    ctx.beginPath(); ctx.moveTo(172 * S, 8 * S); ctx.lineTo(172 * S, 56 * S); ctx.stroke();
    ctx.font = (12 * S) + 'px "JetBrains Mono", monospace';
    try { ctx.letterSpacing = (0.22 * 12 * S) + "px"; } catch (e) {}
    ctx.fillStyle = opt.subFill; ctx.fillText("BUILDING", 188 * S, 28 * S);
    ctx.fillStyle = opt.subFill2; ctx.fillText("SERVICES", 188 * S, 46 * S);
    try { ctx.letterSpacing = "0px"; } catch (e) {}
  }

  function drawIcon(ctx, S, opt) {
    var s = 120 * S, r = 22 * S;
    ctx.fillStyle = opt.tile;
    roundRect(ctx, 0, 0, s, s, r); ctx.fill();
    ctx.fillStyle = opt.glyph;
    ctx.textAlign = "center";
    ctx.font = '600 ' + (74 * S) + 'px "Source Serif 4", Georgia, serif';
    ctx.fillText("A", 60 * S, 78 * S);
    ctx.textAlign = "left";
    var ix = [30, 45, 60, 75];
    for (var i = 0; i < 4; i++) { ctx.fillStyle = FULL[i]; ctx.fillRect(ix[i] * S, 92 * S, 15 * S, 6 * S); }
  }

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  // canvas dims per variant (logical w,h before scale)
  var GEO = {
    primary:    { w: 168, h: 96, draw: "stacked" },
    reversed:   { w: 168, h: 96, draw: "stacked" },
    mono:       { w: 168, h: 96, draw: "stacked" },
    white:      { w: 168, h: 96, draw: "stacked" },
    horizontal: { w: 320, h: 60, draw: "horizontal" },
    icon:       { w: 120, h: 120, draw: "icon" }
  };

  function variantOpts(v) {
    switch (v) {
      case "primary":    return { textFill: C.ink, subFill: C.ink3, tickFill: C.green, meridian: FULL };
      case "reversed":   return { textFill: C.paper, subFill: "rgba(246,243,236,0.78)", tickFill: C.leadSoft, meridian: FULL };
      case "mono":       return { textFill: C.ink, subFill: C.ink, tickFill: C.ink, meridian: ["#1a1f2b", "rgba(26,31,43,0.74)", "rgba(26,31,43,0.5)", "rgba(26,31,43,0.3)"] };
      case "white":      return { textFill: C.paper, subFill: "rgba(246,243,236,0.9)", tickFill: C.paper, meridian: ["#f6f3ec", "rgba(246,243,236,0.78)", "rgba(246,243,236,0.56)", "rgba(246,243,236,0.36)"] };
      case "horizontal": return { textFill: C.ink, subFill: C.ink, subFill2: C.ink3 };
      case "icon":       return { tile: C.ink, glyph: C.paper };
      default:           return variantOpts("primary");
    }
  }

  function renderCanvas(v, scale) {
    var g = GEO[v] || GEO.primary;
    var pad = (g.draw === "icon") ? 0 : 6;
    var cw = (g.w + pad * 2) * scale, ch = (g.h + pad * 2) * scale;
    var cv = document.createElement("canvas");
    cv.width = Math.round(cw); cv.height = Math.round(ch);
    var ctx = cv.getContext("2d");
    ctx.translate(pad * scale, pad * scale);
    var opt = variantOpts(v);
    if (g.draw === "stacked") drawStacked(ctx, scale, opt);
    else if (g.draw === "horizontal") drawHorizontal(ctx, scale, opt);
    else drawIcon(ctx, scale, opt);
    return cv;
  }

  function download(href, name) {
    var a = document.createElement("a");
    a.href = href; a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
  }

  function downloadPNG(v) {
    var cv = renderCanvas(v, 6);
    cv.toBlob(function (blob) {
      var url = URL.createObjectURL(blob);
      download(url, "ampm-building-services-" + v + ".png");
      setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
    }, "image/png");
  }

  function downloadSVG(v) {
    var svg = variantSVG(v);
    var blob = new Blob(['<?xml version="1.0" encoding="UTF-8"?>\n' + svg], { type: "image/svg+xml" });
    var url = URL.createObjectURL(blob);
    download(url, "ampm-building-services-" + v + ".svg");
    setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
  }

  /* ————————————————————————————————————————————————
     SCALED DOCUMENT PREVIEWS (inline sheets)
  ———————————————————————————————————————————————— */
  function scaleMinis() {
    document.querySelectorAll(".doc-mini").forEach(function (m) {
      var stage = m.querySelector(".doc-mini-stage");
      if (!stage) return;
      var target = parseFloat(m.getAttribute("data-w")) || 440;
      var natW = stage.offsetWidth, natH = stage.offsetHeight;
      if (!natW) return;
      var avail = m.parentElement ? m.parentElement.clientWidth - 2 : target;
      var w = Math.min(target, avail > 0 ? avail : target);
      var sc = w / natW;
      stage.style.transform = "scale(" + sc + ")";
      m.style.width = w + "px";
      m.style.height = (natH * sc) + "px";
    });
  }

  /* ————————————————————————————————————————————————
     EMAIL SIGNATURE
  ———————————————————————————————————————————————— */
  var SIG = {
    name: "Jamie Dawson",
    role: "Chairman",
    mobile: "07700 900123",
    phone: "0330 043 0080",
    email: "jamie.dawson@ampm.co.uk",
    web: "ampm.co.uk",
    address: "Unit 2 Regents Business Centre, Jubilee Road, Burgess Hill, West Sussex, RH15 9TL"
  };
  var SIG_LOGO = null; // data URI

  function sigHTML(d, logo) {
    var ink = "#1a1f2b", grey = "#6b7080", green = "#3D8E2E", rule = "#d9d2c1";
    var mono = "'JetBrains Mono', Consolas, monospace";
    var lead = '<td height="6" style="font-size:0;line-height:0;background:';
    return '' +
'<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial, Helvetica, sans-serif;color:' + ink + ';border-collapse:collapse;">' +
  '<tr><td style="padding:0 22px 0 0;border-right:2px solid ' + rule + ';vertical-align:top;">' +
    (logo ? '<img src="' + logo + '" width="156" alt="AMPM Building Services" style="display:block;border:0;width:156px;height:auto;" />' : '') +
  '</td>' +
  '<td style="padding:2px 0 2px 22px;vertical-align:top;">' +
    '<div style="font-family:Georgia,\'Times New Roman\',serif;font-size:19px;font-weight:bold;color:' + ink + ';letter-spacing:-0.01em;">' + esc(d.name) + '</div>' +
    '<div style="font-family:' + mono + ';font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:' + grey + ';padding-top:3px;">' + esc(d.role) + '</div>' +
    '<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;padding-top:12px;"><tr><td style="padding-top:12px;">' +
      '<div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.9;color:' + ink + ';">' +
        '<span style="color:' + green + ';font-weight:bold;">T</span>&nbsp; ' + esc(d.phone) + '&nbsp;&nbsp;&nbsp;<span style="color:' + green + ';font-weight:bold;">M</span>&nbsp; ' + esc(d.mobile) + '<br />' +
        '<span style="color:' + green + ';font-weight:bold;">E</span>&nbsp; <a href="mailto:' + esc(d.email) + '" style="color:' + ink + ';text-decoration:none;">' + esc(d.email) + '</a><br />' +
        '<span style="color:' + green + ';font-weight:bold;">W</span>&nbsp; <a href="https://' + esc(d.web) + '" style="color:' + ink + ';text-decoration:none;">' + esc(d.web) + '</a>' +
      '</div>' +
      '<div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:1.55;color:' + grey + ';padding-top:10px;">' + esc(d.address) + '</div>' +
      '<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;margin-top:12px;width:188px;"><tr>' +
        lead + '#E8742C;width:20%;"></td>' + lead + '#3D8E2E;width:40%;"></td>' + lead + '#2E5FAB;width:20%;"></td>' + lead + '#7A2E8F;width:20%;"></td>' +
      '</tr></table>' +
    '</td></tr></table>' +
  '</td></tr>' +
'</table>';
  }

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

  function renderSig() {
    var mount = document.getElementById("sig-mount");
    if (mount) mount.innerHTML = sigHTML(SIG, SIG_LOGO);
  }

  function buildSigFields() {
    var host = document.getElementById("sig-fields");
    if (!host) return;
    var fields = [
      ["name", "Name"], ["role", "Role / title"], ["phone", "Phone"], ["mobile", "Mobile"],
      ["email", "Email"], ["web", "Website"], ["address", "Address"]
    ];
    host.innerHTML = "";
    fields.forEach(function (f) {
      var wrap = document.createElement("label");
      wrap.style.cssText = "display:flex;flex-direction:column;gap:5px;font-family:var(--mono);font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:var(--ink-3);" + (f[0] === "address" ? "grid-column:1/-1;" : "");
      var inp = document.createElement("input");
      inp.value = SIG[f[0]];
      inp.style.cssText = "font-family:var(--sans);font-size:14px;letter-spacing:0;text-transform:none;color:var(--ink);padding:9px 11px;border:1px solid var(--rule-strong);background:#fff;";
      inp.addEventListener("input", function () { SIG[f[0]] = inp.value; renderSig(); });
      wrap.appendChild(document.createTextNode(f[1]));
      wrap.appendChild(inp);
      host.appendChild(wrap);
    });
  }

  function copyRich(html, btn, label) {
    var done = function () { flash(btn, label || "Copied ✓"); };
    if (navigator.clipboard && window.ClipboardItem) {
      var item = new ClipboardItem({
        "text/html": new Blob([html], { type: "text/html" }),
        "text/plain": new Blob([html], { type: "text/plain" })
      });
      navigator.clipboard.write([item]).then(done).catch(function () { legacyCopy(html, btn, label); });
    } else { legacyCopy(html, btn, label); }
  }

  function legacyCopy(html, btn, label) {
    var div = document.createElement("div");
    div.contentEditable = "true";
    div.style.cssText = "position:fixed;left:-9999px;top:0;";
    div.innerHTML = html;
    document.body.appendChild(div);
    var range = document.createRange(); range.selectNodeContents(div);
    var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(range);
    try { document.execCommand("copy"); flash(btn, label || "Copied ✓"); } catch (e) { flash(btn, "Press Ctrl+C"); }
    sel.removeAllRanges(); div.remove();
  }

  function copyPlain(text, btn, label) {
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(function () { flash(btn, label || "Copied ✓"); });
  }

  function flash(btn, msg) {
    if (!btn) return;
    var old = btn.textContent;
    btn.textContent = msg; btn.classList.add("copied");
    setTimeout(function () { btn.textContent = old; btn.classList.remove("copied"); }, 1600);
  }

  /* ————————————————————————————————————————————————
     PALETTE render
  ———————————————————————————————————————————————— */
  function renderSwatches() {
    var host = document.getElementById("swatches");
    if (!host) return;
    SWATCHES.forEach(function (s) {
      var d = document.createElement("div");
      d.className = "swatch";
      d.innerHTML =
        '<div class="chip" style="background:' + s.hex + ';' + (s.border ? "border-bottom:1px solid var(--rule);" : "") + '"></div>' +
        '<div class="meta"><div class="nm">' + s.nm + '</div><div class="hex">' + s.hex + " · " + s.ref + '</div></div>';
      host.appendChild(d);
    });
  }

  /* ————————————————————————————————————————————————
     INIT
  ———————————————————————————————————————————————— */
  function initLockups() {
    inject("lk-primary", "primary", 260);
    inject("lk-reversed", "reversed", 260);
    inject("lk-mono", "mono", 260);
    inject("lk-onbrand", "white", 260);
    inject("lk-horizontal", "horizontal", 300);
    inject("lk-icon", "icon", 120);
    inject("lk-min-screen", "primary", 150);
    inject("lk-min-print", "primary", 106);
    // clear-space demo with guide box
    var cs = document.getElementById("lk-clearspace");
    if (cs) {
      cs.innerHTML =
        '<div style="display:inline-block;padding:34px;outline:1px dashed #b8af9a;outline-offset:-1px;background:repeating-linear-gradient(45deg,transparent,transparent 7px,rgba(61,142,46,0.05) 7px,rgba(61,142,46,0.05) 14px);">' +
        '<span class="lockup" style="display:inline-block;width:200px;background:var(--paper);">' + variantSVG("primary") + '</span></div>';
    }
  }

  function bindDownloads() {
    document.querySelectorAll("[data-dl]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var v = btn.getAttribute("data-variant");
        if (btn.getAttribute("data-dl") === "svg") downloadSVG(v);
        else downloadPNG(v);
        flash(btn, "Saved ↓");
      });
    });
  }

  function start() {
    renderSwatches();
    initLockups();
    scaleMinis();
    window.addEventListener("resize", scaleMinis);
    setTimeout(scaleMinis, 400);
    buildSigFields();
    bindDownloads();

    document.getElementById("sig-copy").addEventListener("click", function () {
      copyRich(sigHTML(SIG, SIG_LOGO), this, "Signature copied ✓");
    });
    document.getElementById("sig-copy-html").addEventListener("click", function () {
      copyPlain(sigHTML(SIG, SIG_LOGO), this, "HTML copied ✓");
    });

    // generate signature logo once fonts are ready, then render preview
    var go = function () {
      try { SIG_LOGO = renderCanvas("primary", 4).toDataURL("image/png"); } catch (e) {}
      renderSig();
      scaleMinis();
    };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(go); else go();
    setTimeout(go, 800);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
