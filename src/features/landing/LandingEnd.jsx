import React from 'react'
import { Button } from '@/components/ui/button'

const LandingEnd = () => {
  return (
    <section className="px-6 py-20">
      <div className="container">
        <div className="bg-border flex flex-col items-center justify-between gap-10 rounded-[48px] p-12 md:flex-row md:p-20">
          <div className="max-w-3xl text-center md:text-left">
            <h2 className="text-text-main mb-6 text-4xl leading-tight font-bold md:text-5xl">
              Ready to transform your service operations?
            </h2>
            <p className="text-muted-foreground text-lg">
              Join 5,000+ businesses that scaled their operations by 40% in
              their first year with Nexus.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Button className="primaryButton px-10 py-7 text-lg font-bold">
              Get Started for Free
            </Button>
            <p className="text-accent-foreground text-sm">
              No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default LandingEnd
