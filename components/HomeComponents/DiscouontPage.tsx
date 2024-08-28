"use client";
import Image from "next/image";
import React from "react";

const DiscouontPage = () => {
  return (
    <div className="grid grid-cols-1 gap-4 py-16 m-auto max-w-7xl md:grid-cols-2">
      <div className="relative  h-[250px] ">
        <Image
          src={"/sub-banner-1.jpg"}
          alt="bannerImage"
          fill
          sizes="(min-width: 1360px) 632px, (min-width: 780px) calc(44.64vw + 34px), 100vw"
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute left-[55%] top-[20%] space-y-2 ">
          <p className="text-base text-gray-600">Discount 20%</p>
          <h4 className="text-2xl font-bold">Family Jewelery Collection</h4>

          <button
            type="button"
            className="px-6 py-2 text-sm transition-colors bg-orange-300 rounded-sm hover:bg-orange-500"
          >
            SHOP NOW
          </button>
        </div>
      </div>
      {/* second */}
      <div className="relative  h-[250px] ">
        <Image
          src={"/sub-banner-2.jpg"}
          alt="bannerImage"
          fill
          sizes="(min-width: 1360px) 632px, (min-width: 780px) calc(44.64vw + 34px), 100vw"
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute left-[55%] top-[20%] space-y-2 ">
          <p className="text-base text-gray-600">Discount 20%</p>
          <h4 className="text-2xl font-bold">Family Jewelery Collection</h4>

          <button
            type="button"
            className="px-6 py-2 text-sm transition-colors bg-orange-300 rounded-sm hover:bg-orange-500"
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscouontPage;
