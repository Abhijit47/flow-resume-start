import { SidebarInset, SidebarProvider } from '#/components/ui/sidebar'
import { AppSidebar } from '#/features/private/app-sidebar'
import { SiteHeader } from '#/features/private/site-header'
import { getSession } from '#/lib/auth.functions'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

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
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 52)',
          '--header-height': 'calc(var(--spacing) * 16)',
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}
