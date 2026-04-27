import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.jsx'

const AdminFeaturesCard = ({ feature }) => {
  return (
    <Card className="border-outline-variant bg-card rounded-3xl px-2 py-4 transition-all hover:shadow-md">
      <CardHeader>
        <feature.icon className="text-text-main mb-4" size={24} />
        <CardTitle className="text-text-main text-2xl font-semibold">
          {feature.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-accent-foreground text-sm leading-relaxed">
          {feature.description}
        </p>
      </CardContent>
    </Card>
  )
}
export default AdminFeaturesCard
