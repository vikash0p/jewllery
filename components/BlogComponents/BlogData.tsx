"use client";
import { blogPosts } from "@/utils/data";
import React from "react";
import SubHeading from "../reusableComponents/SubHeading";
import BlogCard from "../reusableComponents/BlogCard";
import BreadcumbHeading from "../reusableComponents/BreadcumbHeading";
import BlogCategoryComponent from "./BlogCategoryComponent";
import BlogLinksComponent from "./BlogLinksComponent";

const BlogData = () => {
  return (
    <div>
      {/* <SubHeading sub="Latest Blog" /> */}
      <BreadcumbHeading heading="Blog" subHeading="Home / Blog" />
      <div className="flex flex-col md:flex-row w-full md:items-center justify-between h-full bg-gray-100">
        <BlogCategoryComponent />
        <BlogLinksComponent />
      </div>
      <div className="container grid grid-cols-1 gap-10 py-10 m-auto md:grid-cols-2 lg:grid-cols-3 ">
        {blogPosts.map((value,index) => {
          return <BlogCard value={value} index={index} key={value.blogId} />;
        })}
      </div>
    </div>
  );
};

export default BlogData;
