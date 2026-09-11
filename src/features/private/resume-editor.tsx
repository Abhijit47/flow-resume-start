import { useSelector } from '@tanstack/react-store'

import { ScrollArea } from '#/components/ui/scroll-area'
import { resumeStoreTs } from '#/store/resume-store-tanstack'

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
    resumeStoreTs,
    (state) => state.isEnabledFirstForm,
  )

  return (
    <>
      {!isEnabledFirstForm ? (
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
      ) : (
        <ScrollArea className={'h-dvh w-full p-4'}>
          <PersonalDetailsForm />
        </ScrollArea>
      )}
    </>
  )
}
