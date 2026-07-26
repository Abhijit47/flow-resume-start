import { TooltipProvider } from '@/components/ui/tooltip'
import { TanStackDevtools } from '@tanstack/react-devtools'
import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
  useMatches,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import Footer from '../components/Footer'
import Header from '../components/Header'

import StoreDevtools from '../lib/demo-store-devtools'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

import PostHogProvider from '../integrations/posthog/provider'

import { getLocale } from '#/paraglide/runtime'

import appCss from '../styles.css?url'

import type { TRPCRouter } from '#/integrations/trpc/router'
import type { QueryClient } from '@tanstack/react-query'
import type { TRPCOptionsProxy } from '@trpc/tanstack-react-query'

import { Toaster } from '#/components/ui/sonner'
import { ThemeProvider } from '@/components/theme-provider'

declare module '@tanstack/react-router' {
  interface StaticDataRouteOption {
    showNavbar?: boolean
    showSidebar?: boolean
  }
}

interface MyRouterContext {
  queryClient: QueryClient

  trpc: TRPCOptionsProxy<TRPCRouter>
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  beforeLoad: async () => {
    // Other redirect strategies are possible; see
    // https://github.com/TanStack/router/tree/main/examples/react/i18n-paraglide#offline-redirect
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', getLocale())
    }
  },

  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const showNavbar = useMatches({
    select: (matches) =>
      !matches.some((m) => m.staticData.showNavbar === false),
  })
  return (
    <html lang={getLocale()} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased wrap-anywhere selection:bg-accent">
        <PostHogProvider>
          <ThemeProvider defaultTheme="system" storageKey="theme">
            <TooltipProvider>
              {showNavbar ? (
                <>
                  <Header />
                  {children}
                  <Footer />
                </>
              ) : (
                <>{children}</>
              )}
            </TooltipProvider>
            <Toaster
              position="top-center"
              closeButton
              richColors
              theme="system"
            />
          </ThemeProvider>
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
              StoreDevtools,
              TanStackQueryDevtools,
            ]}
          />
        </PostHogProvider>
        <Scripts />
      </body>
    </html>
  )
}
