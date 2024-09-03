import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalLayout from "@/utils/GlobalLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jewllery-eight.vercel.app/"),

  title: {
    default: "Elegant Jewelry | Timeless Beauty in Every Piece",
    template: " %s | Elegant Jewelry ",
  },
  description:
    "Welcome to ElegantJewels! Our site is your ultimate guide to exquisite jewelry pieces. It's incredibly user-friendly, thanks to SEO magic that helps you find exactly what you're looking for. Whether you seek timeless classics or modern designs, we have something for everyone.",
  openGraph: {
  title: {
    default: "Elegant Jewelry | Timeless Beauty in Every Piece",
    template: "%s | Elegant Jewelry",
  },
  description:
    "Welcome to ElegantJewels! Explore a stunning collection of exquisite jewelry pieces, where timeless classics meet modern designs. Our user-friendly site, optimized with SEO, helps you find exactly what you're looking for, making your shopping experience seamless.",
  images: [
    {
      url: "https://jewllery-eight.vercel.app/public/icon-512x512.png",
      width: 512,
      height: 512,
      alt: "Elegant Jewels Logo",
    },
  ],
  url: "https://jewllery-eight.vercel.app/",
  countryName: "India",
  // authors: ["Vikaksh Pvt Limited"],
  emails: ["Vikash752200@gmail.com"],
  // firstName: "Vikash",
  // lastName: "Pandat",
  // gender: "Male",
  phoneNumbers: ["8448925560", "9990127407"],
  // releaseDate: "2024-08-30", // Example release date
  // publishedTime: "2024-08-30T10:00:00Z", // Example published time in ISO 8601 format
  siteName: "ElegantJewels",
  // tags: ["Jewelry", "Exquisite Pieces", "Timeless Beauty", "Modern Designs"],
  locale: "en_IN", // Locale for India with English language
  type: "website", // Type of content for Open Graph
},


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
    { name: "Vikash", url: "https://jewllery-eight.vercel.app/" },
  ],
  creator: "Mr. vikash pandit",
  publisher: "https://jewllery-eight.vercel.app",
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
      <body className={`${inter.className} `}>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
