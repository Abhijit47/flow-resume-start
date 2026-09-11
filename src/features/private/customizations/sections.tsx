import { ChevronDownCircleIcon, ChevronUpCircleIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '#/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '#/components/ui/collapsible'
import { cn } from '#/lib/utils'
import EditCertificates from './sections/certificates'
import EditDeclaration from './sections/declaration'
import EditEducation from './sections/education'
import EditInterests from './sections/interests'
import EditLanguages from './sections/languages'
import EditSkills from './sections/skills'
import EditSummary from './sections/summary'
import EditWorkExperience from './sections/work-experience'

const animationClass =
  'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

export default function Sections() {
  const [isOpenSectionsCollapsible, setIsOpenSectionsCollapsible] =
    useState(false)
  // resumeDesignSectionsOpen:"true" in sessionStorage

  return (
    <Collapsible
      className={'px-2 group data-[state=closed]:mb-8 data-[state=open]:mb-8'}
      open={isOpenSectionsCollapsible}
      onOpenChange={setIsOpenSectionsCollapsible}
    >
      <CollapsibleTrigger asChild>
        <Button
          size={'xl'}
          variant={'outline'}
          className={'w-full justify-between'}
        >
          Section Customizations
          {isOpenSectionsCollapsible ? (
            <ChevronUpCircleIcon
              className={'size-4 transition-transform duration-300'}
            />
          ) : (
            <ChevronDownCircleIcon
              className={'size-4 transition-transform duration-300'}
            />
          )}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent
        className={cn('space-y-4 p-2 border-l-2', animationClass)}
      >
        <EditSummary />

        <EditSkills />

        <EditCertificates />

        <EditDeclaration />

        <EditWorkExperience />

        <EditLanguages />

        <EditInterests />

        <EditEducation />
      </CollapsibleContent>
    </Collapsible>
  )
}
