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
                  <div className="bg-gray-100 py-8">
                    <div className="container mx-auto px-4">
                      <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        {blogdata.title}
                      </h1>
                      <p className="text-gray-600">
                        Published on {newDate.toDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="bg-white py-8">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row">
                      <SingleBlogCard
                        blogdata={blogdata}
                        key={blogdata.blogId}
                      />

                      <div className="w-full md:w-1/4 px-4">
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
        <div className="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10 py-10 ">
          {randomizedPosts.slice(0, 4).map((value) => {
            return <BlogCard value={value} key={value.blogId} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
