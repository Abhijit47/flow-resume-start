import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

import { ScrollArea } from '#/components/ui/scroll-area'
import PersonalDetailsForm from '#/features/private/forms/personal-details-form'
import { usePersonalizationStore } from '#/store/personal-data-store'

export const Route = createFileRoute(
  '/_resume/resume/content/edit/personal-details/',
)({
  loader: async ({ context }) => {
    return { user: context.user }
  },
  component: RouteComponent,
})

function RouteComponent() {
  useEffect(() => {
    usePersonalizationStore.persist.rehydrate()
  }, [])

  return (
    <ScrollArea className={'h-dvh w-full p-4'}>
      <PersonalDetailsForm />
    </ScrollArea>
  )
}
