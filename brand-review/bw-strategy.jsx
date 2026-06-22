// AMPM Brand & Web Review — Strategy artboard
// The competitive read, the brand architecture, the shared system.

function StrategyBoard() {
  return (
    <div className="strat">
      <div className="strat-mast">
        <span className="wm">AMPM Group</span>
        <span className="tag">Brand &amp; Web Review · June 2026</span>
      </div>

      <h1>The field is template-built. <em>That is the opening.</em></h1>
      <p className="deck">
        Reviewed: ampmgroup.co.uk (strong positioning, thin visual world), geminiampm.co.uk
        (strong content engine, generic template skin), and the building-services launch site in progress.
        The mid-market runs the same playbook — blue palettes, stock hard-hats, Elementor grids.
        Nobody at our scale looks like an institution. So we will.
      </p>

      <div className="strat-lbl">The competitive read</div>
      <div className="field-grid">
        <div className="field-col">
          <h3>What the field does</h3>
          <ul>
            <li><strong>Template skins</strong> — WordPress/Elementor, interchangeable across firms.</li>
            <li><strong>Stock photography</strong> — hard hats, handshakes, skylines nobody built.</li>
            <li><strong>SEO sprawl</strong> — forty service pages, no hierarchy, no story.</li>
            <li><strong>Buried proof</strong> — accreditations in a footer carousel.</li>
            <li><strong>One audience</strong> — every visitor gets the same generic pitch.</li>
          </ul>
        </div>
        <div className="field-col">
          <h3>What buyers actually weigh</h3>
          <ul>
            <li><strong>Will they fail us?</strong> — compliance posture, audit-readiness, named accountability.</li>
            <li><strong>Track record</strong> — recognisable clients, completed programmes, dates.</li>
            <li><strong>Accreditation</strong> — checked early, used to disqualify not to award.</li>
            <li><strong>One throat to choke</strong> — fewer interfaces, one PM, one programme.</li>
            <li><strong>Stability</strong> — who owns this firm and will they exist in five years.</li>
          </ul>
        </div>
        <div className="field-col win">
          <h3>The AMPM position</h3>
          <ul>
            <li><strong>Look like the institution</strong> — board-grade design language no competitor can imitate with a template.</li>
            <li><strong>Group provenance on every page</strong> — 27 years trading via Gemini, EOT-owned flagship, 13+ live accreditations.</li>
            <li><strong>The meridian as system</strong> — one mark that travels: vans, sites, decks, web.</li>
            <li><strong>Route-per-buyer</strong> — Tier-1s, FMs and owners each get their own door in.</li>
          </ul>
        </div>
      </div>

      <div className="strat-lbl">Brand architecture — one mark, three properties</div>
      <div className="arch">
        <div className="arch-parent">
          <span className="nm">AMPM Group</span>
          <span className="role">Parent · authority · investors, sellers, group story</span>
        </div>
        <div className="arch-link"><span></span><span></span></div>
        <div className="arch-kids">
          <div className="arch-kid" style={{ borderTop: "3px solid var(--m-green)" }}>
            <div className="nm">AMPM Building Services</div>
            <div className="role">New launch · must impress · M&amp;E, fit-out, roofing, groundworks</div>
          </div>
          <div className="arch-kid" style={{ borderTop: "3px solid var(--m-blue)" }}>
            <div className="nm">Gemini AMPM</div>
            <div className="role">Est. 1997 · fire &amp; security · keeps its logo, gains the group frame</div>
          </div>
        </div>
        <p className="arch-note">
          Gemini keeps the equity in its name and logo — the group look arrives around it (type, paper,
          meridian, layout grammar), so vans and signage stay valid and the change can be phased.
        </p>
      </div>

      <div className="strat-lbl">The shared system — what travels</div>
      <div className="sys-grid">
        <div className="sys-card">
          <h4>Type — one voice, three weights</h4>
          <div className="big-serif">Buildings <em>done properly.</em></div>
          <div className="stack-line">Source Serif 4 for headlines &amp; prose — institutional, not techy.</div>
          <div className="stack-line">Inter Tight for UI &amp; wayfinding. <code>JetBrains Mono</code> for data, refs, captions.</div>
        </div>
        <div className="sys-card">
          <h4>Meridian — the mark is the offer</h4>
          <div className="disc-row"><span className="chip" style={{ background: "var(--m-orange)" }}></span><span className="nm">Mechanical &amp; Electrical</span><span className="mono">01</span></div>
          <div className="disc-row"><span className="chip" style={{ background: "var(--m-green)" }}></span><span className="nm">Fit-out</span><span className="mono">02</span></div>
          <div className="disc-row"><span className="chip" style={{ background: "var(--m-blue)" }}></span><span className="nm">Roofing</span><span className="mono">03</span></div>
          <div className="disc-row"><span className="chip" style={{ background: "var(--m-purple)" }}></span><span className="nm">Groundworks</span><span className="mono">04</span></div>
        </div>
        <div className="sys-card">
          <h4>Photography rule</h4>
          <div className="stack-line" style={{ marginTop: 0 }}>
            Real sites, real plant, real people mid-task. No stock, no skylines.
            Shot wide and quiet, captioned like exhibits — <code>FIG. 01 — PLANT ROOM, RH15</code>.
          </div>
          <div className="stack-line">
            Until the shoot lands: art-directed placeholder frames. Drop today's photos straight onto them.
          </div>
        </div>
      </div>

      <div className="strat-lbl">Call-to-action — three postures under test</div>
      <div className="cta-grid">
        <div className="cta-card">
          <div className="dir">Direction A</div>
          <div className="move">"Request a survey" + 24/7 line</div>
          <p>Operational and immediate. Speaks to FMs and owners with a live problem. Phone number always visible.</p>
        </div>
        <div className="cta-card">
          <div className="dir">Direction B</div>
          <div className="move">"Start a conversation" + director callback</div>
          <p>Confidence move — no forms-first begging. A named director calls you back within one working day.</p>
        </div>
        <div className="cta-card">
          <div className="dir">Direction C</div>
          <div className="move">"Request a quote" + tender pack</div>
          <p>Procurement-shaped. One click downloads the PQQ-ready pack — accreditations, insurances, policies.</p>
        </div>
      </div>

      <div className="strat-foot">
        <span>AMPM Group · Brand &amp; Web Review</span>
        <span className="meridian"><span className="c1"></span><span className="c2"></span><span className="c3"></span><span className="c4"></span></span>
        <span>01 / Strategy on a page</span>
      </div>
    </div>
  );
}

Object.assign(window, { StrategyBoard });
