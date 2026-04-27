import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.jsx'

const LandingCard = ({ feature }) => {
  return (
    <Card className="border-outline-variant group max-w-[400px] rounded-[24px] p-4 transition-all hover:shadow-lg">
      <CardHeader className={`py-3`}>
        <div className="group-hover:bg-outline group-hover:text-primary-foreground text-muted-foreground bg-border flex h-12 w-12 items-center justify-center rounded-xl text-2xl transition-colors">
          {feature.icon}
        </div>

        <CardTitle className="text-primary pt-2 font-sans text-2xl font-medium">
          {feature.title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground text-md leading-relaxed">
          {feature.description}
        </p>
      </CardContent>
    </Card>
  )
}
export default LandingCard
