"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

const VedioSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative w-full h-[85vh] min-h-100 overflow-hidden mt-10">
      {/* ✅ Background Video */}
      <Image src ="/images/ambuilder/video-banner.png" alt="Background Video" fill className="object-cover w-full h-full"/>
     <video
      ref={videoRef}
      className="absolute top-0 left-0 w-full h-full object-cover"
      src="https://ahmadgroup-website-dvaw-mhjq0bf4j-sajidajved2510s-projects.vercel.app/reel.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
{/*  */}
      {/* ✅ Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* ✅ Centered Content */}
      <div className="relative z-10 flex flex-col md:flex-row gap-3 items-center justify-center h-full text-center text-white">
        <h1 className="font-semibold text-[42px] lg:text-6xl xl:text-7xl tracking-wider leading-snug mb-8 uppercase">
          <span className="sm:ml-16">Empowering</span> <br /> Industry Growth
        </h1>

        {/* ✅ Circular Play/Pause Button */}
        <div
          onClick={handleTogglePlay}
          className="relative w-30 h-30 rounded-full flex items-center justify-center bg-white cursor-pointer"
        >
          <div className="w-14 h-14 bg-[#6a6b6b] flex items-center justify-center rounded-full">
            {isPlaying ? (
              // Pause Icon
              <svg
                className="fill-white"
                width="24"
                height="27"
                viewBox="0 0 24 27"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="2" width="6" height="23" rx="2" />
                <rect x="15" y="2" width="6" height="23" rx="2" />
              </svg>
            ) : (
              // Play Icon
              <svg
                className="fill-white ml-1"
                width="24"
                height="27"
                viewBox="0 0 24 27"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21.3787 9.99987L4.82154 0.433939C4.34825 0.153923 3.80926 0.00420458 3.25936 0C2.39492 0 1.56589 0.343396 0.954645 0.954644C0.343396 1.56589 0 2.39492 0 3.25936V23.7895C0.000109938 24.3631 0.153886 24.9263 0.445339 25.4203C0.736791 25.9144 1.15528 26.3214 1.65729 26.599C2.1593 26.8766 2.72651 27.0146 3.29994 26.9988C3.87336 26.9829 4.43207 26.8137 4.91797 26.5088L21.4944 16.0364C22.0098 15.7139 22.4329 15.2633 22.7224 14.7286C23.0119 14.1939 23.1579 13.5933 23.1463 12.9854C23.1346 12.3775 22.9657 11.7829 22.6559 11.2597C22.3461 10.7365 21.9061 10.3024 21.3787 9.99987Z" />
              </svg>
            )}
          </div>

          {/* Rotating Text Circle */}
          <div className="absolute w-full h-full animate-textRotation">
            {"INDUSTRY . SECTOR . SERVE .".split("").map((char, index) => (
              <span
                key={index}
                className="absolute left-1/2 text-[13px] font-bold text-black origin-[0_60px]"
                style={{ transform: `rotate(${index * 13}deg)` }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VedioSection;
