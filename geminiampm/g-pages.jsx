// Gemini AMPM — interior pages (calm "daylight chapters" on the BS sub-page
// system, in the night skin). Routes mirror the live IA & URLs.

const PageHero = ({ kicker, h1, lede, ctas }) => (
  <section className="sec p-hero nightband" data-nav-dark>
    <div className="reveal"><Kicker dark>{kicker}</Kicker></div>
    <h1 className="reveal d1" dangerouslySetInnerHTML={{ __html: h1 }} />
    {lede && <p className="lede reveal d2" dangerouslySetInnerHTML={{ __html: lede }} />}
    {ctas && <div className="reveal d3" style={{ marginTop: 26, display: "flex", gap: 14, flexWrap: "wrap" }}>{ctas}</div>}
  </section>
);

const PageWrap = ({ skin, children }) => (
  <div className="page" {...(skin === "night" ? { "data-nav-dark": "" } : {})}>
    <span className="pageglow"></span>
    <div className="shell">{children}</div>
  </div>
);

const ContactBand = ({ setRoute }) => (
  <section className="band ink" data-nav-dark>
    <div className="shell">
      <div className="cta-split reveal">
        <div>
          <Kicker dark>Talk to us</Kicker>
          <h2 className="dhead sm" style={{ color: "#fff" }}>One call covers<br />the whole building.</h2>
        </div>
        <div className="cta-row2" style={{ flexDirection: "column", alignItems: "flex-start" }}>
          <a className="btn ghost" href="#contact" onClick={(e) => { e.preventDefault(); setRoute("contact"); }}>Request a consultation &rarr;</a>
          <a className="btn ghost" href="#services" onClick={(e) => { e.preventDefault(); setRoute("services"); }}>See all services</a>
        </div>
      </div>
    </div>
  </section>
);

// Real accreditation wall (reused on Why + About)
const AccredWall = ({ head }) => (
  <section className="sec tight">
    <div className="reveal" style={{ marginBottom: 24 }}>
      <Kicker>Accreditations</Kicker>
      <h2 className="dhead sm" dangerouslySetInnerHTML={{ __html: head || "Certified to<br />the standard." }} />
    </div>
    <div className="acc-wall reveal">
      {ACCREDS.map((a, i) => (
        <div className="cell" key={i}>
          <div className="t">{a.t}</div>
          <div className="d" dangerouslySetInnerHTML={{ __html: a.d }} />
        </div>
      ))}
    </div>
    <p className="case-note">Held and maintained live &mdash; references and certificates available on request for PQQ and tender submissions.</p>
  </section>
);

// ——— Services overview ———
const ServicesPage = ({ setRoute, skin }) => {
  useReveal("services");
  return (
    <PageWrap skin={skin}>
      <PageHero kicker="Services" h1="Everything that keeps<br />a building safe<br />after dark."
        lede="Fire, security, ventilation, gas suppression and passive fire &mdash; <strong>seven service lines, one accountable, employee-owned team.</strong> Designed, installed, monitored and maintained for the South East&rsquo;s most demanding commercial and public-sector buildings."
        ctas={<a className="btn sm" href="#contact" onClick={(e) => { e.preventDefault(); setRoute("contact"); }}>Request a consultation</a>} />
      <section className="sec tight">
        {PILLARS.map((p) => (
          <div className="svc-detail link reveal" key={p.id} onClick={() => setRoute(p.id)}>
            <div className="lead-col">
              <span className="no">{p.no}</span>
              <span className="swatch" style={{ background: p.colour }}></span>
            </div>
            <div>
              <h3 className="nm" dangerouslySetInnerHTML={{ __html: p.full }} />
              <p className="scope" dangerouslySetInnerHTML={{ __html: p.short }} />
            </div>
            <div>
              <p className="aside-l">Why now</p>
              <p className="driver" dangerouslySetInnerHTML={{ __html: p.drivers }} />
            </div>
          </div>
        ))}
      </section>
      <ContactBand setRoute={setRoute} />
    </PageWrap>
  );
};

// ——— Sectors ———
const SectorsPage = ({ setRoute, skin }) => {
  useReveal("sectors");
  return (
    <PageWrap skin={skin}>
      <PageHero kicker="Sectors" h1="The buildings<br />we keep safe."
        lede="We work across commercial and public-sector buildings in complex, safety-critical environments &mdash; <strong>from hospitals and data centres to social housing, hospitality and education.</strong> Each sector has its own compliance demands; our teams know them." />
      <section className="sec tight">
        <div className="sec-index reveal">
          {SECTORS.map((s) => (
            <div className="sec-card" key={s.slug} onClick={() => setRoute("contact")}>
              <span className="sw" style={{ background: s.colour }}></span>
              <h3 dangerouslySetInnerHTML={{ __html: s.name }} />
              <p dangerouslySetInnerHTML={{ __html: s.blurb }} />
              <span className="url">geminiampm.co.uk/{s.slug}/</span>
            </div>
          ))}
        </div>
        <p className="case-note">Each sector keeps its own landing page and existing web address &mdash; the renewed design drops straight onto the URLs already ranking.</p>
      </section>
      <ContactBand setRoute={setRoute} />
    </PageWrap>
  );
};

