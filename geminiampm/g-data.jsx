// Gemini AMPM — renewed site content model.
// SEO-CRITICAL: `slug` and every child `slug` mirror the LIVE geminiampm.co.uk
// URL exactly, so the renewed site can keep the same address for every ranking
// page. Display/labels are refreshed; URLs are preserved.
//
// Colour map (the four-colour group meridian, shared with AMPM Building Services):
//   Fire → orange · Passive → purple · Security → green · Ventilation → blue.
//   Ancillary lines (Gas, Small Works, M&E) reuse the palette.

const COL = {
  orange: "var(--m-orange)",
  green:  "var(--m-green)",
  blue:   "var(--m-blue)",
  purple: "var(--m-purple)",
};

// ——— The seven service pillars (live URL structure preserved) ———
const PILLARS = [
  {
    id: "fire",
    no: "01",
    name: "Fire Systems",
    full: "Fire Systems",
    slug: "fire-alarm-evacuation-systems",
    colour: COL.orange,
    time: "23:00",
    shift: "Systems live",
    short: "Fire alarms and evacuation, AOV smoke extract, disabled refuge and PAVA &mdash; designed, installed and maintained to current British standards, with monitored response when the alarm actually sounds.",
    intro: "Fire systems, end to end &mdash; <strong>fire detection and evacuation alarms, AOV smoke extract, disabled refuge and PAVA, designed, installed, commissioned and maintained to the current British standards that apply to each system type</strong>. From a single panel replacement to a campus-wide addressable system, with planned maintenance and 24/7 monitored response behind it. An answered alarm, not just a recording.",
    children: [
      { name: "Fire Extinguishers", slug: "fire-alarm-evacuation-systems/fire-extinguishers" },
      { name: "Fire Alarm Installation", slug: "fire-alarm-evacuation-systems/fire-alarm-installation" },
      { name: "Fire Alarm Service &amp; Maintenance", slug: "fire-alarm-evacuation-systems/fire-alarm-service-maintenance" },
      { name: "Evacuation Alert Systems", slug: "fire-alarm-evacuation-systems/fire-alarm-evacuation-alert-systems" },
      { name: "Wireless Systems", slug: "fire-alarm-evacuation-systems/fire-alarm-wireless-systems" },
      { name: "Fire Alarm Monitoring", slug: "fire-alarm-evacuation-systems/fire-alarm-monitoring" },
      { name: "Hybrid Systems", slug: "fire-alarm-evacuation-systems/fire-alarm-hybrid-systems" },
      { name: "Nimbus Connect &mdash; real-time monitoring", slug: "fire-alarm-evacuation-systems/nimbus-connect-real-time-fire-system-monitoring-control" },
      { name: "Fire Alarm Remedial Works", slug: "passive-fire-systems/fire-alarm-remedial-works" },
    ],
    drivers: "BS&nbsp;5839-1:2025 brings the latest revision into force, the Building Safety Act tightens the golden thread, and Awaab&rsquo;s Law reshapes landlord response times. Detection, evacuation and monitoring are no longer optional line items.",
  },
  {
    id: "passive",
    no: "02",
    name: "Passive Fire",
    full: "Passive Fire Systems",
    slug: "passive-fire-systems",
    colour: COL.purple,
    time: "01:30",
    shift: "Holding the line",
    short: "Fire doors, fire stopping, compartmentation, barriers and risk assessments &mdash; the protection that works without anyone pressing a button.",
    intro: "Passive fire protection is the part of the building that holds the line on its own &mdash; <strong>compartmentation, fire stopping, fire doors and barriers</strong> that contain a fire long enough for everyone to get out. Surveyed, installed and certificated, with audit-ready records the responsible person can actually hand over.",
    children: [
      { name: "Fire Doors", slug: "passive-fire-systems/fire-doors" },
      { name: "Fire Stopping", slug: "passive-fire-systems/fire-stopping" },
      { name: "Compartmentation &amp; Fire Stopping", slug: "passive-fire-systems/compartmentation-and-fire-stopping" },
      { name: "Fire Safety Signage", slug: "passive-fire-systems/fire-safety-signage" },
      { name: "Fire Risk Assessments", slug: "passive-fire-systems/fire-risk-assessments" },
      { name: "Fire Barriers", slug: "passive-fire-systems/fire-barriers" },
    ],
    drivers: "Post-Grenfell scrutiny, the Building Safety Act and Higher-Risk Building duties have put compartmentation and fire-door integrity under the spotlight. Landlords and FM teams need surveyed, evidenced, audit-ready passive fire works.",
  },
  {
    id: "security",
    no: "03",
    name: "Security &amp; Access",
    full: "Security &amp; Access Control",
    slug: "security-access-control",
    colour: COL.green,
    time: "02:47",
    shift: "On watch",
    short: "Intruder alarms, CCTV, access control, door entry and 24/7 monitoring &mdash; the systems that stay awake after the last person leaves.",
    intro: "Security for buildings that don&rsquo;t stop mattering at 6pm &mdash; <strong>intruder alarms, CCTV, access control, door entry and monitored response</strong>. Designed, installed and watched, so an event at 2am is answered and attended, not just recorded for the morning.",
    children: [
      { name: "CCTV &amp; Surveillance", slug: "security-access-control/security-systems-cctv" },
      { name: "Door Entry", slug: "security-access-control/security-systems-door-entry" },
      { name: "Intruder Alarms", slug: "security-access-control/intruders-alarms" },
      { name: "Control Centre &amp; Monitoring", slug: "security-access-control/control-centre-monitoring" },
      { name: "Access Control", slug: "security-access-control/security-systems-access-control" },
      { name: "Security Remedial Works", slug: "security-access-control/security-systems-remedial-works" },
    ],
    drivers: "Integrated, monitored security is increasingly written into FM contracts and insurance requirements &mdash; CCTV with answered response, access control that ties to the fire strategy, and a control centre that does more than store footage.",
  },
  {
    id: "ventilation",
    no: "04",
    name: "Ventilation &amp; Air Quality",
    full: "Ventilation &amp; Air Quality",
    slug: "ventilation-air-quality",
    colour: COL.blue,
    time: "03:55",
    shift: "Keeping it breathing",
    short: "AHU and ductwork install, service and repair, fire-damper testing, ventilation hygiene, AOV smoke extract, air conditioning and commissioning.",
    intro: "The air system is life-safety and building-performance at once &mdash; <strong>AHU and ductwork, AOV smoke extract, fire-damper testing, ventilation hygiene and air conditioning</strong>. Installed, serviced, tested and commissioned so smoke moves the right way in an emergency and the building breathes properly the rest of the time.",
    children: [
      { name: "AHU &amp; Duct Installation", slug: "ventilation-air-quality/ventilation-systems-ahu-duct-install" },
      { name: "Service &amp; Repair", slug: "ventilation-air-quality/ventilation-systems-service-repair" },
      { name: "Fire Damper Testing", slug: "ventilation-air-quality/fire-damper-testing" },
      { name: "Ventilation Hygiene", slug: "ventilation-air-quality/ventilation-hygiene" },
      { name: "AOV Smoke Extract Systems", slug: "ventilation-air-quality/aov-smoke-extract-systems" },
      { name: "Air Conditioning", slug: "ventilation-air-quality/air-conditioning" },
      { name: "Commissioning", slug: "ventilation-air-quality/commissioning" },
      { name: "Pressure Testing", slug: "ventilation-air-quality/pressure-testing" },
    ],
    drivers: "Fire-damper testing and AOV smoke-extract maintenance are statutory obligations that are routinely missed. Ventilation hygiene (TR/19) and indoor air quality are rising up the FM agenda for healthcare, hospitality and care environments.",
  },
  {
    id: "gas",
    no: "05",
    name: "Gas Suppression",
    full: "Gas Suppression Systems",
    slug: "gas-suppression-systems",
    colour: COL.orange,
    time: "04:30",
    shift: "Mission-critical",
    short: "Inert and chemical gas suppression &mdash; design, install, repair and maintenance for data centres, comms rooms and irreplaceable assets.",
    intro: "When water would do more damage than the fire, the answer is gas &mdash; <strong>inert and chemical suppression for data centres, comms rooms, archives and mission-critical plant</strong>. Designed, installed, integrity-tested and maintained, with commissioning and client training delivered on the day. Our benchmark clients call us their benchmark contractor.",
    children: [
      { name: "Inert Gas Suppression", slug: "gas-suppression-systems/inert-gas-suppression-systems" },
      { name: "Chemical Gas Suppression", slug: "gas-suppression-systems/chemical-gas-suppression-systems" },
      { name: "Maintenance &amp; Servicing", slug: "gas-suppression-systems/maintenance-and-servicing-of-gas-suppression-systems" },
      { name: "System Installations", slug: "gas-suppression-systems/gas-suppression-system-installations" },
      { name: "System Repairs", slug: "gas-suppression-systems/gas-suppression-system-repairs" },
      { name: "System Maintenance", slug: "gas-suppression-systems/gas-suppression-system-maintenance" },
      { name: "Gas Suppression FAQ", slug: "gas-suppression-systems/gas-suppression-system-faq" },
    ],
    drivers: "Data-centre growth and the value of irreplaceable digital and physical assets are driving demand for clean-agent suppression that protects without water damage &mdash; designed and integrity-tested to a standard that survives audit.",
  },
  {
    id: "smallworks",
    no: "06",
    name: "Small Works &amp; Remedials",
    full: "Small Works &amp; Project Remedials",
    slug: "small-works-project-remedials",
    colour: COL.green,
    time: "05:20",
    shift: "Closing actions",
    short: "The remedial actions, snags and small projects that close out a compliance report &mdash; handled quickly, by the team that already knows the building.",
    intro: "Most compliance reports end with a list of actions. <strong>Small Works &amp; Project Remedials is how those actions get closed</strong> &mdash; the remedials, snags and smaller projects across fire, security, ventilation and passive fire, handled by the team that already knows the building, without standing up a whole new contract.",
    children: [],
    drivers: "Fire risk assessments, condition surveys and audits generate a constant stream of remedial actions. Clients want one accountable contractor to close them out &mdash; not a new procurement exercise for every line item.",
  },
  {
    id: "me",
    no: "07",
    name: "Mechanical &amp; Electrical",
    full: "Mechanical &amp; Electrical Services",
    slug: "mechanical-electrical-services",
    colour: COL.blue,
    time: "05:50",
    shift: "First shift prep",
    short: "Mechanical and electrical services that tie the life-safety and building systems together &mdash; power, distribution and supporting M&amp;E.",
    intro: "The mechanical and electrical layer that the life-safety systems depend on &mdash; <strong>power, distribution, supporting M&amp;E and integration</strong> across fire, security and ventilation. Delivered in coordination with the rest of the building so the safety-critical systems have the infrastructure they need.",
    children: [],
    drivers: "Life-safety systems are only as reliable as the M&amp;E behind them. Clients increasingly want the supporting mechanical and electrical works held by the same accountable contractor, not split across trades.",
  },
];

