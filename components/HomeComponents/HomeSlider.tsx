"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { slides } from "@/utils/data";
import { ImageContainer, LinkContainer } from "../reusableComponents";

export default function HomeSlider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="">
            <div className="relative w-full h-80 lg:h-[500px]">
              <ImageContainer
                src={slide.imgSrc}
                alt={slide.altText}
                sizes="100vw"
                className="object-cover w-full h-full"
              />
              <div
                className={`absolute flex flex-col justify-center w-full h-full gap-2 ps-3 md:px-10 xl:ps-20 md:gap-3 lg:gap-4 xl:gap-5 ${
                  index % 2 !== 0 ? "items-end" : "items-start"
                }`}
              >
                <div className="space-y-4 p-5">
                  <h1 className={`text-2xl font-bold lg:text-5xl`}>
                    {slide.heading}
                  </h1>
                  <p className="lg:text-xl">{slide.description}</p>
                  <div>
                    <LinkContainer
                      href={slide.linkUrl}
                      className="px-6 py-2 text-xl transition-colors bg-primary hover:bg-hoverColor"
                      linkName="SHOP NOW"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
