'use client'
import { blogPosts } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SubHeading from '../reusableComponents/SubHeading'

const HomeLeatestBlog = () => {
  return (
    <div>
        <SubHeading sub='Latest Blog' />
      <div className="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 py-10 ">
        {blogPosts.slice(0, 3).map((value) => {
          return (
            <div key={value.id}>
              <div className="relative max-w-sm md:max-w-md h-96 md:h-[450px]">
                <Image
                  src={value.image}
                  alt={value.content}
                  fill
                  className="w-full h-full object-cover hover:scale-110 transition-transform cursor-pointer object-center"
                />
                <div className='absolute top-5 left-2 bg-orange-400 text-white px-3 py-1'>{value.date} </div>
              </div>
              <div className="py-5 ">
                <h2 className="text-xl">{value.title} </h2>
                {/* <p>{value.content} </p> */}
                <p className="text-gray-600">{value.summary} </p>
                <Link href={"/"} className="text-orange-500 underline">
                  READ MORE
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeLeatestBlog
