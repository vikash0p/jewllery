"use client";
import React from "react";
import { JewelleryItem } from "@/utils/interface";
import { useQuery } from "@tanstack/react-query";
import { getSingleJewelleryData } from "@/utils/FetchDataFromBackend";
import Image from "next/image";

interface SingleCollectionComponentProps {
  id: string;
}

const SingleCollectionComponent: React.FC<SingleCollectionComponentProps> = ({
  id,
}) => {
  const { isLoading, isError, data, error } = useQuery<JewelleryItem, Error>({
    queryKey: ["jewellery", id],
    queryFn: () => getSingleJewelleryData(id),
  });

  if (isLoading) {
    return (
      <div className="py-20 bg-gray-100">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col -mx-4 md:flex-row animate-pulse">
            <div className="px-4 md:flex-1">
              <div className="h-[460px] bg-gray-300 mb-4 rounded-lg"></div>
              <div className="flex mb-4 -mx-2">
                <div className="w-1/2 h-10 px-2 bg-gray-300 rounded-full"></div>
                <div className="w-1/2 h-10 px-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>
            <div className="px-4 md:flex-1">
              <div className="h-8 mb-4 bg-gray-300 rounded"></div>
              <div className="h-6 mb-4 bg-gray-300 rounded"></div>
              <div className="flex mb-4">
                <div className="w-1/3 h-6 mr-4 bg-gray-300 rounded"></div>
                <div className="w-1/4 h-6 bg-gray-300 rounded"></div>
              </div>

              <div className="h-6 mb-4 bg-gray-300 rounded"></div>
              <div className="h-20 bg-gray-300 rounded"></div>
              
              <div className="h-40 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return <div>Error: {error?.message || "An error occurred"}</div>;
  }

  if (!data) return <></>;

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
                <button className="w-full px-4 py-2 font-bold text-white bg-gray-900 rounded-full hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full px-4 py-2 font-bold text-gray-800 bg-gray-200 rounded-full hover:bg-gray-300">
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
                {data?.sizes.map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 mr-2 font-bold text-gray-700 bg-gray-300 rounded-full hover:bg-gray-400"
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
