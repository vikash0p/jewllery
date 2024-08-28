"use client";
import React from "react";
import SubHeading from "../reusableComponents/SubHeading";
import { useQuery } from "@tanstack/react-query";
import { getJewelleryData } from "@/utils/FetchDataFromBackend";
import Image from "next/image";
import Link from "next/link";
import { JewelleryItem } from "@/utils/interface";
import { LoadingSkeleton } from "../loadingdata/LoadingSkeleton";

const FilterByCategory = () => {
  const { isLoading, isError, data, error } = useQuery<JewelleryItem[]>({
    queryKey: ["jewellery"],
    queryFn: getJewelleryData,
  });


  // Step 1: Extract unique categories
  const uniqueCategories = Array.from(
    new Set(data?.map((item: JewelleryItem) => item.category) || [])
  );

  // Step 2: Get the first product in each category
  const firstProductInEachCategory = data?.reduce(
    (acc: Record<string, JewelleryItem>, item: JewelleryItem) => {
      if (!acc[item.category]) {
        acc[item.category] = item;
      }
      return acc;
    },
    {}
  );

  // Step 3: Count the number of products by category
  const productsByCategory = data?.reduce(
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
          <div className="max-w-7xl m-auto flex flex-wrap gap-8 justify-between pt-8">
            {/* Display first product in each category */}
            {firstProductInEachCategory &&
              Object.entries(firstProductInEachCategory).map(
                ([category, product]) => (
                  <div key={product._id} className="text-center">
                    <Link href={`/collection/${product.category}`}>
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={100}
                        height={100}
                        priority
                        className="object-cover w-36 h-36 rounded-full cursor-pointer"
                      />
                    </Link>
                    <h2 className="text-lg font-bold mt-2">{category}</h2>
                  </div>
                )
              )}
          </div>
        )}
        <div className="max-w-7xl m-auto flex flex-wrap gap-8 justify-between mt-4">
          {
            productsByCategory &&
            Object.entries(productsByCategory).map(([category, count]) => (
              <div key={category} className="text-center px-7">
                {count} products
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default FilterByCategory;
