// Artefact 3 — Capability × Subsidiary Matrix
// Shows where revenue lives today vs where it could live in year 3.

const MatrixCell = ({ state, value }) => {
  // states: core (filled), grow, future, none
  const style = {
    core:   { bg: "#1d2a44", color: "#f6f3ec", label: "CORE" },
    grow:   { bg: "#8a6a1f", color: "#f6f3ec", label: "GROW" },
    sub:    { bg: "#3d5a3d", color: "#f6f3ec", label: "SUB" },
    future: { bg: "#efeadf", color: "#6b7080", label: "—" },
    none:   { bg: "transparent", color: "#d9d2c1", label: "·" },
  }[state];
  return (
    <td style={{
      background: style.bg,
      color: style.color,
      textAlign: "center",
      padding: "14px 8px",
      fontFamily: "var(--mono)",
      fontSize: 10,
      letterSpacing: "0.08em",
      borderRight: "1px solid var(--rule)",
      borderBottom: "1px solid var(--rule)",
      verticalAlign: "middle",
    }}>
      <div>{style.label}</div>
      {value && <div style={{ fontFamily: "var(--serif)", fontSize: 13, marginTop: 4, color: style.color }}>{value}</div>}
    </td>
  );
};

const MatrixArtefact = ({ horizon = 3 }) => {
  // rows = capabilities, cols = subsidiaries
  const caps = [
    { c: "Fire detection & suppression", group: "Life safety" },
    { c: "Security systems", group: "Life safety" },
    { c: "Passive fire", group: "Life safety" },
    { c: "Gas suppression", group: "Life safety" },
    { c: "Ventilation", group: "Life safety" },
    { c: "Compliance & golden thread", group: "Platform" },
    { c: "Asset register & lifecycle", group: "Platform" },
    { c: "Planned maintenance", group: "Platform" },
    { c: "M&E install", group: "Building" },
    { c: "Building services", group: "Building" },
    { c: "Aggregated FM delivery", group: "Adjacent" },
    { c: "Asset intelligence (SaaS)", group: "Adjacent" },
    { c: "Training & accreditation", group: "Adjacent" },
  ];

  const subs = [
    { id: "gem", name: "Gemini AMPM", strap: "EOT · live" },
    { id: "bs", name: "Building Svcs", strap: "Year 1" },
    ...(horizon >= 3 ? [
      { id: "fac", name: "AMPM Facilities", strap: "Q3 ’27" },
      { id: "live", name: "AMPM Live", strap: "Spin-out" },
    ] : []),
    ...(horizon >= 5 ? [
      { id: "vent", name: "AMPM Ventures", strap: "Acqui-hire" },
      { id: "ac", name: "AMPM Academy", strap: "Cost-recovery" },
    ] : []),
  ];

  // Coverage map — keyed by capability + sub
  const coverage = {
    "Fire detection & suppression": { gem: "core", bs: "none", fac: "sub", live: "none", vent: "core", ac: "none" },
    "Security systems":              { gem: "core", bs: "none", fac: "sub", live: "none", vent: "core", ac: "none" },
    "Passive fire":                  { gem: "core", bs: "none", fac: "sub", live: "none", vent: "grow", ac: "none" },
    "Gas suppression":               { gem: "core", bs: "none", fac: "none", live: "none", vent: "core", ac: "none" },
    "Ventilation":                   { gem: "core", bs: "grow", fac: "sub", live: "none", vent: "core", ac: "none" },
    "Compliance & golden thread":    { gem: "core", bs: "sub", fac: "core", live: "core", vent: "sub", ac: "grow" },
    "Asset register & lifecycle":    { gem: "core", bs: "sub", fac: "core", live: "core", vent: "sub", ac: "none" },
    "Planned maintenance":           { gem: "core", bs: "sub", fac: "core", live: "sub", vent: "core", ac: "none" },
    "M&E install":                   { gem: "none", bs: "core", fac: "sub", live: "none", vent: "grow", ac: "none" },
    "Building services":             { gem: "none", bs: "core", fac: "sub", live: "none", vent: "grow", ac: "none" },
    "Aggregated FM delivery":        { gem: "sub", bs: "sub", fac: "core", live: "sub", vent: "grow", ac: "none" },
    "Asset intelligence (SaaS)":     { gem: "sub", bs: "none", fac: "sub", live: "core", vent: "none", ac: "sub" },
    "Training & accreditation":      { gem: "sub", bs: "none", fac: "none", live: "none", vent: "none", ac: "core" },
  };

  return (
    <div className="artboard">
      <div className="artboard-inner">
        <div className="doc-meta">
          <div className="left">
            <span className="marque">AMPM Group</span>
            <span>Exhibit 03 · Capability Matrix</span>
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            <span className="pill">Board · EOT trustees</span>
            <span>HORIZON · {horizon} YR</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 40, alignItems: "end" }}>
          <div>
            <div className="section-label" style={{ marginBottom: 14 }}>Where revenue lives — and where it should</div>
            <h1 className="doc-title">Same buyers. <em>More surface.</em></h1>
          </div>
          <p className="doc-deck">
            Each subsidiary earns its place by extending the surface of the same buyer relationship. The matrix is the test: does the new entity sell something the existing buyer is already paying someone else for?
          </p>
        </div>

        {/* Legend */}
        <div style={{ display: "flex", gap: 18, fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-3)" }}>
          <span><span style={{ display: "inline-block", width: 12, height: 12, background: "#1d2a44", marginRight: 6, verticalAlign: "middle" }}></span>Core revenue</span>
          <span><span style={{ display: "inline-block", width: 12, height: 12, background: "#8a6a1f", marginRight: 6, verticalAlign: "middle" }}></span>Growth bet</span>
          <span><span style={{ display: "inline-block", width: 12, height: 12, background: "#3d5a3d", marginRight: 6, verticalAlign: "middle" }}></span>Subcontract / supply chain</span>
          <span><span style={{ display: "inline-block", width: 12, height: 12, background: "#efeadf", border: "1px solid var(--rule)", marginRight: 6, verticalAlign: "middle" }}></span>Out of scope</span>
        </div>

        {/* Matrix */}
        <div style={{ overflow: "hidden", border: "1px solid var(--ink)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <thead>
              <tr>
                <th style={{
                  background: "var(--paper-2)",
                  textAlign: "left",
                  padding: "14px 16px",
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--ink-3)",
                  borderRight: "1px solid var(--rule)",
                  borderBottom: "1px solid var(--ink)",
                  width: "26%",
                }}>Capability</th>
                {subs.map(s => (
                  <th key={s.id} style={{
                    background: "var(--paper-2)",
                    padding: "10px 8px",
                    borderRight: "1px solid var(--rule)",
                    borderBottom: "1px solid var(--ink)",
                    textAlign: "center",
                  }}>
                    <div style={{ fontFamily: "var(--serif)", fontSize: 14, fontWeight: 500, color: "var(--ink)" }}>{s.name}</div>
                    <div style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-3)", marginTop: 2 }}>{s.strap}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {caps.map((row, idx) => {
                const prev = caps[idx - 1];
                const showGroupDivider = !prev || prev.group !== row.group;
                return (
                  <React.Fragment key={row.c}>
                    {showGroupDivider && (
                      <tr>
                        <td colSpan={subs.length + 1} style={{
                          background: "var(--paper)",
                          padding: "10px 16px 4px",
                          fontFamily: "var(--mono)",
                          fontSize: 9,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "var(--ink-3)",
                          borderBottom: "1px solid var(--rule-strong)",
                        }}>{row.group}</td>
                      </tr>
                    )}
                    <tr>
                      <td style={{
                        padding: "12px 16px",
                        fontFamily: "var(--serif)",
                        fontSize: 13.5,
                        borderRight: "1px solid var(--rule)",
                        borderBottom: "1px solid var(--rule)",
                        background: "var(--paper)",
                      }}>{row.c}</td>
                      {subs.map(s => {
                        const state = coverage[row.c]?.[s.id] || "none";
                        return <MatrixCell key={s.id} state={state} />;
                      })}
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer — read */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, marginTop: "auto" }}>
          <div className="card" style={{ background: "var(--paper-2)" }}>
            <div className="exhibit-no" style={{ marginBottom: 6 }}>Read 01 · The spine</div>
            <div className="card-body">
              Compliance, asset register, planned maintenance — these run across every subsidiary. They are the spine. AMPM Live is the productised brand of that spine.
            </div>
          </div>
          <div className="card" style={{ background: "var(--paper-2)" }}>
            <div className="exhibit-no" style={{ marginBottom: 6 }}>Read 02 · The earner</div>
            <div className="card-body">
              Building Services year-1 is a subcontract route inside an existing relationship — not new logo acquisition. ~£3m at low CAC. Then expand.
            </div>
          </div>
          <div className="card" style={{ background: "var(--paper-2)" }}>
            <div className="exhibit-no" style={{ marginBottom: 6 }}>Read 03 · The optionality</div>
            <div className="card-body">
              AMPM Live as a SaaS spin-out is the highest-multiple exit lane. Treat it as a real entity from day one in the architecture, even while it is a feature today.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.MatrixArtefact = MatrixArtefact;
