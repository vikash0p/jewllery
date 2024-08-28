'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BlogPost } from '@/utils/interface';
const SingleBlogCard = ({blogdata}:{blogdata:BlogPost}) => {
  return (
    <div key={blogdata.blogId}>
      <div className="relative w-full px-4 py-16 m-auto md:w-3/4">
        <div className="relative w-full h-96 lg:h-[700px]">
          <Image
            src={blogdata.image}
            alt={blogdata.title}
            className="object-cover mb-8"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="prose max-w-none">
          <h2 className="text-2xl">
            Author: <span className="text-orange-500">{blogdata.author}</span>
          </h2>
          <p className="text-2xl">{blogdata.summary}</p>
          <p className="text-xl">{blogdata.content}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Sed sit amet feugiat eros, eget eleifend dolor. Proin
            maximus bibendum felis, id fermentum odio vestibulum id.
          </p>
          {/* Additional content can be added here */}
        </div>
      </div>
    </div>
  );
}

export default SingleBlogCard
