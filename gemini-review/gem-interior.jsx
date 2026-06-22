// Gemini AMPM — interior page mockup: Fire detection & alarms service page.

function GeminiInterior() {
  return (
    <div className="gmx inner" data-screen-label="Gemini AMPM — service page (Fire detection)">
      <div className="g-stars" aria-hidden="true">
        <span className="g-moonglow" style={{ top: "200px", right: "8%" }}></span>
        <span className="g-star" style={{ top: "180px", left: "22%" }}></span>
        <span className="g-star s2" style={{ top: "320px", left: "60%" }}></span>
        <span className="g-star" style={{ top: "520px", left: "10%" }}></span>
        <span className="g-star s2" style={{ top: "740px", left: "82%" }}></span>
        <span className="g-star" style={{ top: "980px", left: "36%" }}></span>
        <span className="g-star s2" style={{ top: "1240px", left: "70%" }}></span>
        <span className="g-star" style={{ top: "1500px", left: "16%" }}></span>
        <span className="g-star s2" style={{ top: "1780px", left: "52%" }}></span>
        <span className="g-star" style={{ top: "2050px", left: "86%" }}></span>
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

      <header className="g-wrap g-inner-hero">
        <div className="g-crumb">Services / 01</div>
        <div className="g-stamp"><span className="tick"></span>23:00<span className="shift">Systems live</span></div>
        <h1>Fire detection<br />&amp; alarms.</h1>
        <p className="standfirst">
          Design, installation, commissioning and planned maintenance to BS 5839 —
          BAFE registered, with monitored response. From a single panel replacement
          to a campus-wide addressable system.
        </p>
        <div className="g-cta-row">
          <span className="g-btn">Book a survey</span>
          <span className="g-btn line">Speak to an engineer</span>
        </div>
      </header>

      <section className="g-wrap g-scope">
        <h2 className="g-h2" style={{ fontSize: "64px" }}>The scope.</h2>
        <div className="g-scope-grid">
          <div className="g-scope-item">
            <span className="tk"></span>
            <div>
              <h3>Design &amp; specification</h3>
              <p>Category-appropriate system design to BS 5839 — L1 to L5, P1/P2 — with the fire strategy, not against it.</p>
            </div>
          </div>
          <div className="g-scope-item">
            <span className="tk"></span>
            <div>
              <h3>Installation</h3>
              <p>Addressable and conventional systems, installed around live occupancy where needed.</p>
            </div>
          </div>
          <div className="g-scope-item">
            <span className="tk"></span>
            <div>
              <h3>Commissioning &amp; certification</h3>
              <p>Full cause-and-effect testing, certificated handover, O&amp;M documentation on the day.</p>
            </div>
          </div>
          <div className="g-scope-item">
            <span className="tk"></span>
            <div>
              <h3>Maintenance &amp; monitoring</h3>
              <p>Planned preventative maintenance with 24/7 monitored response — an answered alarm, every time.</p>
            </div>
          </div>
        </div>

        <div className="g-accr-strip">
          <div className="g-accr-cell"><div className="a">BAFE</div><div className="b">SP203-1</div></div>
          <div className="g-accr-cell"><div className="a">NSI Gold</div><div className="b">security systems</div></div>
          <div className="g-accr-cell"><div className="a">FIRAS</div><div className="b">passive fire</div></div>
          <div className="g-accr-cell"><div className="a">CHAS</div><div className="b">elite</div></div>
          <div className="g-accr-cell"><div className="a">BS 5839</div><div className="b">compliant design</div></div>
          <div className="g-accr-cell"><div className="a">[+ more]</div><div className="b">to confirm</div></div>
        </div>

        <div className="g-inner-cta">
          <span className="t">Get the building<br />surveyed this week.</span>
          <div className="g-cta-row" style={{ marginTop: 0 }}>
            <span className="g-btn">Book a survey</span>
            <span className="g-btn line">01444 000 000</span>
          </div>
        </div>
      </section>

      <footer className="g-foot-dark">
        <span className="wm">GEMINI AMPM</span>
        <span>© 2026 · An AMPM Group company · est. 1997</span>
      </footer>
    </div>
  );
}

Object.assign(window, { GeminiInterior });
