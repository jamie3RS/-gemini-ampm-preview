// Direction A — Engineered Precision
// Dark, technical, data-led. CTA posture: "Request a survey" + 24/7 line.

function DirectionA() {
  return (
    <div className="dirA" data-screen-label="Direction A — Engineered Precision">

      <div className="a-topbar">
        <span>A trading company of AMPM Group · Burgess Hill, West Sussex</span>
        <span className="phone"><span className="dot"></span>24/7 call-out · 0330 043 0080</span>
      </div>

      <nav className="a-nav">
        <span className="wordmark">AMPM <span>Building Services</span></span>
        <div className="links">
          <span className="on">Home</span><span>Services</span><span>Work</span><span>Sectors</span><span>About</span><span>Contact</span>
        </div>
        <span className="a-cta-btn">Request a survey</span>
      </nav>

      <div className="a-meridian">
        <div className="seg"><span className="bar" style={{ background: "var(--m-orange)" }}></span><span className="lbl">M&amp;E</span><span className="ix">01</span></div>
        <div className="seg"><span className="bar" style={{ background: "var(--m-green)" }}></span><span className="lbl">Fit-out</span><span className="ix">02</span></div>
        <div className="seg"><span className="bar" style={{ background: "var(--m-blue)" }}></span><span className="lbl">Roofing</span><span className="ix">03</span></div>
        <div className="seg"><span className="bar" style={{ background: "var(--m-purple)" }}></span><span className="lbl">Groundworks</span><span className="ix">04</span></div>
      </div>

      <header className="a-hero">
        <div>
          <div className="kicker">Commercial building services · South East</div>
          <h1>Buildings <em>done properly.</em></h1>
          <p className="sub">
            M&amp;E, fit-out, roofing and groundworks — delivered as <strong>one programme,
            under one project manager</strong>, backed by a group that has looked after
            buildings since 1997.
          </p>
          <div className="a-hero-ctas">
            <span className="a-btn-primary">Request a survey →</span>
            <span className="a-btn-ghost">Our work</span>
          </div>
          <div className="resp">Surveyed within 5 working days · Quoted within 10 — [confirm SLAs]</div>
        </div>
        <figure className="a-fig" style={{ margin: 0 }}>
          <span className="frame"><i></i><i></i><i></i><i></i></span>
          <image-slot id="a-hero" shape="rect" style={{ width: "100%", height: "520px", display: "block" }}
            placeholder="HERO — site photo, wide & quiet"></image-slot>
          <figcaption className="cap"><span>FIG. 01 — live site, plant install</span><span>RH15 · 2026</span></figcaption>
        </figure>
      </header>

      <div className="a-proof">
        <div className="cell"><div className="num">27<sup>yrs</sup></div><div className="lbl">Group trading history · since 1997</div></div>
        <div className="cell"><div className="num">13<sup>+</sup></div><div className="lbl">Live accreditations across the group</div></div>
        <div className="cell"><div className="num">4</div><div className="lbl">Disciplines · one programme, one PM</div></div>
        <div className="cell"><div className="num">24/7</div><div className="lbl">Call-out, answered by a person</div></div>
      </div>

      <div className="a-sechead">
        <div>
          <div className="lbl">What we do</div>
          <h2>Four trades. <em>One accountable team.</em></h2>
        </div>
        <span className="side">Scope ledger · 01–04</span>
      </div>

      <div className="a-services">
        <div className="a-svc">
          <span className="ix"><span className="chip" style={{ background: "var(--m-orange)" }}></span>01</span>
          <span className="nm">Mechanical &amp; Electrical</span>
          <span className="desc">Design, install and commissioning of building systems — power, lighting, HVAC, controls.
            <span className="scope">Scope · design → install → commission → maintain</span></span>
          <span className="go">→</span>
        </div>
        <div className="a-svc">
          <span className="ix"><span className="chip" style={{ background: "var(--m-green)" }}></span>02</span>
          <span className="nm">Fit-out</span>
          <span className="desc">Cat A and Cat B commercial fit-out, compliance-led — move-in dates that don't slip behind the regulator.
            <span className="scope">Scope · strip-out → Cat A → Cat B → handover</span></span>
          <span className="go">→</span>
        </div>
        <div className="a-svc">
          <span className="ix"><span className="chip" style={{ background: "var(--m-blue)" }}></span>03</span>
          <span className="nm">Roofing</span>
          <span className="desc">Flat, pitched and industrial roofing — survey, repair, replacement and planned maintenance.
            <span className="scope">Scope · survey → repair → replace → maintain</span></span>
          <span className="go">→</span>
        </div>
        <div className="a-svc">
          <span className="ix"><span className="chip" style={{ background: "var(--m-purple)" }}></span>04</span>
          <span className="nm">Groundworks</span>
          <span className="desc">Foundations, drainage, external works and hard landscaping — the package below the slab.
            <span className="scope">Scope · enabling → foundations → drainage → external</span></span>
          <span className="go">→</span>
        </div>
      </div>

      <div className="a-sechead">
        <div>
          <div className="lbl">Selected work</div>
          <h2>Programmes, <em>not projects.</em></h2>
        </div>
        <span className="side">[Placeholder cases — content to follow]</span>
      </div>

      <div className="a-work">
        <div className="a-case">
          <image-slot id="a-work-1" shape="rect" style={{ width: "100%", height: "240px", display: "block" }}
            placeholder="CASE 01 — exterior"></image-slot>
          <div className="body">
            <div className="cl">[Client name] · Commercial HQ</div>
            <h3>Cat A to Cat B fit-out on a 14-week programme</h3>
            <div className="spec">
              <div className="row"><span>Disciplines</span><span>M&amp;E · Fit-out</span></div>
              <div className="row"><span>Programme</span><span>14 weeks</span></div>
              <div className="row"><span>Value</span><span>[£ value]</span></div>
            </div>
          </div>
        </div>
        <div className="a-case">
          <image-slot id="a-work-2" shape="rect" style={{ width: "100%", height: "240px", display: "block" }}
            placeholder="CASE 02 — plant / roof"></image-slot>
          <div className="body">
            <div className="cl">[Client name] · Industrial estate</div>
            <h3>Roof replacement across a live logistics site</h3>
            <div className="spec">
              <div className="row"><span>Disciplines</span><span>Roofing · M&amp;E</span></div>
              <div className="row"><span>Programme</span><span>[weeks]</span></div>
              <div className="row"><span>Value</span><span>[£ value]</span></div>
            </div>
          </div>
        </div>
        <div className="a-case">
          <image-slot id="a-work-3" shape="rect" style={{ width: "100%", height: "240px", display: "block" }}
            placeholder="CASE 03 — groundworks"></image-slot>
          <div className="body">
            <div className="cl">[Client name] · Education</div>
            <h3>Enabling works and drainage for a school extension</h3>
            <div className="spec">
              <div className="row"><span>Disciplines</span><span>Groundworks</span></div>
              <div className="row"><span>Programme</span><span>[weeks]</span></div>
              <div className="row"><span>Value</span><span>[£ value]</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="a-sechead">
        <div>
          <div className="lbl">How we work</div>
          <h2>One programme. <em>One throat to choke.</em></h2>
        </div>
        <span className="side">No interface risk</span>
      </div>

      <div className="a-method">
        <div className="a-step">
          <div className="n">STEP 01</div>
          <h3>Survey &amp; scope</h3>
          <p>A qualified surveyor walks the building with you. You get a written scope with costs held open for 30 days — no obligation.</p>
        </div>
        <div className="a-step">
          <div className="n">STEP 02</div>
          <h3>One PM, one programme</h3>
          <p>Every trade on your job reports to one named project manager. One programme, one weekly report, one point of accountability.</p>
        </div>
        <div className="a-step">
          <div className="n">STEP 03</div>
          <h3>Handover &amp; aftercare</h3>
          <p>O&amp;M documentation on the day of practical completion, not six weeks later. Then planned maintenance if you want us to stay.</p>
        </div>
      </div>

      <div className="a-sechead">
        <div>
          <div className="lbl">Group accreditation</div>
          <h2>Checked early. <em>Passes every time.</em></h2>
        </div>
        <span className="side">Held across AMPM Group companies</span>
      </div>

      <div className="a-accr">
        <div className="cell"><strong>NSI Gold</strong>security systems</div>
        <div className="cell"><strong>BAFE</strong>fire safety</div>
        <div className="cell"><strong>FIRAS</strong>passive fire</div>
        <div className="cell"><strong>CHAS Elite</strong>h&amp;s assessed</div>
        <div className="cell"><strong>Constructionline</strong>gold member</div>
        <div className="cell"><strong>SafeContractor</strong>approved</div>
        <div className="cell"><strong>BESA</strong>building eng.</div>
        <div className="cell"><strong>FIA</strong>fire industry</div>
        <div className="cell"><strong>Cyber Essentials</strong>certified</div>
        <div className="cell"><strong>Avetta</strong>SSIP</div>
        <div className="cell"><strong>BSC</strong>safety council</div>
        <div className="cell"><strong>[+ more]</strong>to confirm</div>
      </div>

      <div className="a-ctapanel">
        <div className="left">
          <h2>Tell us what <em>you're building.</em></h2>
          <p>Send the address and a line on the problem. A surveyor — not a sales team — comes back to you within one working day.</p>
          <div className="a-hero-ctas">
            <span className="a-btn-ghost">Download capability statement</span>
          </div>
        </div>
        <div className="right">
          <div className="a-field"><div className="flbl">Your name</div><div className="fval">Jane Smith</div></div>
          <div className="a-field"><div className="flbl">Building / site address</div><div className="fval">Unit 4, …</div></div>
          <div className="a-field"><div className="flbl">What needs doing</div><div className="fval">Roof survey, then a plan…</div></div>
          <span className="a-btn-primary">Request a survey</span>
          <div className="or">or call <strong>0330 043 0080</strong> · 24/7</div>
        </div>
      </div>

      <footer className="a-footer">
        <div className="meridian"><span className="c1"></span><span className="c2"></span><span className="c3"></span><span className="c4"></span></div>
        <div className="cols">
          <div>
            <div className="wm">AMPM Building Services</div>
            <div className="blurb">A trading company of AMPM Group. Sister company to Gemini AMPM, est. 1997.</div>
          </div>
          <div>
            <h5>Services</h5>
            <ul><li>Mechanical &amp; Electrical</li><li>Fit-out</li><li>Roofing</li><li>Groundworks</li></ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul><li>About</li><li>Our work</li><li>Sectors</li><li>Contact</li></ul>
          </div>
          <div>
            <h5>Group</h5>
            <ul><li>AMPM Group ↗</li><li>Gemini AMPM ↗</li><li>Accreditations</li></ul>
          </div>
        </div>
        <div className="legal">
          <span>© 2026 AMPM Building Services Ltd · CRN 17225766</span>
          <span>Registered in England &amp; Wales</span>
        </div>
      </footer>
    </div>
  );
}

Object.assign(window, { DirectionA });
