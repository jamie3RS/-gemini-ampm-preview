// Brand artefact 08 — Shape language
// Same four colours. Different shapes per entity tier. The thread, made systematic.

const ShapeRow = ({ shape, color, size = 18, count = 4 }) => {
  const colors = ["#E8742C", "#5BAA47", "#2E5FAB", "#7A2E8F"];
  const items = Array.from({ length: count }, (_, i) => {
    const c = color || colors[i];
    if (shape === "circle") {
      return <div key={i} style={{ width: size, height: size, borderRadius: "50%", background: c }} />;
    }
    if (shape === "capsule") {
      return <div key={i} style={{ width: size * 1.6, height: size * 0.7, borderRadius: size, background: c }} />;
    }
    if (shape === "square") {
      return <div key={i} style={{ width: size, height: size, background: c }} />;
    }
    if (shape === "diamond") {
      return <div key={i} style={{ width: size, height: size, background: c, transform: "rotate(45deg)" }} />;
    }
    if (shape === "bar") {
      const heights = [size * 0.6, size * 1.0, size * 1.4, size * 0.85];
      return <div key={i} style={{ width: size * 0.45, height: heights[i % 4], background: c, alignSelf: "flex-end" }} />;
    }
    if (shape === "line") {
      return <div key={i} style={{ width: size * 1.6, height: 4, background: c }} />;
    }
    return null;
  });
  const gap = shape === "line" ? 0 : (shape === "bar" ? 4 : 6);
  return <div style={{ display: "flex", gap, alignItems: "flex-end", height: shape === "bar" ? size * 1.4 : "auto" }}>{items}</div>;
};

const EntityCard = ({ name, type, shape, strap, retained = false }) => {
  return (
    <div style={{
      background: "var(--paper)",
      border: "1px solid var(--ink)",
      padding: "26px 24px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: 220,
      position: "relative",
    }}>
      {retained && (
        <div className="mono" style={{
          position: "absolute", top: 12, right: 14,
          fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase",
          color: "var(--oxblood)",
          padding: "2px 6px",
          border: "1px solid var(--oxblood)",
        }}>RETAINED EQUITY</div>
      )}
      <div>
        <div className="mono" style={{ fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 14 }}>{type}</div>
        <div style={{
          fontFamily: "'Source Serif 4', serif",
          fontSize: 28,
          fontWeight: 400,
          letterSpacing: "-0.015em",
          color: "var(--ink)",
          lineHeight: 1.05,
          marginBottom: 14,
          textWrap: "balance",
        }}>{name}</div>
        <ShapeRow shape={shape} size={20} />
      </div>
      <div style={{ marginTop: 18, paddingTop: 14, borderTop: "1px solid var(--rule)" }}>
        <div className="mono" style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-3)" }}>{strap}</div>
      </div>
    </div>
  );
};

