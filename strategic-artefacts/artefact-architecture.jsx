// Artefact 1 — Group Architecture Map
// AMPM Group as holding co; Gemini AMPM (live) + Building Services (year 1)
// + future arms (FM aggregator, asset intelligence, acqui-hire, training)

const ArchNode = ({ tone = "live", title, subtitle, footnote, children, height = 110, width }) => {
  const toneStyle = {
    live:    { bg: "#f6f3ec", border: "#1a1f2b", title: "#1a1f2b", strap: "#3d5a3d", strapLabel: "LIVE" },
    yr1:     { bg: "#f6f3ec", border: "#1a1f2b", title: "#1a1f2b", strap: "#8a6a1f", strapLabel: "YEAR 1" },
    future:  { bg: "#efeadf", border: "#b8af9a", title: "#3a4150", strap: "#6b7080", strapLabel: "FUTURE" },
    holding: { bg: "#1d2a44", border: "#1d2a44", title: "#f6f3ec", strap: "#f6f3ec", strapLabel: "HOLDING" },
    eot:     { bg: "#f6f3ec", border: "#6b2a2a", title: "#1a1f2b", strap: "#6b2a2a", strapLabel: "EOT — RING-FENCED" },
  }[tone];

  return (
    <div style={{
      background: toneStyle.bg,
      border: `1px solid ${toneStyle.border}`,
      width: width || "100%",
      minHeight: height,
      display: "flex",
      flexDirection: "column",
      position: "relative",
    }}>
      <div style={{
        fontFamily: "var(--mono)",
        fontSize: 9,
        letterSpacing: "0.12em",
        color: toneStyle.strap,
        padding: "6px 10px 0",
        display: "flex",
        justifyContent: "space-between",
      }}>
        <span>{toneStyle.strapLabel}</span>
        {footnote && <span style={{ color: tone === "holding" ? "#f6f3ec99" : "#6b7080" }}>{footnote}</span>}
      </div>
      <div style={{ padding: "6px 12px 12px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{
          fontFamily: "var(--serif)",
          fontSize: 17,
          fontWeight: 500,
          color: toneStyle.title,
          letterSpacing: "-0.005em",
          lineHeight: 1.15,
        }}>{title}</div>
        {subtitle && <div style={{
          fontFamily: "var(--sans)",
          fontSize: 11,
          color: tone === "holding" ? "#f6f3eccc" : "#6b7080",
          marginTop: 4,
          lineHeight: 1.4,
        }}>{subtitle}</div>}
        {children}
      </div>
    </div>
  );
};

// SVG line connector — vertical drop with branching
const ConnectorBus = ({ branches, top = 0, busY = 30, height = 80 }) => {
  // branches: array of x positions (centre of each child)
  if (!branches || branches.length === 0) return null;
  const xs = branches;
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const centerX = (minX + maxX) / 2;
  return (
    <svg width="100%" height={height} style={{ display: "block", overflow: "visible" }} preserveAspectRatio="none">
      {/* trunk down to bus */}
      <line x1={`${centerX}%`} y1={top} x2={`${centerX}%`} y2={busY} stroke="#1a1f2b" strokeWidth="1" />
      {/* horizontal bus */}
      <line x1={`${minX}%`} y1={busY} x2={`${maxX}%`} y2={busY} stroke="#1a1f2b" strokeWidth="1" />
      {/* drops to each branch */}
      {xs.map((x, i) => (
        <line key={i} x1={`${x}%`} y1={busY} x2={`${x}%`} y2={height} stroke="#1a1f2b" strokeWidth="1" />
      ))}
    </svg>
  );
};

