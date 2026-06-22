// Direction B — Quiet Premium
// Light, photographic, gallery restraint. CTA posture: "Start a conversation" + director callback.

function DirectionB() {
  return (
    <div className="dirB" data-screen-label="Direction B — Quiet Premium">

      <nav className="b-nav">
        <span className="wordmark">AMPM Building Services<span className="grp">An AMPM Group company</span></span>
        <div className="links">
          <span className="on">Home</span><span>Services</span><span>Work</span><span>About</span><span>Contact</span>
        </div>
        <span className="call">01444 000 000</span>
      </nav>

      <header className="b-hero">
        <h1>The building, <em>looked after.</em></h1>
        <div className="meridian meridian-line"><span className="c1"></span><span className="c2"></span><span className="c3"></span><span className="c4"></span></div>
        <div className="b-hero-split">
          <div className="standfirst">
            Mechanical &amp; electrical, fit-out, roofing and groundworks for commercial
            buildings across the South East — <strong>delivered by one team, to one standard,
            under one name.</strong>
            <div className="cta-row">
              <span className="b-btn">Start a conversation</span>
              <span className="b-link">See our work</span>
            </div>
          </div>
          <figure className="b-hero-fig" style={{ margin: 0 }}>
            <image-slot id="b-hero" shape="rect" style={{ width: "100%", height: "560px", display: "block" }}
              placeholder="HERO — completed interior or rooftop, calm composition"></image-slot>
            <figcaption className="cap">[Project name] — completed 2026 · photographed for AMPM</figcaption>
          </figure>
        </div>
      </header>

      <div className="b-clients">
        <span className="lbl">Group clients include</span>
        <div className="names">
          <span>Mace Interiors</span><span>CBRE</span><span>FirstPort</span><span>[Client]</span><span>[Client]</span><span>[Client]</span>
        </div>
      </div>

      <section className="b-intro">
        <div>
          <div className="lbl">Why AMPM</div>
        </div>
        <div className="body">
          <h2 style={{ marginBottom: "28px" }}>Most building work fails between trades. <em>Ours can't.</em></h2>
          <p>
            When the roofer, the electrician and the groundworker answer to three different
            companies, every interface is a gap — in programme, in warranty, in accountability.
          </p>
          <p>
            We deliver all four disciplines as <strong>one programme under one project manager</strong>,
            backed by a group that has been trusted with buildings since 1997. One contract.
            One weekly report. One name on the warranty.
          </p>
        </div>
      </section>

      <section className="b-services">
        <div className="b-svc-grid">
          <div className="b-svc">
            <span className="tick" style={{ background: "var(--m-orange)" }}></span>
            <div>
              <h3>Mechanical &amp; Electrical</h3>
              <p>Power, lighting, HVAC and controls — designed, installed and commissioned by one team.</p>
              <span className="more">Explore M&amp;E →</span>
            </div>
          </div>
          <div className="b-svc">
            <span className="tick" style={{ background: "var(--m-green)" }}></span>
            <div>
              <h3>Fit-out</h3>
              <p>Cat A and Cat B commercial fit-out with compliance built in from day one.</p>
              <span className="more">Explore fit-out →</span>
            </div>
          </div>
          <div className="b-svc">
            <span className="tick" style={{ background: "var(--m-blue)" }}></span>
            <div>
              <h3>Roofing</h3>
              <p>Survey, repair, replacement and planned maintenance — flat, pitched and industrial.</p>
              <span className="more">Explore roofing →</span>
            </div>
          </div>
          <div className="b-svc">
            <span className="tick" style={{ background: "var(--m-purple)" }}></span>
            <div>
              <h3>Groundworks</h3>
              <p>Foundations, drainage and external works — the package below the slab, done once.</p>
              <span className="more">Explore groundworks →</span>
            </div>
          </div>
        </div>
      </section>

      <section className="b-feature">
        <image-slot id="b-feature" shape="rect" style={{ width: "100%", height: "640px", display: "block" }}
          placeholder="FEATURED PROJECT — full-bleed, your best photograph"></image-slot>
        <div className="panel">
          <div className="cl">Featured · [Client name]</div>
          <h3>A live workplace, re-roofed and re-wired without a single lost day</h3>
          <p>[Two lines on the programme — what was at stake, how the disciplines interlocked, what the client said afterwards.]</p>
          <span className="more" style={{ fontFamily: "var(--mono)", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase" }}>Read the case study →</span>
        </div>
      </section>

      <section className="b-workpair">
        <div className="b-wp">
          <image-slot id="b-work-1" shape="rect" style={{ width: "100%", height: "380px", display: "block" }}
            placeholder="PROJECT — vertical or 4:3"></image-slot>
          <div className="cap-row">
            <h4>[Project name]</h4>
            <span className="meta">Fit-out · M&amp;E · [year]</span>
          </div>
          <p>[One line — the scope and the result.]</p>
        </div>
        <div className="b-wp">
          <image-slot id="b-work-2" shape="rect" style={{ width: "100%", height: "380px", display: "block" }}
            placeholder="PROJECT — vertical or 4:3"></image-slot>
          <div className="cap-row">
            <h4>[Project name]</h4>
            <span className="meta">Roofing · Groundworks · [year]</span>
          </div>
          <p>[One line — the scope and the result.]</p>
        </div>
      </section>

      <div className="b-assure">
        <div className="cell"><div className="num">27<sup>yrs</sup></div><div className="lbl">of group trading history, since 1997</div></div>
        <div className="cell"><div className="num">13<sup>+</sup></div><div className="lbl">live accreditations held across the group</div></div>
        <div className="cell"><div className="num">1</div><div className="lbl">project manager accountable for every programme</div></div>
        <div className="cell"><div className="num">100%</div><div className="lbl">of call-outs answered by a person, day or night</div></div>
      </div>

      <section className="b-prov">
        <div className="mark">
          <span className="gw">AMPM Group</span>
          <div className="meridian"><span className="c1"></span><span className="c2"></span><span className="c3"></span><span className="c4"></span></div>
          <div className="kids">
            AMPM Building Services · est. 2026<br />
            Gemini AMPM · fire &amp; security · est. 1997<br />
            [Future acquisitions]
          </div>
        </div>
        <div>
          <h2>New name. <em>Old hands.</em></h2>
          <p>
            AMPM Building Services is the newest company in AMPM Group — but the people,
            the standards and the accreditation behind it have been looking after commercial
            buildings for more than a quarter of a century.
          </p>
          <p>
            Our sister company Gemini AMPM has protected some of the South East's most
            demanding buildings since 1997. Same group. Same standard. Same name on the door.
          </p>
        </div>
      </section>

      <section className="b-cta">
        <div className="inner">
          <h2>Tell us about <em>your building.</em></h2>
          <div className="right">
            <p>
              No forms, no call centre. <strong>A director phones you back within one
              working day</strong> — with questions worth asking, not a sales pitch.
            </p>
            <span className="b-btn-light">Start a conversation</span>
            <div className="alt">Prefer email? <strong>hello@ampmbuildingservices.co.uk</strong></div>
          </div>
        </div>
      </section>

      <footer className="b-footer">
        <span className="wm">AMPM Building Services</span>
        <div className="meridian"><span className="c1"></span><span className="c2"></span><span className="c3"></span><span className="c4"></span></div>
        <span className="legal">© 2026 · An AMPM Group company · CRN 17225766</span>
      </footer>
    </div>
  );
}

Object.assign(window, { DirectionB });
