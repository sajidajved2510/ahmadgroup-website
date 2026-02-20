import React from 'react'
import { AnimatedButton } from '@/components/animated-button'
import Link from 'next/link'
import { routes } from '@/lib/routes'

const Hero = () => {
    return (
        <div className='pt-21.5 mb-17.5 lg:mb-22.5 xl:mb-30 px-3'>
            {/* banner-wrapper */}
            <div className='md:mx-2.5 lg:mx-5 xl:mx-7.5 2xl:mx-17.5 px-3 md:px-5 lg:pl-10 lg:pr-9 py-15 md:py-17.5 flex items-end justify-between bg-cover bg-no-repeat min-h-162.5 2xl:min-h-187.5 bg-[linear-gradient(180deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/images/concretePage/hero-banner-bg.jpg)]'>
                <div className="flex justify-between w-full">
                    <div className="max-w-200 w-full animate-fadeInLeft">
                        <h1 className='mb-7.5 leading-[1.3] text-white font-bold text-[calc(1.8rem+1.8vw)]'>Advanced Concrete Solutions Built for Tomorrow.</h1>
                        {/* buttons */}
                        <div className="flex max-md:flex-col md:items-center gap-7.5 md:gap-12.5">

                            <AnimatedButton href={routes.project} bgColor="var(--secondary-color)" hoverBgColor="var(--primary-color)" borderColor="border-[var(--secondary-color)]" hoverBorderColor="var(--primary-color)">
                                START A PROJECT
                            </AnimatedButton>

                            <Link className="group text-white font-semibold text-[13px] leading-[1] uppercase inline-flex items-center gap-2.5 transition-all duration-300" href={routes.contact}>
                                <span className='pb-[5px] whitespace-nowrap leading-[1] relative'>
                                    Let&apos;s discuss
                                    <p className='absolute bottom-0 w-full h-px bg-white rounded-full left-0 group-hover:w-0 transition-all duration-200' />
                                </span>
                                <svg className='fill-white group-hover:fill-white group-hover:rotate-45 transition-all duration-300' width="9" height="9" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M0.0445549 0H9.00008V1.67647L1.69308 9L0 7.32353L4.99014 2.38235L0.0445549 2.42647V0Z"></path><path d="M9.0002 8.99999V3.35294L6.59424 5.73529V8.99999H9.0002Z"></path></svg>
                            </Link>
                        </div>
                    </div>

                    {/* Circular text widget*/}
                    <div className='max-md:hidden relative min-w-30 h-30 rounded-full flex items-center justify-center bg-white'>
                        <a href={routes.about} className='size-16 bg-[#6a6b6b] flex items-center justify-center rounded-full cursor-pointer'>
                            <svg className='fill-white' width="16" height="31" viewBox="0 0 16 31" xmlns="http://www.w3.org/2000/svg"><path d="M2.66667 6C2.66667 8.94552 5.05448 11.3333 8 11.3333C10.9455 11.3333 13.3333 8.94552 13.3333 6C13.3333 3.05448 10.9455 0.666666 8 0.666667C5.05448 0.666667 2.66667 3.05448 2.66667 6ZM7.29289 30.7071C7.68342 31.0976 8.31658 31.0976 8.70711 30.7071L15.0711 24.3431C15.4616 23.9526 15.4616 23.3195 15.0711 22.9289C14.6805 22.5384 14.0474 22.5384 13.6569 22.9289L8 28.5858L2.34315 22.9289C1.95262 22.5384 1.31946 22.5384 0.928933 22.9289C0.538409 23.3195 0.538409 23.9526 0.928933 24.3431L7.29289 30.7071ZM7 6L7 30L9 30L9 6L7 6Z"></path></svg>            </a>
                        <div className='absolute w-full h-full animate-textRotation'>
                            {"TILES . BUILDERS . PRECAST .".split("").map((char, index) => (
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
                </div>
            </div>
        </div>
    )
}

export default Hero