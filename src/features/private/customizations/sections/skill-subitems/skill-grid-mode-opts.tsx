import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'

/*
grid mode:
{"customizationUpdates":[{"value":"one","path":"skillDisplay.grid.columns"}]}
{"customizationUpdates":[{"value":"two","path":"skillDisplay.grid.columns"}]}
{"customizationUpdates":[{"value":"three","path":"skillDisplay.grid.columns"}]}
{"customizationUpdates":[{"value":"four","path":"skillDisplay.grid.columns"}]}
*/

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'

const animationClass =
  'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

export default function SkillGridModeOpts() {
  const {
    customization: { skillDisplay },
    updateSkillDisplay,
  } = useCustomizationStore()

  const isGridMode = skillDisplay.selected === 'grid'

  const currentGridModeCols = skillDisplay.grid.columns

  return (
    <>
      {isGridMode ? (
        <div className={cn(animationClass)}>
          <ToggleGroup
            type="single"
            size={'lg'}
            className={'gap-3'}
            value={currentGridModeCols}
            onValueChange={(value) => {
              if (value) {
                updateSkillDisplay({
                  ...skillDisplay,
                  grid: {
                    ...skillDisplay.grid,
                    columns: value,
                  },
                })
              }
            }}
          >
            <ToggleGroupItem value="one" className={cn('group', toggleState)}>
              <svg fill="currentColor" width="24" height="16">
                <rect width="24" height="16" rx="1"></rect>
              </svg>
            </ToggleGroupItem>
            <ToggleGroupItem value="two" className={cn('group', toggleState)}>
              <svg fill="currentColor" width="11" height="16">
                <rect width="11" height="16" rx="1"></rect>
              </svg>
              <svg fill="currentColor" width="11" height="16">
                <rect width="11" height="16" rx="1"></rect>
              </svg>
            </ToggleGroupItem>
            <ToggleGroupItem value="three" className={cn('group', toggleState)}>
              <svg fill="currentColor" width="7" height="16">
                <rect width="7" height="16" rx="1"></rect>
              </svg>
              <svg fill="currentColor" width="7" height="16">
                <rect width="7" height="16" rx="1"></rect>
              </svg>
              <svg fill="currentColor" width="7" height="16">
                <rect width="7" height="16" rx="1"></rect>
              </svg>
            </ToggleGroupItem>
            <ToggleGroupItem value="four" className={cn('group', toggleState)}>
              <svg fill="currentColor" width="5" height="16">
                <rect width="5" height="16" rx="1"></rect>
              </svg>
              <svg fill="currentColor" width="5" height="16">
                <rect width="5" height="16" rx="1"></rect>
              </svg>
              <svg fill="currentColor" width="5" height="16">
                <rect width="5" height="16" rx="1"></rect>
              </svg>
              <svg fill="currentColor" width="5" height="16">
                <rect width="5" height="16" rx="1"></rect>
              </svg>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      ) : null}
    </>
  )
}
