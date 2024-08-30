'use client'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
        className="mySwiper "
      >
        {
            testimonialsData.map((value)=>{
                return(
                    <SwiperSlide key={value.id} className="w-full px-12" >
                         <div className="space-y-5">
                            <div>
                                 <h2 className="font-semibold lg:text-2xl" >{value.testimonial} </h2>
                          <Review star={5} />
                            </div>

                          <div>
                            <p className="font-bold text-orange-600 lg:text-xl">{value.name} </p>
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
