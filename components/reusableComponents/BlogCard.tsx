'use client';
import React from 'react';
import { BlogPost } from '@/utils/interface';
import Link from 'next/link';
import Image from 'next/image';

const BlogCard = ({ value }: { value: BlogPost }) => {
  return (
    <div key={value.blogId}>
      <div className="relative max-w-sm md:max-w-md h-96 md:h-[450px]">
        <Link href={value.blogId}>
          <Image
            src={value.image}
            alt={value.title}
            fill
            className="w-full h-full object-cover hover:scale-110 transition-transform cursor-pointer object-center"
            priority
          />
        </Link>

        <div className="absolute top-5 left-2 bg-orange-400 text-white px-3 py-1">
          {value.date}
        </div>
      </div>
      <div className="py-5">
        <h2 className="text-xl">{value.title}</h2>
        <p className="text-gray-600">{value.summary}</p>
        <Link href="/" className="text-orange-500 underline">
          READ MORE
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
