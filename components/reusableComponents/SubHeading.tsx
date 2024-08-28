'use client'
import Image from 'next/image';
import React from 'react'
function SubHeading({sub}:{sub:string}) {
  return (
    <div>
      <h2 className="pt-4 text-2xl font-semibold text-center lg:text-4xl">
        {sub}
      </h2>
      <div className="relative m-auto w-60 md:w-80 h-14 md:h-20">
        <Image
          src={"/divider.png"}
          alt="dividerImage"
          fill
          sizes="(min-width: 780px) 320px, 240px"
          className="object-cover w-full h-full m-auto "
        />
      </div>
    </div>
  );
}

export default SubHeading
