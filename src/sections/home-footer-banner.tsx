import { AnimatedButton } from '@/components/animated-button'
import { routes } from '@/lib/routes'
import React from 'react'

const HomeFooterBanner = () => {
    return (
        <div className='pb-22.5 pt-37.5 md:pt-42.5 lg:pt-47.5 2xl:pt-52 bg-[url(/images/footer-top-banner-bg.png)] bg-cover bg-no-repeat relative z-10 selection:text-white selection:bg-[var(--secondary-color)]'>
            <div className='w-full px-3 mx-auto sm:w-[90%] 2xl:max-w-[1410px]'>
                <div className="block text-center">
                    <div className="flex flex-wrap justify-center">
                        <div className='w-full lg:w-5/6 xl:w-2/3'>
                            {/* section title */}
                            <div className="w-full mb-9 sm:mb-12.5 md:mb-15 xl:mb-16">
                                <span className='text-black text-sm font-medium leading-[1] uppercase inline-block mb-2.5 relative'>
                                    <div className='absolute top-1/2 -translate-y-1/2 -right-10 w-9 h-px bg-[var(--secondary-color)]' />
                                    Building your vision</span>
                                <h2 className='text-4xl sm:text-[46px] md:text-[55px] lg:text-6xl 2xl:text-[70px] font-bold leading-[1.2]'>Your Future Awaits Let&apos;s Talk Strategy</h2>
                            </div>
                            {/* button group */}
                            <div className="flex items-center justify-center gap-7.5 sm:gap-12.5">
                                <AnimatedButton href={routes.contact} bgColor="var(--primary-color)" hoverBgColor="var(--secondary-color)" borderColor="border-[var(--primary-color)" hoverBorderColor="var(--secondary-color)">
                                    START JOURNEY
                                </AnimatedButton>
                                <a className="group flex text-[var(--secondary-color)] font-semibold text-[13px] leading-[1] uppercase items-center gap-2.5 transition-all duration-300" href="#contact">
                                    <span className='pb-[5px] whitespace-nowrap leading-[1] relative'>
                                        Let&apos;s discuss
                                        <p className='absolute bottom-0 w-full h-px bg-[var(--secondary-color)] rounded-full left-0 group-hover:w-0 transition-all duration-200' />
                                    </span>
                                    <svg className='fill-[var(--secondary-color)] group-hover:fill-[var(--secondary-color)] group-hover:rotate-45 transition-all duration-300' width="9" height="9" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M0.0445549 0H9.00008V1.67647L1.69308 9L0 7.32353L4.99014 2.38235L0.0445549 2.42647V0Z"></path><path d="M9.0002 8.99999V3.35294L6.59424 5.73529V8.99999H9.0002Z"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeFooterBanner
