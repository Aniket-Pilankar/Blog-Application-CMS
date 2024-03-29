import { getHTMLContent } from "@/app/_utils/helper";
import { Avatar, Card } from "flowbite-react";
import moment from "moment";
import Image from "next/image";
import React from "react";

const BlogDetail = ({ blog }) => {
  return (
    <div>
      <Card
        className="max-w-3xl"
        renderImage={() => (
          <Image
            width={800}
            height={500}
            src={blog.displayImage.url}
            alt="poster"
          />
        )}
      >
        <div className="hidden md:flex items-center justify-between lg:mb-0 lg:w-auto mr-8 items-center gap-5">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {blog.title}
          </h5>
          <Avatar img={blog.author.photo.url} rounded>
            <div className="space-y-1 font-medium dark:text-white">
              <div>{blog.author.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {moment(blog.createdAt).format("MMM DD, YYYY")}
              </div>
            </div>
          </Avatar>
        </div>
        {blog.content.raw.children.map((objType, index) => {
          const children = objType.children.map((item, itemindex) =>
            getHTMLContent(itemindex, item.text, item)
          );

          return getHTMLContent(index, children, objType, objType.type);
        })}
      </Card>
    </div>
  );
};

export default BlogDetail;
