import { format } from 'date-fns'

import type { DocumentLocale } from '#/constants/customization/document-section'

/*
type Locale = "en_US" | "en" | "de" | "es" | "ar" | "fr" | "pt" | "it" | "tr" | "ja" | "nl" | "pl" | "sv" | "da" | "no" | "fi" | "el" | "hu" | "cs" | "he" | "sr" | "bg" | "hr" | "ru" | "uz"
*/

import {
  ar,
  bg,
  cs,
  da,
  de,
  el,
  enGB,
  enUS,
  es,
  fi,
  fr,
  he,
  hr,
  hu,
  it,
  ja,
  nb,
  nl,
  pl,
  pt,
  ru,
  sr,
  sv,
  tr,
  uz,
} from 'date-fns/locale'

export function getDateFormatByLocale(locale: DocumentLocale) {
  // TODO: import dynamically based on the locale in loader after pass the data to nested component
  // https://cdn.jsdelivr.net/npm/dayjs@1/locale.json
  // const lang = import(`date-fns/locale/${locale}/index.js`).then((module) => module.default)

  switch (locale) {
    case 'en_US': {
      return [
        {
          label: 'MM/DD/YYYY',
          value: format(new Date(), 'MM/dd/yyyy', { locale: enUS }),
        },
        {
          label: 'MMM DD, YYYY',
          value: format(new Date(), 'MMM dd, yyyy', { locale: enUS }),
        },
        {
          label: 'MMMM Do, YYYY',
          value: format(new Date(), 'MMMM do, yyyy', { locale: enUS }),
        },
        {
          label: 'DD/MM/YYYY',
          value: format(new Date(), 'dd/MM/yyyy', { locale: enUS }),
        },
        {
          label: 'DD.MM.YYYY',
          value: format(new Date(), 'dd.MM.yyyy', { locale: enUS }),
        },
        {
          label: 'DD MMM YYYY',
          value: format(new Date(), 'dd MMM yyyy', { locale: enUS }),
        },
        {
          label: 'Do MMMM YYYY',
          value: format(new Date(), 'do MMMM yyyy', { locale: enUS }),
        },
        {
          label: 'YYYY-MM-DD',
          value: format(new Date(), 'yyyy-MM-dd', { locale: enUS }),
        },
        {
          label: 'YYYY.MM.DD',
          value: format(new Date(), 'yyyy.MM.dd', { locale: enUS }),
        },
        {
          label: 'YYYY/MM/DD',
          value: format(new Date(), 'yyyy/MM/dd', { locale: enUS }),
        },
        {
          label: 'YYYY MMM DD',
          value: format(new Date(), 'yyyy MMM dd', { locale: enUS }),
        },
        {
          label: 'YYYY MMMM DD',
          value: format(new Date(), 'yyyy MMMM dd', { locale: enUS }),
        },
      ]
    }
    case 'en': {
      return [
        {
          label: 'MM/DD/YYYY',
          value: format(new Date(), 'MM/dd/yyyy', { locale: enGB }),
        },
        {
          label: 'MMM DD, YYYY',
          value: format(new Date(), 'MMM dd, yyyy', { locale: enGB }),
        },
        {
          label: 'MMMM Do, YYYY',
          value: format(new Date(), 'MMMM do, yyyy', { locale: enGB }),
        },
        {
          label: 'DD/MM/YYYY',
          value: format(new Date(), 'dd/MM/yyyy', { locale: enGB }),
        },
        {
          label: 'DD.MM.YYYY',
          value: format(new Date(), 'dd.MM.yyyy', { locale: enGB }),
        },
        {
          label: 'DD MMM YYYY',
          value: format(new Date(), 'dd MMM yyyy', { locale: enGB }),
        },
        {
          label: 'Do MMMM YYYY',
          value: format(new Date(), 'do MMMM yyyy', { locale: enGB }),
        },
        {
          label: 'YYYY-MM-DD',
          value: format(new Date(), 'yyyy-MM-dd', { locale: enGB }),
        },
        {
          label: 'YYYY.MM.DD',
          value: format(new Date(), 'yyyy.MM.dd', { locale: enGB }),
        },
        {
          label: 'YYYY/MM/DD',
          value: format(new Date(), 'yyyy/MM/dd', { locale: enGB }),
        },
        {
          label: 'YYYY MMM DD',
          value: format(new Date(), 'yyyy MMM dd', { locale: enGB }),
        },
        {
          label: 'YYYY MMMM DD',
          value: format(new Date(), 'yyyy MMMM dd', { locale: enGB }),
        },
      ]
    }
    case 'de': {
      return [
        {
          label: 'MM/DD/YYYY',
          value: format(new Date(), 'MM/dd/yyyy', { locale: de }),
        },
        {
          label: 'MMM DD, YYYY',
          value: format(new Date(), 'MMM dd, yyyy', { locale: de }),
        },
        {
          label: 'MMMM Do, YYYY',
          value: format(new Date(), 'MMMM do, yyyy', { locale: de }),
        },
        {
          label: 'DD/MM/YYYY',
          value: format(new Date(), 'dd/MM/yyyy', { locale: de }),
        },
        {
          label: 'DD.MM.YYYY',
          value: format(new Date(), 'dd.MM.yyyy', { locale: de }),
        },
        {
          label: 'DD MMM YYYY',
          value: format(new Date(), 'dd MMM yyyy', { locale: de }),
        },
        {
          label: 'Do MMMM YYYY',
          value: format(new Date(), 'do MMMM yyyy', { locale: de }),
        },
        {
          label: 'YYYY-MM-DD',
          value: format(new Date(), 'yyyy-MM-dd', { locale: de }),
        },
        {
          label: 'YYYY.MM.DD',
          value: format(new Date(), 'yyyy.MM.dd', { locale: de }),
        },
        {
          label: 'YYYY/MM/DD',
          value: format(new Date(), 'yyyy/MM/dd', { locale: de }),
        },
        {
          label: 'YYYY MMM DD',
          value: format(new Date(), 'yyyy MMM dd', { locale: de }),
        },
        {
          label: 'YYYY MMMM DD',
          value: format(new Date(), 'yyyy MMMM dd', { locale: de }),
        },
      ]
    }
    case 'es': {
      return [
        {
          label: 'MM/DD/YYYY',
          value: format(new Date(), 'MM/dd/yyyy', { locale: es }),
        },
        {
          label: 'MMM DD, YYYY',
          value: format(new Date(), 'MMM dd, yyyy', { locale: es }),
        },
        {
          label: 'MMMM Do, YYYY',
          value: format(new Date(), 'MMMM do, yyyy', { locale: es }),
        },
        {
          label: 'DD/MM/YYYY',
          value: format(new Date(), 'dd/MM/yyyy', { locale: es }),
        },
        {
          label: 'DD.MM.YYYY',
          value: format(new Date(), 'dd.MM.yyyy', { locale: es }),
        },
        {
          label: 'DD MMM YYYY',
          value: format(new Date(), 'dd MMM yyyy', { locale: es }),
        },
        {
          label: 'Do MMMM YYYY',
          value: format(new Date(), 'do MMMM yyyy', { locale: es }),
        },
        {
          label: 'YYYY-MM-DD',
          value: format(new Date(), 'yyyy-MM-dd', { locale: es }),
        },
        {
          label: 'YYYY.MM.DD',
          value: format(new Date(), 'yyyy.MM.dd', { locale: es }),
        },
        {
          label: 'YYYY/MM/DD',
          value: format(new Date(), 'yyyy/MM/dd', { locale: es }),
        },
        {
          label: 'YYYY MMM DD',
          value: format(new Date(), 'yyyy MMM dd', { locale: es }),
        },
        {
          label: 'YYYY MMMM DD',
          value: format(new Date(), 'yyyy MMMM dd', { locale: es }),
        },
      ]
    }
    case 'ar': {
      return [
        {
          label: 'MM/DD/YYYY',
          value: format(new Date(), 'MM/dd/yyyy', { locale: ar }),
        },
        {
          label: 'MMM DD, YYYY',
          value: format(new Date(), 'MMM dd, yyyy', { locale: ar }),
        },
        {
          label: 'MMMM Do, YYYY',
          value: format(new Date(), 'MMMM do, yyyy', { locale: ar }),
        },
        {
          label: 'DD/MM/YYYY',
          value: format(new Date(), 'dd/MM/yyyy', { locale: ar }),
        },
        {
          label: 'DD.MM.YYYY',
          value: format(new Date(), 'dd.MM.yyyy', { locale: ar }),
        },
        {
          label: 'DD MMM YYYY',
          value: format(new Date(), 'dd MMM yyyy', { locale: ar }),
        },
        {
          label: 'Do MMMM YYYY',
          value: format(new Date(), 'do MMMM yyyy', { locale: ar }),
        },
        {
          label: 'YYYY-MM-DD',
          value: format(new Date(), 'yyyy-MM-dd', { locale: ar }),
        },
        {
          label: 'YYYY.MM.DD',
          value: format(new Date(), 'yyyy.MM.dd', { locale: ar }),
        },
        {
          label: 'YYYY/MM/DD',
          value: format(new Date(), 'yyyy/MM/dd', { locale: ar }),
        },
        {
          label: 'YYYY MMM DD',
          value: format(new Date(), 'yyyy MMM dd', { locale: ar }),
        },
        {
          label: 'YYYY MMMM DD',
          value: format(new Date(), 'yyyy MMMM dd', { locale: ar }),
        },
      ]
    }
    case 'fr': {
      return [
        {
          label: 'MM/DD/YYYY',
          value: format(new Date(), 'MM/dd/yyyy', { locale: fr }),
        },
        {
          label: 'MMM DD, YYYY',
          value: format(new Date(), 'MMM dd, yyyy', { locale: fr }),
        },
        {
          label: 'MMMM Do, YYYY',
          value: format(new Date(), 'MMMM do, yyyy', { locale: fr }),
        },
        {
          label: 'DD/MM/YYYY',
          value: format(new Date(), 'dd/MM/yyyy', { locale: fr }),
        },
        {
          label: 'DD.MM.YYYY',
          value: format(new Date(), 'dd.MM.yyyy', { locale: fr }),
        },
        {
          label: 'DD MMM YYYY',
          value: format(new Date(), 'dd MMM yyyy', { locale: fr }),
        },
        {
          label: 'Do MMMM YYYY',
          value: format(new Date(), 'do MMMM yyyy', { locale: fr }),
        },
        {
          label: 'YYYY-MM-DD',
          value: format(new Date(), 'yyyy-MM-dd', { locale: fr }),
        },
        {
          label: 'YYYY.MM.DD',
          value: format(new Date(), 'yyyy.MM.dd', { locale: fr }),
        },
        {
          label: 'YYYY/MM/DD',
          value: format(new Date(), 'yyyy/MM/dd', { locale: fr }),
        },
        {
          label: 'YYYY MMM DD',
          value: format(new Date(), 'yyyy MMM dd', { locale: fr }),
        },
        {
          label: 'YYYY MMMM DD',
          value: format(new Date(), 'yyyy MMMM dd', { locale: fr }),
        },
      ]
    }
    case 'pt': {
      return [
        {
          label: 'MM/DD/YYYY',
          value: format(new Date(), 'MM/dd/yyyy', { locale: pt }),
        },
        {
          label: 'MMM DD, YYYY',
          value: format(new Date(), 'MMM dd, yyyy', { locale: pt }),
        },
        {
          label: 'MMMM Do, YYYY',
          value: format(new Date(), 'MMMM do, yyyy', { locale: pt }),
        },
        {
          label: 'DD/MM/YYYY',
          value: format(new Date(), 'dd/MM/yyyy', { locale: pt }),
        },
        {
          label: 'DD.MM.YYYY',
          value: format(new Date(), 'dd.MM.yyyy', { locale: pt }),
        },
        {
          label: 'DD MMM YYYY',
          value: format(new Date(), 'dd MMM yyyy', { locale: pt }),
        },
        {
          label: 'Do MMMM YYYY',
          value: format(new Date(), 'do MMMM yyyy', { locale: pt }),
        },
        {
          label: 'YYYY-MM-DD',
          value: format(new Date(), 'yyyy-MM-dd', { locale: pt }),
        },
        {
          label: 'YYYY.MM.DD',
          value: format(new Date(), 'yyyy.MM.dd', { locale: pt }),
        },
        {
          label: 'YYYY/MM/DD',
          value: format(new Date(), 'yyyy/MM/dd', { locale: pt }),
        },
        {
          label: 'YYYY MMM DD',
          value: format(new Date(), 'yyyy MMM dd', { locale: pt }),
        },
        {
          label: 'YYYY MMMM DD',
          value: format(new Date(), 'yyyy MMMM dd', { locale: pt }),
        },
      ]
    }
    case 'it': {
      return [
        {
          label: 'MM/DD/YYYY',
          value: format(new Date(), 'MM/dd/yyyy', { locale: it }),
        },
        {
          label: 'MMM DD, YYYY',
          value: format(new Date(), 'MMM dd, yyyy', { locale: it }),
        },
        {
          label: 'MMMM Do, YYYY',
          value: format(new Date(), 'MMMM do, yyyy', { locale: it }),
        },
        {
          label: 'DD/MM/YYYY',
          value: format(new Date(), 'dd/MM/yyyy', { locale: it }),
        },
        {
          label: 'DD.MM.YYYY',
          value: format(new Date(), 'dd.MM.yyyy', { locale: it }),
        },
        {
          label: 'DD MMM YYYY',
          value: format(new Date(), 'dd MMM yyyy', { locale: it }),
        },
        {
          label: 'Do MMMM YYYY',
          value: format(new Date(), 'do MMMM yyyy', { locale: it }),
        },
        {
          label: 'YYYY-MM-DD',
          value: format(new Date(), 'yyyy-MM-dd', { locale: it }),
        },
        {
          label: 'YYYY.MM.DD',
          value: format(new Date(), 'yyyy.MM.dd', { locale: it }),
        },
        {
          label: 'YYYY/MM/DD',
          value: format(new Date(), 'yyyy/MM/dd', { locale: it }),
        },
        {
          label: 'YYYY MMM DD',
          value: format(new Date(), 'yyyy MMM dd', { locale: it }),
        },
        {
          label: 'YYYY MMMM DD',
          value: format(new Date(), 'yyyy MMMM dd', { locale: it }),
        },
      ]
    }
    case 'tr': {
      return [
        {
          label: 'MM/DD/YYYY',
          value: format(new Date(), 'MM/dd/yyyy', { locale: tr }),
        },
        {
          label: 'MMM DD, YYYY',
          value: format(new Date(), 'MMM dd, yyyy', { locale: tr }),
        },
        {
          label: 'MMMM Do, YYYY',
          value: format(new Date(), 'MMMM do, yyyy', { locale: tr }),
        },
        {
          label: 'DD/MM/YYYY',
          value: format(new Date(), 'dd/MM/yyyy', { locale: tr }),
        },
        {
          label: 'DD.MM.YYYY',
          value: format(new Date(), 'dd.MM.yyyy', { locale: tr }),
        },
        {
          label: 'DD MMM YYYY',
          value: format(new Date(), 'dd MMM yyyy', { locale: tr }),
        },
        {
          label: 'Do MMMM YYYY',
          value: format(new Date(), 'do MMMM yyyy', { locale: tr }),
        },
        {
          label: 'YYYY-MM-DD',
          value: format(new Date(), 'yyyy-MM-dd', { locale: tr }),
        },
        {
          label: 'YYYY.MM.DD',
          value: format(new Date(), 'yyyy.MM.dd', { locale: tr }),
        },
        {
          label: 'YYYY/MM/DD',
          value: format(new Date(), 'yyyy/MM/dd', { locale: tr }),
        },
        {
          label: 'YYYY MMM DD',
          value: format(new Date(), 'yyyy MMM dd', { locale: tr }),
        },
        {
          label: 'YYYY MMMM DD',
          value: format(new Date(), 'yyyy MMMM dd', { locale: tr }),
        },
      ]
    }
    case 'ja': {
      return [
        {
          label: 'MM/DD/YYYY',
          value: format(new Date(), 'MM/dd/yyyy', { locale: ja }),
        },
        {
          label: 'MMM DD, YYYY',
          value: format(new Date(), 'MMM dd, yyyy', { locale: ja }),
        },
        {
          label: 'MMMM Do, YYYY',
          value: format(new Date(), 'MMMM do, yyyy', { locale: ja }),
        },
        {
          label: 'DD/MM/YYYY',
          value: format(new Date(), 'dd/MM/yyyy', { locale: ja }),
        },
        {
          label: 'DD.MM.YYYY',
          value: format(new Date(), 'dd.MM.yyyy', { locale: ja }),
        },
        {
          label: 'DD MMM YYYY',
          value: format(new Date(), 'dd MMM yyyy', { locale: ja }),
        },
        {
          label: 'Do MMMM YYYY',
          value: format(new Date(), 'do MMMM yyyy', { locale: ja }),
        },
        {
          label: 'YYYY-MM-DD',
          value: format(new Date(), 'yyyy-MM-dd', { locale: ja }),
        },
        {
          label: 'YYYY.MM.DD',
          value: format(new Date(), 'yyyy.MM.dd', { locale: ja }),
        },
        {
          label: 'YYYY/MM/DD',
          value: format(new Date(), 'yyyy/MM/dd', { locale: ja }),
        },
        {
          label: 'YYYY MMM DD',
          value: format(new Date(), 'yyyy MMM dd', { locale: ja }),
        },
        {
          label: 'YYYY MMMM DD',
          value: format(new Date(), 'yyyy MMMM dd', { locale: ja }),
        },
      ]
    }
    case 'nl': {
      return [
        {
          label: 'MM/DD/YYYY',
          value: format(new Date(), 'MM/dd/yyyy', { locale: nl }),
        },
        {
          label: 'MMM DD, YYYY',
          value: format(new Date(), 'MMM dd, yyyy', { locale: nl }),
        },
        {
          label: 'MMMM Do, YYYY',
          value: format(new Date(), 'MMMM do, yyyy', { locale: nl }),
        },
        {
          label: 'DD/MM/YYYY',
          value: format(new Date(), 'dd/MM/yyyy', { locale: nl }),
        },
        {
          label: 'DD.MM.YYYY',
          value: format(new Date(), 'dd.MM.yyyy', { locale: nl }),
        },
        {
          label: 'DD MMM YYYY',
          value: format(new Date(), 'dd MMM yyyy', { locale: nl }),
        },
        {
          label: 'Do MMMM YYYY',
          value: format(new Date(), 'do MMMM yyyy', { locale: nl }),
        },
        {
          label: 'YYYY-MM-DD',
          value: format(new Date(), 'yyyy-MM-dd', { locale: nl }),
        },
        {
          label: 'YYYY.MM.DD',
          value: format(new Date(), 'yyyy.MM.dd', { locale: nl }),
        },
        {
          label: 'YYYY/MM/DD',
          value: format(new Date(), 'yyyy/MM/dd', { locale: nl }),
        },
        {
          label: 'YYYY MMM DD',
          value: format(new Date(), 'yyyy MMM dd', { locale: nl }),
        },
        {
          label: 'YYYY MMMM DD',
          value: format(new Date(), 'yyyy MMMM dd', { locale: nl }),
        },
      ]
    }
    case 'pl': {
      return [
        {
          label: 'MM/DD/YYYY',
          value: format(new Date(), 'MM/dd/yyyy', { locale: pl }),
        },
        {
          label: 'MMM DD, YYYY',
          value: format(new Date(), 'MMM dd, yyyy', { locale: pl }),
        },
        {
          label: 'MMMM Do, YYYY',
          value: format(new Date(), 'MMMM do, yyyy', { locale: pl }),
        },
        {
          label: 'DD/MM/YYYY',
          value: format(new Date(), 'dd/MM/yyyy', { locale: pl }),
        },
        {
          label: 'DD.MM.YYYY',
          value: format(new Date(), 'dd.MM.yyyy', { locale: pl }),
        },
        {
          label: 'DD MMM YYYY',
          value: format(new Date(), 'dd MMM yyyy', { locale: pl }),
        },
        {
          label: 'Do MMMM YYYY',
          value: format(new Date(), 'do MMMM yyyy', { locale: pl }),
        },
        {
          label: 'YYYY-MM-DD',
          value: format(new Date(), 'yyyy-MM-dd', { locale: pl }),
        },
        {
          label: 'YYYY.MM.DD',
          value: format(new Date(), 'yyyy.MM.dd', { locale: pl }),
        },
        {
          label: 'YYYY/MM/DD',
          value: format(new Date(), 'yyyy/MM/dd', { locale: pl }),
        },
        {
          label: 'YYYY MMM DD',
          value: format(new Date(), 'yyyy MMM dd', { locale: pl }),
        },
        {
          label: 'YYYY MMMM DD',
          value: format(new Date(), 'yyyy MMMM dd', { locale: pl }),
        },
      ]
    }
    case 'sv': {
      return [
        {
          label: 'MM/DD/YYYY',
          value: format(new Date(), 'MM/dd/yyyy', { locale: sv }),
        },
        {
          label: 'MMM DD, YYYY',
          value: format(new Date(), 'MMM dd, yyyy', { locale: sv }),
        },
        {
          label: 'MMMM Do, YYYY',
          value: format(new Date(), 'MMMM do, yyyy', { locale: sv }),
        },
        {
          label: 'DD/MM/YYYY',
          value: format(new Date(), 'dd/MM/yyyy', { locale: sv }),
        },
        {
          label: 'DD.MM.YYYY',
          value: format(new Date(), 'dd.MM.yyyy', { locale: sv }),
        },
        {
          label: 'DD MMM YYYY',
          value: format(new Date(), 'dd MMM yyyy', { locale: sv }),
        },
        {
          label: 'Do MMMM YYYY',
          value: format(new Date(), 'do MMMM yyyy', { locale: sv }),
        },
        {
          label: 'YYYY-MM-DD',
          value: format(new Date(), 'yyyy-MM-dd', { locale: sv }),
        },
        {
          label: 'YYYY.MM.DD',
          value: format(new Date(), 'yyyy.MM.dd', { locale: sv }),
        },
        {
          label: 'YYYY/MM/DD',
          value: format(new Date(), 'yyyy/MM/dd', { locale: sv }),
        },
        {
          label: 'YYYY MMM DD',
          value: format(new Date(), 'yyyy MMM dd', { locale: sv }),
        },
        {
          label: 'YYYY MMMM DD',
          value: format(new Date(), 'yyyy MMMM dd', { locale: sv }),
        },
      ]
    }
    case 'da': {
      return [
        {
          label: 'MM/DD/YYYY',
          value: format(new Date(), 'MM/dd/yyyy', { locale: da }),
        },
        {
          label: 'MMM DD, YYYY',
          value: format(new Date(), 'MMM dd, yyyy', { locale: da }),
        },
        {
          label: 'MMMM Do, YYYY',
          value: format(new Date(), 'MMMM do, yyyy', { locale: da }),
        },
        {
          label: 'DD/MM/YYYY',
          value: format(new Date(), 'dd/MM/yyyy', { locale: da }),
        },
        {
          label: 'DD.MM.YYYY',
          value: format(new Date(), 'dd.MM.yyyy', { locale: da }),
        },
        {
          label: 'DD MMM YYYY',
          value: format(new Date(), 'dd MMM yyyy', { locale: da }),
        },
        {
          label: 'Do MMMM YYYY',
          value: format(new Date(), 'do MMMM yyyy', { locale: da }),
        },
        {
          label: 'YYYY-MM-DD',
          value: format(new Date(), 'yyyy-MM-dd', { locale: da }),
        },
        {
          label: 'YYYY.MM.DD',
          value: format(new Date(), 'yyyy.MM.dd', { locale: da }),
        },
        {
          label: 'YYYY/MM/DD',
          value: format(new Date(), 'yyyy/MM/dd', { locale: da }),
        },
        {
          label: 'YYYY MMM DD',
          value: format(new Date(), 'yyyy MMM dd', { locale: da }),
        },
        {
          label: 'YYYY MMMM DD',
          value: format(new Date(), 'yyyy MMMM dd', { locale: da }),
        },
      ]
    }
    case 'no': {
      return [
        {
          label: 'MM/DD/YYYY',
          value: format(new Date(), 'MM/dd/yyyy', { locale: nb }),
        },
        {
          label: 'MMM DD, YYYY',
          value: format(new Date(), 'MMM dd, yyyy', { locale: nb }),
        },
        {
          label: 'MMMM Do, YYYY',
          value: format(new Date(), 'MMMM do, yyyy', { locale: nb }),
        },
        {
          label: 'DD/MM/YYYY',
          value: format(new Date(), 'dd/MM/yyyy', { locale: nb }),
        },
        {
          label: 'DD.MM.YYYY',
          value: format(new Date(), 'dd.MM.yyyy', { locale: nb }),
        },
        {
          label: 'DD MMM YYYY',
          value: format(new Date(), 'dd MMM yyyy', { locale: nb }),
        },
        {
          label: 'Do MMMM YYYY',
          value: format(new Date(), 'do MMMM yyyy', { locale: nb }),
        },
        {
          label: 'YYYY-MM-DD',
          value: format(new Date(), 'yyyy-MM-dd', { locale: nb }),
        },
        {
          label: 'YYYY.MM.DD',
          value: format(new Date(), 'yyyy.MM.dd', { locale: nb }),
        },
        {
          label: 'YYYY/MM/DD',
          value: format(new Date(), 'yyyy/MM/dd', { locale: nb }),
        },
        {
          label: 'YYYY MMM DD',
          value: format(new Date(), 'yyyy MMM dd', { locale: nb }),
        },
        {
          label: 'YYYY MMMM DD',
          value: format(new Date(), 'yyyy MMMM dd', { locale: nb }),
        },
      ]
    }
    case 'fi': {
      return [
        {
          label: 'MM/DD/YYYY',
          value: format(new Date(), 'MM/dd/yyyy', { locale: fi }),
        },
        {
          label: 'MMM DD, YYYY',
          value: format(new Date(), 'MMM dd, yyyy', { locale: fi }),
        },
        {
          label: 'MMMM Do, YYYY',
          value: format(new Date(), 'MMMM do, yyyy', { locale: fi }),
        },
        {
          label: 'DD/MM/YYYY',
          value: format(new Date(), 'dd/MM/yyyy', { locale: fi }),
        },
        {
          label: 'DD.MM.YYYY',
          value: format(new Date(), 'dd.MM.yyyy', { locale: fi }),
        },
        {
          label: 'DD MMM YYYY',
          value: format(new Date(), 'dd MMM yyyy', { locale: fi }),
        },
        {
          label: 'Do MMMM YYYY',
          value: format(new Date(), 'do MMMM yyyy', { locale: fi }),
        },
        {
          label: 'YYYY-MM-DD',
          value: format(new Date(), 'yyyy-MM-dd', { locale: fi }),
        },
        {
          label: 'YYYY.MM.DD',
          value: format(new Date(), 'yyyy.MM.dd', { locale: fi }),
        },
        {
          label: 'YYYY/MM/DD',
          value: format(new Date(), 'yyyy/MM/dd', { locale: fi }),
        },
        {
          label: 'YYYY MMM DD',
          value: format(new Date(), 'yyyy MMM dd', { locale: fi }),
        },
        {
          label: 'YYYY MMMM DD',
          value: format(new Date(), 'yyyy MMMM dd', { locale: fi }),
        },
      ]
    }
    case 'el': {
      return [
        {
          label: 'MM/DD/YYYY',
          value: format(new Date(), 'MM/dd/yyyy', { locale: el }),
        },
        {
          label: 'MMM DD, YYYY',
          value: format(new Date(), 'MMM dd, yyyy', { locale: el }),
        },
        {
          label: 'MMMM Do, YYYY',
          value: format(new Date(), 'MMMM do, yyyy', { locale: el }),
        },
        {
          label: 'DD/MM/YYYY',
          value: format(new Date(), 'dd/MM/yyyy', { locale: el }),
        },
        {
          label: 'DD.MM.YYYY',
          value: format(new Date(), 'dd.MM.yyyy', { locale: el }),
        },
        {
          label: 'DD MMM YYYY',
          value: format(new Date(), 'dd MMM yyyy', { locale: el }),
        },
        {
          label: 'Do MMMM YYYY',
          value: format(new Date(), 'do MMMM yyyy', { locale: el }),
        },
        {
          label: 'YYYY-MM-DD',
          value: format(new Date(), 'yyyy-MM-dd', { locale: el }),
        },
        {
          label: 'YYYY.MM.DD',
          value: format(new Date(), 'yyyy.MM.dd', { locale: el }),
        },
        {
          label: 'YYYY/MM/DD',
          value: format(new Date(), 'yyyy/MM/dd', { locale: el }),
        },
        {
          label: 'YYYY MMM DD',
          value: format(new Date(), 'yyyy MMM dd', { locale: el }),
        },
        {
          label: 'YYYY MMMM DD',
          value: format(new Date(), 'yyyy MMMM dd', { locale: el }),
        },
      ]
    }
    case 'hu': {
      return [
        {
          label: 'MM/DD/YYYY',
          value: format(new Date(), 'MM/dd/yyyy', { locale: hu }),
        },
        {
          label: 'MMM DD, YYYY',
          value: format(new Date(), 'MMM dd, yyyy', { locale: hu }),
        },
        {
          label: 'MMMM Do, YYYY',
          value: format(new Date(), 'MMMM do, yyyy', { locale: hu }),
        },
        {
          label: 'DD/MM/YYYY',
          value: format(new Date(), 'dd/MM/yyyy', { locale: hu }),
        },
        {
          label: 'DD.MM.YYYY',
          value: format(new Date(), 'dd.MM.yyyy', { locale: hu }),
        },
        {
          label: 'DD MMM YYYY',
          value: format(new Date(), 'dd MMM yyyy', { locale: hu }),
        },
        {
          label: 'Do MMMM YYYY',
          value: format(new Date(), 'do MMMM yyyy', { locale: hu }),
        },
        {
          label: 'YYYY-MM-DD',
          value: format(new Date(), 'yyyy-MM-dd', { locale: hu }),
        },
        {
          label: 'YYYY.MM.DD',
          value: format(new Date(), 'yyyy.MM.dd', { locale: hu }),
        },
        {
          label: 'YYYY/MM/DD',
          value: format(new Date(), 'yyyy/MM/dd', { locale: hu }),
        },
        {
          label: 'YYYY MMM DD',
          value: format(new Date(), 'yyyy MMM dd', { locale: hu }),
        },
        {
          label: 'YYYY MMMM DD',
          value: format(new Date(), 'yyyy MMMM dd', { locale: hu }),
        },
      ]
    }
    case 'cs': {
      return [
        {
          label: 'MM/DD/YYYY',
          value: format(new Date(), 'MM/dd/yyyy', { locale: cs }),
        },
        {
          label: 'MMM DD, YYYY',
          value: format(new Date(), 'MMM dd, yyyy', { locale: cs }),
        },
        {
          label: 'MMMM Do, YYYY',
          value: format(new Date(), 'MMMM do, yyyy', { locale: cs }),
        },
        {
          label: 'DD/MM/YYYY',
          value: format(new Date(), 'dd/MM/yyyy', { locale: cs }),
        },
        {
          label: 'DD.MM.YYYY',
          value: format(new Date(), 'dd.MM.yyyy', { locale: cs }),
        },
        {
          label: 'DD MMM YYYY',
          value: format(new Date(), 'dd MMM yyyy', { locale: cs }),
        },
        {
          label: 'Do MMMM YYYY',
          value: format(new Date(), 'do MMMM yyyy', { locale: cs }),
        },
        {
          label: 'YYYY-MM-DD',
          value: format(new Date(), 'yyyy-MM-dd', { locale: cs }),
        },
        {
          label: 'YYYY.MM.DD',
          value: format(new Date(), 'yyyy.MM.dd', { locale: cs }),
        },
        {
          label: 'YYYY/MM/DD',
          value: format(new Date(), 'yyyy/MM/dd', { locale: cs }),
        },
        {
          label: 'YYYY MMM DD',
          value: format(new Date(), 'yyyy MMM dd', { locale: cs }),
        },
        {
          label: 'YYYY MMMM DD',
          value: format(new Date(), 'yyyy MMMM dd', { locale: cs }),
        },
      ]
    }
    case 'he': {
      return [
        {
          label: 'MM/DD/YYYY',
          value: format(new Date(), 'MM/dd/yyyy', { locale: he }),
        },
        {
          label: 'MMM DD, YYYY',
          value: format(new Date(), 'MMM dd, yyyy', { locale: he }),
        },
        {
          label: 'MMMM Do, YYYY',
          value: format(new Date(), 'MMMM do, yyyy', { locale: he }),
        },
        {
          label: 'DD/MM/YYYY',
          value: format(new Date(), 'dd/MM/yyyy', { locale: he }),
        },
        {
          label: 'DD.MM.YYYY',
          value: format(new Date(), 'dd.MM.yyyy', { locale: he }),
        },
        {
          label: 'DD MMM YYYY',
          value: format(new Date(), 'dd MMM yyyy', { locale: he }),
        },
        {
          label: 'Do MMMM YYYY',
          value: format(new Date(), 'do MMMM yyyy', { locale: he }),
        },
        {
          label: 'YYYY-MM-DD',
          value: format(new Date(), 'yyyy-MM-dd', { locale: he }),
        },
        {
          label: 'YYYY.MM.DD',
          value: format(new Date(), 'yyyy.MM.dd', { locale: he }),
        },
        {
          label: 'YYYY/MM/DD',
          value: format(new Date(), 'yyyy/MM/dd', { locale: he }),
        },
        {
          label: 'YYYY MMM DD',
          value: format(new Date(), 'yyyy MMM dd', { locale: he }),
        },
        {
          label: 'YYYY MMMM DD',
          value: format(new Date(), 'yyyy MMMM dd', { locale: he }),
        },
      ]
    }
    case 'sr': {
      return [
        {
          label: 'MM/DD/YYYY',
          value: format(new Date(), 'MM/dd/yyyy', { locale: sr }),
        },
        {
          label: 'MMM DD, YYYY',
          value: format(new Date(), 'MMM dd, yyyy', { locale: sr }),
        },
        {
          label: 'MMMM Do, YYYY',
          value: format(new Date(), 'MMMM do, yyyy', { locale: sr }),
        },
        {
          label: 'DD/MM/YYYY',
          value: format(new Date(), 'dd/MM/yyyy', { locale: sr }),
        },
        {
          label: 'DD.MM.YYYY',
          value: format(new Date(), 'dd.MM.yyyy', { locale: sr }),
        },
        {
          label: 'DD MMM YYYY',
          value: format(new Date(), 'dd MMM yyyy', { locale: sr }),
        },
        {
          label: 'Do MMMM YYYY',
          value: format(new Date(), 'do MMMM yyyy', { locale: sr }),
        },
        {
          label: 'YYYY-MM-DD',
          value: format(new Date(), 'yyyy-MM-dd', { locale: sr }),
        },
        {
          label: 'YYYY.MM.DD',
          value: format(new Date(), 'yyyy.MM.dd', { locale: sr }),
        },
        {
          label: 'YYYY/MM/DD',
          value: format(new Date(), 'yyyy/MM/dd', { locale: sr }),
        },
        {
          label: 'YYYY MMM DD',
          value: format(new Date(), 'yyyy MMM dd', { locale: sr }),
        },
        {
          label: 'YYYY MMMM DD',
          value: format(new Date(), 'yyyy MMMM dd', { locale: sr }),
        },
      ]
    }
    case 'bg': {
      return [
        {
          label: 'MM/DD/YYYY',
          value: format(new Date(), 'MM/dd/yyyy', { locale: bg }),
        },
        {
          label: 'MMM DD, YYYY',
          value: format(new Date(), 'MMM dd, yyyy', { locale: bg }),
        },
        {
          label: 'MMMM Do, YYYY',
          value: format(new Date(), 'MMMM do, yyyy', { locale: bg }),
        },
        {
          label: 'DD/MM/YYYY',
          value: format(new Date(), 'dd/MM/yyyy', { locale: bg }),
        },
        {
          label: 'DD.MM.YYYY',
          value: format(new Date(), 'dd.MM.yyyy', { locale: bg }),
        },
        {
          label: 'DD MMM YYYY',
          value: format(new Date(), 'dd MMM yyyy', { locale: bg }),
        },
        {
          label: 'Do MMMM YYYY',
          value: format(new Date(), 'do MMMM yyyy', { locale: bg }),
        },
        {
          label: 'YYYY-MM-DD',
          value: format(new Date(), 'yyyy-MM-dd', { locale: bg }),
        },
        {
          label: 'YYYY.MM.DD',
          value: format(new Date(), 'yyyy.MM.dd', { locale: bg }),
        },
        {
          label: 'YYYY/MM/DD',
          value: format(new Date(), 'yyyy/MM/dd', { locale: bg }),
        },
        {
          label: 'YYYY MMM DD',
          value: format(new Date(), 'yyyy MMM dd', { locale: bg }),
        },
        {
          label: 'YYYY MMMM DD',
          value: format(new Date(), 'yyyy MMMM dd', { locale: bg }),
        },
      ]
    }
    case 'hr': {
      return [
        {
          label: 'MM/DD/YYYY',
          value: format(new Date(), 'MM/dd/yyyy', { locale: hr }),
        },
        {
          label: 'MMM DD, YYYY',
          value: format(new Date(), 'MMM dd, yyyy', { locale: hr }),
        },
        {
          label: 'MMMM Do, YYYY',
          value: format(new Date(), 'MMMM do, yyyy', { locale: hr }),
        },
        {
          label: 'DD/MM/YYYY',
          value: format(new Date(), 'dd/MM/yyyy', { locale: hr }),
        },
        {
          label: 'DD.MM.YYYY',
          value: format(new Date(), 'dd.MM.yyyy', { locale: hr }),
        },
        {
          label: 'DD MMM YYYY',
          value: format(new Date(), 'dd MMM yyyy', { locale: hr }),
        },
        {
          label: 'Do MMMM YYYY',
          value: format(new Date(), 'do MMMM yyyy', { locale: hr }),
        },
        {
          label: 'YYYY-MM-DD',
          value: format(new Date(), 'yyyy-MM-dd', { locale: hr }),
        },
        {
          label: 'YYYY.MM.DD',
          value: format(new Date(), 'yyyy.MM.dd', { locale: hr }),
        },
        {
          label: 'YYYY/MM/DD',
          value: format(new Date(), 'yyyy/MM/dd', { locale: hr }),
        },
        {
          label: 'YYYY MMM DD',
          value: format(new Date(), 'yyyy MMM dd', { locale: hr }),
        },
        {
          label: 'YYYY MMMM DD',
          value: format(new Date(), 'yyyy MMMM dd', { locale: hr }),
        },
      ]
    }
    case 'ru': {
      return [
        {
          label: 'MM/DD/YYYY',
          value: format(new Date(), 'MM/dd/yyyy', { locale: ru }),
        },
        {
          label: 'MMM DD, YYYY',
          value: format(new Date(), 'MMM dd, yyyy', { locale: ru }),
        },
        {
          label: 'MMMM Do, YYYY',
          value: format(new Date(), 'MMMM do, yyyy', { locale: ru }),
        },
        {
          label: 'DD/MM/YYYY',
          value: format(new Date(), 'dd/MM/yyyy', { locale: ru }),
        },
        {
          label: 'DD.MM.YYYY',
          value: format(new Date(), 'dd.MM.yyyy', { locale: ru }),
        },
        {
          label: 'DD MMM YYYY',
          value: format(new Date(), 'dd MMM yyyy', { locale: ru }),
        },
        {
          label: 'Do MMMM YYYY',
          value: format(new Date(), 'do MMMM yyyy', { locale: ru }),
        },
        {
          label: 'YYYY-MM-DD',
          value: format(new Date(), 'yyyy-MM-dd', { locale: ru }),
        },
        {
          label: 'YYYY.MM.DD',
          value: format(new Date(), 'yyyy.MM.dd', { locale: ru }),
        },
        {
          label: 'YYYY/MM/DD',
          value: format(new Date(), 'yyyy/MM/dd', { locale: ru }),
        },
        {
          label: 'YYYY MMM DD',
          value: format(new Date(), 'yyyy MMM dd', { locale: ru }),
        },
        {
          label: 'YYYY MMMM DD',
          value: format(new Date(), 'yyyy MMMM dd', { locale: ru }),
        },
      ]
    }
    case 'uz': {
      return [
        {
          label: 'MM/DD/YYYY',
          value: format(new Date(), 'MM/dd/yyyy', { locale: uz }),
        },
        {
          label: 'MMM DD, YYYY',
          value: format(new Date(), 'MMM dd, yyyy', { locale: uz }),
        },
        {
          label: 'MMMM Do, YYYY',
          value: format(new Date(), 'MMMM do, yyyy', { locale: uz }),
        },
        {
          label: 'DD/MM/YYYY',
          value: format(new Date(), 'dd/MM/yyyy', { locale: uz }),
        },
        {
          label: 'DD.MM.YYYY',
          value: format(new Date(), 'dd.MM.yyyy', { locale: uz }),
        },
        {
          label: 'DD MMM YYYY',
          value: format(new Date(), 'dd MMM yyyy', { locale: uz }),
        },
        {
          label: 'Do MMMM YYYY',
          value: format(new Date(), 'do MMMM yyyy', { locale: uz }),
        },
        {
          label: 'YYYY-MM-DD',
          value: format(new Date(), 'yyyy-MM-dd', { locale: uz }),
        },
        {
          label: 'YYYY.MM.DD',
          value: format(new Date(), 'yyyy.MM.dd', { locale: uz }),
        },
        {
          label: 'YYYY/MM/DD',
          value: format(new Date(), 'yyyy/MM/dd', { locale: uz }),
        },
        {
          label: 'YYYY MMM DD',
          value: format(new Date(), 'yyyy MMM dd', { locale: uz }),
        },
        {
          label: 'YYYY MMMM DD',
          value: format(new Date(), 'yyyy MMMM dd', { locale: uz }),
        },
      ]
    }

    default: {
      return [
        {
          label: 'MM/DD/YYYY',
          value: format(new Date(), 'MM/dd/yyyy', { locale: enUS }),
        },
        {
          label: 'MMM DD, YYYY',
          value: format(new Date(), 'MMM dd, yyyy', { locale: enUS }),
        },
        {
          label: 'MMMM Do, YYYY',
          value: format(new Date(), 'MMMM do, yyyy', { locale: enUS }),
        },
        {
          label: 'DD/MM/YYYY',
          value: format(new Date(), 'dd/MM/yyyy', { locale: enUS }),
        },
        {
          label: 'DD.MM.YYYY',
          value: format(new Date(), 'dd.MM.yyyy', { locale: enUS }),
        },
        {
          label: 'DD MMM YYYY',
          value: format(new Date(), 'dd MMM yyyy', { locale: enUS }),
        },
        {
          label: 'Do MMMM YYYY',
          value: format(new Date(), 'do MMMM yyyy', { locale: enUS }),
        },
        {
          label: 'YYYY-MM-DD',
          value: format(new Date(), 'yyyy-MM-dd', { locale: enUS }),
        },
        {
          label: 'YYYY.MM.DD',
          value: format(new Date(), 'yyyy.MM.dd', { locale: enUS }),
        },
        {
          label: 'YYYY/MM/DD',
          value: format(new Date(), 'yyyy/MM/dd', { locale: enUS }),
        },
        {
          label: 'YYYY MMM DD',
          value: format(new Date(), 'yyyy MMM dd', { locale: enUS }),
        },
        {
          label: 'YYYY MMMM DD',
          value: format(new Date(), 'yyyy MMMM dd', { locale: enUS }),
        },
      ]
    }
  }
}
