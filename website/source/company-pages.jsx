// Per-company subsidiary detail pages. Each tile on the Companies grid
// (except Gemini AMPM, which links externally) routes into one of these.
//
// Content is structured per company so a Ghost theme can render this from
// {{#get "pages" filter="tag:company"}} with a custom-company.hbs template.

const CO_DETAIL = {
  bs: {
    name: "AMPM Building Services",
    statusLabel: "Year 1 · Trading",
    statusClass: "yr1",
    shape: "capsule",
    deck: "Mechanical, electrical, and broader building-services delivery — born inside the group, scoped to take work that sits adjacent to Gemini's life-safety remit.",
    sections: [
      { type: "prose", label: "01 · Overview",
        h: "Born inside the group. Scoped to take the work that sits adjacent.",
        body: [
          "AMPM Building Services takes the M&E and broader building-services scope that sits adjacent to Gemini AMPM's life-safety work — the mechanical, electrical, fit-out and minor-works that buyers used to procure separately from their fire-safety partner.",
          "It trades on arm's-length, benchmarked, terminable terms from inside the group — so a client can buy from us, or buy from anyone else, on price. The first invoice goes out late summer 2026.",
        ],
      },
      { type: "capability", label: "02 · What we do",
        h: "Building services, life-safety-adjacent.",
        items: [
          { t: "M&E install", d: "Mechanical and electrical installation across commercial fit-out and minor-works programmes." },
          { t: "Smoke-control ventilation", d: "Smoke ventilation install — sequenced with Gemini AMPM's compartmentation works where the brief crosses both." },
          { t: "Compartmentation packages", d: "Compartmentation works sub-let from Gemini AMPM where it makes commercial sense to keep the package together." },
          { t: "Fit-out delivery", d: "Cat-A to Cat-B office fit-out, including the M&E, life-safety and security workstreams as one programme." },
          { t: "Planned maintenance · M&E", d: "Planned-maintenance contracts on the M&E asset base — reported through the AMPM Live portal." },
        ],
      },
      { type: "clients", label: "03 · Who we work with",
        h: "Main contractors and managing agents.",
        body: "Typical buyers are tier-one main contractors and national managing agents — CBRE, Jaguar Building Services and similar intermediaries running corporate-estate, PFI, healthcare and retail portfolios. They come to us when a programme needs the M&E and life-safety scope held by one delivery partner rather than co-ordinated across three.",
        clients: ["CBRE", "Jaguar Building Services", "Tier-one main contractors", "National managing agents", "PFI vehicles"],
      },
    ],
    cta: { h: "M&E or building-services scope on a programme of yours?", email: "bids@ampm.co.uk" },
  },

  fac: {
    name: "AMPM Facilities",
    statusLabel: "Future · Q3 2027",
    statusClass: "future",
    shape: "square",
    deck: "FM aggregator for estates that want one delivery partner across hard and soft services. Self-delivers what the group does; orchestrates the rest.",
    sections: [
      { type: "prose", label: "01 · Overview",
        h: "Aggregated FM, governed like a trading partner — not a sub-contractor pile.",
        body: [
          "AMPM Facilities is the aggregator entity for asset owners and managing agents who want a single delivery partner across an aggregated estate — hard services, soft services, planned and reactive — under one SLA, one service-desk, one compliance pack.",
          "It self-delivers what the group does (life-safety, M&E, building services) and orchestrates the rest through a managed supply chain — but the buyer's relationship is with one entity. Target launch Q3 2027.",
        ],
      },
      { type: "capability", label: "02 · What we do",
        h: "Systems-based facilities. Asset-led, evidenced live.",
        items: [
          { t: "Aggregated hard + soft FM", d: "Single delivery partner across the spread that estates teams typically procure separately." },
          { t: "Asset register & lifecycle", d: "Every asset onboarded, every service date in the live register, every renewal cost forecast." },
          { t: "Planned maintenance programmes", d: "Multi-site planned-maintenance contracts run from Uptick, reported through AMPM Live monthly." },
          { t: "Compliance reporting", d: "Board-grade compliance reporting — certificate-in-date %, accreditation status, golden-thread completeness — at the freeholder level." },
          { t: "Supply-chain orchestration", d: "Where we don't self-deliver, we manage the trade. The buyer sees one performance scorecard." },
        ],
      },
      { type: "clients", label: "03 · Who we work with",
        h: "Multi-site asset owners and national FM intermediaries.",
        body: "Built for asset owners and intermediaries running aggregated portfolios — CBRE, Jaguar Building Services, PFI vehicles, healthcare trusts, BTR freeholders. The typical engagement is national, multi-site, and asset-led.",
        clients: ["CBRE", "Jaguar Building Services", "PFI vehicles", "Healthcare trusts", "BTR freeholders", "Corporate-estate FM intermediaries"],
      },
    ],
    cta: { h: "An aggregated estate that wants one delivery partner?", email: "bids@ampm.co.uk" },
  },

  live: {
    name: "AMPM Live",
    statusLabel: "Future · Platform",
    statusClass: "future",
    shape: "bar",
    deck: "One login across every AMPM company. Live asset register, live compliance, live service-desk, live AI assistant — built on Uptick's client layer, branded AMPM across the businesses.",
    sections: [
      { type: "prose", label: "01 · Overview",
        h: "What clients see when they log in.",
        body: [
          "AMPM Live is the group's productised client portal. Where most contractors hand a client a quarterly PDF, AMPM Live hands them a live view — every asset on their estate, every certificate's expiry date, every open job in the service-desk, every accreditation status across the supplier.",
          "Built on top of Uptick's client-facing layer and branded AMPM across the businesses, so a buyer who works with Gemini AMPM, Building Services and Facilities sees one portal — not three. From late 2026, the AI assistant layer (developed by P. Fitzpatrick inside Gemini AMPM) lets a client interrogate their own compliance data in natural language.",
        ],
      },
      { type: "preview", label: "02 · What the portal exposes",
        h: "Live, by default. Not exported quarterly.",
        items: [
          { t: "Live asset register", d: "Every asset, every compartment line, every door — with last-service and next-service dates, evidence photos, and a permanent revision history." },
          { t: "Live compliance status", d: "Accreditation expiry, certificate-in-date percentage, golden-thread completeness — by site, by building, by zone." },
          { t: "Live service-desk", d: "Open jobs, engineer ETAs, response-time SLAs against contract — including the jobs that haven't been raised yet because the system is forecasting them." },
          { t: "AI assistant", d: "Natural-language questions answered against the client's own data. \"Which compartments in Ward 3 are overdue inspection?\" \"What's my BSA-readiness across the Manchester sites?\" Answered in seconds." },
          { t: "Audit pack export", d: "Board-grade audit pack on demand — searchable PDF, evidence linked, ready for the regulator or the insurer." },
        ],
      },
      { type: "prose", label: "03 · One portal across the businesses",
        h: "Whether the engineers are Gemini, Building Services or Facilities — the buyer sees AMPM.",
        body: [
          "A client whose estate is serviced by three of the group's subsidiaries doesn't want three logins, three reports, three SLA traces. They want one. AMPM Live consolidates the engineer-side workflows of Gemini AMPM, AMPM Building Services and AMPM Facilities into a single buyer-facing view — branded AMPM, governed at group level.",
        ],
      },
    ],
    cta: { h: "Want a demo of how AMPM Live looks against an estate of yours?", email: "hello@ampm.co.uk" },
  },

  vent: {
    name: "AMPM Ventures",
    statusLabel: "Future · Open to approaches",
    statusClass: "future",
    shape: "circle",
    deck: "The route through which acquisition and acqui-hire opportunities attach to the group. Capital-backed, governed independently of trading subs.",
    sections: [
      { type: "prose", label: "01 · Overview",
        h: "Acquisitions, governed like a separate entity.",
        body: [
          "AMPM Ventures is the corporate-development arm. It's the route through which acquisitions and acqui-hires — operational depth, regional reach, complementary capability — attach to the group, and it's deliberately governed independently of the trading subsidiaries.",
          "The reason is structural: trading subs answer to operating performance; an acquisition vehicle has to answer to a different test (fit, multiple, integration risk). Putting them under the same management is how mid-market groups make bad acquisitions.",
        ],
      },
      { type: "capability", label: "02 · What we're looking for",
        h: "Three shapes of fit.",
        items: [
          { t: "Operational depth", d: "Established life-safety, M&E or compliance specialists with a defendable book and a stable senior team. The team and operating depth need to stay — the deal is built around them, not despite them." },
          { t: "Regional reach", d: "Operators outside the South-East and London who'd benefit from the group's enterprise stack (Uptick, Procore, M365), procurement weight, and EOT social-value posture — without losing their local relationships." },
          { t: "Complementary capability", d: "Specialisms adjacent to what we already do: duct cleaning, dry-riser, fire-extinguisher servicing, mechanical fire suppression, specialist passive remediation, security systems integration." },
        ],
      },
      { type: "approach", label: "03 · How approaches work",
        h: "Informal first. Owners speak to owners.",
        steps: [
          { n: "01", t: "Informal conversation", d: "First contact is owner-to-owner. No NDA at this stage — we use the conversation to test whether a fit is real before either side spends professional fees." },
          { n: "02", t: "Indicative shape", d: "If both sides want to continue, we put an indicative deal shape on paper — structure, range, headline terms. NDA at this point, advisors engaged on both sides." },
          { n: "03", t: "Due diligence", d: "Operational, financial, regulatory. AMPM Ventures runs DD in-house alongside external advisors; we don't outsource the whole exercise because it's how we learn whether the fit holds." },
          { n: "04", t: "Completion + integration", d: "Capital-backed completion. Integration is run as a 12-month programme with a named owner — the acquired team keeps its mark and its focus inside the group's branded-house architecture." },
        ],
      },
    ],
    cta: { h: "Owner of a business that feels like an obvious fit?", email: "ventures@ampm.co.uk", emailLabel: "Speak to us in confidence" },
  },

  ac: {
    name: "AMPM Academy",
    statusLabel: "Future · Q3 2027",
    statusClass: "future",
    shape: "diamond",
    deck: "Apprenticeships, skills training, professional development, accreditation pathways — and the route into the group's regulatory IP for operators across the sector.",
    sections: [
      { type: "prose", label: "01 · Overview",
        h: "Two roles in one entity.",
        body: [
          "AMPM Academy is the compliance-authority arm — and the group's people pipeline. Internally, it's where the next layer of AMPM engineers and managers is grown. Externally, it's where the group's regulatory IP — golden thread mapping, BSA navigation, audit frameworks — earns income as training and accreditation services sold to operators across the sector.",
          "The Academy stands up as its own trading entity in Q3 2027. Until then, the apprenticeships and skills tracks run inside Gemini AMPM under the Academy brand, so the pipeline is already producing while the entity is incorporating.",
        ],
      },
      { type: "capability", label: "02 · What we offer",
        h: "Across the trades and the office floor.",
        items: [
          { t: "Apprenticeships", d: "Fire engineering, security systems, M&E, and passive-fire apprenticeships. Earn-as-you-learn pathways into the group's trading subsidiaries. Recruitment opens annually from late summer." },
          { t: "Skills training · trades", d: "Accredited courses across fire detection, suppression, compartmentation surveying and gas systems. Sold to engineers across the wider sector; subsidised internally for AMPM staff." },
          { t: "Professional development · office", d: "Commercial, project-management, finance and compliance tracks. Designed around the operating stack the group actually runs on — Uptick, Procore, M365 — not generic theory." },
          { t: "Accreditation pathways", d: "Structured routes toward FIA, BAFE, FIRAS, NICEIC and IFE chartership. The Academy holds the audit framework; engineers progress against it on the job, evidenced in Uptick." },
        ],
      },
      { type: "prose", label: "03 · Why the Academy earns income",
        h: "Regulatory IP, productised.",
        body: [
          "Operators across the sector face the same regulatory shape we do: Building Safety Act, golden-thread evidence, audit-ready posture. Most can't afford to build the frameworks. The Academy sells access to ours — under a training-and-accreditation licence — so we recover the cost of authoring those frameworks while building authority in the sector that buys from us anyway.",
        ],
      },
    ],
    cta: { h: "Open roles or apprenticeships at AMPM?", email: "careers@ampm.co.uk" },
  },
};

