// AMPM Building Services — About, Work, Contact

// ——— Leadership (senior leadership only — open roles surfaced separately) ———
const TEAM = [
  {
    name: "Dan Small",
    role: "Director · Interim MD",
    note: "Group Managing Director of AMPM Group, carrying the director role for Building Services. Operational lead across delivery, supply chain and team. Twenty-plus years in M&E and building services.",
  },
  {
    name: "Jamie Dawson",
    role: "Group Chair",
    note: "Chair of AMPM Group; sponsor of Building Services. Co-founder of Gemini AMPM (1997). Holds the Group's client, investor and acquisition relationships.",
  },
  {
    name: "Luke Finney",
    role: "Group Commercial Director",
    note: "Group commercial lead. Owns the pricing, estimating and commercial discipline that runs through Building Services. Twenty-plus years on the commercial side of M&E and life-safety.",
  },
];

// ——— Operating principles ———
const WHY = [
  { n: "01", t: "One contractor, five trades.",
    d: "M&E, fit-out, roofing and groundworks all sit under AMPM Building Services. One Form of Tender, one PM, one snag list, one team to hold to the programme. The complexity of co-ordinating multiple sub-contractors stops at our door, not yours." },
  { n: "02", t: "Compliance is a posture, not an afterthought.",
    d: "Golden-thread documentation, audit-ready records, RAMS and method statements on every package. The compliance framework comes from AMPM Group — refined across nearly three decades of life-safety and fire work — not invented on the job." },
  { n: "03", t: "Tier-1 application discipline.",
    d: "We understand how Tier-1 main contractor application cycles work; we tighten our own application and collection cadence to match. No over-application drift, no late-stage commercial surprises, no awkward conversations with the QS." },
  { n: "04", t: "Operating stack of an established group.",
    d: "Procore for project delivery, Uptick for asset and PPM, Microsoft 365 SharePoint for golden-thread documentation, Xero for financials. Above-market for our scale. The system is already operating at AMPM Group; Building Services runs on it." },
];

