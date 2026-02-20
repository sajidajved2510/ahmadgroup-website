import React from 'react'

const ProcessSteps = () => {
    return (
        <div className='mb-17.5 lg:mb-22.5 xl:mb-30 selection:bg-[var(--secondary-color)] selection:text-white'>
            {/* title */}
            <div className='w-full px-3 mx-auto sm:w-[90%] md:w-180 lg:w-[90%] 2xl:max-w-[1320px]'>
                <div className="flex flex-col items-center justify-center mb-15 lg:mb-17.5">
                    <span className='text-[var(--secondary-color)] w-fit text-sm font-medium leading-[1] uppercase inline-block mb-2.5 relative'>
                        <div className='absolute top-1/2 -translate-y-1/2 -right-10 w-9 h-px bg-[var(--secondary-color)]' />
                        Process our work</span>
                    <h2 className='leading-[1.1] text-center font-bold  text-[calc(1.8rem+1.8vw)]'>The Experts Behind <br /> The Process</h2>
                </div>
            </div>

            {/* process container */}
            <div className="w-full px-3">
                <div className='flex gap-6 md:gap-4 max-lg:flex-wrap lg:gap-6 xl:gap-5 2xl:gap-6 sm:px-6 lg:px-[1%] xl:px-[3%] 2xl:px-[6%] items-start'>

                    {/* Process 1 */}
                    <div className="flex max-md:w-full gap-4 xl:gap-5 2xl:gap-6 min-[1200px]:mt-7.5">
                        {/* process card */}
                        <div className='relative bg-[#e3e3e3] border border-black/10 rounded-[15px] md:max-w-85 lg:max-w-87.5 w-full px-3.5 2xl:px-7 pt-10 2xl:pt-11 pb-7.5 2xl:pb-9'>
                            {/* step no */}
                            <div className="inline-flex justify-center items-center mb-7.5 sm:mb-10 bg-white border border-black/30 rounded-full py-[7px] px-5.5 whitespace-nowrap relative transition-all duration-300">
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rotate-45 size-[15px] bg-white rounded-br-[4px] border-t-0 border-l-0 border border-black/30 transition-all duration-300" />
                                <span className='text-[var(--secondary-color)] text-[13px] font-medium tracking-[0.51px] leading-[1] transition-all duration-300'>STEP : 01</span>
                            </div>
                            <h3 className='font-semibold text-[22px] sm:text-2xl mb-5 sm:mb-6'>Planning &amp; <br />Product Design</h3>
                            <p className='text-black/60 leading-6.5'>We map project needs and prepare precise design plans for durable, cost-effective concrete solutions.</p>
                            <svg className="fill-white absolute -top-px -right-px" width="75" height="75" viewBox="0 0 75 75" xmlns="http://www.w3.org/2000/svg"><rect width="25" height="25"></rect><rect x="25" y="25" width="25" height="25"></rect><rect y="50" width="25" height="25"></rect><rect x="50" y="50" width="25" height="25"></rect></svg>

                        </div>

                        {/* process flow moving svg */}
                        <svg className="max-[1200px]:hidden xl:min-w-32.5 2xl:min-w-41 mt-11" width="181" height="124" viewBox="0 0 181 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.2" id="theMotionPath11" d="M0 123H67.5C84.0685 123 97.5 109.569 97.5 93V31C97.5 14.4315 110.931 1 127.5 1H181" stroke="black"></path>
                            <path d="M0 0 L13 0" stroke="url(#paint0_linear_354_7441)" strokeLinecap="round" strokeWidth="2">
                                <animateMotion dur="4s" begin="0s" repeatCount="indefinite" rotate="auto">
                                    <mpath href="#theMotionPath11"></mpath>
                                </animateMotion>
                            </path>
                            <defs>
                                <linearGradient id="paint0_linear_354_7441" x1="10" y1="0" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="var(--secondary-color)" offset="0"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* Process 2 */}
                    <div className="flex max-md:w-full">
                        {/* Process card */}
                        <div className='relative bg-[#e3e3e3] border border-black/10 rounded-[15px] md:max-w-85 lg:max-w-87.5 w-full px-3.5 2xl:px-7 pt-10 2xl:pt-11 pb-7.5 2xl:pb-9'>
                            {/* step no */}
                            <div className="inline-flex justify-center items-center mb-7.5 sm:mb-10 bg-white border border-black/30 rounded-full py-[7px] px-5.5 whitespace-nowrap relative transition-all duration-300">
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rotate-45 size-[15px] bg-white rounded-br-[4px] border-t-0 border-l-0 border border-black/30 transition-all duration-300" />
                                <span className='text-[var(--secondary-color)] text-[13px] font-medium tracking-[0.51px] leading-[1] transition-all duration-300'>STEP : 02</span>
                            </div>
                            <h3 className='font-semibold text-[22px] sm:text-2xl mb-5 sm:mb-6'>Material Sourcing & Preparation</h3>
                            <p className='text-black/60 leading-6.5'>We select premium raw materials and prepare mixes to ensure consistent strength and logn-term performance.</p>
                            <svg className="fill-white absolute -top-px -right-px" width="75" height="75" viewBox="0 0 75 75" xmlns="http://www.w3.org/2000/svg"><rect width="25" height="25"></rect><rect x="25" y="25" width="25" height="25"></rect><rect y="50" width="25" height="25"></rect><rect x="50" y="50" width="25" height="25"></rect></svg>
                        </div>
                    </div>

                    {/* Process 3 */}
                    <div className="flex max-md:w-full gap-4 xl:gap-5 2xl:gap-6 min-[1200px]:mt-7.5">

                        {/* process flow moving svg */}
                        <svg className="max-[1200px]:hidden xl:min-w-32.5 2xl:min-w-41 mt-11" width="181" height="124" viewBox="0 0 181 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.2" id="theMotionPath12" d="M181 123H113.5C96.9315 123 83.5 109.569 83.5 93V31C83.5 14.4315 70.0685 1 53.5 1H0" stroke="black"></path>
                            <path d="M0 0 L13 0" stroke="url(#paint0_linear_354_7442)" strokeLinecap="round" strokeWidth="2">
                                <animateMotion dur="4s" begin="0s" repeatCount="indefinite" rotate="auto" keyPoints="1;0" keyTimes="0;1">
                                    <mpath href="#theMotionPath12"></mpath>
                                </animateMotion>
                            </path>
                            <defs>
                                <linearGradient id="paint0_linear_354_7442" x1="10" y1="0" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="var(--secondary-color)" offset="0"></stop>
                                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* process card */}
                        <div className='relative bg-[#e3e3e3] border border-black/10 rounded-[15px] md:max-w-85 lg:max-w-87.5 w-full px-3.5 2xl:px-7 pt-10 2xl:pt-11 pb-7.5 2xl:pb-9'>
                            {/* step no */}
                            <div className="inline-flex justify-center items-center mb-7.5 sm:mb-10 bg-white border border-black/30 rounded-[50px] py-[7px] px-5.5 whitespace-nowrap relative transition-all duration-300">
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rotate-45 size-[15px] bg-white rounded-br-[4px] border-t-0 border-l-0 border border-black/30 transition-all duration-300" />
                                <span className='text-[var(--secondary-color)] text-[13px] font-medium tracking-[0.51px] leading-[1] transition-all duration-300'>STEP : 03</span>
                            </div>
                            <h3 className='font-semibold text-[22px] sm:text-2xl mb-5 sm:mb-6'>Manufacturing &amp; Assembly</h3>
                            <p className='text-black/60 leading-6.5'>Factory precision and controlled assembly deliver high-quality precast elements ready for fast on-site installation.</p>
                            <svg className="fill-white absolute -top-px -right-px" width="75" height="75" viewBox="0 0 75 75" xmlns="http://www.w3.org/2000/svg"><rect width="25" height="25"></rect><rect x="25" y="25" width="25" height="25"></rect><rect y="50" width="25" height="25"></rect><rect x="50" y="50" width="25" height="25"></rect></svg>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProcessSteps
