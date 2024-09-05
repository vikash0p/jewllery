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
import CollectionFilterData from "./CollectionFilterData";
import { SideBar } from "../reusableComponents/SideBar";

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
    <div className="overflow-hidden">
      <div className="container m-auto py-2 px-2 md:px-10 md:py-10 flex flex-col lg:flex-row  w-full ">
        <div className="w-full lg:w-1/4">
          <h5 className="font-semibold hidden lg:block ">
            {data?.totalItems} Total Products
          </h5>
        </div>
        <div className="w-full  lg:w-3/4 flex flex-row md:gap-2 px-0 justify-between  items-center  py-3  md:py-0 lg:px-10 border-2 border-red-800 bg-green-600 ">
          <div className="lg:hidden">
            <SideBar />
          </div>
          <div className=" gap-4 cursor-pointer hidden lg:flex">
            <IoGridSharp
              size={30}
              className={`text-orange-400 ${
                Grid_View === true ? "text-orange-700" : ""
              }`}
              onClick={setGridView}
            />
            <IoReorderThreeOutline
              size={30}
              className={`bg-primary text-white ${
                Grid_View === false ? "bg-hoverColor" : ""
              }`}
              onClick={setListView}
            />
          </div>
          <div className="">
            <CollectionSearchBar />
          </div>
          <div className="hidden lg:block">
            <CollectionDropDwonMenu />
          </div>
        </div>
      </div>
      {/*all product  */}
      <div className="w-full md:container m-auto flex flex-col lg:flex-row h-full py-10">
        <div className="basis-1/4   min-h-screen hidden lg:block ">
          <CollectionFilterData />
        </div>
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
                      <div className="w-full md:container grid grid-cols-2 md:gap-5 pb-10 md:m-auto md:grid-cols-2 lg:grid-cols-3 ">
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
