"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function HomeSlider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="">
          <div className="relative w-full h-[500px] ">
            <Image
              src={"/homejew/abc1.jpg"}
              alt="bannerImage"
              fill
              sizes=""
              className="w-full h-full object-cover"
            />
            <div className="absolute left-[10%] top-[40%] space-y-4">
              <h4 className="text-4xl font-bold">Family Jewelery Collection</h4>
              <p className="text-xl">
                Designer Jewellry Necklaces-Bracelets-Earings
              </p>
              <button
                type="button"
                className="text-xl bg-myColorOne px-6 py-2 rounded-sm hover:bg-myColorHoverOne transition-colors"
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="relative w-full h-[500px] ">
            <Image
              src={"/homejew/abc2.jpg"}
              alt="bannerImage"
              fill
              sizes=""
              className="w-full h-full object-cover"
            />
            <div className="absolute left-[55%] top-[40%] space-y-4 ">
              <h4 className="text-4xl font-bold">Family Jewelery Collection</h4>
              <p className="text-xl">
                Designer Jewellry Necklaces-Bracelets-Earings
              </p>
              <button
                type="button"
                className="text-xl bg-orange-300 px-6 py-2 rounded-sm hover:bg-orange-300 transition-colors"
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="relative w-full h-[500px] ">
            <Image
              src={"/homejew/abc3.jpg"}
              alt="bannerImage"
              fill
              sizes=""
              className="w-full h-full object-cover"
            />
            <div className="absolute left-[10%] top-[40%] space-y-4">
              <h4 className="text-4xl font-bold">Grace Designer Jewellery</h4>
              <p className="text-xl">
                Designer Jewellry Necklaces-Bracelets-Earings
              </p>
              <button
                type="button"
                className="text-xl bg-orange-300 px-6 py-2 rounded-sm hover:bg-orange-300 transition-colors"
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
