// AMPM Building Services — Home (the launch day-arc, as a route).

const Home = ({ setRoute }) => {
  useReveal("home");
  const svc = (id) => (e) => { e.preventDefault(); setRoute(id || "services"); };
  return (
    <div className="sky">
      <div className="atmos" aria-hidden="true">
        <span className="sunglow"></span>
        <span className="cloud c1"></span><span className="cloud c2"></span><span className="cloud c3"></span>
        <span className="cloud c4"></span><span className="cloud c5"></span><span className="cloud c6"></span>
      </div>
      <div className="spine"></div>

      <header className="wrap hero" id="top" data-screen-label="Dawn — hero">
        <div className="stamp reveal"><span className="tick"></span>05:58<span className="shift">First light</span></div>
        <h1 className="reveal d1">AM <span className="arrow">&rarr;</span> PM.<br />Your building,<br />covered.</h1>
        <div className="sub-row">
          <div className="reveal d2">
            <p className="standfirst">
              MEPH, commercial, fabric and groundworks across London and the South East &mdash;
              <strong> one team, one programme, one name answerable</strong> from first light to last call-out.
            </p>
            <div className="cta-row">
              <a className="btn" href="#contact" onClick={(e) => { e.preventDefault(); setRoute("contact"); }}>Request a survey</a>
              <a className="btn line" href="#work" onClick={(e) => { e.preventDefault(); setRoute("work"); }}>See the work</a>
            </div>
          </div>
          <figure className="hero-fig reveal d3">
            <image-slot id="ls-hero" shape="rect" style={{ width: "100%", height: "420px", display: "block" }}
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=75"
              placeholder="DAWN — your site at first light"></image-slot>
            <figcaption className="fig-cap">Shot on site &middot; [project, location]</figcaption>
          </figure>
        </div>
      </header>

      <div className="wrap ribbon" data-screen-label="Discipline ribbon">
        <div className="bar">
          <a className="seg" style={{ background: "var(--m-green)" }} href="#meph" onClick={svc("meph")}>MEPH<small>01</small></a>
          <a className="seg" style={{ background: "var(--m-purple)" }} href="#commercial" onClick={svc("commercial")}>Commercial<small>02</small></a>
          <a className="seg" style={{ background: "var(--m-orange)" }} href="#fabric" onClick={svc("fabric")}>Fabric<small>03</small></a>
          <a className="seg" style={{ background: "var(--m-blue)" }} href="#groundworks" onClick={svc("groundworks")}>Groundworks<small>04</small></a>
        </div>
        <div className="legend"><span>AM — the work begins</span><span>One programme · one PM · one warranty</span><span>PM — still answering</span></div>
      </div>

      <section className="wrap services" id="services-teaser" data-screen-label="Morning — services">
        <div className="stamp reveal"><span className="tick"></span>09:00<span className="shift">The morning shift</span></div>
        <h2 className="sec-h reveal d1">Four service lines.<br />One name.</h2>
        <div>
          {LINES.map((l, i) => (
            <a key={l.id} className={"svc reveal" + (i ? " d" + Math.min(i, 3) : "")} href={"#" + l.id} onClick={svc(l.id)}>
              <span className="num">{l.no}</span>
              <span className="nm" dangerouslySetInnerHTML={{ __html: l.name + '<span class="swatch" style="background:' + l.colour + '"></span>' }} />
              <p dangerouslySetInnerHTML={{ __html: l.short }} />
              <span className="go">&rarr;</span>
            </a>
          ))}
        </div>

        <div className="proof reveal">
          <div className="cell"><div className="big">29 YRS</div><div className="lbl">group trading history — since 1997</div></div>
          <div className="cell"><div className="big">13+</div><div className="lbl">live accreditations across the group</div></div>
          <div className="cell"><div className="big">1 PM</div><div className="lbl">accountable for every programme</div></div>
          <div className="cell"><div className="big">24/7</div><div className="lbl">answered by a person, not a queue</div></div>
        </div>
      </section>

      <section className="wrap cases" id="work-teaser" data-screen-label="Midday — casework">
        <div className="stamp reveal"><span className="tick"></span>13:30<span className="shift">On the tools</span></div>
        <h2 className="sec-h reveal d1">The day's work.</h2>
        <div className="case-row">
          <a className="case reveal d1" href="#work" onClick={(e) => { e.preventDefault(); setRoute("work"); }}>
            <span className="tag">Commercial &middot; MEPH</span>
            <image-slot id="ls-case-1" shape="rect" style={{ width: "100%", height: "300px", display: "block" }}
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=75"
              placeholder="CASE — interior, mid-build"></image-slot>
            <h3>[Project name]</h3>
            <p>[One line — scope, programme, what held.]</p>
          </a>
          <a className="case reveal d2" href="#work" onClick={(e) => { e.preventDefault(); setRoute("work"); }}>
            <span className="tag">Fabric</span>
            <image-slot id="ls-case-2" shape="rect" style={{ width: "100%", height: "300px", display: "block" }}
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=75"
              placeholder="CASE — at height"></image-slot>
            <h3>[Project name]</h3>
            <p>[One line — scope, programme, what held.]</p>
          </a>
          <a className="case reveal d3" href="#work" onClick={(e) => { e.preventDefault(); setRoute("work"); }}>
            <span className="tag">Groundworks</span>
            <image-slot id="ls-case-3" shape="rect" style={{ width: "100%", height: "300px", display: "block" }}
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=75"
              placeholder="CASE — below the slab"></image-slot>
            <h3>[Project name]</h3>
            <p>[One line — scope, programme, what held.]</p>
          </a>
        </div>
      </section>

      <div className="nightfall" data-nav-dark>
        <div className="stars" aria-hidden="true">
          <span className="moonglow"></span>
          <span className="star" style={{ top: "480px", left: "12%" }}></span>
          <span className="star s2" style={{ top: "560px", left: "30%", animationDelay: "-1.2s" }}></span>
          <span className="star" style={{ top: "640px", left: "68%", animationDelay: "-2.6s" }}></span>
          <span className="star s2" style={{ top: "760px", left: "48%", animationDelay: "-0.6s" }}></span>
          <span className="star" style={{ top: "900px", left: "84%", animationDelay: "-3.4s" }}></span>
          <span className="star s2" style={{ top: "1020px", left: "22%", animationDelay: "-1.8s" }}></span>
          <span className="star" style={{ top: "1180px", left: "58%", animationDelay: "-4.1s" }}></span>
          <span className="star s2" style={{ top: "1320px", left: "8%", animationDelay: "-2.2s" }}></span>
        </div>
        <section className="wrap dusk" id="group-teaser" data-theme="dark" data-screen-label="Dusk — the group">
          <div className="stamp reveal"><span className="tick"></span>18:45<span className="shift">Handover</span></div>
          <h2 className="sec-h reveal d1">New name.<br />Old hands.</h2>
          <div className="cols">
            <div className="reveal d2">
              <p>
                AMPM Building Services is the newest company in AMPM Group &mdash; but the people,
                standards and accreditation behind it have looked after commercial buildings
                <strong> since 1997.</strong>
              </p>
              <p>
                Our sister company Gemini AMPM has protected the South East's most demanding
                buildings &mdash; fire and security &mdash; for over a quarter of a century. Same group.
                Same standard. Same name on the door.
              </p>
              <div className="cta-row">
                <a className="btn line" style={{ color: "var(--night-text)", borderColor: "var(--night-text)" }} href="#about" onClick={(e) => { e.preventDefault(); setRoute("about"); }}>About the group</a>
              </div>
            </div>
            <div className="group-card reveal d3">
              <span className="gw">AMPM Group</span>
              <div className="row"><span>Gemini AMPM — fire &amp; security</span><span className="yr">EST. 1997</span></div>
              <div className="row"><span>AMPM Building Services</span><span className="yr">EST. 2026</span></div>
              <div className="row"><span>13+ accreditations held group-wide</span><span className="yr">LIVE</span></div>
            </div>
          </div>
        </section>

        <section className="wrap night" id="contact-teaser" data-theme="dark" data-screen-label="Night — 24/7 and contact">
          <div className="stamp reveal"><span className="tick"></span>02:47<span className="shift">Still answering</span></div>
          <h2 className="sec-h reveal d1">Day or night,<br />we pick up.</h2>
          <p className="story reveal d2">
            A pipe bursts over a server room at 02:47. Whoever answers decides how bad the
            morning is. <strong>Our line is answered by an engineer, every hour of every day</strong> &mdash;
            because AM to PM is not a slogan, it's the name on the van.
          </p>
          <div className="phone-block reveal d3">
            <a className="phone-big" href="tel:03300430080" id="big-phone">0330 043 0080</a>
            <span className="phone-side">
              24 hours · 365 days<br />
              <strong>Answered by an engineer, not a queue.</strong><br />
              Or book a daytime survey.
            </span>
          </div>
          <div className="cta-row" style={{ marginTop: "44px" }}>
            <a className="btn" style={{ background: "var(--night-text)", color: "#0b0e1c", borderColor: "var(--night-text)" }} href="#contact" onClick={(e) => { e.preventDefault(); setRoute("contact"); }}>All contact routes &rarr;</a>
          </div>

          <footer className="footer">
            <span className="wm">AMPM</span>
            <span>© 2026 AMPM Building Services Ltd · An <a href="#about" onClick={(e) => { e.preventDefault(); setRoute("about"); }}>AMPM Group</a> company · CRN 17225766</span>
            <span className="sun"></span>
          </footer>
        </section>
      </div>
    </div>
  );
};

Object.assign(window, { Home });
