import { createStore } from '@tanstack/store'

export const resumeStore = createStore({
  isEnabledFirstForm: false,
  // initial values
  resume: {
    id: '4d269098-33cd-4159-a428-2669d6129188',
    userId: '62c2fb6f-b445-4049-81c0-4815d94253e7',
    mongoId: '',
    title: 'Resume 1',
    order: 0,
    feedbackToken: '85u5e94d29',
    webToken: 'lwl4568gmgs3',
    uuid: '2e118cb5-306a-498d-80bc-9d68fac360a1',
    feedbackEnabled: false,
    webResumeLive: false,
    webResumeDownloadBtn: false,
    webResumeSearchIndex: false,
    webResumeCached: false,
    personalDetails: {
      age: '',
      visa: '',
      phone: '',
      photo: {},
      gender: '',
      height: '',
      social: {},
      weight: '',
      address: '',
      smoking: '',
      website: '',
      birthday: {
        day: '',
        year: '',
        month: '',
      },
      fullName: '',
      jobTitle: '',
      military: '',
      passport: '',
      workMode: '',
      portfolio: '',
      usAddress: false,
      disability: '',
      relocation: '',
      birthdayStr: '',
      nationality: '',
      secondPhone: '',
      websiteLink: '',
      availability: '',
      detailsOrder: ['displayEmail', 'phone', 'address'],
      displayEmail: '',
      maritalStatus: '',
      portfolioLink: '',
      drivingLicense: '',
      expectedSalary: '',
      showPlaceholder: false,
      securityClearance: '',
    },
    downloads: [],
    usingBusinessTemplateId: '',
    schemaVersion: '21',
    lastChangeAt: '2026-07-26T04:56:10.567Z',
    createdAt: '2026-07-26T04:56:10.003Z',
    updatedAt: '2026-07-26T04:56:10.567Z',
    lng: 'en',
    tags: [],
  },
})

export const updateIsEnabledFirstForm = (isEnabled: boolean) => {
  resumeStore.setState((state) => {
    return {
      ...state,
      isEnabledFirstForm: isEnabled,
    }
  })
}

export const updatePersonalDetailsState = (personalDetails: any) => {
  // const currentState = store.get()

  resumeStore.setState((state) => {
    return {
      ...state,
      resume: {
        ...state.resume,
        personalDetails: {
          ...state.resume.personalDetails,
          ...personalDetails,
        },
      },
    }
  })

  // store.setState((state: { dogs: number; cats: number }) => {
  //   return {
  //     ...state,
  //     [animal]: state[animal] + 1,
  //   }
  // })
}
