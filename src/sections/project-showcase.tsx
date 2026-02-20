"use client"
import { AnimatedButton } from '@/components/animated-button'
import { routes } from '@/lib/routes'
import Image from 'next/image'
import React from 'react'

const ProjectShowcase = () => {
    const projectList = [
        {
            title: 'Building Materials & Construction',
            client: 'Abdullah Builders',
            image: '/images/projects/project-1.png',
            tag1: 'Architecture',
            tag2: 'Construction'
        },
        {
            title: 'Residential & Commercial Builds',
            client: 'Landmark Group',
            image: '/images/projects/project-2.png',
            tag1: 'Residential',
            tag2: 'Commercial'
        },
        {
            title: 'Design & Surface Applications',
            client: 'City Developers',
            image: '/images/projects/project-3.png',
            tag1: 'Design',
            tag2: 'Logistics'
        },
        {
            title: 'Concrete & On-Site Delivery',
            client: 'MAF Constructions',
            image: '/images/projects/project-4.png',
            tag1: 'Concrete',
            tag2: 'Packaging'
        },
        {
            title: 'Roads & Industrial Projects',
            client: 'Allied Engineering',
            image: '/images/projects/project-5.png',
            tag1: 'Roads',
            tag2: 'Metal'
        }

    ]
    return (
        <div className='mb-17.5 lg:mb-22.5 xl:mb-30'>
            <div className='w-full mx-auto sm:w-[90%] md:w-180 lg:w-[90%] 2xl:max-w-[1320px]'>
                {/*Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-17.5">
                    {
                        projectList.map((project, index) => (
                            <div key={index} className='px-3 mt-12'>
                                <div className='group relative overflow-hidden'>
                                    <div className='absolute left-0 bottom-0 w-full h-full bg-white/50 z-10 -skew-45 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:animate-shimmer-sweep group-hover:transition-all group-hover:duration-400 group-hover:ease-[cubic-bezier(0.175,0.885,0.32,1.275)]'></div>
                                    <Image src={project.image}
                                        width={960}
                                        height={470}
                                        alt="project-1-img"
                                        className='object-cover w-full h-auto min-h-94 xl:min-h-110'
                                    />
                                    {/* project content */}
                                    <div className="absolute top-0 left-0 size-full py-7.5 px-5 flex items-end z-20 bg-[linear-gradient(180deg,rgba(0,0,0,0)_24.28%,rgba(0,0,0,0.8)_91.5%)]">
                                        <div>
                                            <span className='text-white font-medium text-[13px] leading-[1] mb-2.5 block tracking-wide'>Client: {project.client}</span>
                                            <h3 className='mb-5'>
                                                <a href={routes.project} className='text-white hover:text-[var(--primary-color)] font-medium text-[28px] leading[1.2] tracking-wider transition-all duration-300'>{project.title}</a>
                                            </h3>
                                            <ul className='flex items-center gap-2.5 flex-wrap z-20'>
                                                <li><a href={routes.project} className='text-white text-xs font-medium py-1 px-3.5 rounded-[15px] leading-[1] border border-white/20 bg-white/15 hover:border-[var(--secondary-color)] hover:bg-[var(--secondary-color)] backdrop-blur-[6px] transition-all duration-300 cursor-pointer'>{project.tag1}</a></li>
                                                <li><a href={routes.project} className='text-white text-xs font-medium py-1 px-3.5 rounded-[15px] leading-[1] border border-white/20 bg-white/15 hover:border-[var(--secondary-color)] hover:bg-[var(--secondary-color)] backdrop-blur-[6px] transition-all duration-300 cursor-pointer'>{project.tag2}</a></li></ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* Load button */}
                <div className="flex w-full justify-center">
                    <AnimatedButton as='button' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} bgColor="#000000" hoverBgColor="var(--secondary-color)" borderColor="border-black" hoverBorderColor="var(--secondary-color)">
                        LOAD MORE
                    </AnimatedButton>
                </div>
            </div>
        </div>
    )
}

export default ProjectShowcase