"use client";
import { AnimatedButton } from '@/components/animated-button'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { routes } from '@/lib/routes';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image'
import React, { useRef } from 'react'

const HomeServices = () => {
    const plugin = useRef(Autoplay({ delay: 5000 }))

    const dataSource = [
      {
        id: "01",
        title: "Concrete Supply & Delivery",
        description: "We provide high-strength, durable concrete solutions for residential, commercial, and industrial projects.",
        image: "/images/services/service-1.png",
        link: "/services/details"
      },
      {
        id: "02",
        title: "Marbles, Tiles & Sanitary Ware",
        description: "Offering a wide range of premium tiles and sanitary products to enhance aesthetics and functionality.",
        image: "/images/services/service-2.png",
        link: "/services/details"
      },
      {
        id: "03",
        title: "Material Transportation & Logistics",
        description: "Safe and efficient delivery of construction materials across Pakistan - on time, every time.",
        image: "/images/services/service-3.png",
        link: "/services/details"
      },
      {
        id: "04",
        title: "Project Consultation & Support",
        description: "Expert guidance from planning to execution, ensuring quality, safety, and cost efficiency.",
        image: "/images/services/service-4.png",
        link: "/services/details"
      },
      {
        id: "05",
        title: "On-Site Mixing & Supervision",
        description: "Professional on-site support to maintain consistency, accuracy, and quality during construction.",
        image: "/images/services/service-5.png",
        link: "/services/details"
      }
    ]

    return (
        <div className='mb-37.5 lg:mb-42.5 xl:mb-50 '>
            <div className='w-full md:px-3 mx-auto sm:w-[90%] 2xl:max-w-[1410px]'>

                {/* header */}
                <div className='flex max-lg:flex-col lg:items-center justify-between mb-[min(20px,10vh)]'>
                    <div className='w-full lg:w-1/2 mt-6 px-3'>
                        <span className='text-xs bg-black/5 text-[var(--secondary-color)] px-2.5 py-4 font-medium uppercase mb-2.5 inline-block'>One industry services</span>
                        <h2 className='text-4xl md:text-[42px] lg:text-5xl xl:text-[50px] 2xl:text-6xl font-medium'>Innovative Construction Services.</h2>
                    </div>
                    <div className='w-full lg:w-1/4 mt-6 px-3 flex lg:justify-end'>
                        <AnimatedButton href={routes.project} bgColor="#ffffff" hoverBgColor="var(--secondary-color)" borderColor="border-[#00000033]" hoverBorderColor="var(--secondary-color)">
                            VIEW ALL SERVICES
                        </AnimatedButton>
                    </div>
                </div>

                {/* Carousal Cards */}
                <div className="mx-auto w-full py-4 mb-12.5 px-4">
                    <Carousel className="w-full"
                    opts={{
                        align: 'start',
                        containScroll: 'trimSnaps'
                    }}
                    plugins={[plugin.current]}>
                        <CarouselContent>
                            {dataSource.map((data, index) => (
                                <CarouselItem key={index} className='sm:basis-1/2 lg:basis-1/3 xl:basis-1/4'>
                                    <div className='py-[6vh] px-[2vw] border-1 border-[#00000008] relative bg-[#f7f6ff] rounded-[10px]'>
                                        <svg className="absolute top-1 right-1 fill-[#00000008]" width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><path d="M0.247529 0H50.0008V9.31379L9.40609 50.0004L0 40.6866L27.7232 13.2354L0.247529 13.4805V0Z"></path><path d="M50.0013 50.0006V18.6278L36.6348 31.8632V50.0006H50.0013Z"></path></svg>
                                        <h4 className='mb-6 font-medium leading-[1.4] text-[1.5rem] '>
                                            <a href="/service/details">{data.title}</a>
                                        </h4>
                                        <div className='group mb-6 block relative overflow-hidden rounded-[5px] '>
                                            <div className='absolute left-0 bottom-0 w-full h-full bg-white/50 z-30 -skew-45 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:animate-shimmer-sweep group-hover:transition-all group-hover:duration-400 group-hover:ease-[cubic-bezier(0.175,0.885,0.32,1.275)]'></div>
                                            <Image src={data.image}
                                                width={240}
                                                height={130}
                                                alt="service-img"
                                                className='object-cover rounded-[5px] transition-all w-full z-10 h-auto scale-100 duration-300 ease-in-out group-hover:scale-110'
                                            />
                                        </div>
                                        <p className='text-[#00000099] leading-6 mb-6 text-[max(14px,0.9vw)]'>{data.description}</p>
                                        <AnimatedButton href="/services/details" bgColor="#ffffff" hoverBgColor="var(--secondary-color)" borderColor="border-[#00000033]" hoverBorderColor="var(--secondary-color)">
                                            View Details
                                        </AnimatedButton>

                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                            <CarouselPrevious className="size-12 top-[calc(100%+3rem)] translate-y-0 -ml-3 left-[30%] sm:left-1/2 border-[#0000004d] text-[#0000004d] hover:bg-[var(--secondary-color)] hover:border-[var(--secondary-color)] hover:text-white " />
                            <CarouselNext className="size-12 top-[calc(100%+3rem)] translate-y-0 left-[30%] sm:left-1/2 ml-6 translate-x-full border-[#0000004d] text-[#0000004d] hover:bg-[var(--secondary-color)] hover:border-[var(--secondary-color)] hover:text-white " />
                    </Carousel>
                </div>

            </div>
        </div>
    )
}

export default HomeServices