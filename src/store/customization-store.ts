import type { ExtractState } from 'zustand'
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

const initialData = {
  customization: {
    font: { selected: 'serif', fontFamily: 'Nunito' },
    colors: {
      mode: 'basic',
      basic: {
        multi: {
          textColor: '#313D5D',
          accentColor: '#F45B69',
          backgroundColor: '#ffffff',
        },
        single: '#339b34',
        selected: 'single',
        multiCustom: {
          textColor: '#090909',
          accentColor: '#18180e',
          backgroundColor: '#fff9f9',
        },
        singleCustom: '#339b34',
      },
      border: {
        top: true,
        left: true,
        right: true,
        width: 'm',
        bottom: true,
        single: '#339b34',
        selected: 'single',
        singleCustom: '#c82525',
      },
      advanced: {
        multi: {
          light: {
            textColor: '#000000',
            accentColor: '#000000',
            backgroundColor: '#ffffff',
          },
          strong: {
            textColor: '#ffffff',
            accentColor: '#ffffff',
            backgroundColor: '#000000',
          },
        },
        single: '#339b34',
        selected: 'multi',
        multiCustom: {
          light: {
            textColor: '#000000',
            accentColor: '#000000',
            backgroundColor: '#ffffff',
          },
          strong: {
            textColor: '#ffffff',
            accentColor: '#ffffff',
            backgroundColor: '#000000',
          },
        },
        singleCustom: '#000000',
      },
    },
    expert: {
      footer: {
        name: false,
        email: false,
        pages: false,
        custom: { col1: '', col2: '', col3: '', enabled: false },
      },
      subTitlePlacement: 'trySameLine',
      showProfileHeading: true,
      mergeProfileWithHeader: false,
    },
    header: {
      photo: { show: true, size: 'm', grayscale: false },
      alignText: 'start',
      iconFrame: 'none',
      detailsGrid: false,
      jobTitleStyle: 'normal',
      accentuateName: true,
      iconFrameStyle: 'filled',
      jobTitlePosition: 'sameLine',
      detailsArrangement: 'wrap',
      detailsDisplayCenter: 'icon',
      detailsDisplayLeftRight: 'icon',
      photoPositionHeaderOnTop: 'right',
      photoPositionHeaderInColumn: 'below',
    },
    layout: {
      colsFromDetails: { top: 'mix', left: 'mix', right: 'mix' },
      detailsPosition: 'top', // left/right/top
      colWidthsFromDetails: {
        top: { leftWidth: 79, rightWidth: 21 },
        left: { leftWidth: 40, rightWidth: 60 },
        right: { leftWidth: 60, rightWidth: 40 },
      },
    },
    heading: { icons: 'none', style: 'line', capitalization: 'capitalize' },
    spacing: {
      fontSize: '4',
      lineHeight: '4',
      spacingFactor: '2',
      marginVertical: '3',
      nameFontSizePt: 19.5,
      marginHorizontal: '3',
      jobTitleFontSizePt: 12.5,
      sectionHeadingFontSizePt: 12.5,
      titleAndSubtitleFontSizePt: 10.5,
    },
    advanced: {
      linkIcon: 'boxArrow',
      listStyle: 'bullet',
      makeLinksBlue: false,
      underlineLinks: false,
      groupPromotions: false,
      applyLinkStylingToHeaderLinks: { phone: false, displayEmail: false },
    },
    arabicFont: 'IBM Plex Sans Arabic',
    hebrewFont: 'Assistant',
    pageFormat: 'A4',
    entryLayout: {
      colMode: 'auto',
      colWidths: {
        dateLocationLeft: { left: 0, right: 0 },
        dateLocationRight: { left: 0, right: 0 },
        dateContentLocation: { left: 0, right: 0, middle: 0 },
      },
      dateStyle: 'normal',
      displayMode: 'dateLocationRight',
      locationStyle: 'normal',
      subtitleStyle: 'italic',
      bodyIndentation: '0',
      dateLocationOrder: 'dateLocation',
      fullWidthDateLocationPlacement: 'right',
      fullWidthDateLocationRightHeaderWidths: {
        dateLocation: 45,
        titleAndSubtitle: 55,
      },
      twoColumnFullWidthDateLocationPlacement: 'below',
      fullWidthDateLocationRightEntryHeaderMode: 'auto',
      fullWidthDateLocationBelowLocationPlacement: 'trySameLine',
      fullWidthDateLocationBelowSubtitlePlacement: 'trySameLine',
      fullWidthDateLocationRightLocationPlacement: 'trySameLine',
      fullWidthDateLocationRightSubtitlePlacement: 'trySameLine',
    },
    workDisplay: { jobTitleBeforeEmployer: true },
    japaneseFont: 'Noto Sans JP',
    sectionOrder: {
      mix: [
        { left: ['profile'], right: [] },
        'work',
        'skill',
        'language',
        'certificate',
        'interest',
        'project',
        'course',
        'award',
        'organisation',
        'publication',
        'reference',
        'declaration',
        'break',
      ],
      one: {
        sectionsSorted: [
          'profile',
          'work',
          'skill',
          'language',
          'certificate',
          'interest',
          'project',
          'course',
          'award',
          'organisation',
          'publication',
          'reference',
          'declaration',
        ],
      },
      two: {
        leftSectionsSorted: [
          'profile',
          'skill',
          'certificate',
          'project',
          'award',
          'publication',
          'declaration',
        ],
        rightSectionsSorted: [
          'work',
          'language',
          'interest',
          'course',
          'organisation',
          'reference',
        ],
      },
    },
    skillDisplay: {
      grid: { columns: 'two' },
      text: 'bullet',
      level: { selected: 'text' },
      selected: 'level',
      addRowSpacing: false,
      subinfoSeparator: 'dash',
      showBulletForNewLine: false,
    },
    fullDateFormat: 'DD/MM/YYYY',
    interestDisplay: {
      grid: { columns: 'three' },
      text: 'bullet',
      selected: 'grid',
      addRowSpacing: true,
      subinfoSeparator: 'dash',
      showBulletForNewLine: false,
    },
    languageDisplay: {
      grid: { columns: 'three' },
      text: 'bullet',
      level: { selected: 'text' },
      selected: 'grid',
      addRowSpacing: true,
      subinfoSeparator: 'dash',
      showBulletForNewLine: false,
    },
    monthYearFormat: 'MM/YYYY',
    applyAccentColor: {
      name: true,
      dates: false,
      icons: false,
      headings: true,
      jobTitle: true,
      linkIcons: false,
      headingLine: true,
      entrySubtitle: false,
      dotsBarsBubbles: false,
    },
    creativeNameFont: 'bodyFont',
    educationDisplay: { degreeBeforeSchool: true },
    certificateDisplay: {
      grid: { columns: 'three' },
      text: 'bullet',
      selected: 'grid',
      addRowSpacing: true,
      subinfoSeparator: 'dash',
      showBulletForNewLine: false,
    },
    declarationDisplay: {
      line: 'solid',
      position: 'right',
      showHeading: true,
    },
    lastUsedTemplateId: '',
    customSkillSections: {},
    unsplashImageHistory: [
      {
        width: 1747,
        height: 2782,
        photoId: 'P6_L4e0I9DI',
        urlFull:
          'https://images.unsplash.com/photo-1493881633443-6cd495b95401?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEwMTg4M30',
        urlThumb:
          'https://images.unsplash.com/photo-1493881633443-6cd495b95401?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEwMTg4M30',
        brightness: 116,
        urlRegular:
          'https://images.unsplash.com/photo-1493881633443-6cd495b95401?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMTg4M30',
        userHtmlLink: 'https://unsplash.com/@nathananderson',
        dominantColors: [
          '#d1d8e0',
          '#475d6f',
          '#95aec7',
          '#8c949a',
          '#6986a1',
          '#2f2e2b',
          '#7896b0',
          '#a2bcd3',
          '#162b3e',
          '#1b3649',
        ],
        photographerId: 'UT41ainZxFI',
        photographerFullName: 'Nathan Anderson',
        photographerLastName: 'Anderson',
        photographerFirstName: 'Nathan',
      },
    ],
    hasManuallyResortedSectionOrder: true,
  },
}

