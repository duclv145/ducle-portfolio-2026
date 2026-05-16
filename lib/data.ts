export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  cover: string;
  thumbnails: string[];
  description: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "golden-lake-palace",
    title: "Golden Lake Palace",
    category: "Brand Identity / Hospitality",
    year: "2026",
    cover: "/golden-lake-palace/1.png",
    thumbnails: [
      "/golden-lake-palace/1.png",
      "/golden-lake-palace/2.png",
      "/golden-lake-palace/3.png",
      "/golden-lake-palace/4.png",
      "/golden-lake-palace/5.png",
      "/golden-lake-palace/6.png",
      "/golden-lake-palace/7.png",
      "/golden-lake-palace/8.png",
    ],
    description:
      "A complete identity system for a luxury lakeside resort — combining ornate gold motifs with a serene editorial typography.",
    accent: "#e0c267",
  },
  {
    slug: "brochure-suite",
    title: "Brochure Suite",
    category: "Print / Editorial",
    year: "2026",
    cover: "/Brochure/Brochure-cover.png",
    thumbnails: [
      "/Brochure/Brochure-cover.png",
      "/Brochure/Brochure-1.jpg",
      "/Brochure/Brochure-2.jpg",
      "/Brochure/Brochure-3.jpg",
      "/Brochure/Brochure-4.jpg",
    ],
    description:
      "Editorial brochure system designed with a strong grid and confident typographic hierarchy for premium print delivery.",
    accent: "#ff5ea1",
  },
  {
    slug: "event-collateral",
    title: "Event Collateral",
    category: "Event Design",
    year: "2026",
    cover: "/Event/Event-cover.png",
    thumbnails: [
      "/Event/Event-cover.png",
      "/Event/Event-1.jpg",
      "/Event/Event-2.jpg",
      "/Event/Event-3.jpg",
      "/Event/Event-4.jpg",
    ],
    description:
      "An expressive event identity built across stage, social and on-site touchpoints with a vibrant motion-friendly palette.",
    accent: "#66e2ff",
  },
  {
    slug: "poster-series",
    title: "Poster Series",
    category: "Visual Communication",
    year: "2026",
    cover: "/Poster/Poster-cover.png",
    thumbnails: [
      "/Poster/Poster-cover.png",
      "/Poster/Poster-1.jpg",
      "/Poster/Poster-2.jpg",
      "/Poster/Poster-3.jpg",
      "/Poster/Poster-4.jpg",
    ],
    description:
      "A high-contrast poster series exploring rhythm, scale, and the emotional weight of typography on large format media.",
    accent: "#e0fe10",
  },
  {
    slug: "collateral-system",
    title: "Collateral System",
    category: "Portfolio / Collateral",
    year: "2026",
    cover: "/Collateral/Duc Le_Portfolio_page-0021.jpg",
    thumbnails: [
      "/Collateral/Duc Le_Portfolio_page-0021.jpg",
      "/Collateral/Duc Le_Portfolio_page-0022.jpg",
      "/Collateral/Duc Le_Portfolio_page-0023.jpg",
      "/Collateral/Duc Le_Portfolio_page-0024.jpg",
    ],
    description:
      "A modular collateral kit covering business cards, stationery and sales decks — designed to scale across teams and tones.",
    accent: "#a78bfa",
  },
];

export const skills = [
  { name: "Brand Identity", level: "Expert" },
  { name: "Vibe Coding", level: "Expert" },
  { name: "Art Direction", level: "Expert" },
  { name: "Typography", level: "Specialist" },
  { name: "Print Production", level: "Specialist" },
  { name: "Motion Graphics", level: "Proficient" },
  { name: "UI/UX Web Design", level: "Proficient" },
  { name: "Photography", level: "Proficient" },
];

export const tools = [
  "Figma",
  "Illustrator",
  "Photoshop",
  "InDesign",
  "After Effects",
  "Lightroom",
  "Webflow",
  "Framer",
];

export const profile = {
  name: "Duc Le",
  title: "Graphic Designer & Generative AI Designer",
  city: "Ha Noi, VN",
  email: "duclv145@gmail.com",
  available: "Available for select projects",
  bio: "As a Senior Graphic Designer with over 10 years of experience at leading corporations like Phu My Hung, Yeah1, and FPT, I have built my career on the foundation of solid design thinking. I am committed to evolving with the industry, skillfully integrating AI tools to enhance creativity and efficiency.",
  phone: "0961 893 268",
  socials: [
    { label: "Facebook", href: "https://facebook.com/duclee145" },
    { label: "LinkedIn", href: "https://linkedin.com/in/duclv145" },
    { label: "Email", href: "mailto:duclv145@gmail.com" },
  ],
};
