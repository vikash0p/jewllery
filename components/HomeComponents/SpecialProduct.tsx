"use client";
import React, { useState, useEffect } from "react";
import SecondProductCard from "../reusableComponents/SecondProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import SubHeading from "../reusableComponents/SubHeading";
import { useGlobalJewelleryContext } from "@/context/JewelleryProvider";
import LoadingSpecialProduct from "../loadingdata/LoadingSpecialProduct";
import { useWindowWidth } from "./CreateCustomHook";

const SpecialProduct: React.FC = () => {
  const { data, error, isError, isLoading } = useGlobalJewelleryContext();
  const [mounted, setMounted] = useState(false);
  const windowWidth = useWindowWidth();

  // Set the component as mounted when it renders on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine number of loading skeletons based on screen size
  const getSkeletonCount = () => {
    if (windowWidth >= 1536) return 5; // 2xl screen
    if (windowWidth >= 1280) return 5; // xl screen
    if (windowWidth >= 1024) return 4; // lg screen
    if (windowWidth >= 768) return 3; // md screen
    return 1; // small screens
  };

  const skeletonCount = mounted ? getSkeletonCount() : 1; // Default to 1 during SSR

  if (isError) return <div>An error occurred: {String(error)}</div>;

  const specialProductData = data?.jewelleryList
    ?.filter((value) => value.rating >= 4.8)
    .map((value) => (
      <SwiperSlide key={value._id} className="w-full h-full">
        <SecondProductCard value={value} />
      </SwiperSlide>
    ));

  return (
    <div>
      <div className="py-10">
        <SubHeading sub="Special Products" />
      </div>
      {isLoading ? (
        <div className="container grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {Array.from({ length: skeletonCount }).map((_, index) => (
            <LoadingSpecialProduct key={index} />
          ))}
        </div>
      ) : (
        <div className="container m-auto">
          <Swiper
            navigation={true}
            spaceBetween={20}
            modules={[Navigation, Pagination]}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            breakpoints={{
              280: {
                slidesPerView: 1,
              },
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
            {specialProductData}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default SpecialProduct;
