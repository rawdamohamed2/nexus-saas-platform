import React from 'react'
import { Badge } from '@/components/ui/badge.jsx'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.jsx'
import { Users, Settings, LayoutGrid } from 'lucide-react'
import OperationsCard from '@/components/shared/featuresPage/OperationsCard.jsx'
import AdminFeaturesCard from '@/components/shared/featuresPage/AdminFeaturesCard.jsx'

const adminFeatures = [
  {
    title: 'Staff Management',
    description:
      'Automated payroll, performance tracking, and role-based access control for global teams.',
    icon: Users,
  },
  {
    title: 'Service Config',
    description:
      'No-code service builder. Configure pricing rules, schedules, and dynamic workflows in minutes.',
    icon: Settings,
  },
]
const AdminSuite = () => {
  return (
    <section className="bg-muted px-6 py-20">
      <div className={`container`}>
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <LayoutGrid className="text-text-main" size={28} />
              <h2 className="text-text-main text-4xl font-semibold">
                Admin Suite
              </h2>
            </div>
            <p className="text-accent-foreground max-w-2xl text-lg">
              The central nervous system of your business. Tight control over
              staff, data, and configuration with high-density information
              architecture.
            </p>
          </div>
          <Badge
            variant="secondary"
            className="text-accent-foreground bg-popover rounded-full px-3 py-1 font-mono text-xs"
          >
            v4.2.0 Stable
          </Badge>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <OperationsCard />

          <div className="flex flex-col gap-6">
            {adminFeatures.map((feature, index) => (
              <AdminFeaturesCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default AdminSuite
