"use client";
import React from "react";

const CollectionCategory = ({ cat }: { cat: string[] }) => {
  return (
    <>
    <h2 className="text-xl font-bold">Category</h2>
      {cat.map((category, index) => (
        <button
          type="button"
          key={index}
          onClick={() => alert(`Selected category: ${category}`)} // Example action
          aria-label={`Select ${category} category`}
          className="block hover:text-orange-400 py-1"
        >
          {category}
        </button>
      ))}
    </>
  );
};

export default CollectionCategory;
