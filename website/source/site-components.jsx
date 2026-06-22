// Site components — header, footer, shape marks, reveal hook

// PALETTE reads from CSS variables so the four-colour family is tweakable
// from the host App without rewiring every component.
const PALETTE = ["var(--ampm-c1)", "var(--ampm-c2)", "var(--ampm-c3)", "var(--ampm-c4)"];

const Shapes = ({ shape = "line", size = 18, width }) => {
  if (shape === "line") {
    return (
      <div className="shapes line" style={{ width: width || 110 }}>
        {PALETTE.map((c, i) => <span key={i} style={{ flex: 1, background: c }} />)}
      </div>
    );
  }
  const items = PALETTE.map((c, i) => {
    if (shape === "circle") return <span key={i} style={{ width: size, height: size, borderRadius: "50%", background: c }} />;
    if (shape === "capsule") return <span key={i} style={{ width: size * 1.7, height: size * 0.7, borderRadius: size, background: c }} />;
    if (shape === "square") return <span key={i} style={{ width: size, height: size, background: c }} />;
    if (shape === "diamond") return <span key={i} style={{ width: size, height: size, background: c, transform: "rotate(45deg)" }} />;
    if (shape === "bar") {
      const heights = [size * 0.6, size * 1.0, size * 1.4, size * 0.85];
      return <span key={i} style={{ width: size * 0.5, height: heights[i], background: c }} />;
    }
    return null;
  });
  return <div className={`shapes ${shape}`} style={{ height: shape === "bar" ? size * 1.4 : "auto" }}>{items}</div>;
};

const BrandMark = ({ onClick, color }) => (
  <div className="brand-mark" onClick={onClick}>
    <div className="word" style={{ color: color || "inherit" }}>AMPM</div>
    <div className="meridian">
      {PALETTE.map((c, i) => <span key={i} style={{ background: c }} />)}
    </div>
  </div>
);

const BigMeridian = ({ width }) => (
  <div className="big-meridian" style={{ maxWidth: width }}>
    {PALETTE.map((c, i) => <span key={i} style={{ background: c }} />)}
  </div>
);

const NAV = [
  { id: "home", label: "Home" },
  { id: "companies", label: "Companies" },
  { id: "approach", label: "Approach" },
  { id: "work", label: "Work" },
  { id: "insights", label: "Insights" },
  { id: "people", label: "People" },
  { id: "contact", label: "Contact" },
];

const ROUTE_GROUP = {
  "home": "home",
  "companies": "companies",
  "company": "companies",
  "approach": "approach",
  "work": "work",
  "case-study": "work",
  "insights": "insights",
  "insight": "insights",
  "people": "people",
  "contact": "contact",
};

const SiteHeader = ({ route, setRoute, dark }) => {
  const routeName = (route || "").split(":")[0];
  const activeGroup = ROUTE_GROUP[routeName] || routeName;
  return (
  <header className={`site-header ${dark ? "is-dark" : ""}`}>
    <div className="site-header-inner">
      <BrandMark onClick={() => setRoute("home")} />
      <nav>
        {NAV.map(n => (
          <a key={n.id}
             className={activeGroup === n.id ? "is-active" : ""}
             onClick={() => setRoute(n.id)}>{n.label}</a>
        ))}
      </nav>
    </div>
  </header>
  );
};

const ACCREDS = ["FIA", "BAFE", "NSI Gold", "FIRAS", "BSC", "FPA", "CHAS Elite", "Avetta", "SafeContractor", "Cyber Essentials", "Constructionline Gold", "BESA", "CleanDucts"];

const SiteFooter = ({ setRoute }) => (
  <footer className="site-footer">
    <div className="site-footer-inner">
      <div>
        <div style={{ marginBottom: 22 }}>
          <BrandMark color="var(--paper)" />
        </div>
        <p style={{ fontFamily: "var(--serif)", fontSize: 18, lineHeight: 1.45, color: "rgba(246, 243, 236, 0.78)", maxWidth: "32ch", margin: 0 }}>
          The holding company for the businesses that look after buildings buyers cannot afford to fail.
        </p>
      </div>
      <div>
        <h5>Companies</h5>
        <ul>
          <li><a href="https://geminiampm.co.uk" target="_blank" rel="noopener noreferrer">Gemini AMPM ↗</a></li>
          <li><a onClick={() => setRoute("company:bs")}>AMPM Building Services</a></li>
          <li><a onClick={() => setRoute("company:fac")}>AMPM Facilities</a></li>
          <li><a onClick={() => setRoute("company:live")}>AMPM Live</a></li>
          <li><a onClick={() => setRoute("company:vent")}>AMPM Ventures</a></li>
          <li><a onClick={() => setRoute("company:ac")}>AMPM Academy</a></li>
        </ul>
      </div>
      <div>
        <h5>Group</h5>
        <ul>
          <li><a onClick={() => setRoute("approach")}>Approach</a></li>
          <li><a onClick={() => setRoute("work")}>Work · case studies</a></li>
          <li><a onClick={() => setRoute("insights")}>Insights</a></li>
          <li><a onClick={() => setRoute("people")}>People</a></li>
          <li><a onClick={() => setRoute("contact")}>Contact</a></li>
        </ul>
      </div>
      <div>
        <h5>Registered</h5>
        <ul style={{ fontSize: 13, color: "rgba(246, 243, 236, 0.78)" }}>
          <li>AMPM Group Limited</li>
          <li>CRN 17136810</li>
          <li>Burgess Hill,</li>
          <li>West Sussex</li>
        </ul>
      </div>
    </div>
    <div style={{ maxWidth: 1280, margin: "60px auto 24px", padding: "0 0" }}>
      <h5 style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(246, 243, 236, 0.5)", marginBottom: 16 }}>Accreditations across the group</h5>
      <div className="trust-strip">
        {ACCREDS.map(a => <span key={a} className="trust-chip">{a}</span>)}
      </div>
    </div>
    <div className="site-footer-meta">
      <span>© {new Date().getFullYear()} AMPM Group Limited</span>
      <span>Employee-owned subsidiary · EOT since Oct 2024</span>
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

Object.assign(window, { Shapes, BrandMark, BigMeridian, SiteHeader, SiteFooter, useReveal, Counter, PALETTE, ACCREDS, NAV });
