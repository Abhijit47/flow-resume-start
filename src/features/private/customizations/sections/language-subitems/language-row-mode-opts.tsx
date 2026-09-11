import { Checkbox } from '#/components/ui/checkbox'
import { Field, FieldLabel } from '#/components/ui/field'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'

/*
rows mode:
{"customizationUpdates":[{"value":false,"path":"languageDisplay.addRowSpacing"}]}
{"customizationUpdates":[{"value":true,"path":"languageDisplay.addRowSpacing"}]}
{"customizationUpdates":[{"value":true/false,"path":"languageDisplay.showBulletForNewLine"}]}

{"customizationUpdates":[{"value":"colon","path":"languageDisplay.subinfoSeparator"}]}
{"customizationUpdates":[{"value":"dash","path":"languageDisplay.subinfoSeparator"}]}
{"customizationUpdates":[{"value":"bracket","path":"languageDisplay.subinfoSeparator"}]}
*/

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'

const animationClass =
  'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

export default function LanguageRowModeOpts() {
  const {
    customization: { languageDisplay },
    updateLanguageDisplay,
  } = useCustomizationStore()

  const isRowMode = languageDisplay.selected === 'rows'

  const selectedAddRowSpacing = languageDisplay.addRowSpacing.toString()
  const selectedSubInfoSeparator = languageDisplay.subinfoSeparator

  return (
    <>
      {isRowMode ? (
        <>
          <div className={cn('space-y-4', animationClass)}>
            <p>Row Spacing</p>
            <div className={'flex gap-3'}>
              <ToggleGroup
                type="single"
                size={'lg'}
                className={'gap-3'}
                value={selectedAddRowSpacing}
                onValueChange={(val) => {
                  if (val) {
                    updateLanguageDisplay({
                      ...languageDisplay,
                      addRowSpacing: val === 'true',
                    })
                  } else {
                    updateLanguageDisplay({
                      ...languageDisplay,
                      addRowSpacing: false,
                    })
                  }
                }}
              >
                <ToggleGroupItem
                  value={'false'}
                  className={cn('group', toggleState)}
                >
                  Tight
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="true"
                  className={cn('group', toggleState)}
                >
                  Spacious
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <Field orientation="horizontal">
              <Checkbox
                id="showBulletForNewLine"
                name="showBulletForNewLine"
                checked={languageDisplay.showBulletForNewLine}
                onCheckedChange={(checked) => {
                  updateLanguageDisplay({
                    ...languageDisplay,
                    showBulletForNewLine: !!checked,
                  })
                }}
              />
              <FieldLabel htmlFor="showBulletForNewLine">
                Start rows with bullets
              </FieldLabel>
            </Field>

            <div className={'space-y-4'}>
              <p>Subinfo Style</p>

              <ToggleGroup
                type="single"
                value={selectedSubInfoSeparator}
                onValueChange={(val) => {
                  if (val) {
                    updateLanguageDisplay({
                      ...languageDisplay,
                      subinfoSeparator: val,
                    })
                  }
                }}
              >
                <ToggleGroupItem
                  value="colon"
                  className={cn('group', toggleState)}
                >
                  : Colon
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="dash"
                  className={cn('group', toggleState)}
                >
                  &mdash; Dash
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="bracket"
                  className={cn('group', toggleState)}
                >{`() Bracket`}</ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}
