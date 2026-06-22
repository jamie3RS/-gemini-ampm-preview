// AMPM Building Services — page bodies: Home, Services.

// ——— Services data (shared by Home + Services) ———
const SERVICES = [
  {
    id: "me",
    name: "Mechanical & Electrical",
    short: "M&E",
    scope: "Heating &amp; cooling, HVAC, pipework, plant installation, ventilation, plumbing. First and second fix electrical, distribution, EV charging, lighting and power.",
    driver: "HVAC retrofits, heat-pump installations, energy-efficiency programmes, EV charging rollout, new-build and fit-out M&E packages.",
    tagline: "Lead service",
  },
  {
    id: "fitout",
    name: "Fit-out",
    short: "Fit-out",
    scope: "Internal fit-out, dry-lining, partitioning, joinery, associated finishes. Tier-1 supply-chain fit-out and direct landlord work.",
    driver: "Office refurbishment, residential conversions, Cat-A and Cat-B fit-out for Tier-1 main contractors.",
    tagline: "Cat-A &middot; Cat-B",
  },
  {
    id: "roof",
    name: "Roofing",
    short: "Roofing",
    scope: "Flat and pitched roofing, roof replacement, maintenance, waterproofing systems &mdash; GRP, EPDM, single-ply, pitched.",
    driver: "Building-envelope programmes, landlord compliance, insurance reinstatement works.",
    tagline: "GRP &middot; EPDM &middot; pitched",
  },
  {
    id: "ground",
    name: "Groundworks",
    short: "Groundworks",
    scope: "Foundations, drainage, concrete, civils associated with building works. Enabling works for new-build and refurbishment.",
    driver: "New-build enabling works, drainage compliance, car-park and external works packages.",
    tagline: "Civils &middot; enabling",
  },
];

