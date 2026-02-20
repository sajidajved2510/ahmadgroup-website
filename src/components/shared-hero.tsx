import { routes } from '@/lib/routes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface HeroProps {
    title: string
    description: string
}

const SharedHero = ({ title, description }: HeroProps) => {
    return (
        <div className='bg-[#FFFBF5] w-full pt-19 lg:pt-22.5 mb-11.5 lg:mb-16.5 xl:mb-24'>
            {/* content */}
            <div className='relative z-10 w-full'>
                <div className="absolute lg:max-2xl:left-[3%] left-[8%] top-0 w-px h-full bg-black/5 -z-10" />
                {/* container */}
                <div className='w-full px-3 mx-auto sm:w-[90%] md:w-[80%] lg:w-[90%] 2xl:max-w-[1320px]'>
                    <div className="flex flex-wrap">
                        <div className='w-full lg:w-3/4 max-w-[966px] py-10 sm:py-12.5 lg:py-17.5'>
                            <ul className='flex items-center gap-2.5 mb-4'>
                                <li className='group text-black/50 hover:text-[var(--secondary-color)] font-semibold text-sm tracking-[.05em] uppercase relative cursor-pointer'>
                                    <Link href={routes.home} className='flex items-center gap-1.5 transition-all duration-300'>
                                        <svg className='fill-black/50 transition-all duration-200 group-hover:fill-[var(--secondary-color)]' width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M0.0594065 0H12.0001V2.2353L2.25745 12L0 9.76471L6.65353 3.17647L0.0594065 3.2353V0Z"></path><path d="M12.0009 12.0001V4.4707L8.79297 7.64718V12.0001H12.0009Z"></path></svg>
                                        Home
                                    </Link>
                                </li>
                                <li className='text-black/50 font-semibold text-sm pl-5 tracking-[.05em] uppercase relative'>
                                    <div className="absolute w-2 h-0.5 rounded-full bg-black/50 left-0 top-1/2 -translate-y-1/2" />
                                    {title}
                                </li>
                            </ul>
                            <h1 className='leading-[1.2] font-semibold  text-[calc(1.8rem+1.8vw)]'>{description}</h1>
                        </div>
                    </div>
                </div>

                {/* circular component */}
                <div className='max-lg:hidden absolute right-[5%] xl:right-[10%] 2xl:right-[13%] bg-white bottom-0 rounded-full flex items-center justify-center z-20 size-32 cursor-pointer border border-black/10'>
                    <div className="absolute -top-42 w-px h-42 left-1/2 -translate-x-1/2 bg-black/8" />
                    <a href="" className='size-16 bg-[var(--secondary-color)]/30 flex items-center justify-center rounded-full hover:cursor-pointer'>
                        <svg className='fill-white' width="16" height="31" viewBox="0 0 16 31" xmlns="http://www.w3.org/2000/svg"><path d="M2.66667 6C2.66667 8.94552 5.05448 11.3333 8 11.3333C10.9455 11.3333 13.3333 8.94552 13.3333 6C13.3333 3.05448 10.9455 0.666666 8 0.666667C5.05448 0.666667 2.66667 3.05448 2.66667 6ZM7.29289 30.7071C7.68342 31.0976 8.31658 31.0976 8.70711 30.7071L15.0711 24.3431C15.4616 23.9526 15.4616 23.3195 15.0711 22.9289C14.6805 22.5384 14.0474 22.5384 13.6569 22.9289L8 28.5858L2.34315 22.9289C1.95262 22.5384 1.31946 22.5384 0.928933 22.9289C0.538409 23.3195 0.538409 23.9526 0.928933 24.3431L7.29289 30.7071ZM7 6L7 30L9 30L9 6L7 6Z"></path></svg>
                    </a>
                    <div className='absolute size-full animate-textRotation'>
                        {"PRECAST . TILES . BUILDER .".split("").map((char, index) => (
                            <span
                                key={index}
                                className="absolute left-1/2 text-[13px] font-bold origin-[0_60px]"
                                style={{ transform: `rotate(${index * 13}deg)` }} // 13° spacing
                            >
                                {char}
                            </span>
                        ))}
                    </div>
                </div>

                {/*vertical right line */}
                <div className="absolute top-0 right-[33.2%] w-px h-full bg-black/5 -z-10" />
            </div>

            {/* image */}
            <div className='mask-cover mask-no-repeat mask-[url(/images/about-mask.png)] max-xl:mask-[67%]'>
                <Image
                    src="/images/about-page-banner.jpg"
                    alt="About Hero Banner"
                    width={1920}
                    height={550}
                    className='w-full h-auto min-h-70 sm:min-h-100 object-cover'
                />
            </div>
        </div>
    )
}

export default SharedHero
