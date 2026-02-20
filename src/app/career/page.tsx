import SharedHero from '@/components/shared-hero'
import CareerFacilities from '@/sections/career-facilities'
import CareerJobPost from '@/sections/career-job-post'
import CareerOpportunities from '@/sections/career-opportunities'
import React from 'react'

const CareerPage = () => {
    return (
        <>
            <SharedHero title="Career" description="Your Future With Us Explore Career Opportunity." />
            <CareerOpportunities />
            <CareerJobPost />
            <CareerFacilities />
        </>
    )
}

export default CareerPage
