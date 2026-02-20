import ServicesGrid from '@/components/ambuilder/service-grid'
import { AnimatedButton } from '@/components/animated-button'
import { routes } from '@/lib/routes'
import React from 'react'

const Services = () => {
    return (
        <div className='py-22.5 bg-black'>
            <div className='w-full px-3 mx-auto sm:w-[90%] md:w-180 lg:w-[90%] 2xl:max-w-[1320px]'>
                <div className="flex max-lg:flex-col lg:items-center justify-between mb-15 lg:mb-17.5">
                    {/* title */}
                    <div className="w-full lg:w-1/2 mt-6 sm:px-3">
                        <h2 className='leading-[1.1] font-semibold text-white text-[calc(1.8rem+1.8vw)]'>News Trends & Solutions.</h2>
                    </div>
                    {/* button */}
                    <div className='lg:w-1/4 flex lg:justify-end max-lg:mt-6 max-lg:px-3'>
                        <AnimatedButton href={routes.project} bgColor="#ffffff" hoverBgColor="var(--primary-color)" borderColor="border-white" hoverBorderColor="var(--primary-color)">
                            VIEW ALL SERVICES
                        </AnimatedButton>
                    </div>
                </div>

                <div className="mt-10 w-full">
                    <ServicesGrid />
                </div>
            </div>
        </div>
    )
}

export default Services