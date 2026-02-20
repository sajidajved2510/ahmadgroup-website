"use client"
import { Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Blog = {
    id: string
    title: string
    thumbnail?: { url: string }
    publishDate?: string
    category?: string
}

const BlogSidebar = ({ blogs }: { blogs: Blog[] }) => {
    const categories = [
        { name: 'Architecture', count: 20 },
        { name: 'Renovation', count: 15 },
        { name: 'Construction', count: 25 },
        { name: 'Personal Architect', count: 30 },
        { name: 'Woo-commerce Shop', count: 32 },
        { name: 'Interior Design', count: 35 }
    ]
    const tagList = [
        '#Social Media',
        '#influencer',
        '#analytics',
        '#industry',
        '#brand strategy',
        '#remarketing',
        '#optimization',
        '#link building',
        '#marketing'
    ]
    return (
        <div className='space-y-7.5 h-full'>
            {/* widget 1  */}
            <div className="px-3 sm:px-5 xl:px-7.5 py-7.5 xl:py-9 border border-[var(--secondary-color)]/10 bg-[#FAF9F9]">
                <h5 className='text-lg font-semibold leading-[.9] tracking-[.6px] uppercase border-b border-b-black inline-block mb-7.5'>Search Here</h5>
                <form>
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search Here..."
                            className='w-full py-2 px-5 text-black h-11 border border-black/30 border-r-0 outline-0 placeholder:text-[#999999]'
                        />
                        <button type="submit" className='bg-[var(--secondary-color)] min-w-22.5 h-11 flex items-center justify-center overflow-hidden relative z-10 cursor-pointer'>
                            <Search className='size-5.5 text-white' />
                            <div className="absolute block left-[15%] -right-[20%] -top-[4%] size-[150%] bottom-0 rounded-[2px] bg-black -z-10 skew-x-45 scale-0 transition-all duration-300 ease-out"></div>
                        </button>

                    </div>
                </form>
            </div>

            {/* widget 2  */}
            <div className="px-3 sm:px-5 xl:px-7.5 py-7.5 xl:py-9 border border-[var(--secondary-color)]/10 bg-[#FAF9F9]">
                <h5 className='text-lg font-semibold leading-[.9] tracking-[.6px] uppercase border-b border-b-black inline-block mb-7.5'>Category</h5>
                <ul className='space-y-6'>
                    {
                        categories.map((category, index) => (
                            <li key={index} className='group relative flex items-center transition-all duration-200 cursor-pointer'>
                                <div className='flex items-center justify-between text-black/70 group-hover:text-[var(--primary-color)] w-full flex-wrap gap-1 transition-all duration-200'>
                                    <span className=' leading-[1] flex items-center gap-2  transition-all duration-200'>
                                        <svg className='fill-black/70 group-hover:fill-[var(--primary-color)]  transition-all duration-200' width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M0.0594069 0H12.0002V2.23531L2.25746 12.0001L0 9.76478L6.65357 3.17649L0.0594069 3.23532V0Z"></path><path d="M12.0009 12.0002V4.4707L8.79297 7.6472V12.0002H12.0009Z"></path></svg>
                                        {category.name}
                                    </span>
                                    <span className='font-medium text-sm leading-[1] transition-all duration-200'>{`(${category.count})`}</span>
                                </div>
                            </li>))
                    }
                </ul>
            </div>

            {/* widget 3 */}
            <div className="px-3 sm:px-5 xl:px-7.5 py-7.5 xl:py-9 border border-[var(--secondary-color)]/10 bg-[#FAF9F9]">
                <h5 className='text-lg font-semibold leading-[.9] tracking-[.6px] uppercase border-b border-b-black inline-block mb-7.5'>Popular Post</h5>
                <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-4 mb-6 cursor-pointer">
                    <Image
                        src={blogs[4].thumbnail?.url || ''}
                        alt='Blog'
                        width={92}
                        height={71}
                        className='w-23 h-18 object-cover'
                    />
                    <div className='leading-[1]'>
                        <span className='text-black/50 text-xs font-medium block mb-2 transition-all duration-200 hover:text-[var(--primary-color)]'>
                            
                            {blogs[4].publishDate && new Date(blogs[4].publishDate).toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}
                        </span>
                        <h6 className='text-sm xl:text-[17px] font-medium leading-5 tracking-[0.32px]  transition-all duration-200 hover:text-[var(--primary-color)]'>{blogs[4].title}</h6>
                    </div>
                </div>
                <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-4 mb-6 cursor-pointer">
                    <Image
                        src={blogs[0].thumbnail?.url || ''}
                        alt='Blog'
                        width={92}
                        height={71}
                        className='w-23 h-18 object-cover'
                    />
                    <div className='leading-[1]'>
                        <span className='text-black/50 text-xs font-medium block mb-2 transition-all duration-200 hover:text-[var(--primary-color)]'>
                            {blogs[0].publishDate && new Date(blogs[0].publishDate).toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}
                        </span>
                        <h6 className='text-sm xl:text-[17px] font-medium leading-5 tracking-[0.32px]  transition-all duration-200 hover:text-[var(--primary-color)]'>{blogs[0].title}</h6>
                    </div>
                </div>
                <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-4 mb-6 cursor-pointer">
                    <Image
                        src={blogs[1].thumbnail?.url || ''}
                        alt=''
                        width={92}
                        height={71}
                        className='w-23 h-18 object-cover'
                    />
                    <div className='leading-[1]'>
                        <span className='text-black/50 text-xs font-medium block mb-2 transition-all duration-200 hover:text-[var(--primary-color)]'>
                            {blogs[1].publishDate && new Date(blogs[1].publishDate).toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}
                        </span>
                        <h6 className='text-sm xl:text-[17px] font-medium leading-5 tracking-[0.32px]  transition-all duration-200 hover:text-[var(--primary-color)]'>{blogs[1].title}</h6>
                    </div>
                </div>
            </div>

            {/* widget 4 */}
            <div className="px-3 sm:px-5 xl:px-7.5 py-7.5 xl:py-9 border border-[var(--secondary-color)]/10 bg-[#FAF9F9]">
                <h5 className='text-lg font-semibold leading-[.9] tracking-[.6px] uppercase border-b border-b-black inline-block mb-7.5'>New Tags</h5>
                <ul className='flex items-center gap-4 flex-wrap'>
                    {
                        tagList.map((item, idx) => (
                            <li key={idx} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='text-black/70 text-[11px] font-medium block leading-[1] py-2 px-2 sm:px-3 rounded-full uppercase bg-white  transition-all duration-200 hover:bg-[var(--secondary-color)] hover:text-white cursor-pointer'>
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default BlogSidebar
