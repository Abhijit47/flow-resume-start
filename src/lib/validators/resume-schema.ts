import z from 'zod'

import { contentSchema } from './content-schema'
import { personalDetailsSchema } from './personal-info-schema'

export const resumeSchema = z.object({
  // id: z.uuid({ version: 'v4' }),
  // userId: z.string().min(1, { message: 'User ID is required' }),
  personalDetails: personalDetailsSchema,
  contents: contentSchema,
  // createdAt: z.date(),
  // updatedAt: z.date(),
})

export type ResumeFormValues = z.infer<typeof resumeSchema>
