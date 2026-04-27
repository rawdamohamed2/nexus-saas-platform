import React from 'react'
import { Card, CardContent } from '@/components/ui/card.jsx'

const ClientFeaturesCard = ({ feature }) => {
  return (
    <Card className="rounded-3xl border-0 p-4 shadow-sm transition-shadow hover:shadow-md">
      <CardContent className="pt-6">
        <feature.icon size={28} className="text-text-main mb-4" />
        <h3 className="text-text-main mb-2 font-bold">{feature.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {feature.description}
        </p>
      </CardContent>
    </Card>
  )
}
export default ClientFeaturesCard
