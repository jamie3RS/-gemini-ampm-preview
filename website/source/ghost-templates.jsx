// Ghost-theme page templates layered on top of the existing AMPM site components.
// Designed to map 1:1 onto Ghost templates:
//   - WorkIndexPage      → page-work.hbs        (Page using "Work" route, lists posts tagged #case-study)
//   - CaseStudyPage      → post-case-study.hbs  (Custom post template for #case-study)
//   - InsightsIndexPage  → page-insights.hbs    (Page, lists posts tagged #insight)
//   - InsightPage        → post-insight.hbs     (Custom post template for #insight)
//
// Body / hero / image areas use the striped placeholder pattern from the design
// system — Ghost editors fill these with real photography + cover images.

// ─────────────────────────────────────────────────────────────────────────────
// Shared example data (a real Ghost theme reads these from {{#get}} helpers)
// ─────────────────────────────────────────────────────────────────────────────

const CASE_STUDIES = [
  {
    slug: "london-teaching-hospital-bsa",
    title: "Bringing a London teaching-hospital estate audit-ready under the Building Safety Act",
    deck: "Three sites, six buildings, twenty years of acquired compartmentation. One compliance posture handed to the regulator.",
    sector: "Acute healthcare",
    company: "Gemini AMPM",
    services: ["Passive fire", "Fire detection", "Golden thread", "Asset register"],
    year: "2024 – 2025",
    locations: "3 sites · London",
    featured: true,
  },
  {
    slug: "tier-one-contractor-secondment",
    title: "Compliance as service: a tier-one main contractor's secondment of audit-ready evidence",
    deck: "When a frameworks-bid required Building Safety Act readiness evidence, the contractor brought us in as the compliance arm.",
    sector: "Main contracting",
    company: "Gemini AMPM",
    services: ["Compliance audit", "Golden thread"],
    year: "2025",
    locations: "UK-wide",
  },
  {
    slug: "data-centre-suppression",
    title: "Gas suppression retrofit on a live 12 MW colocation hall",
    deck: "Zero downtime. Zero false-trigger risk. Inert gas across two redundant zones, signed off by the insurer.",
    sector: "Data centres",
    company: "Gemini AMPM",
    services: ["Gas suppression", "Detection"],
    year: "2025",
    locations: "Slough",
  },
  {
    slug: "ministerial-estate-passive",
    title: "Passive fire remediation across a ministerial estate, in 9-week night-work windows",
    deck: "Government buyer. PPN 06/20 weighted social value. Delivered by an EOT.",
    sector: "Government",
    company: "Gemini AMPM",
    services: ["Passive fire", "Compartmentation survey"],
    year: "2024",
    locations: "Westminster",
  },
  {
    slug: "build-to-rent-handover",
    title: "Standing up the fire-safety golden thread for a 612-unit BTR handover",
    deck: "The freeholder needed the evidence pack the developer never produced. We rebuilt the thread from drawings up.",
    sector: "Build-to-rent",
    company: "Gemini AMPM",
    services: ["Golden thread", "Asset register", "Compliance audit"],
    year: "2025",
    locations: "Manchester",
  },
  {
    slug: "ventilation-warehouse-conversion",
    title: "Smoke-control ventilation for a 380,000 sq ft last-mile logistics conversion",
    deck: "Listed-building constraint, BSA-grade compartmentation, single delivery partner across mechanical and life-safety.",
    sector: "Logistics",
    company: "AMPM Building Services",
    services: ["Smoke ventilation", "M&E", "Compartmentation"],
    year: "2026",
    locations: "Avonmouth",
  },
  {
    slug: "mayfair-hq-fit-out",
    title: "Cat-A to Cat-B fit-out of a Mayfair HQ, life-safety-compliant on a 14-week programme",
    deck: "M&E, fire detection, compartmentation and security delivered as one workstream — so the client's move-in date didn't slip behind the regulator.",
    sector: "Office fit-out",
    company: "AMPM Building Services",
    services: ["M&E fit-out", "Fire detection", "Compartmentation", "Security"],
    year: "2025",
    locations: "Mayfair, London",
  },
  {
    slug: "national-pma-planned-maintenance",
    title: "A national managing agent's planned-maintenance programme, turned from cost line into predictable line",
    deck: "240 buildings, one supplier, one workflow. Compliance reporting handed to the freeholder board monthly — not chased quarterly.",
    sector: "Planned maintenance",
    company: "Gemini AMPM",
    services: ["Planned maintenance", "Asset register", "Compliance reporting"],
    year: "2024 – ongoing",
    locations: "UK-wide · 240 buildings",
  },
];

