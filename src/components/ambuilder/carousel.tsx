"use client";
import Image from "next/image";
import React from "react";

interface VerticalImageCarouselProps {
  images: string[];
}

const VerticalImageCarousel: React.FC<VerticalImageCarouselProps> = ({ images }) => {
  return (
    <div className="h-[430px] overflow-hidden relative">
      <div
        className="flex justify-start flex-col space-y-4 animate-vertical-scroll"
        style={{
          animation: `vertical-scroll ${images.length * 3}s linear infinite`,
        }}
      >
        {images.concat(images).map((src, idx) => (
          <div
            key={idx}
            className="flex justify-start md:justify-center"
            style={{ height: "200px" }}
          >
             
            <Image
              src={src}
              alt={`carousel-image-${idx}`}
              className="w-96 h-full object-cover rounded-2xl"
              height={100}
              width={100}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes vertical-scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default VerticalImageCarousel;
