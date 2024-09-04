"use client ";
import React from "react";
import { JewelleryItem } from "@/utils/interface";
import Review from "./Review";
import ImageContainer from "./ImageContainer";
import Link from "next/link";

const SecondProductCard = ({ value }: { value: JewelleryItem }) => {
  const discountedPrice = value.price - value.price * (20 / 100);
  return (
    <div key={value._id} className="flex flex-col items-center justify-center">
      <Link href={`/collection/${value._id}`} className="w-full">
        <div className="relative max-w-sm md:w-56 h-64">
          <ImageContainer
            src={value.imageUrl}
            className="object-cover w-full h-full"
            alt={value.description}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="py-4 space-y-2">
          <Review star={value.rating} />
          <h3 className="text-sm">{value.name}</h3>
          <div className="flex gap-10">
            <p className="text-sm">$ {value.price} </p>
            <p className="text-sm text-gray-500 line-through ">
              $ {discountedPrice.toFixed(2)}{" "}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SecondProductCard;
