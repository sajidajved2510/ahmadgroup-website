"use client";
import Image from "next/image";
import { AnimatedButton } from "@/components/animated-button";
import { routes } from "@/lib/routes";



const projects = [
  {
    id: 1,
    title: "Industrial Infrastructure Projects",
    tags: ["Industrial Construction", "Engineering Solutions"],
    image: "/images/ambuilder/project-img1.png",
  },
  {
    id: 2,
    title: "Cold Store Construction",
    tags: ["Cold Storage", "Civil Engineering"],
    image: "/images/ambuilder/project-img2.png",
  },
  {
    id: 3,
    title: "Food & Agro Facilities Development",
    tags: ["Factory Construction", "Structural Design "],
    image: "/images/ambuilder/project-img3.png",
  },
  {
    id: 4,
    title: "Commercial Plaza Development",
    tags: ["Commercial Complex", "Real Estate Development"],
    image: "/images/ambuilder/project-img4.png",
  },
];

const WorkSection = () => {
  return (
    <section className='mb-17.5 lg:mb-22.5 xl:mb-30 selection:bg-[var(--secondary-color)]'>
      <div className='w-full px-3 mx-auto sm:w-[90%] md:w-180 lg:w-[90%] 2xl:max-w-[1320px]'>
        {/* header */}
        <div className='relative flex justify-center mb-[min(70px,12vh)]'>
          <div className='w-full lg:w-5/12 sm:px-3'>
            <h2 className='leading-[1.1] font-semibold text-[calc(1.8rem+1.8vw)]'>Our Work In This Field Action</h2>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className=" relative overflow-hidden rounded-lg ambuilder-project-clip">
                <div className='absolute left-0 bottom-0 w-full h-full bg-white/50 z-30 -skew-45 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:animate-shimmer-sweep group-hover:transition-all group-hover:duration-400 group-hover:ease-[cubic-bezier(0.175,0.885,0.32,1.275)]'></div>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className=" object-cover w-full h-80 transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-xl sm:text-3xl font-semibold text-gray-900 group-hover:text-[var(--secondary-color)] transition-colors duration-300">
                {item.title}
              </h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-5 py-[6px] border border-gray-300 rounded-full text-sm text-gray-600 hover:text-white hover:bg-[var(--secondary-color)] transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* button */}
        <div className="flex items-center justify-center mt-20">
          <AnimatedButton href={routes.project} bgColor="#000000" hoverBgColor="var(--primary-color)" borderColor="border-black" hoverBorderColor="var(--primary-color)" >
            VIEW ALL PORTFOLIO
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
