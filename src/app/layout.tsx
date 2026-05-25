import type { Metadata } from "next";
import { Inter, Mona_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
});

// Mona Sans = the open-source stand-in for GT Walsheim Medium per DESIGN.md
const display = Mona_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://duclv.dev";
const title = "Duc Le — Graphic Designer, Motion & Generative AI Designer";
const description =
  "Portfolio of Duc Le — a hands-on Graphic Designer, Motion Graphic and Generative AI Designer who visualizes brands across web, marketing and motion.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Duc Le",
  },
  description,
  keywords: [
    "Duc Le",
    "Graphic Designer",
    "Motion Graphic",
    "Generative AI Designer",
    "Brand Design",
    "Portfolio",
    "Hanoi designer",
  ],
  authors: [{ name: "Duc Le", url: siteUrl }],
  creator: "Duc Le",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Duc Le — Portfolio",
    locale: "en_US",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Duc Le — Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/logo.png"],
    creator: "@duclv145",
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink cursor-auto">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
