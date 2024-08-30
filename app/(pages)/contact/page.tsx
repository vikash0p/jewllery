import ContactPage from "@/components/ContactComponent/ContactPage";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Elegant Jewelry",
  description:
    "Get in touch with us for any inquiries or support related to our jewelry collections.",
  openGraph: {
    title: "Contact Us | Elegant Jewelry",
    description:
      "Get in touch with us for any inquiries or support related to our jewelry collections.",
    url: "https://jewllery-eight.vercel.app/contact",
    images: "/icon-512x512.png",
    siteName: "Elegant Jewelry",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Elegant Jewelry",
    description:
      "Reach out to us for any assistance or questions you may have.",
    images: "/icon-512x512.png",
  },
};

const Contact = () => {
  return (
    <>
      <ContactPage />
    </>
  );
};

export default Contact;
