export type Project = {
  slug: string;
  number: string;
  title: string;
  client: string;
  year: string;
  tags: string[];
  cover: string;
  images: string[];
  description: string;
  role: string;
};

export const projects: Project[] = [
  {
    slug: "golden-lake-brand",
    number: "01",
    title: "Dashive",
    client: "Dashive Systems",
    year: "2026",
    tags: ["Brand", "Identity", "Technology"],
    cover: "/Dashive/1.jpg",
    images: [
      "/Dashive/1.jpg",
      "/Dashive/2.jpg",
      "/Dashive/3.jpg",
      "/Dashive/4.jpg",
      "/Dashive/5.jpg",
      "/Dashive/6.jpg",
      "/Dashive/7.jpg",
    ],
    description:
      "Brand identity for Dashive Systems — a bold electric-blue logomark built around a sharp 'D' with a forward-motion cutout, paired with a clean rounded wordmark. The identity extends across billboard mockups, digital touchpoints and brand guidelines anchored to the tagline: We build systems, designed to operate beyond visibility.",
    role: "Brand Design, Visual Identity",
  },
  {
    slug: "golden-lake-editorial",
    number: "02",
    title: "Golden Lake Palace",
    client: "Dolce by Wyndham Hanoi",
    year: "2019",
    tags: ["Brand", "Identity", "Hospitality"],
    cover: "/golden-lake-palace/1.jpg",
    images: [
      "/golden-lake-palace/1.jpg",
      "/golden-lake-palace/2.jpg",
      "/golden-lake-palace/3.jpg",
      "/golden-lake-palace/4.jpg",
      "/golden-lake-palace/5.jpg",
      "/golden-lake-palace/6.jpg",
      "/golden-lake-palace/7.jpg",
      "/golden-lake-palace/8.jpg",
    ],
    description:
      "Brand identity for Golden Lake Palace — the flagship Chinese restaurant inside Dolce by Wyndham Hanoi. A calligraphic 'g' lettermark sits within a gold brushstroke sun, accompanied by a traditional red seal reading '金湖宮'. The warm ivory palette and bilingual visual system carry across menus, in-room print and digital presence.",
    role: "Brand Design, Visual Identity, Print",
  },
  {
    slug: "hung-thai-identity",
    number: "03",
    title: "Poster Series",
    client: "HS Ad Vietnam Co., Ltd.",
    year: "2022",
    tags: ["Poster", "Campaign", "Digital"],
    cover: "/Poster/Poster-cover.jpg",
    images: [
      "/Poster/Poster-cover.jpg",
      "/Poster/Poster-1.jpg",
      "/Poster/Poster-2.jpg",
      "/Poster/Poster-3.jpg",
      "/Poster/Poster-4.jpg",
    ],
    description:
      "Campaign posters for LG Vietnam — Christmas livestream events, LG StanbyME product launches, Flexfit seasonal sales and laundry-care promotions. Created at HS Ad Vietnam, LG's regional in-house agency, with rapid turnaround across digital banner and social media formats.",
    role: "Poster Design, Digital Advertising, Campaign Design",
  },
  {
    slug: "hung-thai-print",
    number: "04",
    title: "Brochure Suite",
    client: "FPT Online · VnExpress",
    year: "2018",
    tags: ["Print", "Editorial", "Brochure"],
    cover: "/Brochure/Brochure-cover.jpg",
    images: [
      "/Brochure/Brochure-cover.jpg",
      "/Brochure/Brochure-1.jpg",
      "/Brochure/Brochure-2.jpg",
      "/Brochure/Brochure-3.jpg",
      "/Brochure/Brochure-4.jpg",
    ],
    description:
      "Official brochure for the Vietnam Economic Forum (ViEF) 2018 Travel & Tourism Summit — a high-profile national event co-organized with Vietnam Tourism and the Tourism Advisory Board. Full editorial layout from cover through interior spreads, combining the lotus motif, destination photography and bilingual Vietnamese–English copy.",
    role: "Print Design, Editorial Layout, Brochure",
  },
  {
    slug: "hs-ad-collateral",
    number: "05",
    title: "Event Collateral",
    client: "FPT Online · VnExpress",
    year: "2018",
    tags: ["Event", "Key Visual", "Print"],
    cover: "/Event/Event-cover.jpg",
    images: [
      "/Event/Event-cover.jpg",
      "/Event/Event-1.jpg",
      "/Event/Event-2.jpg",
      "/Event/Event-3.jpg",
      "/Event/Event-4.jpg",
    ],
    description:
      "Key visual and event collateral for the Vietnam Economic Forum (ViEF) 2018 Travel & Tourism Summit. The hero visual centres on a lotus motif composited from destination photography across Vietnam's iconic landmarks — applied to event banners, stage backdrops, signage and print collateral throughout the summit.",
    role: "Key Visual Design, Event Graphics, Print",
  },
  {
    slug: "yeah1-event",
    number: "06",
    title: "Love Honey",
    client: "Love Honey by Lindsay",
    year: "2020 – 2021",
    tags: ["Brand", "Packaging", "Label Design"],
    cover: "/Love-Honey/1.jpg",
    images: [
      "/Love-Honey/1.jpg",
      "/Love-Honey/2.jpg",
      "/Love-Honey/3.jpg",
      "/Love-Honey/4.jpg",
      "/Love-Honey/5.jpg",
    ],
    description:
      "Label design and brand identity for Love Honey by Lindsay — a premium Vietnamese honey brand with six single-origin SKUs: Lychee, Longan, Mangrove, Saffron, Lavender and Mint. Each label carries the origin map of Vietnam, harvest photography and a consistent gold typographic system that unifies the product range at shelf.",
    role: "Label Design, Brand Identity, Packaging",
  },
  {
    slug: "vnexpress-poster",
    number: "07",
    title: "Spring Rolls",
    client: "Blue Whale Foods",
    year: "2020",
    tags: ["Packaging", "Brand", "FMCG"],
    cover: "/Cha-Gio/2CG.jpg",
    images: [
      "/Cha-Gio/1CG.jpg",
      "/Cha-Gio/2CG.jpg",
      "/Cha-Gio/3CG.jpg",
      "/Cha-Gio/4CG.jpg",
      "/Cha-Gio/5CG.jpg",
    ],
    description:
      "Retail packaging for Blue Whale Foods' Chả Giò (spring roll) range — three flavor variants unified by bold color coding: Vegetarian in green, Sea Crab in orange and Seafood in blue. Full box dieline design with Vietnamese, Chinese and English tri-language copy, nutritional panel, cooking methods and branded food photography.",
    role: "Packaging Design, Brand Application, FMCG",
  },
  {
    slug: "dvh-bransons",
    number: "08",
    title: "Collateral System",
    client: "Dolce by Wyndham Hanoi",
    year: "2019",
    tags: ["Print", "Collateral", "Hospitality"],
    cover: "/Collateral/Duc-Le_Portfolio_page-0020.jpg",
    images: [
      "/Collateral/Duc Le_Portfolio_page-0021.jpg",
      "/Collateral/Duc Le_Portfolio_page-0022.jpg",
      "/Collateral/Duc Le_Portfolio_page-0023.jpg",
      "/Collateral/Duc Le_Portfolio_page-0024.jpg",
    ],
    description:
      "In-room print collateral for Dolce by Wyndham Hanoi Golden Lake — door hangers, make-up tags and branded stationery produced to Wyndham brand standards. Bilingual English and Vietnamese copy set in the hotel's crimson and gold palette, with an intricate geometric pattern background that echoes the property's luxury positioning.",
    role: "Print Design, Collateral, Hotel Branding",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
