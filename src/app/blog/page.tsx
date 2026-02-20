import SharedHero from '@/components/shared-hero'
import React from 'react'
import BlogGrid from './sections/blog-grid'

const BlogPage = () => {
    return (
        <>
            <SharedHero title="Blog" description="Market Trend & Analyst Behind The Scene Of Industry." />
            <BlogGrid />
        </>
    )
}

export default BlogPage
