'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import BlogCard from "../reusableComponents/BlogCard";
import { EffectCards } from "swiper/modules";
import { blogPosts } from "@/utils/data";
import { BlogPost } from "@/utils/interface";
export default function BlogEffectCard() {
  return (
    <div className="w-[90%] md:w-3/4 m-auto  ">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {blogPosts.map((value:BlogPost, index) => (
          <SwiperSlide key={value.blogId}>
            <div className="p-4">
              <BlogCard value={value} index={index} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
