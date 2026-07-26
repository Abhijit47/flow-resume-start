import { SidebarInset, SidebarProvider } from '#/components/ui/sidebar'
import { AppSidebar } from '#/features/private/app-sidebar'
import { CommonSiteHeader } from '#/features/private/common-site-header'
import EditorSiteHeader from '#/features/private/editor-site-header'
import { getSession } from '#/lib/auth.functions'
import {
  createFileRoute,
  Outlet,
  redirect,
  useMatches,
} from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/_private')({
  staticData: { showNavbar: false },
  beforeLoad: async ({ location }) => {
    const session = await getSession()
    if (!session) {
      throw redirect({
        to: '/login',
        search: { redirect: location.href },
      })
    }
    return { user: session.user }
  },
  loader: ({ context }) => {
    context.user
  },
  component: PrivateLayout,
  wrapInSuspense: true,
  codeSplitGroupings: [['loader', 'component']],
})

function PrivateLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const isShowSidebar = useMatches({
    select: (matches) =>
      !matches.some((m) => m.staticData.showSidebar === false),
  })

  useEffect(() => {
    if (!isShowSidebar) {
      setSidebarOpen(false)
    } else {
      setSidebarOpen(true)
    }
  }, [isShowSidebar, setSidebarOpen])

  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 52)',
          '--header-height': 'calc(var(--spacing) * 16)',
        } as React.CSSProperties
      }
      open={sidebarOpen}
      onOpenChange={setSidebarOpen}
      className="relative"
    >
      <AppSidebar variant="floating" />
      <SidebarInset>
        {!isShowSidebar ? <EditorSiteHeader /> : <CommonSiteHeader />}

        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}
