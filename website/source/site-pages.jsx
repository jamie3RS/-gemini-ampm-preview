// Page bodies — Home, Companies, Approach, People, Contact

const COMPANIES = [
  { id: "gemini", name: "Gemini AMPM", shape: "circle", status: "live", href: "https://geminiampm.co.uk", strap: "Fire · Security · Ventilation · Gas suppression · Passive fire · Compliance",
    blurb: "The EOT-owned flagship. Life-safety and compliance work across commercial estates, government, and tier-one main contractors. The operating depth — Uptick, Procore, M365 — sits here." },
  { id: "bs", name: "AMPM Building Services", shape: "capsule", status: "yr1", strap: "M&E · Building services · Year-1 trading",
    blurb: "Born inside the group. Takes the M&E and broader building-services scope that sits adjacent to Gemini's life-safety work. Operates arm's length, benchmarked, terminable. First invoice end of summer 2026." },
  { id: "fac", name: "AMPM Facilities", shape: "square", status: "future", strap: "Aggregated facilities · Self + supply chain",
    blurb: "FM aggregator for estates that want one delivery partner across hard and soft services. Self-delivers what the group does; orchestrates the rest. Target launch Q3 2027." },
  { id: "live", name: "AMPM Live", shape: "bar", status: "future", strap: "Group client portal · Live assets · Live compliance · AI assistant",
    blurb: "One login across every AMPM company. Live asset register, live compliance, live service-desk visibility, and an AI assistant trained on the group's frameworks. Built on Uptick's client layer, branded AMPM across the businesses." },
  { id: "vent", name: "AMPM Ventures", shape: "circle", status: "future", strap: "Acquisition vehicle · Acqui-hire · Open to approaches",
    blurb: "The route through which acquisition and acqui-hire opportunities — operational depth, regional reach, complementary subsidiaries — attach to the group. Capital-backed, governed independently of trading subs. Owners who see an obvious fit are welcome to approach: ventures@ampm.co.uk." },
  { id: "ac", name: "AMPM Academy", shape: "diamond", status: "future", strap: "Apprenticeships · Skills training · Accreditation · Compliance authority",
    blurb: "The compliance-authority play — and the group's people pipeline. Apprenticeships and skills training across the trades; professional development on the commercial and admin side; accredited pathways for engineers progressing toward chartership. The group's regulatory IP — golden thread mapping, BSA navigation, audit frameworks — earns income here as training and accreditation. The next generation of AMPM is grown here." },
];

const STATUS_LABEL = { live: "LIVE · EOT", yr1: "YEAR 1", future: "FUTURE" };

// ——— Home ———
const HERO_VARIANTS = {
  buildings:  { eyebrow: "Holding company · Established 2026", h: <>Holding the companies<br/>that hold the <em>buildings</em>.</>,
                d: "AMPM is the group above Gemini AMPM and the businesses that will sit beside it. Compliance-led asset management, life-safety, and building services — assembled under one ownership for buyers who cannot afford to pick wrong." },
  mothership: { eyebrow: "Holding company · Established 2026", h: <>The <em>mothership</em><br/>for buildings that<br/>cannot afford to fail.</>,
                d: "A holding company built around compliance-led asset management. Gemini AMPM at the centre, building services beside it, an FM aggregator and a productised platform on the horizon. One ownership, six shapes." },
  six:        { eyebrow: "Holding company · Established 2026", h: <>Six companies.<br/><em>One mothership.</em></>,
                d: "Each company underneath AMPM keeps its own name, its own mark, its own focus. The thread is the four-colour palette and a shared operating posture: enterprise stack, compliance-led, audit-ready by default." },
};

