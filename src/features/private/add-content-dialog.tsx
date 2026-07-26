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
import { IconPlus } from '@tabler/icons-react'
import type { LucideIcon } from 'lucide-react'
import {
  AwardIcon,
  BrainCogIcon,
  BriefcaseBusinessIcon,
  Building2Icon,
  FileBadge2Icon,
  FolderGit2,
  Globe2Icon,
  GuitarIcon,
  IdCardIcon,
  LibraryBigIcon,
  NewspaperIcon,
  PencilLineIcon,
  PuzzleIcon,
  RefreshCcwDotIcon,
  School2Icon,
} from 'lucide-react'

export default function AddContentDialog() {
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
            {items.map((item) => (
              <Card key={item.id} className={'cursor-pointer'}>
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

interface Items {
  id: string // use cryto.randomUUID()
  title: string
  description: string
  icon: LucideIcon
}

const items: Items[] = [
  {
    id: crypto.randomUUID(),
    title: 'Summary',
    description:
      'Add a short summary of your key strengths, experience, and career goals.',
    icon: IdCardIcon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Education',
    description:
      'Add your degrees and schools. Include your focus, honors, or exchange terms.',
    icon: School2Icon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Professional Experience',
    description:
      'Add your professional roles and employer history including internships.',
    icon: BriefcaseBusinessIcon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Skills',
    description:
      'Add your hard and soft skills that help you stand out from the crowd today.',
    icon: BrainCogIcon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Languages',
    description:
      'Add your languages and proficiency level to show your communication range.',
    icon: Globe2Icon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Certificates',
    description:
      'Add your industry certificates or licences. Include issuer and date earned.',
    icon: FileBadge2Icon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Interests',
    description:
      'Add relevant personal interests that support your career story and cultural fit.',
    icon: GuitarIcon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Projects',
    description:
      'Add key projects you participated in and highlight your challenges, role, and impact.',
    icon: FolderGit2,
  },
  {
    id: crypto.randomUUID(),
    title: 'Courses',
    description:
      'Add online or in-person courses and trainings you joined and completed.',
    icon: LibraryBigIcon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Awards',
    description:
      'Add your awards and recognitions from industry, competitions, or academia.',
    icon: AwardIcon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Organisations',
    description:
      'Add your memberships or volunteering with organisations including your role.',
    icon: Building2Icon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Publications',
    description:
      'Add publications, articles, or books you wrote or contributed to.',
    icon: NewspaperIcon,
  },
  {
    id: crypto.randomUUID(),
    title: 'References',
    description:
      'Add your references from managers or coworkers, including their contact details.',
    icon: RefreshCcwDotIcon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Declaration',
    description:
      'Add your declaration by creating or uploading your personal signature.',
    icon: PencilLineIcon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Custom',
    description:
      'Add a custom section for anything else, or combine sections cleanly.',
    icon: PuzzleIcon,
  },
]
