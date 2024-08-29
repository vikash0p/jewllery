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

//https://jewelkin-codezeel.myshopify.com/

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
