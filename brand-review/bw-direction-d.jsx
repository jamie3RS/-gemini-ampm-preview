// Direction D — AM→PM. The day-arc concept.
// The page is a day in the life of your building: dawn → daylight → dusk → night.

function DirectionD() {
  return (
    <div className="dirD" data-screen-label="Direction D — AM→PM day arc" style={{ position: "relative" }}>
      <div className="d-spine"></div>

      <nav className="d-nav">
        <span className="d-sunmark"><span className="disc"></span></span>
        <span className="wm">AMPM <small>BUILDING SERVICES</small></span>
        <div className="links">
          <span>Services</span><span>Work</span><span>Sectors</span><span>The Group</span><span>Contact</span>
        </div>
        <span className="phone">0330 043 0080</span>
      </nav>

      <header className="d-hero">
        <div className="d-stamp"><span className="tick"></span>05:58<span className="shift">First light</span></div>
        <h1>AM <span className="arrow">→</span> PM.<br />Your building,<br />covered.</h1>
        <div className="sub-row">
          <div>
            <p className="standfirst">
              M&amp;E, fit-out, roofing and groundworks — <strong>one team, one programme,
              one name answerable</strong> from first light to last call-out.
            </p>
            <div className="d-cta-row">
              <span className="d-btn">Request a survey</span>
              <span className="d-btn line">See the work</span>
            </div>
          </div>
          <figure className="d-hero-fig" style={{ margin: 0 }}>
            <image-slot id="d-hero" shape="rect" style={{ width: "100%", height: "420px", display: "block" }}
              placeholder="DAWN — your site at first light"></image-slot>
            <figcaption className="cap">Shot on site · [project, location]</figcaption>
          </figure>
        </div>
      </header>

      <div className="d-ribbon">
        <div className="bar">
          <div className="seg" style={{ background: "var(--m-orange)" }}>M&amp;E<small>01</small></div>
          <div className="seg" style={{ background: "var(--m-green)" }}>Fit-out<small>02</small></div>
          <div className="seg" style={{ background: "var(--m-blue)" }}>Roofing<small>03</small></div>
          <div className="seg" style={{ background: "var(--m-purple)" }}>Groundworks<small>04</small></div>
        </div>
        <div className="legend"><span>AM — the work begins</span><span>One programme · one PM</span><span>PM — still answering</span></div>
      </div>

      <section className="d-services">
        <div className="d-stamp"><span className="tick"></span>09:00<span className="shift">The morning shift</span></div>
        <h2>Four trades.<br />One name.</h2>
        <div className="d-svc-stack">
          <div className="d-svc">
            <span className="num">01</span>
            <span className="nm">Mechanical &amp; Electrical<span className="swatch" style={{ background: "var(--m-orange)" }}></span></span>
            <p>Power, lighting, HVAC and controls — designed, installed, commissioned and maintained by one team.</p>
            <span className="go">→</span>
          </div>
          <div className="d-svc">
            <span className="num">02</span>
            <span className="nm">Fit-out<span className="swatch" style={{ background: "var(--m-green)" }}></span></span>
            <p>Cat A and Cat B commercial fit-out, compliance-led, to move-in dates that hold.</p>
            <span className="go">→</span>
          </div>
          <div className="d-svc">
            <span className="num">03</span>
            <span className="nm">Roofing<span className="swatch" style={{ background: "var(--m-blue)" }}></span></span>
            <p>Flat, pitched and industrial — survey, repair, replacement, planned maintenance.</p>
            <span className="go">→</span>
          </div>
          <div className="d-svc">
            <span className="num">04</span>
            <span className="nm">Groundworks<span className="swatch" style={{ background: "var(--m-purple)" }}></span></span>
            <p>Foundations, drainage and external works — the package below the slab, done once.</p>
            <span className="go">→</span>
          </div>
        </div>

        <div className="d-proof">
          <div className="cell"><div className="big">27 YRS</div><div className="lbl">group trading history — since 1997</div></div>
          <div className="cell"><div className="big">13+</div><div className="lbl">live accreditations across the group</div></div>
          <div className="cell"><div className="big">1 PM</div><div className="lbl">accountable for every programme</div></div>
          <div className="cell"><div className="big">24/7</div><div className="lbl">answered by a person, not a queue</div></div>
        </div>
      </section>

      <section className="d-cases">
        <div className="d-stamp"><span className="tick"></span>13:30<span className="shift">On the tools</span></div>
        <h2>The day's work.</h2>
        <div className="d-case-row">
          <div className="d-case">
            <span className="tag">Fit-out · M&amp;E</span>
            <image-slot id="d-case-1" shape="rect" style={{ width: "100%", height: "300px", display: "block" }}
              placeholder="CASE — interior, mid-build"></image-slot>
            <h3>[Project name]</h3>
            <p>[One line — scope, programme, what held.]</p>
          </div>
          <div className="d-case">
            <span className="tag">Roofing</span>
            <image-slot id="d-case-2" shape="rect" style={{ width: "100%", height: "300px", display: "block" }}
              placeholder="CASE — at height"></image-slot>
            <h3>[Project name]</h3>
            <p>[One line — scope, programme, what held.]</p>
          </div>
          <div className="d-case">
            <span className="tag">Groundworks</span>
            <image-slot id="d-case-3" shape="rect" style={{ width: "100%", height: "300px", display: "block" }}
              placeholder="CASE — below the slab"></image-slot>
            <h3>[Project name]</h3>
            <p>[One line — scope, programme, what held.]</p>
          </div>
        </div>
      </section>

      <section className="d-dusk">
        <div className="d-stamp"><span className="tick"></span>18:45<span className="shift">Handover</span></div>
        <h2>New name.<br />Old hands.</h2>
        <div className="cols">
          <div>
            <p>
              AMPM Building Services is the newest company in AMPM Group — but the people,
              standards and accreditation behind it have looked after commercial buildings
              <strong> since 1997.</strong>
            </p>
            <p>
              Our sister company Gemini AMPM has protected the South East's most demanding
              buildings — fire and security — for over a quarter of a century. Same group.
              Same standard. Same name on the door.
            </p>
          </div>
          <div className="d-group-card">
            <span className="gw">AMPM Group</span>
            <div className="row"><span>Gemini AMPM — fire &amp; security</span><span className="yr">EST. 1997</span></div>
            <div className="row"><span>AMPM Building Services</span><span className="yr">EST. 2026</span></div>
            <div className="row"><span>13+ accreditations held group-wide</span><span className="yr">LIVE</span></div>
          </div>
        </div>
      </section>

      <section className="d-night">
        <div className="d-stamp"><span className="tick"></span>02:47<span className="shift">Still answering</span></div>
        <h2>Day or night,<br />we pick up.</h2>
        <p className="story">
          A pipe bursts over a server room at 02:47. Whoever answers decides how bad the
          morning is. <strong>Our line is answered by an engineer, every hour of every day</strong> —
          because AM to PM is not a slogan, it's the name on the van.
        </p>
        <div className="phone-block">
          <span className="phone-big">0330 043 0080</span>
          <span className="phone-side">
            24 hours · 365 days<br />
            <strong>Answered by an engineer, not a queue.</strong><br />
            Or book a daytime survey — surveyed in 5 days, quoted in 10.
          </span>
        </div>
        <footer className="d-footer">
          <span className="wm">AMPM</span>
          <span>An AMPM Group company · CRN 17225766</span>
          <span className="sun"></span>
        </footer>
      </section>
    </div>
  );
}

Object.assign(window, { DirectionD });
