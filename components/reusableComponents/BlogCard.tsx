"use client";
import React from "react";
import { BlogPost } from "@/utils/interface";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const BlogCard = ({ value, index }: { value: BlogPost; index: number }) => {
  const router = useRouter();
  const pathname = usePathname();

  const Links =
    pathname === "/blog" || pathname === "/"
      ? `/blog/${value.blogId}`
      : `/${value.blogId}`;

  return (
    <div
      key={value.blogId}
      className="rounded-lg overflow-hidden shadow-lg   transition-all w-full hover:shadow-xl"
    >
      <div className="relative w-full  h-72 sm:h-80 md:h-96 lg:h-[450px]">
        <Image
          src={value.image}
          alt={value.title}
          fill
          className="object-cover object-center w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105"
          priority
          sizes="(min-width: 1480px) 419px, (min-width: 1040px) 28.57vw, (min-width: 780px) calc(45.83vw - 20px), (min-width: 480px) 384px, calc(92.5vw - 42px)"
        />
        <div className="absolute top-4 left-4 bg-hoverColor px-3 py-1 text-xs sm:text-sm md:text-base rounded-lg text-white shadow-sm">
          {value.date}
        </div>
      </div>

      <div
        className={`p-4 ${
          index % 2 === 0 ? "bg-white" : "bg-orange-400 lg:bg-white"
        }`}
      >
        <h2
          className={`text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-gray-900  ${
            index % 2 === 0 ? "" : "text-white lg:text-black"
          }`}
        >
          {value.title}
        </h2>
        <p
          className={`text-gray-700 text-sm md:text-base lg:text-lg mb-4 ${
            index % 2 === 0 ? "" : "text-white lg:text-black"
          }`}
        >
          {value.summary}
        </p>
        <Link href={Links}>
          <span
            className={` transition-colors underline text-sm md:text-base lg:text-lg ${
              index % 2 === 0
                ? "text-orange-600 hover:text-orange-700"
                : "text-black lg:text-orange-600 hover:text-white"
            } `}
          >
            Read the full article
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
