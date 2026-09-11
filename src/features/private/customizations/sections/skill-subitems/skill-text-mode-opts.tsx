import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'

/*
compact mode:
{"customizationUpdates":[{"value":"bullet","path":"skillDisplay.text"}]}
{"customizationUpdates":[{"value":"pipe","path":"skillDisplay.text"}]}
{"customizationUpdates":[{"value":"wrap","path":"skillDisplay.text"}]}

{"customizationUpdates":[{"value":"colon","path":"skillDisplay.subinfoSeparator"}]}
{"customizationUpdates":[{"value":"dash","path":"skillDisplay.subinfoSeparator"}]}
{"customizationUpdates":[{"value":"bracket","path":"skillDisplay.subinfoSeparator"}]}
*/

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'

const animationClass =
  'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

export default function SkillTextModeOpts() {
  const {
    customization: { skillDisplay },
    updateSkillDisplay,
  } = useCustomizationStore()

  const isTextMode = skillDisplay.selected === 'text'

  const selectedTextVal = skillDisplay.text

  const selectedSubInfoSeparator = skillDisplay.subinfoSeparator

  return (
    <>
      {isTextMode ? (
        <div className={cn('space-y-4', animationClass)}>
          <ToggleGroup
            type="single"
            value={selectedTextVal}
            onValueChange={(val) => {
              if (val) {
                updateSkillDisplay({
                  ...skillDisplay,
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
                  updateSkillDisplay({
                    ...skillDisplay,
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
