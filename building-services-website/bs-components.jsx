// AMPM Building Services — site components
// Sister to the Group site but with BS-specific brand mark and footer.

const PALETTE = ["var(--ampm-c1)", "var(--ampm-c2)", "var(--ampm-c3)", "var(--ampm-c4)"];

// BS brand mark — wordmark + sub-brand line + meridian
const BSBrand = ({ onClick }) => (
  <div className="bs-brand" onClick={onClick}>
    <div className="ampm-word">AMPM</div>
    <div className="divider"></div>
    <div className="sub">
      <div className="name">Building Services</div>
      <div className="meridian">
        {PALETTE.map((c, i) => <span key={i} style={{ background: c }} />)}
      </div>
    </div>
  </div>
);

// "Part of AMPM Group" badge — used in headers / footers / asides
const GroupBadge = ({ prominent = false }) => (
  <span className={`group-badge ${prominent ? "is-prominent" : ""}`}>
    <span className="meridian">
      {PALETTE.map((c, i) => <span key={i} style={{ background: c }} />)}
    </span>
    Part of AMPM Group
  </span>
);

const NAV = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

const SiteHeader = ({ route, setRoute, dark }) => (
  <header className={`site-header ${dark ? "is-dark" : ""}`}>
    <div className="site-header-inner">
      <BSBrand onClick={() => setRoute("home")} />
      <nav>
        {NAV.map(n => (
          <a key={n.id}
             className={route === n.id ? "is-active" : ""}
             onClick={() => setRoute(n.id)}>{n.label}</a>
        ))}
      </nav>
      <a className="header-cta" onClick={() => setRoute("contact")}>Request a quote</a>
    </div>
  </header>
);

const SiteFooter = ({ setRoute }) => (
  <footer className="site-footer">
    <div className="site-footer-inner">
      <div>
        <BSBrand />
        <p style={{ fontFamily: "var(--serif)", fontSize: 16, lineHeight: 1.5, color: "rgba(246, 243, 236, 0.82)", maxWidth: "32ch", margin: "22px 0 0" }}>
          M&amp;E, fit-out, roofing and groundworks. One contractor, one PM, one accountable team &mdash; the building-services arm of AMPM Group.
        </p>
        <div style={{ marginTop: 24 }}>
          <span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(246, 243, 236, 0.55)" }}>
            London &amp; the South of England
          </span>
        </div>
      </div>
      <div>
        <h5>Site</h5>
        <ul>
          <li><a onClick={() => setRoute("home")}>Home</a></li>
          <li><a onClick={() => setRoute("services")}>Services</a></li>
          <li><a onClick={() => setRoute("about")}>About</a></li>
          <li><a onClick={() => setRoute("work")}>Work</a></li>
          <li><a onClick={() => setRoute("contact")}>Contact</a></li>
        </ul>
      </div>
      <div>
        <h5>Direct lines</h5>
        <ul>
          <li><a href="mailto:hello@ampm.co.uk">hello@ampm.co.uk</a></li>
          <li><a href="mailto:bids@ampm.co.uk">bids@ampm.co.uk</a></li>
          <li><a href="mailto:suppliers@ampm.co.uk">suppliers@ampm.co.uk</a></li>
          <li><a href="mailto:careers@ampm.co.uk">careers@ampm.co.uk</a></li>
        </ul>
      </div>
      <div>
        <h5>AMPM Group</h5>
        <ul style={{ fontSize: 13, color: "rgba(246, 243, 236, 0.82)" }}>
          <li><a href="https://ampm.co.uk" target="_blank" rel="noopener noreferrer">ampm.co.uk &nearr;</a></li>
          <li><a href="https://geminiampm.co.uk" target="_blank" rel="noopener noreferrer">Gemini AMPM &nearr;</a></li>
          <li style={{ marginTop: 8, opacity: 0.75 }}>AMPM Building Services Limited</li>
          <li style={{ opacity: 0.75 }}>A subsidiary of AMPM Group Limited</li>
          <li style={{ opacity: 0.75 }}>Burgess Hill, West Sussex</li>
        </ul>
      </div>
    </div>
    <div className="site-footer-meta">
      <span>&copy; {new Date().getFullYear()} AMPM Building Services Limited</span>
      <span>A subsidiary of AMPM Group &middot; CRN 17136810</span>
    </div>
  </footer>
);

// Reveal-on-scroll
const useReveal = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.is-in)");
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
};

// Counter that animates on first visibility
const Counter = ({ to, suffix = "", duration = 1200 }) => {
  const ref = React.useRef(null);
  const [val, setVal] = React.useState(0);
  const [started, setStarted] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current || started) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setStarted(true);
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setVal(Math.round(to * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to, started, duration]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
};

