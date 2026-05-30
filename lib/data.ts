// ------------------------------------------------------------------
// Central content for the Duc Le portfolio.
// Edit copy/data here — components stay presentational.
// ------------------------------------------------------------------

export type Project = {
  name: string;
  tagline: string;
  role: string;
  client: string;
  year: string;
  /** Cover image (shown on the stacked card). */
  image?: string;
  /** Full gallery shown inside the popup modal. */
  gallery?: string[];
  /** CSS gradient for placeholder cards with no cover image. */
  gradient?: string;
};

export const projects: Project[] = [
  {
    name: "Dashive",
    tagline: "Identity system for a creative studio.",
    role: "Brand Identity", client: "Dashive", year: "2023",
    image: "/work/Dashive/1.jpg",
    gallery: [
      "/work/Dashive/1.jpg",
      "/work/Dashive/2.jpg",
      "/work/Dashive/3.jpg",
      "/work/Dashive/4.jpg",
      "/work/Dashive/5.jpg",
      "/work/Dashive/6.jpg",
      "/work/Dashive/7.jpg",
    ],
  },
  {
    name: "Golden Lake Palace",
    tagline: "Luxury hospitality brand & print suite.",
    role: "Brand · Print", client: "Dolce by Wyndham", year: "2019",
    image: "/work/golden-lake-palace/1.jpg",
    gallery: [
      "/work/golden-lake-palace/1.jpg",
      "/work/golden-lake-palace/2.jpg",
      "/work/golden-lake-palace/3.jpg",
      "/work/golden-lake-palace/4.jpg",
      "/work/golden-lake-palace/5.jpg",
      "/work/golden-lake-palace/6.jpg",
      "/work/golden-lake-palace/7.jpg",
      "/work/golden-lake-palace/8.jpg",
    ],
  },
  {
    name: "Poster Series",
    tagline: "A bold typographic poster system.",
    role: "Art Direction", client: "Self-initiated", year: "2022",
    image: "/work/Poster/Poster-cover.jpg",
    gallery: [
      "/work/Poster/Poster-cover.jpg",
      "/work/Poster/Poster-1.jpg",
      "/work/Poster/Poster-2.jpg",
      "/work/Poster/Poster-3.jpg",
      "/work/Poster/Poster-4.jpg",
    ],
  },
  {
    name: "Brochure Suite",
    tagline: "Editorial brochure for a global summit.",
    role: "Editorial Design", client: "Tourism Summit", year: "2018",
    image: "/work/Brochure/Brochure-cover.jpg",
    gallery: [
      "/work/Brochure/Brochure-cover.jpg",
      "/work/Brochure/Brochure-1.jpg",
      "/work/Brochure/Brochure-2.jpg",
      "/work/Brochure/Brochure-3.jpg",
      "/work/Brochure/Brochure-4.jpg",
    ],
  },
  {
    name: "Event Collateral",
    tagline: "Seasonal campaign & event assets.",
    role: "Campaign Design", client: "Yeah1 Group", year: "2020",
    image: "/work/Event/Event-cover.jpg",
    gallery: [
      "/work/Event/Event-cover.jpg",
      "/work/Event/Event-1.jpg",
      "/work/Event/Event-2.jpg",
      "/work/Event/Event-3.jpg",
      "/work/Event/Event-4.jpg",
    ],
  },
  {
    name: "Love Honey",
    tagline: "A playful packaging concept.",
    role: "Packaging", client: "Love Honey", year: "2023",
    image: "/work/Love-Honey/1.jpg",
    gallery: [
      "/work/Love-Honey/1.jpg",
      "/work/Love-Honey/2.jpg",
      "/work/Love-Honey/3.jpg",
      "/work/Love-Honey/4.jpg",
      "/work/Love-Honey/5.jpg",
    ],
  },
  {
    name: "Spring Rolls",
    tagline: "An illustrated Vietnamese food brand.",
    role: "Illustration · Packaging", client: "Spring Rolls", year: "2021",
    image: "/work/Cha-Gio/1CG.jpg",
    gallery: [
      "/work/Cha-Gio/1CG.jpg",
      "/work/Cha-Gio/2CG.jpg",
      "/work/Cha-Gio/3CG.jpg",
      "/work/Cha-Gio/4CG.jpg",
      "/work/Cha-Gio/5CG.jpg",
    ],
  },
  {
    name: "Collateral System",
    tagline: "A scalable brand collateral system.",
    role: "Visual System", client: "Phu My Hung", year: "2022",
    image: "/work/Collateral/Duc-Le_Portfolio_page-0020.jpg",
    gallery: [
      "/work/Collateral/Duc-Le_Portfolio_page-0020.jpg",
      "/work/Collateral/Duc Le_Portfolio_page-0021.jpg",
      "/work/Collateral/Duc Le_Portfolio_page-0022.jpg",
      "/work/Collateral/Duc Le_Portfolio_page-0023.jpg",
      "/work/Collateral/Duc Le_Portfolio_page-0024.jpg",
    ],
  },
];

