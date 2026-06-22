// Gemini AMPM — homepage mockup. The inverted arc: PM → AM, one night on watch.

function GeminiHome() {
  return (
    <div className="gmx home" data-screen-label="Gemini AMPM — homepage (PM→AM)">
      <div className="g-stars" aria-hidden="true">
        <span className="g-moonglow" style={{ top: "380px", right: "5%" }}></span>
        <span className="g-star" style={{ top: "220px", left: "14%" }}></span>
        <span className="g-star s2" style={{ top: "340px", left: "38%" }}></span>
        <span className="g-star" style={{ top: "480px", left: "72%" }}></span>
        <span className="g-star s2" style={{ top: "620px", left: "8%" }}></span>
        <span className="g-star" style={{ top: "780px", left: "55%" }}></span>
        <span className="g-star s2" style={{ top: "960px", left: "85%" }}></span>
        <span className="g-star" style={{ top: "1140px", left: "24%" }}></span>
        <span className="g-star s2" style={{ top: "1320px", left: "64%" }}></span>
        <span className="g-star" style={{ top: "1520px", left: "12%" }}></span>
        <span className="g-star s2" style={{ top: "1700px", left: "78%" }}></span>
        <span className="g-star" style={{ top: "1900px", left: "42%" }}></span>
        <span className="g-star s2" style={{ top: "2100px", left: "90%" }}></span>
        <span className="g-star" style={{ top: "2320px", left: "18%" }}></span>
        <span className="g-star s2" style={{ top: "2560px", left: "58%" }}></span>
        <span className="g-star" style={{ top: "2800px", left: "30%" }}></span>
        <span className="g-star s2" style={{ top: "3050px", left: "74%" }}></span>
        <span className="g-star" style={{ top: "3300px", left: "10%" }}></span>
        <span className="g-star s2" style={{ top: "3550px", left: "48%" }}></span>
      </div>
      <div className="g-spine"></div>

      <nav className="g-nav">
        <span className="moonmark"></span>
        <span className="wm">GEMINI <small>AMPM</small></span>
        <span className="est">Fire &amp; Security · est. 1997</span>
        <div className="links">
          <span>Services</span><span>Sectors</span><span>Casework</span><span>The Group</span><span>Contact</span>
        </div>
        <span className="phone">01444 000 000</span>
      </nav>

      <header className="g-wrap g-hero">
        <div className="g-stamp"><span className="tick"></span>21:14<span className="shift">The building empties</span></div>
        <h1>PM → AM.<br />We keep<br />watch.</h1>
        <div className="sub-row">
          <div>
            <p className="standfirst">
              Fire and security for the South East's demanding buildings —
              <strong> designed, installed, monitored and maintained since 1997.</strong> When
              the last person leaves, we're still on.
            </p>
            <div className="g-cta-row">
              <span className="g-btn">Book a security survey</span>
              <span className="g-btn line">Our casework</span>
            </div>
          </div>
          <figure className="g-fig" style={{ margin: 0 }}>
            <image-slot id="gm-hero" shape="rect" style={{ width: "100%", height: "420px", display: "block" }}
              src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=75"
              placeholder="NIGHT — city/building after dark"></image-slot>
            <figcaption className="g-cap">21:14 — the city goes quiet · [project, location]</figcaption>
          </figure>
        </div>
      </header>

      <div className="g-ribbon">
        <div className="bar">
          <div className="seg" style={{ background: "var(--m-orange, #E8742C)" }}>Fire detection<small>01</small></div>
          <div className="seg" style={{ background: "var(--m-green, #3D8E2E)" }}>Intruder &amp; access<small>02</small></div>
          <div className="seg" style={{ background: "var(--m-blue, #2E5FAB)" }}>CCTV &amp; monitoring<small>03</small></div>
          <div className="seg" style={{ background: "var(--m-purple, #7A2E8F)" }}>Passive fire<small>04</small></div>
        </div>
        <div className="legend"><span>PM — the watch begins</span><span>NSI Gold · BAFE · monitored 24/7</span><span>AM — handed back</span></div>
      </div>

      <section className="g-wrap g-services">
        <div className="g-stamp"><span className="tick"></span>23:00<span className="shift">Systems live</span></div>
        <h2 className="g-h2">What's on<br />while you're off.</h2>
        <div>
          <div className="g-svc">
            <span className="num">01</span>
            <span className="nm">Fire detection &amp; alarms<span className="swatch" style={{ background: "var(--m-orange, #E8742C)" }}></span></span>
            <p>Design, installation, commissioning and maintenance to BS 5839 — BAFE registered.</p>
            <span className="go">→</span>
          </div>
          <div className="g-svc">
            <span className="num">02</span>
            <span className="nm">Intruder &amp; access<span className="swatch" style={{ background: "var(--m-green, #3D8E2E)" }}></span></span>
            <p>Intruder alarms, access control and door entry — NSI Gold, police-response compliant.</p>
            <span className="go">→</span>
          </div>
          <div className="g-svc">
            <span className="num">03</span>
            <span className="nm">CCTV &amp; monitoring<span className="swatch" style={{ background: "var(--m-blue, #2E5FAB)" }}></span></span>
            <p>HD surveillance with remote monitoring — an answered alarm, not just a recording.</p>
            <span className="go">→</span>
          </div>
          <div className="g-svc">
            <span className="num">04</span>
            <span className="nm">Passive fire<span className="swatch" style={{ background: "var(--m-purple, #7A2E8F)" }}></span></span>
            <p>Fire stopping, compartmentation and door surveys — FIRAS certificated, audit-ready paperwork.</p>
            <span className="go">→</span>
          </div>
        </div>

        <div className="g-proof">
          <div className="cell"><div className="big">SINCE '97</div><div className="lbl">protecting the South East's buildings</div></div>
          <div className="cell"><div className="big">NSI GOLD</div><div className="lbl">the highest security accreditation held</div></div>
          <div className="cell"><div className="big">BAFE</div><div className="lbl">registered for fire detection &amp; alarms</div></div>
          <div className="cell"><div className="big">24/7</div><div className="lbl">monitored, with engineer response</div></div>
        </div>
      </section>

      <section className="g-wrap g-watch">
        <div className="g-stamp"><span className="tick"></span>02:47<span className="shift">The watch</span></div>
        <h2 className="g-h2">While you<br />were out.</h2>
        <div className="cols">
          <div className="story">
            <p>
              Most security companies sell you boxes on walls. <strong>We sell you the night's
              sleep</strong> — systems that are watched, answered and attended, not just installed.
            </p>
            <p>
              Every event in the log below is a real kind of night for our clients. The
              difference is who's awake when it happens.
            </p>
          </div>
          <div className="g-log">
            <div className="hd">Night log — [site name]</div>
            <div className="row"><span className="t">23:41</span><span>Perimeter check — all zones sealed. <strong>Armed.</strong></span></div>
            <div className="row"><span className="t">01:12</span><span>Zone 4 motion — fox on the loading bay. <strong>Verified, stood down.</strong></span></div>
            <div className="row"><span className="t">02:47</span><span>Smoke head 2F-11 — pre-alarm. <strong>Engineer dispatched, 18 min.</strong></span></div>
            <div className="row"><span className="t">06:02</span><span>Systems disarmed for first shift. <strong>Handed back.</strong></span></div>
          </div>
        </div>
      </section>

      <section className="g-wrap g-clients">
        <div className="g-stamp"><span className="tick"></span>04:30<span className="shift">Trusted by</span></div>
        <h2 className="g-h2">The company<br />we keep.</h2>
        <div className="g-client-row">
          <div className="g-client"><span className="nm">Mace Interiors</span><span className="what">Fire &amp; security packages on commercial fit-outs — incl. Peterborough Court, EC4</span></div>
          <div className="g-client"><span className="nm">CBRE</span><span className="what">Campus-wide systems at Daniel House — managed estate work</span></div>
          <div className="g-client"><span className="nm">FirstPort</span><span className="what">Residential portfolio — compliance-led fire systems</span></div>
          <div className="g-client"><span className="nm">[Client]</span><span className="what">[One line — what we protect for them]</span></div>
        </div>
      </section>

      <div className="g-daybreak">
      <section className="g-wrap g-dawn">
        <div className="g-stamp"><span className="tick"></span>06:12<span className="shift">First light</span></div>
        <h2 className="g-h2">Handed back,<br />every morning.</h2>
        <p className="lead">
          The building opens, the systems disarm, and the night's log is in your inbox
          before your coffee. <strong>That's the product: an uneventful morning.</strong>
        </p>
        <div className="g-cta-row">
          <span className="g-btn">Book a security survey</span>
          <span className="g-btn line">Download capability statement</span>
        </div>
        <div className="g-sister">
          <span className="txt">
            <strong>Daytime works? That's our sister company.</strong>
            AMPM Building Services — M&amp;E, fit-out, roofing, groundworks. Same group, same standard: AM → PM.
          </span>
          <span className="arrow">→</span>
        </div>
      </section>

      <footer className="g-foot">
        <span className="wm">GEMINI AMPM</span>
        <span>© 2026 · An AMPM Group company · est. 1997</span>
        <span className="moonmark" style={{ filter: "invert(1)" }}></span>
      </footer>
      </div>
    </div>
  );
}

Object.assign(window, { GeminiHome });
