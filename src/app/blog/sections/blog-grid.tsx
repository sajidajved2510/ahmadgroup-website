"use client";

import { useEffect, useState } from "react";
import BlogSidebar from "./blog-sidebar";
import BlogList from "./blog-list";

export default function BlogGrid() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getBlogs() {
    const response = await fetch(
      "https://ap-south-1.cdn.hygraph.com/content/cmioez6wj01mn07wartv13dds/master",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `query Blogs {
            blogs {
              id
              title
              category
              publishDate
              link
              thumbnail { url }
            }
          }`,
        }),
      }
    );

    const json = await response.json();
    return json.data.blogs;
  }

  useEffect(() => {
    getBlogs().then((data) => {
      setBlogs(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10 text-xl">
        Loading blogs...
      </div>
    );
  }

  return (
    <div className="mb-17.5 lg:mb-22.5 xl:mb-30 selection:bg-[var(--secondary-color)] selection:text-white">
      <div className="w-full px-3 mx-auto sm:w-[90%] md:w-180 lg:w-[95%] 2xl:max-w-[1320px]">
        <div className="flex max-lg:flex-col">
          {/* blog list */}
          <div className="w-full lg:w-2/3 sm:px-3">
            <BlogList blogs={blogs} />
          </div>

          {/* sidebar */}
          <div className="w-full lg:w-1/3 sm:px-3 mt-12">
            <BlogSidebar blogs={blogs} />
          </div>
        </div>
      </div>
    </div>
  );
}