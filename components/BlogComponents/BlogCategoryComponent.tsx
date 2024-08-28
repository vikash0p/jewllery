'use client'
import { blogPosts } from '@/utils/data';
import React from 'react'
import { BlogPost } from '@/utils/interface';
const BlogCategoryComponent = () => {
    const getUniqueCategoryFunction = <T extends keyof BlogPost>(
      data: BlogPost[],
      change: T
    ): BlogPost[T][] => {
      const newData = Array.from(new Set(data.map((value) => value[change])));
      return newData;
    };

    const getUniqueCategory = getUniqueCategoryFunction(blogPosts, "category");
    let getOnlyFiveCategory = getUniqueCategory.slice(0, 5);
  return (
    <div className="bg-gray-100 p-4 mt-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Categories</h2>
      {getOnlyFiveCategory.map((value) => {
        return (
          <ul className="list-none" key={value}>
            <li className="mb-2">
              <a
                href={`/blog/category/${value}`}
                className="text-gray-700 hover:text-gray-900"
              >
                {value}
              </a>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default BlogCategoryComponent
