import BlogData from "@/components/BlogComponents/BlogData";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog ",
  description:
    "Stay updated with the latest trends, guides, and stories in the world of jewelry through our blog.",
  openGraph: {
    title: "Blog ",
    description:
      "Stay updated with the latest trends, guides, and stories in the world of jewelry through our blog.",
    url: "https://jewllery-eight.vercel.app/blog",
    images: "/icon-512x512.png",
    siteName: "Elegant Jewelry",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog ",
    description:
      "Explore our blog for the latest trends and stories in jewelry.",
    images: "/icon-512x512.png",
  },
};

const Blog = () => {
  return (
    <div>
      <BlogData />
    </div>
  );
};

export default Blog;
