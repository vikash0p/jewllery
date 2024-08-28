"use client";
import React, { useState } from "react";
import SubHeading from "../reusableComponents/SubHeading";
import { useQuery } from "@tanstack/react-query";
import { getJewelleryData } from "@/utils/FetchDataFromBackend";
import { JewelleryItem } from "@/utils/interface";
import Link from "next/link";
import LoadingSkeletoTopSellingProduct from "../loadingdata/LoadingSkeletoTopSellingProduct";
import SecondProductCard from "../reusableComponents/SecondProductCard";
const TopSellingProduct = () => {
  const { isLoading, isError, data, error } = useQuery<JewelleryItem[]>({
    queryKey: ["jewellery"],
    queryFn: getJewelleryData,
  });

  const [filter, setFilter] = useState<string | null>(null);
  const [index, setIndex] = useState<number>(0);


  if (isError) return <div>An error has occurred: {error.message}</div>;

  const filteredProducts = data?.filter((value) => {
    if (filter === "new") {
      return value.reviews <= 50;
    } else if (filter === "featured") {
      return value.reviews > 50 && value.reviews <= 100;
    } else if (filter === "best") {
      return value.reviews > 100;
    } else {
      return true; // Show all products if no filter is selected
    }
  });

  const displayProducts = filteredProducts?.slice(0, 10).map((value) => {

    return (
      <SecondProductCard value={value} key={value._id} />
    );
  });

  return (
    <div>
      <div className="py-10">
        <SubHeading sub="Top Selling Products" />
      </div>
      <div className="text-center space-x-10">
        <button
          className={`bg-orange-400 px-5 py-2 ${
            index === 0 ? "bg-orange-600 text-white font-semibold" : ""
          }`}
          onClick={() => {
            setFilter("new");
            setIndex(0);
          }}
        >
          New Arrival
        </button>
        <button
          className={`bg-orange-400 px-5 py-2 ${
            index === 1 ? "bg-orange-600 text-white font-semibold" : ""
          }`}
          onClick={() => {
            setFilter("featured");
            setIndex(1);
          }}
        >
          Featured Product
        </button>
        <button
          className={`bg-orange-400 px-5 py-2 ${
            index === 2 ? "bg-orange-600 text-white font-semibold " : ""
          }`}
          onClick={() => {
            setFilter("best");
            setIndex(2);
          }}
        >
          Best Seller
        </button>
      </div>
      {isLoading ? (
        <div className="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 py-16 gap-y-10">
          {Array.from({ length: 10 }).map((_, index) => (
            <LoadingSkeletoTopSellingProduct key={index} />
          ))}
        </div>
      ) : (
        <div className="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 py-16 gap-y-10">
          {displayProducts}
        </div>
      )}
      <div className="w-full m-auto text-center">
        <Link
          href={"/collection"}
          className="bg-orange-400 px-8 py-2 text-center "
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default TopSellingProduct;
