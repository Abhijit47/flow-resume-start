import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_private/student-benefits')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_private/student-benefits"!</div>
}
