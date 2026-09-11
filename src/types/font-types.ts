import type fonts from '../../public/fonts/fonts.json'

export type MonoFont =
  | 'Inconsolata'
  | 'Source Code Pro'
  | 'Overpass Mono'
  | 'Space Mono'
  | 'IBM Plex Mono'
  | 'Courier Prime'

export type SansFont =
  | 'Source Sans Pro'
  | 'Karla'
  | 'Mulish'
  | 'Lato'
  | 'Titillium Web'
  | 'Work Sans'
  | 'Barlow'
  | 'Jost'
  | 'Fira Sans'
  | 'Roboto'
  | 'Rubik'
  | 'Asap'
  | 'Nunito'
  | 'Open Sans'
  | 'IBM Plex Sans'

export type SerifFont =
  | 'Lora'
  | 'Source Serif Pro'
  | 'Zilla Slab'
  | 'PT Serif'
  | 'Literata'
  | 'EB Garamond'
  | 'Newsreader' // 'Latin Modern' this font is not available in g-fonts-api.json
  | 'Aleo'
  | 'Crimson Pro'
  | 'Cormorant Garamond'
  | 'Vollkorn'
  | 'Amiri'
  | 'Crimson Text'
  | 'Alegreya'

export type NameFont =
  | 'Comfortaa'
  | 'Abril Fatface'
  | 'Amatic SC'
  | 'Bungee Shade'
  | 'Caveat'
  | 'Caveat Brush'
  | 'Elsie'
  | 'Lobster'
  | 'Pacifico'
  | 'Parisienne'
  | 'Vibur'

export type BodyFont = Lowercase<MonoFont | SansFont | SerifFont>

export type NamingFont = Lowercase<NameFont>

export type Fonts = typeof fonts
// type FontParent = (typeof fonts)[string & keyof typeof fonts]

// export type FontType = {
//   [key in keyof FontParent]: {
//     [weight in keyof FontParent[key]]: string
//   }
// }
