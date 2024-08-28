'use client'
import Image from 'next/image';
import React from 'react'
function SubHeading({sub}:{sub:string}) {
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center pt-4">{sub}</h2>
      <Image src={'/divider.png'} alt='dividerImage' width={300} height={100} className=' m-auto' />
    </div>
  );
}

export default SubHeading
