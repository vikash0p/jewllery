import AboutComponetData from '@/components/AboutComponets/AboutComponetData'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Elegant Jewelry",
  description:
    "Learn more about ElegantJewels, our story, and our commitment to providing exquisite jewelry.",
  openGraph: {
    title: "About Us | Elegant Jewelry",
    description:
      "Learn more about ElegantJewels, our story, and our commitment to providing exquisite jewelry.",
    url: "https://jewllery-eight.vercel.app/about",
    images: "/icon-512x512.png",
    siteName: "Elegant Jewelry",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Elegant Jewelry",
    description:
      "Learn more about our journey and our beautiful jewelry collections.",
    images: "/icon-512x512.png",
  },
};

const About = () => {
  return (
    <div>
      <AboutComponetData />
    </div>
  )
}

export default About
