"use client";
import React from "react";
import SecondProductCard from "../reusableComponents/SecondProductCard";
import LoadingSkeletoTopSellingProduct from "../loadingdata/LoadingSkeletoTopSellingProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SubHeading from "../reusableComponents/SubHeading";
import { useGlobalJewelleryContext } from "@/context/JewelleryProvider";

const SpecialProduct: React.FC = () => {
  const{data,error,isError,isLoading}=useGlobalJewelleryContext();


  if (isError) return <div>An error occurred: </div>;

  const specialProductData = data?.jewelleryList
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
            {data?.jewelleryList
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
