import { Checkbox } from '#/components/ui/checkbox'
import { Field, FieldLabel } from '#/components/ui/field'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'

/*
rows mode:
{"customizationUpdates":[{"value":false,"path":"certificateDisplay.addRowSpacing"}]}
{"customizationUpdates":[{"value":true,"path":"certificateDisplay.addRowSpacing"}]}

{"customizationUpdates":[{"value":true/false,"path":"certificateDisplay.showBulletForNewLine"}]}

{"customizationUpdates":[{"value":"colon","path":"certificateDisplay.subinfoSeparator"}]}
{"customizationUpdates":[{"value":"dash","path":"certificateDisplay.subinfoSeparator"}]}
{"customizationUpdates":[{"value":"bracket","path":"certificateDisplay.subinfoSeparator"}]}
*/

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'
const animationClass =
  'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

export default function CertificateRowModeOpts() {
  const {
    customization: { certificateDisplay },
    updateCertificateDisplay,
  } = useCustomizationStore()

  const isRowMode = certificateDisplay.selected === 'rows'

  const selectedAddRowSpacing = certificateDisplay.addRowSpacing.toString()
  const selectedSubInfoSeparator = certificateDisplay.subinfoSeparator

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
                  updateCertificateDisplay({
                    ...certificateDisplay,
                    addRowSpacing: val === 'true',
                  })
                } else {
                  updateCertificateDisplay({
                    ...certificateDisplay,
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
              checked={certificateDisplay.showBulletForNewLine}
              onCheckedChange={(checked) => {
                updateCertificateDisplay({
                  ...certificateDisplay,
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
                  updateCertificateDisplay({
                    ...certificateDisplay,
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
