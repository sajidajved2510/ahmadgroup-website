"use client";
import { X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const HomeVideoBanner = () => {
    const [showVideo, setShowVideo] = React.useState(false)
    const clients = [
        "images/clients-logo/1.png",
        "images/clients-logo/2.png",
        "images/clients-logo/3.png",
        "images/clients-logo/4.png",
        "images/clients-logo/5.png",
        "images/clients-logo/6.png",
        "images/clients-logo/7.png",
        "images/clients-logo/8.png",
        "images/clients-logo/9.png",
        "images/clients-logo/10.png",
        "images/clients-logo/11.png",
        "images/clients-logo/12.png",
        "images/clients-logo/13.png",
        "images/clients-logo/14.png",
        "images/clients-logo/15.png",
        "images/clients-logo/16.png",
        "images/clients-logo/17.png",
        "images/clients-logo/18.png",
        "images/clients-logo/19.png",
        "images/clients-logo/20.png",
        "images/clients-logo/21.png",
        "images/clients-logo/22.png",
        "images/clients-logo/23.png",
        "images/clients-logo/24.png",
        "images/clients-logo/25.png",
        "images/clients-logo/26.png",
        "images/clients-logo/27.png",
        "images/clients-logo/28.png",
        "images/clients-logo/29.png",
        "images/clients-logo/30.png",
        "images/clients-logo/31.png",
        "images/clients-logo/32.png",
    ]
    return (
        <div className='w-full px-2.5 md:px-4 lg:px-9 mb-20 lg:mb-25 xl:mb-30'>
            <div className='relative rounded-lg md:rounded-[20px] lg:rounded-[30px] min-h-162.5 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black/30 before:z-10 before:rounded-lg md:before:rounded-[20px] lg:before:rounded-[30px]'>
                <Image
                    src="/images/video-banner.png"
                    alt="home-video-banner"
                    loading='lazy'
                    width={1835}
                    height={893}
                    className='rounded-lg md:rounded-[20px] lg:rounded-[30px] min-h-162.5 h-full object-cover'
                />

                {/* circular component */}
                <div onClick={() => setShowVideo(true)} className='absolute inset-0 m-auto rounded-full flex items-center justify-center z-20 size-30 bg-white cursor-pointer'>
                    <a href="" className='size-16 bg-[#6a6b6b] flex items-center justify-center rounded-full hover:cursor-pointer'>
                        <svg className='fill-white ml-1' width="24" height="27" viewBox="0 0 24 27" xmlns="http://www.w3.org/2000/svg"><path d="M21.3787 9.99987L4.82154 0.433939C4.34825 0.153923 3.80926 0.00420458 3.25936 0C2.39492 0 1.56589 0.343396 0.954645 0.954644C0.343396 1.56589 0 2.39492 0 3.25936V23.7895C0.000109938 24.3631 0.153886 24.9263 0.445339 25.4203C0.736791 25.9144 1.15528 26.3214 1.65729 26.599C2.1593 26.8766 2.72651 27.0146 3.29994 26.9988C3.87336 26.9829 4.43207 26.8137 4.91797 26.5088L21.4944 16.0364C22.0098 15.7139 22.4329 15.2633 22.7224 14.7286C23.0119 14.1939 23.1579 13.5933 23.1463 12.9854C23.1346 12.3775 22.9657 11.7829 22.6559 11.2597C22.3461 10.7365 21.9061 10.3024 21.3787 9.99987Z"></path></svg>
                    </a>
                    <div className='absolute w-full h-full animate-textRotation'>
                        {"PRECAST . BUILDER . TILES .".split("").map((char, index) => (
                            <span
                                key={index}
                                className="absolute left-1/2 text-[13px] font-bold origin-[0_60px]"
                                style={{ transform: `rotate(${index * 13}deg)` }} // 13° spacing
                            >
                                {char}
                            </span>
                        ))}
                    </div>
                </div>

                {/* logo section */}
                <div className='absolute w-full left-0 bottom-0 bg-white/60 backdrop-blur-xs rounded-b-lg md:rounded-b-[20px] lg:rounded-b-[30px] z-20 px-2.5 sm:px-[2%] lg:px-[4%] xl:px-[6%] py-7.5 2xl:px-[10%]'>
                    <div className="w-full px-3 mx-auto">
                        <div className="flex max-sm:flex-col sm:items-center gap-5 sm:gap-7.5">
                            {/* logo title */}
                            <div className="pr-6 sm:border-r sm:border-r-white/30 min-w-50 ">
                                <h6 className="text-white text-[17px] font-medium leading-[1.4] uppercase">A partner, Not a Vendor:</h6>
                            </div>

                            {/* marquee */}

                            <div className="flex overflow-hidden gap-10 xl:gap-20 select-none">
                                {/* marquee-group 1 */}
                                <div className="flex shrink-0 items-center gap-10 xl:gap-20 animate-scrollX">
                                    {
                                        clients.map((client, index) => (
                                            <a href="#" key={index}>
                                                <Image
                                                    alt='logo'
                                                    src={client}
                                                    loading='lazy'
                                                    decoding='async'
                                                    width={100}
                                                    height={50}
                                                    className='rounded-lg md:rounded-xl h-auto max-h-20 object-cover w-auto max-w-full'
                                                />
                                            </a>
                                        ))}
                                </div>
                                {/* marquee-group 2 */}
                                <div aria-hidden="true" className="flex shrink-0 items-center gap-10 xl:gap-20 animate-scrollX">
                                    {
                                        clients.map((client, index) => (
                                            <a href="#" key={index}>
                                                <Image
                                                    alt='logo'
                                                    src={client}
                                                    loading='lazy'
                                                    decoding='async'
                                                    width={100}
                                                    height={50}
                                                    className='rounded-lg md:rounded-xl h-auto max-h-20 object-cover w-auto max-w-full'
                                                />
                                            </a>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {showVideo && (
                    <div className='absolute inset-0 flex justify-center items-center bg-black/50 m-auto z-30 w-full px-3'>
                        <div className=' flex flex-col items-end justify-center  w-full min-w-[300px] max-w-[400px] md:max-w-200 h-full'>

                            <X onClick={() => setShowVideo(false)} strokeWidth={1.5} className='size-10 md:size-[4vw] text-2xl cursor-pointer text-white' />
                            <div className='relative w-full overflow-hidden h-1/3 md:h-1/2'>
                                <p>
                                    <iframe src="https://www.youtube.com/embed/h23mqFb52oU?si=QFsihDjG0QXr9V1O"
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
        </div>
    )
}

export default HomeVideoBanner
