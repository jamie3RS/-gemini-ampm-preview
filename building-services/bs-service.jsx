// AMPM Building Services — per-line service pages (deep offer + representative projects).

const SERVICE_DETAIL = {
  meph: {
    intro: "Mechanical &amp; Electrical is the engine of the business &mdash; and the line most clients lead with. We self-deliver the full MEPH scope, from plant and distribution to public health and structured data, so the most technical package on a job sits with <strong>one accountable team.</strong>",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=75",
    groups: [
      { h: "Mechanical &amp; HVAC", items: ["Heating &amp; cooling systems", "Ventilation &amp; air handling", "Heat pumps &amp; low-carbon plant", "Pipework &amp; plant rooms", "Commissioning &amp; handover"] },
      { h: "Electrical", items: ["1st &amp; 2nd fix", "Distribution boards &amp; switchgear", "EV charging infrastructure", "Lighting &amp; power", "Testing &amp; certification (NICEIC)"] },
      { h: "Public health", items: ["Hot &amp; cold water services", "Above-ground drainage", "Sanitaryware &amp; fit-out", "Water hygiene &amp; compliance"] },
      { h: "Data &amp; IT infrastructure", items: ["Structured cabling", "Containment &amp; comms rooms", "IT-infrastructure fit", "Resilient power to racks"] },
    ],
    cases: [
      { tag: "MEPH · Cat-B", sector: "Commercial office — City of London", scope: "Full M&amp;E package for a Cat-B fit-out across multiple floors.", value: "[£x.xm]", prog: "[xx wks]", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=75" },
      { tag: "MEPH · Heat pumps", sector: "Managed estate — Surrey", scope: "Air-source heat-pump retrofit and plant replacement across several blocks.", value: "[£x.xm]", prog: "[xx wks]", img: "https://images.unsplash.com/photo-1592833167665-ebf9d00a4799?auto=format&fit=crop&w=900&q=75" },
      { tag: "MEPH · EV", sector: "Car park — South East", scope: "Multi-bay EV charging installation with distribution-board upgrade.", value: "[£xxxk]", prog: "[xx wks]", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=900&q=75" },
    ],
  },
  commercial: {
    intro: "Commercial fit-out and refurbishment, with the M&amp;E held in-house rather than sub-let. That single decision removes the most common source of programme slip on a fit-out &mdash; and it's why occupiers and Tier-1s hand us <strong>the whole floor, not just the trades.</strong>",
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=75",
    groups: [
      { h: "Category-A", items: ["Raised floors &amp; ceilings", "Base-build M&amp;E coordination", "Shell upgrades", "Landlord Cat-A finish"] },
      { h: "Category-B", items: ["Partitioning &amp; dry-lining", "Joinery &amp; finishes", "Tea-points &amp; breakout", "Furniture coordination"] },
      { h: "Refurbishment", items: ["Strip-out &amp; reconfiguration", "Occupied / live works", "Landlord re-lets", "Phased programmes"] },
      { h: "Integrated M&amp;E", items: ["M&amp;E held in-house", "One programme, one PM", "Move-in dates that hold", "Single snag list"] },
    ],
    cases: [
      { tag: "Commercial · Cat-A/B", sector: "Landlord re-let — London", scope: "Cat-A upgrade followed by Cat-B fit for the incoming tenant.", value: "[£x.xm]", prog: "[xx wks]", img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=900&q=75" },
      { tag: "Commercial · Refurb", sector: "Occupied HQ — Kent", scope: "Phased refurbishment delivered in a live, occupied environment.", value: "[£x.xm]", prog: "[xx wks]", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=75" },
      { tag: "Commercial · Fit-out", sector: "Office — South East", scope: "Joinery, partitioning and finishes to a full commercial floor.", value: "[£xxxk]", prog: "[xx wks]", img: "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=900&q=75" },
    ],
  },
  fabric: {
    intro: "The external envelope, end to end &mdash; from rainscreen and curtain walling to flat and pitched roofing. With the Building Safety Act reshaping fa\u00e7ade work, our <strong>compliance-led approach to remediation and Higher-Risk Buildings</strong> is the sharpest reason to put fabric with us.",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=75",
    groups: [
      { h: "Fa\u00e7ade &amp; cladding", items: ["Rainscreen &amp; cladding", "Curtain walling", "Brick &amp; repointing", "Render &amp; EWI"] },
      { h: "Roofing", items: ["Flat — GRP, EPDM, single-ply", "Pitched roofing", "Waterproofing systems", "Planned maintenance"] },
      { h: "BSA remediation", items: ["Cladding remediation", "Fire-safety envelope works", "Fa\u00e7ade repair", "Higher-Risk Building scope"] },
      { h: "Survey &amp; compliance", items: ["Condition surveys", "Insurance reinstatement", "Envelope upgrade programmes", "Golden-thread records"] },
    ],
    cases: [
      { tag: "Fabric · Remediation", sector: "HRB residential — London", scope: "Cladding remediation and fire-safety envelope works on a Higher-Risk Building.", value: "[£x.xm]", prog: "[xx wks]", img: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=900&q=75" },
      { tag: "Fabric · Roofing", sector: "Industrial estate — South East", scope: "Single-ply flat-roof replacement across multiple units.", value: "[£xxxk]", prog: "[xx wks]", img: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=900&q=75" },
      { tag: "Fabric · Fa\u00e7ade", sector: "Commercial — Sussex", scope: "Rainscreen and curtain-walling upgrade to a commercial fa\u00e7ade.", value: "[£x.xm]", prog: "[xx wks]", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=75" },
    ],
  },
  groundworks: {
    intro: "Everything below and around the slab &mdash; foundations, drainage, civils and external works. Coordinated with the trades above so the enabling package <strong>doesn't become the programme's first delay.</strong>",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=75",
    groups: [
      { h: "Foundations &amp; substructure", items: ["Excavation &amp; muck-away", "Concrete &amp; RC works", "Slabs &amp; ground beams", "Piling coordination"] },
      { h: "Drainage &amp; civils", items: ["Foul &amp; surface water", "Attenuation &amp; SuDS", "Ducting &amp; service routes", "Drainage compliance"] },
      { h: "Enabling works", items: ["Site clearance", "Demolition coordination", "Temporary works", "Setting-out"] },
      { h: "External works", items: ["Hard landscaping", "Car parks &amp; surfacing", "Kerbing &amp; edgings", "Boundary works"] },
    ],
    cases: [
      { tag: "Groundworks · Enabling", sector: "New-build — South East", scope: "Enabling works and substructure ahead of a new-build programme.", value: "[£x.xm]", prog: "[xx wks]", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=75" },
      { tag: "Groundworks · Drainage", sector: "Estate — Surrey", scope: "Drainage compliance works with surface-water attenuation.", value: "[£xxxk]", prog: "[xx wks]", img: "https://images.unsplash.com/photo-1517089152318-42ec560349c0?auto=format&fit=crop&w=900&q=75" },
      { tag: "Groundworks · External", sector: "Car park — Kent", scope: "Car-park civils, surfacing and external works package.", value: "[£xxxk]", prog: "[xx wks]", img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=75" },
    ],
  },
};

const ServiceDetailPage = ({ id, setRoute }) => {
  useReveal(id);
  const line = LINES.find((l) => l.id === id) || LINES[0];
  const d = SERVICE_DETAIL[id] || SERVICE_DETAIL.meph;
  const others = LINES.filter((l) => l.id !== id);

  return (
    <div className="page">
      <div className="shell">
        <section className="sec p-hero">
          <div className="reveal"><span className="svc-bar" style={{ background: line.colour }}></span></div>
          <div className="reveal"><Kicker>Services · {line.no}</Kicker></div>
          <h1 className="reveal d1" dangerouslySetInnerHTML={{ __html: line.full }} />
          <p className="lede reveal d2" dangerouslySetInnerHTML={{ __html: d.intro }} />
          <div className="reveal d3" style={{ marginTop: 28 }}>
            <a className="btn line sm" href="#contact" onClick={(e) => { e.preventDefault(); setRoute("contact"); }} dangerouslySetInnerHTML={{ __html: line.cta + " &rarr;" }} />
          </div>
        </section>

        <section className="sec tight">
          <div className="reveal" style={{ marginBottom: 32 }}>
            <Kicker>What we deliver</Kicker>
            <h2 className="dhead sm">The full {line.name} scope,<br />self-delivered.</h2>
          </div>
          <div className="capgroups reveal">
            {d.groups.map((g, i) => (
              <div className="capgroup" key={i}>
                <h4><span className="dot" style={{ background: line.colour }}></span><span dangerouslySetInnerHTML={{ __html: g.h }} /></h4>
                <ul>{g.items.map((it, j) => <li key={j} dangerouslySetInnerHTML={{ __html: it }} />)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section className="sec tight">
          <div className="intro2 reveal">
            <div>
              <Kicker>Market drivers</Kicker>
              <h2 className="dhead sm">Where the work<br />is coming from.</h2>
            </div>
            <p className="body" dangerouslySetInnerHTML={{ __html: line.driver }} />
          </div>
        </section>

        <section className="sec">
          <div className="reveal" style={{ marginBottom: 32 }}>
            <Kicker>Representative projects</Kicker>
            <h2 className="dhead sm">{line.name} work, in the field.</h2>
          </div>
          <div className="caselist reveal">
            {d.cases.map((c, i) => (
              <div className="case-card" key={i} onClick={() => setRoute("work")}>
                <image-slot id={"ls-" + id + "-case-" + i} shape="rect" class="ci" style={{ width: "100%", height: "200px", display: "block" }}
                  src={c.img} placeholder={"CASE — " + line.name}></image-slot>
                <span className="ctag" style={{ background: line.colour, position: "absolute" }} dangerouslySetInnerHTML={{ __html: c.tag }} />
                <h4>[{c.sector}]</h4>
                <p className="cs" dangerouslySetInnerHTML={{ __html: c.scope }} />
                <div className="cm">
                  <div><div className="k">Value</div><div className="v">{c.value}</div></div>
                  <div><div className="k">Programme</div><div className="v">{c.prog}</div></div>
                </div>
              </div>
            ))}
          </div>
          <p className="case-note">Representative of the {line.name} work we are set up to deliver. Named, full-format case studies follow as projects complete &mdash; PQQ references available on request.</p>
        </section>

        <section className="sec tight line-top">
          <div className="reveal" style={{ marginBottom: 24 }}>
            <Kicker>The other three lines</Kicker>
            <h2 className="dhead sm">One contractor,<br />four service lines.</h2>
          </div>
          <div className="otherlines reveal">
            {others.map((o) => (
              <div className="otherline" key={o.id} onClick={() => setRoute(o.id)}>
                <span className="ol-l"><span className="ol-sw" style={{ background: o.colour }}></span><span className="ol-nm">{o.name}</span></span>
                <span className="ol-go">&rarr;</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="band" data-nav-dark style={{ background: line.colour, color: "#fff" }}>
        <div className="shell">
          <div className="cta-split reveal">
            <div>
              <Kicker dark>Talk to us about {line.name}</Kicker>
              <h2 className="dhead sm" style={{ color: "#fff" }}>Scope, programme,<br />stage &mdash; send it over.</h2>
              <p className="body" style={{ color: "rgba(255,255,255,0.9)", marginTop: 16 }}>
                A named contact, not a sales team, comes back within 24 hours. Include the package, programme and stage if you can.
              </p>
            </div>
            <div className="cta-row2" style={{ flexDirection: "column", alignItems: "flex-start" }}>
              <a className="btn ghost" href="#contact" onClick={(e) => { e.preventDefault(); setRoute("contact"); }} dangerouslySetInnerHTML={{ __html: line.cta + " &rarr;" }} />
              <a className="btn ghost" href="#compliance" onClick={(e) => { e.preventDefault(); setRoute("compliance"); }}>Compliance &amp; BSA</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { SERVICE_DETAIL, ServiceDetailPage });
