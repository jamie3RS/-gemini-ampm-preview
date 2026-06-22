// AMPM Building Services — Work, About, Contact.

const WorkPage = ({ setRoute }) => {
  useReveal("work");
  return (
    <div className="page">
      <div className="shell">
        <section className="sec p-hero">
          <div className="reveal"><Kicker>Work</Kicker></div>
          <h1 className="reveal d1">Work that<br />holds together.</h1>
          <p className="lede reveal d2">
            The building-services work we are set up to deliver, and the capability we bring to each.
            Named project case studies follow as they complete &mdash; <strong>PQQ references and project sheets
            available on request.</strong>
          </p>
        </section>

        <section className="sec tight">
          <div className="cap-grid reveal">
            {CAPS.map((c, i) => (
              <div className="cap" key={i}>
                <image-slot id={"ls-work-" + i} shape="rect" class="img" style={{ width: "100%", height: "240px", display: "block" }}
                  src={c.slot} placeholder={"WORK — " + c.kind}></image-slot>
                <span className="kind" dangerouslySetInnerHTML={{ __html: c.kind }} />
                <h4 dangerouslySetInnerHTML={{ __html: c.t }} />
                <p dangerouslySetInnerHTML={{ __html: c.d }} />
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="band ink" data-nav-dark>
        <div className="shell">
          <div className="intro2 reveal">
            <div>
              <Kicker dark>Track record · via the Group</Kicker>
              <h2 className="dhead sm" style={{ color: "#fff" }}>The clients behind<br />the credentials.</h2>
            </div>
            <div>
              <p className="body" style={{ color: "rgba(255,255,255,0.86)" }}>
                AMPM Building Services operates on the back of a 29-year client base built by Gemini AMPM &mdash; including
                <strong style={{ color: "#fff" }}> Mace</strong> (Bloomberg HQ, 40 Argyll Street, Peterborough Court),
                <strong style={{ color: "#fff" }}> Arc Group</strong>, <strong style={{ color: "#fff" }}>FirstPort</strong>,
                <strong style={{ color: "#fff" }}> Equans</strong> and <strong style={{ color: "#fff" }}>Canterbury City Council</strong>.
                The team, the audit framework and the operating posture are shared.
              </p>
              <div className="cta-row2">
                <a className="btn ghost" href="https://ampmgroup.co.uk" target="_blank" rel="noopener noreferrer">Group case studies ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAband setRoute={setRoute} green kicker="Project sheets · PQQ references"
        head="Looking for a<br />specific reference?"
        body="Tender qualification, scope-specific references and full project sheets are sent with our PQQ response. Tell us what you need."
        primaryLabel="Request references" />
    </div>
  );
};

const AboutPage = ({ setRoute }) => {
  useReveal("about");
  return (
    <div className="page">
      <div className="shell">
        <section className="sec p-hero">
          <div className="reveal"><Kicker>About</Kicker></div>
          <h1 className="reveal d1">The building-services<br />arm of AMPM Group.</h1>
          <p className="lede reveal d2">
            AMPM Building Services holds MEPH, Commercial, Fabric and Groundworks under one entity, run on the
            operating stack, compliance posture and audit framework of AMPM Group &mdash; <strong>the holding company built
            around Gemini AMPM, the life-safety flagship trading since 1997.</strong>
          </p>
        </section>

        <section className="sec">
          <div className="intro2 reveal" style={{ marginBottom: 36 }}>
            <div>
              <Kicker>How we operate</Kicker>
              <h2 className="dhead">Four operating<br />principles.</h2>
            </div>
            <p className="body">
              The discipline a Tier-1 buyer or a sophisticated end-user needs to see before they trust a brand-new
              contractor with a package.
            </p>
          </div>
          <div className="principles reveal">
            {PRINCIPLES.map((p) => (
              <div className="principle" key={p.n}>
                <div className="n">{p.n}</div>
                <div>
                  <h4>{p.t}</h4>
                  <p dangerouslySetInnerHTML={{ __html: p.d }} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="band ink" data-nav-dark>
        <div className="shell">
          <div className="intro2 reveal" style={{ marginBottom: 40 }}>
            <div>
              <Kicker dark>Part of AMPM Group</Kicker>
              <h2 className="dhead sm" style={{ color: "#fff" }}>One mothership.<br />Six shapes.</h2>
            </div>
            <p className="body" style={{ color: "rgba(255,255,255,0.86)" }}>
              AMPM Group is a compliance-led building-services group: Gemini AMPM at the centre, and a set of
              subsidiaries that extend the offering. We are the in-house building-services arm.
            </p>
          </div>
          <div className="grp-grid reveal">
            {GROUP_CARDS.map((c, i) => (
              <div className={"cell" + (c.current ? " current" : "")} key={i}>
                <span className="tag">{c.tag}</span>
                <h3 dangerouslySetInnerHTML={{ __html: c.t }} />
                <p dangerouslySetInnerHTML={{ __html: c.d }} />
              </div>
            ))}
          </div>
          <div className="grp-chips reveal">
            {GROUP_CHIPS.map((c) => <span className={"grp-chip" + (c === "AMPM Building Services" ? " current" : "")} key={c}>{c}</span>)}
          </div>
        </div>
      </section>

      <div className="shell">
        <section className="sec">
          <div className="reveal" style={{ marginBottom: 32 }}>
            <Kicker>Leadership</Kicker>
            <h2 className="dhead sm">The hands on the tiller.</h2>
            <p className="body" style={{ marginTop: 14 }}>
              Senior leadership shared with AMPM Group. Operational delivery and site teams sit underneath &mdash;
              full team structure available with PQQ responses.
            </p>
          </div>
          <div className="team reveal">
            {TEAM.map((p) => (
              <div className="person" key={p.name}>
                <div className="role">{p.role}</div>
                <div className="name">{p.name}</div>
                <p className="note" dangerouslySetInnerHTML={{ __html: p.note }} />
              </div>
            ))}
          </div>
        </section>
      </div>

      <CTAband setRoute={setRoute} green kicker="Approach us"
        head="The next step<br />is a conversation."
        body="Tier-1 pre-qualification, direct quotation, supplier onboarding or a role on the team."
        primaryLabel="Get in touch" />
    </div>
  );
};

const ContactPage = ({ setRoute, phone }) => {
  useReveal("contact");
  const tel = "tel:" + String(phone).replace(/\s+/g, "");
  return (
    <div className="page">
      <div className="shell">
        <section className="sec p-hero">
          <div className="reveal"><Kicker>Contact</Kicker></div>
          <h1 className="reveal d1">Direct lines,<br />named humans.</h1>
          <p className="lede reveal d2">
            Four routes, depending on what you need. <strong>Every email is read by a named person;</strong> we answer
            within 24 hours during the working week.
          </p>
        </section>

        <section className="sec tight">
          <div className="routes2 reveal">
            <div>
              <div className="route"><p className="rl">{ROUTES[0].l}</p><div className="rv"><a href={"mailto:" + ROUTES[0].v}>{ROUTES[0].v}</a></div><p className="rs">{ROUTES[0].s}</p></div>
              <div className="route stack"><p className="rl">{ROUTES[1].l}</p><div className="rv"><a href={"mailto:" + ROUTES[1].v}>{ROUTES[1].v}</a></div><p className="rs">{ROUTES[1].s}</p></div>
            </div>
            <div>
              <div className="route"><p className="rl">{ROUTES[2].l}</p><div className="rv"><a href={"mailto:" + ROUTES[2].v}>{ROUTES[2].v}</a></div><p className="rs">{ROUTES[2].s}</p></div>
              <div className="route stack"><p className="rl">{ROUTES[3].l}</p><div className="rv"><a href={"mailto:" + ROUTES[3].v}>{ROUTES[3].v}</a></div><p className="rs">{ROUTES[3].s}</p></div>
            </div>
          </div>

          <div className="reveal" style={{ marginTop: 48, display: "flex", gap: 36, alignItems: "center", flexWrap: "wrap", borderTop: "3px solid var(--ink)", paddingTop: 36 }}>
            <div>
              <p className="rl" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-3)", margin: "0 0 8px" }}>One line, day or night</p>
              <a className="phone" style={{ fontFamily: "var(--d-display)", fontWeight: 800, fontSize: "clamp(32px,4vw,52px)", letterSpacing: "0.03em", border: "3px solid var(--ink)", padding: "8px 20px", display: "inline-block" }} href={tel} id="big-phone">{phone}</a>
            </div>
            <span style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.6, color: "var(--ink-2)", maxWidth: "30ch" }}>
              Answered by an engineer, not a queue. 24 hours, 365 days.
            </span>
          </div>
        </section>
      </div>

      <section className="band ink" data-nav-dark>
        <div className="shell">
          <div className="survey" style={{ borderTop: "none", paddingTop: 0 }}>
            <div>
              <Kicker dark>Book a survey</Kicker>
              <h3>Send us the<br />job.</h3>
              <p className="note">
                Send the address and a line on what needs doing. A surveyor &mdash; not a sales team &mdash; comes
                back to you within one working day.
              </p>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <input className="f" type="text" placeholder="Your name" />
              <input className="f" type="text" placeholder="Company" />
              <input className="f" type="text" placeholder="Building / site address" />
              <input className="f" type="text" placeholder="What needs doing" />
              <button className="btn" type="button">Request a survey</button>
              <div className="sla">Surveyed in 5 working days · quoted in 10 — [confirm SLAs]</div>
            </form>
          </div>

          <div className="reg-grid reveal" style={{ marginTop: 64, borderTop: "1px solid rgba(244,234,216,0.2)", paddingTop: 40 }}>
            <div className="reg-block">
              <p className="rl">Registered office</p>
              <div className="rv">
                AMPM Building Services Limited<br />
                c/o AMPM Group Limited<br />
                Burgess Hill, West Sussex
              </div>
            </div>
            <div className="reg-block">
              <p className="rl">Company</p>
              <div className="rv">
                An AMPM Group company<br />
                CRN 17225766
              </div>
              <div className="cta-row2" style={{ marginTop: 18 }}>
                <a className="btn ghost sm" href="https://ampmgroup.co.uk" target="_blank" rel="noopener noreferrer">Visit AMPM Group ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { WorkPage, AboutPage, ContactPage });
