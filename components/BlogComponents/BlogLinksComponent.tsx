'use client'
import { blogLinks } from "@/utils/data";
import Link from "next/link";
import React from "react";

const BlogLinksComponent = () => {


  return (
    <div className="p-4 bg-gray-100">
      <h2 className="mb-4 text-xl font-bold text-gray-800">Recent Posts</h2>
      <ul className="list-none">
        {blogLinks.map((link) => (
          <li key={link.id} className="mb-2">
            <Link
              href={link.url}
              className="text-gray-700 underline hover:text-gray-900"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogLinksComponent;
