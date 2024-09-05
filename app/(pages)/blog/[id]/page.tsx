"use client";
import { blogPosts } from "@/utils/data";
import SingleBlogCard from "@/components/reusableComponents/SingleBlogCard";
import BlogLinksComponent from "@/components/BlogComponents/BlogLinksComponent";
import BlogCategoryComponent from "@/components/BlogComponents/BlogCategoryComponent";
import BlogCard from "@/components/reusableComponents/BlogCard";
import React, { useEffect, useState } from "react";



const SingleBlog = ({ params }: { params: { id: string } }) => {
 const [randomizedPosts, setRandomizedPosts] = useState(blogPosts);

 useEffect(() => {
   // Randomize the posts only on the client side
   setRandomizedPosts([...blogPosts].sort(() => Math.random() - 0.5));
 }, []);
  return (
    <div>
      <div>
        {blogPosts
          .filter((value) => value.blogId === params.id)
          .map((blogdata) => {
            const newDate = new Date(blogdata.date);

            return (
              <div key={blogdata.blogId}>
                <div className="flex flex-col">
                  <div className="py-8 bg-gray-100">
                    <div className="container px-4 mx-auto">
                      <h1 className="mb-2 text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                        {blogdata.title}
                      </h1>
                      <p className="text-gray-600">
                        Published on {newDate.toDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="py-8 bg-white">
                    <div className="container flex flex-col px-4 mx-auto lg:flex-row">
                      <SingleBlogCard
                        blogdata={blogdata}
                        key={blogdata.blogId}
                      />

                      <div className="w-full px-4 lg:w-1/4 hidden lg:block">
                        {/* blogLinkscompoents form blogComponets */}
                        <BlogLinksComponent />
                        <BlogCategoryComponent />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div>
        <div className="container grid grid-cols-1 gap-10 py-10 m-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {randomizedPosts.slice(0, 4).map((value,index) => {
            return <BlogCard value={value} index={index} key={value.blogId} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
