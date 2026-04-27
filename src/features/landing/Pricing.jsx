import React, { useEffect } from 'react'
import PricingCard from '@/components/shared/landingPage/PricingCard.jsx'
import { supabase } from '@/lib/supabase.js'
import { useApi } from '@/hooks/useApi.js'
import Loading from '@/components/layout/Loading.jsx'
import { toast } from 'sonner'
import ErrorPage from '@/components/layout/ErrorPage.jsx'

const Pricing = () => {
  const getPlans = () =>
    supabase.from('subscription_plans').select('*').order('price')

  const { data: plans, loading, error, request: fetchPlans } = useApi(getPlans)
  console.log(plans, loading, error)
  useEffect(() => {
    fetchPlans()
  }, [])

  if (loading) return <Loading />
  if (error || !plans) return <ErrorPage />
  return (
    <section className="bg-outline py-24">
      <div className={`container`}>
        <div className="max-w-9xl mx-auto mb-16 text-center">
          <h2 className="text-text-on-primary mb-6 text-2xl font-bold md:text-4xl">
            Scalable Pricing for Growing Teams
          </h2>
          <p className="text-md text-accent-foreground">
            Choose the plan that fits your current workforce and scale as you
            grow.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
export default Pricing
