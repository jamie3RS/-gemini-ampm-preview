// Brand artefact 06 — Direction B: MERIDIAN
// Institutional pivot. Dots become a single-pixel hairline rule.
// Serif wordmark for the mothership. Quiet authority.

const MeridianLogo = ({ wordmark = "AMPM", scale = 1, showStrap = true, color = "#1a1f2b" }) => {
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
        fontFamily: "'Source Serif 4', 'Charter', Georgia, serif",
        fontWeight: 400,
        fontSize: 72,
        letterSpacing: "-0.02em",
        color: color,
        lineHeight: 0.95,
        fontStyle: "normal",
      }}>AMPM</div>
      {/* Meridian — four-segment hairline replacing the dots */}
      <div style={{ display: "flex", gap: 0, width: "100%", maxWidth: 240 }}>
        {["#E8742C", "#5BAA47", "#2E5FAB", "#7A2E8F"].map((c, i) => (
          <div key={i} style={{ flex: 1, height: 3, background: c }} />
        ))}
      </div>
      {showStrap && (
        <div style={{
          fontFamily: "var(--mono)",
          fontSize: 9,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--ink-3)",
        }}>Asset · Management · Planned · Maintenance</div>
      )}
    </div>
  );
};

const MeridianArtefact = () => {
  return (
    <div className="artboard">
      <div className="artboard-inner">
        <div className="doc-meta">
          <div className="left">
            <span className="marque">AMPM</span>
            <span>Exhibit 06 · Direction B</span>
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            <span className="pill">Concept · not for production</span>
            <span>"MERIDIAN"</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40, alignItems: "end" }}>
          <div>
            <div className="section-label" style={{ marginBottom: 14 }}>Direction B · the institutional pivot</div>
            <h1 className="doc-title">Meridian.<br/><em>Dots compressed into a line.</em></h1>
          </div>
          <p className="doc-deck">
            The four colours survive — but as a thin meridian beneath the wordmark, not as four jolly circles. Serif caps. The mothership reads infrastructure, not service-trade. Government-buyer ready.
          </p>
        </div>

        {/* Hero mark */}
        <div style={{
          background: "var(--ink)",
          color: "#f6f3ec",
          padding: "60px 64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 48,
          minHeight: 240,
        }}>
          <MeridianLogo scale={1.1} color="#f6f3ec" />
          <div style={{ flex: 1, borderLeft: "1px solid #f6f3ec33", paddingLeft: 32 }}>
            <div className="exhibit-no" style={{ marginBottom: 8, color: "#f6f3ec99" }}>Mark · primary · reversed</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 17, lineHeight: 1.5, color: "#f6f3eccc" }}>
              Source Serif 4 caps. The four-colour meridian is the only piece of Gemini DNA carried through — compressed from joyful dots into a hairline that reads as quiet continuity, not capability brag.
            </div>
          </div>
        </div>

        {/* Endorsed lockups — dark or paper */}
        <div>
          <div className="section-label" style={{ marginBottom: 14 }}>Endorsed entity lockups</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {[
              { n: "Gemini AMPM", strap: "Fire · Security · Compliance" },
              { n: "AMPM Building Services", strap: "M&E · Building services" },
              { n: "AMPM Facilities", strap: "Aggregated FM" },
            ].map((e, i) => (
              <div key={i} style={{ background: "var(--paper)", border: "1px solid var(--ink)", padding: "26px 22px", minHeight: 170, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontFamily: "'Source Serif 4', serif", fontWeight: 400, fontSize: 26, letterSpacing: "-0.01em", color: "#1a1f2b", lineHeight: 1.05 }}>{e.n}</div>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-3)", marginTop: 6 }}>{e.strap}</div>
                </div>
                <div>
                  <div style={{ display: "flex", width: 120, marginBottom: 8 }}>
                    {["#E8742C", "#5BAA47", "#2E5FAB", "#7A2E8F"].map((c, k) => (
                      <div key={k} style={{ flex: 1, height: 2, background: c }} />
                    ))}
                  </div>
                  <div className="mono" style={{ fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink)" }}>An AMPM company</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System anatomy */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 18, marginTop: "auto" }}>
          <div className="card">
            <div className="exhibit-no" style={{ marginBottom: 8 }}>Type</div>
            <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 32, letterSpacing: "-0.015em", lineHeight: 1, marginBottom: 6 }}>Source Serif 4</div>
            <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 18, fontWeight: 500, lineHeight: 1.1, marginBottom: 8 }}>Inter Tight — body</div>
            <div className="mono" style={{ fontSize: 10, letterSpacing: "0.06em" }}>JetBrains Mono — exhibit numbering</div>
          </div>
          <div className="card">
            <div className="exhibit-no" style={{ marginBottom: 8 }}>Palette</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 10 }}>
              <div style={{ display: "flex", gap: 4 }}>
                <div style={{ flex: 2, height: 28, background: "#1a1f2b" }}></div>
                <div style={{ flex: 1, height: 28, background: "#f6f3ec", border: "1px solid var(--rule)" }}></div>
              </div>
              <div style={{ display: "flex", gap: 0 }}>
                {["#E8742C", "#5BAA47", "#2E5FAB", "#7A2E8F"].map((c, i) => (
                  <div key={i} style={{ flex: 1, height: 8, background: c }}></div>
                ))}
              </div>
            </div>
            <div className="mono" style={{ fontSize: 10, letterSpacing: "0.06em", color: "var(--ink-3)" }}>Ink primary · paper secondary · meridian for accent only</div>
          </div>
          <div className="card">
            <div className="exhibit-no" style={{ marginBottom: 8 }}>Voice</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 14, lineHeight: 1.45, color: "var(--ink-2)" }}>
              Considered. Institutional. Plain English. Reads like an infrastructure firm or a chambers, not a contractor. Reassures procurement panels and government framework buyers without trying.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.MeridianArtefact = MeridianArtefact;
window.MeridianLogo = MeridianLogo;