const heroPillars = ["fire", "security", "ventilation", "passive"]; // the four-colour ribbon

// ——— Sectors (live /sector/<slug>/ structure preserved; copy reused verbatim) ———
const SECTORS = [
  { name: "Residential &amp; Social Housing", slug: "sector/residential-social-housing", colour: COL.green,
    blurb: "Ensuring safe and secure living environments for housing associations, landlords, and developers." },
  { name: "IT Data Centres", slug: "sector/it-data-centres", colour: COL.blue,
    blurb: "Securing mission-critical environments with fire suppression and high-security access control solutions." },
  { name: "Restaurants &amp; Hotels", slug: "sector/restaurants-hotels", colour: COL.orange,
    blurb: "Helping hospitality businesses meet safety standards while maintaining seamless operations." },
  { name: "Commercial &amp; Retail Buildings", slug: "sector/commercial-and-retail-buildings", colour: COL.purple,
    blurb: "Compliant fire, gas suppression, passive fire, security and ventilation for office blocks, retail parks and mixed-use developments." },
  { name: "Warehouses &amp; Storage Units", slug: "sector/warehouses-storage-units", colour: COL.blue,
    blurb: "Protecting high-capacity warehouses and storage facilities with systems built around stock, access and continuity." },
  { name: "Care Homes", slug: "sector/care-homes", colour: COL.green,
    blurb: "Compliant fire alarms, security, passive fire protection and specialist extract cleaning for kitchens and laundries." },
  { name: "Healthcare &amp; NHS Hospitals", slug: "sector/healthcare-facilities-including-nhs-hospitals", colour: COL.orange,
    blurb: "Supporting environments where patient safety, clinical continuity and controlled evacuation strategies are critical." },
  { name: "Educational Institutions", slug: "sector/educational-institutions", colour: COL.purple,
    blurb: "Keeping schools, colleges and campuses safe without disrupting the open, welcoming environments students need." },
];

