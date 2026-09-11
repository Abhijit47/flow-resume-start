import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'
import InterestBubbleModeOpts from './interest-subitems/interest-bubble-mode-opts'
import InterestGridModeOpts from './interest-subitems/interest-grid-mode-opts'
import InterestRowModeOpts from './interest-subitems/interest-row-mode-opts'
import InterestTextModeOpts from './interest-subitems/interest-text-mode-opts'

/*
{"customizationUpdates":[
  {"value":"grid","path":"interestDisplay.selected"}
]}

{"customizationUpdates":[
  {"value":"text","path":"interestDisplay.selected"},
  {"value":"newLine","path":"interestDisplay.text"}
]}

{"customizationUpdates":[
  {"value":"text","path":"interestDisplay.selected"},
  {"value":"wrap","path":"interestDisplay.text"}
]}

{"customizationUpdates":[
  {"value":"bubble","path":"interestDisplay.selected"}
]}
*/

export type InterestDisplay = 'grid' | 'newLine' | 'wrap' | 'bubble'
export type InterestDisplayGridColumns = 'one' | 'two' | 'three' | 'four'
export type InterestSubinfoSeparator = 'colon' | 'dash' | 'bracket'
export type InterestDisplayText = 'bullet' | 'pipe' | 'wrap'
export type InterestDisplayLevel = 'text' | 'dots' | 'bar'

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'
// const animationClass =
//   'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

export default function EditInterests() {
  const {
    customization: { interestDisplay },
    updateInterestDisplay,
  } = useCustomizationStore()

  const selectedInterestMode = interestDisplay.selected

  function handleInterestModeUpdate(val: string) {
    switch (val) {
      case 'grid': {
        updateInterestDisplay({
          ...interestDisplay,
          selected: 'grid',
        })
        break
      }
      case 'rows': {
        updateInterestDisplay({
          ...interestDisplay,
          selected: 'rows',
          text: 'newLine',
        })
        break
      }
      case 'text': {
        updateInterestDisplay({
          ...interestDisplay,
          selected: 'text',
          text: 'wrap',
        })
        break
      }
      case 'bubble': {
        updateInterestDisplay({
          ...interestDisplay,
          selected: 'bubble',
        })
        break
      }
      default: {
        break
      }
    }
  }

  return (
    <Card className={''}>
      <CardHeader>
        <CardTitle>Interests</CardTitle>
      </CardHeader>

      <CardContent>
        <ToggleGroup
          type="single"
          size={'lg'}
          className={'gap-3'}
          value={selectedInterestMode}
          onValueChange={(value) => {
            if (value) {
              handleInterestModeUpdate(value)
            }
          }}
        >
          <ToggleGroupItem value="grid" className={cn('group', toggleState)}>
            Grid
          </ToggleGroupItem>
          <ToggleGroupItem value="rows" className={cn('group', toggleState)}>
            Rows
          </ToggleGroupItem>
          <ToggleGroupItem value="text" className={cn('group', toggleState)}>
            Compact
          </ToggleGroupItem>
          <ToggleGroupItem value="bubble" className={cn('group', toggleState)}>
            Bubble
          </ToggleGroupItem>
        </ToggleGroup>
      </CardContent>

      <CardContent>
        <InterestGridModeOpts />

        <InterestRowModeOpts />

        <InterestTextModeOpts />

        <InterestBubbleModeOpts />
      </CardContent>
    </Card>
  )
}
