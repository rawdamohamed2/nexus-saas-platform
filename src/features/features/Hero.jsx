import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden px-6 py-24 md:py-32">
      <div className="relative z-10 container mx-auto flex flex-col items-center text-center">
        <Badge className="border-border bg-popover text-secondary hover:bg-popover/50 mb-10 rounded-full border px-6 py-1.5 text-xs font-semibold tracking-widest uppercase shadow-sm">
          PLATFORM OVERVIEW
        </Badge>

        <h1 className="text-text-main mb-8 max-w-3xl text-3xl leading-[1.1] font-bold md:text-4xl lg:text-5xl">
          Powerful Tools for Every Role
        </h1>

        <p className="text-muted-foreground mx-auto mb-16 max-w-3xl text-lg leading-relaxed md:text-xl">
          NexusB2B unifies your entire operation. From administrative oversight
          to field execution and client satisfaction, we provide the precision
          you need.
        </p>

        <div className="flex w-full flex-col items-center justify-center gap-5 sm:w-auto sm:flex-row">
          <Button className="primaryButton w-full px-10 py-7 text-lg font-semibold transition-transform sm:w-auto">
            Explore Admin Suite
          </Button>
          <Button
            variant="outline"
            className="outlineButton w-full px-10 py-7 text-lg font-semibold sm:w-auto"
          >
            Request a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
export default Hero
