
"use client";

import { routes } from "@/lib/routes";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className='mb-17.5 lg:mb-22.5 xl:mb-30 xl:pt-25'>
      <div className='w-full px-3 mx-auto sm:w-[90%] md:w-180 lg:w-[90%] 2xl:max-w-[1320px]'>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center ">
          {/* LEFT COLUMN */}
          <div className="relative flex flex-col items-start justify-start px-3 mt-12">
            {/*  Experience Badge */}
            <div className="flex items-center bg-[var(--secondary-color)] text-white font-semibold rounded-full overflow-hidden shadow-lg">
              <div className="flex items-center py-3 pr-4 pl-5 border-r border-r-white text-[30px]">5+</div>
              <div className="pr-6.5 pl-5 py-2 font-medium leading-tight">
                Year&apos;s Of<br />Experience
              </div>
            </div>

            {/* 🔹 MK Image Blend Text */}
            <div className="block w-full">
              <div className="flex items-center justify-center relative max-sm:overflow-hidden">
                <h1 className="blend-text font-serif">AM</h1>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col justify-center">
            <h1 className="font-semibold text-[calc(1.6rem+1.8vw)] leading-[1.1]">
              Redefining Industry Standards.
            </h1>

            <p className="mt-6 text-gray-600 relative md:pl-10 pl-3 leading-8">
              <span className="absolute -left-2 md:left-7 top-3 md:top-1 bottom-1 w-[3px] rounded-lg h-20 bg-[var(--secondary-color)]"></span>
              We understand your construction needs and deliver excellence through precision, reliability, and modern engineering practices. Our team at A.M Builders Engineers & Contractors is dedicated to turning your vision into reality. Choose us and experience high-quality construction, timely delivery, and durable results. Looking for something exceptional? We redefine standards with practical solutions and a client-first approach — helping you achieve your project goals efficiently and professionally.
            </p>

            <Link href={routes.contact} className='group flex gap-6 items-end uppercase text-[13px] font-semibold hover:cursor-pointer mt-15'>
              <span className='pb-1 whitespace-nowrap text-black leading-[1] relative hover:text-[var(--secondary-color)]'>
                Get a Free Consultation
                <p className='absolute bottom-0 w-full h-px bg-black rounded-full left-0 group-hover:w-0 transition-all duration-200' />
              </span>
              <svg className="mb-2 fill-black/20 transition-all group-hover:fill-[var(--secondary-color)]/30" width="23" height="23" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg"><g><path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z"></path><path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z"></path></g></svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
