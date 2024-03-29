import { Avatar, Button, Card } from "flowbite-react";
import moment from "moment";
import Link from "next/link";

export default function Component({ blog }) {
  return (
    <Card className="max-w-2xl mb-10" imgSrc={blog.displayImage.url} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {blog.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {blog.description}
      </p>
      <Avatar img={blog.author.photo.url} rounded>
        <div className="space-y-1 font-medium dark:text-white">
          <div>{blog.author.name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {moment(blog.createdAt).format("MMM DD, YYYY")}
          </div>
        </div>
      </Avatar>
      <Button as={Link} href={`/blog/${blog.slug}`}>
        Read more
        <svg
          className="-mr-1 ml-2 h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
  );
}
