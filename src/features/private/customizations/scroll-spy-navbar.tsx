import Colors from './colors'
import Document from './document'
import Entries from './entries'
import Font from './font'
import FontSize from './font-size'
import Footer from './footer'
import Header from './header'
import Headings from './headings'
import Layout from './layout'
import LinksConfig from './links'
import Photo from './photo'
import Sections from './sections'
import Spacing from './spacing'
import Templates from './templates'

export const scrollSpyNavbar = [
  {
    id: 'nav-document',
    label: 'Document',
    comp: Document,
  },
  {
    id: 'nav-templates',
    label: 'Templates',
    comp: Templates,
  },
  {
    id: 'nav-layout',
    label: 'Layout',
    comp: Layout,
  },
  {
    id: 'nav-font-size',
    label: 'Font Size',
    comp: FontSize,
  },
  {
    id: 'nav-spacing',
    label: 'Spacing',
    comp: Spacing,
  },
  {
    id: 'nav-entries',
    label: 'Entries',
    comp: Entries,
  },
  {
    id: 'nav-headings',
    label: 'Headings',
    comp: Headings,
  },
  {
    id: 'nav-font',
    label: 'Font',
    comp: Font,
  },
  {
    id: 'nav-colors',
    label: 'Colors',
    comp: Colors,
  },
  {
    id: 'nav-header',
    label: 'Header',
    comp: Header,
  },
  {
    id: 'nav-photo',
    label: 'Photo',
    comp: Photo,
  },
  {
    id: 'nav-links',
    label: 'Links',
    comp: LinksConfig,
  },
  {
    id: 'nav-footer',
    label: 'Footer',
    comp: Footer,
  },
  {
    id: 'nav-sections',
    label: 'Section',
    comp: Sections,
  },
]
