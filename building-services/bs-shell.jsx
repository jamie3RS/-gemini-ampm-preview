// AMPM Building Services — shared components (launch vocabulary).

const PAGES = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "compliance", label: "Compliance" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

// Sun mark — radiant sun with pulsing rays; the face (day/night terminator)
// rotates with scroll on the home day-arc. Colour inverts via currentColor.
const SunMark = () => {
  const rays = [];
  for (let i = 0; i < 8; i++) {
    const a = (i * 45) * Math.PI / 180;
    const x1 = (16 + Math.cos(a) * 9).toFixed(2), y1 = (16 + Math.sin(a) * 9).toFixed(2);
    const x2 = (16 + Math.cos(a) * 12.6).toFixed(2), y2 = (16 + Math.sin(a) * 12.6).toFixed(2);
    rays.push(<line key={i} className="sun-ray" x1={x1} y1={y1} x2={x2} y2={y2} />);
  }
  return (
    <svg className="sunmark" viewBox="0 0 32 32" aria-hidden="true">
      <g className="sun-pulse">{rays}</g>
      <circle className="sun-ring" cx="16" cy="16" r="6" />
      <g className="sun-rot"><path className="sun-lit" d="M10 16 A6 6 0 0 1 22 16 Z" /></g>
    </svg>
  );
};

// Time-stamp marker — the day-arc signature, reused as a section device.
const Stamp = ({ time, shift, dark }) => (
  <div className="stamp reveal" style={dark ? { color: "var(--night-text)" } : null}>
    <span className="tick"></span>{time}<span className="shift">{shift}</span>
  </div>
);

// Kicker label (Archivo, used on sub-pages)
const Kicker = ({ children, dark }) => (
  <div className={"kicker" + (dark ? " on-dark" : "")}>{children}</div>
);

// Four-colour meridian
const Meridian = ({ className = "fmer" }) => (
  <span className={className} aria-hidden="true">
    <span style={{ background: "var(--m-green)" }} />
    <span style={{ background: "var(--m-purple)" }} />
    <span style={{ background: "var(--m-orange)" }} />
    <span style={{ background: "var(--m-blue)" }} />
  </span>
);

// ——— Nav ———
const Nav = ({ route, setRoute, phone }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const nav = ref.current;
    if (!nav) return;
    const isHome = route === "home";
    const rootEl = document.documentElement;
    if (!isHome) rootEl.style.setProperty("--sun", "20deg");
    let ticking = false;
    const update = () => {
      ticking = false;
      nav.classList.toggle("scrolled", window.scrollY > 10);
      // dark only where a dark region overlaps the top of the viewport
      let dark = false;
      document.querySelectorAll("[data-nav-dark]").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < 64 && r.bottom > 0) dark = true;
      });
      nav.classList.toggle("dark", dark);
      // day-arc sun: lit half rotates 0deg (dawn, top) -> 180deg (night, bottom)
      if (isHome) {
        const max = rootEl.scrollHeight - window.innerHeight;
        const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
        rootEl.style.setProperty("--sun", (p * 180).toFixed(1) + "deg");
      }
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
    const t1 = setTimeout(update, 300);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); clearTimeout(t1); };
  }, [route]);

  const go = (id) => (e) => { e.preventDefault(); setRoute(id); };
  const tel = "tel:" + String(phone).replace(/\s+/g, "");
  return (
    <nav className="nav" id="nav" ref={ref} data-screen-label="Nav">
      <SunMark />
      <a className="wm" href="#" onClick={go("home")}>AMPM <small>BUILDING SERVICES</small></a>
      <div className="links">
        {PAGES.filter((p) => p.id !== "home").map((p) => (
          <a key={p.id} href={"#" + p.id} className={route === p.id ? "active" : ""} onClick={go(p.id)}>{p.label}</a>
        ))}
      </div>
      <a className="phone" href={tel}>{phone}</a>
    </nav>
  );
};

