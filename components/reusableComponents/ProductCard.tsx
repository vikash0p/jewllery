import { JewelleryItem } from '@/utils/interface'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Review from './Review';

const ProductCard = ({value}:{value:JewelleryItem}) => {
     const discountedPrice = value.price - value.price * (20 / 100);
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative w-full h-48">
        <Image
          className="w-full h-48 object-cover"
          src={value.imageUrl}
          alt="Ruby Eternity Band"
          fill
          priority
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800">{value.name}</h2>
        <p className="text-gray-600 mt-2">
          {value.description.slice(0, 50)}...
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className='space-x-4'>
            <span className=" text-gray-700 font-bold  ">
              ${discountedPrice.toFixed(2)}{" "}
            </span>
            <span className="line-through text-gray-500">${value.price}</span>
          </div>
          {value.inStock === true ? (
            <span className="bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded">
              In Stock
            </span>
          ) : (
            <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
              Out of Stock
            </span>
          )}
        </div>
        <div className="mt-4 flex items-center gap-4">
          <Review star={value.rating} /> {value.reviews} reviews
          {/* {value.rating} */}
        </div>
        <div className="mt-4">
          <button className="w-full bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard
