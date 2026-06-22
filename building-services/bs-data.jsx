// AMPM Building Services — shared content data (four service lines).
// Colour map per brief: MEPH→green · Commercial→purple · Fabric→orange · Groundworks→blue.

const LINES = [
  {
    id: "meph",
    no: "01",
    name: "MEPH",
    full: "Mechanical, Electrical &amp; Public Health",
    colour: "var(--m-green)",
    short: "Mechanical, electrical and public health &mdash; HVAC, power, lighting, water services, drainage and structured data, designed and commissioned by one team.",
    scope: "Heating &amp; cooling, HVAC, heat pumps, ventilation and plant installation. First and second-fix electrical, distribution, EV charging, lighting and power. Public health &mdash; hot &amp; cold water services and above-ground drainage. Data, structured cabling and IT infrastructure.",
    driver: "HVAC retrofits, heat-pump installations, energy-efficiency programmes, EV-charging rollout, and new-build and fit-out M&amp;E packages for Tier-1 supply chains.",
    cta: "Enquire about MEPH",
  },
  {
    id: "commercial",
    no: "02",
    name: "Commercial",
    full: "Fit-out &amp; Refurbishment",
    colour: "var(--m-purple)",
    short: "Cat A and Cat B fit-out and refurbishment &mdash; dry-lining, partitioning, joinery and finishes, to move-in dates that hold.",
    scope: "Cat-A and Cat-B fit-out, refurbishment, dry-lining, partitioning, joinery and associated finishes. M&amp;E held in-house rather than sub-let &mdash; removing the most common source of programme slip.",
    driver: "Office refurbishment, landlord re-lets and Cat-A / Cat-B fit-out for Tier-1 main contractors and direct occupiers.",
    cta: "Enquire about a fit-out",
  },
  {
    id: "fabric",
    no: "03",
    name: "Fabric",
    full: "External Envelope incl. Roofing",
    colour: "var(--m-orange)",
    short: "The external envelope &mdash; cladding, rainscreen, render, curtain walling and roofing, plus fa\u00e7ade repair and BSA remediation.",
    scope: "External envelope: cladding and rainscreen, brick and repointing, render, curtain walling and EWI. Flat and pitched roofing. Fa\u00e7ade repair and Building Safety Act remediation.",
    driver: "Building-envelope upgrade programmes, landlord compliance, fa\u00e7ade and cladding remediation on Higher-Risk Buildings, and insurance reinstatement works.",
    cta: "Enquire about fabric / envelope",
  },
  {
    id: "groundworks",
    no: "04",
    name: "Groundworks",
    full: "Foundations, Drainage &amp; Civils",
    colour: "var(--m-blue)",
    short: "Foundations, drainage, concrete and civils &mdash; enabling and external works, the package below the slab, done once.",
    scope: "Foundations, drainage, concrete and civils associated with building works. Enabling works for new-build and refurbishment, car-park and external-works packages.",
    driver: "New-build enabling works, drainage compliance, and car-park and external-works packages co-ordinated with the trades above.",
    cta: "Enquire about groundworks",
  },
];

// ——— Accreditations & insurance (Services + Compliance) ———
const ACCREDS = [
  { name: "ISO 9001 / 14001 / 45001", for: "Quality, environmental &amp; H&amp;S management", status: "plan", note: "Implementation programme in motion." },
  { name: "Constructionline", forg: true, for: "Tier-1 supply-chain pre-qualification", status: "on", note: "Held at Group Gold and leveraged for Building Services." },
  { name: "CHAS / SafeContractor", for: "Health-and-safety pre-qualification", status: "in", note: "Aligned with the Group H&amp;S framework." },
  { name: "NICEIC / NAPIT", for: "Electrical contracting", status: "in", note: "Qualified electricians on the team." },
  { name: "Gas Safe Registration", for: "Gas installation &amp; servicing", status: "in", note: "Qualified Gas Safe engineers registered." },
  { name: "F-Gas certification", for: "Refrigeration &amp; air conditioning", status: "on", note: "Held by the relevant operatives." },
];

// ——— Accreditation wall (compact, Compliance page) ———
const WALL = [
  { t: "ISO 9001", d: "Quality management" },
  { t: "ISO 14001", d: "Environmental management" },
  { t: "ISO 45001", d: "Health &amp; safety" },
  { t: "Constructionline", d: "Gold &middot; via the Group" },
  { t: "CHAS", d: "H&amp;S pre-qualification" },
  { t: "SafeContractor", d: "Approved contractor" },
  { t: "NICEIC", d: "Electrical contracting" },
  { t: "Gas Safe", d: "Gas installation" },
];

// ——— Golden-thread method (Compliance) ———
const THREAD = [
  { n: "01", t: "Capture", d: "Every design decision, product and certificate recorded from day one &mdash; not reconstructed at handover." },
  { n: "02", t: "Coordinate", d: "One accountable team holds the information across all four service lines, on the Group operating stack." },
  { n: "03", t: "Verify", d: "RAMS, method statements and inspection records checked against the audit posture used on Higher-Risk Buildings." },
  { n: "04", t: "Hand over", d: "An audit-ready, structured information set the client and their PQQ teams can actually use." },
];

