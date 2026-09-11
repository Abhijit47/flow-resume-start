import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'

/*
bubble mode:
{"customizationUpdates":[{"value":"colon","path":"certificateDisplay.subinfoSeparator"}]}
{"customizationUpdates":[{"value":"dash","path":"certificateDisplay.subinfoSeparator"}]}
{"customizationUpdates":[{"value":"bracket","path":"certificateDisplay.subinfoSeparator"}]}
*/

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'
const animationClass =
  'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

export default function CertificateBubbleModeOpts() {
  const {
    customization: { certificateDisplay },
    updateCertificateDisplay,
  } = useCustomizationStore()

  const isBubbleMode = certificateDisplay.selected === 'bubble'

  const selectedSubInfoSeparator = certificateDisplay.subinfoSeparator

  return (
    <>
      {isBubbleMode ? (
        <div className={cn('space-y-4', animationClass)}>
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
