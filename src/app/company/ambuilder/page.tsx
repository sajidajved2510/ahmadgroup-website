import React from 'react'
import Hero from '@/components/ambuilder/hero-section'
import VisionSection from '@/components/ambuilder/vision-section'
import PortfolioSection from '@/components/ambuilder/portfolio-section'
import VedioSection from '@/components/ambuilder/vedio-section'
import Testimonial from '@/components/ambuilder/testimonial-section'
import WorkSequence from '@/components/ambuilder/work-sequence-section'
import Services from '@/components/ambuilder/services-section'
import About from '@/components/ambuilder/about-section'
const page = () => {
  return (
    <>
        <Hero/>
        <VisionSection/>
        <Services/>
        <WorkSequence/>
        <PortfolioSection/>
        <VedioSection/>
        <Testimonial/>
        <About/>
    </>
  )
}

export default page