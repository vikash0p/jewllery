"use client";
import { useGlobalFilterDataContext } from "@/context/JewelleryFilterDataProvider";
import { useGlobalJewelleryPaginationContext } from "@/context/JewelleryPaginationProvider";
import React, { useState } from "react";

const CollectionCategory = ({ cat }: { cat: string[] }) => {
  const { hadleFilterCategoryFunction } = useGlobalFilterDataContext();
  const { isLoading } = useGlobalJewelleryPaginationContext();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number, category: string) => {
    setActiveIndex(index); // Update active index
    hadleFilterCategoryFunction(category);
  };

  if (isLoading) {
    return (
      <>
        <h2 className="text-xl font-bold">Category</h2>
        {/* Skeleton loader */}
        <div className="space-y-2">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="h-4 bg-gray-200 rounded animate-pulse w-1/2"
            ></div>
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <h2 className="text-xl font-bold">Category</h2>
      {cat.map((category, index) => (
        <button
          type="button"
          key={index}
          name="category"
          value={category}
          onClick={() => handleClick(index, category)}
          aria-label={`Select ${category} category`}
          className={`block py-1 ${
            activeIndex === index
              ? " font-semibold underline"
              : "hover:text-orange-600"
          }`}
        >
          {category}
        </button>
      ))}
    </>
  );
};

export default CollectionCategory;