// ——— Proof points (defensible; specific cert marks flagged for confirmation) ———
const PROOF = [
  { big: "1997", lbl: "Protecting the South East&rsquo;s buildings since" },
  { big: "EOT", lbl: "Employee-owned &mdash; every member has a stake in the result" },
  { big: "24/7", lbl: "Monitored response &mdash; an answered alarm, every time" },
  { big: "UK-WIDE", lbl: "Commercial &amp; public-sector work across the UK" },
];

// ——— Why-choose pillars (reused from live 'Who We Are' / 'Why Choose Us') ———
const WHY = [
  { n: "01", t: "Employee-owned &amp; trusted", d: "As an Employee Ownership Trust, every team member shares an investment in delivering quality service and outstanding results &mdash; not a brief, an ownership stake." },
  { n: "02", t: "Safety &amp; compliance first", d: "BSI and regulatory-compliant solutions across BS&nbsp;5839, the Building Safety Act golden thread and the standards your audit teams actually check against." },
  { n: "03", t: "Specialists in large-scale buildings", d: "Hospitals, data centres, social housing, leisure centres and commercial estates &mdash; complex, safety-critical environments delivered with minimal disruption to live operations." },
  { n: "04", t: "Innovative &amp; sustainable", d: "As buildings evolve, so do we &mdash; energy-efficient systems, smart building integration and sustainable fire and security technologies." },
];

// ——— Night log (the differentiator narrative) ———
const NIGHTLOG = [
  { t: "23:41", e: "Perimeter check &mdash; all zones sealed. <strong>Armed.</strong>" },
  { t: "01:12", e: "Zone 4 motion &mdash; fox on the loading bay. <strong>Verified, stood down.</strong>" },
  { t: "02:47", e: "Smoke head 2F-11 &mdash; pre-alarm. <strong>Engineer dispatched, 18&nbsp;min.</strong>" },
  { t: "04:30", e: "Suppression panel heartbeat &mdash; comms room nominal. <strong>Logged.</strong>" },
  { t: "06:02", e: "Systems disarmed for first shift. <strong>Handed back.</strong>" },
];

// ——— Clients / trusted-by (real names referenced on the live site) ———
const CLIENTS = [
  { nm: "Equans", what: "Passive fire remedial works &mdash; AP-supervised, client-commended delivery." },
  { nm: "Mace", what: "Fire, gas suppression &amp; security packages on commercial fit-outs incl. Peterborough Court." },
  { nm: "CBRE / FM partners", what: "Managed-estate life-safety and planned maintenance across portfolios." },
  { nm: "Local Authorities", what: "Leisure-centre and public-building works delivered around live operation." },
];

// ——— News / insights (live posts; slugs preserved) ———
const NEWS = [
  { cat: "Fire Alarm", date: "19.05.2026", slug: "wireless-fire-alarm-systems-when-to-choose",
    title: "Wireless fire alarm systems &mdash; when wireless beats wired (and when it doesn&rsquo;t)",
    teaser: "Wireless fire alarm systems have caught up with wired on reliability and certification. Here&rsquo;s when wireless is the right choice." },
  { cat: "Gas Suppression", date: "19.05.2026", slug: "gas-suppression-vs-sprinklers-data-centres",
    title: "Gas suppression vs sprinklers for data centres &mdash; which protects what",
    teaser: "Inert gas, chemical agent, or sprinklers &mdash; a clear comparison framework for IT and mission-critical environments." },
  { cat: "Compliance", date: "19.05.2026", slug: "awaabs-law-fire-safety-2026",
    title: "Awaab&rsquo;s Law and fire safety: what social housing landlords need to know in 2026",
    teaser: "Awaab&rsquo;s Law is reshaping how landlords respond to hazards &mdash; what it means for fire-safety compliance and response times." },
  { cat: "Company News", date: "17.11.2025", slug: "flagship-success-at-peterborough-court",
    title: "Flagship success at Peterborough Court",
    teaser: "Gemini AMPM delivers a landmark fire, gas suppression and security project in the City of London." },
  { cat: "Company News", date: "17.11.2025", slug: "gemini-ampms-transition-to-employee-ownership-a-new-era-of-shared-success",
    title: "Our transition to Employee Ownership: a new era of shared success",
    teaser: "In 2024 Gemini AMPM made a bold, future-focused decision to transition into an Employee Ownership Trust." },
  { cat: "Fire Alarm", date: "17.11.2025", slug: "understanding-the-2025-update-to-bs-5839-1-key-changes-and-implications",
    title: "Understanding the 2025 update to BS 5839-1: key changes and implications",
    teaser: "BS 5839-1:2025 is the latest revision of the British Standard governing fire detection in non-domestic premises." },
];

