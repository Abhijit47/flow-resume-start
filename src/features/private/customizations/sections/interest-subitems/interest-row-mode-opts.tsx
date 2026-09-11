import { Checkbox } from '#/components/ui/checkbox'
import { Field, FieldLabel } from '#/components/ui/field'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'

/*
rows mode:
{"customizationUpdates":[{"value":false,"path":"interestDisplay.addRowSpacing"}]}
{"customizationUpdates":[{"value":true,"path":"interestDisplay.addRowSpacing"}]}
{"customizationUpdates":[{"value":true/false,"path":"interestDisplay.showBulletForNewLine"}]}

{"customizationUpdates":[{"value":"colon","path":"interestDisplay.subinfoSeparator"}]}
{"customizationUpdates":[{"value":"dash","path":"interestDisplay.subinfoSeparator"}]}
{"customizationUpdates":[{"value":"bracket","path":"interestDisplay.subinfoSeparator"}]}
*/

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'
const animationClass =
  'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

export default function InterestRowModeOpts() {
  const {
    customization: { interestDisplay },
    updateInterestDisplay,
  } = useCustomizationStore()

  const isRowMode = interestDisplay.selected === 'rows'

  const selectedAddRowSpacing = interestDisplay.addRowSpacing.toString()
  const selectedSubInfoSeparator = interestDisplay.subinfoSeparator

  return (
    <>
      {isRowMode ? (
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
                  updateInterestDisplay({
                    ...interestDisplay,
                    addRowSpacing: val === 'true',
                  })
                } else {
                  updateInterestDisplay({
                    ...interestDisplay,
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
              checked={interestDisplay.showBulletForNewLine}
              onCheckedChange={(checked) => {
                updateInterestDisplay({
                  ...interestDisplay,
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
                  updateInterestDisplay({
                    ...interestDisplay,
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
      ) : null}
    </>
  )
}
