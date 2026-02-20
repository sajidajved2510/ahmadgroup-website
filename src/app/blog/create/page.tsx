

import BlogEditor from "@/app/blog/sections/blog-editor";



export default function CreateBlogPage() {
  return (
    <div className="pt-56 w-full mb-24 mx-20">
      <h1 className="text-2xl font-bold mb-4">Create a New Blog Post</h1>
      {/* Blog creation form goes here */}
      <BlogEditor />
    </div>
  );
}