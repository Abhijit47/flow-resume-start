import {
  IconId,
  IconLanguage,
  IconNotes,
  IconPencil,
  IconTextSpellcheck,
} from '@tabler/icons-react'

export const aiFeatures = [
  {
    id: crypto.randomUUID(),
    title: 'Translate resume',
    description:
      'Create a translated version of your resume in the language of your choice.',
    icon: IconLanguage,
    btnText: 'translate now',
    tag: 'old',
  },
  {
    id: crypto.randomUUID(),
    title: 'Improve writing',
    description:
      'Strengthen your resume with clearer, more concise and impactful writing.',
    icon: IconPencil,
    btnText: 'improve now',
    tag: 'new',
  },
  {
    id: crypto.randomUUID(),
    title: 'Draft Cover Letter',
    description:
      'Draft a tailored cover letter draft based on your resume and target job description.',
    icon: IconNotes,
    btnText: 'draft now',
    tag: 'new',
  },
  {
    id: crypto.randomUUID(),
    title: 'Generate Summary',
    description:
      'Turn your existing resume content into a professional summary for your resume.',
    icon: IconId,
    btnText: 'generate now',
    tag: 'new',
  },
  {
    id: crypto.randomUUID(),
    title: 'Check spelling & grammar',
    description: 'Check spelling, grammar and punctuation without rewriting.',
    icon: IconTextSpellcheck,
    btnText: 'check now',
  },
]
