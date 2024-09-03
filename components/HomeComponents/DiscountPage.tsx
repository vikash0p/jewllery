"use client";
import { banners } from "@/utils/data";
import React from "react";
import { ImageContainer, LinkContainer } from "../reusableComponents";


const DiscountPage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 py-16 m-auto max-w-7xl md:grid-cols-2">
      {banners.map((banner, index) => (
        <div key={index} className="relative h-[250px]">
          <ImageContainer
            src={banner.src}
            alt={banner.alt}
            sizes="(min-width: 1360px) 632px, (min-width: 780px) calc(44.64vw + 34px), 100vw"
            className="object-cover w-full h-full"
          />

          <div className="absolute left-[55%] top-[20%] space-y-2">
            <p className="text-base text-gray-600">{banner.discountText}</p>
            <h4 className="text-2xl font-bold">{banner.title}</h4>
            <LinkContainer
              href={banner.linkUrl}
              linkName={banner.linkText}
              className="inline-block px-6 py-2 text-sm transition-colors bg-primary  hover:bg-primary"
            />

          </div>
        </div>
      ))}
    </div>
  );
};

export default DiscountPage;
