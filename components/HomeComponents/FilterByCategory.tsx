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

  // Step 1: Extract unique categories
  const uniqueCategories = Array.from(
    new Set(
      data?.jewelleryList?.map((item: JewelleryItem) => item.category) || []
    )
  );

  // console.log(uniqueCategories);
  // Step 2: Get the first product in each category
  const firstProductInEachCategory = data?.jewelleryList?.reduce(
    (acc: Record<string, JewelleryItem>, item: JewelleryItem) => {
      if (!acc[item.category]) {
        acc[item.category] = item;
      }
      return acc;
    },
    {}
  );
  // console.log(firstProductInEachCategory);

  // Step 3: Count the number of products by category
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

  // Skeleton loading component

  return (
    <div>
      <SubHeading sub="Shop by category" />
      <div>
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <div className="flex flex-wrap justify-between gap-8 pt-8 m-auto max-w-7xl">
            {/* Display first product in each category */}
            {firstProductInEachCategory &&
              Object.entries(firstProductInEachCategory).map(
                ([category, product]) => (
                  <div key={product._id} className="text-center">
                    <Link href={`/collection/category/${product.category}`}>
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={100}
                        height={100}
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-full cursor-pointer w-36 h-36"
                      />
                    </Link>
                    <h2 className="mt-2 text-lg font-bold">{category}</h2>
                  </div>
                )
              )}
          </div>
        )}
        <div className="flex flex-wrap justify-between gap-8 m-auto mt-4 max-w-7xl">
          {productsByCategory &&
            Object.entries(productsByCategory).map(([category, count]) => (
              <div key={category} className="text-center px-7">
                {count} products
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FilterByCategory;
