import { DBConfig } from '#/constants/indexDB-config'
import type { Base } from '#/constants/personal-details-field'
import { personalDetailsField } from '#/constants/personal-details-field'
import { socialProfileField } from '#/constants/social-profiles-field'
import type { PersonalDetailsFormData } from '#/lib/validators/personal-info-schema'
import { personalDetailsSchema } from '#/lib/validators/personal-info-schema'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { createContext, useContext, useEffect, useState } from 'react'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import { initDB } from 'react-indexed-db-hook'

type ResumeFormContextType = {
  selectedField: Base[]
  addSelectedField: (field: Base) => void
  filteredPersonalField: Base[]
  removeSelectedField: (field: Base) => void

  searchSocialProfile: string
  filteredSocialProfileField: string[]
  onSearchSocialProfileChange: React.Dispatch<React.SetStateAction<string>>

  multiFieldOpts: ReturnType<
    typeof useFieldArray<PersonalDetailsFormData, 'social'>
  >
}

const ResumeFormContext = createContext<ResumeFormContextType | undefined>(
  undefined,
)

type ResumeFormProviderProps = {
  children: React.ReactNode
}

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

  const form = useForm<PersonalDetailsFormData>({
    resolver: zodResolver(personalDetailsSchema),
    defaultValues: {
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
    },
    mode: 'onChange',
  })

  const multiFieldOpts = useFieldArray({
    control: form.control,
    name: 'social', // name of the field array
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

  const values: ResumeFormContextType = {
    selectedField,
    filteredPersonalField,
    addSelectedField,
    removeSelectedField,

    searchSocialProfile,
    filteredSocialProfileField,
    onSearchSocialProfileChange: setSearchSocialProfile,

    multiFieldOpts,
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      initDB(DBConfig)
    }
  }, [])

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
