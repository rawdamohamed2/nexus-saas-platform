import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-react'
import {
  MdOutlineEventAvailable,
  MdOutlineTrackChanges,
  MdOutlinePayments,
  MdOutlineHeadsetMic,
} from 'react-icons/md'
import ClientFeaturesCard from '@/components/shared/featuresPage/ClientFeaturesCard.jsx'

const clientFeatures = [
  {
    title: '24/7 Booking',
    description:
      'Frictionless scheduling with instant confirmation for your customers.',
    icon: MdOutlineEventAvailable,
  },
  {
    title: 'Live Tracking',
    description:
      'Clients watch progress in real-time with white-labeled interfaces.',
    icon: MdOutlineTrackChanges,
  },
  {
    title: 'Secure Payments',
    description:
      'Integrated billing with automated invoicing and 1-click checkout.',
    icon: MdOutlinePayments,
  },
  {
    title: 'Concierge Support',
    description:
      'Built-in ticketing and live chat for a premium brand experience.',
    icon: MdOutlineHeadsetMic,
  },
]

const ExclusivitySection = () => {
  return (
    <section className="bg-muted px-6 py-24">
      <div className="container grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {clientFeatures.map((feature, index) => (
            <ClientFeaturesCard key={index} feature={feature} />
          ))}
        </div>

        {/* Right Side: Content */}
        <div className="space-y-8">
          <Badge className="bg-outline text-text-on-primary hover:bg-outline/80 rounded-full px-6 py-2">
            CLIENT EXPERIENCE
          </Badge>

          <div className="space-y-6">
            <h2 className="text-text-main text-2xl font-semibold sm:text-4xl">
              Exclusivity Redefined
            </h2>
            <p className="text-muted-foreground text-md leading-relaxed">
              Offer your clients more than a service. Offer them a portal that
              feels like a private concierge. Our white-labeled client portal
              builds trust through transparency and ease of use.
            </p>
          </div>

          <ul className="space-y-4">
            {[
              'Branded with your company colors and logo',
              'Optimized for mobile-web and desktop',
              'Multi-currency and multi-language support',
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 font-medium text-[#1D1B20]"
              >
                <Check size={20} className="text-text-main" strokeWidth={3} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
export default ExclusivitySection
