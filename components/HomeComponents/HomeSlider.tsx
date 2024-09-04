"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { slides } from "@/utils/data";
import { ImageContainer, LinkContainer } from "../reusableComponents";

export default function HomeSlider() {
  return (
    <Swiper
    spaceBetween={20}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{
        clickable: true,
        el: ".swiper-pagination",
        dynamicBullets: true,
      }}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-72 bg-gray-100 mt-1 lg:h-[500px]">
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
                <h1 className="text-2xl font-bold lg:text-5xl">
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
      {/* Pagination visible only on small devices */}
      <div className="swiper-pagination block lg:hidden"></div>
      {/* Navigation visible only on large devices */}
      <div className="swiper-button-next hidden lg:block"></div>
      <div className="swiper-button-prev hidden lg:block"></div>
    </Swiper>
  );
}
