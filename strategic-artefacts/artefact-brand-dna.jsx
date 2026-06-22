// Brand artefact 04 — DNA & principles
// What we read from current Gemini, what survives, what evolves.

const DnaArtefact = () => {
  // Gemini dot palette
  const dots = [
    { c: "#E8742C", n: "Amber 01", note: "Asset" },
    { c: "#5BAA47", n: "Lime 02", note: "Management" },
    { c: "#2E5FAB", n: "Cobalt 03", note: "Planned" },
    { c: "#7A2E8F", n: "Aubergine 04", note: "Maintenance" },
  ];

  return (
    <div className="artboard">
      <div className="artboard-inner">
        <div className="doc-meta">
          <div className="left">
            <span className="marque">AMPM</span>
            <span>Exhibit 04 · Brand DNA</span>
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            <span className="pill">Board · EOT trustees</span>
            <span>READ OF CURRENT GEMINI</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40, alignItems: "end" }}>
          <div>
            <div className="section-label" style={{ marginBottom: 14 }}>What survives. What evolves.</div>
            <h1 className="doc-title">The dots are <em>equity</em>. Everything else is on the table.</h1>
          </div>
          <p className="doc-deck">
            Before we choose a direction we mark up what the existing Gemini brand actually says, and which of those signals carry forward into a group system. Asset cleanup before asset use.
          </p>
        </div>

        {/* Two columns — current read + design principles */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          {/* Current Gemini read */}
          <div>
            <div className="section-label" style={{ marginBottom: 14 }}>Current Gemini AMPM · marked up</div>

            {/* Inline reconstructed mark */}
            <div style={{
              background: "#fff",
              border: "1px solid var(--rule)",
              padding: "32px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 14,
              marginBottom: 16,
            }}>
              <div style={{
                fontFamily: "'Century Gothic', 'Avant Garde', 'Futura', sans-serif",
                fontSize: 64,
                fontWeight: 400,
                color: "#9a9a9a",
                letterSpacing: "-0.01em",
                lineHeight: 1,
              }}>gemini</div>
              <div style={{ display: "flex", gap: 8 }}>
                {dots.map((d, i) => (
                  <div key={i} style={{
                    width: 54, height: 54, borderRadius: "50%",
                    background: d.c,
                    color: "#fff",
                    fontFamily: "'Century Gothic', sans-serif",
                    fontWeight: 600,
                    fontSize: 26,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>{["A","M","P","M"][i]}</div>
                ))}
              </div>
              <div style={{
                fontFamily: "'Century Gothic', sans-serif",
                fontSize: 13,
                color: "#3a3a3a",
                letterSpacing: "0.02em",
                marginTop: 4,
              }}>Asset Management Planned Maintenance</div>
            </div>

            {/* Read */}
            <table className="ledger">
              <thead><tr><th>Signal</th><th>Reads as</th><th>Verdict</th></tr></thead>
              <tbody>
                <tr><td style={{ fontFamily: "var(--serif)" }}>Soft-grey lowercase wordmark</td><td>Friendly · domestic · approachable</td><td><span className="dot dot-mid"></span><span className="mono" style={{fontSize: 10}}>EVOLVE</span></td></tr>
                <tr><td style={{ fontFamily: "var(--serif)" }}>Four coloured dots</td><td>Broad capability · personality · service-led</td><td><span className="dot dot-on"></span><span className="mono" style={{fontSize: 10}}>KEEP</span></td></tr>
                <tr><td style={{ fontFamily: "var(--serif)" }}>"Asset Management Planned Maintenance" spell-out</td><td>Definition of acronym · clarity · earnest</td><td><span className="dot dot-on"></span><span className="mono" style={{fontSize: 10}}>KEEP</span></td></tr>
                <tr><td style={{ fontFamily: "var(--serif)" }}>Rounded geometric sans</td><td>Late-90s SME · pre-EOT</td><td><span className="dot dot-off"></span><span className="mono" style={{fontSize: 10}}>RETIRE</span></td></tr>
                <tr><td style={{ fontFamily: "var(--serif)" }}>Footer rainbow stripe</td><td>"All things to all buyers" · joyful</td><td><span className="dot dot-mid"></span><span className="mono" style={{fontSize: 10}}>REFRAME</span></td></tr>
                <tr><td style={{ fontFamily: "var(--serif)" }}>Accreditation density (FIA, BAFE, NSI Gold, FIRAS, BESA…)</td><td>Trust stack · serious operator</td><td><span className="dot dot-on"></span><span className="mono" style={{fontSize: 10}}>SYSTEMISE</span></td></tr>
              </tbody>
            </table>
          </div>

          {/* Principles */}
          <div>
            <div className="section-label" style={{ marginBottom: 14 }}>Mothership principles · five rules</div>

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                { n: "01", t: "Letters quiet, dots loud", d: "The four AMPM dots are the only piece of Gemini equity worth keeping at full strength. The wordmark serves the dots, not the other way around." },
                { n: "02", t: "Quiet authority over warmth", d: "EOT, tier-one, framework, government — the mothership reads institutional. Warmth lives at the entity level, not the group level." },
                { n: "03", t: "Endorsed, not absorbed", d: "Each entity keeps its own mark. AMPM signs underneath. Gemini AMPM keeps full equity. New entities are built native to the system." },
                { n: "04", t: "Trust stack is a brand asset", d: "Accreditations are not footer afterthoughts. They are systemised — same scale, same rhythm, same weight on every property." },
                { n: "05", t: "One thread, four registers", d: "Type, the dot device, a neutral base, and a single accent. Same four ingredients across every entity. Different proportions per audience." },
              ].map(p => (
                <div key={p.n} style={{
                  display: "grid",
                  gridTemplateColumns: "40px 1fr",
                  gap: 14,
                  padding: "14px 0",
                  borderBottom: "1px solid var(--rule)",
                }}>
                  <div className="mono" style={{ fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.08em" }}>{p.n}</div>
                  <div>
                    <div style={{ fontFamily: "var(--serif)", fontSize: 16, fontWeight: 500, marginBottom: 4 }}>{p.t}</div>
                    <div style={{ fontSize: 12.5, color: "var(--ink-2)", lineHeight: 1.5 }}>{p.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.DnaArtefact = DnaArtefact;
