import type { Metadata } from "next";
import { Fraunces, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
  display: "swap",
});

const siteUrl = "https://apollo-magazine.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Apollo Magazine — Parce que l'homme est pluriel",
    template: "%s — Apollo Magazine",
  },
  description:
    "Apollo Magazine explore les mille visages de la masculinité contemporaine : mode, culture, société et style de vie, numéro après numéro.",
  keywords: [
    "Apollo Magazine",
    "magazine masculin",
    "mode homme",
    "culture",
    "société",
    "lifestyle",
  ],
  openGraph: {
    title: "Apollo Magazine — Parce que l'homme est pluriel",
    description:
      "Le magazine qui explore les mille visages de la masculinité contemporaine.",
    url: siteUrl,
    siteName: "Apollo Magazine",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apollo Magazine",
    description:
      "Le magazine qui explore les mille visages de la masculinité contemporaine.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable} ${spaceMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