const ArchitectureArtefact = ({ horizon = 3, structureMode = "full" }) => {
  // Decide which subsidiaries appear at this horizon
  const showFuture = horizon >= 3;
  const showFarFuture = horizon >= 5;

  // Tier of trading subsidiaries — limited or full per structureMode
  const subs = [
    { id: "gemini",   tone: "live",   title: "Gemini AMPM",          sub: "Fire · Security · Ventilation · Gas suppression · Passive · Compliance", footnote: "EOT TRADING SUB" },
    { id: "bs",       tone: horizon >= 1 ? "yr1" : "future", title: "AMPM Building Services", sub: "M&E · Building services · Year-1 subcontract route", footnote: "AMPM GROUP" },
    ...(showFuture ? [
      { id: "fm",     tone: "future", title: "AMPM Facilities",      sub: "FM aggregator · Self-delivery + supply chain", footnote: "Q3 ’27" },
      { id: "intel",  tone: "future", title: "AMPM Live Platform", sub: "Asset intelligence · Productised SaaS layer", footnote: "Spin-out candidate" },
    ] : []),
    ...(showFarFuture ? [
      { id: "acq",    tone: "future", title: "AMPM Ventures",        sub: "Acqui-hire vehicle · Lorne Stewart-style", footnote: "Capital-backed" },
      { id: "academy",tone: "future", title: "AMPM Academy",         sub: "Training · Accreditation · Compliance authority", footnote: "Cost recovery" },
    ] : []),
  ];

  // Compute branch x-positions based on count
  const n = subs.length;
  const branchXs = subs.map((_, i) => ((i + 0.5) / n) * 100);

  return (
    <div className="artboard">
      <div className="artboard-inner">
        {/* Header */}
        <div className="doc-meta">
          <div className="left">
            <span className="marque">AMPM Group</span>
            <span>Exhibit 01 · Group Architecture</span>
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            <span className="pill">Board · EOT trustees</span>
            <span>v1.0 · 7 May 2026</span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 40 }}>
          <div>
            <div className="section-label" style={{ marginBottom: 14 }}>Group structure · {horizon}-year view</div>
            <h1 className="doc-title">The mothership, <em>made visible</em>.</h1>
          </div>
          <p className="doc-deck" style={{ maxWidth: "42ch" }}>
            AMPM Group sits above the trading entities as the holding and governance layer. Gemini AMPM remains the flagship under EOT. New specialist arms attach below the line as they earn their place.
          </p>
        </div>

        {/* Tier 1 — Holding */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 24, alignItems: "stretch" }}>
          <ArchNode tone="holding" title="AMPM Group Limited" subtitle="Holding company · Strategic oversight · Capital allocation · Group services" footnote="CRN 17136810" height={120}>
            <div style={{ marginTop: 10, display: "flex", gap: 18, fontFamily: "var(--mono)", fontSize: 10, color: "#f6f3eccc", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              <span>Owners · Dawson · Small · Finney (equal)</span>
              <span>·</span>
              <span>No PCG to subsidiaries</span>
            </div>
          </ArchNode>
          <ArchNode tone="eot" title="Gemini AMPM EOT Limited" subtitle="Corporate trustee · Holds shares in AMPM Capital Limited · Deferred consideration to Oct 2034" height={140}>
            <div style={{ marginTop: 8, fontFamily: "var(--mono)", fontSize: 10, color: "#6b2a2a", letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1.55 }}>
              Trustees · L. Finney · B. Dawson · J. Markaj<br/>L. Woodford · P. Fitzpatrick
            </div>
          </ArchNode>
        </div>

        {/* Connector bus */}
        <div style={{ height: 70, position: "relative", margin: "-12px 0" }}>
          <ConnectorBus branches={branchXs} top={0} busY={30} height={70} />
        </div>

        {/* Tier 2 — Trading subs */}
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${n}, 1fr)`, gap: 12 }}>
          {subs.map(s => (
            <ArchNode key={s.id} tone={s.tone} title={s.title} subtitle={s.sub} footnote={s.footnote} height={130} />
          ))}
        </div>

        {/* Footer ledger */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 18, marginTop: "auto" }}>
          <div className="card" style={{ background: "var(--paper-2)" }}>
            <div className="exhibit-no" style={{ marginBottom: 6 }}>Note 01 · Year-1 trading route</div>
            <div className="card-body">
              Gemini AMPM (£10m T/O p.a.) subcontracts building-services scope to AMPM Building Services on arm’s-length, benchmarked, terminable terms. First invoice targeted end of summer 2026. Year-1 revenue target: ~£3m.
            </div>
          </div>
          <div className="card" style={{ background: "var(--paper-2)" }}>
            <div className="exhibit-no" style={{ marginBottom: 6 }}>Note 02 · SPA covenant window</div>
            <div className="card-body">
              Chair and Commercial Director bound by SPA covenants until ~Oct 2026. MD (Dan Small) is non-Seller — independent director candidate for AMPM Group governance.
            </div>
          </div>
          <div className="card" style={{ background: "var(--paper-2)" }}>
            <div className="exhibit-no" style={{ marginBottom: 6 }}>Note 03 · Hard rules</div>
            <div className="card-body">
              No parent-company guarantee from Gemini AMPM to AMPM Group. AMPM Group framed as strategic development inside the Gemini ecosystem — never a private venture.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.ArchitectureArtefact = ArchitectureArtefact;
