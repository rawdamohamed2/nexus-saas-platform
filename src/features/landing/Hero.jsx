import React from 'react'
import { Button } from '@/components/ui/button'
import { CirclePlay } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import heroImage from '@/assets/heroPage.png'

const Hero = () => {
  return (
    <section
      className={`container grid max-h-1/2 grid-cols-2 items-center justify-center gap-4`}
    >
      <div className={`flex w-full flex-col gap-4 p-4`}>
        <h1 className={`py-4 text-4xl font-semibold`}>
          Empower Your Service Business with{' '}
          <span className={`text-accent-foreground`}>Nexus</span>
        </h1>
        <p className={`text-muted-foreground text-md max-w-lg pb-1`}>
          The all-in-one platform to manage your workforce, automate bookings,
          and delight your customers. Scale faster with data-driven insights.
        </p>
        <div className="grid grid-cols-2 gap-4 pt-4">
          <Button className={`primaryButton py-5`}>Start Free Trial</Button>
          <Button variant="outline" className={`py-5`}>
            <CirclePlay /> Watch Demo
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-0">
            <Avatar>
              <AvatarImage src="https://img.freepik.com/premium-vector/defaicon-bl" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://img.freepik.com/premium-vector/defaicon-bl" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://img.freepik.com/premium-vector/defaicon-bl" />
              <AvatarFallback>ML</AvatarFallback>
            </Avatar>
          </div>
          <p className={`text-muted-foreground text-sm`}>
            Trusted by 500+ service teams globally
          </p>
        </div>
      </div>

      <div>
        <img
          src={heroImage}
          alt={`hero image`}
          className={`h-[650px] w-[650px]`}
        />
      </div>
    </section>
  )
}
export default Hero
