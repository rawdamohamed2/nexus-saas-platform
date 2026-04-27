import React from 'react'
import {
  MdPlumbing,
  MdFlashOn,
  MdLandscape,
  MdCleaningServices,
} from 'react-icons/md'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MdArrowForward } from 'react-icons/md'
import ServiceCard from '@/components/shared/landingPage/ServiceCard.jsx'
import plumbing from '@/assets/Plumbing.jpg'
import cleaning from '@/assets/cleaning.jpg'
import electrical from '@/assets/electrical.jpg'
import landscape from '@/assets/landscape.jpg'
const industries = [
  {
    id: 1,
    title: 'HVAC & PLUMBING',
    description:
      'Manage recurring maintenance contracts and emergency dispatch with ease.',
    price: '$49',
    icon: MdPlumbing,
    image: plumbing,
  },
  {
    id: 2,
    title: 'ELECTRICAL',
    description:
      'Advanced job estimating and material tracking for complex electrical projects.',
    price: '$49',
    icon: MdFlashOn,
    image: electrical,
  },
  {
    id: 3,
    title: 'LANDSCAPING',
    description:
      'Route optimization for seasonal routes and visual proof-of-work features.',
    price: '$49',
    icon: MdLandscape,
    image: landscape,
  },
  {
    id: 4,
    title: 'CLEANING',
    description:
      'Checklist-driven service quality control and automated client reminders.',
    price: '$49',
    icon: MdCleaningServices,
    image: cleaning,
  },
]

const ServiceShowcase = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-text-main mb-4 text-4xl font-semibold">
            Optimized for Your Industry
          </h2>
          <p className="text-muted-foreground text-md max-w-2xl">
            Nexus provides specialized templates and workflows for a wide range
            of field service sectors.
          </p>
        </div>
        <Button
          variant="link"
          className="text-muted-foreground hover:text-primary gap-2"
        >
          View all industries <MdArrowForward />
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        {industries.map((item) => (
          <ServiceCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
export default ServiceShowcase
