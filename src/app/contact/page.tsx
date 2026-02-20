import SharedHero from '@/components/shared-hero'
import React from 'react'
import ContactUs from './sections/contact-us'
import Locations from './sections/locations'
import Map from './sections/map'

const ContactPage = () => {
    return (
        <>
            <SharedHero title="Contact" description="Contact Us Stay Connected How Can We Assist You" />
            <ContactUs />
            <Locations />
            <Map />
        </>
    )
}

export default ContactPage