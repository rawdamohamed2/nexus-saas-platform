import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  MdOutlineDashboardCustomize,
  MdOutlineRoute,
  MdVerifiedUser,
} from 'react-icons/md'
import WorkerFeaturesCard from '@/components/shared/featuresPage/WorkerFeaturesCard.jsx'
import Container from '@/assets/Container.png'
const workerFeatures = [
  {
    id: 1,
    title: 'Mobile Task Board',
    description:
      'Real-time task queues with prioritized urgency and integrated communication channels.',
    icon: MdOutlineDashboardCustomize,
    bg: 'bg-white',
    textColor: 'text-[#1D1B20]',
    image: Container,
  },
  {
    id: 2,
    title: 'Intelligent Routing',
    description:
      'GPS-optimized dispatching reduces travel time by 30% using real-time traffic data.',
    icon: MdOutlineRoute,
    bg: 'bg-[#0F172A]',
    textColor: 'text-white',
    image:
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=300', // صورة خريطة
  },
  {
    id: 3,
    title: 'Proof-of-Work',
    description:
      'Digital signatures, geo-fenced timestamps, and photo verification for absolute accountability.',
    icon: MdVerifiedUser,
    bg: 'bg-white',
    textColor: 'text-[#1D1B20]',
    statusCard: true, // عشان نميز الكارت اللي فيه "Service Confirmed"
  },
]

const WorkerAppSection = () => {
  return (
    <section className="px-6 py-20">
      <div className={`container`}>
        <div className="mx-auto mb-14 text-center md:max-w-3xl">
          <h2 className="text-text-main mb-4 text-3xl font-semibold">
            Empower Your Field Force
          </h2>
          <p className="text-accent-foreground text-center text-lg">
            The Worker App is designed for high-stakes environments where
            reliability and clarity are non-negotiable.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {workerFeatures.map((item) => (
            <WorkerFeaturesCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
export default WorkerAppSection
