// AMPM Building Services — Services + Compliance & Building Safety.

const CTAband = ({ setRoute, kicker, head, body, primary = "contact", primaryLabel = "Request a quote", green }) => (
  <section className={"band " + (green ? "green" : "ink")} data-nav-dark>
    <div className="shell">
      <div className="cta-split reveal">
        <div>
          <Kicker dark>{kicker}</Kicker>
          <h2 className="dhead sm" dangerouslySetInnerHTML={{ __html: head }} />
          {body && <p className="body" style={{ marginTop: 18 }} dangerouslySetInnerHTML={{ __html: body }} />}
        </div>
        <div className="cta-row2" style={{ flexDirection: "column", alignItems: "flex-start" }}>
          <a className="btn ghost" href={"#" + primary} onClick={(e) => { e.preventDefault(); setRoute(primary); }}>{primaryLabel} &rarr;</a>
          <a className="btn ghost" href="#contact" onClick={(e) => { e.preventDefault(); setRoute("contact"); }}>General enquiry</a>
        </div>
      </div>
    </div>
  </section>
);

const ServicesPage = ({ setRoute }) => {
  useReveal("services");
  return (
    <div className="page">
      <div className="shell">
        <section className="sec p-hero">
          <div className="reveal"><Kicker>Services</Kicker></div>
          <h1 className="reveal d1">Four service lines.<br />One contractor.</h1>
          <p className="lede reveal d2">
            MEPH, Commercial, Fabric and Groundworks &mdash; the building-services packages most clients
            have to procure separately. We hold all four under one entity, with <strong>one Form of Tender, one PM
            and one accountability chain.</strong>
          </p>
        </section>

        <section className="sec tight">
          {LINES.map((l) => (
            <div className="svc-detail reveal link" key={l.id} id={l.id} onClick={() => setRoute(l.id)}>
              <div className="lead-col">
                <span className="no">{l.no}</span>
                <span className="swatch" style={{ background: l.colour }}></span>
              </div>
              <div>
                <h3 className="nm">{l.name}</h3>
                <p className="scope" dangerouslySetInnerHTML={{ __html: l.scope }} />
              </div>
              <div>
                <p className="aside-l">Market drivers</p>
                <p className="driver" dangerouslySetInnerHTML={{ __html: l.driver }} />
                <a className="btn line sm" style={{ marginTop: 18 }} href={"#" + l.id} onClick={(e) => { e.preventDefault(); e.stopPropagation(); setRoute(l.id); }}>Explore {l.name} &rarr;</a>
              </div>
            </div>
          ))}
        </section>

        <section className="sec">
          <div className="intro2 reveal" style={{ marginBottom: 40 }}>
            <div>
              <Kicker>Accreditations &amp; insurance</Kicker>
              <h2 className="dhead">Audit-ready<br />by default.</h2>
            </div>
            <p className="body">
              The accreditation and insurance position required for Tier-1 main-contractor supply chains and
              direct client work &mdash; held independently where appropriate, leveraging the Group's stack where it makes sense.
            </p>
          </div>

          <table className="acc-table reveal">
            <thead>
              <tr><th>Accreditation</th><th>Required for</th><th>Status</th><th>Note</th></tr>
            </thead>
            <tbody>
              {ACCREDS.map((a, i) => (
                <tr key={i}>
                  <td><strong dangerouslySetInnerHTML={{ __html: a.name }} />{a.forg ? <span className="note"> (via Group)</span> : null}</td>
                  <td dangerouslySetInnerHTML={{ __html: a.for }} />
                  <td><span className={"pill " + a.status}>{a.status === "on" ? "Held" : a.status === "in" ? "In progress" : "In scope"}</span></td>
                  <td className="note" dangerouslySetInnerHTML={{ __html: a.note }} />
                </tr>
              ))}
            </tbody>
          </table>

          <div className="reveal" style={{ marginTop: 36 }}>
            <h3 className="dhead sm" style={{ fontSize: "clamp(24px,2.6vw,34px)", marginBottom: 12 }}>Insurance</h3>
            <p className="body">
              Employers' and Public Liability cover at <strong>&pound;10m each</strong> &mdash; at the levels required for
              Tier-1 supply-chain appointments. Professional Indemnity (&pound;1&ndash;2m) for design-and-build scope, and
              Contract Works (All-Risks) cover on every project. Full insurance pack available with our PQQ response on request.
            </p>
          </div>
        </section>
      </div>

      <CTAband setRoute={setRoute} green kicker="Quote · tender · talk"
        head="Send a tender pack,<br />a scope, or a question."
        body="Tier-1 pre-qualification, direct quotation or supplier onboarding. We answer to a named human within 24 hours."
        primaryLabel="Request a quote" />
    </div>
  );
};

