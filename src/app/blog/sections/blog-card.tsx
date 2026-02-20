import { routes } from '@/lib/routes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Blog = {
    id: string
    title: string
    thumbnail?: { url: string }
    publishDate?: string
    category?: string
}

const BlogCard = ({ blogs }: { blogs: Blog[] }) => {
    return (
        <>
            {
                blogs.map((blog) => (
                    <div key={blog.id} className='group cursor-pointer sm:px-3'>
                        {/* Blog Image wrap */}
                        <div className="relative">
                            {/* blog image */}
                            <Link href={routes.blog} className=" relative overflow-hidden block transition-all duration-300 ease-out">
                                <div className='absolute left-0 bottom-0 w-full h-full bg-white/50 z-10 -skew-45 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:animate-shimmer-sweep group-hover:transition-all group-hover:duration-400 group-hover:ease-[cubic-bezier(0.175,0.885,0.32,1.275)]' />
                                <Image
                                    src={blog.thumbnail?.url || ''}
                                    alt={blog.title}
                                    width={416}
                                    height={320}
                                    className="transition-all w-full z-10 h-auto scale-100 duration-300 ease-in-out group-hover:scale-110 min-h-70 object-cover"
                                />
                            </Link>
                            {/* blog meta */}
                            <div className="invisible absolute -left-px -bottom-px bg-white z-20 py-2.5 px-4">
                                <ul className="flex items-center gap-6 leading-[1]">
                                    <li className="relative">
                                        <div className="absolute top-1/2 -translate-y-1/2 -right-3 w-px h-3 bg-black/20" />
                                        <p className="invisible text-[var(--secondary-color)]/70 underline underline-offset-3 text-[13px] font-medium leading-[1] uppercase tracking-[0.03em] transition-all duration-200">
                                            {
                                            blog.publishDate && new Date(blog.publishDate).toLocaleDateString('en-GB', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            })}
                                        </p>
                                    </li>
                                    <li className='relative'>
                                        <span className='text-black/50 text-[13px] font-medium leading-[1] tracking-wide uppercase'>{blog.category}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* blog content */}
                        <div className="pt-5">
                            <h5 className='mb-4'>
                                <Link
                                    href={routes.blog}
                                    className='font-semibold text-[23px] leading-[1.6] transition-all duration-300 group-hover:text-[var(--secondary-color)]'>
                                    {blog.title}
                                </Link>
                            </h5>
                            <Link className="group/more text-[#00000099] hover:text-[var(--secondary-color)] font-medium text-[13px] leading-[1] uppercase inline-flex items-center gap-1.5 transition-all duration-300" href={routes.blog}>
                                <span className='pb-0.5 whitespace-nowrap leading-[1] relative'>
                                    Read more
                                    <p className='absolute bottom-0 w-full h-px bg-[#00000099] rounded-full left-0 group-hover/more:w-0 transition-all duration-200' />
                                </span>
                                <svg className='fill-black/30 group-hover/more:fill-[var(--secondary-color)] group-hover/more:translate-x-[3px] transition-all duration-300' width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><g><path d="M7.23241 0.232893L14.3936 7.39408L13.053 8.73466L1.35388 8.74787L1.3406 6.05345L9.28207 6.0926L5.2921 2.17319L7.23241 0.232893Z"></path><path d="M7.19784 14.5909L11.7135 10.0753L7.88453 10.0564L5.27394 12.667L7.19784 14.5909Z"></path></g></svg>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default BlogCard
