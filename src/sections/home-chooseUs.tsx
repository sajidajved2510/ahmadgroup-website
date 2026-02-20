import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Minus, Plus } from 'lucide-react'

function PlusMinusIndicator() {
    return (
        <span aria-hidden className="relative pointer-events-none size-4 shrink-0">
            {/* plus: fades/scales out and rotates when open */}
            <Plus className="text-black size-4 sm:size-5.5 absolute inset-0 transition-all duration-300 ease-out opacity-100 rotate-0 scale-100 group-data-[state=open]:opacity-0 group-data-[state=open]:-rotate-90 group-data-[state=open]:scale-50" />
            {/* minus: fades/scales in and un-rotates when open */}
            <Minus className="text-black size-4 sm:size-5.5 absolute inset-0 transition-all duration-300 ease-out opacity-0 rotate-90 scale-50 group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-0 group-data-[state=open]:scale-100" />
        </span>
    )
}

const HomeChooseUs = () => {
    const data = [
        {
            id: "01",
            title: "Solutions Expert",
            description: "Ahmad Group provides complete construction and material solutions — from concrete supply to finishing works. Our expert team ensures smooth execution, durability, and performance for every project we handle.",
        },
        {
            id: "02",
            title: "Trusted Partner",
            description: "We’re known for reliability and long-term partnerships. Builders and developers across Pakistan trust Ahmad Group for our transparent communication, timely delivery, and consistent quality.",
        },
        {
            id: "03",
            title: "Driving Innovation",
            description: "We adopt modern techniques, efficient machinery, and sustainable materials to deliver innovative construction solutions that meet today’s infrastructure demands.",
        },
        {
            id: "04",
            title: "Pushing The Boundries Of Material Science",
            description: "Ahmad Group continues to redefine quality standards — leading the way in high-strength concrete, elegant tiles, and next-level construction precision.",
        },
        {
            id: "05",
            title: "Quality As Standard",
            description: "Every product and service we offer passes strict testing and quality checks. For us, excellence isn’t an option — it’s a commitment.",
        },
    ]
    return (
        <div className='relative mb-20 lg:mb-25 xl:mb-30 py-22.5 [#CED3BB] bg-[#e3e3e3] before:absolute before:bottom-0 before:left-0 before:content-[url(/images/chooseUs-vector.svg)] selection:bg-[var(--primary-color)] selection:text-white' >
            <div className='w-full px-3 mx-auto sm:w-[90%] 2xl:max-w-[1410px]'>

                {/* header */}
                <div className='flex max-lg:flex-col lg:items-center justify-between mb-[min(60px,10vh)]'>
                    <div className='w-full lg:w-1/2 mt-6 px-3'>
                        <span className='text-xs bg-black/5 text-[var(--secondary-color)] px-2.5 py-4 font-medium uppercase mb-2.5 inline-block'>Why work with us</span>
                        <h2 className='text-[32px] sm:text-[38px] md:text-5xl xl:text-[50px] 2xl:text-6xl leading-[1.1] font-medium'>Why We&apos;re the Right Choice Company</h2>
                    </div>
                    <div className='w-full lg:w-1/4 mt-6 px-3 flex lg:justify-end'>
                        <a href="#contact" className='group w-58.5 h-22.5 border border-black/10 rounded-[50%] flex items-center justify-center transition-all ease-in duration-500 hover:duration-500 hover:shadow-[inset_0_0_0_10em_var(--secondary-color)] hover:border-[var(--secondary-color)] hover:text-white'>
                            <div className='flex gap-6 uppercase items-end text-[13px] font-semibold hover:cursor-pointer'>
                                <span className='pb-0.5 whitespace-nowrap leading-[1] relative'>
                                    contact now
                                    <p className='absolute bottom-0 w-full h-px bg-black rounded-full left-0 group-hover:w-0 transition-all duration-200' />
                                </span>
                                <svg className="mb-2 fill-white/20 transition-all" width="23" height="23" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg"><g><path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z"></path><path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z"></path></g></svg>
                            </div>
                        </a>
                    </div>
                </div>

                <div className='flex justify-end'>
                    <div className='w-full lg:w-11/12 xl:w-10/12 px-3 sm:px-6'>
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                            defaultValue="01"
                        >

                            {
                                data.map((item, index) => (
                                    <AccordionItem key={index} value={item.id} className='border-b-black/10 border-t border-t-black/10'>
                                        <AccordionTrigger
                                            indicator={<PlusMinusIndicator />}
                                        >
                                            <div className='flex sm:gap-2.5 max-md:gap-5 md:justify-between items-center w-full lg:w-4/5 xl:w-3/4 text-lg sm:text-xl'>
                                                <span className=''>{item.id}.</span>
                                                <p className='w-full sm:w-4/5 lg:w-3/5'>{item.title}</p>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="md:pl-[10%] text-balance text-sm md:text-base text-[#00000099]">
                                            <p className='selection:bg-[var(--primary-color)] selection:text-white leading-[1.9]'>
                                                {item.description}
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))
                            }
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeChooseUs
