import type { ContentType } from '#/types/contents'
import type { EducationEntry } from '#/types/contents/education'
import type { ExtractState } from 'zustand'
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

const initialContents = {
  work: {
    entries: [
      {
        id: '365215ad-c58f-43a4-ba0d-8ce7a69c59c9',
        employer: 'Nisi in neque qui ut',
        isHidden: false,
        jobTitle: 'Enim nesciunt minus',
        location: 'Eum consequatur dolo',
        createdAt: '2026-08-31T07:41:24.342Z',
        updatedAt: '2026-08-31T07:41:24.342Z',
        endDateNew: '02/2021',
        description: '<p>Nam deserunt eaque n.</p>',
        employerLink: '',
        startDateNew: '05/2017',
        showPlaceholder: false,
      },
    ],
    iconKey: 'briefcase',
    displayName: 'Professional Experience',
    sectionType: 'work',
  },
  award: {
    entries: [
      {
        id: '3839c710-cebf-4f94-b14c-cc46874013c8',
        date: {
          day: '2',
          year: '2026',
          month: '2',
          hideDay: false,
          hideMonth: false,
        },
        issuer: 'Et placeat veniam',
        isHidden: false,
        createdAt: '2026-08-31T07:53:50.809Z',
        updatedAt: '2026-08-31T07:53:50.809Z',
        awardTitle: 'Aut deleniti provide',
        description: '<p>Adipisicing praesent.</p>',
        awardTitleLink: '',
        showPlaceholder: false,
      },
    ],
    iconKey: 'award',
    displayName: 'Awards',
    sectionType: 'award',
  },
  skill: {
    entries: [
      {
        id: '097170d1-651b-46da-9bba-a70790e97d83',
        level: '2',
        skill: 'Saepe hic magni nisi',
        infoHtml: '<p>Suscipit non amet, e.</p>',
        isHidden: false,
        createdAt: '2026-09-09T13:57:59.350Z',
        updatedAt: '2026-09-09T13:59:46.808Z',
        showPlaceholder: false,
      },
    ],
    iconKey: 'head-side-brain',
    displayName: 'Skills',
    sectionType: 'skill',
  },
  course: {
    entries: [
      {
        id: 'ff146a9f-0875-4772-9f16-b223cf7ea3da',
        isHidden: false,
        location: 'Nesciunt exercitati',
        createdAt: '2026-08-31T07:53:25.619Z',
        updatedAt: '2026-08-31T07:53:25.619Z',
        endDateNew: '2026',
        courseTitle: 'Ipsa veritatis faci',
        description: '<p>Suscipit harum ut es.</p>',
        institution: 'Omnis delectus susc',
        startDateNew: '',
        courseTitleLink: '',
        showPlaceholder: false,
      },
    ],
    iconKey: 'books',
    displayName: 'Courses',
    sectionType: 'course',
  },
  profile: {
    entries: [
      {
        id: 'd38dd084-449c-43e6-b503-388b50c7f6dc',
        text: '<p>Illum, nulla vero vo.Illum, nulla vero vo.Illum, nulla vero vo.Illum, nulla vero vo.Illum, nulla vero vo.Illum, nulla vero vo.Illum, nulla vero vo.Illum, nulla vero vo.Illum, nulla vero vo.Illum, nulla vero vo.Illum, nulla vero vo.Illum, nulla vero vo.Illum, nulla vero vo.Illum, nulla vero vo.Illum, nulla vero vo.Illum, nulla vero vo.Illum, nulla vero vo.</p>',
        isHidden: false,
        createdAt: '2026-08-31T07:41:01.119Z',
        updatedAt: '2026-08-31T07:41:01.119Z',
        showPlaceholder: false,
      },
    ],
    iconKey: 'certificate',
    displayName: 'Summary',
    sectionType: 'profile',
  },
  project: {
    entries: [
      {
        id: '6381bb09-7c8a-4089-b122-6da8b6b59987',
        isHidden: false,
        subTitle: 'Totam fuga Consequa',
        createdAt: '2026-08-31T07:52:49.116Z',
        updatedAt: '2026-08-31T07:52:49.116Z',
        endDateNew: '02/2026',
        description: '<p>Nihil ad voluptatem.</p>',
        projectTitle: 'Recusandae Illo dol',
        startDateNew: '02/2022',
        showPlaceholder: false,
        projectTitleLink: '',
      },
      {
        id: 'c9c1855d-df6f-4203-9101-7e2ccd0a1374',
        isHidden: false,
        subTitle: 'In ea anim veniam m',
        createdAt: '2026-08-31T07:53:06.878Z',
        updatedAt: '2026-08-31T07:53:06.878Z',
        endDateNew: '02/2026',
        description: '<p>Doloremque ut aspern.</p>',
        projectTitle: 'Cupiditate est nihil',
        startDateNew: '02/2018',
        showPlaceholder: false,
        projectTitleLink: '',
      },
    ],
    iconKey: 'folder-open',
    displayName: 'Projects',
    sectionType: 'project',
    disableAutoSort: false,
  },
  interest: {
    entries: [
      {
        id: '69e46eac-bc83-4a09-aa0b-fc86de8f03b8',
        infoHtml: '<p>Qui non tempor asper.</p>',
        interest: 'Odit voluptatem id s',
        isHidden: false,
        createdAt: '2026-08-31T07:52:03.461Z',
        updatedAt: '2026-08-31T07:52:03.461Z',
        interestLink: '',
        showPlaceholder: false,
      },
    ],
    iconKey: 'guitar',
    displayName: 'Interests',
    sectionType: 'interest',
  },
  language: {
    entries: [
      {
        id: '668aac3a-177b-4b56-a9c9-462975e88682',
        level: '2',
        infoHtml: '<p>Assumenda qui incidu.</p>',
        isHidden: false,
        language: 'Nisi dolores veritat',
        createdAt: '2026-08-31T07:42:09.198Z',
        updatedAt: '2026-08-31T07:42:09.198Z',
        showPlaceholder: false,
      },
    ],
    iconKey: 'earth-americas',
    displayName: 'Languages',
    sectionType: 'language',
  },
  education: {
    entries: [
      {
        id: '399dd328-f2dd-4e6b-8a33-c8f9ed45427e',
        degree: 'Sunt excepteur dolo',
        school: 'Libero proident est',
        isHidden: false,
        location: 'Et sed laboriosam d',
        createdAt: '2026-09-09T08:09:38.745Z',
        updatedAt: '2026-09-09T08:09:38.745Z',
        endDateNew: 'Praesentium vitae er',
        schoolLink: 'https://Proident possimus',
        description: '<p>Consequuntur et dolo.</p>',
        startDateNew: '02/2023',
        showPlaceholder: false,
      },
    ],
    iconKey: 'graduation-cap',
    displayName: 'Education',
    sectionType: 'education',
  },
  reference: {
    entries: [
      {
        id: 'f73cc9b7-8194-4aff-b1eb-6a469c3bb7ac',
        name: 'Alika Franks',
        email: 'mazozeled@gmail.com',
        phone: '+91 9727554601',
        isHidden: false,
        jobTitle: 'Iste iste irure nost',
        nameLink: '',
        createdAt: '2026-08-31T07:55:45.554Z',
        updatedAt: '2026-08-31T07:55:45.554Z',
        organisation: 'Grant and Salas Inc',
        showPlaceholder: false,
      },
    ],
    iconKey: 'chart-network',
    displayName: 'References',
    sectionType: 'reference',
  },
  certificate: {
    entries: [
      {
        id: 'c342ac93-649a-443b-8f04-c7e2376722c3',
        infoHtml: '<p>Dolore similique aut.</p>',
        isHidden: false,
        createdAt: '2026-08-31T07:42:23.412Z',
        updatedAt: '2026-08-31T07:42:23.412Z',
        certificate: 'Adipisicing at tempo',
        certificateLink: 'https://Voluptate amet inci',
        showPlaceholder: false,
      },
    ],
    iconKey: 'certificate',
    displayName: 'Certificates',
    sectionType: 'certificate',
  },
  declaration: {
    entries: [
      {
        id: '803e0542-925c-4de4-86f7-75df498bd16c',
        date: '26-May-2017',
        place: 'Officia quae in aliq',
        fullName: 'Kelsey Skinner',
        isHidden: false,
        createdAt: '2026-08-31T07:56:05.575Z',
        updatedAt: '2026-08-31T07:56:05.575Z',
        declarationText: 'Eum dicta aut esse',
        showPlaceholder: false,
        signatureImageId: 'signature/Ia4pNKpn_xXg-SXQq5-Nj.svg',
      },
    ],
    iconKey: 'pen-clip',
    displayName: 'Declaration',
    sectionType: 'declaration',
  },
  publication: {
    entries: [
      {
        id: '06522581-db22-40bf-b45a-8af4da35e3df',
        date: {
          day: '2',
          year: '2027',
          month: '2',
          hideDay: false,
          hideMonth: false,
        },
        title: 'Obcaecati deserunt i',
        isHidden: false,
        createdAt: '2026-08-31T07:55:36.139Z',
        publisher: 'Et laboriosam ad it',
        titleLink: '',
        updatedAt: '2026-08-31T07:55:36.139Z',
        description: '<p>Deserunt deleniti te.</p>',
        showPlaceholder: false,
      },
    ],
    iconKey: 'newspaper',
    displayName: 'Publications',
    sectionType: 'publication',
  },
  // organisation: {
  //   entries: [
  //     {
  //       id: 'e9d606f4-0947-420a-b1c6-27821f1570d3',
  //       isHidden: false,
  //       location: 'Dolores incidunt id',
  //       position: 'Omnis in sint volupt',
  //       createdAt: '2026-08-31T07:55:10.291Z',
  //       updatedAt: '2026-08-31T07:55:10.291Z',
  //       endDateNew: '03/2026',
  //       description: '<p>Excepteur soluta nec.</p>',
  //       organisation: 'Barber and Hicks Co',
  //       startDateNew: '02/2026',
  //       showPlaceholder: false,
  //       organisationLink: '',
  //     },
  //   ],
  //   iconKey: 'house-user',
  //   displayName: 'Organizations',
  //   sectionType: 'organisation',
  // },
} satisfies ContentType

type Actions = {
  addEducationEntry: (newEntry: EducationEntry) => void
  updateEducationFields: (newValues: ContentType['education']) => void
}

type State = ContentType & Actions

export const useContentStore = create<State>()(
  devtools(
    persist(
      immer((set) => ({
        ...initialContents,

        addEducationEntry: (newEntry) => {
          set((state) => {
            state.education?.entries.push(newEntry)
          })
        },

        updateEducationFields: (newValues: ContentType['education']) => {
          set((state) => {
            state.education = newValues
          })
        },
      })),
      {
        name: 'content-storage', // unique name
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        onRehydrateStorage: (state) => {
          console.log(
            'hydration starts for content store',
            state.education?.entries.length,
          )
          // optional
          return (states, error) => {
            if (error) {
              console.log('an error happened during hydration', error)
            } else {
              console.log(
                'hydration finished for content store',
                states?.education?.entries.length,
              )
            }
          }
        },
      },
    ),
  ),
)

declare global {
  interface Window {
    store: ReturnType<typeof useContentStore>
  }
}

if (typeof window !== 'undefined') {
  window.store = useContentStore
}

// Extract the type of the whole store state
export type ContentState = ExtractState<typeof useContentStore>
