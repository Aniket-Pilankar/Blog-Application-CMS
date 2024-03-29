import CardComp from "@/components/shared/Card";
import Categories from "@/components/shared/Categories";
import { getBlogs } from "@/graphql";

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {blogs.map((blog) => (
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
}
