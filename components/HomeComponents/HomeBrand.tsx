import { brandData } from "@/utils/data";
import Image from "next/image";
import React from "react";
import { ImageContainer } from "../reusableComponents";

const HomeBrand = () => {
  return (
    <div className="container grid items-center grid-cols-2 py-10 m-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 ">
      {brandData.map((value) => {
        return (
          <div className="relative h-32 max-w-sm" key={value.id}>
            <ImageContainer
              src={value.img}
              alt={value.img}
              className="object-contain w-full h-full "
              sizes="(min-width: 1540px) 267px, (min-width: 1280px) calc(12.5vw + 144px), (min-width: 1060px) calc(26vw + 56px), (min-width: 1020px) calc(-295vw + 3393px), (min-width: 780px) calc(11.82vw + 266px), (min-width: 480px) 384px, calc(92.5vw - 42px)"
            />
          </div>
        );
      })}
    </div>
  );
};

export default HomeBrand;