// ——— Footer ———
const Footer = ({ setRoute, phone }) => {
  const go = (id) => (e) => { e.preventDefault(); setRoute(id); };
  return (
    <footer className="foot" data-nav-dark>
      <div className="foot-inner">
        <div>
          <div className="fwm">AMPM</div>
          <Meridian />
          <p className="ftag">
            MEPH, Commercial, Fabric and Groundworks &mdash; one accountable contractor for London and the South East. The building-services arm of AMPM Group.
          </p>
        </div>
        <div>
          <h5>Site</h5>
          <ul>
            {PAGES.map((p) => <li key={p.id}><a href={"#" + p.id} onClick={go(p.id)}>{p.label}</a></li>)}
          </ul>
        </div>
        <div>
          <h5>Direct lines</h5>
          <ul>
            <li><a href="mailto:tenders@ampm.co.uk">tenders@ampm.co.uk</a></li>
            <li><a href="mailto:hello@ampm.co.uk">hello@ampm.co.uk</a></li>
            <li><a href="mailto:suppliers@ampm.co.uk">suppliers@ampm.co.uk</a></li>
            <li><a href="mailto:careers@ampm.co.uk">careers@ampm.co.uk</a></li>
            <li><a href={"tel:" + String(phone).replace(/\s+/g, "")}>{phone}</a></li>
          </ul>
        </div>
        <div>
          <h5>AMPM Group</h5>
          <ul>
            <li><a href="https://ampmgroup.co.uk" target="_blank" rel="noopener noreferrer">ampmgroup.co.uk ↗</a></li>
            <li><a href="https://geminiampm.co.uk" target="_blank" rel="noopener noreferrer">Gemini AMPM ↗</a></li>
            <li className="muted" style={{ marginTop: 8 }}>AMPM Building Services Ltd</li>
            <li className="muted">A subsidiary of AMPM Group</li>
            <li className="muted">Burgess Hill, West Sussex</li>
          </ul>
        </div>
      </div>
      <div className="foot-meta">
        <span>&copy; {new Date().getFullYear()} AMPM Building Services Limited</span>
        <span>An AMPM Group company &middot; CRN 17225766</span>
      </div>
    </footer>
  );
};

// ——— Reveal on scroll (plain geometry — IntersectionObserver is unreliable
// in sandboxed/embedded iframes, per the launch page's own note) ———
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
    // hard failsafe — never leave content trapped at opacity 0
    const t3 = setTimeout(() => { document.querySelectorAll(".reveal:not(.in)").forEach((el) => el.classList.add("in")); }, 1600);
    return () => { killed = true; window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [dep]);
};

// ——— Counter ———
const Counter = ({ to, duration = 1100 }) => {
  const ref = React.useRef(null);
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!ref.current) return;
    let done = false;
    const run = () => {
      if (done) return; done = true;
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        setVal(Math.round(to * (1 - Math.pow(1 - t, 3))));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { run(); io.disconnect(); } }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{val}</span>;
};

// ——— Capability placeholder graphic ———
const CapGraphic = ({ kind }) => {
  if (kind === "me-pipework") return (
    <svg viewBox="0 0 320 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <rect width="320" height="240" fill="#efe6d4" />
      <g fill="none" stroke="#1c1812" strokeWidth="2.5">
        <path d="M 0 80 L 90 80 L 90 160 L 230 160 L 230 50 L 320 50" />
        <path d="M 0 130 L 150 130 L 150 200 L 250 200 L 250 100 L 320 100" strokeOpacity="0.45" />
      </g>
      <g fill="var(--m-green)"><circle cx="90" cy="80" r="7" /><circle cx="230" cy="50" r="7" /></g>
    </svg>
  );
  if (kind === "electrical") return (
    <svg viewBox="0 0 320 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <rect width="320" height="240" fill="#efe6d4" />
      <g stroke="#1c1812" strokeWidth="2.5" fill="none"><line x1="50" y1="0" x2="50" y2="80" /><line x1="100" y1="0" x2="100" y2="80" /><line x1="150" y1="0" x2="150" y2="80" /></g>
      <rect x="28" y="74" width="150" height="84" fill="#1c1812" />
      <g stroke="var(--m-green)" strokeWidth="2.5" fill="none"><path d="M 100 158 L 100 188 L 285 188" /></g>
      <rect x="270" y="158" width="44" height="60" fill="none" stroke="#1c1812" strokeWidth="2.5" />
    </svg>
  );
  if (kind === "fitout") return (
    <svg viewBox="0 0 320 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <rect width="320" height="240" fill="#efe6d4" />
      <rect x="24" y="40" width="272" height="160" fill="none" stroke="#1c1812" strokeWidth="2.5" />
      <line x1="130" y1="40" x2="130" y2="200" stroke="#1c1812" strokeWidth="2" />
      <line x1="220" y1="40" x2="220" y2="200" stroke="#1c1812" strokeWidth="2" />
      <rect x="26" y="42" width="102" height="156" fill="var(--m-green)" fillOpacity="0.16" />
    </svg>
  );
  return (
    <svg viewBox="0 0 320 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <rect width="320" height="240" fill="#efe6d4" />
      <path d="M 24 170 L 24 110 L 160 50 L 296 110 L 296 170 Z" fill="#1c1812" />
      <path d="M 36 110 L 160 50 L 284 110" stroke="var(--m-orange)" strokeWidth="4" fill="none" />
    </svg>
  );
};

Object.assign(window, { PAGES, SunMark, Stamp, Kicker, Meridian, Nav, Footer, useReveal, Counter, CapGraphic });
