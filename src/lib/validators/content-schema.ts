import z from 'zod'

// lateral values
export const skillLevel = [
  'beginner',
  'amateur',
  'competent',
  'proficient',
  'expert',
] as const

export const languageLevel = [
  'basic',
  'conversational',
  'proficient',
  'fluent',
  'native/bilingual',
] as const

const baseContentSchema = z.object({
  // id: z.uuid({ version: 'v4' }).default(crypto.randomUUID()).optional(),
  isHidden: z.boolean().default(false).optional(),
  showPlaceholder: z.boolean().default(false).optional(),
  // createdAt: z
  //   .string()
  //   .default(() => new Date().toISOString())
  //   .optional(),
  // updatedAt: z
  //   .string()
  //   .default(() => new Date().toISOString())
  //   .optional(),
})

const summarySchema = baseContentSchema.extend({
  text: z.string().optional(),
})

const educationSchema = baseContentSchema.extend({
  degree: z.string().optional(),
  // school: z.string().optional(),
  // schoolLink: z.string().optional(),
  // startDateNew: z.string().optional(),
  // endDateNew: z.string().optional(),
  // location: z.string().optional(),
  // description: z.string().optional(),
})

const workSchema = baseContentSchema.extend({
  jobTitle: z.string().optional(),
  // employer: z.string().optional(),
  // employerLink: z.string().optional(),
  // startDateNew: z.string().optional(),
  // endDateNew: z.string().optional(),
  // location: z.string().optional(),
  // description: z.string().optional(),
})

const skillSchema = baseContentSchema.extend({
  skill: z.string().optional(),
  // infoHtml: z.string().optional(),
  // level: z.enum(skillLevel).optional(),
})

const languageSchema = baseContentSchema.extend({
  language: z.string().optional(),
  // infoHtml: z.string().optional(),
  // level: z.enum(languageLevel).optional(),
})

const certificateSchema = baseContentSchema.extend({
  certificate: z.string().optional(),
  // certificateLink: z.string().optional(),
  // infoHtml: z.string().optional(),
})

const interestSchema = baseContentSchema.extend({
  interest: z.string().optional(),
  // interestLink: z.string().optional(),
  // infoHtml: z.string().optional(),
})

const projectSchema = baseContentSchema.extend({
  projectTitle: z.string().optional(),
  // projectTitleLink: z.string().optional(),
  // subTitle: z.string().optional(),
  // startDateNew: z.string().optional(),
  // endDateNew: z.string().optional(),
  // description: z.string().optional(),
})

const courseSchema = baseContentSchema.extend({
  courseTitle: z.string().optional(),
  // courseTitleLink: z.string().optional(),
  // institution: z.string().optional(),
  // startDateNew: z.string().optional(),
  // endDateNew: z.string().optional(),
  // location: z.string().optional(),
  // description: z.string().optional(),
})

const awardSchema = baseContentSchema.extend({
  awardTitle: z.string().optional(),
  // awardTitleLink: z.string().optional(),
  // issuer: z.string().optional(),
  // date: z
  //   .object({
  //     day: z.string().optional(),
  //     year: z.string().optional(),
  //     month: z.string().optional(),
  //     hideDay: z.boolean().default(false).optional(),
  //     hideMonth: z.boolean().default(false).optional(),
  //   })
  //   .optional(),
  // description: z.string().optional(),
})

const organisationSchema = baseContentSchema.extend({
  organisation: z.string().optional(),
  // organisationLink: z.string().optional(),
  // position: z.string().optional(),
  // startDateNew: z.string().optional(),
  // endDateNew: z.string().optional(),
  // location: z.string().optional(),
  // description: z.string().optional(),
})

const publicationSchema = baseContentSchema.extend({
  title: z.string().optional(),
  // titleLink: z.string().optional(),
  // publisher: z.string().optional(),
  // date: z
  //   .object({
  //     day: z.string().optional(),
  //     year: z.string().optional(),
  //     month: z.string().optional(),
  //     hideDay: z.boolean().default(false),
  //     hideMonth: z.boolean().default(false),
  //   })
  //   .optional(),
  // description: z.string().optional(),
})

const referenceSchema = baseContentSchema.extend({
  name: z.string().optional(),
  // nameLink: z.string().optional(),
  // jobTitle: z.string().optional(),
  // organisation: z.string().optional(),
  // email: z.string().optional(),
  // phone: z.string().optional(),
})

const declarationSchema = baseContentSchema.extend({
  declarationText: z.string().optional(),
  // signatureImageId: z.string().optional(),
  // fullName: z.string().optional(),
  // place: z.string().optional(),
  // date: z.string().optional(),
})

export const contentSchema = z.object({
  summary: z.array(summarySchema).optional(),
  education: z.array(educationSchema).optional(),
  work: z.array(workSchema).optional(),
  skills: z.array(skillSchema).optional(),
  languages: z.array(languageSchema).optional(),
  certificates: z.array(certificateSchema).optional(),
  interests: z.array(interestSchema).optional(),
  projects: z.array(projectSchema).optional(),
  courses: z.array(courseSchema).optional(),
  awards: z.array(awardSchema).optional(),
  organisations: z.array(organisationSchema).optional(),
  publications: z.array(publicationSchema).optional(),
  references: z.array(referenceSchema).optional(),
  declaration: z.array(declarationSchema).optional(),
})

export type BaseContentSchema = z.infer<typeof baseContentSchema>
export type SummarySchema = z.infer<typeof summarySchema>
export type EducationSchema = z.infer<typeof educationSchema>
export type WorkSchema = z.infer<typeof workSchema>
export type SkillSchema = z.infer<typeof skillSchema>
export type LanguageSchema = z.infer<typeof languageSchema>
export type CertificateSchema = z.infer<typeof certificateSchema>
export type InterestSchema = z.infer<typeof interestSchema>
export type ProjectSchema = z.infer<typeof projectSchema>
export type CourseSchema = z.infer<typeof courseSchema>
export type AwardSchema = z.infer<typeof awardSchema>
export type OrganisationSchema = z.infer<typeof organisationSchema>
export type PublicationSchema = z.infer<typeof publicationSchema>
export type ReferenceSchema = z.infer<typeof referenceSchema>
export type DeclarationSchema = z.infer<typeof declarationSchema>

export type ContentSchema = z.infer<typeof contentSchema>
