'use client'
import { testimonialsData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'
import SwiperTestimonialHome from './SwiperTestimonialHome'
import SubHeading from '../reusableComponents/SubHeading'
const TestimonialsHome = () => {
  return (
    <div className="container m-auto grid grid-cols-1 lg:grid-cols-2 min-h-[500px]  my-16 ">
      <div className="relative w-full h-72 lg:h-[500px]">
        <Image
          src="/homejew/9.jpg"
          alt="testimonialImage"
          className="object-contain w-full h-full"
          fill
          priority
          sizes="(min-width: 1500px) 668px, (min-width: 1040px) calc(40.91vw + 63px), calc(100vw - 64px)"
        />
      </div>
      <div className="space-y-20">
        <SubHeading sub="Happy Client Says" />
        <SwiperTestimonialHome />
      </div>
    </div>
  );
}

export default TestimonialsHome
