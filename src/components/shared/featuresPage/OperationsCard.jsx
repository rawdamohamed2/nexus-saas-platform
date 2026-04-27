import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.jsx'
import Background from '@/assets/Background.png'
const OperationsCard = () => {
  return (
    <Card className="border-outline-variant bg-card overflow-hidden rounded-3xl p-4 shadow-lg lg:col-span-2">
      <CardHeader className="border-border flex flex-row items-center justify-between border-b pb-4">
        <CardTitle className="text-outline text-sm font-medium">
          Operations Dashboard
        </CardTitle>
      </CardHeader>

      <CardContent className="relative p-6">
        <div className="bg-border relative h-96 w-full overflow-hidden">
          <img
            src={Background}
            className="h-full w-full object-fill mix-blend-multiply"
            alt="Dashboard Preview"
          />
          <div className="border-card/50 bg-card/90 absolute bottom-10 left-10 z-10 flex gap-10 rounded-2xl border p-6 shadow-xl">
            <div>
              <p className="text-accent-foreground mb-1 text-[10px] font-bold tracking-wider uppercase">
                Revenue
              </p>
              <p className="text-text-main text-2xl font-bold">$124,500</p>
            </div>
            <div>
              <p className="text-accent-foreground mb-1 text-[10px] font-bold tracking-wider uppercase">
                Active Staff
              </p>
              <p className="text-text-main text-2xl font-bold">42</p>
            </div>
            <div>
              <p className="text-accent-foreground mb-1 text-[10px] font-bold tracking-wider uppercase">
                Uptime
              </p>
              <p className="text-text-main text-2xl font-bold">99.9%</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
export default OperationsCard
