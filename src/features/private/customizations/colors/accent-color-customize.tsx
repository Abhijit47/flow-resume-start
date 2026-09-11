import { CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Checkbox } from '#/components/ui/checkbox'
import { Field, FieldLabel } from '#/components/ui/field'
import { applingAccentColorOptions } from '#/constants/customization/color-section'
import { useCustomizationStore } from '#/store/customization-store'
import type { Mode } from '../colors'

export default function AccentColorCustomize() {
  const {
    customization: { colors, applyAccentColor },
    updateAccentColors,
  } = useCustomizationStore()

  const selectedMode = colors[colors.mode as Mode].selected

  const isShow =
    colors.mode === 'basic' ||
    colors.mode === 'advanced' ||
    colors.mode === 'border'

  const isShow2nd =
    selectedMode === 'single' ||
    selectedMode === 'multi' ||
    (colors.mode === 'border' && selectedMode === 'image')

  return (
    <div
      className={
        'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'
      }
    >
      {isShow && isShow2nd ? (
        <CardContent className={'space-y-2 '}>
          <CardHeader>
            <CardTitle>Apply Accent Color</CardTitle>
          </CardHeader>

          <div className={'grid grid-cols-1 md:grid-cols-2 gap-2'}>
            {applingAccentColorOptions.map((item) => (
              <Field key={item.id} orientation="horizontal">
                <Checkbox
                  id={`apply-accent-color-${item.value}`}
                  name={`apply-accent-color-${item.value}`}
                  checked={
                    applyAccentColor[
                      item.value as keyof typeof applyAccentColor
                    ]
                  }
                  onCheckedChange={(checked) => {
                    updateAccentColors({ [item.value]: checked })
                  }}
                />
                <FieldLabel htmlFor={`apply-accent-color-${item.value}`}>
                  {item.name}
                </FieldLabel>
              </Field>
            ))}
          </div>
        </CardContent>
      ) : null}
    </div>
  )
}