// ——— Case studies (overview index) ———
const CASES = [
  { tag: "Gas · Fire · Security", sector: "Peterborough Court, City of London", scope: "Landmark fire, gas suppression and security project delivered in a live City building." },
  { tag: "Passive Fire", sector: "Longfield Court &mdash; social housing", scope: "Full-time site foreman, resident-sensitive delivery, consistently positive tenant feedback." },
  { tag: "Ventilation", sector: "Leisure centre &mdash; local authority", scope: "Works completed in an operational leisure centre with minimal disruption to daily operation." },
];

// ——— Contact / company details (live site) ———
const CONTACT = {
  phone: "0330 043 0080",
  phone2: "0845 872 5999",
  address: "Unit 2, Regents Business Centre, Jubilee Road, Burgess Hill, West Sussex RH15 9TL",
  linkedin: "https://www.linkedin.com/company/geminiampm/",
  portal: "https://uptickhq.com/uk/powered-by-uptick/sign-in/?workspace=geminiampm",
};

// ——— Accreditations (the real marks Gemini holds — from the 2026 footer strip) ———
// pdf/thumb point at the current certificate. On hover the tile flips to
// reveal the cert preview; click opens the PDF. Tiles with no pdf render
// as plain (non-flipping, non-link) cells — truthful when the cert isn't
// currently held in PDF form. Expiry tracking lives at
// 04-collateral/accreditations/REGISTER.md.
const ACCREDS = [
  { t: "BAFE",                   d: "Fire safety register &middot; ID 302260", pdf: "assets/certs/bafe.pdf",                   thumb: "assets/certs/thumbs/bafe.png" },
  { t: "NSI Gold",               d: "Security systems &middot; highest grade", pdf: "assets/certs/nsi-gold.pdf",               thumb: "assets/certs/thumbs/nsi-gold.png" },
  { t: "FIRAS",                  d: "Passive fire &middot; warringtonfire",    pdf: "assets/certs/firas.pdf",                  thumb: "assets/certs/thumbs/firas.png" },
  { t: "CHAS",                   d: "Elite accreditation",                     pdf: "assets/certs/chas.pdf",                   thumb: "assets/certs/thumbs/chas.png" },
  { t: "Constructionline",       d: "Gold member",                             pdf: "assets/certs/constructionline.pdf",       thumb: "assets/certs/thumbs/constructionline.png" },
  { t: "SafeContractor",         d: "Approved contractor",                     pdf: "assets/certs/safecontractor.pdf",         thumb: "assets/certs/thumbs/safecontractor.png" },
  { t: "Cyber Essentials",       d: "Certified",                               pdf: "assets/certs/cyber-essentials.pdf",       thumb: "assets/certs/thumbs/cyber-essentials.png" },
  { t: "BESA",                   d: "Building Engineering Services Assoc.",    pdf: "assets/certs/besa.pdf",                   thumb: "assets/certs/thumbs/besa.png" },
  { t: "FIA",                    d: "Fire Industry Association",               pdf: "assets/certs/fia.pdf",                    thumb: "assets/certs/thumbs/fia.png" },
  { t: "FPA",                    d: "Fire Protection Association",             pdf: null,                                       thumb: null },
  { t: "British Safety Council", d: "Member",                                  pdf: "assets/certs/british-safety-council.pdf", thumb: "assets/certs/thumbs/british-safety-council.png" },
  { t: "Avetta",                 d: "Member",                                  pdf: "assets/certs/avetta.pdf",                 thumb: "assets/certs/thumbs/avetta.png" },
];

Object.assign(window, {
  COL, PILLARS, heroPillars, SECTORS, PROOF, ACCREDS, WHY, NIGHTLOG, CLIENTS, NEWS, CASES, CONTACT,
});
