import React from 'react'
import { Badge } from '@/components/ui/badge.jsx'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.jsx'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const PricingCard = ({ plan }) => {
  return (
    <Card
      className={`relative rounded-[24px] border-0 p-4 transition-all duration-300 ${
        plan.is_popular
          ? 'ring-secondary bg-card scale-105 overflow-visible shadow-2xl ring-4'
          : 'bg-card'
      }`}
    >
      {plan.is_popular && (
        <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
          <Badge className="bg-secondary hover:bg-secondary/90 rounded-full px-4 py-1 text-xs font-bold tracking-widest text-white transition-all duration-300">
            MOST POPULAR
          </Badge>
        </div>
      )}

      <CardHeader>
        <CardTitle className="text-text-main text-2xl font-bold">
          {plan.name}
        </CardTitle>
        <CardDescription className="text-muted-foreground pt-2">
          {plan.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span
              className={`text-5xl font-bold ${
                plan.is_popular ? 'text-muted-foreground' : 'text-text-main'
              }`}
            >
              {plan.price ? plan.price : 'Custom'}
            </span>
            {plan.price && <span className="text-muted-foreground">/mo</span>}
          </div>
          <span className="text-accent-foreground mt-2 text-sm font-medium">
            {plan.max_workers ? `Up to ${plan.max_workers} ` : 'Unlimited '}
            Workers
          </span>
        </div>

        <ul className="space-y-4 pt-4">
          {plan.features.map((feature, index) => (
            <li
              key={index}
              className="text-text-main flex items-center gap-3 font-medium"
            >
              <CheckCircle2
                className={
                  plan.is_popular
                    ? 'text-accent-foreground'
                    : 'text-emerald-500'
                }
                size={20}
              />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="border-0 bg-transparent pt-6">
        <Button
          className={`w-full rounded-xl py-6 text-lg font-semibold transition-all ${
            plan.is_popular
              ? 'bg-secondary hover:bg-secondary-foreground/80 text-text-on-primary'
              : 'border-secondary bg-card hover:bg-muted text-outline border'
          }`}
        >
          {plan.cta_text}
        </Button>
      </CardFooter>
    </Card>
  )
}
export default PricingCard
