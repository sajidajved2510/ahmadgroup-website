import Image from 'next/image'
import React from 'react'

const KnowUs = () => {
    return (
        <div className='py-12 selection:bg-[var(--secondary-color)] selection:text-white'>
            {/* title */}
            <div className='w-full px-3 mx-auto sm:w-[90%] md:w-180 lg:w-[90%] 2xl:max-w-[1320px]'>
                <h2 className='text-[var(--secondary-color)] font-bold tracking-tight leading-[1.1] text-[calc(1.5rem+1.5vw)] uppercase text-center pb-6'>Know us better</h2>
                <div className='flex justify-center'>
                    <div className='md:px-4 text-center flex flex-col items-center'>
                        <Image
                        src="/images/ahmadTiles/mission.png"
                        alt='Mission'
                        width={100}
                        height={100}
                        className='size-25 mb-6 object-contain'
                        />
                        <h4 className='text-[var(--secondary-color)] text-2xl uppercase font-bold mb-6'>Vision and Mission</h4>
                        <p className='text-[#8d8d8d] leading-6 text-xl mb-6 px-9 md:w-7/9'>To become a leading global supplier of premium quality food products and ingredients that offer convenience to customers</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default KnowUs