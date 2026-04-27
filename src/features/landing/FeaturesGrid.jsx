import React from 'react'
import LandingCard from '@/components/shared/landingPage/LandingCard.jsx'
import { Building2 } from 'lucide-react'
import { MdOutlineEngineering, MdOutlineGroups } from 'react-icons/md'

const FeaturesGrid = () => {
  const features = [
    {
      id: 1,
      title: 'For Companies',
      icon: <Building2 />,
      description:
        'Complete visibility over operations. Manage payroll, optimize technician routes with AI, and track real-time profitability metrics from a centralized command center.',
    },
    {
      id: 2,
      title: 'For Workers',
      icon: <MdOutlineEngineering />,
      description:
        'An intuitive mobile app to manage schedules, access job site documentation, capture digital signatures, and communicate directly with dispatch without phone tag.',
    },
    {
      id: 3,
      title: 'For Clients',
      icon: <MdOutlineGroups />,
      description:
        'A premium booking experience with real-time tracking, transparent automated invoicing, and a secure portal to manage all their past and future service history.',
    },
  ]
  return (
    <section className={`bg-muted py-20`}>
      <div className={`container`}>
        <div className={`mx-auto mb-16 max-w-2xl text-center`}>
          <h2 className={`mb-4 text-3xl font-medium`}>A Complete Ecosystem</h2>
          <p className={`text-muted-foreground text-md font-medium`}>
            Nexus bridges the gap between management, staff, and your customers
            with tailored tools for every role.
          </p>
        </div>
        <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3`}>
          {features.map((feature, i) => (
            <LandingCard key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
export default FeaturesGrid
