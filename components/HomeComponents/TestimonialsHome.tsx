'use client'
import Image from 'next/image'
import React from 'react'
import SwiperTestimonialHome from './SwiperTestimonialHome'
import SubHeading from '../reusableComponents/SubHeading'
import { ImageContainer } from '../reusableComponents'
const TestimonialsHome = () => {
  return (
    <div className="container m-auto grid grid-cols-1 lg:grid-cols-2 min-h-[500px]  my-16 ">
      <div className="relative w-full h-72 md:h-96 md:w-96 md:m-auto lg:h-[500px]">
        <ImageContainer
          src="/homejew/9.jpg"
          alt="testimonialImage"
          className="object-contain w-full h-full "

          sizes="(min-width: 1500px) 668px, (min-width: 1040px) calc(40.91vw + 63px), calc(100vw - 64px)"
        />
      </div>
      <div className=" space-x-8 md:space-y-10 lg:space-y-16">
        <SubHeading sub="Happy Client Says" />
        <SwiperTestimonialHome />
      </div>
    </div>
  );
}

export default TestimonialsHome
