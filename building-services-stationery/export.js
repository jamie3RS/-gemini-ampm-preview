/* AMPM Building Services — export engine.
   Renders every logo to vector SVG + high-resolution transparent PNG,
   bundles the whole identity into a single ZIP (logos, favicons, spec sheet). */

(function () {
  "use strict";

  var C = {
    orange: "#E8742C", green: "#3D8E2E", blue: "#2E5FAB", purple: "#7A2E8F",
    ink: "#1a1f2b", paper: "#f6f3ec", leadSoft: "#5BAA47", ink3: "#6b7080"
  };
  var FULL = [C.orange, C.green, C.blue, C.purple];

  var SWATCHES = [
    { nm: "Ink", hex: "#1a1f2b", ref: "C72 M64 Y48 K38" },
    { nm: "Warm paper", hex: "#f6f3ec", ref: "C3 M3 Y8 K0" },
    { nm: "Working green (lead)", hex: "#3D8E2E", ref: "Pantone 363 C" },
    { nm: "Meridian green", hex: "#5BAA47", ref: "Pantone 7489 C" },
    { nm: "Meridian orange", hex: "#E8742C", ref: "Pantone 1585 C" },
    { nm: "Meridian blue", hex: "#2E5FAB", ref: "Pantone 7686 C" },
    { nm: "Meridian purple", hex: "#7A2E8F", ref: "Pantone 2602 C" },
    { nm: "Metadata grey", hex: "#6b7080", ref: "C58 M48 Y38 K8" }
  ];

  /* ——— SVG strings (vector master) ——— */
  function meridianRects(colors) {
    var xs = [1, 42, 83, 124], s = "";
    for (var i = 0; i < 4; i++) s += '<rect x="' + xs[i] + '" y="63" width="40" height="6" fill="' + colors[i] + '"/>';
    return s;
  }
  function stackedSVG(opt) {
    var w = 172, h = 96;
    var bg = opt.bg ? '<rect width="' + w + '" height="' + h + '" fill="' + opt.bg + '"/>' : "";
    return '<svg viewBox="0 0 ' + w + ' ' + h + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AMPM Building Services">' +
      bg +
      '<text x="0" y="52" font-family="\'Source Serif 4\',Georgia,serif" font-weight="600" font-size="50" letter-spacing="-0.012em" fill="' + opt.textFill + '">AMPM</text>' +
      meridianRects(opt.meridian) +
      '<rect x="1" y="84" width="15" height="2" fill="' + opt.tickFill + '"/>' +
      '<text x="23" y="88" font-family="\'JetBrains Mono\',monospace" font-size="10" letter-spacing="0.235em" fill="' + opt.subFill + '">BUILDING SERVICES</text>' +
      '</svg>';
  }
  function horizontalSVG(opt) {
    var w = 320, h = 70;
    var bg = opt.bg ? '<rect width="' + w + '" height="' + h + '" fill="' + opt.bg + '"/>' : "";
    var mx = [2, 38, 74, 110], mer = "";
    for (var i = 0; i < 4; i++) mer += '<rect x="' + mx[i] + '" y="50" width="35" height="5" fill="' + opt.meridian[i] + '"/>';
    return '<svg viewBox="0 0 ' + w + ' ' + h + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AMPM Building Services">' +
      bg +
      '<text x="0" y="42" font-family="\'Source Serif 4\',Georgia,serif" font-weight="600" font-size="44" letter-spacing="-0.012em" fill="' + opt.textFill + '">AMPM</text>' +
      mer +
      '<line x1="172" y1="8" x2="172" y2="56" stroke="' + opt.ruleFill + '" stroke-width="1.5"/>' +
      '<text x="188" y="28" font-family="\'JetBrains Mono\',monospace" font-size="12" letter-spacing="0.22em" fill="' + opt.subFill + '">BUILDING</text>' +
      '<text x="188" y="46" font-family="\'JetBrains Mono\',monospace" font-size="12" letter-spacing="0.22em" fill="' + opt.subFill2 + '">SERVICES</text>' +
      '</svg>';
  }
  function iconSVG(opt) {
    var s = 120;
    return '<svg viewBox="0 0 ' + s + ' ' + s + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AMPM Building Services icon">' +
      '<rect width="' + s + '" height="' + s + '" rx="22" fill="' + opt.tile + '"/>' +
      '<text x="60" y="78" text-anchor="middle" font-family="\'Source Serif 4\',Georgia,serif" font-weight="600" font-size="74" letter-spacing="-0.01em" fill="' + opt.glyph + '">A</text>' +
      '<rect x="30" y="92" width="15" height="6" fill="' + C.orange + '"/><rect x="45" y="92" width="15" height="6" fill="' + C.green + '"/>' +
      '<rect x="60" y="92" width="15" height="6" fill="' + C.blue + '"/><rect x="75" y="92" width="15" height="6" fill="' + C.purple + '"/>' +
      '</svg>';
  }
  function variantSVG(v) {
    switch (v) {
      case "primary":    return stackedSVG({ textFill: C.ink, subFill: C.ink3, tickFill: C.green, meridian: FULL });
      case "reversed":   return stackedSVG({ textFill: C.paper, subFill: "rgba(246,243,236,0.78)", tickFill: C.leadSoft, meridian: FULL });
      case "mono":       return stackedSVG({ textFill: C.ink, subFill: C.ink, tickFill: C.ink, meridian: ["#1a1f2b", "rgba(26,31,43,0.74)", "rgba(26,31,43,0.5)", "rgba(26,31,43,0.3)"] });
      case "white":      return stackedSVG({ textFill: C.paper, subFill: "rgba(246,243,236,0.9)", tickFill: C.paper, meridian: ["#f6f3ec", "rgba(246,243,236,0.78)", "rgba(246,243,236,0.56)", "rgba(246,243,236,0.36)"] });
      case "horizontal": return horizontalSVG({ textFill: C.ink, subFill: C.ink, subFill2: C.ink3, ruleFill: "#b8af9a", meridian: FULL });
      case "icon":       return iconSVG({ tile: C.ink, glyph: C.paper });
      default:           return variantSVG("primary");
    }
  }

  /* ——— Canvas draw (real fonts) ——— */
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
  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath(); ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }
  function drawIcon(ctx, S, opt) {
    var s = 120 * S, r = 22 * S;
    ctx.fillStyle = opt.tile; roundRect(ctx, 0, 0, s, s, r); ctx.fill();
    ctx.fillStyle = opt.glyph; ctx.textAlign = "center";
    ctx.font = '600 ' + (74 * S) + 'px "Source Serif 4", Georgia, serif';
    ctx.fillText("A", 60 * S, 78 * S); ctx.textAlign = "left";
    var ix = [30, 45, 60, 75];
    for (var i = 0; i < 4; i++) { ctx.fillStyle = FULL[i]; ctx.fillRect(ix[i] * S, 92 * S, 15 * S, 6 * S); }
  }
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
  // background fill for raster (transparent unless the mark needs a field to read on)
  function rasterBg(v) {
    if (v === "reversed" || v === "white") return C.ink; // light marks need a dark field to be usable
    return null; // transparent
  }
  function renderCanvas(v, scale, forceBg) {
    var g = GEO[v] || GEO.primary;
    var pad = (g.draw === "icon") ? 0 : 10;
    var cw = (g.w + pad * 2) * scale, ch = (g.h + pad * 2) * scale;
    var cv = document.createElement("canvas");
    cv.width = Math.round(cw); cv.height = Math.round(ch);
    var ctx = cv.getContext("2d");
    var bg = forceBg !== undefined ? forceBg : rasterBg(v);
    if (bg) { ctx.fillStyle = bg; ctx.fillRect(0, 0, cv.width, cv.height); }
    ctx.translate(pad * scale, pad * scale);
    var opt = variantOpts(v);
    if (g.draw === "stacked") drawStacked(ctx, scale, opt);
    else if (g.draw === "horizontal") drawHorizontal(ctx, scale, opt);
    else drawIcon(ctx, scale, opt);
    return cv;
  }

  function canvasBlob(cv) {
    return new Promise(function (res) { cv.toBlob(function (b) { res(b); }, "image/png"); });
  }
  function svgBlob(v) {
    return new Blob(['<?xml version="1.0" encoding="UTF-8"?>\n' + variantSVG(v)], { type: "image/svg+xml" });
  }
  function dl(blob, name) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a"); a.href = url; a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 6000);
  }

  var LABELS = {
    primary: "Primary (on light)", reversed: "Reversed (on dark)", mono: "Mono (single ink)",
    white: "White (knockout)", horizontal: "Horizontal lockup", icon: "App icon / favicon"
  };
  // long-edge px targets for the ~300dpi master
  var PRINT_PX = { primary: 3600, reversed: 3600, mono: 3600, white: 3600, horizontal: 3600, icon: 2048 };
  function scaleFor(v, px) {
    var g = GEO[v] || GEO.primary;
    var pad = (g.draw === "icon") ? 0 : 10;
    var longEdge = Math.max(g.w + pad * 2, g.h + pad * 2);
    return px / longEdge;
  }

  function readme() {
    var lines = [];
    lines.push("AMPM BUILDING SERVICES — BRAND ASSET PACK");
    lines.push("A trading subsidiary of AMPM Group Limited");
    lines.push("Generated " + new Date().toISOString().slice(0, 10));
    lines.push("");
    lines.push("CONTENTS");
    lines.push("  /logos/svg/   Vector masters — infinite resolution. Best for print and signage.");
    lines.push("  /logos/png/   High-resolution PNG (~300 dpi, transparent). Drop-in for any app.");
    lines.push("  /favicon/     App icon / favicon at 1024, 512, 256 px + vector.");
    lines.push("");
    lines.push("LOGO VARIANTS");
    lines.push("  primary      Full colour on light backgrounds (warm paper / white).");
    lines.push("  reversed     For dark backgrounds and photography (supplied on ink field).");
    lines.push("  mono         Single-ink for faxes, stamps, embroidery, one-colour print.");
    lines.push("  white        Pure knockout for the darkest fields (supplied on ink field).");
    lines.push("  horizontal   Compact lockup for headers, email and narrow spaces.");
    lines.push("  icon         Rounded app tile / favicon.");
    lines.push("");
    lines.push("CLEAR SPACE & MINIMUM SIZE");
    lines.push("  Keep clear space around the mark equal to the height of the 'A'.");
    lines.push("  Minimum width: 28mm in print, 150px on screen.");
    lines.push("");
    lines.push("COLOUR");
    SWATCHES.forEach(function (s) {
      lines.push("  " + pad(s.nm, 22) + s.hex + "   " + s.ref);
    });
    lines.push("");
    lines.push("TYPEFACES");
    lines.push("  Display / wordmark : Source Serif 4 (600)");
    lines.push("  Labels / metadata  : JetBrains Mono");
    lines.push("  Body / UI          : Inter Tight");
    lines.push("");
    lines.push("CONTACT");
    lines.push("  Unit 2 Regents Business Centre, Jubilee Road, Burgess Hill, West Sussex, RH15 9TL");
    lines.push("  0330 043 0080  ·  hello@ampm.co.uk  ·  ampm.co.uk");
    lines.push("");
    lines.push("STATIONERY (letterhead, business card, compliment slip, document cover)");
    lines.push("  Open the HTML files in the suite and use Print / Save as PDF for press-ready output.");
    return lines.join("\n");
  }
  function pad(s, n) { s = String(s); while (s.length < n) s += " "; return s; }

  /* ——— Build & download ZIP ——— */
  function setStatus(msg) {
    var el = document.getElementById("zip-status");
    if (el) el.textContent = msg;
  }

  async function buildZip(btn) {
    if (typeof JSZip === "undefined") { setStatus("Library still loading — try again in a moment."); return; }
    var old = btn.textContent; btn.disabled = true; btn.textContent = "Rendering…";
    try {
      await (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve());
      var zip = new JSZip();
      var root = zip.folder("AMPM-Building-Services-Brand-Pack");
      root.file("README.txt", readme());
      var svgDir = root.folder("logos/svg");
      var pngDir = root.folder("logos/png");
      var favDir = root.folder("favicon");

      var marks = ["primary", "reversed", "mono", "white", "horizontal"];
      for (var i = 0; i < marks.length; i++) {
        var v = marks[i];
        setStatus("Rendering " + LABELS[v] + "…");
        svgDir.file("ampm-bs-" + v + ".svg", svgBlob(v));
        var cvP = renderCanvas(v, scaleFor(v, PRINT_PX[v]));
        pngDir.file("ampm-bs-" + v + "@" + PRINT_PX[v] + "px.png", await canvasBlob(cvP));
        var cvW = renderCanvas(v, scaleFor(v, 1000));
        pngDir.file("ampm-bs-" + v + "@1000px.png", await canvasBlob(cvW));
      }
      // favicons
      setStatus("Rendering app icon…");
      favDir.file("ampm-bs-icon.svg", svgBlob("icon"));
      var sizes = [1024, 512, 256];
      for (var k = 0; k < sizes.length; k++) {
        var cv = renderCanvas("icon", sizes[k] / 120);
        favDir.file("ampm-bs-icon-" + sizes[k] + ".png", await canvasBlob(cv));
      }

      setStatus("Compressing…");
      var blob = await zip.generateAsync({ type: "blob", compression: "DEFLATE" }, function (m) {
        setStatus("Compressing… " + Math.round(m.percent) + "%");
      });
      dl(blob, "AMPM-Building-Services-Brand-Pack.zip");
      setStatus("Downloaded ✓  ZIP saved to your downloads.");
      btn.textContent = "Downloaded ✓";
      setTimeout(function () { btn.textContent = old; btn.disabled = false; }, 2200);
    } catch (e) {
      setStatus("Something went wrong: " + (e && e.message ? e.message : e));
      btn.textContent = old; btn.disabled = false;
    }
  }

  /* ——— Individual asset cards ——— */
  function renderCards() {
    var host = document.getElementById("asset-cards");
    if (!host) return;
    var order = ["primary", "reversed", "mono", "white", "horizontal", "icon"];
    order.forEach(function (v) {
      var card = document.createElement("div");
      card.className = "ax";
      var dark = (v === "reversed" || v === "white" || v === "icon");
      card.innerHTML =
        '<div class="ax-prev ' + (dark ? "on-ink" : "on-paper") + '"><span class="ax-lk">' + variantSVG(v) + '</span></div>' +
        '<div class="ax-foot"><div class="ax-name">' + LABELS[v] + '</div>' +
        '<div class="ax-btns"><button class="btn" data-x-svg="' + v + '">SVG</button>' +
        '<button class="btn lead" data-x-png="' + v + '">PNG</button></div></div>';
      host.appendChild(card);
    });
    host.querySelectorAll("[data-x-svg]").forEach(function (b) {
      b.addEventListener("click", function () { dl(svgBlob(b.getAttribute("data-x-svg")), "ampm-bs-" + b.getAttribute("data-x-svg") + ".svg"); flash(b, "Saved ↓"); });
    });
    host.querySelectorAll("[data-x-png]").forEach(function (b) {
      b.addEventListener("click", async function () {
        var v = b.getAttribute("data-x-png");
        await (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve());
        var px = PRINT_PX[v] || 2048;
        dl(await canvasBlob(renderCanvas(v, scaleFor(v, px))), "ampm-bs-" + v + "@" + px + "px.png");
        flash(b, "Saved ↓");
      });
    });
  }
  function flash(btn, msg) {
    var old = btn.textContent; btn.textContent = msg; btn.classList.add("copied");
    setTimeout(function () { btn.textContent = old; btn.classList.remove("copied"); }, 1500);
  }

  function start() {
    renderCards();
    var zb = document.getElementById("zip-btn");
    if (zb) zb.addEventListener("click", function () { buildZip(this); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