// ——— About ———
const AboutPage = ({ setRoute }) => {
  useReveal();
  return (
    <>
      <section className="section">
        <div className="reveal" style={{ marginBottom: 36 }}>
          <div className="eyebrow">About</div>
          <h1 className="display">The building services <em>arm</em><br/>of AMPM Group.</h1>
          <p className="deck" style={{ marginTop: 18, maxWidth: "60ch" }}>
            AMPM Building Services holds M&amp;E, fit-out, roofing and groundworks under one entity, run on the operating stack, compliance posture and audit framework of AMPM Group &mdash; the holding company built around Gemini AMPM, the life-safety flagship trading since 1997.
          </p>
        </div>

        <div className="two-col reveal" style={{ marginTop: 56 }}>
          <div>
            <div className="eyebrow">How we operate</div>
            <h2 className="display" style={{ fontSize: "clamp(28px, 3vw, 44px)" }}>Four operating <em>principles.</em></h2>
          </div>
          <div className="principles" style={{ display: "flex", flexDirection: "column" }}>
            {WHY.map(w => (
              <div key={w.n} className="principle" style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr",
                gap: 20,
                padding: "28px 0",
                borderBottom: "1px solid var(--rule)",
                borderTop: w.n === "01" ? "1px solid var(--ink)" : "none",
              }}>
                <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--bs-lead)", paddingTop: 4 }}>{w.n}</div>
                <div>
                  <h4 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 24, letterSpacing: "-0.012em", margin: "0 0 8px", lineHeight: 1.1 }}>{w.t}</h4>
                  <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--ink-2)", margin: 0, maxWidth: "58ch" }}>{w.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GROUP CONTEXT — dark band */}
      <section className="section dark">
        <div className="section-inner">
          <div className="two-col reveal" style={{ marginBottom: 32 }}>
            <div>
              <div className="eyebrow on-dark">Part of AMPM Group</div>
              <h2 className="display" style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}>The Group <em>behind us.</em></h2>
            </div>
            <div>
              <p className="deck" style={{ color: "rgba(246, 243, 236, 0.85)" }}>
                AMPM Group is a compliance-led building-services group structured as a hub-and-spoke: Gemini AMPM at the centre (life-safety, fire, security, passive fire, EOT-owned, trading since 1997), and a set of subsidiaries that extend the offering. AMPM Building Services is the in-house M&amp;E and building-services arm.
              </p>
              <div style={{ marginTop: 28 }}>
                <a className="btn ghost" href="https://ampm.co.uk" target="_blank" rel="noopener noreferrer">Visit AMPM Group &nearr;</a>
              </div>
            </div>
          </div>

          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(246, 243, 236, 0.15)", marginTop: 40 }}>
            <div style={{ background: "var(--ink)", padding: "32px 28px" }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.16em", color: "rgba(246, 243, 236, 0.55)", textTransform: "uppercase", marginBottom: 12 }}>The flagship</div>
              <h3 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 22, letterSpacing: "-0.012em", margin: "0 0 10px", color: "var(--paper)", lineHeight: 1.1 }}>Gemini AMPM</h3>
              <p style={{ fontFamily: "var(--serif)", fontSize: 14, lineHeight: 1.55, color: "rgba(246, 243, 236, 0.78)", margin: 0 }}>
                Fire, security, passive fire, life-safety and compliance services since 1997. Employee-owned. NSI Gold, BAFE, FIRAS, Constructionline Gold and ten other accreditations.
              </p>
            </div>
            <div style={{ background: "var(--ink)", padding: "32px 28px", outline: "2px solid var(--bs-lead)", outlineOffset: "-2px" }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.16em", color: "var(--bs-lead-soft)", textTransform: "uppercase", marginBottom: 12 }}>This entity</div>
              <h3 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 22, letterSpacing: "-0.012em", margin: "0 0 10px", color: "var(--paper)", lineHeight: 1.1 }}>AMPM Building Services</h3>
              <p style={{ fontFamily: "var(--serif)", fontSize: 14, lineHeight: 1.55, color: "rgba(246, 243, 236, 0.78)", margin: 0 }}>
                M&amp;E, fit-out, roofing and groundworks. One accountable contractor across the building-services scope that most clients have to procure separately.
              </p>
            </div>
            <div style={{ background: "var(--ink)", padding: "32px 28px" }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.16em", color: "rgba(246, 243, 236, 0.55)", textTransform: "uppercase", marginBottom: 12 }}>The wider Group</div>
              <h3 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 22, letterSpacing: "-0.012em", margin: "0 0 10px", color: "var(--paper)", lineHeight: 1.1 }}>Facilities &middot; Live &middot; Academy</h3>
              <p style={{ fontFamily: "var(--serif)", fontSize: 14, lineHeight: 1.55, color: "rgba(246, 243, 236, 0.78)", margin: 0 }}>
                Aggregated FM, the AMPM Live client portal, and the Group's training and accreditation arm. Six companies, one mothership, one palette.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section">
        <div className="reveal" style={{ marginBottom: 32 }}>
          <div className="eyebrow">Leadership</div>
          <h2 className="display" style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}>The hands on <em>the tiller.</em></h2>
          <p className="deck" style={{ marginTop: 16, maxWidth: "60ch" }}>
            Senior leadership shared with AMPM Group. Operational delivery, supply chain and site teams sit underneath; full team structure available with PQQ responses.
          </p>
        </div>
        <div className="people-grid reveal">
          {TEAM.map(p => (
            <div className="person" key={p.name}>
              <div className="person-portrait"></div>
              <div className="role">{p.role}</div>
              <div className="name">{p.name}</div>
              <div className="note">{p.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CAREERS CALL-OUT — minimal, confident */}
      <section className="section tight">
        <div className="reveal" style={{ padding: "40px 44px", background: "var(--paper-2)", borderLeft: "3px solid var(--bs-lead)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "center" }}>
          <div>
            <div className="eyebrow">Careers</div>
            <h3 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 28, letterSpacing: "-0.012em", margin: "0 0 10px", lineHeight: 1.1 }}>Hiring across the team.</h3>
            <p style={{ fontFamily: "var(--serif)", fontSize: 15, lineHeight: 1.55, color: "var(--ink-2)", margin: 0, maxWidth: "50ch" }}>
              Operations Manager, M&amp;E supervisors, engineers across electrical, mechanical and Gas Safe, and apprenticeships through the AMPM Academy pipeline. Open to inbound enquiries &mdash; tell us what you do.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start", justifySelf: "end" }}>
            <a className="btn dark" onClick={() => setRoute("contact")}>Open roles &amp; apprenticeships &rarr;</a>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="section green-band">
        <div className="section-inner">
          <div className="close-cta reveal">
            <div>
              <div className="eyebrow on-dark">Approach us</div>
              <h2 className="display" style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}>The next step<br/>is a <em>conversation.</em></h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
              <a className="btn ghost" onClick={() => setRoute("contact")}>Request a quote &rarr;</a>
              <a className="btn ghost" onClick={() => setRoute("contact")}>Apprenticeships &amp; careers</a>
              <a className="btn ghost" onClick={() => setRoute("contact")}>Become a supplier</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// ——— Work / capability gallery ———
const CAPABILITIES = [
  { id: "ev",      kind: "Electrical &middot; M&amp;E",  t: "EV charging infrastructure",
    d: "Multi-bay car-park installations, distribution-board upgrades, supply, install and commissioning of charging units across commercial and residential portfolios. Designed and certified by NICEIC-registered engineers; integrated with fit-out and groundworks where the project needs it.",
    g: "electrical" },
  { id: "hvac",    kind: "Mechanical &middot; M&amp;E",  t: "HVAC retrofits &amp; heat pumps",
    d: "Heat-pump retrofits and HVAC replacements for commercial estates and residential blocks. Plant install, pipework, controls, commissioning. Designed around energy-efficiency programmes, landlord net-zero commitments and Building Safety Act remediation.",
    g: "me-pipework" },
  { id: "catb",    kind: "Fit-out",                       t: "Cat-A &amp; Cat-B office fit-out",
    d: "Internal partitioning, dry-lining, joinery, finishes and fit-out M&amp;E. We hold the M&amp;E in-house rather than sub-letting it &mdash; which removes the most common source of programme slip on fit-out jobs.",
    g: "fitout" },
  { id: "roofing", kind: "Roofing",                       t: "Flat-roof replacement &amp; envelope",
    d: "GRP, EPDM and single-ply flat roof replacement; pitched roof maintenance; insurance reinstatement works. Building-envelope upgrade programmes for landlord portfolios with multi-asset scope.",
    g: "roof" },
];

const WorkPage = ({ setRoute }) => {
  useReveal();
  return (
    <>
      <section className="section">
        <div className="reveal" style={{ marginBottom: 32 }}>
          <div className="eyebrow">Work</div>
          <h1 className="display">Work that <em>holds together.</em></h1>
          <p className="deck" style={{ marginTop: 18, maxWidth: "60ch" }}>
            The kinds of building-services work we are set up to deliver, and the capability we bring to each. Selected named project case studies follow as they complete &mdash; specific PQQ references and project sheets available on request.
          </p>
        </div>

        <div className="cap-grid reveal">
          {CAPABILITIES.map(c => (
            <div className="cap-card" key={c.id}>
              <div className="cap-image">
                <CapGraphic kind={c.g} />
              </div>
              <div className="kind" dangerouslySetInnerHTML={{ __html: c.kind }} />
              <h4>{c.t}</h4>
              <p dangerouslySetInnerHTML={{ __html: c.d }} />
            </div>
          ))}
        </div>
      </section>

      {/* GROUP TRACK RECORD */}
      <section className="section dark">
        <div className="section-inner">
          <div className="two-col reveal">
            <div>
              <div className="eyebrow on-dark">Track record &middot; via the Group</div>
              <h2 className="display" style={{ fontSize: "clamp(28px, 3vw, 44px)" }}>The clients <em>behind</em> the credentials.</h2>
            </div>
            <div>
              <p className="deck" style={{ color: "rgba(246, 243, 236, 0.85)" }}>
                AMPM Building Services operates on the back of a 27-year client base built by Gemini AMPM &mdash; including <strong>Mace</strong> (Bloomberg HQ, 40 Argyll Street, Peterborough Court), <strong>Arc Group</strong>, <strong>FirstPort / Solitaire</strong>, <strong>Equans</strong>, <strong>Canterbury City Council</strong> and Tier-1 main contractor supply chains. The team, the audit framework and the operating posture are shared.
              </p>
              <div style={{ marginTop: 28 }}>
                <a className="btn ghost" href="https://ampm.co.uk" target="_blank" rel="noopener noreferrer">Group case studies &nearr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="section green-band">
        <div className="section-inner">
          <div className="close-cta reveal">
            <div>
              <div className="eyebrow on-dark">Project sheets &middot; PQQ references</div>
              <h2 className="display" style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}>Looking for a specific reference? <em>Ask.</em></h2>
              <p className="deck" style={{ marginTop: 16, color: "rgba(246, 243, 236, 0.92)" }}>
                Tender qualification, scope-specific references and full project sheets are sent with our PQQ response. Tell us what you need.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
              <a className="btn ghost" onClick={() => setRoute("contact")}>Request references &rarr;</a>
              <a className="btn ghost" onClick={() => setRoute("contact")}>General enquiry</a>
            </div>
          </div>
        </div>
      </section>
    </>
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
          <h1 className="display">Direct lines, <em>named humans.</em></h1>
          <p className="deck" style={{ marginTop: 18, maxWidth: "60ch" }}>
            Four routes, depending on what you need. Every email is read by a named person; we answer within 24 hours during the working week.
          </p>
        </div>

        <div className="contact-grid reveal">
          <div className="contact-block">
            <div className="lbl">Tender &middot; quotation</div>
            <div className="val">bids@ampm.co.uk</div>
            <div className="sub">PQQ responses, fee proposals, scope queries from Tier-1 main contractors and direct clients. Include scope, programme and stage if you can.</div>

            <div className="lbl" style={{ marginTop: 32 }}>General enquiry</div>
            <div className="val">hello@ampm.co.uk</div>
            <div className="sub">First-time enquiries, introductions, anything that isn't yet a tender. We'll route you internally.</div>
          </div>

          <div className="contact-block">
            <div className="lbl">Suppliers &middot; supply chain</div>
            <div className="val">suppliers@ampm.co.uk</div>
            <div className="sub">Specialist sub-contractors in electrical, mechanical, Gas Safe, fit-out, roofing or groundworks: we qualify preferred suppliers across all five service lines. Send capability, insurance, accreditations and references.</div>

            <div className="lbl" style={{ marginTop: 32 }}>Careers &middot; apprenticeships</div>
            <div className="val">careers@ampm.co.uk</div>
            <div className="sub">M&amp;E supervisors, engineers, and apprenticeships through the AMPM Academy pipeline. Open to inbound &mdash; tell us what you do.</div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="section-inner">
          <div className="two-col reveal">
            <div>
              <div className="eyebrow on-dark">Registered</div>
              <h2 className="display" style={{ fontSize: "clamp(28px, 3vw, 40px)" }}>AMPM Building Services <em>Limited.</em></h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(246, 243, 236, 0.55)", marginBottom: 8 }}>Registered office</div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 18, color: "var(--paper)", lineHeight: 1.4 }}>
                  AMPM Building Services Limited<br/>
                  c/o AMPM Group Limited<br/>
                  Burgess Hill<br/>
                  West Sussex
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(246, 243, 236, 0.55)", marginBottom: 8 }}>Parent &middot; group</div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 18, color: "var(--paper)", lineHeight: 1.4 }}>
                  Subsidiary of AMPM Group Limited<br/>
                  CRN 17136810
                </div>
              </div>
              <div>
                <a className="btn ghost" href="https://ampm.co.uk" target="_blank" rel="noopener noreferrer">Visit AMPM Group &nearr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Object.assign(window, { AboutPage, WorkPage, ContactPage, TEAM, WHY, CAPABILITIES });