// SVG capability-tile placeholder graphic — abstract trade illustration
const CapGraphic = ({ kind }) => {
  // 4 hand-built abstract SVGs, one per work type
  if (kind === "me-pipework") {
    return (
      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="180" fill="var(--paper-2)" />
        <g fill="none" stroke="var(--ink)" strokeWidth="2">
          <path d="M 0 60 L 80 60 L 80 120 L 220 120 L 220 40 L 320 40" />
          <path d="M 0 100 L 140 100 L 140 150 L 240 150 L 240 80 L 320 80" strokeOpacity="0.5" />
        </g>
        <g fill="var(--bs-lead)">
          <circle cx="80" cy="60" r="6" />
          <circle cx="220" cy="40" r="6" />
          <circle cx="140" cy="100" r="6" fillOpacity="0.5" />
          <circle cx="240" cy="80" r="6" fillOpacity="0.5" />
        </g>
        <rect x="80" y="120" width="20" height="16" fill="var(--ink)" />
      </svg>
    );
  }
  if (kind === "electrical") {
    return (
      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="180" fill="var(--paper-2)" />
        <g stroke="var(--ink)" strokeWidth="2" fill="none">
          <line x1="40" y1="0" x2="40" y2="60" />
          <line x1="80" y1="0" x2="80" y2="60" />
          <line x1="120" y1="0" x2="120" y2="60" />
        </g>
        <rect x="20" y="55" width="120" height="70" fill="var(--ink)" />
        <g fill="var(--paper)" fontFamily="var(--mono)" fontSize="9" letterSpacing="0.1em">
          <text x="35" y="78">CB</text><text x="60" y="78">CB</text><text x="85" y="78">CB</text><text x="110" y="78">CB</text>
          <text x="35" y="105">CB</text><text x="60" y="105">CB</text><text x="85" y="105">CB</text><text x="110" y="105">CB</text>
        </g>
        <g stroke="var(--bs-lead)" strokeWidth="2" fill="none">
          <path d="M 80 125 L 80 145 L 280 145" />
        </g>
        <rect x="270" y="120" width="40" height="50" fill="none" stroke="var(--ink)" strokeWidth="2" />
        <line x1="270" y1="140" x2="310" y2="140" stroke="var(--ink)" strokeWidth="1" />
        <text x="278" y="135" fontFamily="var(--mono)" fontSize="8" fill="var(--ink-2)">EV</text>
      </svg>
    );
  }
  if (kind === "fitout") {
    return (
      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="180" fill="var(--paper-2)" />
        <rect x="20" y="40" width="280" height="120" fill="none" stroke="var(--ink)" strokeWidth="2" />
        <line x1="120" y1="40" x2="120" y2="160" stroke="var(--ink)" strokeWidth="1.5" />
        <line x1="220" y1="40" x2="220" y2="160" stroke="var(--ink)" strokeWidth="1.5" />
        <g fill="var(--bs-lead)" fillOpacity="0.18">
          <rect x="22" y="42" width="96" height="116" />
        </g>
        <g fill="var(--ink)" fillOpacity="0.5">
          <rect x="222" y="42" width="76" height="116" />
        </g>
        <g stroke="var(--ink-3)" strokeWidth="1" strokeDasharray="3 3">
          <line x1="20" y1="100" x2="300" y2="100" />
        </g>
        <g fontFamily="var(--mono)" fontSize="9" fill="var(--ink-2)" letterSpacing="0.12em">
          <text x="50" y="170">CAT-B</text>
          <text x="148" y="170">SHELL</text>
          <text x="240" y="170">RECEPTION</text>
        </g>
      </svg>
    );
  }
  if (kind === "roof") {
    return (
      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="180" fill="var(--paper-2)" />
        <path d="M 20 120 L 20 80 L 160 30 L 300 80 L 300 120 Z" fill="var(--ink)" />
        <path d="M 30 80 L 160 30 L 290 80" stroke="var(--bs-lead)" strokeWidth="3" fill="none" />
        <g fill="var(--paper)" opacity="0.4">
          <rect x="50" y="90" width="200" height="20" />
        </g>
        <g stroke="var(--paper)" strokeWidth="1" opacity="0.5">
          <line x1="60" y1="80" x2="120" y2="55" />
          <line x1="120" y1="55" x2="180" y2="35" />
          <line x1="180" y1="35" x2="240" y2="55" />
          <line x1="240" y1="55" x2="300" y2="80" />
        </g>
        <g fontFamily="var(--mono)" fontSize="9" fill="var(--paper)" letterSpacing="0.1em">
          <text x="20" y="150">FLAT &middot; GRP &middot; EPDM &middot; PITCHED</text>
        </g>
      </svg>
    );
  }
  // generic
  return (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="var(--paper-2)" />
    </svg>
  );
};

Object.assign(window, { PALETTE, BSBrand, GroupBadge, NAV, SiteHeader, SiteFooter, useReveal, Counter, CapGraphic });
