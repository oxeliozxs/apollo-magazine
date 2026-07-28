import type { Metadata } from "next";
import { Archivo_Black, Poppins } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: "400",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
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
    icon: "/icone apollo.jpg",
    shortcut: "/icone apollo.jpg",
    apple: "/icone apollo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${archivoBlack.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
