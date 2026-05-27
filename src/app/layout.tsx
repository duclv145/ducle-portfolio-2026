import type { Metadata } from "next";
import { Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const cormorantSerif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
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
  title: { default: title, template: "%s · Duc Le" },
  description,
  keywords: ["Duc Le", "Graphic Designer", "Motion Graphic", "Generative AI Designer", "Brand Design", "Portfolio", "Hanoi designer"],
  authors: [{ name: "Duc Le", url: siteUrl }],
  creator: "Duc Le",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", url: siteUrl, title, description,
    siteName: "Duc Le — Portfolio", locale: "en_US",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Duc Le — Portfolio" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/logo.png"], creator: "@duclv145" },
  icons: { icon: "/logo.svg", shortcut: "/logo.svg", apple: "/logo.svg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${cormorantSerif.variable} ${mono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&family=Google+Sans+Display:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-canvas text-ink" suppressHydrationWarning>
        <LenisProvider>
          <ScrollProgress />
          <CursorGlow />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
