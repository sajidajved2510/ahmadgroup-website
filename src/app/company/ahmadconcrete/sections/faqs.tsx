import { AnimatedButton } from '@/components/animated-button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { routes } from '@/lib/routes'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Faqs = () => {
    const queries = [
        {
            id: '01',
            question: "Do You provide design and precast services?",
            answer: "Yes, we offer complete precast and construction support - from design construction to production and installation, ensuring top quality and reliability."
        },
        {
            id: '02',
            question: "Is it suitable for my project?",
            answer: "Absolutely. Our precast solutions are ideal for residential, commercial, and industrial structures - offering durability, cost-efficiency, and quick installation."
        },
        {
            id: '03',
            question: "What is your typical project timeline?",
            answer: "Timelines depend on scale and design, but we ensure efficient manufacturing and prompt delivery to meet your construction schedule."
        },
        {
            id: '04',
            question: "How do you ensure on-site installation quality?",
            answer: "Our technical team supervises each installation phase to maintain alignment, streght, and finish consistency."
        },
        {
            id: '05',
            question: "How do you handle waste disposal and recycling?",
            answer: "Our production process minimizes waste. We recycle concrete material wherever possible to support sustainable construction."
        },
        {
            id: '06',
            question: "How do you ensure structures are safe and durable?",
            answer: "Every precast unit undergoes rigorous strength testing and quality control to guarantee long-term safety and performance."
        }
    ]
    return (
        <div className='mb-17.5 lg:mb-22.5 xl:mb-30 selection:bg-[var(--secondary-color)] selection:text-white'>
            <div className='w-full px-3 mx-auto sm:w-[90%] md:w-180 lg:w-[90%] 2xl:max-w-[1320px]'>
                <div className="flex max-lg:flex-col lg:items-center justify-between mb-15 lg:mb-17.5">
                    {/* title */}
                    <div className="w-full lg:w-1/2 flex flex-col mt-6 sm:px-3">
                        <span className='text-[var(--secondary-color)] w-fit text-sm font-medium leading-[1] uppercase inline-block mb-2.5 relative'>
                            <div className='absolute top-1/2 -translate-y-1/2 -right-10 w-9 h-px bg-[var(--secondary-color)]' />
                            Answer Your questions</span>
                        <h2 className='leading-[1.1] font-bold text-[calc(1.8rem+1.8vw)]'>Frequently Asked Questions</h2>
                    </div>
                    {/* button */}
                    <div className='lg:w-1/4 flex lg:justify-end max-lg:mt-6 max-lg:px-3'>
                        <AnimatedButton href={routes.contact} bgColor="transparent" hoverBgColor="var(--secondary-color)" borderColor="border-black" hoverBorderColor="var(--secondary-color)">
                            TALK ANY QUESTION
                        </AnimatedButton>
                    </div>
                </div>

                {/* faq wrap */}
                <div className="grid grid-cols-12 items-center">

                    {/* Left COlumn */}
                    <div className='max-lg:hidden col-span-5 flex justify-center px-3'>
                        <div className='hover:translate-y-2 transition-transform duration-200'>
                            <Image
                                src={"/images/concretePage/faq-illustration.jpg"}
                                alt='FAQ Illustration'
                                width={334}
                                height={450}
                                className='w-full h-auto rounded-[210px] object-cover'
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-span-12 lg:col-span-7 sm:px-3">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                            defaultValue="01"
                        >
                            {
                                queries.map((item, index) => (
                                    <AccordionItem key={index} value={item.id} className='border-b border-b-black/10'>
                                        <AccordionTrigger
                                            indicator={<ArrowDown />}
                                            className={`${index !== 0 ? 'pt-6 sm:pt-9' : 'pt-0'} pb-4 sm:pb-5`}
                                        >
                                            <div className='flex gap-2 items-start w-full text-base 2xl:text-lg capitalize'>
                                                <span>{item.id}.</span>
                                                <p>{item.question}</p>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm md:text-base text-[#00000099] pl-7 w-11/12">

                                            <p className='selection:bg-[var(--primary-color)] selection:text-white leading-[1.8] text-balance'>
                                                {item.answer}
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

export default Faqs