import { useSelector } from '@tanstack/react-store'

import { ScrollArea } from '#/components/ui/scroll-area'
import { resumeStore } from '#/store/resume-store'

import PersonalDetailsForm from './forms/personal-details-form'
import InitialCard from './initial-card'

import AwardsContent from './contents/awards'
import CertificatesContent from './contents/certificates'
import CoursesContent from './contents/courses'
import { DeclarationContent } from './contents/declaration'
import EducationContent from './contents/education'
import InterestsContent from './contents/interests'
import LanguagesContent from './contents/languages'
import OrganizationsContent from './contents/organizations'
import ProjectsContent from './contents/projects'
import PublicationsContent from './contents/publications'
import ReferencesContent from './contents/references'
import SkillsContent from './contents/skills'
import SummaryContent from './contents/summary'
import WorkContent from './contents/work'

export default function ResumeEditor() {
  const isEnabledFirstForm = useSelector(
    resumeStore,
    (state) => state.isEnabledFirstForm,
  )

  return (
    <ScrollArea className={'h-dvh overflow-y-hidden w-full'}>
      {!isEnabledFirstForm ? (
        <div className={'pr-4 space-y-4'}>
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
      ) : (
        <PersonalDetailsForm />
      )}
    </ScrollArea>
  )
}