const CompliancePage = ({ setRoute }) => {
  useReveal("compliance");
  return (
    <div className="page">
      <div className="shell">
        <section className="sec p-hero">
          <div className="reveal"><Kicker>Compliance &amp; Building Safety</Kicker></div>
          <h1 className="reveal d1">Built on the<br />golden thread.</h1>
          <p className="lede reveal d2">
            The Building Safety Act changed what a credible contractor has to prove. We were built for it &mdash;
            inheriting <strong>Gemini AMPM's life-safety discipline since 1997</strong>, so the golden thread and
            audit-ready handover are the default, not an upgrade.
          </p>
        </section>

        <section className="sec tight">
          <div className="reveal" style={{ marginBottom: 32 }}>
            <Kicker>The golden thread, our method</Kicker>
            <h2 className="dhead sm">Information that survives handover.</h2>
          </div>
          <div className="thread reveal">
            {THREAD.map((s) => (
              <div className="step" key={s.n}>
                <span className="n">{s.n}</span>
                <h4>{s.t}</h4>
                <p dangerouslySetInnerHTML={{ __html: s.d }} />
              </div>
            ))}
          </div>
        </section>

        <section className="sec">
          <div className="intro2 reveal" style={{ marginBottom: 36 }}>
            <div>
              <Kicker>Accreditation wall</Kicker>
              <h2 className="dhead">What PQQ teams<br />scan for first.</h2>
            </div>
            <p className="body">
              The certifications that get a contractor through pre-qualification &mdash; held by AMPM Building Services
              or leveraged from the Group. We send the full pack with every PQQ response.
            </p>
          </div>
          <div className="acc-wall reveal">
            {WALL.map((w, i) => (
              <div className="cell" key={i}>
                <span className="t">{w.t}</span>
                <span className="d" dangerouslySetInnerHTML={{ __html: w.d }} />
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="band ink" data-nav-dark>
        <div className="shell">
          <div className="intro2 reveal">
            <div>
              <Kicker dark>Inherited credibility</Kicker>
              <h2 className="dhead sm" style={{ color: "#fff" }}>A quarter-century<br />of life-safety behind us.</h2>
            </div>
            <div>
              <p className="body" style={{ color: "rgba(255,255,255,0.86)" }}>
                Our sister company <strong style={{ color: "#fff" }}>Gemini AMPM</strong> has protected the South East's most
                demanding buildings &mdash; fire, security and passive fire &mdash; since 1997. Employee-owned, with NSI Gold,
                BAFE, FIRAS and Constructionline Gold among its accreditations.
              </p>
              <p className="body" style={{ color: "rgba(255,255,255,0.86)", marginTop: 14 }}>
                For Building Services clients, that means the compliance posture, the audit framework and the operating
                stack are the Group's &mdash; not a new contractor's first attempt at them.
              </p>
              <div className="cta-row2">
                <a className="btn ghost" href="https://geminiampm.co.uk" target="_blank" rel="noopener noreferrer">Visit Gemini AMPM ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAband setRoute={setRoute} green kicker="For PQQ teams"
        head="Request our<br />compliance pack."
        body="Accreditation certificates, insurance schedule, RAMS templates and our golden-thread method statement &mdash; sent to a named contact."
        primaryLabel="Request the pack" />
    </div>
  );
};

Object.assign(window, { ServicesPage, CompliancePage, CTAband });
