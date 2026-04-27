import React from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card.jsx'

const ServiceCard = ({ item }) => {
  return (
    <Card className="border-outline-variant hover:border-accent-foreground overflow-hidden rounded-[24px] border border-transparent p-0 transition-all hover:shadow-md">
      <div className="relative h-56 w-full">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      <CardContent className="pt-3">
        <div className="text-accent-foreground mb-3 flex items-center gap-2">
          <item.icon size={20} className="text-accent-foreground" />
          <span className="text-xs font-bold tracking-widest uppercase">
            {item.title}
          </span>
        </div>
        <p className="text-chart-5 pe-2 text-sm leading-relaxed">
          {item.description}
        </p>
      </CardContent>

      <CardFooter className="flex flex-col items-start px-6 pt-5">
        <span className="text-text-main mb-1 text-xs">Starting at</span>
        <div className="flex items-baseline gap-1">
          <span className="text-text-main text-2xl font-bold">
            {item.price}
          </span>
          <span className="text-muted-foreground text-sm">/mo</span>
        </div>
      </CardFooter>
    </Card>
  )
}
export default ServiceCard