const HomePage = ({ setRoute, tweaks = {} }) => {
  useReveal();
  const hero = HERO_VARIANTS[tweaks.heroVariant] || HERO_VARIANTS.buildings;
  const showCounters = tweaks.showCounters !== false;
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div className="eyebrow on-dark">{hero.eyebrow}</div>
            <BigMeridian width={520} />
          </div>
          <div className="reveal">
            <h1 className="display">{hero.h}</h1>
            <p className="deck" style={{ marginTop: 32 }}>
              {hero.d}
            </p>
          </div>
        </div>
        <div className="hero-footer">
          <span>AMPM Group Limited · Burgess Hill</span>
          <span>Scroll ↓</span>
        </div>
      </section>

      {showCounters && (
      <section className="section tight">
        <div className="counters reveal">
          <div className="cell">
            <div className="num"><Counter to={27} /><span style={{fontSize:32, marginLeft:6, fontWeight:500}}>yrs</span></div>
            <div className="lbl">Continuous trading · since 1997</div>
          </div>
          <div className="cell">
            <div className="num"><Counter to={13} />+</div>
            <div className="lbl">Accreditations · NSI Gold · BAFE · FIRAS</div>
          </div>
          <div className="cell">
            <div className="num">£<Counter to={25} />–<Counter to={30} />m</div>
            <div className="lbl">Three-year group plan · across the businesses</div>
          </div>
          <div className="cell">
            <div className="num">100<span style={{fontSize:32, marginLeft:4}}>%</span></div>
            <div className="lbl">Employee-owned trading flagship</div>
          </div>
        </div>
      </section>
      )}

      <section className="section">
        <div className="two-col">
          <div className="reveal">
            <div className="eyebrow">The group</div>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 56px)" }}>One mothership.<br/>Six shapes.</h2>
          </div>
          <div className="reveal">
            <p className="deck">
              Each company underneath AMPM keeps its own name, its own mark, and its own focus. The thread is the four-colour palette — same family, different shape per company. The buyer recognises the family before they read the name.
            </p>
            <div style={{ marginTop: 28 }}>
              <a onClick={() => setRoute("companies")} style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", borderBottom: "1px solid var(--ink)", paddingBottom: 4, cursor: "pointer" }}>See all companies →</a>
            </div>
          </div>
        </div>

        <div className="company-grid reveal" style={{ marginTop: 56 }}>
          {COMPANIES.slice(0, 3).map(c => {
            const onClick = c.href
              ? undefined
              : () => setRoute(`company:${c.id}`);
            const Tag = c.href ? "a" : "div";
            const tagProps = c.href
              ? { href: c.href, target: "_blank", rel: "noopener noreferrer" }
              : { onClick };
            return (
              <Tag key={c.id} className="company-tile" {...tagProps}>
                <span className={`status ${c.status}`}>{STATUS_LABEL[c.status]}</span>
                <Shapes shape={c.shape} size={22} />
                <div>
                  <h3>{c.name}</h3>
                  <p className="strap" style={{ marginTop: 8 }}>{c.strap}</p>
                </div>
              </Tag>
            );
          })}
        </div>
      </section>

      <section className="section dark">
        <div className="section-inner">
          <div className="two-col">
            <div className="reveal">
              <div className="eyebrow on-dark">Approach</div>
              <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 56px)" }}>The mid-market’s<br/>only enterprise<br/><em>stack.</em></h2>
            </div>
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <p className="deck" style={{ color: "rgba(246,243,236,0.85)" }}>
                The group runs an operational platform that is rare at our scale — Uptick, Procore, Microsoft 365 — deployed end-to-end. Procurement teams under PPN 06/20 weight it heavily. We don't sell tools; we sell the consequence of operating them well.
              </p>
              <div style={{ marginTop: 8 }}>
                <a onClick={() => setRoute("approach")} style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", borderBottom: "1px solid rgba(246,243,236,0.5)", paddingBottom: 4, cursor: "pointer", color: "var(--paper)" }}>Read the approach →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="reveal" style={{ marginBottom: 40 }}>
          <div className="eyebrow">Latest</div>
          <h2 className="display" style={{ fontSize: "clamp(32px, 3.5vw, 44px)" }}>Insight from the group.</h2>
        </div>
        <div className="insight-row reveal">
          <div className="insight">
            <div className="date">07 · MAY · 2026</div>
            <h5>AMPM Group Limited incorporated; first trading route confirmed</h5>
            <p>AMPM Group sits as the new holding entity. Gemini AMPM subcontracts initial M&E scope to AMPM Building Services on arm's-length, benchmarked terms.</p>
          </div>
          <div className="insight">
            <div className="date">14 · APR · 2026</div>
            <h5>PPN 06/20 and the EOT social-value advantage</h5>
            <p>Why employee-owned suppliers carry the procurement social-value argument better than any other ownership structure — and why most direct competitors cannot match it.</p>
          </div>
          <div className="insight">
            <div className="date">02 · APR · 2026</div>
            <h5>Building Safety Act, golden thread, and what buyers are actually buying</h5>
            <p>Compliance has moved from cost line to risk register. We map the regulatory shape and what an audit-ready posture means in practice.</p>
          </div>
        </div>
      </section>
    </>
  );
};

