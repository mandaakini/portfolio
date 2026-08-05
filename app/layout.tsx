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
  metadataBase: new URL("https://mandaakini-raghuraman.vercel.app"),

  title: {
    default: "Mandaakini Raghuraman",
    template: "%s | Mandaakini Raghuraman",
  },

  description:
    "Portfolio of Mandaakini Raghuraman, a Business Analytics graduate focused on consumer insights, market research, product strategy, and music.",

  keywords: [
    "Mandaakini Raghuraman",
    "Business Analytics",
    "Consumer Insights",
    "Market Research",
    "Product Strategy",
    "Product Management",
    "Music Performance",
    "Portfolio",
  ],

  openGraph: {
    title: "Mandaakini Raghuraman",
    description:
      "Business Analytics, consumer insights, market research, product strategy, and music.",
    url: "https://mandaakini-raghuraman.vercel.app",
    siteName: "Mandaakini Raghuraman",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mandaakini Raghuraman",
    description:
      "Business Analytics, consumer insights, market research, product strategy, and music.",
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