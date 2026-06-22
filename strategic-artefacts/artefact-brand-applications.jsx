// Brand artefact 07 — Architecture & applications
// Endorsed system applied: tender cover, web header, livery, signature.

const ApplicationsArtefact = ({ direction = "continuum" }) => {
  const isMeridian = direction === "meridian";

  // Shared accreditation set from current Gemini footer
  const accreds = ["FIA", "BAFE", "BSC", "FPA", "CHAS Elite", "Avetta", "FIRAS", "CleanDucts", "NSI Gold", "SafeContractor", "Cyber Essentials", "Constructionline Gold", "BESA"];

  return (
    <div className="artboard">
      <div className="artboard-inner">
        <div className="doc-meta">
          <div className="left">
            <span className="marque">AMPM</span>
            <span>Exhibit 07 · Applications</span>
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            <span className="pill">{isMeridian ? "Direction B · Meridian" : "Direction A · Continuum"}</span>
            <span>FIRST READ</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40, alignItems: "end" }}>
          <div>
            <div className="section-label" style={{ marginBottom: 14 }}>How the system shows up</div>
            <h1 className="doc-title">Tender cover. Web header. <em>Vehicle livery.</em></h1>
          </div>
          <p className="doc-deck">
            The brand earns its keep on three surfaces. Anywhere the buyer encounters us — bid documents, the website, our vans on a site — the system has to read consistently and the trust stack has to be visible.
          </p>
        </div>

        {/* Three application mocks */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 18 }}>
          {/* Tender cover */}
          <div style={{
            background: isMeridian ? "var(--ink)" : "var(--paper-2)",
            color: isMeridian ? "#f6f3ec" : "var(--ink)",
            border: "1px solid var(--ink)",
            padding: "28px 26px",
            minHeight: 360,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}>
            <div>
              <div className="mono" style={{ fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: isMeridian ? "#f6f3ec99" : "var(--ink-3)", marginBottom: 18 }}>Tender response · confidential</div>
              {isMeridian ? <MeridianLogo scale={0.7} color="#f6f3ec" /> : <ContinuumLogo scale={0.7} dotSize={32} />}
            </div>
            <div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 32, lineHeight: 1.05, letterSpacing: "-0.015em", marginBottom: 16, maxWidth: "16ch" }}>
                Compliance-led<br/>asset management for buildings that cannot afford to fail.
              </div>
              <div style={{ display: "flex", gap: 24, fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: isMeridian ? "#f6f3ec99" : "var(--ink-3)" }}>
                <span>RFP/GAMPM/2026/041</span>
                <span>EOT social value pack</span>
              </div>
            </div>
          </div>

          {/* Web header */}
          <div style={{
            background: "#fff",
            border: "1px solid var(--rule)",
            minHeight: 360,
            display: "flex",
            flexDirection: "column",
          }}>
            {/* Browser chrome */}
            <div style={{ borderBottom: "1px solid var(--rule)", padding: "8px 12px", display: "flex", gap: 6, alignItems: "center" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#d9d2c1" }}></div>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#d9d2c1" }}></div>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#d9d2c1" }}></div>
              <div style={{ flex: 1, marginLeft: 10, fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-3)", letterSpacing: "0.04em" }}>ampm.co.uk</div>
            </div>
            {/* Site nav */}
            <div style={{ padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--rule)" }}>
              {isMeridian ? <MeridianLogo scale={0.32} /> : <ContinuumLogo scale={0.36} dotSize={26} showStrap={false} />}
              <div style={{ display: "flex", gap: 22, fontFamily: "var(--sans)", fontSize: 12, color: "var(--ink-2)" }}>
                <span>Companies</span><span>Capabilities</span><span>AMPM Live</span><span>Insights</span><span>Contact</span>
              </div>
            </div>
            {/* Hero */}
            <div style={{ padding: "32px 24px 18px", flex: 1 }}>
              <div className="mono" style={{ fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 10 }}>Employee-owned · since 2024</div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 30, lineHeight: 1.05, letterSpacing: "-0.015em", maxWidth: "20ch" }}>The mothership for buildings that cannot afford to fail.</div>
            </div>
            {/* Entity tile row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid var(--rule)" }}>
              {["Gemini AMPM", "Building Services", "Facilities", "Live"].map((n, i) => (
                <div key={i} style={{ padding: "12px 14px", borderRight: i < 3 ? "1px solid var(--rule)" : "none", fontFamily: "var(--serif)", fontSize: 13 }}>
                  <div>{n}</div>
                  <div className="mono" style={{ fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-3)", marginTop: 4 }}>An AMPM company</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vehicle livery */}
        <div>
          <div className="section-label" style={{ marginBottom: 14 }}>Vehicle livery · service van side</div>
          <div style={{
            background: isMeridian ? "var(--ink)" : "#f6f3ec",
            color: isMeridian ? "#f6f3ec" : "var(--ink)",
            border: "1px solid var(--ink)",
            position: "relative",
            height: 200,
            padding: "26px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            overflow: "hidden",
          }}>
            {/* "Wheel arches" suggestion */}
            <div style={{ position: "absolute", bottom: -22, left: 60, width: 80, height: 80, borderRadius: "50%", border: `1px solid ${isMeridian ? "#f6f3ec33" : "var(--rule)"}` }}></div>
            <div style={{ position: "absolute", bottom: -22, right: 70, width: 80, height: 80, borderRadius: "50%", border: `1px solid ${isMeridian ? "#f6f3ec33" : "var(--rule)"}` }}></div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ fontFamily: isMeridian ? "'Source Serif 4', serif" : "'Inter Tight', sans-serif", fontSize: 56, fontWeight: isMeridian ? 400 : 500, letterSpacing: "-0.025em", lineHeight: 0.95 }}>Gemini AMPM</div>
              <div style={{ display: "flex", gap: isMeridian ? 0 : 5, width: 200 }}>
                {["#E8742C", "#5BAA47", "#2E5FAB", "#7A2E8F"].map((c, i) => (
                  <div key={i} style={{
                    flex: 1,
                    height: isMeridian ? 4 : 14,
                    borderRadius: isMeridian ? 0 : "50%",
                    width: isMeridian ? "auto" : 14,
                    background: c,
                  }} />
                ))}
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div className="mono" style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 6, color: isMeridian ? "#f6f3ec99" : "var(--ink-3)" }}>An AMPM company · 0330 ·· ·· ··</div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 18, lineHeight: 1.2 }}>Fire · Security<br/>Ventilation · Compliance</div>
            </div>
          </div>
        </div>

        {/* Trust stack systemised */}
        <div>
          <div className="section-label" style={{ marginBottom: 12 }}>Trust stack · systemised, not stuffed</div>
          <div style={{
            background: "var(--paper-2)",
            border: "1px solid var(--rule)",
            padding: "16px 20px",
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
          }}>
            {accreds.map((a, i) => (
              <span key={i} className="mono" style={{
                fontSize: 10,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--ink-2)",
                padding: "4px 10px",
                border: "1px solid var(--rule-strong)",
                background: "var(--paper)",
              }}>{a}</span>
            ))}
          </div>
        </div>

        {/* Decision row */}
        <div style={{ marginTop: "auto", borderTop: "1px solid var(--ink)", paddingTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
          <div>
            <div className="exhibit-no" style={{ marginBottom: 4 }}>Decision 01</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 15, lineHeight: 1.4 }}>Direction — Continuum or Meridian. Or commission a third route from the chosen agency using these as a brief.</div>
          </div>
          <div>
            <div className="exhibit-no" style={{ marginBottom: 4 }}>Decision 02</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 15, lineHeight: 1.4 }}>Mothership name — AMPM (preferred) or AMPM Group. Confirm before any production work begins.</div>
          </div>
          <div>
            <div className="exhibit-no" style={{ marginBottom: 4 }}>Decision 03</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 15, lineHeight: 1.4 }}>Gemini AMPM treatment — keep current mark, light refresh, or eventual migration. Recommend: light refresh, full equity retained.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.ApplicationsArtefact = ApplicationsArtefact;
