import ResumeEditor from '#/features/private/resume-editor'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_resume/resume/content')({
  loader: async ({ context }) => {
    return { user: context.user }
  },
  component: RouteComponent,
  wrapInSuspense: true,
  codeSplitGroupings: [['loader', 'component']],
})

function RouteComponent() {
  return <ResumeEditor />
}
