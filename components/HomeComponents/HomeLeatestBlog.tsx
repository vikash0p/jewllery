'use client'
import { blogPosts } from '@/utils/data'
import React from 'react'
import SubHeading from '../reusableComponents/SubHeading'
import BlogCard from '../reusableComponents/BlogCard'
import BlogEffectCard from '../BlogComponents/BlogEffectCard'

const HomeLeatestBlog = () => {
  return (
    <div>
        <SubHeading sub='Latest Blog' />
      <div className="container  grid-cols-1 gap-10 py-10   m-auto md:grid-cols-2 lg:grid-cols-3 hidden lg:flex ">
        {blogPosts.slice(0, 3).map((value, index) => {
          return (
            <BlogCard value={value } index={index}  key={value.blogId} />
          );
        })}
      </div>
      <div className='block lg:hidden'>
        <BlogEffectCard />
      </div>
    </div>
  );
}

export default HomeLeatestBlog
