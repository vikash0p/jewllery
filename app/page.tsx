import DiscountMiddlePage from '@/components/HomeComponents/DiscountMiddlePage'
import DiscouontPage from '@/components/HomeComponents/DiscouontPage'
import Features from '@/components/HomeComponents/FeaturesComponents'
import FilterByCategory from '@/components/HomeComponents/FilterByCategory'
import HomeBrand from '@/components/HomeComponents/HomeBrand'
import HomeLeatestBlog from '@/components/HomeComponents/HomeLeatestBlog'
import HomeSlider from '@/components/HomeComponents/HomeSlider'
import SpecialProduct from '@/components/HomeComponents/SpecialProduct'
import TestimonialsHome from '@/components/HomeComponents/TestimonialsHome'
import TopSellingProduct from '@/components/HomeComponents/TopSellingProduct'
import React from 'react'
//https://jewelkin-codezeel.myshopify.com/
const Home = () => {
  return (
    <div>
      <HomeSlider />
      <FilterByCategory />
      <DiscouontPage />
      <TopSellingProduct />
      <DiscountMiddlePage />
      <Features />
      <SpecialProduct />
      <TestimonialsHome/>
      <HomeLeatestBlog />
      <HomeBrand />

    </div>
  )
}

export default Home