type InitialData = typeof initialData

type Actions = {
  updateColors: (
    newColors: Partial<InitialData['customization']['colors']>,
  ) => void

  updateAccentColors: (
    newAccentColors: Partial<InitialData['customization']['applyAccentColor']>,
  ) => void

  // font: { selected: 'serif', fontFamily: 'Nunito' },
  updateBodyFont: (
    newFontFamily: Partial<InitialData['customization']['font']>,
  ) => void

  // creativeNameFont: 'bodyFont',
  updateCreativeNameFont: (
    newFontFamily: Partial<InitialData['customization']['creativeNameFont']>,
  ) => void

  // pageFormat: 'A4',
  updatePageFormat: (
    newPageFormat: InitialData['customization']['pageFormat'],
  ) => void

  // fullDateFormat: 'DD/MM/YYYY',
  // monthYearFormat: 'MM/YYYY',
  updateFullDateFormat: (
    newFullDateFormat: InitialData['customization']['fullDateFormat'],
  ) => void

  updateMonthYearFormat: (
    newMonthYearFormat: InitialData['customization']['monthYearFormat'],
  ) => void

  /*
    layout: {
      colsFromDetails: { top: 'mix', left: 'mix', right: 'mix' },
      detailsPosition: 'top', // left/right/top
      colWidthsFromDetails: {
        top: { leftWidth: 79, rightWidth: 21 },
        left: { leftWidth: 40, rightWidth: 60 },
        right: { leftWidth: 60, rightWidth: 40 },
      },
    },
  */
  updateLayout: (
    newLayout: Partial<InitialData['customization']['layout']>,
  ) => void

  // this one also toggled
  // hasManuallyResortedSectionOrder: true,
  updateSectionOrder: (
    newSectionOrder: InitialData['customization']['sectionOrder'],
  ) => void

  updateSectionOrderOpts: (
    position: 'one' | 'two' | 'mix',
    newSectionOrder: InitialData['customization']['sectionOrder'],
    hasManuallyResortedSectionOrder: boolean,
  ) => void

  updateSpacing: (newSpacing: InitialData['customization']['spacing']) => void

  updateEntryLayout: (
    newEntryLayout: InitialData['customization']['entryLayout'],
  ) => void

  updateAdvanced: (
    newAdvanced: InitialData['customization']['advanced'],
  ) => void

  updateExpert: (newExpert: InitialData['customization']['expert']) => void

  updateHeading: (newHeading: InitialData['customization']['heading']) => void

  updateHeader: (newHeader: InitialData['customization']['header']) => void

  updateSkillDisplay: (
    newSkillDisplay: InitialData['customization']['skillDisplay'],
  ) => void

  updateCertificateDisplay: (
    newCertificateDisplay: InitialData['customization']['certificateDisplay'],
  ) => void

  updateInterestDisplay: (
    newInterestDisplay: InitialData['customization']['interestDisplay'],
  ) => void

  updateLanguageDisplay: (
    newLanguageDisplay: InitialData['customization']['languageDisplay'],
  ) => void

  updateDeclaration: (
    newDeclaration: InitialData['customization']['declarationDisplay'],
  ) => void

  updateWorkDisplay: (
    newWorkDisplay: InitialData['customization']['workDisplay'],
  ) => void

  updateEducationDisplay: (
    newEducationDisplay: InitialData['customization']['educationDisplay'],
  ) => void
}

