import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import DynamicBackground from "@/components/DynamicBackground";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Duc Le — Creative Designer & Art Director",
  description:
    "Portfolio of Duc Le, a Saigon-based creative designer building bold identities, editorial systems, and motion-friendly brand experiences.",
  metadataBase: new URL("https://ducle.studio"),
  openGraph: {
    title: "Duc Le — Creative Designer & Art Director",
    description:
      "Bold identities, editorial systems, and motion-friendly brand experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <body className="bg-bg text-fg grain antialiased" suppressHydrationWarning>
        <DynamicBackground />
<CustomCursor />
        {children}
      </body>
    </html>
  );
}
