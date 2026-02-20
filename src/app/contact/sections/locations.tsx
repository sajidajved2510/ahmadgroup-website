import { routes } from '@/lib/routes'
import React from 'react'

const Locations = () => {
    const locationsList = [
        { city: 'HEAD OFFICE', address: 'Multan, Pakistan Ahmad Tower, Bismillah Chowk Masoom Shah Road' },
        { city: 'FACTORY', address: 'Sujan Pur road, Multan Punjab Pakistan' },
        { city: 'TILES STORE', address: 'M A Jinnah Rd, Gulraiz Town, Multan Punjab Pakistan' },
    ]
    return (
        <div className='mb-17.5 lg:mb-22.5 xl:mb-30 selection:bg-[var(--secondary-color)] selection:text-white'>
            <div className='w-full px-3 mx-auto sm:w-[90%] md:w-180 lg:w-[90%] 2xl:max-w-[1320px]'>
                <h6 className='mb-10 lg:mb-12.5 xl:mb-15'><a href={routes.about} className='group text-[var(--secondary-color)] font-medium text-[17px] uppercase relative leading-[1]'>
                    View All Factory Location
                    <p className='absolute bottom-0 w-full h-px bg-[var(--secondary-color)] rounded-full left-0 group-hover:w-0 transition-all duration-200' />
                </a></h6>
                <ul className='flex items-center justify-between flex-wrap gap-5 max-lg:gap-y-9'>
                    {
                        locationsList.map((location, index) => (
                            <li key={index} className='max-w-49 w-full lg:pb-10 relative'>
                                <div className="max-lg:hidden absolute bottom-0 left-0 w-13 h-px bg-[var(--secondary-color)]"></div>
                                <span className='text-sm tracking-[.06em] underline block mb-4 md:mb-5'>{location.city}</span>
                                <a href="https://www.google.com/maps" className='text-black/60 text-[17px] leading-7 hover:text-[var(--secondary-color)] cursor-pointer transition-all duration-300'>{location.address}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Locations
