import type { Metadata } from "next";
import { Inter, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

// Body type: Inter (variable). Omit `weight` so the full variable range loads.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Display type: Hanken Grotesk (variable) — rounded grotesk for oversized headings.
const display = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Duc Le — Graphic Designer",
  description:
    "Duc Le is a hands-on graphic designer with a decade of work across brand identity, motion, and generative AI — turning briefs into visual systems that hold a brand together.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="bg-black text-white antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
