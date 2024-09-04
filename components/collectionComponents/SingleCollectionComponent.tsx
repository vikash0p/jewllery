"use client";
import React, { useState } from "react";
import { JewelleryItem } from "@/utils/interface";
import { useQuery } from "@tanstack/react-query";
import { getSingleJewelleryData } from "@/utils/FetchDataFromBackend";
import Image from "next/image";
import LoadingSingleCollectionComponent from "../loadingdata/LoadingSingleCollectionComponent";
import { SingleCollectionComponentProps } from "./interface";
import { toastError, toastInfo, toastSuccess } from "@/utils/React-toastify";
import { useGlobalCartContext } from "@/context/Global/GlobalCartContext";


const SingleCollectionComponent: React.FC<SingleCollectionComponentProps> = ({id}) => {

  const { isLoading, isError, data, error } = useQuery<JewelleryItem, Error>({
    queryKey: ["jewellery", id],
    queryFn: () => getSingleJewelleryData(id),
  });
  const{dispatch}=useGlobalCartContext();

  const [productSize,setProductSize]=useState<string>("");

  console.log("🚀 ~ file: SingleCollectionComponent.tsx:19 ~ productSize:", productSize);

  const cartHandler=(data:JewelleryItem)=>{
    if (productSize === "") {
      toastInfo("Please Select the size!");
    }else{
      dispatch({type:'ADD_ITEM',payload:{
        id:data._id,
        name:data.name,
        price:data.price,
        imageUrl:data.imageUrl,
        size:productSize,
        quantity:1,

      }})
      toastSuccess("Add to cart successfully!");

    }

  }
  if (isLoading) {
    return <LoadingSingleCollectionComponent />;
  }

  if (isError) {
    return <div className="centerdiv">Error: {error?.message || "An error occurred"}</div>;
  }

  if (!data) {
    return <div className="centerdiv">No data available</div>;
  }

  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col -mx-4 md:flex-row">
          <div className="px-4 md:flex-1">
            <div className="relative h-[460px] bg-gray-300 mb-4 rounded-lg">
              <Image
                className="object-cover w-full h-full"
                src={data.imageUrl}
                alt={data.description || "Jewellery Image"}
                fill
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw"
              />
            </div>
            <div className="flex pt-8 mb-4 -mx-2">
              <div className="w-1/2 px-2">
                <button
                  type="button"
                  onClick={() => cartHandler(data)}
                  className={`w-full px-4 py-2 font-bold  ${
                    data.inStock === true
                      ? "bg-primary hover:bg-hoverColor"
                      : "bg-red-700 cursor-not-allowed"
                  }`}
                  disabled={data.inStock===false}
                >
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full px-4 py-2 font-bold bg-primary hover:bg-hoverColor">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="px-4 md:flex-1">
            <h2 className="mb-2 text-2xl font-bold text-gray-800">
              {data.name}
            </h2>
            <p className="mb-4 text-gray-600">{data.description}</p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700">Price:</span>
                <span className="text-gray-600">${data.price}</span>
              </div>
              <div>
                <span className="font-bold text-gray-700">Availability:</span>
                <span className="text-gray-600">In Stock</span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700">Materials:</span>
              <div className="flex items-center gap-4 mt-2">
                {data.materials.map((mat) => (
                  <div key={mat}>
                    <h5>{mat}</h5>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700">Select Size:</span>
              <div className="flex items-center mt-2">
                {data.sizes.map((size, index) => (
                  <button
                    type="button"
                    onClick={() => {
                      setProductSize(size);
                    }}
                    key={size}
                    className={`px-4 py-2 mr-2 font-bold  rounded-full  ${
                      productSize === size
                        ? "bg-black text-white hover:bg-black"
                        : "bg-primary hover:bg-hoverColor "
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-700">
                Product Description:
              </span>
              <p className="mt-2 text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                ante justo. Integer euismod libero id mauris malesuada
                tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis
                dapibus augue vel ipsum pretium, et venenatis sem blandit.
                Quisque ut erat vitae nisi ultrices placerat non eget velit.
                Integer ornare mi sed ipsum lacinia, non sagittis mauris
                blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt
                mi consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCollectionComponent;
