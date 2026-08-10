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

export interface ContentItem {
  id: string // use cryto.randomUUID()
  title: string
  slug: ContentItemSlug
  description: string
  icon: LucideIcon
}

type ContentItemSlug =
  | 'summary'
  | 'education'
  | 'work'
  | 'skills'
  | 'languages'
  | 'certificates'
  | 'interests'
  | 'projects'
  | 'courses'
  | 'awards'
  | 'organisations'
  | 'publications'
  | 'references'
  | 'declaration'
  | 'custom'

export const contentItems: ContentItem[] = [
  {
    id: crypto.randomUUID(),
    title: 'Summary',
    slug: 'summary',
    description:
      'Add a short summary of your key strengths, experience, and career goals.',
    icon: IdCardIcon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Education',
    slug: 'education',
    description:
      'Add your degrees and schools. Include your focus, honors, or exchange terms.',
    icon: School2Icon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Professional Experience',
    slug: 'work',
    description:
      'Add your professional roles and employer history including internships.',
    icon: BriefcaseBusinessIcon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Skills',
    slug: 'skills',
    description:
      'Add your hard and soft skills that help you stand out from the crowd today.',
    icon: BrainCogIcon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Languages',
    slug: 'languages',
    description:
      'Add your languages and proficiency level to show your communication range.',
    icon: Globe2Icon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Certificates',
    slug: 'certificates',
    description:
      'Add your industry certificates or licences. Include issuer and date earned.',
    icon: FileBadge2Icon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Interests',
    slug: 'interests',
    description:
      'Add relevant personal interests that support your career story and cultural fit.',
    icon: GuitarIcon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Projects',
    slug: 'projects',
    description:
      'Add key projects you participated in and highlight your challenges, role, and impact.',
    icon: FolderGit2,
  },
  {
    id: crypto.randomUUID(),
    title: 'Courses',
    slug: 'courses',
    description:
      'Add online or in-person courses and trainings you joined and completed.',
    icon: LibraryBigIcon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Awards',
    slug: 'awards',
    description:
      'Add your awards and recognitions from industry, competitions, or academia.',
    icon: AwardIcon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Organisations',
    slug: 'organisations',
    description:
      'Add your memberships or volunteering with organisations including your role.',
    icon: Building2Icon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Publications',
    slug: 'publications',
    description:
      'Add publications, articles, or books you wrote or contributed to.',
    icon: NewspaperIcon,
  },
  {
    id: crypto.randomUUID(),
    title: 'References',
    slug: 'references',
    description:
      'Add your references from managers or coworkers, including their contact details.',
    icon: RefreshCcwDotIcon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Declaration',
    slug: 'declaration',
    description:
      'Add your declaration by creating or uploading your personal signature.',
    icon: PencilLineIcon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Custom',
    slug: 'custom',
    description:
      'Add a custom section for anything else, or combine sections cleanly.',
    icon: PuzzleIcon,
  },
]
