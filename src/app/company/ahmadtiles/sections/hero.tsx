import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='min-h-screen w-full'>
        <div className='relative h-screen'>
            <Image
            src="/images/ahmadTiles/hero-img.jpg"
            alt="hero banner"
            width={1920}
            height={1080}
            className='w-full h-full object-cover block'
            />
        </div>
    </div>
  )
}

export default Hero
