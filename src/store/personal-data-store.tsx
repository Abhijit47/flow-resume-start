import type { Social } from '#/types/social-types'
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

const initialPersonalDetails = {
  age: '',
  visa: '',
  phone: '+91 7495062331',
  photo: {
    xPct: 0.20606448340653133,
    yPct: 0.2098961395257693,
    shape: 'squareRounded',
    imageId: 'avatar/vQp6rzEc5NbMsrq3WAQy_.jpeg',
    widthPct: 0.5878894767783657,
    heightPct: 0.5878894767783657,
    originalWidth: 1024,
    originalHeight: 1024,
  },
  gender: 'Sint quidem magnam o',
  height: '',
  social: {
    orcid: {
      display: 'orcid',
    },
    gitbook: {
      display: 'gitbook',
    },
  },
  weight: '',
  address: 'Nisi architecto volu',
  smoking: '',
  website: 'https://www.qedajurilezaj.ws',
  birthday: {
    day: '',
    year: '',
    month: '',
  },
  fullName: 'Vanna Boyer',
  jobTitle: 'Ut fugiat adipisci',
  military: '',
  passport: '240',
  workMode: '',
  portfolio: '',
  usAddress: false,
  disability: '',
  relocation: 'Voluptatibus dolores',
  birthdayStr: '',
  nationality: 'Ea et enim qui dolor',
  secondPhone: '',
  websiteLink: '',
  availability: '',
  detailsOrder: ['displayEmail', 'phone', 'address'],
  displayEmail: 'lylyg@gmail.com',
  maritalStatus: '',
  portfolioLink: '',
  drivingLicense: '',
  expectedSalary: '',
  showPlaceholder: false,
  securityClearance: '',
} satisfies PersonalDetails

type PhotoShape =
  | 'round'
  | 'square'
  | 'squareRounded'
  | 'portrait'
  | 'portraitRounded'
  | (string & {})

type Avatar = {
  xPct: number
  yPct: number
  shape: PhotoShape
  imageId: string
  widthPct: number
  heightPct: number
  originalWidth: number
  originalHeight: number
}

type DetailsOrder =
  | 'displayEmail'
  | 'phone'
  | 'address'
  | 'passport'
  | 'nationality'
  | 'birthday'
  | 'visa'
  | 'availability'
  | 'gender'
  | 'disability'
  | 'workMode'
  | 'relocation'
  | 'expectedSalary'
  | 'secondPhone'
  | 'drivingLicense'
  | 'securityClearance'
  | 'maritalStatus'
  | 'military'
  | 'smoking'
  | 'height'
  | 'weight'
  | 'website'
  | 'gitbook'
  | 'orcid'
  | 'linkedIn'

type Gender = 'male' | 'female' | 'other' | (string & {})

type Birthday = {
  day?: string // ''
  year?: string // ''
  month?: string // ''
}

type PersonalDetails = {
  fullName: string
  jobTitle: string
  displayEmail: string
  phone: string
  address: string

  // maybe empty or maybe not, but we can use a default avatar if it's empty
  photo: Avatar

  // dynamic fields
  age?: string
  visa?: string
  gender?: Gender
  height?: string
  social?: Social
  weight?: string
  smoking?: string
  birthday?: Birthday
  usAddress?: boolean
  military?: string
  passport?: string
  workMode?: string
  portfolio?: string
  disability?: string
  relocation?: string
  birthdayStr?: string
  nationality?: string
  secondPhone?: string
  website?: string
  websiteLink?: string
  availability?: string
  detailsOrder?: DetailsOrder[]
  maritalStatus?: string
  portfolioLink?: string
  drivingLicense?: string
  expectedSalary?: string
  showPlaceholder?: boolean
  securityClearance?: string
}

type Actions = {
  updateFullName: (newFullName: PersonalDetails['fullName']) => void
  updateJobTitle: (newJobTitle: PersonalDetails['jobTitle']) => void
  updateDisplayEmail: (newDisplayEmail: PersonalDetails['displayEmail']) => void
  updatePhone: (newPhone: PersonalDetails['phone']) => void
  updateAddress: (newAddress: PersonalDetails['address']) => void
}

type State = PersonalDetails & Actions

export const usePersonalizationStore = create<State>()(
  devtools(
    persist(
      immer((set) => ({
        ...initialPersonalDetails,
        updateFullName: (newFullName) =>
          set((state) => {
            state.fullName = newFullName
          }),
        updateJobTitle: (newJobTitle) =>
          set((state) => {
            state.jobTitle = newJobTitle
          }),
        updateDisplayEmail: (newDisplayEmail) =>
          set((state) => {
            state.displayEmail = newDisplayEmail
          }),
        updatePhone: (newPhone) =>
          set((state) => {
            state.phone = newPhone
          }),
        updateAddress: (newAddress) =>
          set((state) => {
            state.address = newAddress
          }),
      })),
      {
        name: 'personalization-storage', // unique name
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        onRehydrateStorage: (state) => {
          console.log('hydration starts', state.fullName)
          // optional
          return (states, error) => {
            if (error) {
              console.log('an error happened during hydration', error)
            } else {
              console.log('hydration finished', states?.fullName)
            }
          }
        },
      },
    ),
  ),
)

/*
one by one new dynamic fields will be added to the personalization store, and the order of the fields will be maintained in the detailsOrder array. The detailsOrder array will be used to sortable items.
{
	"detailsOrder": [
		"phone",
		"displayEmail",
		"address",
		"passport",
		"gender",
		"nationality",
		"relocation",
		"website",
		"linkedIn",
		"gitbook",
		"orcid"
	]
}
*/
