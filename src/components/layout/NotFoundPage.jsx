import React from 'react'
import { Button } from '@/components/ui/button'
import { MoveLeft, HelpCircle } from 'lucide-react'

const NotFoundPage = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-white px-6">
      <span className="mb-4 text-[120px] leading-none font-black text-[#EBF2FF] select-none">
        404
      </span>

      <div className="max-w-lg space-y-6 text-center">
        <h2 className="text-3xl font-bold text-[#1D1B20]">
          Oops! Page not found
        </h2>
        <p className="text-lg text-slate-500">
          It looks like the link you followed might be broken or the page has
          been moved. Don’t worry, we’ll help you find your way back.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row">
          <Button
            asChild
            className="w-full rounded-xl bg-black px-8 py-6 text-white sm:w-auto"
          >
            <a href="/dashboard">
              {' '}
              <MoveLeft className="mr-2 h-4 w-4" /> Return to Dashboard
            </a>
          </Button>
          <Button
            variant="ghost"
            className="w-full gap-2 text-slate-600 hover:text-black sm:w-auto"
          >
            <HelpCircle className="h-4 w-4" /> Contact Support
          </Button>
        </div>
      </div>
    </section>
  )
}
export default NotFoundPage
