import ContactForm from '@/components/contact-form'
import Image from 'next/image'
import React from 'react'

const ContactUs = () => {
    return (
        <div className='mb-17.5 lg:mb-22.5 xl:mb-30'>
            <div className='w-full px-3 mx-auto sm:w-[90%] md:w-180 lg:w-[90%] 2xl:max-w-[1320px]'>
                <div className='py-15 sm:py-17.5 lg:py-21 px-2.5 sm:px-5 md:px-10 xl:pl-19 xl:pr-12.5 rounded-lg sm:rounded-[20px] md:rounded-[30px] bg-[#F1F5FF]'>
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-12 lg:col-span-4 sm:px-3">
                            <div className="mb-10 lg:mb-15 xl:mb-20">
                                <span className='inline-flex items-center mb-2.5 gap-1.5 bg-transparent border border-[var(--secondary-color)]/20 rounded-full font-semibold py-2 px-6 uppercase'>
                                    <svg className='fill-[var(--secondary-color)]' width="9" height="14" viewBox="0 0 9 14" xmlns="http://www.w3.org/2000/svg"><path d="M8.98296 6.85403C8.95783 6.74844 8.90581 6.65097 8.83186 6.57091C8.7579 6.4908558.66448 6.43086 8.56049 6.39665L5.40652 5.35573L7.64645 0.92109C7.78706 0.642066 7.70293 0.302757 7.44742 0.120036C7.19067 -0.0660481 6.83912 -0.0346848 6.61687 0.186515L0.188418 6.55014C0.11097 6.62683 0.0545794 6.72182 0.024588 6.82611C-0.00540343 6.9304 -0.008003 7.04055 0.0170357 7.14612C0.042173 7.25171 0.0941932 7.34917 0.168144 7.42923C0.242096 7.50929 0.335517 7.56928 0.439511 7.60349L3.59348 8.64441L1.35355 13.0791C1.21294 13.3581 1.29707 13.6974 1.55258 13.8801C1.80847 14.0616 2.15934 14.0351 2.38311 13.8136L8.81158 7.45C8.88903 7.37332 8.94542 7.27833 8.97541 7.17403C9.0054 7.06974 9.008 6.95959 8.98296 6.85403Z"></path></svg>
                                    Get in Touch
                                </span>
                                <h2 className='leading-[1.1] font-semibold text-[calc(1.8rem+1.5vw)]'>Connected With Us</h2>
                            </div>
                            <svg className='max-sm:hidden ml-17 mb-12.5 lg:mb-17.5 xl:mb-22.5 fill-black/20' width="8" height="143" viewBox="0 0 8 143" xmlns="http://www.w3.org/2000/svg"><path d="M1.33333 3C1.33333 4.47276 2.52724 5.66667 4 5.66667C5.47276 5.66667 6.66667 4.47276 6.66667 3C6.66667 1.52724 5.47276 0.333333 4 0.333333C2.52724 0.333333 1.33333 1.52724 1.33333 3ZM3.64645 142.354C3.84171 142.549 4.1583 142.549 4.35356 142.354L7.53554 139.172C7.7308 138.976 7.7308 138.66 7.53554 138.464C7.34028 138.269 7.0237 138.269 6.82843 138.464L4.00001 141.293L1.17158 138.464C0.976317 138.269 0.659734 138.269 0.464472 138.464C0.26921 138.66 0.26921 138.976 0.464472 139.172L3.64645 142.354ZM3.5 3L3.50001 142L4.50001 142L4.5 3L3.5 3Z"></path></svg>
                            <ul className='max-lg:flex max-lg:gap-15 items-center max-sm:flex-wrap max-sm:gap-7.5'>
                                <li className='flex items-center gap-5 sm:mb-12.5'>
                                    <div className='relative'>
                                        <Image src="/phone.svg" alt="contact icon" width={28} height={29} className='w-full h-auto'/>
                                        <div className="absolute h-9 w-px top-1/2 -translate-y-1/2 -right-2.5 bg-black/15"></div>
                                    </div>
                                    {/* content */}
                                    <div>
                                        <span className='block mb-2.5 text-black/60 text-sm '>To More Inquiry</span>
                                        <h6>
                                            <a className='font-semibold text-lg leading-[1] transition-all duration-300 hover:text-[var(--secondary-color)] cursor-pointer' href="tel:+923011383111">+92-3011-383-111</a>
                                        </h6>
                                    </div>
                                </li>
                                <li className='flex items-center gap-5 mb-12.5'>
                                    <div className='relative'>
                                        <Image src="/mail.svg" alt="contact icon" width={26} height={27} className='w-full h-auto'/>
                                        <div className="absolute h-9 w-px top-1/2 -translate-y-1/2 -right-2.5 bg-black/15"></div>
                                    </div>
                                    {/* content */}
                                    <div>
                                        <span className='block mb-2.5 text-black/60 text-sm '>To Send Mail</span>
                                        <h6>
                                            <a className='font-semibold text-lg leading-[1] transition-all duration-300 hover:text-[var(--secondary-color)] cursor-pointer' href="mailto:hello@ahmadgroup.pk">hello@ahmadgroup.pk</a>
                                        </h6>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* contact form */}
                        <div className='col-span-12 lg:col-span-8 sm:px-3'>
                            <div className='lg:ml-5 xl:ml-12.5 px-5 sm:px-12.5 bg-white rounded-[20px]'>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
