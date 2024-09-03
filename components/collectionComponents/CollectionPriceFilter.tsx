import { useGlobalFilterDataContext } from "@/context/JewelleryFilterDataProvider";
import React, { useState, useEffect } from "react";

const CollectionPriceFilter: React.FC = () => {
  const {filters: { range }, handleSearch, handlePriceSearch, all_Products,} = useGlobalFilterDataContext();
  // console.log("🚀 ~ file: CollectionPriceFilter.tsx:6 ~ range:", range);

  // Ensure all_Products is not undefined and has price property
  const prices = all_Products?.map((product) => product.price) || [];

  // Calculate max and min prices safely
  const maxPrice: number = prices.length > 0 ? Number(Math.max(...prices)) : 100;
  const minPrice: number = prices.length > 0 ? Number(Math.min(...prices)) : 10;


  // // Adjust the range if it's outside of the min and max price
  // const [currentRange, setCurrentRange] = useState<number>(range);

  // useEffect(() => {
  //   if (range < minPrice) setCurrentRange(minPrice);
  //   else if (range > maxPrice) setCurrentRange(maxPrice);
  //   else setCurrentRange(range);
  // }, [range, minPrice, maxPrice]);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const newValue = Number(event.target.value);
  //   setCurrentRange(newValue);
  //   handleSearch(newValue); // Assuming handleSearch expects the new value
  // };

  return (
    <div className="w-full ">
      <label htmlFor="price-slider" className="text-xl font-bold">
         Price Range
      </label>
      <input
        type="range"
        id="price-slider"
        name="range"
        min={minPrice}
        max={maxPrice}
        step={100}
        value={range}
        onChange={handlePriceSearch}
        className="w-3/4 h-2 accent-black rounded-lg appearance-none cursor-pointer bg-primary"
        aria-valuemin={minPrice}
        aria-valuemax={maxPrice}
        aria-valuenow={range}
        aria-label="Price slider"
        role="slider"
      />
      <div className="w-3/4 flex justify-between mt-2 text-gray-700">
        <span aria-hidden="true">${minPrice}</span>
        <span aria-hidden="true">${range}</span>
        <span aria-hidden="true">${maxPrice}</span>
      </div>
    </div>
  );
};

export default CollectionPriceFilter;
