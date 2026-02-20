import { BsArrowDownRight } from "react-icons/bs";
import React from 'react'
import Image from "next/image";
import { routes } from "@/lib/routes";

const About = () => {
    return (
        <div className='mb-17.5 lg:mb-22.5 xl:mb-30 selection:bg-[var(--secondary-color)] selection:text-white'>
            <div className='w-full sm:px-3 mx-auto sm:w-[90%] md:w-180 lg:w-[90%] 2xl:max-w-[1320px]'>
                {/* top area */}
                <div className="mb-12.5">
                    <div className="flex max-lg:flex-col lg:gap-4 xl:gap-6 lg:items-center justify-between">
                        <div className='w-full lg:w-3/4 xl:w-2/3 mt-6 px-3'>
                            {/* title */}
                            <div>
                                <span className='text-[var(--secondary-color)] text-sm font-medium leading-[1] uppercase inline-block mb-2.5 relative'>
                                    <div className='absolute top-1/2 -translate-y-1/2 -right-10 w-9 h-px bg-[var(--secondary-color)]' />
                                    About our story</span>
                                <h2 className='leading-[1.1] font-semibold text-[calc(1.8rem+1.8vw)]'>Our Legacy of Concrete Excellence — Built to Last.</h2>
                            </div>

                            {/* video & content */}
                            <div className="flex max-md:flex-col md:items-center gap-5 lg:gap-12.5 pt-6 lg:pt-10 lg:pl-20 xl:pl-24">
                                <div className="relative w-fit group cursor-pointer">

                                    <svg className="stroke-[var(--secondary-color)] fill-none max-sm:w-17" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="70px" viewBox="0 0 206 206" xmlSpace="preserve"><circle className="circle" strokeMiterlimit="10" cx="103" cy="103" r="100"></circle><path style={{transition: 'stroke-dashoffset .8s cubic-bezier(.33,1,.68,1)'}} className="group-hover:[stroke-dashoffset:0]" strokeDasharray="430" strokeDashoffset="320" strokeWidth="4" strokeMiterlimit="10" d="M16.4,53C44,5.2,105.2-11.2,153,16.4s64.2,88.8,36.6,136.6"></path><path className="circle-half bottom-half" strokeWidth="4" strokeMiterlimit="10" d="M189.6,153C162,200.8,100.8,217.2,53,189.6S-11.2,100.8,16.4,53"></path></svg>
                                    <svg className="absolute fill-[var(--secondary-color)] top-1/2 left-1/2 -translate-1/2 ml-0.5" width="22" height="26" viewBox="0 0 22 26" xmlns="http://www.w3.org/2000/svg"><path d="M21.0414 12.6872C21.0414 11.9857 20.68 11.3397 20.0741 10.9581L3.71746 0.667707C3.05587 0.252161 2.24905 0.221801 1.5565 0.588432C0.866106 0.954858 0.453125 1.63119 0.453125 2.39695V22.9762C0.453125 23.742 0.866072 24.4181 1.55755 24.7847C1.87989 24.9547 2.22564 25.0392 2.57141 25.0392C2.96897 25.0392 3.36391 24.927 3.71724 24.7054L20.0739 14.4166C20.68 14.0348 21.0414 13.3888 21.0414 12.6874V12.6872ZM19.4837 13.5246L3.12701 23.8134C2.80597 24.015 2.41492 24.0287 2.07958 23.8524C1.74423 23.6749 1.5435 23.3475 1.5435 22.976V2.39676C1.5435 2.02528 1.74423 1.69657 2.07958 1.52035C2.2363 1.43855 2.40452 1.39701 2.57165 1.39701C2.76458 1.39701 2.9562 1.45119 3.12725 1.55956L19.4839 11.85C19.7817 12.0376 19.9526 12.3438 19.9526 12.6887C19.9523 13.0323 19.7815 13.337 19.4837 13.5246Z"></path></svg>
                                </div>
                                <p className="text-black/60 relative md:pl-4 before:hidden md:before:block before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-0.5 before:h-full before:bg-black/30 ">
                                    Since 1988, An Ahmad Concert has been a trusted name in Pakistan’s precast industry, setting benchmarks in quality, integrity, and professionalism. With a legacy of durability and excellence, we specialize in manufacturing top-tier precast concrete products in South Punjab, ensuring reliability and innovation in every structure.
                                </p>
                            </div>
                        </div>

                        {/* About button */}
                        <div className='lg:w-1/6 mt-6 px-3 flex lg:justify-end'>
                            <a href={routes.about} className='group relative inline-block'>
                                <div>
                                    <svg className='fill-transparent stroke-[#0000001a] group-hover:fill-[var(--secondary-color)] group-hover:stroke-[var(--secondary-color)] transition-all duration-200 ease-in' width="170" height="170" viewBox="0 0 170 170" xmlns="http://www.w3.org/2000/svg"><path d="M77.3692 2.27213C82.1102 -0.382126 87.8898 -0.382126 92.6308 2.27213C95.8749 4.08835 99.6604 4.68792 103.307 3.96307C108.636 2.90377 114.133 4.68978 117.822 8.67916C120.346 11.409 123.761 13.149 127.453 13.5865C132.848 14.2258 137.524 17.623 139.8 22.557C141.357 25.9332 144.067 28.6434 147.443 30.2003C152.377 32.4757 155.774 37.1516 156.414 42.5472C156.851 46.2393 158.591 49.6543 161.321 52.1784C165.31 55.8671 167.096 61.3638 166.037 66.693C165.312 70.3396 165.912 74.1251 167.728 77.3692C170.382 82.1102 170.382 87.8898 167.728 92.6308C165.912 95.8749 165.312 99.6604 166.037 103.307C167.096 108.636 165.31 114.133 161.321 117.822C158.591 120.346 156.851 123.761 156.414 127.453C155.774 132.848 152.377 137.524 147.443 139.8C144.067 141.357 141.357 144.067 139.8 147.443C137.524 152.377 132.848 155.774 127.453 156.414C123.761 156.851 120.346 158.591 117.822 161.321C114.133 165.31 108.636 167.096 103.307 166.037C99.6604 165.312 95.8749 165.912 92.6308 167.728C87.8898 170.382 82.1102 170.382 77.3692 167.728C74.1251 165.912 70.3396 165.312 66.693 166.037C61.3638 167.096 55.8671 165.31 52.1784 161.321C49.6543 158.591 46.2393 156.851 42.5472 156.414C37.1516 155.774 32.4757 152.377 30.2003 147.443C28.6434 144.067 25.9332 141.357 22.557 139.8C17.623 137.524 14.2258 132.848 13.5865 127.453C13.149 123.761 11.409 120.346 8.67916 117.822C4.68978 114.133 2.90377 108.636 3.96307 103.307C4.68792 99.6604 4.08835 95.8749 2.27213 92.6308C-0.382126 87.8898 -0.382126 82.1102 2.27213 77.3692C4.08835 74.1251 4.68792 70.3396 3.96307 66.693C2.90377 61.3638 4.68977 55.8671 8.67916 52.1784C11.409 49.6543 13.149 46.2393 13.5865 42.5472C14.2258 37.1516 17.623 32.4757 22.557 30.2003C25.9332 28.6434 28.6434 25.9332 30.2003 22.557C32.4757 17.623 37.1516 14.2258 42.5472 13.5865C46.2393 13.149 49.6543 11.409 52.1784 8.67916C55.8671 4.68977 61.3638 2.90377 66.693 3.96307C70.3396 4.68792 74.1251 4.08835 77.3692 2.27213Z"></path><path d="M77.6135 2.70841C82.2027 0.139114 87.7973 0.139114 92.3865 2.70841C95.7345 4.58277 99.6412 5.20153 103.404 4.45348C108.563 3.42808 113.884 5.15692 117.455 9.01861C120.059 11.8358 123.584 13.6315 127.394 14.083C132.617 14.7019 137.143 17.9903 139.346 22.7664C140.952 26.2507 143.749 29.0476 147.234 30.6544C152.01 32.8569 155.298 37.3831 155.917 42.6061C156.368 46.4163 158.164 49.9406 160.981 52.5455C164.843 56.1161 166.572 61.437 165.547 66.5955C164.798 70.3588 165.417 74.2655 167.292 77.6135C169.861 82.2027 169.861 87.7973 167.292 92.3865C165.417 95.7345 164.798 99.6412 165.547 103.404C166.572 108.563 164.843 113.884 160.981 117.455C158.164 120.059 156.368 123.584 155.917 127.394C155.298 132.617 152.01 137.143 147.234 139.346C143.749 140.952 140.952 143.749 139.346 147.234C137.143 152.01 132.617 155.298 127.394 155.917C123.584 156.368 120.059 158.164 117.455 160.981C113.884 164.843 108.563 166.572 103.404 165.547C99.6412 164.798 95.7345 165.417 92.3865 167.292C87.7973 169.861 82.2027 169.861 77.6135 167.292C74.2655 165.417 70.3588 164.798 66.5955 165.547C61.437 166.572 56.1161 164.843 52.5455 160.981C49.9406 158.164 46.4163 156.368 42.6061 155.917C37.3831 155.298 32.8569 152.01 30.6544 147.234C29.0476 143.749 26.2507 140.952 22.7664 139.346C17.9903 137.143 14.7019 132.617 14.083 127.394C13.6315 123.584 11.8358 120.059 9.01861 117.455C5.15692 113.884 3.42808 108.563 4.45348 103.404C5.20153 99.6412 4.58277 95.7345 2.70841 92.3865C0.139114 87.7973 0.139114 82.2027 2.70841 77.6135C4.58277 74.2655 5.20153 70.3588 4.45348 66.5955C3.42808 61.437 5.15692 56.1161 9.01861 52.5455C11.8358 49.9406 13.6315 46.4163 14.083 42.606C14.7019 37.3831 17.9903 32.8569 22.7664 30.6544C26.2507 29.0476 29.0476 26.2507 30.6544 22.7664C32.8569 17.9903 37.3831 14.7019 42.606 14.083C46.4163 13.6315 49.9406 11.8358 52.5455 9.01861C56.1161 5.15692 61.437 3.42808 66.5955 4.45348C70.3588 5.20153 74.2655 4.58277 77.6135 2.70841Z" strokeOpacity="0.1"></path></svg>
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-1/2 inline-block pr-4 pb-[3px] whitespace-nowrap group-hover:text-white gap-6 align-top uppercase text-xs leading-[1.4]">
                                    <span className='absolute block group-hover:text-white group-hover:opacity-0 right-0 top-0 opacity-100 transition-opacity duration-300 delay-100 text-black'><BsArrowDownRight /></span>
                                    <span className="absolute bottom-0 left-0 w-full h-[0.5px] bg-black group-hover:bg-white origin-right scale-x-100 group-hover:scale-x-0 transition-transform duration-200" />
                                    About Us More
                                    <svg
                                        className='absolute block w-4 h-5.5 right-0 -top-0.5 fill-none stroke-black group-hover:stroke-white group-hover:[stroke-dashoffset:26]'
                                        style={{ transition: "stroke-dashoffset .3s cubic-bezier(0.3,1.5,0.5,1) .195s" }}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeDasharray={"7.95 30"}
                                        strokeDashoffset={46}
                                        viewBox="0 0 13 20"
                                    >
                                        <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5"></polyline>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* main content */}
                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-5 px-3 flex flex-col">
                        <p className="text-black/60 leading-[1.9] ">
                            Ahmad Concrete builds trust through strength, innovation, and quality. From Ready Boundary Walls to Precast Slabs, Pavers, Girders, and Beams — every product reflects precision and durability. We deliver reliable concrete solutions for homes, industries, and infrastructure across Pakistan.
                        </p>
                        <ul className="max-lg:flex max-sm:flex-wrap pt-6 sm:pt-9 xl:pt-13 gap-6 sm:max-lg:gap-7.5 lg:w-4/5">
                            <li className="sm:mb-9 xl:mb-13">
                                <h6 className="font-bold text-[22px] mb-4 leading-[1.2]">OUR MISSION</h6>
                                <p className="text-black/60 leading-[1.9] text-justify">
                                    Ahmad Concrete aims to provide high-quality, Durable, and sustainable precast solutions, enhancing Construction efficiency and contributing to Pakistan’s infrastructure.
                                </p>
                            </li>
                            <li>
                                <h6 className="font-bold text-[22px] mb-4 leading-[1.2]">OUR VISION</h6>
                                <p className="text-black/60 leading-[1.9] text-justify">
                                    Ahmad Concrete aims to be Pakistan’s most trusted Precast manufacturer, delivering durable, eco-Friendly, and cost-effective construction solutions.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-12 lg:col-span-7 px-3 flex max-sm:mt-6">
                        <div className="">
                            <Image
                                src="/images/concretePage/aboutBanner.jpg"
                                alt="about-us"
                                width={750}
                                height={580}
                                className="max-w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
