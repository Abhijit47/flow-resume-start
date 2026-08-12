import { createFileRoute, notFound } from '@tanstack/react-router'

export const Route = createFileRoute('/_resume/resume/_index')({
  beforeLoad: () => {
    throw notFound({ data: { message: 'Not Found' } })
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_resume/resume/_index"!</div>
}
