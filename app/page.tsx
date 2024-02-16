'use client'

import { BackgroundBeams } from './components/background-beams'
import { HeroSection } from './components/pages/home/hero-section'
import { HighlightedProjects } from './components/pages/home/highlighted-projects'
import { KnownTechs } from './components/pages/home/known-techs'
import { WorkExperience } from './components/pages/home/work-experience'

import { motion as m } from 'framer-motion'

export default function Home() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <HeroSection />
      <KnownTechs />
      <HighlightedProjects />
      <WorkExperience />
      <BackgroundBeams />
    </m.div>
  )
}
