"use client";
import { JewelleryItem } from "@/utils/interface";
import ProductCard from "../reusableComponents/ProductCard";
import LoadingProductCollection from "../loadingdata/LoadingProductCollection";
import { useGlobalJewelleryPaginationContext } from "@/context/JewelleryPaginationProvider";
import { PaginationCollectionpage } from "./PaginationCollectionpage";
import { IoGridSharp, IoReorderThreeOutline } from "react-icons/io5";
import CollectionSearchBar from "./CollectionSearchBar";
import CollectionDropDwonMenu from "./CollectionDropDwonMenu";
import { useState } from "react";
import { useGlobalFilterDataContext } from "@/context/JewelleryFilterDataProvider";
import ListViewCard from "./ListViewCard";
import ListViewCardSkeleton from "../loadingdata/ListViewCardSkeleton";

const ProductCollection = () => {
  const { isLoading, isError, data, error } =
    useGlobalJewelleryPaginationContext();

  const { filter_Products, Grid_View, setGridView, setListView } =
    useGlobalFilterDataContext();

  const totalJewelleryData = data?.jewelleryList;

  const [jewelleryData, setJewelleryData] = useState<
    JewelleryItem[] | undefined
  >(data?.jewelleryList);
  // console.log("🚀 ~ file: ProductCollection.tsx:18 ~ jewelleryData:", jewelleryData);

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
    <div className="">
      <div className="container m-auto  py-10 flex ">
        <div className="basis-1/4">
          <h5 className="font-semibold">{data?.totalItems} Total Products</h5>
        </div>
        <div className="basis-3/4 flex flex-row gap-2 justify-between items-start px-10">
          <div className="flex gap-4 cursor-pointer">
            <IoGridSharp
              size={30}
              className={`text-orange-400 ${
                Grid_View === true ? "text-orange-700" : ""
              }`}
              onClick={setGridView}
            />
            <IoReorderThreeOutline
              size={30}
              className={`bg-orange-400 text-white ${
                Grid_View === false ? "bg-orange-700" : ""
              }`}
              onClick={setListView}
            />
          </div>
          <div className="">
            <CollectionSearchBar />
          </div>
          <div className="">
            <CollectionDropDwonMenu />
          </div>
        </div>
      </div>
      {/*all product  */}
      <div className="container m-auto flex flex-row h-full py-10">
        <div className="basis-1/4 h-full border  min-h-screen bg-orange-300 border-red-700"></div>
        <div className="basis-3/4">
          {/* Grid view */}
          <div>
            {Grid_View === true &&
              (isLoading ? (
                <LoadingProductCollection />
              ) : (
                <div>
                  {filter_Products && filter_Products.length > 0 ? (
                    <div>
                      <div className="container grid grid-cols-1 gap-5 pb-10 m-auto md:grid-cols-2 lg:grid-cols-3">
                        {filter_Products?.map((value: JewelleryItem) => (
                          <ProductCard value={value} key={value._id} />
                        ))}
                      </div>

                      {totalPages > 1 && <PaginationCollectionpage />}
                    </div>
                  ) : (
                    <div className="w-full min-h-screen flex flex-col justify-center items-center">
                      <h5 className="text-2xl md:text-3xl ">
                        Product Not found!{" "}
                      </h5>
                    </div>
                  )}
                </div>
              ))}
          </div>
          {/* list view */}
          <div>
            <div>
              {Grid_View === false &&
                (isLoading ? (
                  <ListViewCardSkeleton />
                ) : (
                  <div>
                    {filter_Products && filter_Products.length > 0 ? (
                      <div>
                        <div className="container grid grid-cols-1 gap-5 pb-10 m-auto  ">
                          {filter_Products?.map((value: JewelleryItem) => (
                            <ListViewCard value={value} key={value._id} />
                          ))}
                        </div>

                        {totalPages > 1 && <PaginationCollectionpage />}
                      </div>
                    ) : (
                      <div className="w-full min-h-screen flex flex-col justify-center items-center">
                        <h5 className="text-2xl md:text-3xl ">
                          Product Not found!
                        </h5>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCollection;
