import React from 'react'

const Map = () => {
    return (
        <div className='mb-17.5 lg:mb-22.5 xl:mb-30'>
            <div className='w-full px-3 mx-auto sm:w-[90%] md:w-180 lg:w-[90%] 2xl:max-w-[1320px]'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220733.4028047264!2d71.30984700364225!3d30.1811531858242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b315778dea7d9%3A0xbad72fc74e55d42f!2sMultan%2C%20Pakistan!5e0!3m2!1sen!2s!4v1762886962833!5m2!1sen!2s" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className='w-full h-full min-h-112.5 lg:min-h-125 xl:min-h-137.5 2xl:min-h-150 border-0 rounded-lg sm:rounded-3xl xl:rounded-[30px] invert-[1] hue-rotate-180 grayscale-[1]'
                ></iframe>
            </div>
        </div>
    )
}

export default Map
