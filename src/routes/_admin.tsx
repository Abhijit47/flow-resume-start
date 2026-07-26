import { SidebarInset, SidebarProvider } from '#/components/ui/sidebar'
import { AppSidebar } from '#/features/admin/app-sidebar'
import { SiteHeader } from '#/features/admin/site-header'
import { getSession } from '#/lib/auth.functions'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_admin')({
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
  component: AdminLayout,
  wrapInSuspense: true,
  codeSplitGroupings: [['loader', 'component']],
})

function AdminLayout() {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 72)',
          '--header-height': 'calc(var(--spacing) * 12)',
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
