'use client'
import Image from 'next/image';
import React from 'react'
function SubHeading({sub}:{sub:string}) {
  return (
    <div>
      <h2 className="text-2xl lg:text-4xl font-semibold text-center pt-4">
        {sub}
      </h2>
      <div className="w-60 md:w-80 h-14 md:h-20 relative m-auto">
        <Image
          src={"/divider.png"}
          alt="dividerImage"
          fill
          sizes="(min-width: 780px) 320px, 240px"
          className=" m-auto object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

export default SubHeading
