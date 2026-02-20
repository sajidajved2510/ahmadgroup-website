"use client"
import React, { useState } from 'react'
import BlogCard from './blog-card'
import BlogPagination, { DEFAULT_ITEMS_PER_PAGE } from './blog-pagination'

type Blog = {
    id: string
    title: string
    thumbnail?: { url: string }
    publishDate?: string
    category?: string
}

const BlogList = ({ blogs, initialItemsPerPage = DEFAULT_ITEMS_PER_PAGE }: { blogs: Blog[], initialItemsPerPage?: number }) => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const itemsPerPage = initialItemsPerPage

    const startIndex = (currentPage - 1) * itemsPerPage
    const currentBlogs = blogs.slice(startIndex, startIndex + itemsPerPage)

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-17.5">
                <BlogCard blogs={currentBlogs} />
            </div>

            <BlogPagination
                totalItems={blogs.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={(p) => setCurrentPage(p)}
            />
        </>
    )
}

export default BlogList
