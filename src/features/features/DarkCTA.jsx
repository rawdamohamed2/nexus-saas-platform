import React from 'react'

const DarkCta = () => {
  return (
    <section className="bg-primary px-6 py-24 text-center">
      <div className="container">
        <h2 className="text-text-on-primary mb-6 text-2xl leading-tight font-bold md:text-4xl">
          Ready to transform your B2B operations?
        </h2>
        <p className="text-chart-1 mb-12 text-lg">
          Join over 500 companies using NexusB2B to scale their service delivery
          with surgical precision.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button className="text-text-main bg-card hover:bg-muted rounded-xl px-10 py-4 font-bold transition-all">
            Start Free Trial
          </button>
          <button className="text-text-on-primary border-secondary hover:bg-card/5 rounded-xl border px-10 py-4 font-bold transition-all">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  )
}
export default DarkCta
