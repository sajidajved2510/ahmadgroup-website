import React from 'react'

const Team = () => {
    const teamData = [
        {
            title: "Business Manager",
            name: "Shehriyar Aziz",
            socialName: "Whatsapp",
            socialLink: "https://www.wehttps://wa.me/923011383111"
        },
        {
            title: "Sales Person",
            name: "Muhammad Ayyub",
            socialName: "Whatsapp",
            socialLink: "https://www.wehttps://wa.me/923011383111"
        },
        {
            title: "Sales Person",
            name: "Yaseen Sial",
            socialName: "Whatsapp",
            socialLink: "https://www.wehttps://wa.me/923011383111"
        },
        {
            title: "Sales Person",
            name: "Mumtaz Chishti",
            socialName: "Whatsapp",
            socialLink: "https://www.wehttps://wa.me/923011383111"
        },
        {
            title: "Sales Person",
            name: "Rai Sajjad",
            socialName: "Whatsapp",
            socialLink: "https://www.wehttps://wa.me/923011383111"
        },
    ]
    return (
        <div id='team' className='mb-17.5 lg:mb-22.5 xl:mb-30'>
            <div className='w-full px-3 mx-auto sm:w-[90%] md:w-180 lg:w-[90%] 2xl:max-w-[1320px]'>
                {/* section title */}
                <div className="flex items-center flex-col mb-15 lg:mb-17.5">
                    {/* title */}
                    <div className="flex flex-col mt-6 sm:px-3 items-center">
                        <span className='text-[var(--secondary-color)] w-fit text-sm font-medium leading-[1] uppercase inline-block mb-2.5 relative'>
                            <div className='absolute top-1/2 -translate-y-1/2 -right-10 w-9 h-px bg-[var(--secondary-color)]' />
                            Meet Our People</span>
                        <h2 className='leading-[1.1] font-bold text-[calc(1.8rem+1.8vw)] w-2/3 text-center'>Meet the People Behind Ahmad Group</h2>
                    </div>
                </div>

                {/* List */}
                <ul>
                    {
                        teamData.map((item, idx) => (
                            <li key={idx} className='group border-b border-b-black/10 first:border-t first:border-t-black/10 flex max-sm:flex-col items-center justify-between gap-5 py-4 md:py-5 '>
                                {/* team name */}
                                <div>
                                    <span className='text-black/60 leading-7.5'>{item.title}</span>
                                    <h4 className='font-semibold text-xl lg:text-2xl leading-7.5 mb-0'>{item.name}</h4>
                                </div>
                                {/* social area */}
                                <a href={item.socialLink} className="flex items-center">
                                    <div className="size-8.5 flex items-center justify-center rounded-full border border-black group-hover:bg-[var(--secondary-color)] group-hover:border-[var(--secondary-color)] transition-all duration-300">
                                        <span className='size-5 bg-black group-hover:bg-white flex items-center justify-center rounded-full transition-all duration-300'></span>
                                    </div>
                                    <span className='font-semibold text-sm leading-[1] inline-flex justify-center relative min-w-23 py-2 px-[13px] rounded-full border border-black group-hover:border-[var(--secondary-color)] group-hover:bg-[var(--secondary-color)] group-hover:text-white transition-all duration-300'>
                                        <div className="absolute top-1/2 -translate-y-1/2 -left-px w-px h-8 bg-black group-hover:bg-[var(--secondary-color)] transition-all duration-300"></div>
                                        {item.socialName}
                                    </span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Team
