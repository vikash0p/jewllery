"use client";
import React, { useEffect, useState } from "react";
import { JewelleryItem } from "@/utils/interface";
import ProductCard from "../reusableComponents/ProductCard";
import LoadingProductCollection from "../loadingdata/LoadingProductCollection";
import { useGlobalJewelleryContext } from "@/context/JewelleryProvider";

const ProductCollection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  const { isLoading, isError, data, error } =useGlobalJewelleryContext();
  const [currentJewellery, setCurrentJewellery] = useState<JewelleryItem[]>([]);

  useEffect(() => {
    if (data) {
      const startIndex = (currentPage - 1) * postsPerPage;
      const endIndex = startIndex + postsPerPage;
      setCurrentJewellery(data?.jewelleryList?.slice(startIndex, endIndex));
    }
  }, [data, currentPage]);

  const PrevClickHandlerFunction = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const NextClickHandlerFunction = () => {
    if (data && currentPage < Math.ceil(data?.jewelleryList?.length / postsPerPage)) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // if (isLoading) return <LoadingData />;

  if (isError) return <div>An error has occurred</div>;

  return (
    <div className="container m-auto  flex flex-row h-full py-10">
      <div className="basis-1/4 h-full border bg-gray-100  border-red-700">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quibusdam sapiente iste dignissimos illum incidunt, dolores eveniet sunt animi minus quod architecto velit, voluptas aut praesentium. Esse numquam dolor explicabo architecto possimus perferendis omnis sed earum mollitia facilis sapiente quasi ipsum hic quia minus accusantium voluptatem accusamus, asperiores reiciendis, velit illo officia rem dolore? Voluptatibus tenetur provident adipisci earum quaerat consectetur itaque odit inventore reprehenderit debitis. Repellat, laudantium! Cupiditate placeat amet optio nobis porro, aspernatur sed saepe quisquam, perspiciatis quos magnam. Illum itaque vitae, recusandae quasi nisi facere similique odit consectetur mollitia! Optio facilis sint commodi in saepe hic eveniet.
      </div>
      <div className="basis-3/4">
        {isLoading ? (
          <LoadingProductCollection />
        ) : (
          <div>
            <div className="container grid grid-cols-1 gap-5  pb-10 m-auto md:grid-cols-2 lg:grid-cols-3 ">
              {currentJewellery.map((value: JewelleryItem) => (
                <ProductCard value={value} key={value._id} />
              ))}
            </div>

            <div className="flex flex-row items-center justify-center m-auto space-x-10 text-center">
              <button
                type="button"
                className="px-8 py-2 bg-orange-500"
                onClick={PrevClickHandlerFunction}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              <h5>{currentPage} </h5>
              <button
                type="button"
                className="px-8 py-2 bg-orange-500"
                onClick={NextClickHandlerFunction}
                disabled={
                  data && currentPage === Math.ceil(data?.jewelleryList?.length / postsPerPage)
                }
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCollection;
