import React from "react";
import { Card } from "flowbite-react";
import Image from "next/image";
import { getBlogCategories } from "@/graphql";
import Link from "next/link";

const Categories = async () => {
  const categories = await getBlogCategories();

  return (
    <Card className="max-w-sm">
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Categories
        </h5>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <li className="py-3 sm:py-4">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  {category.name}
                </p>
              </li>
              <hr />
            </Link>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default Categories;
