'use client'
import React from 'react'
import { useRouter } from "next/navigation";

const DiscountMiddlePage = () => {
    const router = useRouter();

  return (
    <div className="discountMiddlePageBackgroundImage w-full h-[550px] mt-10 ">
      <div className="container grid h-full grid-cols-1 m-auto lg:grid-cols-2">
        <div className=""></div>
        <div className="flex flex-col items-start justify-center gap-6 ">
          <h2 className="text-4xl text-orange-400">Flat 40% Discount</h2>
          <h3 className="text-6xl">Gold And Diamond Earrings</h3>
          <p>Designer Jewellery Necklaces-Bracelets-Earings</p>
          <button
            type="button"
            className="px-8 py-2 uppercase bg-orange-400"
            onClick={() => router.push("/collection")}
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default DiscountMiddlePage
