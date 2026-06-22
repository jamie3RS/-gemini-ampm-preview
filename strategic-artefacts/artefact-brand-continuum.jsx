// Brand artefact 05 — Direction A: CONTINUUM
// Keeps the four AMPM dots as full-strength equity; modern type;
// dots become an arc/continuum motif on group-level work.

const ContinuumLogo = ({ wordmark = "ampm", scale = 1, showStrap = true, dotSize = 38 }) => {
  const dots = ["#E8742C", "#5BAA47", "#2E5FAB", "#7A2E8F"];
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 10 * scale,
      transform: `scale(${scale})`,
      transformOrigin: "top left",
    }}>
      <div style={{
        fontFamily: "'Inter Tight', sans-serif",
        fontWeight: 500,
        fontSize: 64,
        letterSpacing: "-0.04em",
        color: "#1a1f2b",
        lineHeight: 1,
      }}>{wordmark}</div>
      <div style={{ display: "flex", gap: 6 }}>
        {dots.map((c, i) => (
          <div key={i} style={{
            width: dotSize, height: dotSize, borderRadius: "50%",
            background: c,
          }} />
        ))}
      </div>
      {showStrap && (
        <div style={{
          fontFamily: "var(--mono)",
          fontSize: 9,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--ink-3)",
          marginTop: 4,
        }}>Asset · Management · Planned · Maintenance</div>
      )}
    </div>
  );
};

const ContinuumArtefact = () => {
  return (
    <div className="artboard">
      <div className="artboard-inner">
        <div className="doc-meta">
          <div className="left">
            <span className="marque">AMPM</span>
            <span>Exhibit 05 · Direction A</span>
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            <span className="pill">Concept · not for production</span>
            <span>"CONTINUUM"</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40, alignItems: "end" }}>
          <div>
            <div className="section-label" style={{ marginBottom: 14 }}>Direction A · the safer evolution</div>
            <h1 className="doc-title">Continuum.<br/><em>Evolve the dots. Hold the equity.</em></h1>
          </div>
          <p className="doc-deck">
            Keep the four AMPM dots at full strength. Retire the rounded grey wordmark for a modern, tighter sans. The dots become a quiet arc beneath every entity name — the visible thread.
          </p>
        </div>

        {/* Hero mark */}
        <div style={{
          background: "#fff",
          border: "1px solid var(--rule)",
          padding: "60px 64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 48,
          minHeight: 240,
        }}>
          <ContinuumLogo wordmark="ampm" scale={1.2} dotSize={42} />
          <div style={{ flex: 1, borderLeft: "1px solid var(--rule)", paddingLeft: 32 }}>
            <div className="exhibit-no" style={{ marginBottom: 8 }}>Mark · primary</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 17, lineHeight: 1.5, color: "var(--ink-2)" }}>
              Lowercase, tight-tracked Inter Tight Medium replaces Century Gothic. Four dots sit beneath, not aligned to letters. The acronym is decoded once, in mono caps, as a quiet legend — not a tagline.
            </div>
          </div>
        </div>

        {/* Endorsed lockups */}
        <div>
          <div className="section-label" style={{ marginBottom: 14 }}>Endorsed entity lockups · the thread</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {[
              { n: "Gemini AMPM", strap: "Fire · Security · Compliance", note: "Legacy mark retained at top" },
              { n: "AMPM Building Services", strap: "M&E · Building services", note: "Native to the system" },
              { n: "AMPM Facilities", strap: "Aggregated FM", note: "Future" },
            ].map((e, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid var(--rule)", padding: "24px 22px", minHeight: 170, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500, fontSize: 22, letterSpacing: "-0.02em", color: "#1a1f2b" }}>{e.n}</div>
                  <div style={{ fontSize: 11, color: "var(--ink-3)", marginTop: 4 }}>{e.strap}</div>
                </div>
                <div>
                  <div style={{ height: 1, background: "var(--rule)", margin: "16px 0 14px" }} />
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ display: "flex", gap: 3 }}>
                      {["#E8742C", "#5BAA47", "#2E5FAB", "#7A2E8F"].map((c, k) => (
                        <div key={k} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                      ))}
                    </div>
                    <div className="mono" style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-3)" }}>An AMPM company</div>
                  </div>
                </div>
                <div className="mono" style={{ fontSize: 9, color: "var(--ink-3)", letterSpacing: "0.08em", textTransform: "uppercase", position: "absolute" }}></div>
              </div>
            ))}
          </div>
        </div>

        {/* System anatomy */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 18, marginTop: "auto" }}>
          <div className="card">
            <div className="exhibit-no" style={{ marginBottom: 8 }}>Type</div>
            <div style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500, fontSize: 32, letterSpacing: "-0.025em", lineHeight: 1, marginBottom: 6 }}>Inter Tight</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 22, fontStyle: "italic", lineHeight: 1.1, marginBottom: 8 }}>Source Serif 4</div>
            <div className="mono" style={{ fontSize: 10, letterSpacing: "0.06em" }}>JetBrains Mono — labels & metadata</div>
          </div>
          <div className="card">
            <div className="exhibit-no" style={{ marginBottom: 8 }}>Palette</div>
            <div style={{ display: "flex", gap: 4, marginBottom: 10 }}>
              {[{c:"#E8742C",n:"A"},{c:"#5BAA47",n:"M"},{c:"#2E5FAB",n:"P"},{c:"#7A2E8F",n:"M"}].map((s, i) => (
                <div key={i} style={{ flex: 1, height: 56, background: s.c, color: "#fff", fontFamily: "var(--serif)", fontSize: 18, display: "flex", alignItems: "flex-end", justifyContent: "flex-end", padding: 6 }}>{s.n}</div>
              ))}
            </div>
            <div className="mono" style={{ fontSize: 10, letterSpacing: "0.06em", color: "var(--ink-3)" }}>Paper #f6f3ec · Ink #1a1f2b</div>
          </div>
          <div className="card">
            <div className="exhibit-no" style={{ marginBottom: 8 }}>Voice</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 14, lineHeight: 1.45, color: "var(--ink-2)" }}>
              Direct. Earned-technical. UK English. The acronym is decoded, not hidden — “Asset Management Planned Maintenance” is the meaning, the dots are the device.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.ContinuumArtefact = ContinuumArtefact;
window.ContinuumLogo = ContinuumLogo;
