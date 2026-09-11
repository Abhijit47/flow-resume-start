import { ScrollArea } from '#/components/ui/scroll-area'
import AwardsContent from '#/features/private/contents/awards'
import CertificatesContent from '#/features/private/contents/certificates'
import CoursesContent from '#/features/private/contents/courses'
import { DeclarationContent } from '#/features/private/contents/declaration'
import EducationContent from '#/features/private/contents/education'
import InterestsContent from '#/features/private/contents/interests'
import LanguagesContent from '#/features/private/contents/languages'
import OrganizationsContent from '#/features/private/contents/organizations'
import ProjectsContent from '#/features/private/contents/projects'
import PublicationsContent from '#/features/private/contents/publications'
import ReferencesContent from '#/features/private/contents/references'
import SkillsContent from '#/features/private/contents/skills'
import SummaryContent from '#/features/private/contents/summary'
import WorkContent from '#/features/private/contents/work'
import InitialCard from '#/features/private/initial-card'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_resume/resume/content/')({
  loader: async ({ context }) => {
    return { user: context.user }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <ScrollArea className={'h-dvh w-full p-4'}>
      <div className={'pr-2 space-y-4 mb-20'}>
        <InitialCard />
        <SummaryContent />
        <EducationContent />
        <WorkContent />
        <SkillsContent />
        <LanguagesContent />
        <CertificatesContent />
        <InterestsContent />
        <ProjectsContent />
        <CoursesContent />
        <AwardsContent />
        <OrganizationsContent />
        <PublicationsContent />
        <ReferencesContent />
        <DeclarationContent />
      </div>
    </ScrollArea>
  )
}
