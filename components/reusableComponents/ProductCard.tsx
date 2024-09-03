'use client'
import { JewelleryItem } from '@/utils/interface'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Review from './Review';
import { useGlobalCartContext } from '@/context/Global/GlobalCartContext';

const ProductCard = ({value}:{value:JewelleryItem}) => {
  const {dispatch}=useGlobalCartContext();
     const discountedPrice = value.price - value.price * (20 / 100);
  return (
    <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg ">
      <Link href={`/collection/${value._id}`}>
        <div className="relative w-full h-48">
          <Image
            className="object-cover w-full h-48"
            src={value.imageUrl}
            alt="Ruby Eternity Band"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800">{value.name}</h2>
          <p className="mt-2 text-gray-600">
            {value.description.slice(0, 50)}...
          </p>
          <p className="mt-2 ">
            Category: <span className="text-black">{value.category}</span>
          </p>
          <div className="flex items-center justify-between mt-4">
            <div className="space-x-4">
              <span className="font-bold text-gray-700 ">${value.price} </span>
              {/* <span className="text-gray-500 line-through">${value.price}</span> */}
            </div>
            {value.inStock === true ? (
              <span className="px-2 py-1 text-xs font-semibold text-black bg-green-200 ">
                In Stock
              </span>
            ) : (
              <span className="px-2 py-1 text-xs font-semibold  bg-red-400 ">
                Out of Stock
              </span>
            )}
          </div>
          <div className="flex items-center gap-4 mt-4">
            <Review star={value.rating} /> {value.reviews} reviews
            {/* {value.rating} */}
          </div>
        </div>
      </Link>
      <div className="my-4 px-4 w-full ">
        <Link href={`/collection/${value._id}`} className='w-full px-4 bg-primary block text-center py-2 font-semibold' >View Collection</Link>

      </div>
    </div>
  );
}

export default ProductCard
