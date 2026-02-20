"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import { AnimatedButton } from '@/components/animated-button';
import { routes } from '@/lib/routes';

const Projects = () => {
    const plugin = useRef(Autoplay({ delay: 3000 }))

    const projectList = [
        {
            imgSrc: "/images/concretePage/project-1.jpg",
            client: "Precast",
            projectTitle: "Girders and Beams",
            tag1: "Concrete",
            tag2: "Construction"
        },
        {
            imgSrc: "/images/concretePage/project-2.jpg",
            client: "Precast",
            projectTitle: "Simple Slab",
            tag1: "Concrete",
            tag2: "Construction"
        },
        {
            imgSrc: "/images/concretePage/project-3.jpg",
            client: "Pricast",
            projectTitle: "Special Slab",
            tag1: "Concrete",
            tag2: "Construction"
        },
        {
            imgSrc: "/images/concretePage/project-4.jpg",
            client: "Precast",
            projectTitle: "Boundery Wall",
            tag1: "Concrete",
            tag2: "Construction"
        },
        {
            imgSrc: "/images/concretePage/project-5.jpg",
            client: "Precast",
            projectTitle: "Kurb Stones",
            tag1: "Concrete",
            tag2: "Construction"
        },
        {
            imgSrc: "/images/concretePage/project-6.jpg",
            client: "Precast",
            projectTitle: "Farshi Pavers",
            tag1: "Concrete",
            tag2: "Construction"
        },
    ]
    return (
        <div className='pb-40 lg:pb-45 xl:pb-52.5 pt-22.5 bg-black selection:bg-[var(--primary-color)] selection:text-white'>
            {/* title */}
            <div className='w-full px-3 mx-auto sm:w-[90%] md:w-180 lg:w-[90%] 2xl:max-w-[1320px]'>
                <div className="flex flex-col items-center justify-center mb-15 lg:mb-17.5">
                    <span className='text-[var(--primary-color)] w-fit text-sm font-medium leading-[1] uppercase inline-block mb-2.5 relative'>
                        <div className='absolute top-1/2 -translate-y-1/2 -right-10 w-9 h-px bg-[var(--secondary-color)]' />
                        Our latest products</span>
                    <h2 className='leading-[1.1] text-center font-bold text-white text-[calc(1.8rem+1.8vw)]'>Our Innovative Precast <br /> Products</h2>
                </div>
            </div>

            {/* project slider area */}
            <div className='py-5 pl-4 sm:px-4 border-y border-y-white/20 mb-12.5 '>

                <Carousel className="w-full"
                    opts={{
                        align: 'start',
                        containScroll: 'trimSnaps'
                    }}
                    plugins={[plugin.current]}>
                    <CarouselContent className='sm:divide-x sm:divide-white/20'>
                        {projectList.map((project, index) => (
                            <CarouselItem key={index} className='sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-0'>
                                <div className="group mx-4 relative overflow-hidden">
                                    <div className='absolute left-0 bottom-0 w-full h-full bg-white/50 z-20 -skew-45 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out group-hover:animate-shimmer-sweep group-hover:transition-all group-hover:duration-200 group-hover:ease-[cubic-bezier(0.175,0.885,0.32,1.275)]' />
                                    {/*project image */}
                                    <div>
                                        <Image
                                            src={project.imgSrc}
                                            alt={project.projectTitle}
                                            width={430}
                                            height={450}
                                            className='w-full h-auto object-cover'
                                        />
                                    </div>
                                    {/* project content */}
                                    <div className='absolute px-4 py-7.5 top-0 left-0 w-full h-full flex items-end z-30 bg-linear-[rgba(0,0,0,0)_24.28%,rgba(0,0,0,0.8)_91.5%]'>
                                        <div>
                                            <span className='text-white/70 text-[13px] font-medium leading-[1] block mb-2.5 tracking-[0.02em]'>Client: {project.client}</span>
                                            <h3 className='mb-5'>
                                                <Link
                                                    className=' font-medium text-white leading-[1.2] text-[28px] transition-all duration-300 cursor-pointer hover:text-[var(--primary-color)]'
                                                    href={routes.project}>
                                                    {project.projectTitle}
                                                </Link>
                                            </h3>
                                            <ul className="flex items-center flex-wrap gap-2.5">
                                                <li>
                                                    <Link
                                                        className='text-white text-xs font-medium bg-white/15 backdrop-blur-[6px] rounded-[15px] py-[5px] px-3.5 border border-white/20 transition-all duration-300 cursor-pointer hover:bg-[var(--secondary-color)] hover:border-[var(--secondary-color)]'
                                                        href={routes.project}>
                                                        {project.tag1}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className='text-white text-xs font-medium bg-white/15 backdrop-blur-[6px] rounded-[15px] py-[5px] px-3.5 border border-white/20 transition-all duration-300 cursor-pointer hover:bg-[var(--secondary-color)] hover:border-[var(--secondary-color)]'
                                                        href={routes.project}>
                                                        {project.tag2}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

            {/* button */}
            <div className='flex justify-center w-full'>
            <AnimatedButton 
            href={routes.project} 
            bgColor="#ffffff" 
            hoverBgColor="var(--primary-color)" 
            borderColor="border-white" 
            hoverBorderColor="var(--primary-color)">
                VIEW ALL PROJECTS
            </AnimatedButton>
        </div>
        </div >
    )
}

export default Projects