// ——— Why choose Gemini ———
const WhyPage = ({ setRoute, skin }) => {
  useReveal("why");
  return (
    <PageWrap skin={skin}>
      <PageHero kicker="Why choose Gemini" h1="Owned by the<br />people who<br />do the work."
        lede="Safety and security sit at the heart of everything we do. As an <strong>employee-owned business (EOT)</strong>, every member of the team has a vested interest in delivering the highest standard &mdash; not a brief to hit, an ownership stake to protect." />
      <section className="sec tight">
        <div className="principles reveal">
          {WHY.map((w) => (
            <div className="principle" key={w.n}>
              <span className="n">{w.n}</span>
              <div>
                <h4 dangerouslySetInnerHTML={{ __html: w.t }} />
                <p dangerouslySetInnerHTML={{ __html: w.d }} />
              </div>
            </div>
          ))}
        </div>
      </section>
      <AccredWall head="Owned by our people.<br />Audited by everyone else." />
      <section className="sec tight">
        <div className="statband reveal">
          {PROOF.map((c, i) => (
            <div className="cell" key={i}>
              <div className="big">{c.big}</div>
              <div className="lbl" dangerouslySetInnerHTML={{ __html: c.lbl }} />
            </div>
          ))}
        </div>
      </section>
      <ContactBand setRoute={setRoute} />
    </PageWrap>
  );
};

// ——— About ———
const GROUP = [
  { tag: "This company", t: "Gemini AMPM", current: true, d: "Fire, security, ventilation, gas suppression and passive fire since 1997. Employee-owned. The life-safety specialist of the group." },
  { tag: "Sister company", t: "AMPM Building Services", d: "MEPH, commercial fit-out, fabric and groundworks &mdash; the daytime building-services arm. AM &rarr; PM." },
  { tag: "The wider group", t: "AMPM Group", d: "The mothership: shared standards, shared operating stack, one palette. Several companies, one accountable group." },
];

const AboutPage = ({ setRoute, skin }) => {
  useReveal("about");
  return (
    <PageWrap skin={skin}>
      <PageHero kicker="About us" h1="The night shift<br />of AMPM Group."
        lede="Gemini AMPM has protected the South East&rsquo;s buildings since <strong>1997</strong>. In 2024 we became an Employee Ownership Trust &mdash; and today we&rsquo;re the life-safety specialist within AMPM Group, working alongside our daytime sister company on the buildings that can&rsquo;t afford to get safety wrong." />
      <section className="sec tight">
        <div className="intro2 reveal">
          <div>
            <Kicker>Who we are</Kicker>
            <h2 className="dhead sm">Specialists in<br />the difficult buildings.</h2>
          </div>
          <div>
            <p className="body">We work with construction firms, facilities-management providers, property owners and businesses across the UK &mdash; <strong>keeping their buildings compliant, safe and operational 24/7.</strong></p>
            <p className="body">Hospitals, data centres, social housing, leisure centres, schools and commercial estates: the environments where evacuation strategy, clinical continuity and controlled access actually matter. We design, install, monitor and maintain the systems that hold them safe &mdash; and we&rsquo;re owned by the engineers who deliver them.</p>
          </div>
        </div>
      </section>
      <section className="sec tight">
        <div className="reveal" style={{ marginBottom: 24 }}>
          <Kicker>The group</Kicker>
          <h2 className="dhead sm">One group,<br />around the clock.</h2>
        </div>
        <div className="grp-grid reveal">
          {GROUP.map((g, i) => (
            <div className={"cell" + (g.current ? " current" : "")} key={i}>
              <span className="tag">{g.tag}</span>
              <h3 dangerouslySetInnerHTML={{ __html: g.t }} />
              <p dangerouslySetInnerHTML={{ __html: g.d }} />
            </div>
          ))}
        </div>
      </section>
      <AccredWall head="The accreditations<br />behind the work." />
      <section className="sec tight">
        <div className="statband reveal">
          {PROOF.map((c, i) => (
            <div className="cell" key={i}><div className="big">{c.big}</div><div className="lbl" dangerouslySetInnerHTML={{ __html: c.lbl }} /></div>
          ))}
        </div>
      </section>
      <ContactBand setRoute={setRoute} />
    </PageWrap>
  );
};

// ——— News ———
const NewsPage = ({ setRoute, skin }) => {
  useReveal("news");
  return (
    <PageWrap skin={skin}>
      <PageHero kicker="News &amp; insights" h1="From the<br />control room."
        lede="Standards change, regulations tighten, and buildings get more complex. We write about what that means in practice &mdash; <strong>fire, security, ventilation and compliance, explained by the people doing the work.</strong>" />
      <section className="sec tight">
        <div className="news-index reveal">
          {NEWS.map((n) => (
            <div className="ni-card" key={n.slug} onClick={() => setRoute("contact")}>
              <image-slot id={"g-newsidx-" + n.slug} shape="rect" class="img" style={{ width: "100%", height: "200px", display: "block" }}
                placeholder={n.cat + " — article image"}></image-slot>
              <div className="meta"><span className="cat">{n.cat}</span><span>{n.date}</span></div>
              <h4 dangerouslySetInnerHTML={{ __html: n.title }} />
              <p dangerouslySetInnerHTML={{ __html: n.teaser }} />
              <span className="url">geminiampm.co.uk/{n.slug}/</span>
            </div>
          ))}
        </div>
        <p className="case-note">Every existing article keeps its URL &mdash; the renewed design re-skins the post template without breaking a single ranking link.</p>
      </section>
      <ContactBand setRoute={setRoute} />
    </PageWrap>
  );
};

// ——— Case studies ———
const CaseStudiesPage = ({ setRoute, skin }) => {
  useReveal("casestudies");
  return (
    <PageWrap skin={skin}>
      <PageHero kicker="Casework" h1="Proof, not<br />promises."
        lede="A landmark City project, social-housing remediation delivered around residents, leisure-centre works completed without closing the doors &mdash; <strong>the kind of jobs that only go well when the same team owns the outcome.</strong>" />
      <section className="sec tight">
        <div className="caselist reveal">
          {CASES.map((c, i) => (
            <div className="case-card" key={i} onClick={() => setRoute("contact")}>
              <image-slot id={"g-case-" + i} shape="rect" class="ci" style={{ width: "100%", height: "210px", display: "block" }}
                placeholder={"CASE — " + c.tag}></image-slot>
              <span className="ctag" style={{ background: "var(--m-orange)", position: "absolute" }} dangerouslySetInnerHTML={{ __html: c.tag }} />
              <h4 dangerouslySetInnerHTML={{ __html: c.sector }} />
              <p className="cs" dangerouslySetInnerHTML={{ __html: c.scope }} />
            </div>
          ))}
        </div>
        <p className="case-note">A selection. Full case studies and client references available on request &mdash; including PQQ-ready evidence for tenders.</p>
      </section>
      <ContactBand setRoute={setRoute} />
    </PageWrap>
  );
};

// ——— Contact ———
const ContactPage = ({ setRoute, skin, phone }) => {
  useReveal("contact");
  const tel = "tel:" + String(phone).replace(/\s+/g, "");
  return (
    <PageWrap skin={skin}>
      <PageHero kicker="Contact" h1="Tell us about<br />the building."
        lede="A named engineer comes back within 24 hours &mdash; not a call centre. <strong>Tell us the building, the system and where you are with compliance,</strong> and we&rsquo;ll take it from there." />
      <section className="sec tight">
        <div className="contact-grid">
          <div className="reveal">
            <div className="routes2" style={{ gridTemplateColumns: "1fr" }}>
              <div className="route">
                <p className="rl">Call us</p>
                <div className="rv"><a href={tel}>{phone}</a></div>
                <p className="rs">Out of hours? The line is monitored &mdash; an answered call, every time.</p>
              </div>
              <div className="route stack">
                <p className="rl">Email</p>
                <div className="rv"><a href="mailto:info@geminiampm.co.uk">info@geminiampm.co.uk</a></div>
              </div>
              <div className="route stack">
                <p className="rl">Find us</p>
                <div className="rv" style={{ fontSize: "20px", lineHeight: 1.4 }} dangerouslySetInnerHTML={{ __html: CONTACT.address }} />
              </div>
              <div className="route stack">
                <p className="rl">Existing client</p>
                <div className="rv" style={{ fontSize: "20px" }}><a href={CONTACT.portal} target="_blank" rel="noopener noreferrer">Client portal ↗</a></div>
                <p className="rs">Log work, track jobs and view reports through the AMPM client portal.</p>
              </div>
            </div>
          </div>
          <form className="cform reveal d1" onSubmit={(e) => e.preventDefault()}>
            <input className="f" type="text" placeholder="Name" />
            <input className="f" type="text" placeholder="Company" />
            <input className="f" type="email" placeholder="Email" />
            <input className="f" type="tel" placeholder="Phone" />
            <select className="f" defaultValue="">
              <option value="" disabled>Service required…</option>
              {PILLARS.map((p) => <option key={p.id} dangerouslySetInnerHTML={{ __html: p.full }} />)}
            </select>
            <textarea className="f" rows="3" placeholder="The building, the system, where you are with compliance"></textarea>
            <button className="btn" type="submit">Request a consultation</button>
            <p className="sla">We respond within 24 hours · Mon–Fri</p>
          </form>
        </div>
      </section>
    </PageWrap>
  );
};

Object.assign(window, { ServicesPage, SectorsPage, WhyPage, AboutPage, NewsPage, CaseStudiesPage, ContactPage });
