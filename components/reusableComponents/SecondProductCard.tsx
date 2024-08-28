'use client '
import React from 'react'
import { JewelleryItem } from '@/utils/interface';
import Image from 'next/image';
import Review from './Review';

const SecondProductCard = ({value}:{value:JewelleryItem}) => {
      const discountedPrice = value.price - value.price * (20 / 100);
  return (
    <div key={value._id} className='flex flex-col items-center justify-center'>
      <div className="relative w-56 h-64">
        <Image
          src={value.imageUrl}
          className="w-full h-full object-cover"
          alt={value.description}
          fill
        />
      </div>
      <div className="py-4 space-y-2">
        <Review star={value.rating} />
        <h3 className="text-sm">{value.name}</h3>
        <div className="flex gap-10">
          <p className="text-sm">$ {value.price} </p>
          <p className="line-through  text-gray-500 text-sm ">
            $ {discountedPrice.toFixed(2)}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SecondProductCard
