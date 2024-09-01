"use client";
import React from "react";
import { useGlobalFilterDataContext } from "@/context/JewelleryFilterDataProvider";

// Define the type for the dropdown options
type Option = {
  value: string;
  label: string;
};

const CollectionDropdownMenu: React.FC = () => {
  const { searchTerm, handleSelectionChange } = useGlobalFilterDataContext();

  // Array of options for the dropdown
  const options: Option[] = [
    { value: "", label: "Select a data..." },
    { value: "PriceLowToHigh", label: "Price: Low To High" },
    { value: "PriceHighToLow", label: "Price: High To Low" },
    { value: "Ascending", label: "Ascending A to Z" },
    { value: "Descending", label: "Descending Z to A" },
  ];

  // Ensure event is typed correctly
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleSelectionChange(event);
  };

  return (
    <form aria-label="Filter jewellery collection">
      <label
        htmlFor="dropJewellery"
        className="block text-sm font-medium text-gray-700 sr-only"
      >
        Filter by Category
      </label>
      <select
        id="dropJewellery"
        name="dropJewellery"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
        value={searchTerm}
        onChange={handleChange}
        aria-describedby="dropJewelleryDesc"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.value === ""}
          >
            {option.label}
          </option>
        ))}
      </select>
      <p id="dropJewelleryDesc" className="sr-only">
        Choose an option from the dropdown menu to filter and sort the jewellery
        collection.
      </p>
    </form>
  );
};

export default CollectionDropdownMenu;
