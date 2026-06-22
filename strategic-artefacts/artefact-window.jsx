// Artefact 2 — Strategic Window Dashboard
// The 12-18 month opening as a board cockpit.

const Gauge = ({ pct, label, sub }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
      <span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)" }}>{label}</span>
      <span style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 500, letterSpacing: "-0.01em" }}>{pct}%</span>
    </div>
    <div style={{ height: 6, background: "var(--paper-2)", border: "1px solid var(--rule)", position: "relative" }}>
      <div style={{ width: `${pct}%`, height: "100%", background: "var(--ink)" }} />
    </div>
    {sub && <div style={{ fontSize: 11, color: "var(--ink-3)" }}>{sub}</div>}
  </div>
);

const StatusRow = ({ status, lead, item, owner, due }) => {
  const dotClass = { on: "dot-on", mid: "dot-mid", off: "dot-off", future: "dot-future" }[status];
  return (
    <tr>
      <td style={{ width: 120, fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase" }}>
        <span className={`dot ${dotClass}`}></span>{lead}
      </td>
      <td style={{ fontFamily: "var(--serif)", fontSize: 14 }}>{item}</td>
      <td style={{ fontSize: 12, color: "var(--ink-2)" }}>{owner}</td>
      <td style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-3)", textAlign: "right" }}>{due}</td>
    </tr>
  );
};

const WindowArtefact = ({ density = "full" }) => {
  const showDetail = density === "full";

  return (
    <div className="artboard">
      <div className="artboard-inner">
        <div className="doc-meta">
          <div className="left">
            <span className="marque">AMPM Group</span>
            <span>Exhibit 02 · Strategic Window</span>
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            <span className="pill">Board · EOT trustees</span>
            <span>WINDOW · MAY ’26 → Q4 ’26</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40, alignItems: "end" }}>
          <div>
            <div className="section-label" style={{ marginBottom: 14 }}>The opening</div>
            <h1 className="doc-title">A 12–18 month <em>commercial advantage</em>, before competitors notice.</h1>
          </div>
          <p className="doc-deck">
            EOT structure, an enterprise-grade operational stack, and a vacant brand position in our segment combine into a window we either convert — or commoditise — by Q4 2026.
          </p>
        </div>

        {/* Top row — the four pillars */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {[
            { k: "01", t: "EOT differentiator", n: "PPN 06/20", d: "Procurement weighting on social value. Most direct competitors cannot match. Top-three buyer reason within 12 months — measured, not assumed." },
            { k: "02", t: "Operational depth", n: "Uptick · Procore · M365", d: "Enterprise-grade stack at mid-market overhead. Deployed end-to-end. Foundation under AMPM Live Assets, Compliance, Response, Intelligence." },
            { k: "03", t: "Compliance anxiety", n: "BSA · golden thread · ESG", d: "Buyers pushing toward consolidated providers. Audit-ready posture is a quality differentiator, not a feature list." },
            { k: "04", t: "AI as leverage", n: "Cost · revenue · risk", d: "Buyers are starting to ask. The first credible answer in the room wins. We are not yet — but we can be by Q3." },
          ].map(p => (
            <div key={p.k} className="card" style={{ display: "flex", flexDirection: "column", gap: 8, minHeight: 160 }}>
              <div className="exhibit-no">Pillar {p.k}</div>
              <div className="card-title">{p.t}</div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-3)" }}>{p.n}</div>
              {showDetail && <div className="card-body" style={{ fontSize: 12 }}>{p.d}</div>}
            </div>
          ))}
        </div>

        {/* Two columns — execution status + risk */}
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 32 }}>
          <div>
            <div className="section-label" style={{ marginBottom: 14 }}>Workstream execution · merged roadmap</div>
            <table className="ledger">
              <thead>
                <tr><th>Status</th><th>Workstream</th><th>Lead</th><th style={{ textAlign: "right" }}>Gate</th></tr>
              </thead>
              <tbody>
                <StatusRow status="mid" lead="In flight" item="SEO + AI search visibility" owner="Stephen Sumner" due="Continuous" />
                <StatusRow status="mid" lead="In flight" item="IMADO website rebuild · AMPM Live module pages" owner="Damian / Piotr Pac" due="Q2" />
                <StatusRow status="mid" lead="In flight" item="Compliance hub + chatbot" owner="Paul Fitzpatrick" due="Q3" />
                <StatusRow status="off" lead="Open" item="Single coordination owner across all four" owner="Unassigned" due="Week 1" />
                <StatusRow status="off" lead="Open" item="AMPM Live narrative locked + signed off" owner="Chair" due="Week 2" />
                <StatusRow status="off" lead="Open" item="0845 number replaced sitewide" owner="IMADO" due="Week 1" />
                <StatusRow status="future" lead="Queued" item="Structured SharePoint bid + case study library" owner="Sales Director" due="Week 6" />
                <StatusRow status="future" lead="Queued" item="Two AI use cases scoped, owned, funded" owner="Chair signs" due="Q1 close" />
                <StatusRow status="on" lead="Delivered" item="Deliverable 1 · SPA / Reserved Matters / PCG memo" owner="Chair" due="Apr ’26" />
                <StatusRow status="on" lead="Delivered" item="Board reporting cadence reinstated · WD1–WD12" owner="Chair" due="Apr ’26" />
              </tbody>
            </table>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div>
              <div className="section-label" style={{ marginBottom: 14 }}>Risk register · top four</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { t: "Coordination drift", d: "Three workstreams running in parallel without a single named owner.", k: "Structural" },
                  { t: "Brand without enablement", d: "Investment lands in marketing surface but tender team cannot pull through.", k: "Conversion" },
                  { t: "AI without governance", d: "Reputational and regulatory risk in compliance-led services.", k: "Reputational" },
                  { t: "EOT messaging drift", d: "Self-congratulation loses buyer attention. Must remain buyer-benefit framed.", k: "Brand" },
                ].map((r, i) => (
                  <div key={i} style={{ borderLeft: "2px solid var(--oxblood)", paddingLeft: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <span style={{ fontFamily: "var(--serif)", fontSize: 14, fontWeight: 500 }}>{r.t}</span>
                      <span style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--oxblood)" }}>{r.k}</span>
                    </div>
                    {showDetail && <div style={{ fontSize: 11.5, color: "var(--ink-2)", marginTop: 2, lineHeight: 1.45 }}>{r.d}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer — countdown / KPIs */}
        <div style={{ marginTop: "auto", borderTop: "1px solid var(--ink)", paddingTop: 18, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
          <Gauge pct={28} label="Window elapsed" sub="May ’26 of an 18-mo runway" />
          <Gauge pct={45} label="Brand narrative locked" sub="AMPM Live needs Chair sign-off" />
          <Gauge pct={20} label="AI roadmap funded" sub="0 of 2 Q1 use cases in build" />
          <Gauge pct={60} label="Operational stack ready" sub="Uptick · Procore live" />
        </div>
      </div>
    </div>
  );
};

window.WindowArtefact = WindowArtefact;
