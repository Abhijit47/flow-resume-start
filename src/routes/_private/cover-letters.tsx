import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_private/cover-letters')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_private/cover-letters"!</div>
}