const INSIGHTS = [
  {
    slug: "ppn-06-20-eot-social-value",
    title: "PPN 06/20 and the social-value advantage of being employee-owned",
    deck: "Procurement weights social value heavily. The way most contractors evidence it falls apart on inspection. Here's why EOTs walk that test.",
    topic: "Procurement",
    author: "Jamie Dawson",
    role: "Chair, AMPM Group",
    date: "14 April 2026",
    readTime: "7 min read",
    featured: true,
  },
  {
    slug: "building-safety-act-what-buyers-are-buying",
    title: "Building Safety Act, golden thread, and what buyers are actually buying",
    deck: "Compliance moved from cost line to risk register. We map the regulatory shape and what an audit-ready posture means in practice.",
    topic: "Compliance",
    author: "Dan Small",
    role: "Managing Director, AMPM Group",
    date: "02 April 2026",
    readTime: "11 min read",
  },
  {
    slug: "uptick-procore-m365-mid-market-stack",
    title: "The enterprise stack the mid-market doesn't have",
    deck: "Uptick, Procore, Microsoft 365 deployed end-to-end is rare at our scale. The point isn't the tools; it's what running them properly does to procurement weight.",
    topic: "Operations",
    author: "Luke Finney",
    role: "Commercial Director, AMPM Group",
    date: "21 March 2026",
    readTime: "6 min read",
  },
  {
    slug: "ai-as-leverage-never-novelty",
    title: "AI as leverage, never novelty",
    deck: "Every AI use case removes cost, accelerates revenue, or reduces risk — ideally all three. If it does none of those, it doesn't ship. The current AMPM Live roadmap, in plain terms.",
    topic: "AI",
    author: "Ryan Gemmel",
    role: "Projects Director, Gemini AMPM",
    date: "10 March 2026",
    readTime: "9 min read",
  },
  {
    slug: "endorsed-not-absorbed",
    title: "Endorsed, not absorbed — what a brand architecture looks like when each company keeps its mark",
    deck: "Why the group's branded subsidiaries strengthen each company's own buyer relationships, instead of diluting them under a single holding mark.",
    topic: "Brand",
    author: "Jamie Dawson",
    role: "Chair, AMPM Group",
    date: "28 February 2026",
    readTime: "5 min read",
  },
  {
    slug: "eot-trustees-and-the-buyer",
    title: "How EOT trustees show up in a procurement conversation",
    deck: "The trustee role is invisible to most buyers. It shouldn't be. Here's where it carries weight on bid evaluation.",
    topic: "Governance",
    author: "Luke Finney",
    role: "Commercial Director, AMPM Group",
    date: "12 February 2026",
    readTime: "8 min read",
  },
  {
    slug: "compliance-led-not-loaded",
    title: "Compliance-led, not compliance-loaded",
    deck: "Compliance is a posture, not a department. The asset, the planning, the maintenance, the audit trail — all one workflow, all one source of truth.",
    topic: "Compliance",
    author: "Dan Small",
    role: "Managing Director, AMPM Group",
    date: "30 January 2026",
    readTime: "4 min read",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Shared mini-components
// ─────────────────────────────────────────────────────────────────────────────

const ImgPlaceholder = ({ ratio = "16 / 9", label, tone = "ink" }) => (
  <div className={`img-ph img-ph-${tone}`} style={{ aspectRatio: ratio }}>
    <div className="img-ph-stripes"></div>
    {label && <div className="img-ph-label">{label}</div>}
  </div>
);

const NewsletterCTA = ({ inline = false }) => (
  <div className={`newsletter ${inline ? "is-inline" : ""}`}>
    <div className="newsletter-inner">
      <div>
        <div className="eyebrow on-dark" style={{ marginBottom: 14 }}>Mothership briefings</div>
        <h3 className="display" style={{ fontSize: inline ? "clamp(28px, 3vw, 36px)" : "clamp(36px, 4vw, 56px)", color: "var(--paper)" }}>
          One thoughtful piece on compliance, EOTs, and the buildings buyers can't afford to fail. Once a month. <em>Nothing else.</em>
        </h3>
      </div>
      <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="name@yourorganisation.com" aria-label="Email address" />
        <button type="submit">Subscribe →</button>
        <div className="newsletter-note">No tracking pixels. No "growth-hacked" sequence. Unsubscribe in one click.</div>
      </form>
    </div>
  </div>
);

const RelatedRow = ({ title, items, kind, setRoute }) => (
  <section className="section">
    <div className="reveal" style={{ marginBottom: 32, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
      <h3 className="display" style={{ fontSize: "clamp(28px, 3vw, 40px)" }}>{title}</h3>
      <a onClick={() => setRoute(kind === "case-study" ? "work" : "insights")}
         style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", borderBottom: "1px solid var(--ink)", paddingBottom: 4, cursor: "pointer" }}>
        See all →
      </a>
    </div>
    <div className={kind === "case-study" ? "work-grid reveal" : "insights-list reveal"}>
      {items.map(item =>
        kind === "case-study"
          ? <CaseStudyCard key={item.slug} item={item} setRoute={setRoute} />
          : <InsightCard key={item.slug} item={item} setRoute={setRoute} />
      )}
    </div>
  </section>
);

const CaseStudyCard = ({ item, setRoute }) => (
  <a className="work-card" onClick={() => setRoute("case-study")}>
    <ImgPlaceholder ratio="4 / 3" label={item.sector} />
    <div className="work-card-meta">
      <span>{item.company}</span>
      <span>·</span>
      <span>{item.sector}</span>
      <span>·</span>
      <span>{item.year}</span>
    </div>
    <h3>{item.title}</h3>
    <p>{item.deck}</p>
    <div className="work-card-tags">
      {item.services.slice(0, 3).map(s => <span key={s} className="tag">{s}</span>)}
    </div>
  </a>
);

const InsightCard = ({ item, setRoute, featured = false }) => (
  <a className={`insight-card ${featured ? "is-featured" : ""}`} onClick={() => setRoute("insight")}>
    <div className="insight-card-meta">
      <span className="topic">{item.topic}</span>
      <span>{item.date}</span>
      <span>·</span>
      <span>{item.readTime}</span>
    </div>
    <h3>{item.title}</h3>
    <p>{item.deck}</p>
    <div className="insight-card-by">
      <span className="name">{item.author}</span>
      <span className="role">{item.role}</span>
    </div>
  </a>
);

// ─────────────────────────────────────────────────────────────────────────────
// Work index — case studies listing
// ─────────────────────────────────────────────────────────────────────────────

const SECTORS = ["All", "Healthcare", "Government", "Data centres", "Build-to-rent", "Office fit-out", "Planned maintenance", "Logistics", "Main contracting"];

const WorkIndexPage = ({ setRoute }) => {
  useReveal();
  const [sector, setSector] = React.useState("All");
  const featured = CASE_STUDIES.find(c => c.featured);
  const rest = CASE_STUDIES.filter(c => !c.featured);
  const visible = sector === "All" ? rest : rest.filter(c => c.sector === sector);

  return (
    <>
      <section className="section">
        <div className="reveal" style={{ marginBottom: 24 }}>
          <div className="eyebrow">Work · Case studies</div>
          <h1 className="display">Buildings, evidenced.</h1>
          <p className="deck" style={{ marginTop: 16, maxWidth: "60ch" }}>
            Selected work from across the group. Compliance-led, audit-ready, delivered through the enterprise stack the mid-market rarely has.
          </p>
        </div>

        <div className="matrix-controls reveal" style={{ marginTop: 20 }}>
          {SECTORS.map(s => (
            <span key={s} className={`matrix-chip ${sector === s ? "is-on" : ""}`} onClick={() => setSector(s)}>{s}</span>
          ))}
        </div>
      </section>

      {/* Featured */}
      {featured && sector === "All" && (
        <section className="section" style={{ paddingTop: 0 }}>
          <a className="work-featured reveal" onClick={() => setRoute("case-study")}>
            <ImgPlaceholder ratio="16 / 9" label="Case study · cover photography" />
            <div className="work-featured-body">
              <div className="work-card-meta">
                <span className="featured-flag">★ Featured</span>
                <span>{featured.company}</span>
                <span>·</span>
                <span>{featured.sector}</span>
                <span>·</span>
                <span>{featured.year}</span>
              </div>
              <h2 className="display" style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}>{featured.title}</h2>
              <p className="deck" style={{ marginTop: 16 }}>{featured.deck}</p>
              <div className="work-card-tags" style={{ marginTop: 20 }}>
                {featured.services.map(s => <span key={s} className="tag">{s}</span>)}
              </div>
              <div style={{ marginTop: 24, fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", borderBottom: "1px solid var(--ink)", paddingBottom: 4, display: "inline-block" }}>
                Read the case →
              </div>
            </div>
          </a>
        </section>
      )}

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="work-grid reveal">
          {visible.map(c => <CaseStudyCard key={c.slug} item={c} setRoute={setRoute} />)}
        </div>
      </section>

      <section className="section dark">
        <div className="section-inner">
          <NewsletterCTA />
        </div>
      </section>
    </>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Case study — single post template
// ─────────────────────────────────────────────────────────────────────────────

const CaseStudyPage = ({ setRoute }) => {
  useReveal();
  const item = CASE_STUDIES[0]; // London teaching hospital
  const related = CASE_STUDIES.filter(c => c.slug !== item.slug).slice(0, 3);

  return (
    <>
      {/* Article header — dark, editorial */}
      <article className="article">
        <header className="article-header is-dark">
          <div className="article-header-inner">
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div className="eyebrow on-dark">Case study · {item.company} · {item.sector}</div>
              <BigMeridian width={420} />
            </div>
            <div className="reveal">
              <h1 className="display" style={{ color: "var(--paper)", maxWidth: "22ch" }}>
                {item.title}
              </h1>
              <p className="deck" style={{ marginTop: 28, color: "rgba(246,243,236,0.85)" }}>
                {item.deck}
              </p>
            </div>
            <dl className="article-meta reveal">
              <div><dt>Client</dt><dd>London teaching hospital trust<br/><span className="anon">[anonymised]</span></dd></div>
              <div><dt>Sector</dt><dd>{item.sector}</dd></div>
              <div><dt>Lead company</dt><dd>{item.company}</dd></div>
              <div><dt>Year</dt><dd>{item.year}</dd></div>
              <div><dt>Locations</dt><dd>{item.locations}</dd></div>
              <div><dt>Scope</dt><dd>{item.services.join(", ")}</dd></div>
            </dl>
          </div>
        </header>

        {/* Cover image */}
        <div className="article-cover reveal">
          <ImgPlaceholder ratio="21 / 9" label="Project cover photograph · plant room or compartment line" tone="paper" />
        </div>

        {/* The brief */}
        <section className="article-section reveal">
          <div className="article-section-inner two-col">
            <div className="article-aside">
              <div className="eyebrow">01 · The brief</div>
            </div>
            <div className="article-body">
              <h2>An estate that had outgrown its own drawings.</h2>
              <p>
                The estate had grown by acquisition over two decades. Three sites, six buildings, fire-compartmentation drawings that disagreed with one another, and a regulator that had moved the goalposts. The Trust's Director of Estates had a Building Safety Act inspection on the diary, and a compliance picture that no single supplier had ever owned end-to-end.
              </p>
              <p>
                They didn't want surveyors and remediation contractors and an asset-register vendor in three separate conversations. They wanted one party to take the brief — and to hand back evidence the regulator could accept on first look.
              </p>
            </div>
          </div>
        </section>

        {/* The approach */}
        <section className="article-section reveal">
          <div className="article-section-inner two-col">
            <div className="article-aside">
              <div className="eyebrow">02 · The approach</div>
            </div>
            <div className="article-body">
              <h2>Three phases. One workflow. One source of truth.</h2>
              <div className="phases">
                <div className="phase">
                  <div className="phase-n">Phase 01</div>
                  <h4>Intrusive survey</h4>
                  <p>14 weeks across all wards, plant rooms, riser shafts. Every penetration, every compartment line, every door — mapped, photographed, scored. Surveys uploaded live into Uptick as the team walked the estate, so the asset register grew in real time rather than at the back-end of the contract.</p>
                </div>
                <div className="phase">
                  <div className="phase-n">Phase 02</div>
                  <h4>Sequenced remediation</h4>
                  <p>Programmed by risk register, not by ward operations. Critical-care compartments first; night shifts where the estate needed beds open. Procore tracked the as-built changes against the survey baseline, so the remediation record was the audit record.</p>
                </div>
                <div className="phase">
                  <div className="phase-n">Phase 03</div>
                  <h4>Golden-thread digitisation</h4>
                  <p>Every asset on Uptick. Every survey cross-referenced. Procore for the as-built drawing pack. M365 SharePoint for the controlled-document layer. Handed over as a single compliance pack — searchable, auditable, defensible.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pull quote */}
        <section className="pullquote-section reveal">
          <blockquote className="pullquote">
            <p>"They didn't just remediate the building. They handed us a compliance posture we can defend to the regulator and to our insurers — for years, not months."</p>
            <footer>
              <span className="who">Director of Estates and Facilities</span>
              <span className="where">London teaching hospital trust</span>
            </footer>
          </blockquote>
        </section>

        {/* The outcome */}
        <section className="article-section reveal">
          <div className="article-section-inner two-col">
            <div className="article-aside">
              <div className="eyebrow">03 · The outcome</div>
            </div>
            <div className="article-body">
              <h2>Audit-ready, on first inspection.</h2>
              <p>
                The Trust handed its compliance pack to the Building Safety Regulator pre-emptively, ahead of the first BSA inspection of the estate. The inspector accepted the pack as evidenced — and the estate passed without remedials. The compliance picture that had previously lived across three suppliers, two spreadsheets and a folder of legacy drawings, now lives in one searchable workflow that the estates team can interrogate from a phone.
              </p>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="metrics-section">
          <div className="section-inner reveal">
            <div className="metrics-grid">
              <div className="metric">
                <div className="metric-n">14,200<span>+</span></div>
                <div className="metric-l">Assets onboarded to the live register</div>
              </div>
              <div className="metric">
                <div className="metric-n">3,800</div>
                <div className="metric-l">Compartmentation penetrations surveyed and scored</div>
              </div>
              <div className="metric">
                <div className="metric-n">11<span>mo</span></div>
                <div className="metric-l">From kick-off to audit-ready handover</div>
              </div>
              <div className="metric">
                <div className="metric-n">0</div>
                <div className="metric-l">Remedials at first BSA inspection</div>
              </div>
            </div>
          </div>
        </section>

        {/* Credits */}
        <section className="article-section reveal">
          <div className="article-section-inner">
            <div className="credits">
              <div className="credits-col">
                <div className="credits-h">Lead company</div>
                <div className="credits-b">Gemini AMPM</div>
              </div>
              <div className="credits-col">
                <div className="credits-h">Project team</div>
                <div className="credits-b">L. Woodford (Passive lead)<br/>R. Gemmel (Projects)<br/>P. Fitzpatrick (Compliance hub)</div>
              </div>
              <div className="credits-col">
                <div className="credits-h">Frameworks applied</div>
                <div className="credits-b">Building Safety Act 2022<br/>BS 9999 / BS 9991<br/>PPN 06/20 social value</div>
              </div>
              <div className="credits-col">
                <div className="credits-h">Operating stack</div>
                <div className="credits-b">Uptick (asset + maintenance)<br/>Procore (delivery)<br/>M365 SharePoint (golden thread)</div>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* Related */}
      <RelatedRow title="Other work from the group" items={related} kind="case-study" setRoute={setRoute} />

      <section className="section dark">
        <div className="section-inner">
          <div className="two-col reveal">
            <div>
              <div className="eyebrow on-dark">Talk to us</div>
              <h2 className="display" style={{ fontSize: "clamp(28px, 3vw, 44px)" }}>An estate of your own that needs taking off the risk register?</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 18 }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--paper)" }}>bids@ampm.co.uk</div>
              <a onClick={() => setRoute("contact")} style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", borderBottom: "1px solid rgba(246,243,236,0.5)", paddingBottom: 4, cursor: "pointer", color: "var(--paper)", display: "inline-block", alignSelf: "flex-start" }}>All contact routes →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Insights index — publication
// ─────────────────────────────────────────────────────────────────────────────

const TOPICS = ["All", "Compliance", "Procurement", "Operations", "AI", "Brand", "Governance"];

const InsightsIndexPage = ({ setRoute }) => {
  useReveal();
  const [topic, setTopic] = React.useState("All");
  const featured = INSIGHTS.find(i => i.featured);
  const rest = INSIGHTS.filter(i => !i.featured);
  const visible = topic === "All" ? rest : rest.filter(i => i.topic === topic);

  return (
    <>
      <section className="section">
        <div className="reveal" style={{ marginBottom: 24 }}>
          <div className="eyebrow">Insights · From the group</div>
          <h1 className="display">Thinking from <em>the mothership.</em></h1>
          <p className="deck" style={{ marginTop: 16, maxWidth: "60ch" }}>
            Long-form pieces on compliance, procurement, employee ownership, and the operating posture that lets a mid-market group act like an enterprise.
          </p>
        </div>

        <div className="matrix-controls reveal" style={{ marginTop: 20 }}>
          {TOPICS.map(s => (
            <span key={s} className={`matrix-chip ${topic === s ? "is-on" : ""}`} onClick={() => setTopic(s)}>{s}</span>
          ))}
        </div>
      </section>

      {featured && topic === "All" && (
        <section className="section" style={{ paddingTop: 0 }}>
          <a className="insight-featured reveal" onClick={() => setRoute("insight")}>
            <div className="insight-featured-body">
              <div className="insight-card-meta">
                <span className="featured-flag">★ Featured</span>
                <span className="topic">{featured.topic}</span>
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
              <h2 className="display" style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}>{featured.title}</h2>
              <p className="deck" style={{ marginTop: 16 }}>{featured.deck}</p>
              <div className="insight-card-by" style={{ marginTop: 20 }}>
                <span className="name">{featured.author}</span>
                <span className="role">{featured.role}</span>
              </div>
            </div>
            <ImgPlaceholder ratio="4 / 5" label="Editorial illustration · placeholder" />
          </a>
        </section>
      )}

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="insights-list reveal">
          {visible.map(i => <InsightCard key={i.slug} item={i} setRoute={setRoute} />)}
        </div>
      </section>

      <section className="section dark">
        <div className="section-inner">
          <NewsletterCTA />
        </div>
      </section>
    </>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Insight — single post template
// ─────────────────────────────────────────────────────────────────────────────

const InsightPage = ({ setRoute }) => {
  useReveal();
  const item = INSIGHTS[0]; // PPN 06/20
  const related = INSIGHTS.filter(i => i.slug !== item.slug).slice(0, 3);

  return (
    <>
      <article className="article">
        <header className="article-header is-light">
          <div className="article-header-inner narrow">
            <div className="reveal">
              <div className="eyebrow">Insight · {item.topic} · {item.readTime}</div>
            </div>
            <div className="reveal">
              <h1 className="display" style={{ maxWidth: "20ch" }}>{item.title}</h1>
              <p className="deck" style={{ marginTop: 24, maxWidth: "52ch" }}>{item.deck}</p>
            </div>
            <div className="byline reveal">
              <div className="byline-avatar"></div>
              <div className="byline-text">
                <div className="byline-name">{item.author}</div>
                <div className="byline-role">{item.role}</div>
              </div>
              <div className="byline-date">{item.date}</div>
            </div>
          </div>
        </header>

        <div className="prose reveal">
          <p className="lede">
            Public-sector procurement under <strong>PPN 06/20</strong> requires bidders to evidence social value as a weighted bid criterion — typically 10%, sometimes higher. Most contractors treat that 10% as a creative-writing exercise. They write about community investment in the abstract, point at a charity partnership, and hope the marker is sympathetic. Increasingly, the marker isn't.
          </p>

          <p>
            What changed isn't the weight. It's the rigour. Procurement teams have got better at noticing when social-value claims aren't evidenced structurally — when they're aspirational rather than operational. And when the work in question is life-safety, the asymmetry between aspirational and operational gets uncomfortable fast.
          </p>

          <h2>The structural argument an EOT carries</h2>

          <p>
            An employee-ownership trust isn't a social-value flourish. It's an ownership structure. The Trust holds the shares; the employees are the beneficiaries; the deferred consideration to the original sellers runs over years. None of that requires a press release — it's evidenced on Companies House, in the trust deed, in the PAYE returns showing the annual tax-free bonus going to the workforce.
          </p>

          <p>
            That matters for two reasons:
          </p>

          <ul>
            <li><strong>It survives scrutiny.</strong> A community-investment narrative can be unpicked in conversation. An ownership structure can't.</li>
            <li><strong>It scales with the contract.</strong> The bigger the work, the more the workforce shares in it — by design. Most social-value mechanisms have the opposite property: they get harder to honour as the contract scales.</li>
          </ul>

          <blockquote className="pullquote inline">
            <p>"A community-investment narrative can be unpicked in conversation. An ownership structure can't."</p>
          </blockquote>

          <h2>Why this matters more in life-safety than elsewhere</h2>

          <p>
            Public-sector buyers procuring fire safety, security, or compliance work carry asymmetric risk. The downside of picking a supplier who fails is reputational and regulatory, not financial. Social-value weighting, in that context, isn't really about social value — it's a proxy for "this supplier is anchored". Anchoring is exactly what an EOT structurally produces: the workforce can't be sold out from under a contract, the leadership can't be pressured into a fire-sale exit, the operating focus stays with the operating company.
          </p>

          <p>
            Procurement teams who understand this don't ask EOT suppliers to evidence social value the same way they ask private-equity-backed suppliers to. They ask the structural questions instead — and EOTs answer them with documents the regulator could verify.
          </p>

          <ImgPlaceholder ratio="16 / 9" label="Editorial photograph · supporting" />
          <div className="caption">Image caption — placeholder. Replace with documentary photography of the workforce, or an editorial chart.</div>

          <h2>The bottom line</h2>

          <p>
            Most direct competitors in life-safety and compliance are private-equity backed or owner-managed. Neither structure carries the social-value argument in the same way. EOTs do — not because of what they say, but because of what they are. For a procurement team scoring a tender against PPN 06/20, that distinction is becoming the easiest 10% in the document.
          </p>

          <p className="signoff">
            <em>Jamie Dawson is Chair of AMPM Group. Gemini AMPM, the group's flagship trading subsidiary, has been an employee-owned trust since October 2024.</em>
          </p>
        </div>

        <section className="section">
          <NewsletterCTA inline={false} />
        </section>
      </article>

      <RelatedRow title="More from the group" items={related} kind="insight" setRoute={setRoute} />
    </>
  );
};

Object.assign(window, {
  WorkIndexPage, CaseStudyPage, InsightsIndexPage, InsightPage,
  CASE_STUDIES, INSIGHTS,
});
