import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata:Metadata = {
  metadataBase: new URL("http://localhost:3000/"),

  title: {
    default: "Elegant Jewelry | Timeless Beauty in Every Piece",
    template: " %s | Elegant Jewelry ",
  },
  description:
    "Welcome to ElegantJewels! Our site is your ultimate guide to exquisite jewelry pieces. It's incredibly user-friendly, thanks to SEO magic that helps you find exactly what you're looking for. Whether you seek timeless classics or modern designs, we have something for everyone.",

  applicationName: "Elegant Jewelry",
  keywords: [
    "FineJewelryOnline",
    "LuxuryJewelryStore",
    "ExclusiveJewelryCollections",
    "HandcraftedJewelry",
    "CustomJewelryDesigns",
    "DiamondJewelry",
    "GoldJewelry",
    "SilverJewelry",
    "GemstoneJewelry",
    "WeddingJewelry",
  ],

  authors: [
    { name: "vikash" },
    { name: "Vikash", url: "http://localhost:3000/" },
  ],
  creator: "Mr. vikash pandit",
  publisher: "http://localhost:3000/",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
