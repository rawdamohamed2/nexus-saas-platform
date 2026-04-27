import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { MdVerifiedUser } from 'react-icons/md'

const WorkerFeaturesCard = ({ item }) => {
  return (
    <Card
      className={`${item.bg} overflow-hidden rounded-4xl border-0 shadow-sm transition-transform duration-300 hover:scale-[1.02]`}
    >
      <CardHeader className="px-8 pt-5 pb-0">
        {item.id === 3 && (
          <item.icon className="text-text-main mb-4" size={28} />
        )}
        <CardTitle className={`text-2xl font-bold ${item.textColor} mb-4`}>
          {item.title}
        </CardTitle>
        <p
          className={`text-sm leading-relaxed ${item.id === 2 ? 'text-muted' : 'text-muted-foreground'}`}
        >
          {item.description}
        </p>
      </CardHeader>

      <CardContent className="p-8 pt-2">
        {/* Conditional Rendering based on card type */}
        {item.id === 1 && (
          <div className="h-56 translate-y-4 rounded-t-3xl">
            <img
              src={item.image}
              alt="Mobile App"
              className="h-full w-full object-cover"
            />
          </div>
        )}

        {item.id === 2 && (
          <div className="group relative">
            <div className="border-secondary mx-auto h-56 w-56 overflow-hidden rounded-full border-4 p-1">
              <img
                src={item.image}
                alt="Map"
                className="h-full w-full rounded-full object-cover grayscale"
              />
            </div>
            <Badge className="bg-secondary hover:bg-secondary/80 text-text-on-primary absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full px-4 py-1">
              Open Maps
            </Badge>
          </div>
        )}

        {item.id === 3 && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-100 p-4">
              <div className="text-text-on-primary rounded-full bg-emerald-500 p-1">
                <MdVerifiedUser size={14} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-emerald-900">
                  Service Confirmed
                </p>
                <p className="text-[8px] text-emerald-700">
                  Location: 40.7128° N, 74.0060° W
                </p>
              </div>
            </div>
            <div className="h-12 w-full animate-pulse rounded-2xl bg-slate-50" />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
export default WorkerFeaturesCard
