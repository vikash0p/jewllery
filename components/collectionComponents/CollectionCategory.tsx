"use client";
import { useGlobalFilterDataContext } from "@/context/JewelleryFilterDataProvider";
import React, { useState } from "react";

const CollectionCategory = ({ cat }: { cat: string[] }) => {
  const { hadleFilterCategoryFunction } = useGlobalFilterDataContext();
  // State to keep track of the active category index
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number, category: string) => {
    setActiveIndex(index); // Update active index
    hadleFilterCategoryFunction(category);
  };

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
            activeIndex === index ? "text-orange-400 font-semibold underline" : "hover:text-orange-400"
          }`}
        >
          {category}
        </button>
      ))}
    </>
  );
};

export default CollectionCategory;
