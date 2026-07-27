import { ResumeFormContextProvider } from '#/contexts/resume-form-context'
import PersonalDetailsForm from '#/features/private/forms/personal-details-form'
// import PersonalDetails from '#/features/private/forms/personal-details'
import InitialCard from '#/features/private/initial-card'
import PreviewCanvas from '#/features/private/preview-canvas'
import { resumeStore } from '#/store/resume-store'
import { createFileRoute } from '@tanstack/react-router'
import { useSelector } from '@tanstack/react-store'

export const Route = createFileRoute('/_private/resume/content')({
  staticData: { showSidebar: false },
  component: RouteComponent,
})

function RouteComponent() {
  const isEnabledFirstForm = useSelector(
    resumeStore,
    (state) => state.isEnabledFirstForm,
  )

  return (
    <div className="px-4 lg:px-6 py-4 md:py-6">
      <div className={'grid grid-cols-12 gap-6'}>
        <ResumeFormContextProvider>
          {!isEnabledFirstForm ? <InitialCard /> : <PersonalDetailsForm />}

          <PreviewCanvas />
        </ResumeFormContextProvider>
      </div>
    </div>
  )
}
