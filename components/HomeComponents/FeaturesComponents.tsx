'use client'
import { features } from '@/utils/data';
import React from 'react'

const Features = () => {
  return (
    <div className="max-w-6xl py-16 m-auto ">
      <div className="grid items-center justify-center w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center px-10 py-8 space-x-4 bg-gray-100">
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
