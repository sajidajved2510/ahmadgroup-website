import { ChevronRight, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AnimatedButton } from './animated-button'
import { routes } from '@/lib/routes'
import { usePathname } from 'next/navigation'

interface MenuItem {
    path: string
    label: string
}

interface MobileNavProps {
    menuItems: MenuItem[]
    showMenu: boolean
    setShowMenu: (showMenu: boolean) => void
}

const MobileNavMenu = ({ menuItems, showMenu, setShowMenu }: MobileNavProps) => {

    const pathname = usePathname()
    const [subMenu, setSubMenu] = useState(false)

    // Helper to check if a route is active and apply blue background
    const isRouteActive = (itemPath: string) => pathname === itemPath
    const getActiveClass = (itemPath: string) => isRouteActive(itemPath) ? 'bg-[var(--secondary-color)]/10 text-white rounded-sm' : ''
    return (
        <div className={`inline-block fixed top-0 left-0 w-70 py-7.5 [&>*]:px-5 z-50 h-full overflow-auto bg-white border-r border-r-[#eee] shadow-[0_2px_20px_rgba(0,0,0,0.3)]  transition-transform duration-300 ease-in ${showMenu ? "translate-x-0" : "-translate-x-full"}`}>
            <div className='flex items-center justify-between'>
                <div className="flex gap-1">
                    <Link href="/" aria-label="Facebook">
                        <Image src="/icons/facebook-blue.png" width={24} height={24} alt="Facebook logo" />
                    </Link>
                    <Link href="/" aria-label="Instagram">
                        <Image src="/icons/instagram-color.png" width={24} height={24} alt="Instagram logo" />
                    </Link>
                    <Link href="/" aria-label="tiktok">
                        <Image src="/icons/tiktok-circle.png" width={24} height={24} alt="Tiktok logo" />
                    </Link>
                </div>
                {/* menu close button */}
                <div onClick={() => setShowMenu(false)} className="group flex items-center justify-center size-9.5 rounded-lg border border-[#eee] hover:bg-black cursor-pointer transition-all duration-300">
                    <X className='text-[26px] transition-all duration-300 group-hover:text-white' />
                </div>
            </div>

            {/* menu list */}
            <ul className='pt-12.5 pb-7.5 text-left divide-y divide-[#e0e0e0] !px-2'>
                {
                    menuItems.map((item, index) => (
                        item.label === 'Company' ?
                            <div key={index} className='flex flex-col'>
                                <li className='relative py-4 px-5 flex justify-between items-center'>
                                    <a href={item.path} className=' text-black active:text-[var(--primary-color)] hover:text-[var(--primary-color)] transition-all duration-300 ease-in-out'>{item.label}</a>
                                    <div onClick={() => setSubMenu(!subMenu)}>
                                        <ChevronRight className={`size-4 transition-all duration-300 ${subMenu ? 'rotate-90' : ''}`} />
                                    </div>

                                </li>
                                <ul className={`text-left divide-y ml-5 divide-[#eee] transition-all duration-200 ease-out ${subMenu ? 'translate-y-0' : 'opacity-0 h-0 -translate-y-10 pointer-events-none'}`}>
                                    <li className={`relative py-3 pl-2.5 ${getActiveClass('/ahmadconcrete')}`}>
                                        <Link href={routes.company.ahmadConcrete} onClick={() => setShowMenu(false)} className='text-black active:text-[var(--primary-color)] hover:text-[var(--primary-color)] transition-all duration-300 ease-in-out disabled:text-white'>Ahmad Concrete</Link>
                                    </li>
                                    <li className={`relative py-3 pl-2.5 ${getActiveClass('/ambuilder')}`}>
                                        <Link href={routes.company.amBuilder} onClick={() => setShowMenu(false)} className='text-black active:text-[var(--primary-color)] hover:text-[var(--primary-color)] transition-all duration-300 ease-in-out disabled:text-white'>A.M builders</Link>
                                    </li>
                                    <li className={`relative py-3 pl-2.5 ${getActiveClass('/ahmadtiles')}`}>
                                        <Link href={routes.company.ahmadTiles} onClick={() => setShowMenu(false)} className='text-black active:text-[var(--primary-color)] hover:text-[var(--primary-color)] transition-all duration-300 ease-in-out disabled:text-white'>Ahmad Tiles</Link>
                                    </li>
                                </ul>


                            </div>
                            :
                            <li key={index} className={`relative py-4 px-5 ${getActiveClass(item.path)}`}>
                                <a href={item.path} className=' text-black active:text-[var(--primary-color)] hover:text-[var(--primary-color)] transition-all duration-300 ease-in-out disabled:text-white'>{item.label}</a>
                            </li>

                    ))
                }
            </ul>

            {/* button */}
            <div>
                <AnimatedButton href={routes.contact} bgColor="var(--primary-color)" hoverBgColor="#000000" borderColor="border-[var(--primary-color)]" hoverBorderColor="#000000">
                GET IN TOUCH
            </AnimatedButton>
            </div>
        </div>
    )
}

export default MobileNavMenu
