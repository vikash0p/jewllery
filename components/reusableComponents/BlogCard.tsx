'use client';
import React from 'react';
import { BlogPost } from '@/utils/interface';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const BlogCard = ({ value }: { value: BlogPost }) => {
  const router = useRouter();
    const pathname = usePathname();
    // console.log("🚀 ~ file: BlogCard.tsx:12 ~ pathname:", pathname);

    const Links=pathname === '/blog' || '/' ? (`/blog/${value.blogId}`) :  (`${value.blogId}`)
  return (
    <div key={value.blogId}>
      <div className="relative max-w-sm md:max-w-md h-96 md:h-[450px]">
          <Image
            src={value.image}
            alt={value.title}
            fill
            className="object-cover object-center w-full h-full transition-transform cursor-pointer hover:scale-110"
            priority
            sizes="(min-width: 1480px) 419px, (min-width: 1040px) 28.57vw, (min-width: 780px) calc(45.83vw - 20px), (min-width: 480px) 384px, calc(92.5vw - 42px)"
          />

        <div className="absolute px-3 py-1 text-white bg-orange-400 top-5 left-2">
          {value.date}
        </div>
      </div>
      <div className="py-5">
        <h2 className="text-xl">{value.title}</h2>
        <p className="text-gray-600">{value.summary}</p>

        <Link href={Links} className="text-orange-500 underline">
          READ MORE
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
