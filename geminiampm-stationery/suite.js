/* GEMINI AMPM — stationery suite engine.
   Palette, scaled doc previews, email signature (with canvas-rendered logo). */
(function () {
  "use strict";

  var C = { orange: "#E8742C", green: "#3D8E2E", blue: "#2E5FAB", purple: "#7A2E8F",
            ink: "#1c1812", night: "#0b0e1c", cream: "#f4ead8" };

  var SWATCHES = [
    { nm: "Night", hex: "#0b0e1c", ref: "C88 M82 Y52 K70" },
    { nm: "Warm paper", hex: "#fdfaf2", ref: "C2 M2 Y6 K0", border: true },
    { nm: "Amber · accent", hex: "#E8742C", ref: "Pantone 1585 C" },
    { nm: "Meridian green", hex: "#3D8E2E", ref: "Pantone 363 C" },
    { nm: "Meridian blue", hex: "#2E5FAB", ref: "Pantone 7686 C" },
    { nm: "Meridian purple", hex: "#7A2E8F", ref: "Pantone 2602 C" },
    { nm: "Cream text", hex: "#f4ead8", ref: "C3 M6 Y15 K0", border: true },
    { nm: "Dusk", hex: "#2b3558", ref: "C84 M72 Y40 K28" }
  ];

  function renderSwatches() {
    var host = document.getElementById("swatches");
    if (!host) return;
    SWATCHES.forEach(function (s) {
      var d = document.createElement("div");
      d.className = "swatch";
      d.innerHTML = '<div class="chip" style="background:' + s.hex + ';' + (s.border ? "border-bottom:1px solid var(--rule);" : "") + '"></div>' +
        '<div class="meta"><div class="nm">' + s.nm + '</div><div class="hex">' + s.hex + " · " + s.ref + '</div></div>';
      host.appendChild(d);
    });
  }

  /* ——— scaled doc previews ——— */
  function scaleMinis() {
    document.querySelectorAll(".doc-mini").forEach(function (m) {
      var stage = m.querySelector(".doc-mini-stage");
      if (!stage) return;
      var target = parseFloat(m.getAttribute("data-w")) || 440;
      var natW = stage.offsetWidth;
      if (!natW) return;
      var avail = m.parentElement ? m.parentElement.clientWidth - 2 : target;
      var w = Math.min(target, avail > 0 ? avail : target);
      var sc = w / natW;
      stage.style.transform = "scale(" + sc + ")";
      m.style.width = w + "px";
      m.style.height = (stage.offsetHeight * sc) + "px";
    });
  }

  /* ——— Gemini logo → canvas (for email signature image) ——— */
  function mix(hex, withHex, amt) {
    function p(h){ return [parseInt(h.slice(1,3),16),parseInt(h.slice(3,5),16),parseInt(h.slice(5,7),16)]; }
    var a = p(hex), b = p(withHex);
    var r = Math.round(a[0]*amt + b[0]*(1-amt));
    var g = Math.round(a[1]*amt + b[1]*(1-amt));
    var bl = Math.round(a[2]*amt + b[2]*(1-amt));
    return "rgb(" + r + "," + g + "," + bl + ")";
  }

  function drawLogo(ctx, S, wordFill) {
    // "gemini" wordmark
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = wordFill;
    ctx.font = "600 " + (52 * S) + 'px "Quicksand", sans-serif';
    var word = "gemini";
    ctx.fillText(word, 0, 54 * S);
    var ww = ctx.measureText(word).width;
    // roundels
    var cols = [C.orange, C.green, C.blue, C.purple];
    var letters = ["A", "M", "P", "M"];
    var d = 38 * S, gap = 3 * S, startX = ww + 14 * S, cy = 36 * S;
    for (var i = 0; i < 4; i++) {
      var cx = startX + i * (d + gap) + d / 2;
      var ccy = cy;
      var grad = ctx.createRadialGradient(cx - d * 0.18, ccy - d * 0.24, d * 0.05, cx, ccy, d * 0.62);
      grad.addColorStop(0, mix(cols[i], "#ffffff", 0.58));
      grad.addColorStop(0.46, cols[i]);
      grad.addColorStop(1, mix(cols[i], "#000000", 0.74));
      ctx.beginPath(); ctx.arc(cx, ccy, d / 2, 0, Math.PI * 2); ctx.fillStyle = grad; ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.font = "600 " + (18 * S) + 'px "Fredoka", sans-serif';
      ctx.textAlign = "center";
      ctx.fillText(letters[i], cx, ccy + 6.4 * S);
      ctx.textAlign = "left";
    }
    return { w: startX + 4 * (d + gap), h: 58 * S };
  }

  function renderLogoCanvas(S, wordFill) {
    var pad = 4 * S;
    var cv = document.createElement("canvas");
    cv.width = Math.round(360 * S); cv.height = Math.round(66 * S);
    var ctx = cv.getContext("2d");
    ctx.translate(pad, pad);
    var box = drawLogo(ctx, S, wordFill);
    // crop to content width
    var out = document.createElement("canvas");
    out.width = Math.round(box.w + pad * 2); out.height = cv.height;
    out.getContext("2d").drawImage(cv, 0, 0);
    return out;
  }

  /* ——— email signature ——— */
  var SIG = {
    name: "[ Your name ]", role: "[ Role / title ]",
    phone: "0330 043 0080", mobile: "[ Mobile ]",
    email: "name@geminiampm.co.uk", web: "geminiampm.co.uk",
    address: "Unit 2, Regents Business Centre, Jubilee Road, Burgess Hill, West Sussex RH15 9TL"
  };
  var SIG_LOGO = null;

  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

  function sigHTML(d, logo) {
    var ink = "#1c1812", grey = "#6b6256", accent = "#E8742C", rule = "#d8cfbf";
    var mono = "'Consolas','Courier New',monospace";
    var lead = '<td height="6" style="font-size:0;line-height:0;background:';
    return '' +
'<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;color:' + ink + ';border-collapse:collapse;">' +
  '<tr><td style="padding:0 22px 0 0;border-right:2px solid ' + rule + ';vertical-align:top;">' +
    (logo ? '<img src="' + logo + '" width="150" alt="Gemini AMPM" style="display:block;border:0;width:150px;height:auto;" />' : '<span style="font-family:Georgia,serif;font-size:24px;font-weight:bold;color:' + ink + ';">gemini</span>') +
  '</td>' +
  '<td style="padding:1px 0 1px 22px;vertical-align:top;">' +
    '<div style="font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:bold;letter-spacing:0.02em;text-transform:uppercase;color:' + ink + ';">' + esc(d.name) + '</div>' +
    '<div style="font-family:' + mono + ';font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:' + accent + ';padding-top:4px;">' + esc(d.role) + '</div>' +
    '<div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.9;color:' + ink + ';padding-top:12px;">' +
      '<span style="color:' + accent + ';font-weight:bold;">T</span>&nbsp; ' + esc(d.phone) + '&nbsp;&nbsp;&nbsp;<span style="color:' + accent + ';font-weight:bold;">M</span>&nbsp; ' + esc(d.mobile) + '<br />' +
      '<span style="color:' + accent + ';font-weight:bold;">E</span>&nbsp; <a href="mailto:' + esc(d.email) + '" style="color:' + ink + ';text-decoration:none;">' + esc(d.email) + '</a>&nbsp;&nbsp;&nbsp;<span style="color:' + accent + ';font-weight:bold;">W</span>&nbsp; <a href="https://' + esc(d.web) + '" style="color:' + ink + ';text-decoration:none;">' + esc(d.web) + '</a>' +
    '</div>' +
    '<div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:1.55;color:' + grey + ';padding-top:10px;">' + esc(d.address) + '</div>' +
    '<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;margin-top:12px;width:200px;"><tr>' +
      lead + '#E8742C;width:25%;"></td>' + lead + '#3D8E2E;width:25%;"></td>' + lead + '#2E5FAB;width:25%;"></td>' + lead + '#7A2E8F;width:25%;"></td>' +
    '</tr></table>' +
    '<div style="font-family:' + mono + ';font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:' + grey + ';padding-top:8px;">Fire &amp; Security &middot; Employee-owned &middot; est. 1997</div>' +
  '</td></tr>' +
'</table>';
  }

  function renderSig() {
    var m = document.getElementById("sig-mount");
    if (m) m.innerHTML = sigHTML(SIG, SIG_LOGO);
  }

  function buildSigFields() {
    var host = document.getElementById("sig-fields");
    if (!host) return;
    var fields = [["name","Name"],["role","Role / title"],["phone","Phone"],["mobile","Mobile"],["email","Email"],["web","Website"],["address","Address"]];
    host.innerHTML = "";
    fields.forEach(function (f) {
      var wrap = document.createElement("label");
      wrap.style.cssText = "display:flex;flex-direction:column;gap:5px;font-family:var(--mono);font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:var(--ink-3);" + (f[0]==="address" ? "grid-column:1/-1;" : "");
      var inp = document.createElement("input");
      inp.value = SIG[f[0]];
      inp.style.cssText = "font-family:var(--d-body);font-size:14px;letter-spacing:0;text-transform:none;color:var(--ink);padding:9px 11px;border:1px solid var(--rule-strong);background:#fff;";
      inp.addEventListener("input", function () { SIG[f[0]] = inp.value; renderSig(); });
      wrap.appendChild(document.createTextNode(f[1]));
      wrap.appendChild(inp);
      host.appendChild(wrap);
    });
  }

  function flash(btn, msg) {
    if (!btn) return;
    var old = btn.textContent;
    btn.textContent = msg; btn.classList.add("copied");
    setTimeout(function () { btn.textContent = old; btn.classList.remove("copied"); }, 1600);
  }

  function copyRich(html, btn, label) {
    var done = function () { flash(btn, label || "Copied ✓"); };
    if (navigator.clipboard && window.ClipboardItem) {
      var item = new ClipboardItem({ "text/html": new Blob([html], { type: "text/html" }), "text/plain": new Blob([html], { type: "text/plain" }) });
      navigator.clipboard.write([item]).then(done).catch(function () { legacyCopy(html, btn, label); });
    } else legacyCopy(html, btn, label);
  }
  function legacyCopy(html, btn, label) {
    var div = document.createElement("div");
    div.contentEditable = "true";
    div.style.cssText = "position:fixed;left:-9999px;top:0;";
    div.innerHTML = html; document.body.appendChild(div);
    var range = document.createRange(); range.selectNodeContents(div);
    var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(range);
    try { document.execCommand("copy"); flash(btn, label || "Copied ✓"); } catch (e) { flash(btn, "Press Ctrl+C"); }
    sel.removeAllRanges(); div.remove();
  }
  function copyPlain(text, btn, label) {
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(function () { flash(btn, label || "Copied ✓"); });
  }

  function start() {
    renderSwatches();
    scaleMinis();
    window.addEventListener("resize", scaleMinis);
    setTimeout(scaleMinis, 400);
    buildSigFields();

    var cBtn = document.getElementById("sig-copy");
    var hBtn = document.getElementById("sig-copy-html");
    if (cBtn) cBtn.addEventListener("click", function () { copyRich(sigHTML(SIG, SIG_LOGO), this, "Signature copied ✓"); });
    if (hBtn) hBtn.addEventListener("click", function () { copyPlain(sigHTML(SIG, SIG_LOGO), this, "HTML copied ✓"); });

    var go = function () {
      try { SIG_LOGO = renderLogoCanvas(4, "#1c1812").toDataURL("image/png"); } catch (e) {}
      renderSig(); scaleMinis();
    };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(go); else go();
    setTimeout(go, 900);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
