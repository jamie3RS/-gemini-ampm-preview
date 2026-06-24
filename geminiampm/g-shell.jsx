// Gemini AMPM — shared shell components. Same vocabulary as AMPM Building
// Services (the group DNA) — moon mark in place of the sun, est-1997 line.

// Top-level routes mirror the live information architecture.
const NAV_LINKS = [
  { id: "services", label: "Services" },
  { id: "sectors", label: "Sectors" },
  { id: "casestudies", label: "Casework" },
  { id: "news", label: "News" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

// ——— Moon mark (the group sun-mark, lower half) ———
const MoonMark = () => <span className="moonmark" aria-hidden="true" />;

// ——— Gemini AMPM logo — production PNG artwork from the design handoff.
// Nav uses the compact "notag" lockup; Footer uses the full lockup with
// strapline (className="lg"). Two variants stack and CSS swaps which is
// visible depending on the surface — cream on dark, charcoal on light. ———
const GeminiLogo = ({ className = "" }) => {
  const isLg = (" " + className + " ").indexOf(" lg ") >= 0;
  const lightSrc = isLg ? "assets/gemini-logo.png" : "assets/gemini-logo-notag.png";
  const darkSrc  = isLg ? "assets/gemini-logo-rev.png" : "assets/gemini-logo-notag-rev.png";
  return (
    <span className={"glogo " + className} aria-label="Gemini AMPM — Asset Management Planned Maintenance">
      <img className="glogo-img glogo-img--light" src={lightSrc} alt="" aria-hidden="true" />
      <img className="glogo-img glogo-img--dark"  src={darkSrc}  alt="Gemini AMPM" />
    </span>
  );
};

// ——— Four-colour meridian (shared with the group) ———
const Meridian = ({ className = "fmer" }) => (
  <span className={className} aria-hidden="true">
    <span style={{ background: "var(--m-green)" }} />
    <span style={{ background: "var(--m-purple)" }} />
    <span style={{ background: "var(--m-orange)" }} />
    <span style={{ background: "var(--m-blue)" }} />
  </span>
);

// ——— Stamp marker (dark home arc) ———
const GStamp = ({ time, shift }) => (
  <div className="gstamp reveal">
    <span className="tick"></span>{time}<span className="shift">{shift}</span>
  </div>
);

// ——— Kicker (sub-pages) ———
const Kicker = ({ children, dark }) => (
  <div className={"kicker" + (dark ? " on-dark" : "")}>{children}</div>
);

// ——— Day-arc colour palette — pre-dawn → first light, top→bottom.
// Sky-realistic: ~4:30am deep night → 5:00 indigo → 5:30 violet → 6:00
// rose/peach → 6:12 brand-orange sunrise. 52 stops, front-loaded with
// near-identical cool tones so the early scroll feels almost still;
// the warm dawn arrives in the bottom quarter. The final stop lands on
// the Gemini brand orange (#E8742C). ———
const SUN_COLOURS = [
  // 0–25% scroll · 4:30–5:00 pre-dawn · deep night blue, near-imperceptible shifts
  "#0a1130","#0c1334","#0e1538","#10173c","#121940","#141b44","#161d48","#181f4c","#1a2150","#1c2354",
  "#1e2558","#20275c","#222960","#242b64","#262d68","#282f6c","#2a3170","#2c3374","#2e3578","#30377c",
  // 25–50% scroll · 5:00–5:30 deep indigo → violet · the first felt warming
  "#323980","#363984","#3a3988","#3e398c","#423990","#463994","#4a3998","#4e399c","#5239a0","#5639a4",
  // 50–75% scroll · 5:30–6:00 violet → muted rose · visible turn toward dawn
  "#5a3aa0","#603a98","#683b90","#703c87","#783c7c","#823c72","#8c3c68","#963c5e","#a03c54","#aa3c4a",
  // 75–90% scroll · 6:00–6:10 rose → peach → soft orange
  "#b44040","#bc4836","#c4502e","#cc5828","#d46024","#dc6822","#e07024","#e47828",
  // 90–100% scroll · 6:10–6:12 first light · the brand orange sunrise
  "#e87830","#e8762e","#e8742c","#E8742C"
];

// ——— Nav ———
const Nav = ({ route, setRoute, phone }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const nav = ref.current;
    if (!nav) return;
    const rootEl = document.documentElement;
    let ticking = false;
    const update = () => {
      ticking = false;
      nav.classList.toggle("scrolled", window.scrollY > 10);
      let dark = false;
      document.querySelectorAll("[data-nav-dark]").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < 64 && r.bottom > 0) dark = true;
      });
      nav.classList.toggle("dark", dark);
      const max = rootEl.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      const idx = Math.min(SUN_COLOURS.length - 1, Math.floor(p * SUN_COLOURS.length));
      rootEl.style.setProperty("--sun-color", SUN_COLOURS[idx]);
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
    const t1 = setTimeout(update, 250);
    const t2 = setTimeout(update, 700);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); clearTimeout(t1); clearTimeout(t2); };
  }, [route]);

  const go = (id) => (e) => { e.preventDefault(); setRoute(id); };
  const tel = "tel:" + String(phone).replace(/\s+/g, "");
  return (
    <nav className="nav dark" id="nav" ref={ref} data-screen-label="Nav">
      <svg className="sunmark" viewBox="0 0 32 32" aria-hidden="true">
        <circle className="sun-disc" cx="16" cy="16" r="10" />
      </svg>
      <a className="wm" href="#home" onClick={go("home")}>
        <GeminiLogo />
      </a>
      <span className="est">Fire &amp; Security &middot; est.&nbsp;1997</span>
      <div className="links">
        {NAV_LINKS.map((p) => (
          <a key={p.id} href={"#" + p.id} className={route === p.id ? "active" : ""} onClick={go(p.id)}>{p.label}</a>
        ))}
      </div>
      <a className="phone" href={tel}>{phone}</a>
    </nav>
  );
};

