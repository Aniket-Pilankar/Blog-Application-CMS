import BlogDetail from "@/components/shared/BlogDetail";
import Categories from "@/components/shared/Categories";
import { getBlogDetails, getBlogs } from "@/graphql";
import React from "react";

export async function generateStaticParams() {
  const blogs = await getBlogs();
  console.log("blogs222:", blogs);

  return blogs.map((blog) => ({
    slug: blog.node.slug,
  }));
}

const BlogDetails = async ({ params: { slug } }) => {
  console.log("slug:", slug);
  const blogDetails = await getBlogDetails(slug);
  // console.log("blogDetails:", blogDetails);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <BlogDetail blog={blogDetails} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
