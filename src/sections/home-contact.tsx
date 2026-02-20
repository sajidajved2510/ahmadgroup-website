import ContactForm from '@/components/contact-form'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ArrowDown } from 'lucide-react'
import React from 'react'

const HomeContact = () => {
    const queries = [
        {
            id: '01',
            question: "Do you provide design constructionand supply services?",
            answer: "Yes, Ahmad Group offers complete construction material supply — including concrete products, tiles, and finishing materials across Pakistan."
        },
        {
            id: '02',
            question: "Is it suitable for my business?",
            answer: "Absolutely! Our solutions are ideal for builders, contractors, and property developers — ensuring quality, durability, and value in every project."
        },
        {
            id: '03',
            question: "What is your typical project timeline?",
            answer: "Timelines depend on the project scale, but we always prioritize on-time delivery and smooth coordination from start to finish."
        },
        {
            id: '04',
            question: "How do you handle permits and inspections?",
            answer: "We ensure compliance with all local construction standards and safety regulations to guarantee quality and reliability in every delivery."
        },
        {
            id: '05',
            question: "How do you handle waste disposal and recycling?",
            answer: "Ahmad Group practices eco-friendly production — recycling materials and reducing waste to promote a cleaner, sustainable environment."
        },
    ]
    return (
        <div id='contact' className='w-full mb-20 lg:mb-25 xl:mb-30 selection:bg-[var(--primary-color)] selection:text-white'>
            <div className='w-full px-3 mx-auto sm:max-lg:max-w-[80%] lg:w-[90%] 2xl:max-w-[1410px]'>
                <div className="grid grid-cols-12">

                    {/* Left Column */}
                    <div className='col-span-12 lg:col-span-5 xl:px-3 mt-12'>
                        {/* header */}
                        <div className='flex flex-col mb-[min(70px,10vh)]'>
                            <span className='text-xs w-fit bg-black/5 text-[var(--secondary-color)] px-2.5 py-4 font-medium uppercase mb-2.5 block'>Connect with us</span>
                            <h2 className='text-[32px] md:text-4xl lg:text-[45px] xl:text-[50px] 2xl:text-6xl font-medium'>Industry Inquiries & Support</h2>
                        </div>

                        {/* queries */}
                        <div className='w-full'>
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                                defaultValue="01"
                            >
                                {
                                    queries.map((item, index) => (
                                        <AccordionItem key={index} value={item.id} className='border-b border-b-black/10 border-t border-t-black/10'>
                                            <AccordionTrigger
                                                indicator={<ArrowDown />}
                                                className='pt-9 pb-5'
                                            >
                                                <div className='flex gap-2 items-start w-full text-base 2xl:text-lg capitalize'>
                                                    <span>{item.id}.</span>
                                                    <p>{item.question}</p>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-sm md:text-base text-[#00000099] pl-7 w-5/6">

                                                <p className='selection:bg-[var(--primary-color)] selection:text-white leading-[1.8]'>
                                                    {item.answer}
                                                </p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))
                                }
                            </Accordion>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className='col-span-12 lg:col-span-7 sm:px-3 mt-12'>
                        <div className='lg:ml-5 xl:ml-12.5 mt-13 px-5 sm:px-12.5 bg-[#faf8fb] rounded-[20px]'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeContact
