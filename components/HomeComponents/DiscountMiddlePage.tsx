'use client'
import React from 'react'
import { LinkContainer } from '../reusableComponents';

const DiscountMiddlePage = () => {

  return (
    <div className="discountMiddlePageBackgroundImage w-full h-[550px] mt-10 ">
      <div className="container grid h-full grid-cols-1 m-auto lg:grid-cols-2">
        <div className=""></div>
        <div className="flex flex-col items-start justify-center gap-6 ">
          <h2 className="text-4xl text-orange-400">Flat 40% Discount</h2>
          <h3 className="text-6xl">Gold And Diamond Earrings</h3>
          <p>Designer Jewellery Necklaces-Bracelets-Earings</p>
          <div>
            <LinkContainer
              href="/collection"
              className="px-8 py-2 uppercase bg-primary"
              linkName='SHOP NOW'
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default DiscountMiddlePage
