import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'
import LanguageBubbleModeOpts from './language-subitems/language-bubble-mode-opts'
import LanguageGridModeOpts from './language-subitems/language-grid-mode-opts'
import LanguageLevelModeOpts from './language-subitems/language-level-mode-opts'
import LanguageRowModeOpts from './language-subitems/language-row-mode-opts'
import LanguageTextModeOpts from './language-subitems/language-text-mode-opts'

/*
{"customizationUpdates":[
  {"value":"grid","path":"languageDisplay.selected"}
]}

{"customizationUpdates":[
  {"value":"text","path":"languageDisplay.selected"},
  {"value":"newLine","path":"languageDisplay.text"}
]}

{"customizationUpdates":[
  {"value":"text","path":"languageDisplay.selected"},
  {"value":"wrap","path":"languageDisplay.text"}
]}

{"customizationUpdates":[
  {"value":"bubble","path":"languageDisplay.selected"}
]}

{"customizationUpdates":[
  {"value":"level","path":"languageDisplay.selected"}
]}
*/

export type LanguageDisplay = 'grid' | 'newLine' | 'wrap' | 'bubble' | 'level'
export type LanguageDisplayGridColumns = 'one' | 'two' | 'three' | 'four'
export type LanguageSubinfoSeparator = 'colon' | 'dash' | 'bracket'
export type LanguageDisplayText = 'bullet' | 'pipe' | 'wrap'
export type LanguageDisplayLevel = 'text' | 'dots' | 'bar'

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'
// const animationClass =
//   'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

export default function EditLanguages() {
  const {
    customization: { languageDisplay },
    updateLanguageDisplay,
  } = useCustomizationStore()

  const selectedLanguageMode = languageDisplay.selected

  function handleLanguageModeUpdate(val: string) {
    switch (val) {
      case 'grid': {
        updateLanguageDisplay({
          ...languageDisplay,
          selected: 'grid',
        })
        break
      }
      case 'rows': {
        updateLanguageDisplay({
          ...languageDisplay,
          selected: 'rows',
          text: 'newLine',
        })
        break
      }
      case 'text': {
        updateLanguageDisplay({
          ...languageDisplay,
          selected: 'text',
          text: 'wrap',
        })
        break
      }
      case 'bubble': {
        updateLanguageDisplay({
          ...languageDisplay,
          selected: 'bubble',
        })
        break
      }
      case 'level': {
        updateLanguageDisplay({
          ...languageDisplay,
          selected: 'level',
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
        <CardTitle>Languages</CardTitle>
      </CardHeader>

      <CardContent>
        <ToggleGroup
          type="single"
          size={'lg'}
          className={'gap-3'}
          value={selectedLanguageMode}
          onValueChange={(value) => {
            if (value) {
              handleLanguageModeUpdate(value)
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
          <ToggleGroupItem value="level" className={cn('group', toggleState)}>
            Level
          </ToggleGroupItem>
        </ToggleGroup>
      </CardContent>

      <CardContent>
        <LanguageGridModeOpts />

        <LanguageRowModeOpts />

        <LanguageTextModeOpts />

        <LanguageBubbleModeOpts />

        <LanguageLevelModeOpts />
      </CardContent>
    </Card>
  )
}
