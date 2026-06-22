// Direction C — Modern Heritage
// Warm paper, institutional, editorial. CTA posture: "Request a quote" + tender pack.

function DirectionC() {
  return (
    <div className="dirC" data-screen-label="Direction C — Modern Heritage">

      <div className="c-mast">
        <div className="row1">
          <span>An AMPM Group company</span>
          <span>South East · est. 2026</span>
        </div>
        <div className="wordmark">AMPM <span className="light">Building Services</span></div>
        <div className="est">Mechanical &amp; Electrical · Fit-out · Roofing · Groundworks</div>
        <div className="meridian"><span className="c1"></span><span className="c2"></span><span className="c3"></span><span className="c4"></span></div>
      </div>

      <div className="c-navrow">
        <span className="on">Home</span><span>Services</span><span>Casework</span><span>Sectors</span><span>The Group</span><span>Contact</span>
      </div>

      <header className="c-hero">
        <div>
          <h1>The standard, <em>kept.</em></h1>
          <p className="stand">
            Four building disciplines, delivered as one accountable programme.
            New company; <strong>27 years of group standards behind it.</strong> If your
            building matters — to your tenants, your auditors, your insurers — it
            should be looked after by people who treat it that way.
          </p>
          <div className="c-cta-row">
            <span className="c-btn">Request a quote</span>
            <span className="c-btn-line">Download tender pack</span>
          </div>
          <div className="note">PQQ-ready · accreditations, insurances &amp; policies in one PDF</div>
        </div>
        <div className="c-hero-side">
          <div className="lbl">The disciplines</div>
          <div className="c-ledger-item"><span className="chip" style={{ background: "var(--m-orange)" }}></span><span className="nm">Mechanical &amp; Electrical</span><span className="ix">01</span></div>
          <div className="c-ledger-item"><span className="chip" style={{ background: "var(--m-green)" }}></span><span className="nm">Fit-out</span><span className="ix">02</span></div>
          <div className="c-ledger-item"><span className="chip" style={{ background: "var(--m-blue)" }}></span><span className="nm">Roofing</span><span className="ix">03</span></div>
          <div className="c-ledger-item"><span className="chip" style={{ background: "var(--m-purple)" }}></span><span className="nm">Groundworks</span><span className="ix">04</span></div>
          <figure className="fig" style={{ margin: 0 }}>
            <image-slot id="c-hero" shape="rect" style={{ width: "100%", height: "240px", display: "block" }}
              placeholder="PHOTO — your site, your people"></image-slot>
            <figcaption className="cap">FIG. 01 — [site, location] · 2026</figcaption>
          </figure>
        </div>
      </header>

      <div className="c-prov">
        <div className="col">
          <div className="lbl">Provenance</div>
          <h3>New name. <em>Old hands.</em></h3>
          <p>AMPM Building Services is the newest company in AMPM Group. The standards, supervision and accreditation behind it date to 1997.</p>
        </div>
        <div className="col">
          <div className="lbl">The group</div>
          <h3>Sister to <em>Gemini AMPM.</em></h3>
          <p>Our sister company has protected the South East's demanding buildings — fire and security — for over a quarter of a century.</p>
        </div>
        <div className="col">
          <div className="lbl">Accountability</div>
          <h3>One programme. <em>One name.</em></h3>
          <p>Every trade on your job answers to one named project manager. One contract, one weekly report, one warranty.</p>
        </div>
      </div>

      <section className="c-svcs">
        <div className="c-sechead"><span className="no">SECTION 01</span><h2>The <em>disciplines.</em></h2></div>
        <div className="c-plates">
          <div className="c-plate">
            <div className="img-side">
              <span className="plate-no">PLATE 01</span>
              <image-slot id="c-svc-1" shape="rect" style={{ width: "100%", height: "100%", minHeight: "230px", display: "block" }}
                placeholder="M&E — plant room"></image-slot>
            </div>
            <div className="body">
              <span className="bar" style={{ background: "var(--m-orange)" }}></span>
              <h3>Mechanical &amp; Electrical</h3>
              <p>Power, lighting, HVAC and controls — designed, installed, commissioned and maintained by one team.</p>
              <div className="foot"><span>Design → maintain</span><span className="go">View →</span></div>
            </div>
          </div>
          <div className="c-plate">
            <div className="img-side">
              <span className="plate-no">PLATE 02</span>
              <image-slot id="c-svc-2" shape="rect" style={{ width: "100%", height: "100%", minHeight: "230px", display: "block" }}
                placeholder="Fit-out — interior"></image-slot>
            </div>
            <div className="body">
              <span className="bar" style={{ background: "var(--m-green)" }}></span>
              <h3>Fit-out</h3>
              <p>Cat A and Cat B commercial fit-out, compliance-led, to move-in dates that hold.</p>
              <div className="foot"><span>Strip-out → handover</span><span className="go">View →</span></div>
            </div>
          </div>
          <div className="c-plate">
            <div className="img-side">
              <span className="plate-no">PLATE 03</span>
              <image-slot id="c-svc-3" shape="rect" style={{ width: "100%", height: "100%", minHeight: "230px", display: "block" }}
                placeholder="Roofing — at height"></image-slot>
            </div>
            <div className="body">
              <span className="bar" style={{ background: "var(--m-blue)" }}></span>
              <h3>Roofing</h3>
              <p>Flat, pitched and industrial — survey, repair, replacement and planned maintenance.</p>
              <div className="foot"><span>Survey → maintain</span><span className="go">View →</span></div>
            </div>
          </div>
          <div className="c-plate">
            <div className="img-side">
              <span className="plate-no">PLATE 04</span>
              <image-slot id="c-svc-4" shape="rect" style={{ width: "100%", height: "100%", minHeight: "230px", display: "block" }}
                placeholder="Groundworks — below slab"></image-slot>
            </div>
            <div className="body">
              <span className="bar" style={{ background: "var(--m-purple)" }}></span>
              <h3>Groundworks</h3>
              <p>Foundations, drainage, external works and hard landscaping — done once, done right.</p>
              <div className="foot"><span>Enabling → external</span><span className="go">View →</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="c-cases">
        <div className="c-sechead"><span className="no">SECTION 02</span><h2>The <em>casework.</em></h2></div>
        <div className="c-casetable">
          <div className="c-caserow head">
            <span>Ref</span><span>Programme</span><span>Client</span><span>Disciplines</span><span style={{ textAlign: "right" }}>Year</span>
          </div>
          <div className="c-caserow">
            <span className="ref">ABS-0001</span>
            <span className="prj">[Project name — first flagship]</span>
            <span className="cli">[Client / managing agent]</span>
            <span className="disc"><i style={{ background: "var(--m-orange)" }}></i><i style={{ background: "var(--m-green)" }}></i></span>
            <span className="yr">2026</span>
          </div>
          <div className="c-caserow">
            <span className="ref">ABS-0002</span>
            <span className="prj">[Project name]</span>
            <span className="cli">[Client]</span>
            <span className="disc"><i style={{ background: "var(--m-blue)" }}></i></span>
            <span className="yr">2026</span>
          </div>
          <div className="c-caserow">
            <span className="ref">GEM-1997→</span>
            <span className="prj">Group casework — fire &amp; security, est. 1997</span>
            <span className="cli">Mace Interiors · CBRE · FirstPort · [more]</span>
            <span className="disc"><i style={{ background: "var(--ink)" }}></i></span>
            <span className="yr">27 yrs</span>
          </div>
        </div>
        <p className="more-note">The register fills as the company does — honestly, dated, no padding. Group casework stands behind it from day one.</p>
      </section>

      <div className="c-letter">
        <div>
          <div className="lbl">From the board</div>
          <div className="who">
            <div className="nm">[Director name]</div>
            <div className="role">Managing Director</div>
          </div>
        </div>
        <div>
          <blockquote>
            “We started this company because clients kept asking the same question:
            <em> ‘can't you just look after the whole building?’</em> Now the answer is yes.”
          </blockquote>
          <div className="sig">— [signature]</div>
        </div>
      </div>

      <section className="c-accr">
        <div className="c-sechead"><span className="no">SECTION 03</span><h2>The <em>register.</em></h2></div>
        <div className="c-accr-list">
          <div className="c-accr-item"><span className="tick">✓</span><span className="nm">NSI Gold</span><span className="of">Group</span></div>
          <div className="c-accr-item"><span className="tick">✓</span><span className="nm">BAFE</span><span className="of">Group</span></div>
          <div className="c-accr-item"><span className="tick">✓</span><span className="nm">FIRAS</span><span className="of">Group</span></div>
          <div className="c-accr-item"><span className="tick">✓</span><span className="nm">CHAS Elite</span><span className="of">Group</span></div>
          <div className="c-accr-item"><span className="tick">✓</span><span className="nm">Constructionline Gold</span><span className="of">Group</span></div>
          <div className="c-accr-item"><span className="tick">✓</span><span className="nm">SafeContractor</span><span className="of">Group</span></div>
          <div className="c-accr-item"><span className="tick">✓</span><span className="nm">BESA</span><span className="of">Group</span></div>
          <div className="c-accr-item"><span className="tick">✓</span><span className="nm">Cyber Essentials</span><span className="of">Group</span></div>
          <div className="c-accr-item"><span className="tick">✓</span><span className="nm">[+ to confirm]</span><span className="of">ABS</span></div>
        </div>
      </section>

      <section className="c-cta">
        <div className="card dark">
          <div className="lbl">For a live requirement</div>
          <h3>Request <em>a quote.</em></h3>
          <p>Send the address and the scope. A surveyor comes back within one working day; a written quotation inside ten.</p>
          <div className="act"><span className="c-btn">Request a quote</span></div>
        </div>
        <div className="card">
          <div className="lbl">For procurement &amp; frameworks</div>
          <h3>The <em>tender pack.</em></h3>
          <p>Everything your PQQ asks for, in one place — so we're the easiest contractor on your list to approve.</p>
          <div className="act"><span className="c-btn-line">Download the pack</span></div>
          <div className="files">Accreditations.pdf · Insurances.pdf · H&amp;S-Policy.pdf · Org-chart.pdf</div>
        </div>
      </section>

      <footer className="c-footer">
        <span className="wm">AMPM Building Services</span>
        <div className="meridian"><span className="c1"></span><span className="c2"></span><span className="c3"></span><span className="c4"></span></div>
        <span className="legal">© 2026 · An AMPM Group company · CRN 17225766</span>
      </footer>
    </div>
  );
}

Object.assign(window, { DirectionC });
