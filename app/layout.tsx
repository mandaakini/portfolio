import type { Metadata } from "next";
import { Playfair_Display, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mandaakini — Business Analytics × Consumer Insights × Product Strategy × Music",
  description:
    "Portfolio of Mandaakini, a Business Analytics graduate exploring the intersection of data, creativity, and human behavior — through consumer research, product strategy, and music.",
  keywords: [
    "Mandaakini",
    "Business Analytics",
    "Consumer Insights",
    "Product Strategy",
    "Product Management",
    "Music Performance",
    "Portfolio",
  ],
  openGraph: {
    title: "Mandaakini — Data, Strategy & Music",
    description:
      "Exploring the intersection of data, creativity, and human behavior to build products and experiences people genuinely connect with.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <body className="bg-cream text-charcoal font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}