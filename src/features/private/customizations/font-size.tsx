import { Card, CardHeader, CardTitle } from '#/components/ui/card'
import BaseFontSize from './font-sizes/base-font-size'
import EntryHeaderFontSize from './font-sizes/entry-header-font-size'
import FullNameFontSize from './font-sizes/full-name-font-size'
import ProfessionalTitleFontSize from './font-sizes/professional-title-font-size'
import SectionHeadingsFontSize from './font-sizes/section-headings-font-size'

export default function FontSize() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Font Size</CardTitle>
      </CardHeader>

      <BaseFontSize />

      <FullNameFontSize />

      <ProfessionalTitleFontSize />

      <SectionHeadingsFontSize />

      <EntryHeaderFontSize />
    </Card>
  )
}
