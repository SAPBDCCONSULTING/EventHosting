export const SITE = {
  name: "The Meridian",
  phone: "+91 98100 00000",
  email: "reserve@themeridian.in",
  address: "One Meridian Tower, Golf Course Road, Gurugram",
  cities: ["Gurugram", "Mumbai", "Bengaluru", "Dubai"],
};

export const MARQUEE_ITEMS = [
  "CXO Summits",
  "Global Delegations",
  "Brand Launches",
  "Board Meetings",
  "Gala Dinners",
  "Investor Meets",
  "Executive Offsites",
  "Press Evenings",
];

export const AMENITIES = [
  {
    icon: "presentation",
    title: "Cinematic AV & Staging",
    description:
      "Broadcast-grade projection, line-array sound and programmable lighting — run by an in-house technical crew.",
  },
  {
    icon: "car",
    title: "Valet & Chauffeur Desk",
    description:
      "Complimentary valet for every guest, with chauffeur coordination for visiting leadership and delegations.",
  },
  {
    icon: "headset",
    title: "Dedicated Event Director",
    description:
      "One senior point of contact from first recce to final farewell. No hand-offs, no surprises.",
  },
  {
    icon: "wifi",
    title: "Enterprise Connectivity",
    description:
      "Redundant gigabit fibre, isolated VLANs and on-site IT support for livestreams and hybrid formats.",
  },
  {
    icon: "utensils",
    title: "Curated F&B & Sommelier",
    description:
      "Menus composed around your agenda — from working lunches to seven-course sommelier-led dinners.",
  },
  {
    icon: "shield",
    title: "Privacy & Security Detail",
    description:
      "Single-buyout venues, NDA-bound staff, controlled access floors and discreet close-protection on request.",
  },
];

export const EXPERIENCES = [
  {
    title: "CXO Summits & Roundtables",
    description:
      "Off-the-record settings for the conversations that can't happen in boardrooms. Chatham House Rule ready, acoustically sealed, and serviced without interruption.",
    tags: ["Board meetings", "Advisory councils", "Leadership roundtables"],
  },
  {
    title: "Global Delegations",
    description:
      "Protocol-grade hosting for visiting leadership, trade missions and cross-border teams — multilingual staff, flag-correct staging and cultural fluency built in.",
    tags: ["Diplomatic receptions", "Trade missions", "Partner summits"],
  },
  {
    title: "Brand & Product Launches",
    description:
      "A reveal that matches the ambition of what you're launching. Dramatic arrival sequences, reveal-stage mechanics and press-ready sightlines.",
    tags: ["Product unveilings", "Press evenings", "Investor previews"],
  },
  {
    title: "Board & Investor Meetings",
    description:
      "Discretion-first suites for AGMs, board cycles and capital conversations — with secure document handling and private breakout salons.",
    tags: ["AGMs", "Board cycles", "Fund closes"],
  },
  {
    title: "Gala Dinners & Celebrations",
    description:
      "Where relationships are built and milestones are marked. Curated menus, sommelier pairings and service choreography your guests will remember.",
    tags: ["Client evenings", "Milestone dinners", "Award nights"],
  },
  {
    title: "Executive Offsites & Workshops",
    description:
      "Strategy offsites and leadership labs in spaces engineered for focus — circadian lighting, writable architecture and zero outside noise.",
    tags: ["Strategy offsites", "Leadership labs", "Masterclasses"],
  },
];

export const LOCATIONS = [
  {
    city: "Gurugram",
    tag: "Flagship",
    name: "One Meridian Tower",
    address: "Golf Course Road, Sector 42",
    capacities: ["Salon · 20 seated", "Lounge · 150 standing", "Ballroom · 300"],
    status: "open" as const,
  },
  {
    city: "Mumbai",
    tag: "Sea-facing",
    name: "The Meridian House",
    address: "Bandra Kurla Complex",
    capacities: ["Salon · 16 seated", "Terrace · 120 standing", "Ballroom · 240"],
    status: "open" as const,
  },
  {
    city: "Bengaluru",
    tag: "Garden Pavilion",
    name: "Meridian Pavilion",
    address: "UB City, Vittal Mallya Road",
    capacities: ["Salon · 18 seated", "Court · 100 standing", "Hall · 200"],
    status: "open" as const,
  },
  {
    city: "Dubai",
    tag: "Opening 2027",
    name: "Meridian DIFC",
    address: "Gate Village, DIFC",
    capacities: ["Waitlist open", "Founding members priority"],
    status: "soon" as const,
  },
];

export const DIFFERENTIATORS = [
  {
    title: "Absolute privacy, guaranteed",
    description:
      "Whole-venue buyouts only. No walk-ins, no overlapping bookings, no curious eyes. Every team member signs an NDA before your event brief is shared.",
  },
  {
    title: "Built for decision-makers",
    description:
      "From CXO roundtables to investor dinners, every room is engineered for outcomes — sightlines, acoustics and seating geometry designed around conversation.",
  },
  {
    title: "Obsessive detailing",
    description:
      "Lighting temperature, acoustic damping, even the scent in the air — every variable is tuned before your first guest arrives.",
  },
  {
    title: "White-glove hospitality",
    description:
      "A dedicated event director, concierge desk and service team trained at five-star houses. You brief us once; we choreograph the rest.",
  },
  {
    title: "Enterprise-grade technology",
    description:
      "Redundant connectivity, broadcast AV, hybrid-meeting infrastructure and on-site engineers — invisible until the moment you need them.",
  },
  {
    title: "One call, end to end",
    description:
      "Catering, florals, security, transport, protocol — a single accountable team owns your event from recce to wrap.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "We hosted a closed-door roundtable with fourteen global fund managers. The discretion, the pacing, the service — it felt like the venue was part of our own team.",
    name: "Rohan Mehta",
    role: "Managing Director, Global Private Equity Firm",
  },
  {
    quote:
      "Our product launch needed to feel like a world premiere, not a corporate offsite. The Meridian delivered a reveal our press guests are still talking about.",
    name: "Elena Fischer",
    role: "Chief Marketing Officer, Fortune 500 Technology Company",
  },
  {
    quote:
      "Flying in board members from four continents is stressful. Having one team handle protocol, menus and AV flawlessly made it the smoothest board week we've ever run.",
    name: "Arjun Kapoor",
    role: "Founder & CEO, YC-backed Fintech",
  },
];

export const GALLERY_SPACES = [
  { title: "The Grand Salon", subtitle: "Gurugram · Ballroom" },
  { title: "Boardroom No. 1", subtitle: "Gurugram · 20 seats" },
  { title: "The Champagne Bar", subtitle: "Mumbai · Reception" },
  { title: "Terrace at Dusk", subtitle: "Mumbai · Sea-facing" },
  { title: "The Private Dining Room", subtitle: "Bengaluru · 18 seats" },
  { title: "The Library Lounge", subtitle: "Bengaluru · Breakout" },
];


export const FAQS = [
  {
    question: "What kinds of events can be hosted at The Meridian?",
    answer:
      "We specialise in premium corporate gatherings: CXO summits, board and investor meetings, brand and product launches, global delegation hosting, gala dinners, townhalls and executive offsites. Every venue is single-buyout, so your event always has the entire space to itself.",
  },
  {
    question: "What are the capacity limits across your venues?",
    answer:
      "Our venues are multi-zone. Intimate salons seat 16–20 for board-style meetings, lounges host 100–150 standing for receptions, and our ballrooms accommodate 200–300 guests. We configure the floor plan around your agenda rather than fitting your agenda into a floor plan.",
  },
  {
    question: "Do you support international delegations and visiting CXOs?",
    answer:
      "Yes — it's a core part of what we do. We provide multilingual front-of-house staff, protocol and flag etiquette, halal, kosher and allergen-aware menus, chauffeur coordination, and close-protection liaison on request.",
  },
  {
    question: "What is included in a booking?",
    answer:
      "Every booking includes the full venue, a dedicated event director, broadcast-grade AV with an on-site engineer, enterprise Wi-Fi, valet parking, and housekeeping. Catering, florals, entertainment and security details are curated as add-ons to match your brief.",
  },
  {
    question: "How far in advance should we reserve?",
    answer:
      "For board meetings and dinners, 1–2 weeks is usually sufficient. For launches, summits and events during peak season (October–February), we recommend 4–6 weeks. That said, we've turned around flawless events in 48 hours — call us and we'll tell you honestly what's possible.",
  },
  {
    question: "Can we visit the venue before committing?",
    answer:
      "We encourage it. Private viewings are available seven days a week, including evenings. Your event director will walk you through arrival sequences, room configurations and a tasting if you'd like.",
  },
  {
    question: "What is your cancellation and rescheduling policy?",
    answer:
      "Business priorities shift — we get it. Date changes are complimentary up to 14 days before your event, and cancellations follow a sliding scale outlined transparently in your booking agreement. No hidden clauses.",
  },
  {
    question: "Do you handle catering and special dietary requirements?",
    answer:
      "Yes. Our culinary team composes menus around your event's tone — from working lunches to sommelier-led seven-course dinners. All dietary requirements, including vegan, gluten-free, halal and kosher-style preparations, are accommodated with advance notice.",
  },
];

