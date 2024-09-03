"use client";
import { useGlobalFilterDataContext } from "@/context/JewelleryFilterDataProvider";
import React from "react";

const CollectionClearFilter = () => {
    const {FilterAllClearCollection}=useGlobalFilterDataContext();
  return (
    <button
      type="button"
      onClick={FilterAllClearCollection}
      className="uppercase px-8 py-2  bg-orange-500  font-semibold  hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors"
      aria-label="Clear all filters"
    >
      clear filters
    </button>
  );
};

export default CollectionClearFilter;
