"use client";


import { routes } from "@/app/routes";
import { Plus } from "lucide-react";
import Link from "next/link";





export default function CreateBlogCard() {
  return (
    <Link 
      className="group relative flex h-full min-h-[320px] w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50/50 p-6 text-center hover:border-blue-500 hover:bg-blue-50/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      href={routes.admin.create_blog}
    >
      <div className="mb-4 rounded-full bg-white p-4 shadow-sm ring-1 ring-gray-900/5 group-hover:scale-110 group-hover:shadow-md transition-all duration-200">
        <Plus className="h-8 w-8 text-blue-500" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">Create New Blog</h3>
      <p className="mt-2 text-sm text-gray-500 max-w-[200px]">
        Draft a new post, share updates, or publish a story.
      </p>
    </Link>
  );
};