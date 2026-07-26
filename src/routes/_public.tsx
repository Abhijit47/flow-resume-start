import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_public')({
  staticData: { showNavbar: true },
  component: PublicLayout,
})

function PublicLayout() {
  return (
    <>
      <Outlet />
    </>
  )
}
