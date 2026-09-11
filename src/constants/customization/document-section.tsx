export const documentLanguages = [
  { label: 'English (US)', value: 'english (us)', lng: 'en_US' },
  { label: 'English (UK)', value: 'english (uk)', lng: 'en' },
  { label: 'German', value: 'german', lng: 'de' },
  { label: 'Spanish', value: 'spanish', lng: 'es' },
  { label: 'Arabic', value: 'arabic', lng: 'ar' },
  { label: 'French', value: 'french', lng: 'fr' },
  { label: 'Portuguese', value: 'portuguese', lng: 'pt' },
  { label: 'Italian', value: 'italian', lng: 'it' },
  { label: 'Turkish', value: 'turkish', lng: 'tr' },
  { label: 'Japanese', value: 'japanese', lng: 'ja' },
  { label: 'Dutch', value: 'dutch', lng: 'nl' },
  { label: 'Polish', value: 'polish', lng: 'pl' },
  { label: 'Swedish', value: 'swedish', lng: 'sv' },
  { label: 'Danish', value: 'danish', lng: 'da' },
  { label: 'Norwegian', value: 'norwegian', lng: 'no' },
  { label: 'Finnish', value: 'finnish', lng: 'fi' },
  { label: 'Greek', value: 'greek', lng: 'el' },
  { label: 'Hungarian', value: 'hungarian', lng: 'hu' },
  { label: 'Czech', value: 'czech', lng: 'cs' },
  { label: 'Hebrew', value: 'hebrew', lng: 'he' },
  { label: 'Serbian', value: 'serbian', lng: 'sr' },
  { label: 'Bulgarian', value: 'bulgarian', lng: 'bg' },
  { label: 'Croatian', value: 'croatian', lng: 'hr' },
  { label: 'Russian', value: 'russian', lng: 'ru' },
  { label: 'Uzbek', value: 'uzbek', lng: 'uz' },
] as const

export type DocumentLanguageType = (typeof documentLanguages)[number]
export type DocumentLocale = (typeof documentLanguages)[number]['lng']

export type PageFormat = 'A4' | 'Letter' // US Letter;

export type DocumentLanguage =
  | 'English (US)'
  | 'English (UK)'
  | 'German'
  | 'Spanish'
  | 'Arabic'
  | 'French'
  | 'Portuguese'
  | 'Italian'
  | 'Turkish'
  | 'Japanese'
  | 'Dutch'
  | 'Polish'
  | 'Swedish'
  | 'Danish'
  | 'Norwegian'
  | 'Finnish'
  | 'Greek'
  | 'Hungarian'
  | 'Czech'
  | 'Hebrew'
  | 'Serbian'
  | 'Croatian'
  | 'Russian'
  | 'Uzbek'
