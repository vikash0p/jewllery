import { brandData } from "@/utils/data";
import Image from "next/image";
import React from "react";

const HomeBrand = () => {
  return (
    <div className="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 py-10  items-center ">
      {brandData.map((value) => {
        return (
          <div className="relative max-w-sm h-32" key={value.id}>
            <Image
              src={value.img}
              alt={value.img}
              className="object-contain w-full h-full "
              fill
              sizes="(min-width: 1540px) 267px, (min-width: 1280px) calc(12.5vw + 144px), (min-width: 1060px) calc(26vw + 56px), (min-width: 1020px) calc(-295vw + 3393px), (min-width: 780px) calc(11.82vw + 266px), (min-width: 480px) 384px, calc(92.5vw - 42px)"
            />
          </div>
        );
      })}
    </div>
  );
};

export default HomeBrand;
