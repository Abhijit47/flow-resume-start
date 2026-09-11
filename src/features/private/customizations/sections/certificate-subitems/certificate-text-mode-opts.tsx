import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'

/*
compact mode:
{"customizationUpdates":[{"value":"bullet","path":"certificateDisplay.text"}]}
{"customizationUpdates":[{"value":"pipe","path":"certificateDisplay.text"}]}
{"customizationUpdates":[{"value":"wrap","path":"certificateDisplay.text"}]}

{"customizationUpdates":[{"value":"colon","path":"certificateDisplay.subinfoSeparator"}]}
{"customizationUpdates":[{"value":"dash","path":"certificateDisplay.subinfoSeparator"}]}
{"customizationUpdates":[{"value":"bracket","path":"certificateDisplay.subinfoSeparator"}]}
*/

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'
const animationClass =
  'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

export default function CertificateTextModeOpts() {
  const {
    customization: { certificateDisplay },
    updateCertificateDisplay,
  } = useCustomizationStore()

  const isTextMode = certificateDisplay.selected === 'text'

  const selectedTextVal = certificateDisplay.text

  const selectedSubInfoSeparator = certificateDisplay.subinfoSeparator

  return (
    <>
      {isTextMode ? (
        <div className={cn('space-y-4', animationClass)}>
          <ToggleGroup
            type="single"
            value={selectedTextVal}
            onValueChange={(val) => {
              if (val) {
                updateCertificateDisplay({
                  ...certificateDisplay,
                  text: val,
                })
              }
            }}
          >
            <ToggleGroupItem
              value="bullet"
              className={cn('group', toggleState)}
            >
              Bullet
            </ToggleGroupItem>
            <ToggleGroupItem value="pipe" className={cn('group', toggleState)}>
              Pipe
            </ToggleGroupItem>
            <ToggleGroupItem value="wrap" className={cn('group', toggleState)}>
              Comma
            </ToggleGroupItem>
          </ToggleGroup>

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
