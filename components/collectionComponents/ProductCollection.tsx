"use client";
import { JewelleryItem } from "@/utils/interface";
import ProductCard from "../reusableComponents/ProductCard";
import LoadingProductCollection from "../loadingdata/LoadingProductCollection";
import { useGlobalJewelleryPaginationContext } from "@/context/JewelleryPaginationProvider";
import { PaginationCollectionpage } from "./PaginationCollectionpage";

const ProductCollection = () => {
  const { isLoading, isError, data, error } =
    useGlobalJewelleryPaginationContext();

  if (isError) {
    return (
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        An error has occurred: {String(error)}
      </div>
    );
  }

  // Safely access totalPages only if data is defined
  const totalPages = data?.totalPages || 1;

  return (
    <div className="container m-auto flex flex-row h-full py-10">
      <div className="basis-1/4 h-full border bg-gray-100 border-red-700"></div>
      <div className="basis-3/4">
        {isLoading ? (
          <LoadingProductCollection />
        ) : (
          <div>
            <div className="container grid grid-cols-1 gap-5 pb-10 m-auto md:grid-cols-2 lg:grid-cols-3">
              {data?.jewelleryList?.map((value: JewelleryItem) => (
                <ProductCard value={value} key={value._id} />
              ))}
            </div>

            {totalPages > 1 && (
              <PaginationCollectionpage  />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCollection;
