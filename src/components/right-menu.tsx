import { X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { routes } from '@/lib/routes'

interface menuProps {
    showMenu: boolean
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const RightMenu = ({ showMenu, setShowMenu }: menuProps) => {
    return (
        <div className={`fixed top-0 right-0 w-full h-full bg-black/30 backdrop-blur-xs transition-all duration-300 z-50 ${showMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <div className={` fixed top-0 right-0 w-80 sm:w-137.5 h-full overflow-auto bg-white flex flex-col justify-between shadow-[0_2px_20px_rgba(0,0,0,0.3)] right-menu transition-transform duration-300 ease-in ${showMenu ? 'translate-x-0' : 'translate-x-[120%]'}`}>
                <div className='flex items-center justify-between p-5 sm:p-7.5 border-b border-b-black/10'>
                    <div className="flex gap-1">
                        <Link href="/" aria-label="Facebook">
                        <Image src="/icons/facebook-blue.png" width={24} height={24} alt="Facebook logo" />
                        </Link>
                        <Link href="/" aria-label="Instagram">
                        <Image src="/icons/instagram-color.png" width={24} height={24} alt="Instagram logo" />
                        </Link>
                        <Link href="/" aria-label="Tiktok">
                        <Image src="/icons/tiktok-circle.png" width={24} height={24} alt="X logo" />
                        </Link>
                    </div>
                    {/* menu close button */}
                    <div onClick={() => setShowMenu(false)} className="group flex items-center justify-center size-9.5 rounded-full border border-[#eee] hover:bg-black cursor-pointer transition-all duration-300">
                        <X className='text-[26px] transition-all duration-300 group-hover:text-white' />
                    </div>
                </div>

                <div className='p-5 py-10 sm:p-10'>
                    {/* title area */}
                    <span className='text-[#00000099] text-sm font-medium leading-[1] uppercase inline-block mb-2.5 relative'>
                        <div className='absolute top-1/2 -translate-y-1/2 -right-10 w-9 h-px bg-[var(--secondary-color)]' />
                        Get in touch with us
                    </span>
                    <h2 className='text-[28px] sm:text-[37px] font-semibold mb-4 leading-[1.1]'>Connect with Ahmad Group</h2>
                    <p className='text-[#00000099]'>Ready to take the first step toward building excellence, achieving your goals, and shaping the future with innovation?</p>
                    <ul className='mx-5 sm:mx-11 pt-13 pb-14.5'>
                        <li className="mb-5">
                            <div className="flex items-center gap-3">
                                {/* icon */}
                                <div>
                                    <svg className='fill-black' width="33" height="33" viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg"><path d="M26.0808 20.4419C25.4052 19.7385 24.5903 19.3624 23.7267 19.3624C22.87 19.3624 22.0481 19.7315 21.3447 20.435L19.1438 22.6289C18.9627 22.5314 18.7816 22.4408 18.6075 22.3503C18.3568 22.2249 18.12 22.1065 17.918 21.9812C15.8564 20.6718 13.9828 18.9654 12.1859 16.7575C11.3153 15.6571 10.7302 14.7307 10.3054 13.7905C10.8765 13.2681 11.4058 12.7248 11.9212 12.2025C12.1162 12.0075 12.3113 11.8055 12.5063 11.6105C13.9689 10.1478 13.9689 8.25339 12.5063 6.79077L10.6049 4.88935C10.3889 4.67344 10.1661 4.45057 9.95713 4.22769C9.53923 3.79587 9.10045 3.35012 8.64773 2.93222C7.97214 2.26359 7.16421 1.90839 6.3145 1.90839C5.46478 1.90839 4.64293 2.26359 3.94644 2.93222C3.93947 2.93919 3.93947 2.93919 3.93251 2.94615L1.56445 5.33511C0.672947 6.22661 0.164512 7.31313 0.0530735 8.57377C-0.114084 10.6075 0.484896 12.502 0.944577 13.7417C2.07289 16.7854 3.75839 19.6061 6.27271 22.6289C9.32332 26.2715 12.9938 29.148 17.1867 31.1748C18.7886 31.934 20.9268 32.8324 23.3158 32.9857C23.462 32.9926 23.6152 32.9996 23.7545 32.9996C25.3634 32.9996 26.7146 32.4215 27.7733 31.2723C27.7802 31.2584 27.7942 31.2514 27.8011 31.2375C28.1633 30.7987 28.5812 30.4017 29.02 29.9768C29.3195 29.6913 29.6259 29.3918 29.9254 29.0784C30.6149 28.361 30.9771 27.5252 30.9771 26.6685C30.9771 25.8049 30.608 24.9761 29.9045 24.2796L26.0808 20.4419ZM28.5742 27.7759C28.5673 27.7759 28.5673 27.7829 28.5742 27.7759C28.3026 28.0685 28.024 28.3331 27.7245 28.6257C27.2718 29.0575 26.8121 29.5102 26.3803 30.0186C25.6768 30.7708 24.848 31.126 23.7615 31.126C23.657 31.126 23.5456 31.126 23.4411 31.1191C21.3726 30.9867 19.4503 30.1788 18.0085 29.4893C14.0664 27.5809 10.6049 24.8716 7.72837 21.4379C5.35334 18.5753 3.76535 15.9287 2.71366 13.087C2.06592 11.3528 1.82912 10.0016 1.93359 8.727C2.00324 7.91211 2.31666 7.23652 2.89474 6.65843L5.26976 4.28341C5.61104 3.96302 5.97322 3.7889 6.32843 3.7889C6.76721 3.7889 7.12242 4.05357 7.3453 4.27644C7.35226 4.28341 7.35923 4.29037 7.36619 4.29734C7.79105 4.69434 8.19501 5.10527 8.61987 5.54405C8.83578 5.76693 9.05866 5.9898 9.28153 6.21965L11.1829 8.12106C11.9212 8.85933 11.9212 9.54189 11.1829 10.2802C10.981 10.4822 10.7859 10.6841 10.584 10.8791C9.99891 11.4781 9.44173 12.0353 8.83578 12.5786C8.82185 12.5925 8.80792 12.5995 8.80096 12.6134C8.20198 13.2124 8.31342 13.7974 8.43878 14.1944C8.44575 14.2153 8.45271 14.2362 8.45968 14.2571C8.95418 15.4551 9.65067 16.5834 10.7093 17.9276L10.7163 17.9346C12.6386 20.3026 14.6654 22.1483 16.9011 23.5622C17.1867 23.7433 17.4792 23.8895 17.7578 24.0288C18.0085 24.1542 18.2453 24.2726 18.4473 24.398C18.4752 24.4119 18.503 24.4328 18.5309 24.4467C18.7677 24.5651 18.9906 24.6209 19.2204 24.6209C19.7985 24.6209 20.1607 24.2587 20.2791 24.1403L22.6611 21.7583C22.8979 21.5215 23.274 21.2359 23.7128 21.2359C24.1446 21.2359 24.4998 21.5075 24.7157 21.7444C24.7227 21.7513 24.7227 21.7513 24.7296 21.7583L28.5673 25.5959C29.2847 26.3064 29.2847 27.0377 28.5742 27.7759Z"></path><path d="M17.8345 7.8506C19.6593 8.15705 21.3169 9.0207 22.6403 10.344C23.9636 11.6673 24.8203 13.325 25.1337 15.1498C25.2103 15.6095 25.6073 15.9299 26.06 15.9299C26.1157 15.9299 26.1645 15.9229 26.2202 15.9159C26.7356 15.8323 27.0769 15.3448 26.9933 14.8294C26.6172 12.6215 25.5725 10.6087 23.9775 9.01373C22.3826 7.41877 20.3697 6.37404 18.1618 5.99794C17.6464 5.91436 17.1659 6.25564 17.0753 6.76408C16.9848 7.27251 17.3191 7.76702 17.8345 7.8506Z"></path><path d="M32.9619 14.557C32.3421 10.9213 30.6287 7.61301 27.996 4.98029C25.3633 2.34757 22.055 0.634209 18.4193 0.0143347C17.9108 -0.0762086 17.4303 0.272035 17.3397 0.780471C17.2562 1.29587 17.5974 1.77645 18.1128 1.86699C21.3585 2.41722 24.3185 3.95645 26.6727 6.30362C29.0268 8.65774 30.5591 11.6178 31.1093 14.8634C31.1859 15.3231 31.5829 15.6435 32.0356 15.6435C32.0913 15.6435 32.1401 15.6365 32.1958 15.6296C32.7042 15.553 33.0525 15.0654 32.9619 14.557Z"></path></svg>
                                </div>
                                {/* content */}
                                <div className="relative leading-[1] text-start">
                                    <span className="text-black font-medium text-xs mb-1.5 inline-block uppercase">CALL ANY TIME</span>
                                    <h6><a href="tel:29658718617" className='text-black/70 hover:text-[var(--secondary-color)] text-[17px] font-medium leading-[1.5] transition-all duration-300'>92-3011-383-111</a></h6>
                                </div>
                            </div>
                            <svg className="fill-[var(--secondary-color)]/50 mt-5 ml-17.5" width="8" height="29" viewBox="0 0 8 29" xmlns="http://www.w3.org/2000/svg"><path d="M1.33333 3C1.33333 4.47276 2.52724 5.66667 4 5.66667C5.47276 5.66667 6.66667 4.47276 6.66667 3C6.66667 1.52724 5.47276 0.333333 4 0.333333C2.52724 0.333333 1.33333 1.52724 1.33333 3ZM3.64645 28.3536C3.84171 28.5488 4.15829 28.5488 4.35355 28.3536L7.53553 25.1716C7.7308 24.9763 7.7308 24.6597 7.53553 24.4645C7.34027 24.2692 7.02369 24.2692 6.82843 24.4645L4 27.2929L1.17157 24.4645C0.976311 24.2692 0.659728 24.2692 0.464466 24.4645C0.269204 24.6597 0.269204 24.9763 0.464466 25.1716L3.64645 28.3536ZM3.5 3V28H4.5V3H3.5Z"></path></svg>
                        </li>
                        <li className="mb-5">
                            <div className="flex items-center gap-3">
                                {/* icon */}
                                <div>
                                    <svg className='fill-none stroke-black' width="35" height="35" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg"><path d="M30.5966 7.4621C32.7313 10.243 34.0001 13.7234 34.0001 17.5C34.0001 26.6127 26.6128 34 17.5001 34C13.7331 34 10.261 32.7377 7.48364 30.6129" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.99634 4.01017C10.683 2.11388 13.9614 0.999997 17.5 0.999997C21.2782 0.999997 24.7599 2.26989 27.5413 4.40617" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4.38136 27.509C2.26004 24.7329 1 21.2636 1 17.5C1 14.0975 2.02984 10.9356 3.7948 8.30896" stroke="black" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M22.375 25.1463C21.456 30.4092 19.6178 34 17.5 34C14.4624 34 12 26.6127 12 17.5C12 16.3514 12.0391 15.2302 12.1136 14.1477" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12.6199 9.88271C13.5372 4.60405 15.3783 1.00001 17.5 1.00001C20.5375 1.00001 23 8.38731 23 17.5C23 18.6491 22.9608 19.7708 22.8863 20.8537" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.18506 23H20.5404" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.7053 12H32.8151" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.18506 12H10.1218" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M24.8332 23C24.8332 21.8146 23.8723 20.8537 22.6869 20.8537C21.5015 20.8537 20.5405 21.8146 20.5405 23C20.5405 24.1854 21.5015 25.1463 22.6869 25.1463C23.8723 25.1463 24.8332 24.1854 24.8332 23Z" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.4143 12C14.4143 10.8146 13.4533 9.85366 12.2679 9.85366C11.0825 9.85366 10.1216 10.8146 10.1216 12C10.1216 13.1854 11.0825 14.1463 12.2679 14.1463C13.4533 14.1463 14.4143 13.1854 14.4143 12Z" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M31.3173 5.82927C31.3173 4.64388 30.3564 3.68293 29.171 3.68293C27.9856 3.68293 27.0247 4.64388 27.0247 5.82927C27.0247 7.01465 27.9856 7.97561 29.171 7.97561C30.3564 7.97561 31.3173 7.01465 31.3173 5.82927Z" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.97554 29.1707C7.97554 27.9853 7.01459 27.0244 5.8292 27.0244C4.64382 27.0244 3.68286 27.9853 3.68286 29.1707C3.68286 30.3561 4.64382 31.3171 5.8292 31.3171C7.01459 31.3171 7.97554 30.3561 7.97554 29.1707Z" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M24.833 23H32.815" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>                                </div>
                                {/* content */}
                                <div className="relative leading-[1] text-start">
                                    <span className="text-black font-medium text-xs mb-1.5 inline-block">Follow Us</span>
                                    <h6 className='text-[17px] font-medium leading-[1.5] transition-all duration-300 text-black/70'><a href="https://www.facebook.com/profile.php?id=61578179007923" className='hover:text-[var(--secondary-color)] hover:underline'>Facebook,</a> <a href="https://www.linkedin.com/company/ahmad-group/" className='hover:text-[var(--secondary-color)] hover:underline'>LinkedIn,</a> <a className='hover:text-[var(--secondary-color)] hover:underline' href="https://www.instagram.com/">Instagram,</a></h6>
                                </div>
                            </div>
                            <svg className="fill-[var(--secondary-color)]/50 mt-5 ml-17.5" width="8" height="29" viewBox="0 0 8 29" xmlns="http://www.w3.org/2000/svg"><path d="M1.33333 3C1.33333 4.47276 2.52724 5.66667 4 5.66667C5.47276 5.66667 6.66667 4.47276 6.66667 3C6.66667 1.52724 5.47276 0.333333 4 0.333333C2.52724 0.333333 1.33333 1.52724 1.33333 3ZM3.64645 28.3536C3.84171 28.5488 4.15829 28.5488 4.35355 28.3536L7.53553 25.1716C7.7308 24.9763 7.7308 24.6597 7.53553 24.4645C7.34027 24.2692 7.02369 24.2692 6.82843 24.4645L4 27.2929L1.17157 24.4645C0.976311 24.2692 0.659728 24.2692 0.464466 24.4645C0.269204 24.6597 0.269204 24.9763 0.464466 25.1716L3.64645 28.3536ZM3.5 3V28H4.5V3H3.5Z"></path></svg>
                        </li>
                        <li className="mb-5">
                            <div className="flex items-center gap-3">
                                {/* icon */}
                                <div>
                                    <svg className='fill-black' width="33" height="32" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M32.9896 1.18398C33.0176 0.995671 32.993 0.803292 32.9185 0.628097C32.844 0.452902 32.7225 0.301711 32.5675 0.191227C32.4126 0.0808885 32.2301 0.0155543 32.0404 0.00245033C31.8506 -0.0106536 31.6609 0.0289832 31.4923 0.116977L0.554753 16.2732C0.376749 16.3673 0.230082 16.5113 0.132753 16.6876C0.0354241 16.8638 -0.0083331 17.0646 0.00685184 17.2654C0.0220368 17.4662 0.0955032 17.6581 0.218235 17.8177C0.340966 17.9773 0.507624 18.0976 0.697753 18.1639L9.29838 21.1036L27.6148 5.44235L13.4413 22.5185L27.8554 27.4451C27.9984 27.4932 28.1502 27.5094 28.3002 27.4926C28.4501 27.4758 28.5946 27.4265 28.7235 27.348C28.8524 27.2696 28.9625 27.1639 29.0463 27.0384C29.1301 26.9129 29.1854 26.7706 29.2084 26.6215L32.9896 1.18398ZM28.2201 26.469C28.22 26.4693 28.2201 26.4688 28.2201 26.469L32.0005 1.03696C32.0014 1.03102 32.0006 1.02494 31.9982 1.0194M28.2201 26.469C28.2192 26.4738 28.2172 26.4792 28.2145 26.4833C28.2117 26.4876 28.2079 26.4912 28.2035 26.4939C28.1991 26.4965 28.1942 26.4982 28.189 26.4988C28.1842 26.4993 28.1793 26.4989 28.1746 26.4974C28.1744 26.4973 28.1749 26.4975 28.1746 26.4974L15.1369 22.0413L28.3842 6.08103L26.9649 4.68231L9.08205 19.9729L1.02672 17.2195C1.02644 17.2194 1.027 17.2196 1.02672 17.2195C1.02082 17.2173 1.01481 17.2131 1.01095 17.2081C1.00692 17.2029 1.0045 17.1966 1.004 17.19C1.0035 17.1834 1.00494 17.1768 1.00814 17.171C1.01122 17.1654 1.0158 17.1608 1.02135 17.1577C1.02113 17.1578 1.02157 17.1576 1.02135 17.1577L31.9549 1.00355C31.9548 1.00357 31.9549 1.00352 31.9549 1.00355C31.9599 1.00093 31.9658 0.999681 31.9715 1.00007M13.0319 30.5897C13.0321 30.5963 13.0342 30.6027 13.0381 30.6081C13.0421 30.6136 13.0478 30.6177 13.0543 30.6199C13.0608 30.622 13.0678 30.622 13.0744 30.6199C13.0807 30.6179 13.0862 30.6141 13.0902 30.6089C13.0901 30.6091 13.0904 30.6087 13.0902 30.6089L16.0115 26.6335L13.0319 25.6152V30.5897ZM12.0319 24.2166V30.5939C12.0329 30.8106 12.1021 31.0215 12.2297 31.1967C12.3573 31.3719 12.5368 31.5025 12.7427 31.5701C12.9487 31.6376 13.1707 31.6386 13.3772 31.573C13.5838 31.5073 13.7644 31.3784 13.8936 31.2044L17.624 26.1279L12.0319 24.2166Z"></path></svg>
                                </div>
                                {/* content */}
                                <div className="relative leading-[1] text-start">
                                    <span className="text-black font-medium text-xs mb-1.5 inline-block uppercase">SAY HELLO</span>
                                    <h6><a className='text-black/70 hover:text-[var(--secondary-color)] text-[17px] font-medium leading-[1.5] transition-all duration-300' href="mailto:hello@ahmadgroup.pk">hello@ahmadgroup.pk</a></h6>
                                </div>
                            </div>
                        </li>
                    </ul>
                    {/* address area */}
                    <ul className='flex items-start gap-5 max-sm:flex-wrap justify-between align-top'>
                        <li className='flex flex-col'>
                            <span className='text-black text-sm underline block mb-5'>HEAD OFFICE</span>
                            <a href="https://share.google/o3F5frQQ35lUfrNhE" className='text-black/60 hover:cursor-pointer hover:text-[var(--secondary-color)] text-[17px] leading-[28px] transition-all duration-300'>Multan, Pakistan Ahmad Tower,<br/> Bismillah Chowk Masoom Shah Road</a>
                        </li>
                        <li className='flex flex-col'>
                            <span className='text-black text-sm underline block mb-5'>FACTORY LOCATION</span>
                            <a href="https://share.google/EAD5qHynUSnX7GAjH" className='text-black/60 hover:cursor-pointer hover:text-[var(--secondary-color)] text-[17px] leading-[28px] transition-all duration-300'>Sujan Pur road, Multan Pakistan</a>
                        </li>
                    </ul>

                    <a className="inline-block text-[var(--secondary-color)] hover:text-black text-sm leading-[1] uppercase underline mt-7.5 transition-all duration-300 cursor-pointer" href={routes.contact}>View All Factory Location</a>
                </div>

                <div className='p-4 px-5 border border-black/10 text-[#00000099] text-center'>
                    <p className='text-sm font-light'>Copyright 2025 <Link href={routes.home} className='text-[var(--secondary-color)] font-medium hover:text-black transition-colors'>Ahmad Group</Link> | Develop By <a href="https://digiflick.co/" className='text-[var(--secondary-color)] font-medium hover:text-black transition-colors'>Digiflick</a></p>

                </div>

            </div>
        </div>
    )
}

export default RightMenu
