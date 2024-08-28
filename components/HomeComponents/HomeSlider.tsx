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
import Link from "next/link";

export default function HomeSlider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="">
          <div className="relative w-full h-80 lg:h-[500px] ">
            <Image
              src={"/homejew/abc1.jpg"}
              alt="bannerImage"
              fill
              sizes="100vw"
              className="object-cover w-full h-full"
            />
            <div className="absolute flex flex-col items-start justify-center w-full h-full gap-2 ps-3 md:px-10 xl:ps-20 md:gap-3 lg:gap-4 xl:gap-5">
              <h4 className="text-2xl font-bold lg:text-4xl">
                Family Jewelery Collection
              </h4>
              <p className=" lg:text-xl">
                Designer Jewellry Necklaces-Bracelets-Earings
              </p>
              <div>
                <Link
                  href={"/collection"}
                  className="px-6 py-2 text-xl transition-colors rounded-sm bg-myColorOne hover:bg-myColorHoverOne"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="relative w-full h-80 lg:h-[500px] ">
            <Image
              src={"/homejew/abc2.jpg"}
              alt="bannerImage"
              fill
              sizes="100vw"
              className="object-cover w-full h-full"
            />
            <div className="absolute flex flex-col items-end justify-center w-full h-full gap-2 border border-red-700 pe-3 md:pe-10 xl:pe-20 md:gap-3 lg:gap-4 xl:gap-5">
              <h4 className="text-2xl font-bold lg:text-4xl">
                Family Jewelery Collection
              </h4>
              <p className=" lg:text-xl">
                Designer Jewellry Necklaces-Bracelets-Earings
              </p>
              <div>
                <Link
                  href={"/collection"}
                  className="px-6 py-2 text-xl transition-colors rounded-sm bg-myColorOne hover:bg-myColorHoverOne"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="relative w-full h-80 lg:h-[500px] ">
            <Image
              src={"/homejew/abc3.jpg"}
              alt="bannerImage"
              fill
              sizes="100vw"
              className="object-cover w-full h-full"
            />
            <div className="absolute flex flex-col items-start justify-center w-full h-full gap-2 ps-3 md:px-10 xl:ps-20 md:gap-3 lg:gap-4 xl:gap-5">
              <h4 className="text-2xl font-bold lg:text-4xl">
                Family Jewelery Collection
              </h4>
              <p className=" lg:text-xl">
                Designer Jewellry Necklaces-Bracelets-Earings
              </p>
              <div>
                <Link
                  href={"/collection"}
                  className="px-6 py-2 text-xl transition-colors rounded-sm bg-myColorOne hover:bg-myColorHoverOne"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
