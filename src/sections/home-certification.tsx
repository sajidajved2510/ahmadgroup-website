import Image from 'next/image'
import React from 'react'

const HomeCertification = () => {
    const certificates = [{
        name: 'FBR Certified Taxpayer',
        logo: '/images/certificates/5.png',
    },
    {
        name: 'ISO 9001:2000, SGS',
        logo: '/images/certificates/6.png',
    },
    {
        name: 'Pakistan Engineering Council',
        logo: '/images/certificates/2.png',
    },
    {
        name: 'Employment Old Age Benefits',
        logo: '/images/certificates/3.png',
    },
    {
        name: 'Punjab Social Security',
        logo: '/images/certificates/4.png',
    },
    {
        name: 'Punjab Labor Department',
        logo: '/images/certificates/7.png',
    }
    ]

    return (
        <div className='mb-17.5 lg:mb-22.5 xl:mb-30 selection:text-white selection:bg-[var(--secondary-color)]'>
            <div className='w-full px-3 mx-auto sm:w-[90%] 2xl:max-w-[1410px]'>

                {/* header */}
                <div className='mb-10 min-[550px]:mb-12.5 lg:mb-15 text-center'>
                    <h2 className='text-[34px] sm:text-4xl md:text-[40px] font-semibold leading-[1.1]'>Certification Memberships</h2>
                </div>

                {/* cards */}
                <div className="grid grid-cols-1 min-[550px]:grid-cols-2 lg:grid-cols-4">
                    {
                        certificates.map((certificate, index) => (
                            <div key={index} className="mt-6 px-3 w-full">
                                {/* certificate card */}
                                <div className='py-6 px-4 xl:px-6 2xl:px-7.5 bg-[#f8f8f8] flex flex-col justify-between border border-[#eee] rounded-lg relative h-57'>
                                    {/* certificate-logo */}
                                    <div className="mb-9.5">
                                        <Image
                                            src={certificate.logo}
                                            alt="certificate-logo"
                                            loading='lazy'
                                            decoding='async'
                                            width={92}
                                            height={92}
                                            className='max-w-full h-auto'
                                        />
                                    </div>
                                    <h6 className='font-semibold leading-[26px]'>{certificate.name}</h6>
                                    <span className="text-[var(--secondary-color)] font-semibold text-[15px] absolute leading-[1] top-6 right-4">Industry</span>
                                    <svg className="fill-none stroke-[#eee] absolute top-0 right-0" width="88" height="105" viewBox="0 0 88 105" xmlns="http://www.w3.org/2000/svg"><path d="M66.8167 -17.6053C69.7962 -13.2647 76.2037 -13.2647 79.1833 -17.6053L87.7974 -30.154C91.4643 -35.4958 99.8342 -32.7711 99.6538 -26.2944L99.2297 -11.068C99.083 -5.80053 104.271 -2.02811 109.237 -3.79168L123.597 -8.89173C129.707 -11.0618 134.88 -3.92864 130.918 1.20465L121.659 13.2019C118.436 17.3786 120.418 23.4895 125.479 24.979L140.041 29.2644C146.261 31.0949 146.261 39.9051 140.041 41.7356L125.479 46.021C120.418 47.5105 118.436 53.6215 121.659 57.7981L130.918 69.7954C134.88 74.9286 129.707 82.0618 123.597 79.8917L109.237 74.7917C104.271 73.0281 99.083 76.8005 99.2297 82.068L99.6538 97.2944C99.8342 103.771 91.4643 106.496 87.7974 101.154L79.1833 88.6053C76.2038 84.2647 69.7963 84.2647 66.8167 88.6053L58.2026 101.154C54.5357 106.496 46.1658 103.771 46.3462 97.2944L46.7701 82.0734C46.9169 76.8043 41.7258 73.0317 36.7595 74.7983L22.4433 79.8907C16.3362 82.063 11.1603 74.9374 15.1145 69.8013L24.3582 57.7948C27.5743 53.6174 25.5904 47.513 20.5328 46.0246L5.95906 41.7356C-0.260798 39.9051 -0.260805 31.0949 5.95905 29.2644L20.5328 24.9754C25.5904 23.487 27.5743 17.3826 24.3582 13.2052L15.1145 1.19866C11.1603 -3.93743 16.3362 -11.063 22.4433 -8.89069L36.7595 -3.79829C41.7258 -2.03175 46.9169 -5.80433 46.7701 -11.0734L46.3462 -26.2944C46.1658 -32.7711 54.5357 -35.4958 58.2026 -30.154L66.8167 -17.6053Z"></path></svg>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeCertification
