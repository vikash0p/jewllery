"use client";
import React from "react";
import { JewelleryItem } from "@/utils/interface";
import { getJewelleryData } from "@/utils/FetchDataFromBackend";
import SecondProductCard from "../reusableComponents/SecondProductCard";
import { useQuery } from "@tanstack/react-query";
import LoadingSkeletoTopSellingProduct from "../loadingdata/LoadingSkeletoTopSellingProduct";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// Import required modules
import { Navigation } from "swiper/modules";
import SubHeading from "../reusableComponents/SubHeading";

const SpecialProduct: React.FC = () => {
  const { isLoading, isError, data, error } = useQuery<JewelleryItem[]>({
    queryKey: ["jewellery"],
    queryFn: getJewelleryData,
  });

//   if (isLoading) return <LoadingSkeletoTopSellingProduct />;
  if (isError) return <div>An error occurred: {error?.message}</div>;

  const specialProductData = data
    ?.filter((value) => value.rating >= 4.8)
    .map((value) => (
      <SwiperSlide key={value._id} className="w-full h-full">
        <SecondProductCard value={value} />
      </SwiperSlide>
    ))

  return (
    <div>
      <div className="py-10">
        <SubHeading sub="Special Products" />
      </div>
      {isLoading ? (
        <div className="container grid grid-cols-1 m-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <LoadingSkeletoTopSellingProduct key={index} />
          ))}
        </div>
      ) : (
        <div className="container m-auto">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
              },
            }}
            className="w-full h-full mySwiper"
          >
            {data
              ?.filter((value) => value.rating >= 4.8)
              .map((value) => (
                <SwiperSlide key={value._id} className="w-full h-full">
                  <SecondProductCard value={value} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default SpecialProduct;
