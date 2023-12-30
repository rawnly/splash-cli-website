
'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const API_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY
const API_HOST = process.env.NEXT_PUBLIC_URL || process.env.NEXT_PUBLIC_POSTHOG_HOST

if ( typeof window !== 'undefined' ) {
  posthog.init(API_KEY, {
    api_host: API_HOST,
    capture_pageview: false
  })
}

export default function PostHogPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if ( pathname ) {
      let url = window.origin + pathname
      if ( searchParams.toString() ) {
        url = `${url}?${searchParams.toString()}`
      }

      posthog.capture("$pageview", {
        $current_url: url,
        $env: process.env.NEXT_PUBLIC_VERCEL_ENV ?? 'development',
        $project: process.env.NEXT_PUBLIC_PROJECT_NAME ?? 'splash-cli',
      })
    }
  }, [pathname, searchParams])

  return null
}


export function PHProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
