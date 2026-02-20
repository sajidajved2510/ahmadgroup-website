"use client";

import CreateBlogCard from "@/app/blog/sections/create-blog-card";
import BlogCard from "@/app/blog/sections/blog-card";

export default function BlogSection({ page = 1 }) {
  const blogs = [
    {
      id: "1",
      title: "Understanding React Hooks",
      thumbnail: { url: "https://example.com/image1.jpg" },
      publishDate: "2023-01-15",
      category: "React",
    },
    {
      id: "2",
      title: "A Guide to Next.js",
      thumbnail: { url: "https://example.com/image2.jpg" },
      publishDate: "2023-02-20",
      category: "Next.js",
    },
    {
      id: "3",
      title: "Server Components Explained",
      thumbnail: { url: "https://example.com/image3.jpg" },
      publishDate: "2023-03-10",
      category: "Next.js",
    },
    {
      id: "4",
      title: "Tailwind CSS Best Practices",
      thumbnail: { url: "https://example.com/image4.jpg" },
      publishDate: "2023-04-01",
      category: "CSS",
    },
    {
      id: "5",
      title: "State Management in React",
      thumbnail: { url: "https://example.com/image5.jpg" },
      publishDate: "2023-05-12",
      category: "React",
    },
  ];

  return (
    <section className="mt-12 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Create Blog Card → ONLY on first page */}
        {page === 1 && <CreateBlogCard />}

        {/* Blog Cards */}
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blogs={blogs} />
        ))}

      </div>
    </section>
  );
}