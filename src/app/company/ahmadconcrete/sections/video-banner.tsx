"use client";
import { X } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'

const VideoBanner = () => {
    const [showVideo, setShowVideo] = useState(false)
    return (
        <div className='relative w-full'>
            {/* black overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
            <Image
                src="/images/concretePage/video-bg.jpg"
                alt="video-banner"
                width={1950}
                height={765}
                className='min-h-137.5 object-cover w-full h-auto'
            />

            {/* video icon */}
            <div onClick={() => setShowVideo(true)} className='group absolute top-1/2 left-1/2 -translate-1/2 z-20 cursor-pointer inline-block'>
                <svg className="stroke-white fill-none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="70px" viewBox="0 0 206 206" xmlSpace="preserve"><circle className="circle" strokeMiterlimit="10" cx="103" cy="103" r="100"></circle><path  style={{transition: 'stroke-dashoffset .8s cubic-bezier(.33,1,.68,1)'}} className="group-hover:[stroke-dashoffset:0]" strokeDasharray="430" strokeDashoffset="320" strokeWidth="4" strokeMiterlimit="10" d="M16.4,53C44,5.2,105.2-11.2,153,16.4s64.2,88.8,36.6,136.6"></path><path className="circle-half bottom-half" strokeWidth="4" strokeMiterlimit="10" d="M189.6,153C162,200.8,100.8,217.2,53,189.6S-11.2,100.8,16.4,53"></path></svg>
                <svg className="absolute fill-white top-1/2 left-1/2 -translate-1/2 ml-0.5" width="22" height="26" viewBox="0 0 22 26" xmlns="http://www.w3.org/2000/svg"><path d="M21.0414 12.6872C21.0414 11.9857 20.68 11.3397 20.0741 10.9581L3.71746 0.667707C3.05587 0.252161 2.24905 0.221801 1.5565 0.588432C0.866106 0.954858 0.453125 1.63119 0.453125 2.39695V22.9762C0.453125 23.742 0.866072 24.4181 1.55755 24.7847C1.87989 24.9547 2.22564 25.0392 2.57141 25.0392C2.96897 25.0392 3.36391 24.927 3.71724 24.7054L20.0739 14.4166C20.68 14.0348 21.0414 13.3888 21.0414 12.6874V12.6872ZM19.4837 13.5246L3.12701 23.8134C2.80597 24.015 2.41492 24.0287 2.07958 23.8524C1.74423 23.6749 1.5435 23.3475 1.5435 22.976V2.39676C1.5435 2.02528 1.74423 1.69657 2.07958 1.52035C2.2363 1.43855 2.40452 1.39701 2.57165 1.39701C2.76458 1.39701 2.9562 1.45119 3.12725 1.55956L19.4839 11.85C19.7817 12.0376 19.9526 12.3438 19.9526 12.6887C19.9523 13.0323 19.7815 13.337 19.4837 13.5246Z"></path></svg>
            </div>

            {/* video player dialog*/}
            {showVideo && (
                <div className='absolute inset-0 flex justify-center items-center bg-black/50 m-auto z-30 w-full px-3'>
                    <div className=' flex flex-col items-end justify-center  w-full min-w-[300px] max-w-[400px] md:max-w-200 h-full'>

                        <X onClick={() => setShowVideo(false)} strokeWidth={1.5} className='size-10 md:size-[3.5vw] text-2xl cursor-pointer text-white' />
                        <div className='relative w-full overflow-hidden h-1/3 md:h-1/2'>
                            <p>
                                <iframe src="https://www.youtube.com/embed/V-Rz3wOP0OI?autoplay=1&cc_load_policy=1&controls=1&disablekb=0&enablejsapi=0&fs=1&iv_load_policy=1&loop=0&rel=0&showinfo=1&start=0&wmode=transparent&theme=dark&mute=0"
                                    className='absolute top-0 left-0 right-0 w-full h-full border-none'
                                    width="560"
                                    height="315"
                                    allowFullScreen={true}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default VideoBanner
