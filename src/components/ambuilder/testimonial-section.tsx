"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from 'lucide-react'
import "swiper/css";
import "swiper/css/navigation";


const statsData = [
  { value: "45+", label: "Green Spaces" },
  { value: "15", label: "Skilled Professionals" },
  { value: "5", label: "Years of Experience" },
  { value: "2M", label: "Square Meters" },
];

const testimonials = [
  {
    image: "/images/ambuilder/testimonial-img1.png",
    svg: "/images/ambuilder/quote.svg",
    title: "EXCELLENT INDUSTRIAL CONSTRUCTION!",
    text: "A.M Builders delivered outstanding results for our industrial facility at Sultan Oil Mill. Their team ensured timely execution, quality materials, and professional supervision throughout the project.",
    name: "Sultan Oil Mill Management",
    role: "Founder, Egenslab",
    authorImg: "/images/ambuilder/testimonial-author-img1.png",
  },
  {
    image: "/images/ambuilder/testimonial-img2.png",
    svg: "/images/ambuilder/quote.svg",
    title: "HIGHLY RELIABLE COLD STORAGE SOLUTIONS!",
    text: "The Laboratory Cold Store was built with precision and attention to detail. A.M Builders ensured optimal temperature control, safety, and durability for our sensitive storage needs.",
    name: "Laboratory Cold Store Team",
    role: "SunCrop Management",
    authorImg: "/images/ambuilder/testimonial-author-img2.png",
  },
  {
    image: "/images/ambuilder/testimonial-img3.png",
    svg: "/images/ambuilder/quote.svg",
    title: "EFFICIENT FACTORY INFRASTRUCTURE!",
    text: "SunCrop’s production facility was constructed efficiently with excellent layout planning and durable structures. A.M Builders demonstrated professionalism and technical expertise throughout.",
    name: "John Keller",
    role: "CEO, UrbanEdge",
    authorImg: "/images/ambuilder/testimonial-author-img3.png",
  },
  {
    image: "/images/ambuilder/testimonial-img3.png",
    svg: "/images/ambuilder/quote.svg",
    title: "MODERN COMMERCIAL EXCELLENCE!",
    text: "Abdali Square Plaza reflects high-quality design and construction. A.M Builders managed every stage meticulously, delivering a premium commercial complex on time.",
    name: "Abdali Square Project Team",
    role: "CEO, UrbanEdge",
    authorImg: "/images/ambuilder/testimonial-author-img3.png",
  },
];

export default function TestimonialsSwiper() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className='py-22.5 bg-black'>
      <div className='w-full px-3 mx-auto sm:w-[90%] md:w-180 lg:w-[90%] 2xl:max-w-[1320px]'>
        {/* Header */}
        <div className="flex max-lg:flex-col lg:items-end justify-between mb-15 lg:mb-17.5">
          {/* title */}
          <div className="w-full lg:w-1/2 mt-6 sm:px-3">
            <h2 className='leading-[1.1] font-semibold text-white text-[calc(1.8rem+1.8vw)]'>Feedback From The Experts.</h2>
          </div>
          {/*arrow button */}
          <div className='lg:w-1/4 flex lg:justify-end max-lg:mt-6 max-lg:px-3'>
            <div className="flex gap-8">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="h-10 w-10 flex items-center justify-center rounded-full text-gray-400 border border-gray-700 hover:text-white hover:bg-[var(--primary-color)] transition duration-300"
                aria-label="Previous"
              >
                <ArrowLeft />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="h-10 w-10 flex items-center justify-center rounded-full text-gray-400 hover:text-white border border-gray-700 hover:bg-[var(--primary-color)] transition"
                aria-label="Next"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* carousal */}
        <div className="mb-25 flex flex-col lg:flex-row bg-white/5 rounded-2xl overflow-hidden bg-[url('/images/footer-bg.png')] bg-cover bg-center backdrop-blur-sm">
          {/* LEFT: Image card */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[activeIndex].image}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={`Testimonial ${activeIndex + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: Testimonial text */}
          <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
            <div className="h-80 md:h-96">
              <Swiper
                direction="vertical"
                slidesPerView={1}
                loop
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                onSwiper={(s) => (swiperRef.current = s)}
                onSlideChange={(s) =>
                  setActiveIndex(s.realIndex ?? s.activeIndex ?? 0)
                }
                style={{ height: "100%" }}
              >
                {testimonials.map((t, i) => (
                  <SwiperSlide key={i}>
                    <div className="flex flex-col justify-between h-full">
                      {/* Content */}
                      <div className="flex flex-col items-center text-center">
                        <Image
                          src={t.svg}
                          alt="Quote Icon"
                          width={40}
                          height={40}
                          className="mb-4"
                        />
                        <p className="text-[var(--primary-color)] uppercase text-lg font-semibold mb-3">
                          {t.title}
                        </p>
                        <p className="text-white/80 font-medium tracking-wide lg:leading-10 leading-relaxed text-sm md:text-base max-w-xl mx-auto">
                          “{t.text}”
                        </p>
                      </div>

                      {/* Author */}
                      <div className="flex items-center justify-between border-t border-white/20 pt-4 mt-6">
                        <div className="flex items-center gap-3">
                          {/* <Image
                            src={t.authorImg}
                            alt={t.name}
                            width={40}
                            height={40}
                            className="rounded-full object-cover"
                          /> */}
                          <div>
                            <p className="font-semibold text-white text-[19px]">{t.name}</p>
                            {/* <p className="text-white/70 text-sm">{t.role}</p> */}
                          </div>
                        </div>

                        <div className="border border-gray-700 p-1 rounded-full">
                          <div className="bg-white rounded-full size-8 hover:bg-[var(--primary-color)] transition duration-300"></div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        
        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center md:gap-y-10 pt-7.5 relative">
          <div className="absolute top-0 left-0 w-full h-px bg-[linear-gradient(90deg,rgba(255,255,255,0)_15.17%,rgba(255,255,255,.5)_51%,rgba(255,255,255,0)_85.74%)]"/>
          {statsData.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center px-4 py-6"
            >
              <p className="text-5xl xl:text-[55px] text-white font-semibold">{item.value}</p>
              <p className="text-white/60 text-lg">{item.label}</p>

              {/* Vertical divider (skip last item) */}
              {index !== statsData.length - 1 && (
                <div className="hidden sm:block absolute right-0 top-0 w-[1px] h-full bg-gradient-to-t from-transparent via-white/30 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}