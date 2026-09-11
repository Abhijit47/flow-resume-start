import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '#/components/ui/field'
import {
  monoFonts,
  nameFonts,
  sansFonts,
  serifFonts,
} from '#/constants/customization/font-section'
import { useCustomizationStore } from '#/store/customization-store'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function Font() {
  const {
    customization: { font, creativeNameFont },
    updateBodyFont,
    updateCreativeNameFont,
  } = useCustomizationStore()

  function getFontFamilyName(selectedFont: string) {
    if (monoFonts.find((f) => f.toLowerCase() === selectedFont.toLowerCase())) {
      return 'mono'
    } else if (
      sansFonts.find((f) => f.toLowerCase() === selectedFont.toLowerCase())
    ) {
      return 'sans'
    } else if (
      serifFonts.find((f) => f.toLowerCase() === selectedFont.toLowerCase())
    ) {
      return 'serif'
    } else {
      return 'serif'
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Font</CardTitle>
      </CardHeader>

      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="bodyFont">Body Font</FieldLabel>
            <Select
              value={font.fontFamily}
              onValueChange={(value) => {
                const fontFamily = getFontFamilyName(value.toLowerCase())
                updateBodyFont({
                  selected: fontFamily,
                  fontFamily: value,
                })
              }}
            >
              <SelectTrigger
                id="bodyFont"
                className="py-5 w-full text-base"
                style={{ fontFamily: font.fontFamily }}
              >
                <SelectValue placeholder="Select a body font" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectGroup>
                  <SelectLabel>Mono</SelectLabel>
                  {monoFonts.map((item) => (
                    <SelectItem
                      style={{ fontFamily: item }}
                      key={item.toLowerCase()}
                      value={item}
                      className={'py-2 text-base'}
                      onMouseEnter={(e) => {
                        e.stopPropagation()
                        const fontFamily = getFontFamilyName(item.toLowerCase())
                        updateBodyFont({
                          selected: fontFamily,
                          fontFamily: item,
                        })
                      }}
                      onMouseLeave={(e) => {
                        e.stopPropagation()
                        updateBodyFont({
                          selected: font.selected,
                          fontFamily: font.fontFamily,
                        })
                      }}
                    >
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>

                <SelectGroup>
                  <SelectLabel>Sans</SelectLabel>
                  {sansFonts.map((item) => (
                    <SelectItem
                      style={{ fontFamily: item }}
                      key={item.toLowerCase()}
                      value={item}
                      className={'py-2 text-base'}
                      onMouseEnter={(e) => {
                        e.stopPropagation()
                        const fontFamily = getFontFamilyName(item.toLowerCase())
                        updateBodyFont({
                          selected: fontFamily,
                          fontFamily: item,
                        })
                      }}
                      onMouseLeave={(e) => {
                        e.stopPropagation()
                        updateBodyFont({
                          selected: font.selected,
                          fontFamily: font.fontFamily,
                        })
                      }}
                    >
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>

                <SelectGroup>
                  <SelectLabel>Serif</SelectLabel>
                  {serifFonts.map((item) => (
                    <SelectItem
                      style={{ fontFamily: item }}
                      key={item.toLowerCase()}
                      value={item}
                      className={'py-2 text-base'}
                      onMouseEnter={(e) => {
                        e.stopPropagation()
                        const fontFamily = getFontFamilyName(item.toLowerCase())
                        updateBodyFont({
                          selected: fontFamily,
                          fontFamily: item,
                        })
                      }}
                      onMouseLeave={(e) => {
                        e.stopPropagation()
                        updateBodyFont({
                          selected: font.selected,
                          fontFamily: font.fontFamily,
                        })
                      }}
                    >
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <FieldLabel htmlFor="nameFont">Name Font</FieldLabel>
            <Select
              value={creativeNameFont}
              onValueChange={(value) => {
                updateCreativeNameFont(value)
              }}
            >
              <SelectTrigger
                id="nameFont"
                className="py-5 w-full text-base"
                style={{
                  fontFamily:
                    creativeNameFont === 'bodyFont'
                      ? font.fontFamily
                      : creativeNameFont,
                }}
              >
                <SelectValue placeholder="Select a naming font" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectGroup>
                  <SelectLabel>Choose a naming font</SelectLabel>
                  <SelectItem value={'bodyFont'} className={'py-2 text-base'}>
                    Same as body font
                  </SelectItem>
                  {nameFonts.map((item) => (
                    <SelectItem
                      style={{ fontFamily: item }}
                      key={item.toLowerCase()}
                      value={item}
                      className={'py-2 text-base'}
                      onMouseEnter={(e) => {
                        e.stopPropagation()
                        updateCreativeNameFont(item)
                      }}
                      onMouseLeave={(e) => {
                        e.stopPropagation()
                        updateCreativeNameFont(item)
                      }}
                    >
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </FieldGroup>
      </CardContent>
    </Card>
  )
}
