import React from "react";
import {
  HomeSlider,
  FilterByCategory,
  DiscountPage,
  TopSellingProduct,
  DiscountMiddlePage,
  Features,
  SpecialProduct,
  TestimonialsHome,
  HomeLeatestBlog,
  HomeBrand,
} from "@/components/HomeComponents";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elegant Jewelry | Timeless Beauty in Every Piece",
  description:
    "Welcome to ElegantJewels! Explore our exquisite jewelry collection that suits all tastes, from timeless classics to modern designs.",
  openGraph: {
    title: "Elegant Jewelry | Timeless Beauty in Every Piece",
    description:
      "Explore our exquisite jewelry collection that suits all tastes, from timeless classics to modern designs.",
    url: "https://jewllery-eight.vercel.app/",
    images: "/icon-512x512.png",
    siteName: "Elegant Jewelry",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elegant Jewelry | Timeless Beauty in Every Piece",
    description: "Discover our beautiful and timeless jewelry pieces.",
    images: "/icon-512x512.png",
  },
};


const Home: React.FC = () => {
  return (
    <div>
      <HomeSlider />
      <FilterByCategory />
      <DiscountPage />
      <TopSellingProduct />
      <DiscountMiddlePage />
      <Features />
      <SpecialProduct />
      <TestimonialsHome />
      <HomeLeatestBlog />
      <HomeBrand />
    </div>
  );
};

export default Home;
