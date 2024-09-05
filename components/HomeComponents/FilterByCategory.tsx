"use client";
import React from "react";
import SubHeading from "../reusableComponents/SubHeading";
import Image from "next/image";
import Link from "next/link";
import { JewelleryItem } from "@/utils/interface";
import { LoadingSkeleton } from "../loadingdata/LoadingSkeleton";
import { useGlobalJewelleryContext } from "@/context/JewelleryProvider";

const FilterByCategory = () => {
  const { data, error, isError, isLoading } = useGlobalJewelleryContext();
  // console.log("🚀 ~ file: FilterByCategory.tsx:12 ~ data:", data?.totalItems);

  // Extract unique categories
  const uniqueCategories = Array.from(
    new Set(
      data?.jewelleryList?.map((item: JewelleryItem) => item.category) || []
    )
  );

  // Get the first product in each category
  const firstProductInEachCategory = data?.jewelleryList?.reduce(
    (acc: Record<string, JewelleryItem>, item: JewelleryItem) => {
      if (!acc[item.category]) {
        acc[item.category] = item;
      }
      return acc;
    },
    {}
  );

  // Count the number of products by category
  const productsByCategory = data?.jewelleryList?.reduce(
    (acc: Record<string, number>, item: JewelleryItem) => {
      if (acc[item.category]) {
        acc[item.category]++;
      } else {
        acc[item.category] = 1;
      }
      return acc;
    },
    {}
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <SubHeading sub="Shop by Category" />
      <div>
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-6 pt-8">
            {/* Display first product in each category */}
            {firstProductInEachCategory &&
              Object.entries(firstProductInEachCategory).map(
                ([category, product]) => (
                  <div
                    key={product._id}
                    className="text-center md:bg-white rounded-lg shadow-lg md:shadow-gray-100 p-4 transform transition-transform hover:scale-105"
                  >
                    <Link href={`/collection/category/${product.category}`}>
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={150}
                        height={150}
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-full cursor-pointer w-36 h-36 mx-auto"
                      />
                    </Link>
                    <h2 className="mt-4 text-xl font-semibold text-gray-800">
                      {category}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {productsByCategory && productsByCategory[category]}{" "}
                      products
                    </p>
                  </div>
                )
              )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterByCategory;
