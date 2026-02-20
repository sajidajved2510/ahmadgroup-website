"use client";
import React from 'react'
import { useState, useRef, useEffect } from 'react'
import CountUp from 'react-countup'

const Counter = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLDivElement | null>(null)

    useEffect(()=>{
        // capture the current ref value so the cleanup uses the same node
        const current = sectionRef.current

        // create observer to detect when section enters viewport
        const observer = new IntersectionObserver(
            ([entry])=>{
                // when section intersects viewport, show counters and stop observing
                if(entry.isIntersecting){
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            // trigger when 10% of the element is visible
            {threshold: 0.1}
        );

        // begin observing the captured element (if present)
        if(current){
            observer.observe(current);
        }

        // cleanup: use the captured `current` so we don't read a possibly changed ref
        return()=>{
            if(current){
                observer.unobserve(current);
            }
        }
    },[])
    return (
        <div ref={sectionRef} className='mb-17.5 lg:mb-22.5 xl:mb-30 -mt-25 z-20 relative'>
            <div className='w-full px-3 mx-auto sm:w-[90%] md:w-180 lg:w-[90%] 2xl:max-w-[1320px]'>
                <div className="px-7.5 xl:px-12.5 2xl:px-15 pt-11 sm:pt-12.5 xl:pt-14 pb-10 xl:pb-10 border border-black/10 shadow-sm bg-white rounded-[20px]">
                    <div className="grid min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6">
                        {/* first counter */}
                        <div className="px-3 relative ">
                            <div className="max-lg:hidden absolute top-1/2 -translate-y-1/2 right-0 w-0.5 h-14 bg-[var(--secondary-color)]/20" />
                            <div>
                                <div className='flex items-center mb-[5px]'>
                                    <h2 className='text-[clamp(65px,4.5vw,75px)] font-bold leading-[1.2] tracking-[0.05em] [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_black]'>
                                        {isVisible && <CountUp end={45} duration={2.5} /> }
                                    </h2>
                                    <span className='text-[clamp(65px,4.5vw,75px)] font-bold leading-[1.2] [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_black]'>+</span>
                                </div>
                                <span className='text-black/60 text-[15px] font-semibold uppercase leading-[1.5]'>Green Spaces</span>
                            </div>
                        </div>

                        {/* second counter */}
                        <div className="px-3 relative  flex lg:justify-center">
                            <div className="max-lg:hidden absolute top-1/2 -translate-y-1/2 right-0 w-0.5 h-14 bg-[var(--secondary-color)]/20" />
                            <div>
                                <div className='flex items-center mb-[5px]'>
                                    <h2 className='text-[clamp(65px,4.5vw,75px)] font-bold leading-[1.2] tracking-[0.05em] [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_black]'>
                                        {isVisible && <CountUp end={146} duration={2.5} /> }
                                    </h2>
                                </div>
                                <span className='text-black/60 text-[15px] font-semibold uppercase leading-[1.5]'>Skilled Professionals</span>
                            </div>
                        </div>

                        {/* third counter */}
                        <div className="px-3 relative flex lg:justify-center">
                            <div className="max-lg:hidden absolute top-1/2 -translate-y-1/2 right-0 w-0.5 h-14 bg-[var(--secondary-color)]/20" />
                            <div>
                                <div className='flex items-center mb-[5px]'>
                                    <h2 className='text-[clamp(65px,4.5vw,75px)] font-bold leading-[1.2] tracking-[0.05em] [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_black]'>10</h2>
                                </div>
                                <span className='text-black/60 text-[15px] font-semibold uppercase leading-[1.5]'>Years of experience</span>
                            </div>
                        </div>

                        {/* fourth counter */}
                        <div className="px-3 relative flex lg:justify-center">
                            <div>
                                <div className='flex items-center mb-[5px]'>
                                    <h2 className='text-[clamp(65px,4.5vw,75px)] font-bold leading-[1.2] tracking-[0.05em] [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_black]'>2</h2>
                                    <span className='text-[clamp(65px,4.5vw,75px)] font-bold leading-[1.2] [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_black]'>M</span>

                                </div>
                                <span className='text-black/60 text-[15px] font-semibold uppercase leading-[1.5]'>Square meters</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter