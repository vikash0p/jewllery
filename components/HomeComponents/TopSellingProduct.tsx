"use client";
import React, { useState } from "react";
import SubHeading from "../reusableComponents/SubHeading";
import Link from "next/link";
import LoadingSkeletoTopSellingProduct from "../loadingdata/LoadingSkeletoTopSellingProduct";
import SecondProductCard from "../reusableComponents/SecondProductCard";
import { useGlobalJewelleryContext } from "@/context/JewelleryProvider";
const TopSellingProduct = () => {
  const { isLoading, isError, data, error } = useGlobalJewelleryContext();

  const [filter, setFilter] = useState<string | null>(null);
  const [index, setIndex] = useState<number>(0);


  if (isError) return <div>An error has occurred: </div>;

  const filteredProducts = data?.jewelleryList?.filter((value) => {
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
      <div className="space-x-10 text-center">
        <button
          className={`bg-primary px-5 py-2 ${
            index === 0 ? "bg-hoverColor  font-semibold" : ""
          }`}
          onClick={() => {
            setFilter("new");
            setIndex(0);
          }}
        >
          New Arrival
        </button>
        <button
          className={`bg-primary px-5 py-2 ${
            index === 1 ? "bg-hoverColor  font-semibold" : ""
          }`}
          onClick={() => {
            setFilter("featured");
            setIndex(1);
          }}
        >
          Featured Product
        </button>
        <button
          className={`bg-primary px-5 py-2 ${
            index === 2 ? "bg-hoverColor  font-semibold " : ""
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
        <div className="container grid grid-cols-1 py-16 m-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-10">
          {Array.from({ length: 10 }).map((_, index) => (
            <LoadingSkeletoTopSellingProduct key={index} />
          ))}
        </div>
      ) : (
        <div className="container grid grid-cols-1 py-16 m-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-10">
          {displayProducts}
        </div>
      )}
      <div className="w-full m-auto text-center">
        <Link
          href={"/collection"}
          className="px-8 py-3 font-semibold text-center bg-primary "
        >
          Explore product        </Link>
      </div>
    </div>
  );
};

export default TopSellingProduct;
