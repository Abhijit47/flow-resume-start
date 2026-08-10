import { IconPlus } from '@tabler/icons-react'

import { Button } from '#/components/ui/button'
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '#/components/ui/dialog'
import { ScrollArea } from '#/components/ui/scroll-area'
import { contentItems } from '#/constants/content-items'
import { useResumeFormContext } from '#/contexts/resume-form-context'
import { toast } from 'sonner'

export default function AddContentDialog() {
  const {
    summaryOpts: { append: summaryAppend },
    educationOpts: { append: educationAppend },
    workOpts: { append: workAppend },
    skillsOpts: { append: skillsAppend },
    languagesOpts: { append: languagesAppend },
    certificatesOpts: { append: certificatesAppend },
    interestsOpts: { append: interestsAppend },
    projectsOpts: { append: projectsAppend },
    coursesOpts: { append: coursesAppend },
    awardsOpts: { append: awardsAppend },
    organisationsOpts: { append: organisationsAppend },
    publicationsOpts: { append: publicationsAppend },
    referencesOpts: { append: referencesAppend },
    declarationOpts: { append: declarationAppend },
  } = useResumeFormContext()

  function handleAddContent(item: (typeof contentItems)[number]) {
    switch (item.slug) {
      case 'summary':
        summaryAppend({
          isHidden: false,
          showPlaceholder: false,
          text: '',
        })
        break

      case 'education':
        educationAppend({
          isHidden: false,
          showPlaceholder: false,
          degree: '',
        })
        break

      case 'work':
        workAppend({
          isHidden: false,
          showPlaceholder: false,
          jobTitle: '',
        })
        break

      case 'skills':
        skillsAppend({
          isHidden: false,
          showPlaceholder: false,
          skill: '',
        })
        break

      case 'languages':
        languagesAppend({
          isHidden: false,
          showPlaceholder: false,
          language: '',
        })
        break

      case 'certificates':
        certificatesAppend({
          isHidden: false,
          showPlaceholder: false,
          certificate: '',
        })
        break

      case 'interests':
        interestsAppend({
          isHidden: false,
          showPlaceholder: false,
          interest: '',
        })
        break

      case 'projects':
        projectsAppend({
          isHidden: false,
          showPlaceholder: false,
          projectTitle: '',
        })
        break

      case 'courses':
        coursesAppend({
          isHidden: false,
          showPlaceholder: false,
          courseTitle: '',
        })
        break

      case 'awards':
        awardsAppend({
          isHidden: false,
          showPlaceholder: false,
          awardTitle: '',
        })
        break

      case 'organisations':
        organisationsAppend({
          isHidden: false,
          showPlaceholder: false,
          organisation: '',
        })
        break

      case 'publications':
        publicationsAppend({
          isHidden: false,
          showPlaceholder: false,
          title: '',
        })
        break

      case 'references':
        referencesAppend({
          isHidden: false,
          showPlaceholder: false,
          name: '',
        })
        break

      case 'declaration':
        declarationAppend({
          isHidden: false,
          showPlaceholder: false,
          declarationText: '',
        })
        break

      default:
        toast('not implemented yet')
        break
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={'lg'}>
          <IconPlus className={'size-4'} /> Add Content
        </Button>
      </DialogTrigger>
      <DialogContent className={'mx-auto sm:max-w-(--breakpoint-xl) px-4'}>
        <DialogHeader>
          <DialogTitle>Add content</DialogTitle>
          <DialogDescription>
            Add content to your resume by selecting from the list of available
            sections below. You can add multiple sections and rearrange them
            later.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-72 md:h-96 lg:h-full w-full p-4">
          <div
            className={
              'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
            }
          >
            {contentItems.map((item) => (
              <Card
                key={item.id}
                className={'cursor-pointer'}
                onClick={() => handleAddContent(item)}
              >
                <CardHeader>
                  <CardAction>
                    <item.icon className={'size-6'} />
                  </CardAction>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>
                    <p>{item.description}</p>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
