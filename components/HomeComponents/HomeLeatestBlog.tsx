'use client'
import { blogPosts } from '@/utils/data'
import React from 'react'
import SubHeading from '../reusableComponents/SubHeading'
import BlogCard from '../reusableComponents/BlogCard'

const HomeLeatestBlog = () => {
  return (
    <div>
        <SubHeading sub='Latest Blog' />
      <div className="container grid grid-cols-1 gap-10 py-10 m-auto md:grid-cols-2 lg:grid-cols-3 ">
        {blogPosts.slice(0, 3).map((value) => {
          return (
            <BlogCard value={value} key={value.blogId} />
          );
        })}
      </div>
    </div>
  );
}

export default HomeLeatestBlog
