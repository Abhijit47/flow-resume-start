import type { ContentSchema } from '#/lib/validators/content-schema'
import type { PersonalDetailsFormData } from '#/lib/validators/personal-info-schema'
import type { ResumeFormValues } from '#/lib/validators/resume-schema'
import type { DefaultValues } from 'react-hook-form'

type AsyncDefaultValues<TFieldValues> = (
  payload?: unknown,
) => Promise<TFieldValues>

type FormDefaultValues =
  DefaultValues<ResumeFormValues> | AsyncDefaultValues<ResumeFormValues>

const personalDetailsDefaultValues: PersonalDetailsFormData = {
  fullName: '',
  jobTitle: '',
  displayEmail: '',
  phone: '',
  address: '',
  // social: [{ link: '', display: '' }], // Initialize with one empty social profile
  social: undefined,

  passport: '',
  nationality: '',
  visa: '',
  birthdayStr: '',
  availability: '',
  gender: '',
  disability: '',
  workMode: '',
  relocation: '',
  expectedSalary: '',
  secondPhone: '',
  drivingLicense: '',
  securityClearance: '',
  maritalStatus: '',
  military: '',
  smoking: '',
  height: '',
  weight: '',
}

const contentDefaultValues: ContentSchema = {
  summary: undefined,
  education: undefined,
  work: undefined,
  skills: undefined,
  languages: undefined,
  certificates: undefined,
  interests: undefined,
  projects: undefined,
  courses: undefined,
  awards: undefined,
  organisations: undefined,
  publications: undefined,
  references: undefined,
  declaration: undefined,
}

export const defaultValues: FormDefaultValues = {
  // id: crypto.randomUUID(),
  // userId: '',
  // createdAt: new Date(),
  // updatedAt: new Date(),
  personalDetails: personalDetailsDefaultValues,
  contents: contentDefaultValues,
}