// ——— Footer (sister of the AMPM Building Services footer) ———
const Footer = ({ setRoute, phone }) => {
  const go = (id) => (e) => { e.preventDefault(); setRoute(id); };
  return (
    <footer className="foot" data-nav-dark>
      <div className="foot-inner">
        <div>
          <div className="fwm"><GeminiLogo className="lg" /></div>
          <p className="ftag">
            Fire, security, ventilation, gas suppression and passive fire &mdash; designed, installed, monitored and maintained since 1997. An employee-owned company of AMPM Group.
          </p>
        </div>
        <div>
          <h5>Services</h5>
          <ul>
            {PILLARS.map((p) => (
              <li key={p.id}><a href={"#" + p.id} onClick={go(p.id)} dangerouslySetInnerHTML={{ __html: p.full }} /></li>
            ))}
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li><a href="#about" onClick={go("about")}>About us</a></li>
            <li><a href="#why" onClick={go("why")}>Why choose Gemini</a></li>
            <li><a href="#sectors" onClick={go("sectors")}>Sectors</a></li>
            <li><a href="#casestudies" onClick={go("casestudies")}>Case studies</a></li>
            <li><a href="#news" onClick={go("news")}>News &amp; insights</a></li>
            <li><a href={CONTACT.portal} target="_blank" rel="noopener noreferrer">Client portal ↗</a></li>
          </ul>
        </div>
        <div>
          <h5>Get in touch</h5>
          <ul>
            <li><a href={"tel:" + String(phone).replace(/\s+/g, "")}>{phone}</a></li>
            <li><a href="mailto:info@geminiampm.co.uk">info@geminiampm.co.uk</a></li>
            <li className="muted" style={{ marginTop: 8 }} dangerouslySetInnerHTML={{ __html: CONTACT.address }} />
          </ul>
          <h5 style={{ marginTop: 22 }}>AMPM Group</h5>
          <ul>
            <li><a href="https://ampmgroup.co.uk" target="_blank" rel="noopener noreferrer">ampmgroup.co.uk ↗</a></li>
            <li><a href="https://ampm.co.uk" target="_blank" rel="noopener noreferrer">AMPM Building Services ↗</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-meta">
        <span>&copy; {new Date().getFullYear()} Gemini AMPM Ltd &middot; An AMPM Group company &middot; est.&nbsp;1997</span>
        <span>Employee-owned (EOT) &middot; Burgess Hill, West Sussex</span>
      </div>
    </footer>
  );
};

// ——— Reveal on scroll (plain geometry — robust in sandboxed iframes) ———
const useReveal = (dep) => {
  React.useEffect(() => {
    let raf = 0, killed = false;
    const all = () => Array.prototype.slice.call(document.querySelectorAll(".reveal:not(.in)"));
    const pass = () => {
      raf = 0;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      all().forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > -50) el.classList.add("in");
      });
    };
    const onScroll = () => { if (!raf && !killed) raf = requestAnimationFrame(pass); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    pass();
    const t1 = setTimeout(pass, 300);
    const t2 = setTimeout(pass, 900);
    const t3 = setTimeout(() => { document.querySelectorAll(".reveal:not(.in)").forEach((el) => el.classList.add("in")); }, 1600);
    return () => { killed = true; window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [dep]);
};

// ——— Page-top scroll helper used by every sub-page ———
const ScrollTop = ({ dep }) => {
  React.useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [dep]);
  return null;
};

Object.assign(window, { NAV_LINKS, MoonMark, GeminiLogo, Meridian, GStamp, Kicker, Nav, Footer, useReveal, ScrollTop });
