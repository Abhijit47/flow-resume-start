import { getSession } from '#/lib/auth.functions'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  staticData: { showNavbar: false },
  beforeLoad: async ({ location }) => {
    const session = await getSession()
    if (session) {
      throw redirect({
        to: '/',
        search: { redirect: location.href },
        headers: { 'x-redirect-reason': 'already-logged-in' },
      })
    }
    return null
  },
  component: AuthLayout,
})

function AuthLayout() {
  return (
    <main>
      <Outlet />
    </main>
  )
}