// ——— Operating principles (About) ———
const PRINCIPLES = [
  { n: "01", t: "One contractor, four lines.", d: "MEPH, Commercial, Fabric and Groundworks all sit under AMPM Building Services. One Form of Tender, one PM, one snag list, one team to hold to the programme. The complexity of coordinating multiple sub-contractors stops at our door, not yours." },
  { n: "02", t: "Compliance is a posture, not an afterthought.", d: "Golden-thread documentation, audit-ready records, RAMS and method statements on every package. The framework comes from AMPM Group &mdash; refined across nearly three decades of life-safety and fire work &mdash; not invented on the job." },
  { n: "03", t: "Tier-1 application discipline.", d: "We understand how Tier-1 main-contractor application cycles work and tighten our own cadence to match. No over-application drift, no late-stage commercial surprises, no awkward conversations with the QS." },
  { n: "04", t: "Operating stack of an established group.", d: "Procore for delivery, Uptick for asset and PPM, Microsoft 365 for golden-thread documentation, Xero for financials. Above-market for our scale &mdash; already operating across the Group, and Building Services runs on it." },
];

// ——— Six-company group ———
const GROUP_CARDS = [
  { tag: "The flagship", t: "Gemini AMPM", d: "Fire, security, passive fire and life-safety since 1997. Employee-owned. NSI Gold, BAFE, FIRAS, Constructionline Gold and more." },
  { tag: "This entity", t: "AMPM Building Services", current: true, d: "MEPH, Commercial, Fabric and Groundworks. One accountable contractor across the building-services scope most clients procure separately." },
  { tag: "The wider Group", t: "Facilities · Live · Academy", d: "Aggregated FM, the AMPM Live client portal, and the Group's training and accreditation arm. Six companies, one mothership, one palette." },
];
const GROUP_CHIPS = ["Gemini AMPM", "AMPM Building Services", "AMPM Facilities", "AMPM Live", "AMPM Ventures", "AMPM Academy"];

// ——— Leadership ———
const TEAM = [
  { name: "Dan Small", role: "Director · Interim MD", note: "Group Managing Director of AMPM Group, carrying the director role for Building Services. Operational lead across delivery, supply chain and team. Twenty-plus years in M&amp;E and building services." },
  { name: "Jamie Dawson", role: "Group Chair", note: "Chair of AMPM Group and sponsor of Building Services. Co-founder of Gemini AMPM (1997). Holds the Group's client, investor and acquisition relationships." },
  { name: "Luke Finney", role: "Group Commercial Director", note: "Group commercial lead. Owns the pricing, estimating and commercial discipline that runs through Building Services. Twenty-plus years on the commercial side of M&amp;E and life-safety." },
];

// ——— Work / capability examples ———
const CAPS = [
  { kind: "MEPH", t: "HVAC retrofits &amp; heat pumps", g: "me-pipework",
    d: "Heat-pump retrofits and HVAC replacements for commercial estates and residential blocks. Plant install, pipework, controls and commissioning &mdash; designed around energy-efficiency and net-zero programmes.",
    slot: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=75" },
  { kind: "MEPH", t: "EV charging infrastructure", g: "electrical",
    d: "Multi-bay car-park installations, distribution-board upgrades, supply, install and commissioning across commercial and residential portfolios. Certified by NICEIC-registered engineers.",
    slot: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=900&q=75" },
  { kind: "Commercial", t: "Cat-A &amp; Cat-B office fit-out", g: "fitout",
    d: "Internal partitioning, dry-lining, joinery, finishes and fit-out M&amp;E held in-house. We remove the most common source of programme slip on fit-out jobs.",
    slot: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=75" },
  { kind: "Fabric", t: "Envelope &amp; flat-roof replacement", g: "roof",
    d: "Cladding, rainscreen and curtain-walling programmes; GRP, EPDM and single-ply flat-roof replacement; fa\u00e7ade repair and BSA remediation for landlord portfolios.",
    slot: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=75" },
];

// ——— Contact routes ———
const ROUTES = [
  { l: "Tender · quotation", v: "tenders@ampm.co.uk", s: "PQQ responses, fee proposals and scope queries from Tier-1 main contractors and direct clients. Include scope, programme and stage if you can." },
  { l: "General enquiry", v: "hello@ampm.co.uk", s: "First-time enquiries, introductions, anything that isn't yet a tender. We'll route you internally." },
  { l: "Suppliers · supply chain", v: "suppliers@ampm.co.uk", s: "Specialist sub-contractors across MEPH, Commercial, Fabric and Groundworks. Send capability, insurance, accreditations and references." },
  { l: "Careers · apprenticeships", v: "careers@ampm.co.uk", s: "Supervisors, engineers and apprenticeships through the AMPM Academy pipeline. Open to inbound &mdash; tell us what you do." },
];

Object.assign(window, { LINES, ACCREDS, WALL, THREAD, PRINCIPLES, GROUP_CARDS, GROUP_CHIPS, TEAM, CAPS, ROUTES });
