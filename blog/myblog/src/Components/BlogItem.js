import React from "react";
import { Link } from "react-router-dom";

export default function BlogItem({ post }) {
  const link = `/blog/article/#/${post.slug}`;
  return (
    <div>
      <Link to={link} className="no-underline  flex flex-row">
        <img
          src="https://i.ibb.co/kDcGv5D/sb-blog-programming.jpg"
          className="h-auto max-h-36 max-h-36 w-1/5 object-center object-contain"
          alt="sb-blog-programming"
          border="0"
        />
        <div className="flex-auto">
          <h2 className="pt-2 pl-5 pr-5 pb-2 font-serif tracking-wide leading-5 text-2xl sm:text-4xl md:text-5xl text-black hover:text-blue-800">
            {post.title}
          </h2>
          <h4 className="pl-5 pb-2 text-gray-700 text-xs sm:text-sm md:text-md">
            <span className="italic text-gray-600">Created at:</span>{" "}
            {post.timestamp}
          </h4>
        </div>
      </Link>
    </div>
  );
}
