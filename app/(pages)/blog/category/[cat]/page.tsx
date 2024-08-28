'use client'

import SingleBlogCard from "@/components/reusableComponents/SingleBlogCard";
import { blogPosts } from "@/utils/data";

export default function SingleCategory({ params }: { params: { cat: string } }) {


  return (
    <div>
      {blogPosts
        .filter((blog) => blog.category === params.cat)
        .map((blogdata) => {
          return (
           <SingleBlogCard blogdata={blogdata} key={blogdata.blogId} />
          );
        })}
    </div>
  );
}
