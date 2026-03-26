import React from 'react'
import Image from 'next/image'
import { AnimatedButton } from '@/components/animated-button'
import { routes } from '@/lib/routes'


const MarqeeData = [
  { text: 'Quality Construction ,Timly Delivery', key: 1 },
  { text: 'Transform vision into reality', key: 2 },
  { text: 'Building a better tommorrow ,today', key: 3 },
  { text: 'Your Trusted partner in oil industry and mi', key: 4 },
  { text: 'Quality Real Estate Property ,Timly Delivery', key: 5 },

]

const Hero = () => {
  return (
    <div className='pt-27.5 sm:pt-32.5 xl:pt-36 sm:px-2.5 xl:px-5 2xl:px-12.5 relative '
      style={{ backgroundImage: 'url("/images/ambuilder/banner-bg.png")' }}
    >
      <div className='px-3 mx-auto'>
        <div className='flex gap-9 2xl:gap-15'>
          <div className='relative hidden lg:block w-fit'>
            <Image src='/images/ambuilder/banner.jpeg' alt='hero-image' width={710} height={710}
              className='size-107.5 xl:size-137.5 2xl:size-177.5 relative rounded-full hover:translate-2 transition-transform duration-500 ease-in-out z-20'
            />
          </div>
          {/* content */}
          <div className='pt-5 xl:pt-6 2xl:pt-14 flex-1'>
            <span className='bg-[var(--primary-color)]/20 rounded-2xl py-2 px-4.5 text-[var(--secondary-color)] text-sm mb-2 inline-block'>CRAFTING EXELLENCE</span>
            <h2 className='font-semibold leading-[1.2] mb-11 text-[calc(2rem+2.2vw)]'>Leading The Way <span className='text-[var(--primary-color)]'>The Future </span>Of Industry</h2>

            {/* video & content */}
            <div className="flex max-md:flex-col md:items-center gap-5 xl:gap-12.5 mb-7.5 xl:mb-10 2xl:mb-15 sm:pl-4 xl:pl-7.5 2xl:pl-16.5">
              <div className="relative w-fit group cursor-pointer">
                <svg className="stroke-[var(--secondary-color)] fill-none max-sm:w-17" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="70px" viewBox="0 0 206 206" xmlSpace="preserve"><circle className="circle" strokeMiterlimit="10" cx="103" cy="103" r="100"></circle><path style={{ transition: 'stroke-dashoffset .8s cubic-bezier(.33,1,.68,1)' }} className="group-hover:[stroke-dashoffset:0]" strokeDasharray="430" strokeDashoffset="320" strokeWidth="4" strokeMiterlimit="10" d="M16.4,53C44,5.2,105.2-11.2,153,16.4s64.2,88.8,36.6,136.6"></path><path className="circle-half bottom-half" strokeWidth="4" strokeMiterlimit="10" d="M189.6,153C162,200.8,100.8,217.2,53,189.6S-11.2,100.8,16.4,53"></path></svg>
                <svg className="absolute fill-[var(--secondary-color)] top-1/2 left-1/2 -translate-1/2 ml-0.5" width="22" height="26" viewBox="0 0 22 26" xmlns="http://www.w3.org/2000/svg"><path d="M21.0414 12.6872C21.0414 11.9857 20.68 11.3397 20.0741 10.9581L3.71746 0.667707C3.05587 0.252161 2.24905 0.221801 1.5565 0.588432C0.866106 0.954858 0.453125 1.63119 0.453125 2.39695V22.9762C0.453125 23.742 0.866072 24.4181 1.55755 24.7847C1.87989 24.9547 2.22564 25.0392 2.57141 25.0392C2.96897 25.0392 3.36391 24.927 3.71724 24.7054L20.0739 14.4166C20.68 14.0348 21.0414 13.3888 21.0414 12.6874V12.6872ZM19.4837 13.5246L3.12701 23.8134C2.80597 24.015 2.41492 24.0287 2.07958 23.8524C1.74423 23.6749 1.5435 23.3475 1.5435 22.976V2.39676C1.5435 2.02528 1.74423 1.69657 2.07958 1.52035C2.2363 1.43855 2.40452 1.39701 2.57165 1.39701C2.76458 1.39701 2.9562 1.45119 3.12725 1.55956L19.4839 11.85C19.7817 12.0376 19.9526 12.3438 19.9526 12.6887C19.9523 13.0323 19.7815 13.337 19.4837 13.5246Z"></path></svg>
              </div>
              <p className="text-black/60 relative md:pl-4 before:hidden md:before:block before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-0.5 before:h-full before:bg-black/30 ">
               Leading the Way to the Future of Construction Building trust through innovation, precision, and performance. We specialize in residential, commercial, and industrial construction, delivering excellence that lasts. Our focus is on quality, safety, and timely execution — shaping Pakistan’s infrastructure with modern engineering.
               </p>
            </div>
            <div className='flex md:items-center gap-5 sm:gap-9 flex-col sm:flex-row'>
              <AnimatedButton href={routes.about} bgColor="#000000" hoverBgColor="var(--primary-color)" borderColor="border-black" hoverBorderColor="var(--primary-color)" >
                ABOUT US MORE
              </AnimatedButton>
              <AnimatedButton href={routes.project} bgColor="#ffffff" hoverBgColor="var(--primary-color)" borderColor="border-black/20" hoverBorderColor="var(--primary-color)" >
                VIEW OUR WORK
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
        {/* Mrquee Text */}
        <div className='overflow-hidden whitespace-nowrap mt-7 sm:mt-20  py-4 lg:absolute w-full left-0 -bottom-12 xl:bottom-8 -z-10'>
          <div className='animate-marquee flex space-x-8 uppercase'>
            {MarqeeData.map((item) => (
              <span key={item.key} className='text-lg font-light italic text-gray-900'>
                {item.text}
              </span>
            ))}
            {MarqeeData.map((item) => (
              <span key={item.key} className='text-lg font-light italic text-gray-900'>
                {item.text}
              </span>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Hero
