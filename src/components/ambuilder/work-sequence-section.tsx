"use client";
import React, { useEffect, useState } from "react";
import StepCard from "@/components/ambuilder/step-card";
import VerticalImageCarousel from "@/components/ambuilder/carousel";
import { AnimatedButton } from "../animated-button";
import { routes } from "@/lib/routes";

const steps = [
  { step: "STEP: 01", title: "Concept & Planning" },
  { step: "STEP: 02", title: "Design & Development" },
  { step: "STEP: 03", title: "Execution & Delivery" },
];

const WorkSequence = () => {


  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 3600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative -z-20 py-25 mb-17.5 lg:mb-22.5 xl:mb-30 bg-[#ffecec]'>
      <div className='w-full px-3 mx-auto sm:w-[90%] md:w-180 lg:w-[90%] 2xl:max-w-[1320px]'>
        {/* header title */}
        <div className="flex max-lg:flex-col lg:items-center justify-between mb-15 lg:mb-17.5">
          {/* title */}
          <div className="w-full lg:w-1/2 mt-6 sm:px-3">
            <h2 className='leading-[1.1] font-semibold text-[calc(1.8rem+1.8vw)]'>How We Work Sequency</h2>
          </div>
          {/* button */}
          <div className='lg:w-1/4 flex lg:justify-end max-lg:mt-6 max-lg:px-3'>
            <AnimatedButton href={routes.contact} bgColor="transparent" hoverBgColor="var(--primary-color)" borderColor="border-black/30" hoverBorderColor="var(--primary-color)">
              CONTACT US NOW
            </AnimatedButton>
          </div>
        </div>


        {/* ---------------- New Grid Section ---------------- */}
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 border bg-[#f2e0e0] rounded-md rounded-tr-3xl p-3 sm:p-5 pt-10 lg:p-10 gap-8">
            {/* Grid Item 1 */}
            <div className="grid grid-rows-3 gap-10 ">
              {steps.map((s, i) => (

                <StepCard
                  key={i}
                  step={s.step}
                  title={s.title}
                  active={i === activeIndex}
                  className={i === 0 || i === 2 ? "lg:pr-5" : ""}
                />


              ))}
            </div>

            {/* Grid Item 2 */}
            <div className="col-span-1 lg:col-span-2 md:hidden lg:block border-l border-white">
              <VerticalImageCarousel
                images={[
                  "/images/ambuilder/process-img1.png",
                  "/images/ambuilder/process-img2.png",
                  "/images/ambuilder/process-img3.png",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <svg className="max-lg:hidden absolute top-0 left-0 -z-10 fill-none stroke-[#ffe4e2] w-full" height="836" viewBox="0 0 1592 836" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="route-1" d="M737 3C724 66.5 786.9 210.9 1142.5 280.5C1587 367.5 1694.51 455.986 1446 658.5C1084 953.5 514 845.5 0 327" strokeWidth="30"></path></svg>
    </div>
  );
};

export default WorkSequence;