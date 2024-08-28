'use client'
import Image from 'next/image'
import React from 'react'

const BreadcumbHeading = ({heading,subHeading}:{heading:string,subHeading:string}) => {
  return (
    <div className="relative w-full h-56">
      <Image
        src={"/breadcumb_6.jpg"}
        alt="breadCumbImage"
        className="object-cover w-full h-full"
        fill
        priority
      />
      <div className="absolute flex flex-col items-center justify-center w-full h-full gap-4 ">
        <h5 className="text-3xl ">{heading} </h5>
        <p>{subHeading} </p>
      </div>
    </div>
  );
}

export default BreadcumbHeading
