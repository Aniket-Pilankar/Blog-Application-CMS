import CardComp from "@/components/shared/Card";
import Categories from "@/components/shared/Categories";
import { getCategoryBlogPost } from "@/graphql";
import React from "react";

const CategoryPage = async ({ params: { slug } }) => {
  const categoryBlogPost = await getCategoryBlogPost(slug);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {categoryBlogPost.map((blog) => (
            <CardComp key={blog.node.slug} blog={blog.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
