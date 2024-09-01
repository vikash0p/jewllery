"use client";
import React from "react";
import { JewelleryItem } from "@/utils/interface";
import Image from "next/image";
import Link from "next/link";
import Review from "../reusableComponents/Review";

const ListViewCard = ({ value }: { value: JewelleryItem }) => {
  const discountedPrice = value.price - value.price * (20 / 100);

  return (
    <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <Link href={`/collection/${value._id}`} className="flex-shrink-0">
        <div className="relative w-48 h-48">
          <Image
            className="object-cover rounded-l-lg"
            src={value.imageUrl}
            alt={value.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <div className="flex flex-col justify-between p-4 leading-normal w-full">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {value.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {value.description.slice(0, 100)}...
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="space-x-4">
            <span className="font-bold text-gray-700">
              ${discountedPrice.toFixed(2)}
            </span>
            <span className="text-gray-500 line-through">${value.price}</span>
          </div>
          {value.inStock ? (
            <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-200 rounded">
              In Stock
            </span>
          ) : (
            <span className="px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded">
              Out of Stock
            </span>
          )}
        </div>
        <div className="flex items-center gap-4 mt-4">
          <Review star={value.rating} /> {value.reviews} reviews
        </div>
        <div className="mt-4 ">
          <button className=" px-4 py-2  text-white bg-orange-400 rounded hover:bg-orange-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListViewCard;
