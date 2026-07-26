import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_private/plans')({
  staticData: { showSidebar: true },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="px-4 lg:px-6 py-4 md:py-6">Hello "/_private/plans"!</div>
  )
}
