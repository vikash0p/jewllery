"use client";
import { getJewelleryData } from "@/utils/FetchDataFromBackend";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { JewelleryItem } from "@/utils/interface";
import LoadingData from "../reusableComponents/LoadingData";
import ProductCard from "../reusableComponents/ProductCard";
import LoadingProductCollection from "../loadingdata/LoadingProductCollection";

const ProductCollection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;
  const [currentJewellery, setCurrentJewellery] = useState<JewelleryItem[]>([]);

  const { isLoading, isError, data, error } = useQuery<JewelleryItem[]>({
    queryKey: ["jewellery"],
    queryFn: getJewelleryData,
  });

  useEffect(() => {
    if (data) {
      const startIndex = (currentPage - 1) * postsPerPage;
      const endIndex = startIndex + postsPerPage;
      setCurrentJewellery(data.slice(startIndex, endIndex));
    }
  }, [data, currentPage]);

  const PrevClickHandlerFunction = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const NextClickHandlerFunction = () => {
    if (data && currentPage < Math.ceil(data.length / postsPerPage)) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // if (isLoading) return <LoadingData />;

  if (isError) return <div>An error has occurred: {error.message}</div>;

  return (
    <div>
      {isLoading ? (
        <LoadingProductCollection />
      ) : (
        <div>
          <div className="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-10">
            {currentJewellery.map((value: JewelleryItem) => (
              <ProductCard value={value} key={value._id} />
            ))}
          </div>

          <div className="space-x-10 m-auto text-center flex flex-row items-center justify-center">
            <button
              type="button"
              className="bg-orange-500 px-8 py-2"
              onClick={PrevClickHandlerFunction}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <h5>{currentPage} </h5>
            <button
              type="button"
              className="bg-orange-500 px-8 py-2"
              onClick={NextClickHandlerFunction}
              disabled={
                data && currentPage === Math.ceil(data.length / postsPerPage)
              }
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCollection;
