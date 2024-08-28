'use client'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { testimonialsData } from "@/utils/data";
import Review from "../reusableComponents/Review";

export default function SwiperTestimonialHome() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
    
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper  "
      >
        {
            testimonialsData.map((value)=>{
                return(
                    <SwiperSlide key={value.id} className="w-full px-12" >
                         <div className="space-y-5">
                            <div>
                                 <h2 className="text-2xl font-semibold" >{value.testimonial} </h2>
                          <Review star={5} />
                            </div>

                          <div>
                            <p className="text-xl font-bold text-orange-600">{value.name} </p>
                            <p>{value.profession} </p>
                            <p>{value.location} </p>
                          </div>
                         </div>

                    </SwiperSlide>
                )
            })
        }

      </Swiper>
    </>
  );
}
