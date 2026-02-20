"use client";
import { AnimatedButton } from '@/components/animated-button'
import { routes } from '@/lib/routes';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Service = () => {

    // set 0 as default active, or null if you want none active initially
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const images = [
        "/images/concretePage/service1.jpg",
        "/images/concretePage/service2.jpg",
        "/images/concretePage/service3.jpg",
        "/images/concretePage/service4.jpg",
        "/images/concretePage/service5.jpg",
    ];

    const services = ["Ready Boundary Wall Project", "H-Column, Beam & Girder Project", "Interlocking Pavers Flooring Project", "Kerb Stone Installation Project", "Precast Slabs & Special Slabs Project"];
    return (
        <div className='mb-17.5 lg:mb-22.5 xl:mb-30 py-22.5 bg-[url(/images/concretePage/service-bg.png),linear-gradient(180deg,#D8E7EF,#D8E7EF)]'>
            <div className='w-full px-3 mx-auto sm:w-[90%] md:w-180 lg:w-[90%] 2xl:max-w-[1320px]'>
                <div className="flex max-lg:flex-col lg:items-center justify-between mb-15 lg:mb-17.5">
                    {/* title */}
                    <div className="w-full lg:w-1/2 flex flex-col mt-6 sm:px-3">
                        <span className='text-[var(--secondary-color)] w-fit text-sm font-medium leading-[1] uppercase inline-block mb-2.5 relative'>
                            <div className='absolute top-1/2 -translate-y-1/2 -right-10 w-9 h-px bg-[var(--secondary-color)]' />
                            Our Featured Projects</span>
                        <h2 className='leading-[1.1] font-bold text-[calc(1.8rem+1.8vw)]'>Innovative Precast Solutions</h2>
                    </div>
                    {/* button */}
                    <div className='lg:w-1/4 flex lg:justify-end max-lg:mt-6 max-lg:px-3'>
                        <AnimatedButton href={routes.project} bgColor="transparent" hoverBgColor="var(--secondary-color)" borderColor="border-black" hoverBorderColor="var(--secondary-color)">
                            VIEW ALL SERVICES
                        </AnimatedButton>
                    </div>
                </div>

                {/* Service wrap */}
                <div className="relative min-h-fit md:min-h-120 lg:min-h-135 xl:min-h-142.5">
                    {/* Service Images list */}
                    <ul className='max-sm:hidden'>
                        {images.map((src, i) => {
                            const isActive = activeIndex === i; // Check if current item is active
                            return (
                                <li key={i}>
                                    <div className={`absolute w-full h-full top-0 left-0 transition-all duration-500
                                        ${isActive ? "z-15 animate-image-in" : "z-12 animate-image-out"}`}> {/* Toggle image visibility with z-index and animation based on active state */}
                                        < Image
                                            src={src}
                                            alt={`service ${i + 1}`}
                                            width={1300}
                                            height={570}
                                            className='h-full w-auto object-cover'
                                        />
                                    </div>
                                </li>
                            )
                        })}
                    </ul>

                    {/* service list */}
                    <ul className="relative sm:absolute max-w-112.5 w-full bg-[#d8e7ef] max-sm:border max-sm:border-black/10 max-sm:p-6 py-7.5 px-9 -bottom-0.5 sm:left-5 md:left-15 xl:left-27.5 z-20 space-y-6 [&>*:last-child_*]:border-b-0 [&>*:last-child_*]:pb-0">
                        {services.map((service, index) => (
                            <li key={service}>
                                <Link
                                    href="/service/details"
                                    className='group font-semibold text-lg lg:text-xl leading-[1.2] flex items-center justify-between transition-all duration-500 pb-5 lg:pb-6 hover:text-[var(--secondary-color)] border-b border-b-black/10'
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onMouseLeave={() => setActiveIndex(null)}     // clear on mouse leave; remove if you want default to persist
                                    onFocus={() => setActiveIndex(index)}         // keyboard accessibility
                                    onBlur={() => setActiveIndex(null)}
                                >
                                    {service}
                                    <svg
                                        className="fill-black/12 group-hover:fill-[var(--secondary-color)]/30 group-hover:rotate-45 transition-all duration-500"
                                        width="15"
                                        height="15"
                                        viewBox="0 0 15 15"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden
                                    >
                                        <g>
                                            <path d="M0.0742581 0H15.0001V2.79412L2.82181 15L0 12.2059L8.3169 3.97059L0.0742581 4.04412V0Z" />
                                            <path d="M15.0002 14.9999V5.58813L10.9902 9.55872V14.9999H15.0002Z" />
                                        </g>
                                    </svg>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Service