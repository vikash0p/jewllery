'use client'
import { features } from '@/utils/data';
import React from 'react'

const Features = () => {
  return (
    <div className="py-16 m-auto max-w-6xl ">
      <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-center items-center  ">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-4 bg-gray-100 px-10 py-8">
            <div className='text-3xl text-orange-400'>{feature.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{feature.heading}</h3>
              <p className="text-base text-gray-600">{feature.subHeading}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features
