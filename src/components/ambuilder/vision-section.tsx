import React from 'react'
import Image from 'next/image'
import { AnimatedButton } from '@/components/animated-button'
import { routes } from '@/lib/routes'

const AboutSection = () => {
  return (
    <section className='mb-17.5 lg:mb-22.5 xl:mb-30 pt-5 lg:pt-11 xl:pt-24 selection:bg-[var(--secondary-color)] selection:text-white'>
      {/* header */}
      <div className='w-full px-3 mx-auto sm:w-[90%] md:w-180 lg:w-[90%] 2xl:max-w-[1320px]'>
        <div className="flex flex-col lg:flex-row items-center">
          {/* ---------- Left Content ---------- */}
          <div className="flex-1 space-y-8 sm:px-3 mt-6">
            <div className=''>
              <h2 className="leading-[1.1] font-semibold text-[calc(1.8rem+1.8vw)]">
                About Our Company <br />Mission & Vision
              </h2>
            </div>

            <div className="relative border-l-2 border-[var(--secondary-color)] pl-6 lg:ml-12 text-gray-500 ">
              <p className='tracking-normal leading-relaxed'>
                At A.M Builders, we understand your construction needs and deliver with quality, precision, and trust. Our team is passionate about creating strong foundations and lasting structures. Choose us for reliability, timely delivery, and unmatched craftsmanship. We believe in redefining the construction experience with innovation, integrity, and a client-first approach — helping you build your dream, the right way.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold py-4">WHO WE ARE</h3>
              <p className="text-gray-500 tracking-wider leading-relaxed text-base max-w-110 ">
                We are a team of dedicated professionals committed to excellence in construction, renovation, and infrastructure development. Every project we handle reflects our promise of durability, quality, and value.
              </p>

            </div>

            <div className="flex gap-5 ">
              <div className=" opacity-30 ml-12  bottom-0 hidden lg:block">
                <svg width="100" height="74" viewBox="0 0 100 74" fill="var(--secondary-color)" xmlns="http://www.w3.org/2000/svg"><path d="M3.8338 3.5C3.8338 4.97276 5.02771 6.16667 6.50046 6.16667C7.97322 6.16667 9.16713 4.97276 9.16713 3.5C9.16713 2.02724 7.97322 0.833333 6.50046 0.833333C5.02771 0.833333 3.8338 2.02724 3.8338 3.5ZM15.0001 53L14.9241 53.4942L15.0001 53ZM98.4667 73.4989C98.7423 73.5173 98.9805 73.3088 98.9989 73.0333L99.2982 68.5432C99.3166 68.2677 99.1081 68.0294 98.8326 68.0111C98.557 67.9927 98.3188 68.2012 98.3004 68.4767L98.0344 72.4678L94.0432 72.2018C93.7677 72.1834 93.5294 72.3919 93.5111 72.6674C93.4927 72.943 93.7012 73.1812 93.9767 73.1996L98.4667 73.4989ZM6.0559 3.27118C3.09924 9.01554 0.00693369 20.6738 0.262935 31.312C0.391006 36.6341 1.35778 41.7518 3.64242 45.7571C5.93936 49.7839 9.56135 52.6692 14.9241 53.4942L15.0761 52.5058C10.0389 51.7309 6.66924 49.0452 4.51104 45.2616C2.34055 41.4565 1.38865 36.5243 1.26265 31.288C1.01049 20.8095 4.06836 9.31779 6.94503 3.72882L6.0559 3.27118ZM14.9241 53.4942C21.4708 54.5014 28.4469 54.4999 35.5791 54.3749C42.7244 54.2497 50.0243 54.0007 57.2782 54.4988C71.7615 55.4934 85.9903 59.4625 98.1237 73.3293L98.8763 72.6707C86.5096 58.5375 71.9884 54.5066 57.3468 53.5012C50.0382 52.9993 42.682 53.2503 35.5616 53.3751C28.4283 53.5001 21.5294 53.4986 15.0761 52.5058L14.9241 53.4942Z"></path></svg>
              </div>
              <div className='lg:pt-10 max-w-110'>
                <h3 className="text-xl font-bold text-gray-900 mb-2 ">OUR MISSION</h3>
                <p className="text-gray-500 tracking-wide leading-relaxed text-[1rem]">
                  To deliver high-quality construction services on time and within budget, ensuring customer satisfaction through honesty, teamwork, and continuous improvement.
                </p>
              </div>
            </div>
          </div>

          {/* ---------- Right Image ---------- */}
          <div className="relative flex-1 flex flex-col justify-center items-end sm:px-3 mt-6">
            <div className='flex flex-col items-center'>
              <Image
                src="/images/ambuilder/about-img.jpg"
                alt="About Image"
                className="rounded-t-full shadow-md object-cover md:mt-10 mt-5"
                width={500}
                height={500}
              />
              <div className='mt-[-25px]'>
                <AnimatedButton href={routes.about} bgColor="var(--primary-color)" hoverBgColor="#000000" borderColor="var(--primary-color)" hoverBorderColor="#000000" >
                  ABOUT US MORE
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 