const CompanyDetailPage = ({ setRoute, companyId }) => {
  useReveal();
  const co = CO_DETAIL[companyId];

  if (!co) {
    // Defensive fallback — shouldn't happen, but render gracefully.
    return (
      <section className="section">
        <h1 className="display">Company not found.</h1>
        <p className="deck" style={{ marginTop: 16 }}>
          <a onClick={() => setRoute("companies")} style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", borderBottom: "1px solid var(--ink)", paddingBottom: 4, cursor: "pointer" }}>← Back to companies</a>
        </p>
      </section>
    );
  }

  return (
    <>
      <article className="article">
        {/* Header */}
        <header className="article-header is-dark">
          <div className="article-header-inner">
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
              <div className="eyebrow on-dark">Subsidiary · {co.statusLabel}</div>
              <Shapes shape={co.shape} size={24} />
            </div>
            <div className="reveal">
              <h1 className="display" style={{ color: "var(--paper)", maxWidth: "20ch" }}>{co.name}</h1>
              <p className="deck" style={{ marginTop: 24, color: "rgba(246,243,236,0.85)" }}>{co.deck}</p>
            </div>
            <div className="reveal" style={{ paddingTop: 12 }}>
              <a onClick={() => setRoute("companies")} style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(246,243,236,0.65)", borderBottom: "1px solid rgba(246,243,236,0.4)", paddingBottom: 3, cursor: "pointer" }}>← All companies</a>
            </div>
          </div>
        </header>

        {/* Sections */}
        {co.sections.map((s, i) => {
          if (s.type === "prose") {
            return (
              <section className="article-section reveal" key={i}>
                <div className="article-section-inner two-col">
                  <div className="article-aside"><div className="eyebrow">{s.label}</div></div>
                  <div className="article-body">
                    <h2>{s.h}</h2>
                    {s.body.map((p, j) => <p key={j}>{p}</p>)}
                  </div>
                </div>
              </section>
            );
          }
          if (s.type === "capability" || s.type === "preview") {
            return (
              <section className={`article-section reveal ${s.type === "preview" ? "is-tinted" : ""}`} key={i}>
                <div className="article-section-inner two-col">
                  <div className="article-aside"><div className="eyebrow">{s.label}</div></div>
                  <div className="article-body wide">
                    <h2>{s.h}</h2>
                    <div className="capability-list">
                      {s.items.map((it, j) => (
                        <div className="capability-row" key={j}>
                          <div className="capability-t">{it.t}</div>
                          <div className="capability-d">{it.d}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            );
          }
          if (s.type === "clients") {
            return (
              <section className="article-section reveal" key={i}>
                <div className="article-section-inner two-col">
                  <div className="article-aside"><div className="eyebrow">{s.label}</div></div>
                  <div className="article-body">
                    <h2>{s.h}</h2>
                    <p>{s.body}</p>
                    <div className="client-strip">
                      {s.clients.map(c => <span key={c} className="client-chip">{c}</span>)}
                    </div>
                    <p className="micro-note">
                      Client names listed as representative of the buyer-shape we work with. Specific case studies on the <a onClick={() => setRoute("work")} style={{ borderBottom: "1px solid var(--ink)", cursor: "pointer" }}>Work page</a>.
                    </p>
                  </div>
                </div>
              </section>
            );
          }
          if (s.type === "approach") {
            return (
              <section className="article-section reveal" key={i}>
                <div className="article-section-inner two-col">
                  <div className="article-aside"><div className="eyebrow">{s.label}</div></div>
                  <div className="article-body wide">
                    <h2>{s.h}</h2>
                    <div className="phases">
                      {s.steps.map((p, j) => (
                        <div className="phase" key={j}>
                          <div className="phase-n">{p.n}</div>
                          <h4>{p.t}</h4>
                          <p>{p.d}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            );
          }
          return null;
        })}
      </article>

      {/* CTA */}
      <section className="section dark">
        <div className="section-inner">
          <div className="two-col reveal">
            <div>
              <div className="eyebrow on-dark">Talk to us</div>
              <h2 className="display" style={{ fontSize: "clamp(28px, 3vw, 44px)" }}>{co.cta.h}</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 12 }}>
              {co.cta.emailLabel && (
                <div className="eyebrow on-dark" style={{ color: "rgba(246,243,236,0.55)" }}>{co.cta.emailLabel}</div>
              )}
              <div style={{ fontFamily: "var(--serif)", fontSize: 26, color: "var(--paper)" }}>{co.cta.email}</div>
              <a onClick={() => setRoute("contact")} style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", borderBottom: "1px solid rgba(246,243,236,0.5)", paddingBottom: 4, cursor: "pointer", color: "var(--paper)", display: "inline-block", alignSelf: "flex-start", marginTop: 8 }}>All contact routes →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Object.assign(window, { CompanyDetailPage, CO_DETAIL });