// ——— Companies ———
const CompaniesPage = ({ setRoute }) => {
  useReveal();
  const [active, setActive] = React.useState("ampm");

  // diagram positions (% of stage)
  const NODES = {
    ampm:   { x: 50, y: 8,  w: 220, label: "Holding", name: "AMPM" },
    gemini: { x: 12, y: 55, w: 200, label: "Trading · EOT", name: "Gemini AMPM" },
    bs:     { x: 32, y: 55, w: 200, label: "Trading", name: "AMPM Building Services" },
    fac:    { x: 52, y: 55, w: 200, label: "Future", name: "AMPM Facilities" },
    live:   { x: 70, y: 55, w: 200, label: "Platform", name: "AMPM Live" },
    ac:     { x: 88, y: 55, w: 200, label: "Future", name: "AMPM Academy" },
  };
  const DETAIL = {
    ampm:   { h: "AMPM Group Limited", b: "Holding company. Strategic oversight, capital allocation, group services. Jamie Dawson (Chair), Dan Small (Managing Director, Group), Luke Finney (Commercial Director, Group). No parent-company guarantee to subsidiaries." },
    gemini: { h: "Gemini AMPM", b: "The trading flagship, employee-owned via the Gemini AMPM EOT (trustees: L. Finney, B. Dawson, J. Markaj, L. Woodford, P. Fitzpatrick; deferred consideration to Oct 2034). Fire, security, ventilation, gas suppression, passive fire, compliance." },
    bs:     { h: "AMPM Building Services", b: "Year-1 trading sub. Takes M&E and broader building-services scope from Gemini on arm's-length, benchmarked, terminable terms." },
    fac:    { h: "AMPM Facilities", b: "Aggregated FM. Self-delivers what the group does, orchestrates the rest. Future entity — target launch Q3 2027." },
    live:   { h: "AMPM Live", b: "The group-wide client portal. One login across every AMPM company; live assets, live compliance, live service-desk; AI assistant trained on the group's compliance frameworks. Built on Uptick's client layer, AMPM-branded across the businesses. The highest-multiple optionality in the group." },
    ac:     { h: "AMPM Academy", b: "Two roles in one entity. Internally: apprenticeships, mentoring, accreditation pathways for engineers across the trades, and professional-development tracks for the office floor — the group's people pipeline. Externally: training and accreditation services sold to operators that need the same compliance frameworks we run on. Future entity." },
  };

  return (
    <>
      <section className="section">
        <div className="reveal" style={{ marginBottom: 40 }}>
          <div className="eyebrow">The group</div>
          <h1 className="display">Six companies. <em>One palette.</em></h1>
        </div>
        <div className="company-grid reveal">
          {COMPANIES.map(c => {
            if (c.href) {
              return (
                <a key={c.id} className="company-tile" href={c.href} target="_blank" rel="noopener noreferrer">
                  <span className={`status ${c.status}`}>{STATUS_LABEL[c.status]}</span>
                  <Shapes shape={c.shape} size={22} />
                  <div>
                    <h3>{c.name}<span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-3)", marginLeft: 10, verticalAlign: "middle" }}>↗ geminiampm.co.uk</span></h3>
                    <p className="strap" style={{ marginTop: 10 }}>{c.blurb}</p>
                  </div>
                </a>
              );
            }
            return (
              <a key={c.id} className="company-tile" onClick={() => setRoute(`company:${c.id}`)}>
                <span className={`status ${c.status}`}>{STATUS_LABEL[c.status]}</span>
                <Shapes shape={c.shape} size={22} />
                <div>
                  <h3>{c.name}<span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-3)", marginLeft: 10, verticalAlign: "middle" }}>→ More</span></h3>
                  <p className="strap" style={{ marginTop: 10 }}>{c.blurb}</p>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="section">
        <div className="reveal" style={{ marginBottom: 32 }}>
          <div className="eyebrow">Structure</div>
          <h2 className="display" style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}>How the group fits.</h2>
          <p className="deck" style={{ marginTop: 16, fontSize: 18 }}>Click a node.</p>
        </div>

        <div className="arch-stage reveal">
          {/* SVG connectors */}
          <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            {/* trunk from ampm down to bus */}
            <line x1="50%" y1="14%" x2="50%" y2="38%" stroke="#1a1f2b" strokeWidth="1" />
            {/* bus across */}
            <line x1="12%" y1="38%" x2="88%" y2="38%" stroke="#1a1f2b" strokeWidth="1" />
            {/* drops to each child */}
            {["12", "32", "52", "70", "88"].map(x => (
              <line key={x} x1={`${x}%`} y1="38%" x2={`${x}%`} y2="55%" stroke="#1a1f2b" strokeWidth="1" />
            ))}
          </svg>

          {Object.entries(NODES).map(([id, n]) => (
            <div key={id}
                 className={`arch-node ${id === "ampm" ? "holding" : ""} ${active === id ? "is-active" : ""}`}
                 style={{ left: `${n.x}%`, top: `${n.y}%`, transform: "translate(-50%, 0)", width: n.w }}
                 onClick={() => setActive(id)}>
              <div className="label">{n.label}</div>
              <div className="name">{n.name}</div>
            </div>
          ))}

          {active && (
            <div className="arch-detail">
              <div className="h">{DETAIL[active].h}</div>
              <div className="b">{DETAIL[active].b}</div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

// ——— Approach ———
const PRINCIPLES = [
  { t: "Compliance-led, not compliance-loaded", d: "Compliance is a posture, not a department. The asset, the planning, the maintenance, the audit trail — all one workflow, all one source of truth." },
  { t: "Same buyer, more surface", d: "New companies inside the group earn their place by extending the surface of an existing buyer relationship — not by chasing new logos." },
  { t: "Enterprise stack, mid-market overhead", d: "Uptick, Procore, Microsoft 365 — deployed end-to-end. Rare at our scale. The point isn't the tools; it's the operating consequence of running them properly." },
  { t: "AI as leverage, never novelty", d: "Every AI use case removes cost, accelerates revenue, or reduces risk — ideally all three. If it does none of those, it doesn't ship." },
  { t: "Endorsed, not absorbed", d: "Each company keeps its own mark and its own focus. The AMPM signature sits underneath. The thread is the palette, not the name." },
];

const MATRIX = [
  { c: "Fire detection & suppression",   gem: "core",  bs: "none", fac: "sub",  live: "none", ac: "none" },
  { c: "Security systems",                gem: "core",  bs: "none", fac: "sub",  live: "none", ac: "none" },
  { c: "Passive fire",                    gem: "core",  bs: "none", fac: "sub",  live: "none", ac: "none" },
  { c: "Gas suppression",                 gem: "core",  bs: "none", fac: "none", live: "none", ac: "none" },
  { c: "Ventilation",                     gem: "core",  bs: "grow", fac: "sub",  live: "none", ac: "none" },
  { c: "Compliance & golden thread",      gem: "core",  bs: "sub",  fac: "core", live: "core", ac: "grow" },
  { c: "Asset register & lifecycle",      gem: "core",  bs: "sub",  fac: "core", live: "core", ac: "none" },
  { c: "Planned maintenance",             gem: "core",  bs: "sub",  fac: "core", live: "sub",  ac: "none" },
  { c: "M&E install",                     gem: "none",  bs: "core", fac: "sub",  live: "none", ac: "none" },
  { c: "Building services",               gem: "none",  bs: "core", fac: "sub",  live: "none", ac: "none" },
  { c: "Aggregated FM delivery",          gem: "sub",   bs: "sub",  fac: "core", live: "sub",  ac: "none" },
  { c: "Asset intelligence (SaaS)",       gem: "sub",   bs: "none", fac: "sub",  live: "core", ac: "sub" },
  { c: "Training & accreditation",        gem: "sub",   bs: "none", fac: "none", live: "none", ac: "core" },
];
const SUBS = [
  { id: "gem", n: "Gemini AMPM" },
  { id: "bs", n: "Building Services" },
  { id: "fac", n: "Facilities" },
  { id: "live", n: "AMPM Live" },
  { id: "ac", n: "Academy" },
];

const ApproachPage = () => {
  useReveal();
  const [filter, setFilter] = React.useState(null);
  return (
    <>
      <section className="section">
        <div className="reveal" style={{ marginBottom: 56 }}>
          <div className="eyebrow">Approach</div>
          <h1 className="display">Five rules.<br/><em>Held to.</em></h1>
        </div>
        <div className="principles reveal">
          {PRINCIPLES.map((p, i) => (
            <div className="principle" key={i}>
              <div className="n">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h4>{p.t}</h4>
                <p>{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section dark">
        <div className="section-inner">
          <div className="reveal" style={{ marginBottom: 32 }}>
            <div className="eyebrow on-dark">Capability across the group</div>
            <h2 className="display" style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}>What we do, <em>where.</em></h2>
            <p className="deck" style={{ marginTop: 16, color: "rgba(246,243,236,0.78)" }}>Filter by company to see what sits where.</p>
          </div>

          <div className="matrix-controls reveal">
            <span className={`matrix-chip ${filter === null ? "is-on" : ""}`} onClick={() => setFilter(null)}>All</span>
            {SUBS.map(s => (
              <span key={s.id} className={`matrix-chip ${filter === s.id ? "is-on" : ""}`} onClick={() => setFilter(s.id)}>{s.n}</span>
            ))}
          </div>

          <div className="reveal" style={{ background: "var(--paper)", color: "var(--ink)" }}>
            <table className="matrix">
              <thead>
                <tr>
                  <th className="cap">Capability</th>
                  {SUBS.map(s => <th key={s.id} style={{ textAlign: "center" }}>{s.n}</th>)}
                </tr>
              </thead>
              <tbody>
                {MATRIX.map(row => {
                  const faded = filter && row[filter] === "none";
                  return (
                    <tr key={row.c} className={faded ? "is-faded" : ""}>
                      <td className="cap-name">{row.c}</td>
                      {SUBS.map(s => {
                        const v = row[s.id];
                        const label = v === "core" ? "Core" : v === "grow" ? "Grow" : v === "sub" ? "Sub" : "·";
                        return <td key={s.id} className={`cell cell-${v}`}>{label}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

// ——— People ———
const PEOPLE = [
  { name: "Jamie Dawson",     role: "Chair · AMPM Group",                  note: "Strategic lead across the group. Co-owner of AMPM Group Limited. Twenty years with Gemini AMPM.", leadership: true },
  { name: "Dan Small",        role: "Managing Director · AMPM Group",      note: "Operational lead across the group. MD remit covers Gemini AMPM and the wider trading subsidiaries as they stand up.", leadership: true },
  { name: "Luke Finney",      role: "Commercial Director · AMPM Group",    note: "Group commercial lead. Co-owner of AMPM Group Limited. Twenty years with Gemini AMPM. EOT trustee.", leadership: true },
  { name: "Paul Fitzpatrick", role: "EOT Trustee · Sales",                 note: "Independently developed the compliance hub and chatbot — now folded into the AMPM Live platform roadmap as the AI assistant layer.", trustee: true },
  { name: "Lee Woodford",     role: "EOT Trustee · Passive Manager",       note: "Operational depth in passive fire — one of the highest-margin life-safety lines.", trustee: true },
  { name: "Jozef Markaj",     role: "EOT Trustee",                         note: "Trustee of the Gemini AMPM EOT alongside L. Finney, B. Dawson, L. Woodford, P. Fitzpatrick.", trustee: true },
  { name: "Bailey Dawson",    role: "EOT Director · Trustee",              note: "Trustee of the Gemini AMPM EOT and director of the EOT corporate trustee.", trustee: true },
  { name: "Ryan Gemmel",      role: "Projects Director · Gemini AMPM",     note: "Projects lead. Owner of the technical-drawings AI use case under AMPM Live Intelligence." },
  { name: "Joe Isaac",        role: "Management Accountant",               note: "Xero lead. Owner of the credit-control automation use case under AMPM Live Intelligence." },
];

const PeoplePage = ({ tweaks = {} }) => {
  useReveal();
  const showTrustees = tweaks.showTrustees !== false;
  const peopleMode = tweaks.peopleMode || "all";
  const visible = PEOPLE.filter(p => {
    if (peopleMode === "leadership") return p.leadership;
    if (!showTrustees && p.trustee && !p.leadership) return false;
    return true;
  });
  const subhead =
    peopleMode === "leadership"
      ? "The group is run by three owners — chair, MD, and commercial director — sitting above the trading subsidiaries."
      : showTrustees
        ? "The group is owned by three; governed by five trustees; run by a senior management team across the trading subsidiaries."
        : "The group is owned by three; run by a senior management team across the trading subsidiaries.";
  return (
    <section className="section">
      <div className="reveal" style={{ marginBottom: 56 }}>
        <div className="eyebrow">People</div>
        <h1 className="display">The hands on the <em>tiller.</em></h1>
        <p className="deck" style={{ marginTop: 16, maxWidth: "52ch" }}>
          {subhead}
        </p>
      </div>

      <div className="people-grid reveal">
        {visible.map(p => (
          <div className="person" key={p.name}>
            <div className="person-portrait"></div>
            <div className="role">{p.role}</div>
            <div className="name">{p.name}</div>
            <div className="note">{p.note}</div>
          </div>
        ))}
      </div>

      <div className="careers reveal">
        <div className="careers-head">
          <div className="eyebrow">Academy · Careers · Growth</div>
          <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 56px)" }}>Growing the <em>next layer.</em></h2>
          <p className="deck" style={{ marginTop: 16, maxWidth: "60ch" }}>
            The Academy is both an external training arm and the group's people pipeline. Apprenticeships across the trades, skills training for engineers progressing toward chartership, professional development on the commercial and admin side, and accreditation pathways shared with operators across the sector.
          </p>
        </div>

        <div className="careers-grid">
          <div className="careers-card">
            <div className="careers-n">01</div>
            <h4>Apprenticeships</h4>
            <p>Fire engineering, security systems, M&amp;E and passive-fire apprenticeships. Earn-as-you-learn pathways into the group's trading subsidiaries. Recruitment opens annually from late summer.</p>
          </div>
          <div className="careers-card">
            <div className="careers-n">02</div>
            <h4>Skills training · trades</h4>
            <p>Accredited courses across fire detection, suppression, compartmentation surveying and gas systems. Sold to engineers across the wider sector; subsidised internally for AMPM staff.</p>
          </div>
          <div className="careers-card">
            <div className="careers-n">03</div>
            <h4>Professional development · office</h4>
            <p>Commercial, project-management, finance and compliance tracks for the office floor. Designed around the operating stack the group actually runs on — Uptick, Procore, M365 — not generic theory.</p>
          </div>
          <div className="careers-card">
            <div className="careers-n">04</div>
            <h4>Accreditation pathways</h4>
            <p>Structured routes toward FIA, BAFE, FIRAS, NICEIC and IFE chartership. The Academy holds the audit framework; engineers progress against it on the job, evidenced in Uptick.</p>
          </div>
        </div>

        <div className="careers-foot">
          <div>
            <div className="lbl">Open roles &amp; apprenticeships</div>
            <div className="val">careers@ampm.co.uk</div>
          </div>
          <div className="careers-note">
            The Academy's external training prospectus opens for enrolment from Q3 2027. Internal apprenticeships and skills tracks run continuously inside Gemini AMPM today, ahead of the Academy standing up as its own trading entity.
          </div>
        </div>
      </div>
    </section>
  );
};

// ——— Contact ———
const ContactPage = () => {
  useReveal();
  return (
    <>
      <section className="section">
        <div className="reveal" style={{ marginBottom: 48 }}>
          <div className="eyebrow">Contact</div>
          <h1 className="display">Direct lines, <em>not 0845.</em></h1>
        </div>

        <div className="contact-grid reveal">
          <div className="contact-block">
            <div className="lbl">Bid · tender enquiries</div>
            <div className="val">bids@ampm.co.uk</div>
            <div className="lbl" style={{ marginTop: 24 }}>Acquisitions · Ventures</div>
            <div className="val">ventures@ampm.co.uk</div>
            <div className="lbl" style={{ marginTop: 24 }}>General · group</div>
            <div className="val">hello@ampm.co.uk</div>
            <div className="lbl" style={{ marginTop: 24 }}>Press · partnerships</div>
            <div className="val">press@ampm.co.uk</div>
          </div>
          <div className="contact-block">
            <div className="lbl">Registered office</div>
            <div className="val">
              AMPM Group Limited<br/>
              Burgess Hill<br/>
              West Sussex
            </div>
            <div className="lbl" style={{ marginTop: 24 }}>Company number</div>
            <div className="val" style={{ fontFamily: "var(--mono)", fontSize: 18, letterSpacing: "0.06em" }}>CRN 17136810</div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="section-inner">
          <div className="two-col reveal">
            <div>
              <div className="eyebrow on-dark">Operating subsidiaries</div>
              <h2 className="display" style={{ fontSize: "clamp(28px, 3vw, 40px)" }}>For a specific company, write to the company.</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div>
                <div className="lbl" style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(246,243,236,0.55)", marginBottom: 6 }}>Gemini AMPM · fire, security, compliance</div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--paper)" }}>enquiries@geminiampm.co.uk</div>
              </div>
              <div>
                <div className="lbl" style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(246,243,236,0.55)", marginBottom: 6 }}>AMPM Building Services · M&E, building</div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--paper)" }}>hello@ampm.co.uk</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Object.assign(window, { HomePage, CompaniesPage, ApproachPage, PeoplePage, ContactPage });
