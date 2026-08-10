import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { createContext, useContext, useState } from 'react'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import { initDB } from 'react-indexed-db-hook'

import { defaultValues } from '#/constants/form-default-value'
import { DBConfig } from '#/constants/indexDB-config'
import type { Base } from '#/constants/personal-details-field'
import { personalDetailsField } from '#/constants/personal-details-field'
import { socialProfileField } from '#/constants/social-profiles-field'

import type { ServerSession } from '#/lib/auth'

import { contentItems } from '#/constants/content-items'
import type { ResumeFormValues } from '#/lib/validators/resume-schema'
import { resumeSchema } from '#/lib/validators/resume-schema'

type ResumeFormContextType = {
  selectedField: Base[]
  addSelectedField: (field: Base) => void
  filteredPersonalField: Base[]
  removeSelectedField: (field: Base) => void

  searchSocialProfile: string
  filteredSocialProfileField: string[]
  onSearchSocialProfileChange: React.Dispatch<React.SetStateAction<string>>

  multiFieldOpts: ReturnType<
    typeof useFieldArray<ResumeFormValues, 'personalDetails.social'>
  >

  summaryOpts: ReturnType<
    typeof useFieldArray<ResumeFormValues, 'contents.summary'>
  >
  educationOpts: ReturnType<
    typeof useFieldArray<ResumeFormValues, 'contents.education'>
  >
  workOpts: ReturnType<typeof useFieldArray<ResumeFormValues, 'contents.work'>>
  skillsOpts: ReturnType<
    typeof useFieldArray<ResumeFormValues, 'contents.skills'>
  >
  languagesOpts: ReturnType<
    typeof useFieldArray<ResumeFormValues, 'contents.languages'>
  >
  certificatesOpts: ReturnType<
    typeof useFieldArray<ResumeFormValues, 'contents.certificates'>
  >
  interestsOpts: ReturnType<
    typeof useFieldArray<ResumeFormValues, 'contents.interests'>
  >
  projectsOpts: ReturnType<
    typeof useFieldArray<ResumeFormValues, 'contents.projects'>
  >
  coursesOpts: ReturnType<
    typeof useFieldArray<ResumeFormValues, 'contents.courses'>
  >
  awardsOpts: ReturnType<
    typeof useFieldArray<ResumeFormValues, 'contents.awards'>
  >
  organisationsOpts: ReturnType<
    typeof useFieldArray<ResumeFormValues, 'contents.organisations'>
  >
  publicationsOpts: ReturnType<
    typeof useFieldArray<ResumeFormValues, 'contents.publications'>
  >
  referencesOpts: ReturnType<
    typeof useFieldArray<ResumeFormValues, 'contents.references'>
  >
  declarationOpts: ReturnType<
    typeof useFieldArray<ResumeFormValues, 'contents.declaration'>
  >

  filteredContentItems: typeof contentItems
}

const ResumeFormContext = createContext<ResumeFormContextType | undefined>(
  undefined,
)

type ResumeFormProviderProps = {
  children: React.ReactNode
  user: ServerSession['user']
}