// ——— Home ———
const HomePage = ({ setRoute, tweaks = {} }) => {
  useReveal();
  const hero = tweaks.heroVariant || "depth";
  const showCounters = tweaks.showCounters !== false;

  const HEROES = {
    depth:    { eyebrow: "M&amp;E &middot; Fit-out &middot; Roofing &middot; Groundworks",
                h: <>Buildings done <em>properly.</em><br/>From the slab up.</>,
                d: "AMPM Building Services holds M&E, fit-out, roofing and groundworks under one roof, one PM and one Form of Tender. The building-services arm of AMPM Group &mdash; same operating stack, same compliance discipline, same kind of work that has run through Gemini AMPM for nearly three decades." },
    me:       { eyebrow: "One partner &middot; five trades",
                h: <>One programme.<br/>One PM. <em>One snag list.</em></>,
                d: "Brief one team, get one Form of Tender, hold one party to the programme. M&E, fit-out, roofing and groundworks &mdash; cleanly integrated under AMPM Building Services, with the back-office and audit posture of AMPM Group sitting behind every job." },
    backed:   { eyebrow: "Part of AMPM Group",
                h: <>The <em>building services</em> arm<br/>of AMPM Group.</>,
                d: "We sit alongside Gemini AMPM &mdash; the Group's life-safety and compliance flagship since 1997. Same back-office, same governance, same operating stack. Built so clients can hold one accountable building-services partner across all five trades." },
  };
  const H = HEROES[hero] || HEROES.depth;

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div className="hero-eyebrow-row">
              <span className="hero-status-chip">M&amp;E &middot; Fit-out &middot; Roofing &middot; Groundworks</span>
              <span className="hero-group-link">Part of AMPM Group</span>
            </div>
            <div className="eyebrow on-dark" dangerouslySetInnerHTML={{ __html: H.eyebrow }}></div>
            <h1 className="display">{H.h}</h1>
            <p className="deck" style={{ marginTop: 28 }}>{H.d}</p>
            <div className="hero-cta-row">
              <a className="btn primary" onClick={() => setRoute("contact")}>Request a quote &rarr;</a>
              <a className="btn ghost" onClick={() => setRoute("services")}>See services</a>
            </div>
          </div>
          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div className="bs-meridian">
              <span style={{ background: "var(--ampm-c1)" }} />
              <span className="lead" />
              <span style={{ background: "var(--ampm-c3)" }} />
              <span style={{ background: "var(--ampm-c4)" }} />
            </div>
            <div className="hero-meta">
              <div className="hero-meta-row"><span className="l">Trades</span><span className="v">M&amp;E &middot; Fit-out &middot; Roof &middot; Groundworks</span></div>
              <div className="hero-meta-row"><span className="l">Coverage</span><span className="v">London &amp; the South of England</span></div>
              <div className="hero-meta-row"><span className="l">For</span><span className="v">Tier-1 main contractors &middot; landlords &middot; direct</span></div>
              <div className="hero-meta-row"><span className="l">Group</span><span className="v">AMPM Group Limited</span></div>
              <div className="hero-meta-row"><span className="l">Sister</span><span className="v">Gemini AMPM &middot; trading since 1997</span></div>
            </div>
            <div className="pipe-strip" aria-hidden="true">
              <span /><span /><span /><span /><span /><span /><span />
            </div>
          </div>
        </div>
      </section>

      {/* COUNTERS */}
      {showCounters && (
      <section className="section tight">
        <div className="counters reveal">
          <div className="cell">
            <div className="num accent"><Counter to={5} /></div>
            <div className="lbl">Service lines, one accountable contractor</div>
          </div>
          <div className="cell">
            <div className="num">&pound;<Counter to={10} /><em>m</em></div>
            <div className="lbl">EL &amp; PL insurance &middot; Tier-1 compliant</div>
          </div>
          <div className="cell">
            <div className="num"><Counter to={27} /><em>yrs</em></div>
            <div className="lbl">Group heritage &middot; via Gemini AMPM</div>
          </div>
          <div className="cell">
            <div className="num"><Counter to={13} />+</div>
            <div className="lbl">Accreditations across the Group</div>
          </div>
        </div>
      </section>
      )}

      {/* SERVICES OVERVIEW */}
      <section className="section">
        <div className="two-col reveal" style={{ marginBottom: 48 }}>
          <div>
            <div className="eyebrow">Services</div>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 60px)" }}>M&amp;E first.<br/><em>Building services in full.</em></h2>
          </div>
          <div>
            <p className="deck" style={{ fontSize: 18 }}>
              Mechanical &amp; Electrical is the heart of what we do &mdash; HVAC, heat pumps, ventilation, plumbing, first and second fix electrical, distribution, EV charging. Fit-out, roofing and groundworks sit alongside, all under one entity and one accountable team.
            </p>
            <a className="btn dark" style={{ marginTop: 28 }} onClick={() => setRoute("services")}>See all services &rarr;</a>
          </div>
        </div>
        <div className="services-grid reveal">
          <div className="service-tile lead" onClick={() => setRoute("services")}>
            <div className="meta">
              <span>01 &middot; Lead service</span>
              <span>M&amp;E in full</span>
            </div>
            <h3>Mechanical &amp; Electrical</h3>
            <p>HVAC, heat pumps, ventilation, plumbing. First and second fix electrical, distribution boards, EV charging, lighting. Everything an M&amp;E package needs &mdash; on one team, one programme, one phone call.</p>
            <div className="stripe">
              <span style={{ background: "var(--ampm-c1)" }} />
              <span className="lead-c" />
              <span style={{ background: "var(--ampm-c3)" }} />
              <span style={{ background: "var(--ampm-c4)" }} />
            </div>
          </div>
          {SERVICES.slice(1).map((s, i) => (
            <div key={s.id} className="service-tile" onClick={() => setRoute("services")}>
              <div className="meta">
                <span>{String(i + 2).padStart(2, "0")} &middot; {s.short}</span>
                <span dangerouslySetInnerHTML={{ __html: s.tagline }} />
              </div>
              <h3>{s.name}</h3>
              <p dangerouslySetInnerHTML={{ __html: s.driver }} />
              <div className="stripe">
                <span style={{ background: "var(--ampm-c2)" }} />
                <span style={{ background: "var(--rule-strong)" }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AUDIENCE ROUTES */}
      <section className="section">
        <div className="reveal" style={{ marginBottom: 36 }}>
          <div className="eyebrow">For</div>
          <h2 className="display" style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}>Who we work <em>with.</em></h2>
        </div>
        <div className="routes reveal">
          <div className="route-card" onClick={() => setRoute("services")}>
            <div className="audience">Tier-1 main contractors</div>
            <h4>An M&amp;E sub-contractor that won't drop your programme.</h4>
            <p>Cleanly run, single point of contact, RAMS and method-statement-ready. We understand Tier-1 application cycles, golden-thread documentation and the audit posture required on Higher-Risk Buildings &mdash; via the Group's compliance heritage and the people who have lived in it.</p>
            <span className="cta">Tender enquiries &rarr;</span>
          </div>
          <div className="route-card" onClick={() => setRoute("services")}>
            <div className="audience">Direct clients &middot; landlords &amp; occupiers</div>
            <h4>One partner for the building, not five separate trades.</h4>
            <p>Commercial landlords, office occupiers and residential property managers running M&amp;E, fit-out, roofing or groundworks work: all five service lines sit under one entity, with one Form of Tender, one PM, one snag list. The complexity stops at our door.</p>
            <span className="cta">For occupiers &amp; landlords &rarr;</span>
          </div>
          <div className="route-card" onClick={() => setRoute("contact")}>
            <div className="audience">Engineers &amp; apprentices</div>
            <h4>Trades careers with the backing of a 27-year group.</h4>
            <p>Engineering and supervisory roles across electrical, mechanical, Gas Safe, fit-out, roofing and groundworks. Apprenticeships through the AMPM Group pipeline, accreditation pathways toward chartership, and the operating stack of an established group behind you on every job.</p>
            <span className="cta">Open roles &amp; apprenticeships &rarr;</span>
          </div>
        </div>
      </section>

      {/* GROUP CONTEXT — dark band */}
      <section className="section dark">
        <div className="section-inner">
          <div className="reveal" style={{ marginBottom: 32 }}>
            <div className="eyebrow on-dark">Part of AMPM Group</div>
            <h2 className="display" style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}>One mothership. <em>Six shapes.</em></h2>
          </div>
          <div className="group-context reveal">
            <div className="left">
              We are the building-services arm of AMPM Group &mdash; the holding company built around the compliance flagship, <em>Gemini AMPM</em>.
            </div>
            <div className="right">
              <p>AMPM Group is the holding company assembling a compliance-led building-services platform: Gemini AMPM (life-safety, fire, security, passive fire, EOT-owned, trading since 1997); AMPM Building Services (M&amp;E, fit-out, roofing, groundworks); AMPM Facilities (aggregated FM); AMPM Live (client portal); AMPM Ventures (acquisitions); AMPM Academy (apprenticeships &amp; training).</p>
              <p style={{ marginTop: 12 }}>For Building Services clients, that means the operating stack, the compliance posture and the audit framework are the Group's &mdash; not a contractor's first attempt at them.</p>
              <div className="group-companies">
                <span className="group-chip">Gemini AMPM</span>
                <span className="group-chip current">AMPM Building Services</span>
                <span className="group-chip">AMPM Facilities</span>
                <span className="group-chip">AMPM Live</span>
                <span className="group-chip">AMPM Ventures</span>
                <span className="group-chip">AMPM Academy</span>
              </div>
              <div style={{ marginTop: 32 }}>
                <a className="btn ghost" href="https://ampm.co.uk" target="_blank" rel="noopener noreferrer">Visit the Group site &nearr;</a>
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
              <div className="eyebrow on-dark">Quote &middot; tender &middot; talk</div>
              <h2 className="display" style={{ fontSize: "clamp(32px, 3.5vw, 56px)" }}>The next move is a <em>conversation.</em></h2>
              <p className="deck" style={{ marginTop: 20, color: "rgba(246, 243, 236, 0.92)" }}>
                Tier-1 supply-chain pre-qualification, direct quotation, supplier onboarding or a role on the team. We answer to a named human within 24 hours.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
              <a className="btn ghost" onClick={() => setRoute("contact")}>Request a quote &rarr;</a>
              <a className="btn ghost" onClick={() => setRoute("contact")}>General enquiry</a>
              <a className="btn ghost" onClick={() => setRoute("contact")}>Apprenticeships &amp; careers</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// ——— Services ———
const ServicesPage = ({ setRoute }) => {
  useReveal();
  return (
    <>
      <section className="section">
        <div className="reveal" style={{ marginBottom: 32 }}>
          <div className="eyebrow">Services</div>
          <h1 className="display">Five service lines. <em>One contractor.</em></h1>
          <p className="deck" style={{ marginTop: 18 }}>
            M&amp;E, fit-out, roofing and groundworks &mdash; the four building-services packages that most clients have to procure separately. We hold them all in one entity, with one PM, one phone number and one accountability chain.
          </p>
        </div>

        <div className="reveal">
          {SERVICES.map((s, i) => (
            <div key={s.id} className="svc-block">
              <div className="svc-row">
                <div>
                  <div className="svc-no">{String(i + 1).padStart(2, "0")}</div>
                  <div style={{ marginTop: 12 }}>
                    <span style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: i === 0 ? "var(--bs-lead-deep)" : "var(--ink-3)", display: "inline-block", padding: "4px 8px", border: "1px solid currentColor" }}
                          dangerouslySetInnerHTML={{ __html: s.tagline }} />
                  </div>
                </div>
                <div>
                  <h3 className="svc-title">{s.name}</h3>
                  <p className="svc-scope" dangerouslySetInnerHTML={{ __html: s.scope }} />
                </div>
                <div>
                  <div className="svc-aside">Market drivers</div>
                  <p className="svc-driver" dangerouslySetInnerHTML={{ __html: s.driver }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACCREDITATIONS */}
      <section className="section">
        <div className="reveal" style={{ marginBottom: 32 }}>
          <div className="eyebrow">Accreditations &amp; insurance</div>
          <h2 className="display" style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}>Audit-ready <em>by default.</em></h2>
          <p className="deck" style={{ marginTop: 18 }}>
            The accreditation and insurance position required for Tier-1 main contractor supply chains and direct client work. Held independently of the Group where appropriate; leveraging the Group's stack where it makes sense.
          </p>
        </div>

        <table className="accred-table reveal">
          <thead>
            <tr>
              <th>Accreditation</th>
              <th>Required for</th>
              <th>Status</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>NICEIC / NAPIT</strong></td>
              <td>Electrical contracting</td>
              <td><span className="status-pill in">In progress</span></td>
              <td>Qualified electricians on the team.</td>
            </tr>
            <tr>
              <td><strong>Gas Safe Registration</strong></td>
              <td>Gas installation &amp; servicing</td>
              <td><span className="status-pill in">In progress</span></td>
              <td>Qualified Gas Safe engineers registered.</td>
            </tr>
            <tr>
              <td><strong>Constructionline</strong> (via Group)</td>
              <td>Tier-1 supply-chain pre-qualification</td>
              <td><span className="status-pill on">Held &middot; Group Gold</span></td>
              <td>Leveraged from AMPM Group's Constructionline Gold.</td>
            </tr>
            <tr>
              <td><strong>CHAS</strong></td>
              <td>General contractor health-and-safety pre-qualification</td>
              <td><span className="status-pill in">In progress</span></td>
              <td>Aligned with Group H&amp;S framework.</td>
            </tr>
            <tr>
              <td><strong>FMB</strong></td>
              <td>General building credibility</td>
              <td><span className="status-pill plan">In scope</span></td>
              <td>Application underway.</td>
            </tr>
            <tr>
              <td><strong>F-Gas certification</strong></td>
              <td>Refrigeration &amp; air conditioning</td>
              <td><span className="status-pill on">Operative-held</span></td>
              <td>Relevant operatives hold individual F-Gas qualification.</td>
            </tr>
            <tr>
              <td><strong>ISO 9001 / 45001</strong></td>
              <td>Quality &amp; H&amp;S management systems</td>
              <td><span className="status-pill plan">In scope</span></td>
              <td>Implementation programme in motion.</td>
            </tr>
          </tbody>
        </table>

        <div style={{ marginTop: 32 }}>
          <h3 style={{ fontFamily: "var(--serif)", fontSize: 24, letterSpacing: "-0.01em", margin: "0 0 14px", fontWeight: 400 }}>Insurance</h3>
          <p style={{ fontSize: 16, lineHeight: 1.55, maxWidth: "60ch", color: "var(--ink-2)", margin: 0 }}>
            Employers Liability &amp; Public Liability cover at &pound;10m each &mdash; held at the upper-end levels required for Tier-1 main contractor supply-chain appointments. Professional Indemnity (&pound;1&ndash;2m) for design-and-build scope. Contract Works (All-Risks) cover on every project. Full insurance pack available with our PQQ response on request.
          </p>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="section green-band">
        <div className="section-inner">
          <div className="close-cta reveal">
            <div>
              <div className="eyebrow on-dark">Ready when you are</div>
              <h2 className="display" style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}>Send us a tender pack, a scope, <em>or a question.</em></h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
              <a className="btn ghost" onClick={() => setRoute("contact")}>Request a quote &rarr;</a>
              <a className="btn ghost" onClick={() => setRoute("contact")}>General enquiry</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Object.assign(window, { HomePage, ServicesPage, SERVICES });
