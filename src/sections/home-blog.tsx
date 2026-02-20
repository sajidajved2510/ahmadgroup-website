'use client'

import { AnimatedButton } from '@/components/animated-button'
import { routes } from '@/lib/routes'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface Blog {
  id: string;
  link: string;
  thumbnail: { url: string };
  category: string;
  totalComments: number;
  publishDate: string;
  title: string;
}

const HomeBlog = () => {
    // 1. State to hold the data and loading status
    const [homeBlogs, setHomeBlogs] = useState<Blog[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // 2. Fetch data on the client side (Browser)
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch("https://ap-south-1.cdn.hygraph.com/content/cmioez6wj01mn07wartv13dds/master", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        query: `query HomeBlogs {
                            homeBlogs {
                                id
                                title
                                category
                                link
                                publishDate
                                thumbnail {
                                    url
                                }
                                totalComments
                            }
                        }`,
                    }),
                });
                const json = await response.json();
                if (json.data && json.data.homeBlogs) {
                    setHomeBlogs(json.data.homeBlogs);
                }
            } catch (error) {
                console.error("Failed to fetch blogs:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // 3. Render Loading State
    if (isLoading) {
        return (
            <section className="py-20 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-96 bg-gray-100 rounded-2xl animate-pulse" />
                    ))}
                </div>
            </section>
        );
    }

    return (
        <div id='blogs' className='mb-17.5 lg:mb-22.5 xl:mb-30 selection:bg-[var(--primary-color)] selection:text-white'>
            <div className='w-full md:px-3 mx-auto lg:w-[90%] 2xl:max-w-[1410px]'>

                {/* header */}
                <div className='flex max-lg:flex-col lg:items-center justify-between mb-[min(20px,10vh)]'>
                    <div className='w-full lg:w-1/2 mt-6 px-3'>
                        <span className='text-xs bg-black/5 text-[var(--secondary-color)] px-2.5 py-4 font-medium uppercase mb-2.5 inline-block'>Industry blog & article</span>
                        <h2 className='text-4xl lg:text-5xl xl:text-6xl font-medium'>Insights & Latest Thoughts.</h2>
                    </div>
                    <div className='w-full lg:w-1/4 mt-6 px-3 flex lg:justify-end'>
                        <AnimatedButton href={routes.blog} bgColor="#ffffff" hoverBgColor="var(--secondary-color)" borderColor="border-[#00000033]" hoverBorderColor="var(--secondary-color)">
                            VIEW ALL BLOGS
                        </AnimatedButton>
                    </div>
                </div>

                {/* Content */}
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    {
                        homeBlogs.map((blog: Blog) => (
                            <div key={blog.id} className='group px-3 mt-12'>
                                <div className='relative'>
                                    {/*blog Image */}
                                    <a href={blog.link} className='relative overflow-hidden block transition-all ease-out duration-300'>
                                        <div className='absolute left-0 bottom-0 w-full h-full bg-white/50 z-30 -skew-45 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:animate-shimmer-sweep group-hover:transition-all group-hover:duration-400 group-hover:ease-[cubic-bezier(0.175,0.885,0.32,1.275)]'></div>
                                        <Image src={blog.thumbnail.url}
                                            width={650}
                                            height={350}
                                            loading='lazy'
                                            decoding='async'
                                            alt="Blog Image"
                                            className='object-cover min-h-70 transition-all w-full z-10 h-auto scale-100 duration-300 ease-out group-hover:scale-110'
                                        />
                                    </a>
                                    {/* blog tag */}
                                    <div className="absolute top-4 left-4 z-30">
                                        <a href={routes.blog} className='text-white font-semibold text-[13px] leading-[1] uppercase py-2 px-4 rounded-full bg-black/30 backdrop-blur-[9px] transition-all duration-300 hover:bg-[var(--primary-color)] cursor-pointer'>{blog.category}</a>
                                    </div>
                                </div>

                                {/* blog content */}
                                <div className='px-3 xl:px-6 2xl:px-7.5 pt-5 xl:pt-6 '>
                                    {/* blog meta */}
                                    <div className='relative mb-5'>
                                        <ul className='flex items-center gap-6'>
                                            <li className='relative before:absolute before:top-1/2 before:-translate-y-1/2 before:-right-3 before:w-px before:h-3 before:bg-black/20'>
                                                <a href={routes.blog} className='py-2 px-4 rounded-full bg-[var(--secondary-color)]/8 text-[var(--secondary-color)]/70 hover:text-black underline underline-offset-3 text-[13px] font-medium uppercase transition-all duration-300'>
                                                    {new Date(blog.publishDate).toLocaleDateString('en-GB', {
                                                        day: 'numeric',
                                                        month: 'long',
                                                        year: 'numeric'
                                                    })}
                                                </a>
                                            </li>

                                            <li className='relative'>
                                                <span className='text-black/50 text-[13px] font-medium uppercase py-2 px-4 rounded-full bg-black/8'>{blog.totalComments} comment</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <h5 className='mb-4 font-semibold leading-[1.4] capitalize cursor-pointer'>
                                        <a href={blog.link} className='text-lg sm:text-2xl lg:text-[26px] 2xl:text-[28px] hover:text-[var(--secondary-color)] transition-all duration-300'>{blog.title}</a>
                                    </h5>
                                    <a className="group/more text-[#00000099] hover:text-[var(--secondary-color)] font-medium text-[13px] leading-[1] uppercase inline-flex items-center gap-1.5 transition-all duration-300" href={routes.blog}>
                                        <span className='pb-0.5 whitespace-nowrap leading-[1] relative'>
                                            Read more
                                            <p className='absolute bottom-0 w-full h-px bg-[#00000099] rounded-full left-0 group-hover/more:w-0 transition-all duration-200' />
                                        </span>
                                        <svg className='fill-black/30 group-hover/more:fill-[var(--secondary-color)] group-hover/more:translate-x-[3px] transition-all duration-300' width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><g><path d="M7.23241 0.232893L14.3936 7.39408L13.053 8.73466L1.35388 8.74787L1.3406 6.05345L9.28207 6.0926L5.2921 2.17319L7.23241 0.232893Z"></path><path d="M7.19784 14.5909L11.7135 10.0753L7.88453 10.0564L5.27394 12.667L7.19784 14.5909Z"></path></g></svg>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeBlog
