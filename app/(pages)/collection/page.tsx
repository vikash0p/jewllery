import ProductCollection from '@/components/collectionComponents/ProductCollection'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collection ",
  description:
    "Browse through our exclusive collection of fine jewelry pieces designed to dazzle and inspire.",
  openGraph: {
    title: "Collection | Elegant Jewelry",
    description:
      "Browse through our exclusive collection of fine jewelry pieces designed to dazzle and inspire.",
    url: "https://jewllery-eight.vercel.app/collection",
    images: "/icon-512x512.png",
    siteName: "Elegant Jewelry",
  },
  twitter: {
    card: "summary_large_image",
    title: "Collection | Elegant Jewelry",
    description:
      "Discover our exclusive collection of beautiful jewelry pieces.",
    images: "/icon-512x512.png",
  },
};

const page = () => {
  return (
    <div className='overflow-hidden px-4 border-2 border-red-700'>
        <ProductCollection />
    </div>
  )
}

export default page
