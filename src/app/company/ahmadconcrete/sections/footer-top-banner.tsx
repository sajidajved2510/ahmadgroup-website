import { AnimatedButton } from '@/components/animated-button'
import { routes } from '@/lib/routes'
import Link from 'next/link'
import React from 'react'

const FooterTopBanner = () => {
    return (
        <div className='w-full py-17.5 md:py-22.5 xl:py-25 bg-[var(--secondary-color)] relative z-10'>
            <div className='w-full px-3 mx-auto sm:w-[90%] md:w-180 lg:w-[90%] 2xl:max-w-[1320px]'>
                <div className="flex max-lg:flex-col lg:items-center justify-between gap-9 md:gap-11 lg:gap-6">
                    {/* title */}
                    <div className="flex flex-col lg:mt-6 sm:px-3 max-w-179">
                        <span className='text-white w-fit text-sm font-medium leading-[1] uppercase inline-block mb-2.5 relative'>
                            <div className='absolute top-1/2 -translate-y-1/2 -right-10 w-9 h-px bg-white' />
                            Building your vision</span>
                        <h2 className='leading-[1.3] font-semibold text-white text-[calc(1.5rem+1.5vw)]'>Let&apos;s Build Dream Something Amazing.</h2>
                    </div>
                    {/* button */}
                    <div className='flex flex-[0_0_auto] gap-7.5 md:gap-12.5 items-center lg:justify-end lg:mt-6 lg:px-3'>
                        <AnimatedButton href={routes.contact} bgColor="#ffffff" hoverBgColor="var(--primary-color)" borderColor="border-white" hoverBorderColor="var(--primary-color)">
                            START JOURNEY
                        </AnimatedButton>
                        <Link className="group relative text-white font-semibold text-[13px] uppercase inline-flex items-center gap-2.5 transition-all duration-300" href={routes.contact}>
                                <span className='pb-[5px] whitespace-nowrap leading-[1] '>
                                    Let&apos;s discuss
                                </span>
                                <p className='absolute bottom-0 w-full h-px bg-white rounded-full left-0 group-hover:w-0 transition-all duration-200' />
                                <svg className='fill-white group-hover:fill-white group-hover:rotate-45 transition-all duration-300' width="9" height="9" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M0.0445549 0H9.00008V1.67647L1.69308 9L0 7.32353L4.99014 2.38235L0.0445549 2.42647V0Z"></path><path d="M9.0002 8.99999V3.35294L6.59424 5.73529V8.99999H9.0002Z"></path></svg>
                            </Link>
                    </div>
                </div>
            </div>

            <svg className="fill-white/10 absolute top-1 right-1 sm:top-2.5 sm:right-2.5 max-sm:size-27.5" width="147" height="147" viewBox="0 0 147 147" xmlns="http://www.w3.org/2000/svg"><g><path d="M0.727728 0H147.001V27.3823L27.6537 147L0 119.617L81.5055 38.9117L0.727728 39.6323V0Z"></path><path d="M147.002 146.999V54.7637L107.705 93.6754V146.999H147.002Z"></path></g></svg>
        </div>
    )
}

export default FooterTopBanner
