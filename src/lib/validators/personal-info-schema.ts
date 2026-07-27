import z from 'zod'

export const basePersonalDetailsSchema = z.object({
  fullName: z.string().optional(),
  jobTitle: z.string().optional(),
  displayEmail: z.email().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
})

export const socialProfileSchema = z.object({
  link: z.string().optional(),
  display: z.string().optional(), // display name of the social profile, e.g., "LinkedIn", "GitHub", etc.
})

export const additionalPersonalDetailsSchema = z.object({
  passport: z.string().optional(),
  nationality: z.string().optional(),
  visa: z.string().optional(),
  birthdayStr: z.string().optional(), // any format, e.g., "YYYY-MM-DD" or "DD/MM/YYYY"
  availability: z.string().optional(),
  gender: z.string().optional(),
  disability: z.string().optional(),
  workMode: z.string().optional(), // e.g., "Remote", "On-site", "Hybrid"
  relocation: z.string().optional(), // e.g., "Yes", "No", "Maybe"
  expectedSalary: z.string().optional(), // e.g., "50,000 USD/year"
  secondPhone: z.string().optional(),
  drivingLicense: z.string().optional(),
  securityClearance: z.string().optional(),
  maritalStatus: z.string().optional(),
  military: z.string().optional(),
  smoking: z.string().optional(),
  height: z.string().optional(),
  weight: z.string().optional(),
})

export const personalDetailsSchema = z
  .object({
    ...basePersonalDetailsSchema.shape,
    // social: z.array(socialProfileSchema).optional(),
    // ...additionalPersonalDetailsSchema.shape,
  })
  .extend({
    social: z.array(socialProfileSchema).optional(),
  })
  .extend({
    ...additionalPersonalDetailsSchema.shape,
  })

export type SocialProfileSchema = z.infer<typeof socialProfileSchema>

export type AdditionalPersonalDetailsSchema = z.infer<
  typeof additionalPersonalDetailsSchema
>
export type PersonalDetailsFormData = z.infer<typeof personalDetailsSchema>
