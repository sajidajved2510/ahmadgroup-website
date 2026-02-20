import { routes } from '@/lib/routes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeAbout = () => {
    return (
        <div id='about' className='mb-17.5 lg:mb-22.5 xl:mb-30 selection:bg-[var(--primary-color)] selection:text-white'>
            <div className='w-full sm:px-3 mx-auto sm:w-[90%] 2xl:max-w-[1410px]'>

                {/* Header */}
                <div className='flex max-lg:flex-col lg:items-center justify-between mb-[min(50px,13vh)]'>
                    <div className='lg:w-3/4 xl:w-2/3 mt-6 px-3'>
                        <span className='text-xs bg-black/5 text-[var(--secondary-color)] px-2.5 py-4 font-medium uppercase mb-2.5 inline-block'>Who we are about more</span>
                        <h2 className='text-4xl md:text-[42px] lg:text-5xl xl:text-[50px] 2xl:text-6xl font-medium'>We specialize in industrial construction & solutions</h2>
                        <div className='pt-6 lg:pt-7.5 2xl:pt-9 lg:pl-10 2xl:pl-24'>
                            <p className="text-gray-600 leading-8 relative sm:pl-4 mb-0 before:hidden sm:before:block before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-0.5 before:h-full before:bg-black/30 ">
                                Ahmad Group provides reliable materials and modern methods to build durable and innovative structures. We focus on quality, integrity, and excellence to strengthen Pakistan’s infrastructure and trust nationwide.
                            </p>
                        </div>
                    </div>
                    <div className=' lg:w-1/4 mt-6 px-3 flex  lg:justify-end'>
                        <a href={routes.about} className='group relative inline-block'>
                            <div>
                                <svg className='fill-transparent stroke-[#0000001a] group-hover:fill-[var(--secondary-color)] group-hover:stroke-[var(--secondary-color)] transition-all duration-200 ease-in' width="214" height="214" viewBox="0 0 214 214" xmlns="http://www.w3.org/2000/svg"><path d="M99.1061 2.41945C104.011 -0.326338 109.989 -0.326337 114.894 2.41945L117.658 3.96699C121.014 5.84584 124.93 6.46609 128.702 5.71624L131.81 5.09862C137.323 4.00279 143.009 5.85038 146.825 9.97734L148.975 12.3033C151.587 15.1273 155.119 16.9273 158.939 17.3799L162.085 17.7526C167.666 18.414 172.503 21.9283 174.857 27.0325L176.184 29.9092C177.795 33.4018 180.598 36.2054 184.091 37.8161L186.967 39.1428C192.072 41.4966 195.586 46.3337 196.247 51.9154L196.62 55.0613C197.073 58.8807 198.873 62.4135 201.697 65.0246L204.023 67.1753C208.15 70.9912 209.997 76.6775 208.901 82.1904L208.284 85.2975C207.534 89.0698 208.154 92.9859 210.033 96.3419L211.581 99.1061C214.326 104.011 214.326 109.989 211.581 114.894L210.033 117.658C208.154 121.014 207.534 124.93 208.284 128.702L208.901 131.81C209.997 137.323 208.15 143.009 204.023 146.825L201.697 148.975C198.873 151.587 197.073 155.119 196.62 158.939L196.247 162.085C195.586 167.666 192.072 172.503 186.967 174.857L184.091 176.184C180.598 177.795 177.795 180.598 176.184 184.091L174.857 186.967C172.503 192.072 167.666 195.586 162.085 196.247L158.939 196.62C155.119 197.073 151.587 198.873 148.975 201.697L146.825 204.023C143.009 208.15 137.323 209.997 131.81 208.901L128.702 208.284C124.93 207.534 121.014 208.154 117.658 210.033L114.894 211.581C109.989 214.326 104.011 214.326 99.1061 211.581L96.3419 210.033C92.9859 208.154 89.0698 207.534 85.2975 208.284L82.1904 208.901C76.6775 209.997 70.9912 208.15 67.1753 204.023L65.0246 201.697C62.4135 198.873 58.8807 197.073 55.0613 196.62L51.9154 196.247C46.3337 195.586 41.4966 192.072 39.1428 186.968L37.8161 184.091C36.2054 180.598 33.4018 177.795 29.9092 176.184L27.0325 174.857C21.9283 172.503 18.414 167.666 17.7526 162.085L17.3799 158.939C16.9273 155.119 15.1273 151.587 12.3033 148.975L9.97734 146.825C5.85038 143.009 4.00279 137.323 5.09862 131.81L5.71624 128.702C6.46609 124.93 5.84584 121.014 3.96699 117.658L2.41945 114.894C-0.326338 109.989 -0.326337 104.011 2.41945 99.1061L3.96699 96.3419C5.84584 92.9859 6.46609 89.0698 5.71624 85.2975L5.09862 82.1904C4.00279 76.6775 5.85038 70.9912 9.97734 67.1753L12.3033 65.0246C15.1273 62.4135 16.9273 58.8807 17.3799 55.0613L17.7526 51.9154C18.414 46.3337 21.9283 41.4966 27.0325 39.1428L29.9092 37.8161C33.4018 36.2054 36.2054 33.4018 37.8161 29.9092L39.1428 27.0325C41.4966 21.9283 46.3337 18.414 51.9154 17.7526L55.0613 17.3799C58.8807 16.9273 62.4135 15.1273 65.0246 12.3033L67.1753 9.97734C70.9912 5.85038 76.6775 4.00279 82.1904 5.09862L85.2975 5.71624C89.0698 6.46609 92.9859 5.84584 96.3419 3.96699L99.1061 2.41945Z"></path><path d="M99.3503 2.85573C104.103 0.194902 109.897 0.194903 114.65 2.85573L117.414 4.40327C120.874 6.34026 124.911 6.97969 128.8 6.20665L131.907 5.58903C137.249 4.5271 142.76 6.31753 146.458 10.3168L148.608 12.6428C151.3 15.5541 154.942 17.4098 158.88 17.8764L162.026 18.2491C167.435 18.8901 172.122 22.2957 174.403 27.2419L175.73 30.1186C177.39 33.7193 180.281 36.6097 183.881 38.2702L186.758 39.5968C191.704 41.8778 195.11 46.5652 195.751 51.9743L196.124 55.1201C196.59 59.0577 198.446 62.6998 201.357 65.3917L203.683 67.5424C207.682 71.2402 209.473 76.7506 208.411 82.0929L207.793 85.2001C207.02 89.0891 207.66 93.1263 209.597 96.5861L211.144 99.3503C213.805 104.103 213.805 109.897 211.144 114.65L209.597 117.414C207.66 120.874 207.02 124.911 207.793 128.8L208.411 131.907C209.473 137.249 207.682 142.76 203.683 146.458L201.357 148.608C198.446 151.3 196.59 154.942 196.124 158.88L195.751 162.026C195.11 167.435 191.704 172.122 186.758 174.403L183.881 175.73C180.281 177.39 177.39 180.281 175.73 183.881L174.403 186.758C172.122 191.704 167.435 195.11 162.026 195.751L158.88 196.124C154.942 196.59 151.3 198.446 148.608 201.357L146.458 203.683C142.76 207.682 137.249 209.473 131.907 208.411L128.8 207.793C124.911 207.02 120.874 207.66 117.414 209.597L114.65 211.144C109.897 213.805 104.103 213.805 99.3503 211.144L96.5861 209.597C93.1263 207.66 89.0891 207.02 85.2001 207.793L82.0929 208.411C76.7506 209.473 71.2402 207.682 67.5424 203.683L65.3917 201.357C62.6998 198.446 59.0577 196.59 55.1201 196.124L51.9743 195.751C46.5652 195.11 41.8778 191.704 39.5968 186.758L38.2702 183.881C36.6097 180.281 33.7193 177.39 30.1186 175.73L27.2419 174.403C22.2957 172.122 18.8901 167.435 18.2491 162.026L17.8764 158.88C17.4098 154.942 15.5541 151.3 12.6428 148.608L10.3168 146.458C6.31753 142.76 4.5271 137.249 5.58903 131.907L6.20665 128.8C6.97969 124.911 6.34026 120.874 4.40327 117.414L2.85573 114.65C0.194902 109.897 0.194903 104.103 2.85573 99.3503L4.40327 96.5861C6.34026 93.1263 6.97969 89.0891 6.20665 85.2L5.58903 82.0929C4.5271 76.7506 6.31753 71.2402 10.3168 67.5424L12.6428 65.3917C15.5541 62.6998 17.4098 59.0577 17.8764 55.1201L18.2491 51.9742C18.8901 46.5652 22.2957 41.8778 27.2419 39.5968L30.1186 38.2702C33.7193 36.6097 36.6097 33.7193 38.2702 30.1186L39.5968 27.2419C41.8778 22.2957 46.5652 18.8901 51.9742 18.2491L55.1201 17.8764C59.0577 17.4098 62.6998 15.5541 65.3917 12.6428L67.5424 10.3168C71.2402 6.31753 76.7506 4.5271 82.0929 5.58903L85.2 6.20665C89.0891 6.97969 93.1263 6.34026 96.5861 4.40327L99.3503 2.85573Z"></path></svg>
                            </div>
                            <div className='absolute top-1/2 left-1/2 -translate-1/2 gap-6 flex items-end uppercase text-[13px] font-semibold'>
                                <span className='whitespace-nowrap pb-0.5 relative group-hover:text-white'>
                                    About Us More
                                    <span className='absolute bottom-0 w-full h-px bg-black rounded-full left-0 group-hover:w-0 transition-all duration-200' />
                                </span>
                                <svg className="mb-2 fill-[#ffffff26] transition-all" width="23" height="23" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg"><g><path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z"></path><path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z"></path></g></svg>
                            </div>
                        </a>
                    </div>
                </div>

                <div className='grid lg:grid-cols-2'>

                    {/* Left content */}
                    <div className='px-3 md:mt-4 flex flex-col justify-between'>
                        {/* about content */}
                        <div className='mb-17.5 '>
                            <h5 className='font-bold text-[22px] mb-4 uppercase'>Who we are</h5>
                            <p className='text-[#00000099] md:text-lg leading-9'>Ahmad Group is a trusted name in Pakistan’s construction sector, delivering concrete, tiles, and structural services with perfection. With years of expertise, we continue to shape cities, empower communities, and redefine industry standards.</p>
                        </div>

                        {/* Founder Area */}
                        <div className='bg-[#e3ecc9] mt-auto bg-cover bg-no-repeat rounded-[10px] relative z-10 px-5 md:px-6 lg:px-10 xl:px-12.5 pt-10 pb-15 md:pb-7.5 leading-8.5 founder-clip-card'>
                            <p className='text-[#00000099] text-[17px] mb-9'>“At Ahmad Group, we don’t just build — we create a legacy of trust, quality, and innovation across Punjab (Pakistan)”.</p>
                            {/* Founder Profile */}
                            <div className='inline-flex items-center p-[5px] pr-[11px] border border-[#00000014] gap-2.5 rounded-[10px]'>
                                <div className='hidden size-15 rounded-full border border-white  items-center justify-center'>
                                    <Image
                                        src="/images/founder.png"
                                        alt='Founder'
                                        width={48}
                                        height={48}
                                        className='object-cover rounded-full size-12'
                                    />
                                </div>
                                <div className='profile-content'>
                                    <h6 className='font-semibold mb-[5px] text-black leading-[1.3]'>Abdullah Ahmad</h6>
                                    <span className='block text-black text-[13px] leading-[1.5]'>Founder at, Ahmad Group</span>
                                </div>
                            </div>
                            {/* contact-btn */}
                            <div className='group absolute inline-block bottom-px right-px py-3 px-11 z-10 rounded-tl-[30px] rounded-br-[10px] bg-white'>
                                <Link href={routes.contact} className='group-hover:text-[var(--secondary-color)] flex items-center gap-2 font-semibold text-sm leading-[1] transition-all'>
                                    Contact Now
                                    <svg className='fill-[#00000026] transition-all group-hover:fill-[var(--secondary-color)]/20 group-hover:translate-x-[3px]' width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg"><g><path d="M8.59212 0.0420781L16.9993 8.49978L15.4255 10.0831L1.69076 10.0987L1.67516 6.91643L10.9984 6.96267L6.31422 2.33367L8.59212 0.0420781Z"></path><path d="M8.55207 16.9994L13.8534 11.6663L9.35824 11.644L6.29342 14.7272L8.55207 16.9994Z"></path></g></svg>
                                </Link>
                            </div>

                            <Image
                                src="/images/aboutMask.png"
                                alt="about-mask"
                                width={509}
                                height={263}
                                className='absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-auto'
                            />
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className='block px-3 max-lg:hidden'>
                        <div className='h-full flex items-center'>
                            <Image 
                            src="/images/about-image.png"
                            alt="about"
                            width={636}
                            height={583}
                            className='cover rounded-[10px] h-full w-full max-h-150'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAbout
