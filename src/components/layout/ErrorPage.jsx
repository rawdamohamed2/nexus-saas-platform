import React from 'react'
import { Button } from '@/components/ui/button'
import { AlertCircle, RefreshCcw, Home } from 'lucide-react'

const ErrorPage = () => {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md space-y-8 text-center">
        {/* Icon with subtle pulse effect */}
        <div className="relative inline-flex">
          <div className="absolute inset-0 animate-ping rounded-full bg-red-100 opacity-20" />
          <div className="relative rounded-full border border-red-100 bg-red-50 p-6">
            <AlertCircle className="h-12 w-12 text-red-600" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-[#1D1B20]">
            System Connection Issue
          </h1>
          <p className="leading-relaxed text-slate-500">
            We’re having trouble connecting to our servers. This is likely a
            temporary hiccup on our end. Please try refreshing or check back in
            a moment.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
          <Button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 rounded-xl bg-black px-8 py-6 text-white hover:bg-black/90"
          >
            <RefreshCcw className="h-4 w-4" /> Try Again
          </Button>
          <Button
            variant="outline"
            asChild
            className="rounded-xl border-[#C5D9FF] px-8 py-6"
          >
            <a href="/">
              {' '}
              <Home className="mr-2 h-4 w-4" /> Back to Home
            </a>
          </Button>
        </div>

        <p className="font-mono text-xs text-slate-400 italic">
          Error Code: 500_INTERNAL_SERVER_ERROR
        </p>
      </div>
    </section>
  )
}
export default ErrorPage
