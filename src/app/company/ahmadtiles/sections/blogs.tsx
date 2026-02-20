import { AnimatedButton } from '@/components/animated-button'
import { routes } from '@/lib/routes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getTilesBlogs() {
    const response = await fetch("https://ap-south-1.cdn.hygraph.com/content/cmioez6wj01mn07wartv13dds/master", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `query TilesBlogs {
            tilesBlogs {
                id
                title
                link
                publishDate
                category
                thumbnail {
                    url
                }
            }
            }`,
        }),
    });
    const json = await response.json();
    return json.data.tilesBlogs;
}

const Blogs = async () => {

    const tileBlogs = [{}];

    return (
        <div className='my-17.5 lg:my-22.5 xl:my-30 selection:bg-[var(--secondary-color)] selection:text-white'>
            <div className='w-full px-3 mx-auto sm:w-[90%] md:w-180 lg:w-[90%] 2xl:max-w-[1320px]'>
                <div className="flex max-lg:flex-col lg:items-center justify-between mb-15 lg:mb-17.5">
                    {/* title */}
                    <div className="w-full lg:w-1/2 flex flex-col mt-6 sm:px-3">
                        <span className='flex items-center gap-1.5 font-semibold text-[var(--secondary-color)] text-sm leading-[1] uppercase mb-2.5 relative'>
                            <svg className='fill-[var(--secondary-color)]' width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M0.0594065 0H12.0001V2.2353L2.25745 12L0 9.76471L6.65353 3.17647L0.0594065 3.2353V0Z"></path><path d="M11.9999 11.9999V4.47046L8.79199 7.64693V11.9999H11.9999Z"></path></svg>
                            Our Blog Corner</span>
                        <h2 className='leading-[1.1] font-semibold text-[calc(1.8rem+1.8vw)] text-[var(--secondary-color)] xl:w-2/3'>Latest News & Articles</h2>
                    </div>
                    {/* button */}
                    <div className='lg:w-1/4 flex lg:justify-end max-lg:mt-6 max-lg:px-3'>
                        <AnimatedButton href={routes.blog} bgColor="var(--primary-color)" hoverBgColor="#000000" borderColor="border-[var(--primary-color)]" hoverBorderColor="black">
                            VIEW ALL ARTICLES
                        </AnimatedButton>
                    </div>
                </div>

                <div className="grid grid-cols-12">
                    {/* Left blog column */}
                    {/* blog 1 */}
                    <div className='col-span-12 lg:col-span-5 xl:col-span-6 sm:px-3 max-h-133 '>
                        <div className='h-full rounded-xl relative'>
                            {/* blog image */}
                            <div className='h-full'>
                                {/* <Image
                                    src={tileBlogs[0].thumbnail.url}
                                    alt={tileBlogs[0].title}
                                    width={636}
                                    height={534}
                                    className='h-full min-h-100 object-cover rounded-[10px] w-full'
                                /> */}
                            </div>

                            {/* blog content */}
                            <div className='absolute bg-black/40 top-0 left-0 w-full h-full flex flex-col justify-between items-start rounded-[10px] max-xl:px-4 p-7.5 pt-2.5'>
                                <span className='text-white font-semibold text-[13px] leading-[1] uppercase inline-flex bg-white/12 hover:bg-[var(--secondary-color)] cursor-pointer backdrop-blur-sm underline underline-offset-2 rounded-[5px] py-[9px] px-3.5 transition-all duration-300'>
                                    {/* {new Date(tileBlogs[0].publishDate).toLocaleDateString('en-GB', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })} */}
                                </span>
                                <div className='bg-[var(--secondary-color)]/50 backdrop-blur-xs py-6 px-5 xl:px-9 rounded-[10px]'>
                                    {/* <h4 className='mb-5 font-semibold leading-[1.4] text-[19px] sm:text-[22px] xl:text-2xl text-white hover:text-black transition-all duration-300 cursor-pointer'><Link href={routes.blog}>{tileBlogs[0].title}</Link></h4> */}
                                    {/* <Link className="group text-white font-semibold text-[13px] leading-[1] uppercase inline-flex items-center gap-1.5 transition-all duration-300" href={routes.blog}>
                                        <span className='pb-0.5 whitespace-nowrap leading-[1] relative'>
                                            Read more
                                            <p className='absolute bottom-0 w-full h-px bg-white rounded-full left-0 group-hover:w-0 transition-all duration-200' />
                                        </span>
                                        <svg className='fill-white group-hover:translate-x-[3px] transition-all duration-300' width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><g><path d="M7.23241 0.232893L14.3936 7.39408L13.053 8.73466L1.35388 8.74787L1.3406 6.05345L9.28207 6.0926L5.2921 2.17319L7.23241 0.232893Z"></path><path d="M7.19784 14.5909L11.7135 10.0753L7.88453 10.0564L5.27394 12.667L7.19784 14.5909Z"></path></g></svg>
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right blog column */}
                    <div className='col-span-12 lg:col-span-7 xl:col-span-6 sm:px-3 max-lg:mt-10'>
                        {/* blog 2 */}
                        <div className='md:grid md:grid-cols-[49%_51%] border border-[var(--secondary-color)]/15 rounded-lg mb-7.5'>
                            {/* blog image */}
                            <div className='group block relative overflow-hidden rounded-lg md:rounded-l-lg md:rounded-r-none'>
                                <div className='absolute left-0 bottom-0 w-full h-full bg-white/50 z-30 -skew-45 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:animate-shimmer-sweep group-hover:transition-all group-hover:duration-400 group-hover:ease-[cubic-bezier(0.175,0.885,0.32,1.275)]'></div>
                                {/* <Image src={tileBlogs[1].thumbnail.url}
                                    width={311}
                                    height={250}
                                    alt={tileBlogs[1].title}
                                    className='object-cover rounded-l-lg transition-all w-auto z-10 h-full min-h-62.5 scale-100 duration-300 ease-in-out group-hover:scale-110'
                                /> */}
                            </div>

                            {/* blog content */}
                            <div className="flex flex-col justify-between py-7 2xl:py-9 px-4 2xl:px-6 gap-5">
                                <div>
                                    {/* blog meta */}
                                    <div className='relative mb-3'>
                                        <ul className="flex items-center gap-6 leading-[1]">
                                            <li className="relative">
                                                <div className="absolute top-1/2 -translate-y-1/2 -right-3 w-px h-3 bg-black/20" />
                                                <p className="text-[var(--secondary-color)]/70 underline underline-offset-3 text-[13px] font-medium leading-[1] uppercase tracking-[0.03em] transition-all duration-200">
                                                    {/* {new Date(tileBlogs[1].publishDate).toLocaleDateString('en-GB', {
                                                        day: 'numeric',
                                                        month: 'long',
                                                        year: 'numeric'
                                                    })} */}
                                                </p>
                                            </li>
                                            <li className='relative'>
                                                {/* <span className='text-black/50 text-[13px] font-medium leading-[1] tracking-wide uppercase'>{tileBlogs[1].category}</span> */}
                                            </li>
                                        </ul>
                                    </div>

                                    {/* title */}
                                    <h5 className='group mb-4'>
                                        {/* <Link
                                            href={routes.blog}
                                            className='font-semibold text-[19px] xl:text-[20px] 2xl:text-[23px] leading-[1.6] transition-all duration-300 group-hover:text-[var(--secondary-color)]'>
                                            {tileBlogs[1].title}
                                        </Link> */}
                                    </h5>
                                </div>
                                <Link className="group text-[#00000099] hover:text-[var(--secondary-color)] font-medium text-[13px] leading-[1] uppercase inline-flex items-center gap-1.5 transition-all duration-300" href={routes.blog}>
                                    <span className='pb-0.5 whitespace-nowrap leading-[1] relative'>
                                        Read more
                                        <p className='absolute bottom-0 w-full h-px bg-[#00000099] rounded-full left-0 group-hover:w-0 transition-all duration-200' />
                                    </span>
                                    <svg className='fill-black/30 group-hover:fill-[var(--secondary-color)] group-hover:translate-x-[3px] transition-all duration-300' width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><g><path d="M7.23241 0.232893L14.3936 7.39408L13.053 8.73466L1.35388 8.74787L1.3406 6.05345L9.28207 6.0926L5.2921 2.17319L7.23241 0.232893Z"></path><path d="M7.19784 14.5909L11.7135 10.0753L7.88453 10.0564L5.27394 12.667L7.19784 14.5909Z"></path></g></svg>
                                </Link>
                            </div>

                        </div>
                        {/* bottom article */}
                        {/* blog 3 */}
                        <div className='md:grid md:grid-cols-[49%_51%] border border-[var(--secondary-color)]/15 rounded-lg mb-7.5'>
                            {/* blog image */}
                            <div className='group block relative overflow-hidden rounded-lg md:rounded-l-lg  md:rounded-r-none '>
                                <div className='absolute left-0 bottom-0 w-full h-full bg-white/50 z-30 -skew-45 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:animate-shimmer-sweep group-hover:transition-all group-hover:duration-400 group-hover:ease-[cubic-bezier(0.175,0.885,0.32,1.275)]'></div>
                                {/* <Image src={tileBlogs[2].thumbnail.url}
                                    width={311}
                                    height={250}
                                    alt={tileBlogs[2].title}
                                    className='object-cover rounded-l-lg transition-all w-auto z-10 h-full min-h-62.5 scale-100 duration-300 ease-in-out group-hover:scale-110'
                                /> */}
                            </div>

                            {/* blog content */}
                            <div className="flex flex-col justify-between py-9 px-6 gap-5">
                                <div>
                                    {/* blog meta */}
                                    <div className='relative mb-3'>
                                        <ul className="flex items-center gap-6 leading-[1]">
                                            <li className="relative">
                                                <div className="absolute top-1/2 -translate-y-1/2 -right-3 w-px h-3 bg-black/20" />
                                                <p className="text-[var(--secondary-color)]/70 underline underline-offset-3 text-[13px] font-medium leading-[1] uppercase tracking-[0.03em] transition-all duration-200">
                                                    {/* {new Date(tileBlogs[2].publishDate).toLocaleDateString('en-GB', {
                                                        day: 'numeric',
                                                        month: 'long',
                                                        year: 'numeric'
                                                    })} */}
                                                </p>
                                            </li>
                                            <li className='relative'>
                                                {/* <span className='text-black/50 text-[13px] font-medium leading-[1] tracking-wide uppercase'>{tileBlogs[2].category}</span> */}
                                            </li>
                                        </ul>
                                    </div>

                                    {/* title */}
                                    <h5 className='group mb-4'>
                                        {/* <Link
                                            href={routes.blog}
                                            className='font-semibold text-[19px] xl:text-[20px] 2xl:text-[23px] leading-[1.6] transition-all duration-300 group-hover:text-[var(--secondary-color)]'>
                                            {tileBlogs[2].title}
                                        </Link> */}
                                    </h5>
                                </div>
                                <Link className="group text-[#00000099] hover:text-[var(--secondary-color)] font-medium text-[13px] leading-[1] uppercase inline-flex items-center gap-1.5 transition-all duration-300" href={routes.blog}>
                                    <span className='pb-0.5 whitespace-nowrap leading-[1] relative'>
                                        Read more
                                        <p className='absolute bottom-0 w-full h-px bg-[#00000099] rounded-full left-0 group-hover:w-0 transition-all duration-200' />
                                    </span>
                                    <svg className='fill-black/30 group-hover:fill-[var(--secondary-color)] group-hover:translate-x-[3px] transition-all duration-300' width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><g><path d="M7.23241 0.232893L14.3936 7.39408L13.053 8.73466L1.35388 8.74787L1.3406 6.05345L9.28207 6.0926L5.2921 2.17319L7.23241 0.232893Z"></path><path d="M7.19784 14.5909L11.7135 10.0753L7.88453 10.0564L5.27394 12.667L7.19784 14.5909Z"></path></g></svg>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs