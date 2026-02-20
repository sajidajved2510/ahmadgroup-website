import React from 'react'

const HomeBenefits = () => {
    const benefits = [
        {
            id: "01",
            title: 'Quality Assurance',
            description: 'very product undergoes strict testing to ensure consistency, strength, and top-tier performance.'
        },
        {
            id: "02",
            title: 'Customer Support',
            description: 'Our dedicated support team ensures on-time assistance and transparent project communication.'
        },
        {
            id: "03",
            title: 'Cost Reduction',
            description: 'We optimize production processes to reduce costs without compromising quality.'
        },
        {
            id: "04",
            title: 'Supply Chain',
            description: 'Strength Strong logistics and partnerships enable us to deliver anywhere across Punjab (Pakistan).'
        },
        {
            id: "05",
            title: 'Market Reach',
            description: 'Our growing network and proven trust make us a leading name in construction and pre-cast.'
        },
    ]
    return (
        <div id='benefits' className='mb-17.5 py-15 lg:mb-22.5 xl:mb-30 lg:py-18 xl:py-22.5 bg-[#F1F6F6] selection:bg-[var(--primary-color)] selection:text-white'>
            <div className='w-full px-3 mx-auto sm:w-[90%] 2xl:max-w-[1410px]'>

                {/* header */}
                <div className='relative flex items-center mb-[min(80px,12vh)]'>
                    <div className='w-full lg:w-1/2 px-3'>
                        <span className='max-md:leading-[1] text-xs bg-black/5 text-[var(--secondary-color)] px-2.5 py-4 font-medium uppercase mb-2.5 inline-block'>Benefits our product</span>
                        <h2 className='text-4xl lg:text-5xl xl:text-6xl font-medium'>Benefits of Choosing Ahmad Group.</h2>
                    </div>
                    <svg className="max-lg:hidden absolute bottom-[-20%] right-[35%] fill-[#0000001a]" width="254" height="57" viewBox="0 0 254 57" xmlns="http://www.w3.org/2000/svg"><path d="M0.634619 3.96702C0.416606 6.16537 2.02199 8.12423 4.22035 8.34224C6.4187 8.56025 8.37755 6.95487 8.59557 4.75651C8.81358 2.55816 7.2082 0.599304 5.00984 0.381291C2.81148 0.163279 0.852631 1.76866 0.634619 3.96702ZM251.63 56.2387C252.037 56.3185 252.431 56.0537 252.511 55.6472L253.811 49.0236C253.89 48.6171 253.626 48.2229 253.219 48.1432C252.813 48.0634 252.418 48.3282 252.339 48.7347L251.183 54.6224L245.295 53.4668C244.889 53.3871 244.495 53.6519 244.415 54.0584C244.335 54.4648 244.6 54.859 245.007 54.9388L251.63 56.2387ZM4.65432 5.11074C38.8809 3.31822 92.3013 3.7224 141.306 10.7568C165.809 14.2742 189.18 19.4454 208.487 26.8144C227.811 34.1905 242.962 43.7307 251.152 55.921L252.397 55.0845C243.95 42.512 228.452 32.8297 209.021 25.4131C189.572 17.9894 166.081 12.7978 141.519 9.27206C92.3932 2.22022 38.8713 1.81667 4.57587 3.61279L4.65432 5.11074Z"></path></svg>
                </div>

                {/* Benefits list */}
                <div className='grid grid-cols-1 lg:grid-cols-12'>

                    {/* Left content */}
                    <div className='lg:col-span-6 xl:col-span-7 px-3 pr-9'>
                        <ul className='xl:ml-30'>
                            {
                                benefits.map((benefit, index) => (
                                    <li key={index} className='group max-sm:flex-col max-sm:text-center flex items-center mb-12.5 gap-7.5'>
                                        <div className='size-17.5 relative overflow-hidden shrink-0 border-1 border-[#0000004d] rounded-full flex items-center justify-center transition-all ease-in duration-500 group-hover:duration-500 group-hover:shadow-[inset_0_0_0_10em_var(--secondary-color)] group-hover:border-[var(--secondary-color)] group-hover:text-white'>
                                            <span className='font-medium text-[22px]'>{benefit.id}</span>
                                        </div>
                                        <div>
                                            <h4 className='font-bold text-xl md:text-[23px] leading-[1.5] mb-2'>{benefit.title}</h4>
                                            <p className='text-[#00000099] leading-6 '>{benefit.description}</p>
                                        </div>
                                    </li>
                                ))
                            }
                            
                        </ul>

                    </div>

                    {/* Right Image */}
                    <div className='hidden lg:block lg:col-span-6 xl:col-span-5 px-3'>
                        <div className='ml-7.5 h-full pt-10'>
                            <div className='relative z-2 mask-[url(/images/maskImg.png)] mask-no-repeat mask-contain bg-[url(/images/benefit-image.png)] bg-no-repeat bg-contain w-full h-full'></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeBenefits
