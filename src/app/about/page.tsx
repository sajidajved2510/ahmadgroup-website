import React from 'react'
import About from '../company/ahmadconcrete/sections/about'
import HomeChooseUs from '@/sections/home-chooseUs'
import Features from '../company/ahmadconcrete/sections/features'
import VideoBanner from '../company/ahmadconcrete/sections/video-banner'
import Counter from '../company/ahmadconcrete/sections/counter'
import Team from './sections/team'
import SharedHero from '@/components/shared-hero'
import Blogs from './sections/blogs'

const AboutPage = () => {
    return (
        <>
            <SharedHero title="About Us" description="Our Story of Manufacturing Excellence Built on." />
            <About />
            <HomeChooseUs />
            <Features />
            <VideoBanner />
            <Counter />
            <Team />
            <Blogs />
        </>
    )
}

export default AboutPage