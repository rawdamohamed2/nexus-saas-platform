import React from 'react'
import Hero from '@/features/landing/Hero.jsx'
import FeaturesGrid from '@/features/landing/FeaturesGrid.jsx'
import ServiceShowcase from '@/features/landing/ServiceShowcase.jsx'
import Pricing from '@/features/landing/Pricing.jsx'
import LandingEnd from '@/features/landing/LandingEnd.jsx'

const LandingPage = () => {
  return (
    <div className="">
      <Hero />
      <FeaturesGrid />
      <ServiceShowcase />
      <Pricing />
      <LandingEnd />
    </div>
  )
}
export default LandingPage
