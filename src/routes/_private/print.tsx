import { ResumeFormContextProvider } from '#/contexts/resume-form-context'
import { ResumeTemplate } from '#/features/private/resume-template'
import type { PersonalDetailsFormData } from '#/lib/validators/personal-info-schema'
import { createFileRoute } from '@tanstack/react-router'
import { useFormContext, useWatch } from 'react-hook-form'

export const Route = createFileRoute('/_private/print')({
  component: RouteComponent,
})

function RouteComponent() {
  const form = useFormContext<PersonalDetailsFormData>()

  const watchedValues = useWatch({
    control: form.control,
  })
  return (
    <ResumeFormContextProvider>
      <ResumeTemplate data={watchedValues} />
    </ResumeFormContextProvider>
  )
}
