import Image from 'next/image'
import React from 'react'

const CareerOpportunities = () => {
    const imgList = [
        '/images/career/career-1.jpg',
        '/images/career/career-2.jpg',
        '/images/career/career-5.jpg',
        '/images/career/career-3.jpg',
        '/images/career/career-4.jpg',
    ]
    return (
        <div className='mb-17.5 lg:mb-22.5 xl:mb-30 selection:bg-[var(--secondary-color)] selection:text-white'>
            {/* header */}
            <div className='w-full px-3 mx-auto sm:w-[90%] md:w-180 lg:w-[90%] 2xl:max-w-[1320px]'>
                <div className='relative flex justify-center mb-[min(70px,12vh)]'>
                    <div className='w-full xl:w-10/12 sm:px-3 text-center'>
                        <h2 className='leading-[1.1] font-semibold text-[calc(1.5rem+1.5vw)]'>{`[CAREER OPPORTUNITIES]`}</h2>
                        <p className='font-medium text-[22px] lg:text-[35px] xl:text-[38px] leading-[1.6] px-1 pt-4 lg:pt-7.5 xl:pt-9'>
                            From buildings to precast solutions and tiles 
                            <span className='text-black/50'> manufacturing — Ahmad Group shapes the future. Join us and grow with a company built on strength.</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* image */}
            <div className='w-full relative px-2.5 lg:px-[2%] xl:px-[3%] 2xl:px-[7%]'>
                <div className="lg:px-3 mx-auto">
                    <div className='grid grid-cols-1 md:grid-cols-2 md:justify-between'>
                        {
                            imgList.map((item, idx) => (
                                <div key={idx} className={`sm:px-3 mt-6 lg:mt-12 ${idx == 2 ? 'md:hidden' : 'max-md:block'}`}>
                                    {/* idx == 2 is the center circular image shown on mobile, hidden on md+ screens */}
                                    <div className={` ${idx == 2 ? 'flex items-center justify-center' : 'md:pr-2.5 lg:pr-5 xl:pr-7.5 2xl:pr-10'}`}>
                                        <Image
                                            src={item}
                                            alt={`Career Opportunity ${idx + 1}`}
                                            width={1076}
                                            height={416}
                                            className={`object-cover ${idx == 2 ? 'rounded-full size-70 sm:size-105': 'w-full h-auto min-h-75'}`}
                                        />
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    {/* center circular image */}
                    <div className="max-md:hidden absolute top-1/2 left-1/2 -translate-1/2 size-90 lg:size-110 xl:size-125 2xl:size-132.5 rounded-full border-10 border-white flex items-center justify-center">
                        <div className="relative">
                            <Image
                                src="/images/career/career-5.jpg"
                                alt="Career Center"
                                width={1076}
                                height={416}
                                className='size-85 lg:size-105 xl:size-120 2xl:size-130 rounded-full object-cover'
                            />
                            <div className="absolute top-0 left-0 size-full bg-black/30 rounded-full flex justify-center"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareerOpportunities
