"use client";
import Image from "next/image";
import React from "react";

const DiscouontPage = () => {
  return (
    <div className="max-w-7xl m-auto grid grid-cols-1 md:grid-cols-2 gap-4 py-16">
      <div className="relative  h-[250px] ">
        <Image
          src={"/sub-banner-1.jpg"}
          alt="bannerImage"
          fill
          sizes=""
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute left-[55%] top-[20%] space-y-2 ">
          <p className="text-base text-gray-600">Discount 20%</p>
          <h4 className="text-2xl font-bold">Family Jewelery Collection</h4>

          <button
            type="button"
            className="text-sm bg-orange-300 px-6 py-2 rounded-sm hover:bg-orange-500 transition-colors"
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
          sizes=""
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute left-[55%] top-[20%] space-y-2 ">
          <p className="text-base text-gray-600">Discount 20%</p>
          <h4 className="text-2xl font-bold">Family Jewelery Collection</h4>

          <button
            type="button"
            className="text-sm bg-orange-300 px-6 py-2 rounded-sm hover:bg-orange-500 transition-colors"
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscouontPage;
