import SharedHero from '@/components/shared-hero'
import ProjectShowcase from '@/sections/project-showcase'
import React from 'react'

const ProjectPage = () => {
    return (
        <>
            <SharedHero title="Project Grid" description="Transforming Industries Through Projects." />
            <ProjectShowcase />
        </>
    )
}

export default ProjectPage