import { routes } from '@/lib/routes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeProjects = () => {
const projectList = [
        {
            title: 'Building Materials & Construction',
            client: 'Abdullah Builders',
            image: '/images/projects/project-1.png',
        },
        {
            title: 'Residential & Commercial Builds',
            client: 'Landmark Group',
            image: '/images/projects/project-2.png',
        },
        {
            title: 'Design & Surface Applications',
            client: 'City Developers',
            image: '/images/projects/project-3.png',
        },
        {
            title: 'Concrete & On-Site Delivery',
            client: 'MAF Constructions',
            image: '/images/projects/project-4.png',
        },
        {
            title: 'Roads & Industrial Projects',
            client: 'Allied Engineering',
            image: '/images/projects/project-5.png',
        }
    ]
    return (
        <div id='projects' className='mb-17.5 lg:mb-22.5 xl:mb-30 py-17.5 md:py-22.5 bg-black selection:bg-[var(--primary-color)] selection:text-white'>
            <div className='w-full md:px-3 mx-auto md:w-[90%] 2xl:max-w-[1410px]'>

                {/* header */}
                <div className='flex max-md:flex-col items-center justify-between mb-[min(40px,7vh)]'>
                    <div className='w-full md:w-2/5 mt-6 px-3'>
                        <span className='text-xs bg-black/5 text-[var(--primary-color)] px-2.5 py-4 font-medium uppercase mb-2.5 inline-block'>One industry Project</span>
                        <h2 className='text-4xl lg:text-5xl xl:text-6xl font-medium text-white'>Our Impactful Projects.</h2>
                    </div>
                    <div className='w-full md:w-1/4 mt-6 px-3 '>
                        <Link href={routes.project} className='group flex gap-6 md:justify-end items-end self-end uppercase text-[13px] font-semibold hover:cursor-pointer'>
                            <span className='pb-0.5 whitespace-nowrap text-white leading-[1] relative hover:text-[var(--primary-color)]'>
                                view All Project
                                <p className='absolute bottom-0 w-full h-px bg-white rounded-full left-0 group-hover:w-0 transition-all duration-200' />
                            </span>
                            <svg className="mb-2 fill-white/20 transition-all group-hover:fill-[var(--primary-color)]/30" width="23" height="23" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg"><g><path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z"></path><path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z"></path></g></svg>
                        </Link>
                    </div>
                </div>

                {/* Project wrapper */}
                <div className='px-3 pt-10 lg:pt-12.5 border-t border-t-white/10'>
                    {/* Project card area */}
                    <div className='grid sm:grid-cols-[48.5%_48.5%] max-lg:gap-y-10 lg:grid-cols-[28%_28%_39%] xl:grid-cols-[27.5%_27.5%_39%] gap-6 xl:gap-10'>
                        {
                            projectList.slice(0,3).map((project, index) => (
                                <div key={index}>
                                    <Link href={routes.project} className='relative overflow-hidden block rounded-[5px] project-clip'>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            loading='lazy'
                                            decoding='async'
                                            width={382}
                                            height={382}
                                            className='rounded-[5px] max-md:max-h-87.5 max-md:h-70 md:min-h-75 xl:min-h-95.5 object-cover transition-all duration-500 ease-out w-full h-auto hover:scale-110'
                                            style={{ width: "auto", height: "auto" }} // Add this line
                                        />
                                    </Link>
                                    {/* project-content */}
                                    <div className="pt-7.5">
                                        <span className='text-[var(--primary-color)] font-medium text-[13px] leading-[1] uppercase mb-2.5'>Client: {project.client}</span>
                                        <h4 className='xl:text-2xl'>
                                            <a href={routes.project} className='text-white font-semibold text-2xl leading[1.3] transition-all duration-500'>{project.title}</a></h4></div>
                                </div>
                            ))
                        }
                    </div>

                    {/* Project card area 2 */}
                    <div className='grid sm:grid-cols-[56%_40%] lg:grid-cols-[66%_30%] xl:grid-cols-[68%_27.5%] gap-6 lg:gap-9 xl:gap-15 mt-[clamp(35px,4vh,50px)] pt-[clamp(35px,4vh,50px)] border-t border-t-white/10'>
                        {
                            projectList.slice(3,5).map((project, index) => (
                                <div key={index}>
                                    <Link href={routes.project} className='relative overflow-hidden block rounded-[5px] project-clip'>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            loading='lazy'
                                            decoding='async'
                                            width={382}
                                            height={382}
                                            className='rounded-[5px] max-md:max-h-87.5 max-md:h-70 md:min-h-75 xl:min-h-95.5 object-cover transition-all duration-500 ease-out w-full h-auto hover:scale-110'
                                        />
                                    </Link>
                                    {/* project-content */}
                                    <div className="pt-7.5">
                                        <span className='text-[var(--primary-color)] font-medium text-[13px] leading-[1] uppercase mb-2.5'>Client: {project.client}</span>
                                        <h4 className='xl:text-2xl'>
                                            <a href={routes.project} className='text-white font-semibold text-2xl leading[1.3] transition-all duration-500'>{project.title}</a></h4></div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeProjects
