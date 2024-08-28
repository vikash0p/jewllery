"use client";
import { blogPosts } from "@/utils/data";
import React from "react";
import SubHeading from "../reusableComponents/SubHeading";
import BlogCard from "../reusableComponents/BlogCard";
import BreadcumbHeading from "../reusableComponents/BreadcumbHeading";

const BlogData = () => {
  return (
    <div>
      {/* <SubHeading sub="Latest Blog" /> */}
      <BreadcumbHeading heading="Blog" subHeading="Home / Blog" />
      <div className="container grid grid-cols-1 gap-10 py-10 m-auto md:grid-cols-2 lg:grid-cols-3 ">
        {blogPosts.map((value) => {
          return <BlogCard value={value} key={value.blogId} />;
        })}
      </div>
    </div>
  );
};

export default BlogData;
