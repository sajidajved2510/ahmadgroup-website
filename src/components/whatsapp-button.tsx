import Image from 'next/image'
import React from 'react'

const WhatsappChatButton = () => {
    return (
        <div className="fixed bottom-5 sm:bottom-8 right-5 sm:right-8 2xl:bottom-12 2xl:right-12 z-50">
            <a
                aria-label="Chat on WhatsApp"
                href="https://wa.me/923011383111"
                target="_blank"
            >
                <Image
                    src="/icons/whatsapp-chat.svg"
                    alt="Chat WhatsApp"
                    width={60}
                    height={60}
                    className='size-15 2xl:size-18 drop-shadow-[2px_2px_3px_#999]' />
            </a>
        </div>
    )
}

export default WhatsappChatButton