export const disciplines: string[] = [
  "Brand Identity",
  "Visual Identity",
  "Motion Graphics",
  "Art Direction",
  "Generative AI",
  "Web Design",
];

export type Tool = { name: string; mark: string; description: string };
export const tools: Tool[] = [
  { name: "Illustrator", mark: "Ai", description: "Vector design & illustration" },
  { name: "Photoshop", mark: "Ps", description: "Photo editing & compositing" },
  { name: "InDesign", mark: "Id", description: "Editorial & print layout" },
  { name: "After Effects", mark: "Ae", description: "Motion graphics & animation" },
  { name: "Lightroom", mark: "Lr", description: "Color grading & retouching" },
  { name: "Claude", mark: "claude", description: "AI-assisted creative work" },
  { name: "ChatGPT", mark: "gpt", description: "Ideation & copywriting" },
  { name: "Gemini", mark: "gemini", description: "Research & generation" },
];

export const interests: string[] = [
  "Design",
  "Design thinking",
  "Arts & Craft",
  "Psychology",
  "Books",
  "Cinema",
];

export type ExperienceItem = { period: string; company: string; role: string };
export const experience: ExperienceItem[] = [
  {
    period: "08/2022 - 10/2023",
    company: "Hung Thai Technology (Phu My Hung Development Corp)",
    role: "Senior Graphic Designer",
  },
  { period: "05/2022 - 08/2022", company: "HS Ad Vietnam", role: "Senior Graphic Designer" },
  { period: "03/2020 - 05/2021", company: "Yeah1 Group", role: "Senior Graphic Designer" },
  { period: "07/2019 - 12/2019", company: "Dolce by Wyndham Golden Lake", role: "Graphic Designer" },
  { period: "11/2017 - 05/2019", company: "FPT Online · VnExpress", role: "Graphic Designer" },
  { period: "02/2015 - 11/2017", company: "DVH-Bransons", role: "Graphic Designer" },
];

export type EducationItem = { school: string; lines: string[] };
export const education: EducationItem[] = [
  {
    school: "FPT Polytechnic",
    lines: ["2013–2016 · Graphic Design · 2011–2013 · Website Design"],
  },
  { school: "FPT Arena", lines: ["2013 · Design Thinking Workshop"] },
  { school: "Brian Tracy International", lines: ["2016 · Total Business Mastery - Mini MBA"] },
  { school: "Amazon Web Services", lines: ["2026 · AWS Cloud Practitioner Essentials"] },
];

export const contact = {
  phone: "0961 893 268",
  phoneHref: "tel:0961893268",
  email: "duclv145@gmail.com",
  facebook: "facebook.com/duclee145",
  facebookHref: "https://facebook.com/duclee145",
};

export const navLinks = [
  { label: "Intro", id: "home" },
  { label: "About", id: "about" },
  { label: "Work", id: "work" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];
