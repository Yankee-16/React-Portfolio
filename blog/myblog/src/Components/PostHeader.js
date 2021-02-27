import React from "react";

export default function PostHeader({ post }) {
  const myStyle = {
    height: "400px",
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url(https://i.ibb.co/kDcGv5D/sb-blog-programming.jpg)`,
    objectFit: "center",
    backgroundSize: "cover",
  };

  const h2Style = {
    transform: "translate(0, 180px)",
  };

  const h4Style = {
    transform: "translate(0, 200px)",
  };

  var parts = post.timestamp.split("-");
  // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
  // January - 0, February - 1, etc.
  var mydate = new Date(parts[0], parts[1] - 1, parts[2]);
  console.log(mydate.toDateString());

  return (
    <div>
      <header style={myStyle} className="bg-gray-500 dark:bg-gray-800">
        <h2
          style={h2Style}
          className="font-sans antialiased leading-10 tracking-wider text-center align-middle text-4xl sm:text-5xl md:text-6xl text-gray-200">
          {post.title}
        </h2>
        <h4
          style={h4Style}
          className="pl-5 pb-2 text-center text-gray-300 text-xs sm:text-sm md:text-md">
          <span className="italic text-gray-400">Created at:</span>{" "}
          {mydate.toDateString()}
        </h4>
      </header>
    </div>
  );
}
