import type { ResumeFormValues } from '#/lib/validators/resume-schema'
import { createStore } from '@tanstack/store'

type StoreValues = {
  isEnabledFirstForm: boolean
  resume: ResumeFormValues
}

type StoreActions = {
  updateFullName: (fullName: string) => void
  log: () => void
}

export const resumeStore = createStore<StoreValues, StoreActions>(
  {
    isEnabledFirstForm: false,
    // initial values
    resume: {
      // id: '4d269098-33cd-4159-a428-2669d6129188',
      // userId: '62c2fb6f-b445-4049-81c0-4815d94253e7',
      // mongoId: '',
      // title: 'Resume 1',
      // order: 0,
      // feedbackToken: '85u5e94d29',
      // webToken: 'lwl4568gmgs3',
      // uuid: '2e118cb5-306a-498d-80bc-9d68fac360a1',
      // feedbackEnabled: false,
      // webResumeLive: false,
      // webResumeDownloadBtn: false,
      // webResumeSearchIndex: false,
      // webResumeCached: false,

      /*
        contents: {
        summary?: {
            isHidden?: boolean | undefined;
            showPlaceholder?: boolean | undefined;
            text?: string | undefined;
        }[] | undefined;
        education?: {
            isHidden?: boolean | undefined;
            showPlaceholder?: boolean | undefined;
            degree?: string | undefined;
        }[] | undefined;
        work?: {
            isHidden?: boolean | undefined;
            showPlaceholder?: boolean | undefined;
            jobTitle?: string | undefined;
        }[] | undefined;
        skills?: {
            isHidden?: boolean | undefined;
            showPlaceholder?: boolean | undefined;
            skill?: string | undefined;
        }[] | undefined;
        languages?: {
            isHidden?: boolean | undefined;
            showPlaceholder?: boolean | undefined;
            language?: string | undefined;
        }[] | undefined;
        certificates?: {
            isHidden?: boolean | undefined;
            showPlaceholder?: boolean | undefined;
            certificate?: string | undefined;
        }[] | undefined;
        interests?: {
            isHidden?: boolean | undefined;
            showPlaceholder?: boolean | undefined;
            interest?: string | undefined;
        }[] | undefined;
        projects?: {
            isHidden?: boolean | undefined;
            showPlaceholder?: boolean | undefined;
            projectTitle?: string | undefined;
        }[] | undefined;
        courses?: {
            isHidden?: boolean | undefined;
            showPlaceholder?: boolean | undefined;
            courseTitle?: string | undefined;
        }[] | undefined;
        awards?: {
            isHidden?: boolean | undefined;
            showPlaceholder?: boolean | undefined;
            awardTitle?: string | undefined;
        }[] | undefined;
        organisations?: {
            isHidden?: boolean | undefined;
            showPlaceholder?: boolean | undefined;
            organisation?: string | undefined;
        }[] | undefined;
        publications?: {
            isHidden?: boolean | undefined;
            showPlaceholder?: boolean | undefined;
            title?: string | undefined;
        }[] | undefined;
        references?: {
            isHidden?: boolean | undefined;
            showPlaceholder?: boolean | undefined;
            name?: string | undefined;
        }[] | undefined;
        declaration?: {
            isHidden?: boolean | undefined;
            showPlaceholder?: boolean | undefined;
            declarationText?: string | undefined;
        }[] | undefined;
    };
    */

      personalDetails: {
        fullName: '',
        jobTitle: '',
        displayEmail: '',
        phone: '',
        address: '',
        avatar: '',
        social: [],
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
      contents: {
        summary: [],
        education: [],
        work: [],
        skills: [],
        languages: [],
        certificates: [],
        interests: [],
        projects: [],
        courses: [],
        awards: [],
        organisations: [],
        publications: [],
        references: [],
        declaration: [],
      },
      // downloads: [],
      // usingBusinessTemplateId: '',
      // schemaVersion: '21',
      // lastChangeAt: '2026-07-26T04:56:10.567Z',
      // createdAt: '2026-07-26T04:56:10.003Z',
      // updatedAt: '2026-07-26T04:56:10.567Z',
      // lng: 'en',
      // tags: [],
    },
  },
  ({ setState, get }) => ({
    updateFullName: (fullName) =>
      setState((state) => ({
        ...state,
        resume: {
          ...state.resume,
          personalDetails: {
            ...state.resume.personalDetails,
            fullName: fullName,
          },
        },
      })),
    log: () => console.log(get()),
  }),
)

export const updateIsEnabledFirstForm = (isEnabled: boolean) => {
  resumeStore.setState((state) => {
    return {
      ...state,
      isEnabledFirstForm: isEnabled,
    }
  })
}

export const updatePersonalDetailsState = (
  personalDetails: ResumeFormValues['personalDetails'],
) => {
  resumeStore.setState((state) => {
    return {
      ...state,
      resume: {
        ...state.resume,
        personalDetails: personalDetails,
      },
    }
  })
}

export const updateContents = (content: ResumeFormValues['contents']) => {
  resumeStore.setState((state) => {
    return {
      ...state,
      resume: {
        ...state.resume,
        contents: content,
      },
    }
  })
}
// usage
// const isEnabledFirstForm = resumeStore.getState().isEnabledFirstForm
// const personalDetails = resumeStore.getState().resume.personalDetails
// const contents = resumeStore.getState().resume.contents
// updateIsEnabledFirstForm(true)
// updatePersonalDetailsState({ fullName: 'John Doe' })
// updateContents({ summary: [{ text: 'New summary' }] })
