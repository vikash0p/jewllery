"use client";
import React from "react";
import { useGlobalFilterDataContext } from "@/context/JewelleryFilterDataProvider";
import { JewelleryItem } from "@/utils/interface";
import CollectionCategory from "./CollectionCategory";
import CollectionRating from "./CollectionRating";

const CollectionFilterData: React.FC = () => {
  const { all_Products } = useGlobalFilterDataContext();

  const FilterCollection = (
    products: JewelleryItem[] | undefined,
    key: keyof JewelleryItem
  ): string[] => {
    if (!products) return [];

    const newFilterData = Array.from( new Set(products.map((value) => value[key] as string)));
    return newFilterData;
  };

  const uniqueCategory = all_Products
    ? FilterCollection(all_Products, "category")
    : [];

  return (
    <div className="space-y-8">
      <div>
        <CollectionCategory cat={uniqueCategory} />
      </div>
      <div>
        <CollectionRating />
      </div>
    </div>
  );
};

export default CollectionFilterData;