initDB(DBConfig)
export function ResumeFormContextProvider(props: ResumeFormProviderProps) {
  const { children } = props

  const [searchSocialProfile, setSearchSocialProfile] = useState('')
  const [selectedField, setSelectedField] = useState<Base[]>([])

  // const filteredSocialProfileField = searchSocialProfile
  //   ? socialProfileField.filter((field) =>
  //       field.toLowerCase().includes(searchSocialProfile.toLowerCase()),
  //     )
  //   : socialProfileField

  const filteredPersonalField =
    selectedField.length === 0
      ? (personalDetailsField as Base[])
      : (personalDetailsField.filter(
          (field) =>
            !selectedField.some((selected) => selected.field === field.field),
        ) as Base[])

  function addSelectedField(field: Base) {
    setSelectedField((prev) => [...prev, field])
  }

  function removeSelectedField(field: Base) {
    setSelectedField((prev) =>
      prev.filter((selected) => selected.field !== field.field),
    )
  }

  const form = useForm<ResumeFormValues>({
    resolver: zodResolver(resumeSchema),
    defaultValues: {
      ...defaultValues,
      // userId: user.id,
    },
    mode: 'onChange',
  })

  const multiFieldOpts = useFieldArray({
    control: form.control,
    name: 'personalDetails.social', // name of the field array
  })

  const filteredSocialProfileField =
    multiFieldOpts.fields.length >= 0
      ? socialProfileField.filter((field) => {
          // Check if the field is already in the fields array
          const isFieldInArray = multiFieldOpts.fields.some(
            (f) => f.display?.toLowerCase() === field.toLowerCase(),
          )

          // Check if the field matches the search query
          const matchesSearchQuery = searchSocialProfile
            ? field.toLowerCase().includes(searchSocialProfile.toLowerCase())
            : true

          // Include the field if it's not in the array and matches the search query
          return !isFieldInArray && matchesSearchQuery
        })
      : socialProfileField

  // const filteredSocialProfileField = searchSocialProfile
  //   ? socialProfileField.filter((field) =>
  //       field.toLowerCase().includes(searchSocialProfile.toLowerCase()),
  //     )
  //   : fields
  //       .filter((field) => field.display !== undefined)
  //       .map((field) => field.display ?? socialProfileField)

  const filteredContentItems = contentItems.filter((item) => {
    // Check if the item.slug is already in the form's contents object
    const isItemInForm = Object.keys(form.getValues('contents')).some(
      (key) => key === item.slug,
    )

    // Include the item if it's not already in the form's contents object
    return isItemInForm
  })

  const summaryOpts = useFieldArray({
    control: form.control,
    name: 'contents.summary', // name of the field array
  })

  const educationOpts = useFieldArray({
    control: form.control,
    name: 'contents.education', // name of the field array
  })

  const workOpts = useFieldArray({
    control: form.control,
    name: 'contents.work', // name of the field array
  })

  const skillsOpts = useFieldArray({
    control: form.control,
    name: 'contents.skills', // name of the field array
  })

  const languagesOpts = useFieldArray({
    control: form.control,
    name: 'contents.languages', // name of the field array
  })

  const certificatesOpts = useFieldArray({
    control: form.control,
    name: 'contents.certificates', // name of the field array
  })

  const interestsOpts = useFieldArray({
    control: form.control,
    name: 'contents.interests', // name of the field array
  })

  const projectsOpts = useFieldArray({
    control: form.control,
    name: 'contents.projects', // name of the field array
  })

  const coursesOpts = useFieldArray({
    control: form.control,
    name: 'contents.courses', // name of the field array
  })

  const awardsOpts = useFieldArray({
    control: form.control,
    name: 'contents.awards', // name of the field array
  })

  const organisationsOpts = useFieldArray({
    control: form.control,
    name: 'contents.organisations', // name of the field array
  })

  const publicationsOpts = useFieldArray({
    control: form.control,
    name: 'contents.publications', // name of the field array
  })

  const referencesOpts = useFieldArray({
    control: form.control,
    name: 'contents.references', // name of the field array
  })

  const declarationOpts = useFieldArray({
    control: form.control,
    name: 'contents.declaration', // name of the field array
  })

  const values: ResumeFormContextType = {
    selectedField,
    filteredPersonalField,
    addSelectedField,
    removeSelectedField,

    searchSocialProfile,
    filteredSocialProfileField,
    onSearchSocialProfileChange: setSearchSocialProfile,

    multiFieldOpts,

    filteredContentItems,

    summaryOpts,
    educationOpts,
    workOpts,
    skillsOpts,
    languagesOpts,
    certificatesOpts,
    interestsOpts,
    projectsOpts,
    coursesOpts,
    awardsOpts,
    organisationsOpts,
    publicationsOpts,
    referencesOpts,
    declarationOpts,
  }

  return (
    <ResumeFormContext.Provider value={values}>
      <FormProvider {...form}>
        {children}
        <DevTool control={form.control} /> {/* set up the dev tool */}
      </FormProvider>
    </ResumeFormContext.Provider>
  )
}

export function useResumeFormContext() {
  const context = useContext(ResumeFormContext)
  if (!context) {
    throw new Error(
      'useResumeFormContext must be used within a ResumeFormContextProvider',
    )
  }
  return context
}