type State = InitialData & Actions

// type devtoolType = typeof devtools
// type persistType = typeof persist
// type immerType = typeof immer

// type StoreType = UseBoundStore<StoreApi<State>>

// Create store using the curried form of `create`
export const useCustomizationStore = create<State>()(
  devtools(
    persist(
      immer((set) => ({
        ...initialData,
        updateColors: (newColors) =>
          set((state) => {
            state.customization.colors = {
              ...state.customization.colors,
              ...newColors,
            }
          }),

        updateAccentColors: (prop) =>
          set((state) => {
            // we have to do the toggle the booleans
            state.customization.applyAccentColor = {
              ...state.customization.applyAccentColor,
              ...prop,
            }
          }),

        updateBodyFont: (newFontFamily) =>
          set((state) => {
            state.customization.font = {
              ...state.customization.font,
              ...newFontFamily,
            }
          }),

        updateCreativeNameFont: (newFontFamily) =>
          set((state) => {
            state.customization.creativeNameFont = newFontFamily
          }),

        updatePageFormat: (newPageFormat) =>
          set((state) => {
            state.customization.pageFormat = newPageFormat
          }),

        updateFullDateFormat: (newFullDateFormat) =>
          set((state) => {
            state.customization.fullDateFormat = newFullDateFormat
          }),

        updateMonthYearFormat: (newMonthYearFormat) =>
          set((state) => {
            state.customization.monthYearFormat = newMonthYearFormat
          }),

        updateLayout: (newLayout) =>
          set((state) => {
            state.customization.layout = {
              ...state.customization.layout,
              ...newLayout,
            }
          }),

        // this will only change the array value nothing else
        updateSectionOrder: (newSectionOrder) =>
          set((state) => {
            state.customization.sectionOrder = {
              ...state.customization.sectionOrder,
              ...newSectionOrder,
            }
          }),

        updateSectionOrderOpts: (
          position,
          newSectionOrder,
          hasManuallyResortedSectionOrder,
        ) =>
          set((state) => {
            state.customization.sectionOrder = {
              ...state.customization.sectionOrder,
              [position]: newSectionOrder,
            }

            // this will only change when required to update
            // scenario: two or mix
            state.customization.hasManuallyResortedSectionOrder =
              !hasManuallyResortedSectionOrder
          }),

        updateSpacing: (newSpacing) =>
          set((state) => {
            state.customization.spacing = {
              ...state.customization.spacing,
              ...newSpacing,
            }
          }),

        updateEntryLayout: (newEntryLayout) =>
          set((state) => {
            state.customization.entryLayout = {
              ...state.customization.entryLayout,
              ...newEntryLayout,
            }
          }),

        updateAdvanced: (newAdvanced) =>
          set((state) => {
            state.customization.advanced = {
              ...state.customization.advanced,
              ...newAdvanced,
            }
          }),

        updateExpert: (newExpert) =>
          set((state) => {
            state.customization.expert = {
              ...state.customization.expert,
              ...newExpert,
            }
          }),

        updateHeading: (newHeading) =>
          set((state) => {
            state.customization.heading = {
              ...state.customization.heading,
              ...newHeading,
            }
          }),

        updateHeader: (newHeader) =>
          set((state) => {
            state.customization.header = {
              ...state.customization.header,
              ...newHeader,
            }
          }),

        updateSkillDisplay: (newSkillDisplay) =>
          set((state) => {
            state.customization.skillDisplay = {
              ...state.customization.skillDisplay,
              ...newSkillDisplay,
            }
          }),

        updateCertificateDisplay: (newCertificateDisplay) =>
          set((state) => {
            state.customization.certificateDisplay = {
              ...state.customization.certificateDisplay,
              ...newCertificateDisplay,
            }
          }),

        updateInterestDisplay: (newInterestDisplay) =>
          set((state) => {
            state.customization.interestDisplay = {
              ...state.customization.interestDisplay,
              ...newInterestDisplay,
            }
          }),

        updateLanguageDisplay: (newLanguageDisplay) =>
          set((state) => {
            state.customization.languageDisplay = {
              ...state.customization.languageDisplay,
              ...newLanguageDisplay,
            }
          }),

        updateDeclaration: (newDeclaration) =>
          set((state) => {
            state.customization.declarationDisplay = {
              ...state.customization.declarationDisplay,
              ...newDeclaration,
            }
          }),

        updateWorkDisplay: (newWorkDisplay) =>
          set((state) => {
            state.customization.workDisplay = {
              ...state.customization.workDisplay,
              ...newWorkDisplay,
            }
          }),

        updateEducationDisplay: (newEducationDisplay) =>
          set((state) => {
            state.customization.educationDisplay = {
              ...state.customization.educationDisplay,
              ...newEducationDisplay,
            }
          }),
      })),
      {
        name: 'customization',
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        onRehydrateStorage: (state) => {
          console.log('hydration starts', state.customization.colors.mode)
          // optional
          return (states, error) => {
            if (error) {
              console.log('an error happened during hydration', error)
            } else {
              console.log(
                'hydration finished',
                states?.customization.colors.mode,
              )
            }
          }
        },
      },
    ),
  ),
)

/*
 * hydrate persisted store after on mount
  useEffect(() => {
    useCustomizationStore.persist.rehydrate();
  }, [])
*/

declare global {
  interface Window {
    store: ReturnType<typeof useCustomizationStore>
  }
}

if (typeof window !== 'undefined') {
  window.store = useCustomizationStore
}

// Extract the type of the whole store state
export type CustomizationState = ExtractState<typeof useCustomizationStore>