const ShapeLanguageArtefact = () => {
  const entities = [
    { name: "AMPM", type: "Mothership · holding", shape: "line", strap: "Compliance-led asset management" },
    { name: "Gemini AMPM", type: "Trading · EOT · fire & security", shape: "circle", strap: "Asset Management Planned Maintenance", retained: true },
    { name: "AMPM Building Services", type: "Trading · construction", shape: "capsule", strap: "M&E · Building services" },
    { name: "AMPM Facilities", type: "Trading · FM aggregator", shape: "square", strap: "Aggregated facilities · self + supply chain" },
    { name: "AMPM Live", type: "Platform · SaaS spin-out", shape: "bar", strap: "Live assets · live compliance · live response" },
    { name: "AMPM Academy", type: "Cost-recovery · training", shape: "diamond", strap: "Compliance authority · accreditation" },
  ];

  return (
    <div className="artboard">
      <div className="artboard-inner">
        <div className="doc-meta">
          <div className="left">
            <span className="marque">AMPM</span>
            <span>Exhibit 08 · Shape language</span>
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            <span className="pill">Direction B · Meridian — extended</span>
            <span>FAMILY SYSTEM</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40, alignItems: "end" }}>
          <div>
            <div className="section-label" style={{ marginBottom: 14 }}>One palette. Six shapes. The thread, made systematic.</div>
            <h1 className="doc-title">Same colours.<br/><em>Different shape per company.</em></h1>
          </div>
          <p className="doc-deck">
            The four colours are the family. The shape tells you which company you're looking at. Gemini AMPM keeps its circles — earned equity. Every other entity uses a shape native to its tier. Read across a row of vans, doors, or tender covers and the family is obvious.
          </p>
        </div>

        {/* The system grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {entities.map(e => <EntityCard key={e.name} {...e} />)}
        </div>

        {/* The shape rationale strip */}
        <div>
          <div className="section-label" style={{ marginBottom: 14 }}>Why each shape</div>
          <table className="ledger">
            <thead><tr><th>Shape</th><th>Entity</th><th>Reads as</th><th>Note</th></tr></thead>
            <tbody>
              <tr>
                <td><ShapeRow shape="line" size={14} /></td>
                <td style={{ fontFamily: "var(--serif)" }}>AMPM</td>
                <td>Quietest. Continuity, governance, the spine.</td>
                <td className="muted" style={{ fontSize: 12 }}>Holding-level only.</td>
              </tr>
              <tr>
                <td><ShapeRow shape="circle" size={14} /></td>
                <td style={{ fontFamily: "var(--serif)" }}>Gemini AMPM</td>
                <td>Personality. Service. Heritage.</td>
                <td className="muted" style={{ fontSize: 12 }}>Existing equity preserved.</td>
              </tr>
              <tr>
                <td><ShapeRow shape="capsule" size={14} /></td>
                <td style={{ fontFamily: "var(--serif)" }}>AMPM Building Services</td>
                <td>Engineered. Pipework. Built environment.</td>
                <td className="muted" style={{ fontSize: 12 }}>Year-1 trading.</td>
              </tr>
              <tr>
                <td><ShapeRow shape="square" size={14} /></td>
                <td style={{ fontFamily: "var(--serif)" }}>AMPM Facilities</td>
                <td>Estate. Units. Portfolio at scale.</td>
                <td className="muted" style={{ fontSize: 12 }}>Future Q3 ’27.</td>
              </tr>
              <tr>
                <td><ShapeRow shape="bar" size={14} /></td>
                <td style={{ fontFamily: "var(--serif)" }}>AMPM Live</td>
                <td>Live data. Real-time. Software register.</td>
                <td className="muted" style={{ fontSize: 12 }}>SaaS spin-out path.</td>
              </tr>
              <tr>
                <td><ShapeRow shape="diamond" size={14} /></td>
                <td style={{ fontFamily: "var(--serif)" }}>AMPM Academy</td>
                <td>Standards. Cut. Authority.</td>
                <td className="muted" style={{ fontSize: 12 }}>Cost-recovery.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Family read */}
        <div style={{
          background: "var(--ink)",
          color: "#f6f3ec",
          padding: "30px 36px",
          marginTop: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
        }}>
          <div>
            <div className="mono" style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#f6f3ec99", marginBottom: 8 }}>Family read · the row test</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 17, lineHeight: 1.4, maxWidth: "60ch" }}>
              Six vans on a job site. Six tender covers on a procurement table. Six logos in a footer. Different shapes — but the same four colours, in the same order. The buyer recognises the family before they read the name.
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <ShapeRow shape="line" size={20} />
            <ShapeRow shape="circle" size={20} />
            <ShapeRow shape="capsule" size={20} />
            <ShapeRow shape="square" size={20} />
            <ShapeRow shape="bar" size={20} />
            <ShapeRow shape="diamond" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

window.ShapeLanguageArtefact = ShapeLanguageArtefact;
window.ShapeRow = ShapeRow;
