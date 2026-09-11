import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'
import SkillBubbleModeOpts from './skill-subitems/skill-bubble-mode-opts'
import SkillGridModeOpts from './skill-subitems/skill-grid-mode-opts'
import SkillLevelModeOpts from './skill-subitems/skill-level-mode-opts'
import SkillRowModeOpts from './skill-subitems/skill-row-mode-opts'
import SkillTextModeOpts from './skill-subitems/skill-text-mode-opts'

export type SkillDisplay = 'grid' | 'newLine' | 'wrap' | 'bubble' | 'level'
export type SkillDisplayGridColumns = 'one' | 'two' | 'three' | 'four'
export type SkillSubinfoSeparator = 'colon' | 'dash' | 'bracket'
export type SkillDisplayText = 'bullet' | 'pipe' | 'wrap'
export type SkillDisplayLevel = 'text' | 'dots' | 'bar'

/*
<div class="gap-2 grid grid-cols-3 mq5:grid-cols-5">

<label class="hover:opacity-80 cursor-pointer">
<input class="invisible fixed opacity-0" type="radio" name="skillDisplaySelected" value="grid" checked="">
<div class="flex justify-center items-center rounded-xl w-full h-10 text-sm capitalize cursor-pointer twChecked--unchecked">Grid</div></label>

### CONFLICT with API REQUEST
<label class="hover:opacity-80 cursor-pointer">
<input class="invisible fixed opacity-0" type="radio" name="skillDisplaySelected" value="rows">
<div class="flex justify-center items-center rounded-xl w-full h-10 text-sm capitalize cursor-pointer twChecked--unchecked">Rows</div>
</label>

<label class="hover:opacity-80 cursor-pointer">
<input class="invisible fixed opacity-0" type="radio" name="skillDisplaySelected" value="text">
<div class="flex justify-center items-center rounded-xl w-full h-10 text-sm capitalize cursor-pointer twChecked--unchecked">Compact</div></label>

<label class="hover:opacity-80 cursor-pointer">
<input class="invisible fixed opacity-0" type="radio" name="skillDisplaySelected" value="bubble">
<div class="flex justify-center items-center rounded-xl w-full h-10 text-sm capitalize cursor-pointer twChecked--unchecked">Bubble</div></label>

<label class="hover:opacity-80 cursor-pointer">
<input class="invisible fixed opacity-0" type="radio" name="skillDisplaySelected" value="level">
<div class="flex justify-center items-center rounded-xl w-full h-10 text-sm capitalize cursor-pointer twChecked--checked">Level</div></label>
</div>
*/

/*
API Request
{"customizationUpdates":[
  {"value":"grid","path":"skillDisplay.selected"}
]}

{"customizationUpdates":[
  {"value":"text","path":"skillDisplay.selected"},
  {"value":"newLine","path":"skillDisplay.text"}
]}

{"customizationUpdates":[
  {"value":"text","path":"skillDisplay.selected"},
  {"value":"wrap","path":"skillDisplay.text"}
]}

{"customizationUpdates":[
  {"value":"bubble","path":"skillDisplay.selected"}
]}

{"customizationUpdates":[
  {"value":"level","path":"skillDisplay.selected"}
]}
*/

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'

// const animationClass =
//   'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

export default function EditSkills() {
  const {
    customization: { skillDisplay },
    updateSkillDisplay,
  } = useCustomizationStore()

  const selectedSkillMode = skillDisplay.selected

  function handleSkillModeUpdate(val: string) {
    switch (val) {
      case 'grid': {
        updateSkillDisplay({
          ...skillDisplay,
          selected: 'grid',
        })
        break
      }
      case 'rows': {
        updateSkillDisplay({
          ...skillDisplay,
          selected: 'rows',
          text: 'newLine',
        })
        break
      }
      case 'text': {
        updateSkillDisplay({
          ...skillDisplay,
          selected: 'text',
          text: 'wrap',
        })
        break
      }
      case 'bubble': {
        updateSkillDisplay({
          ...skillDisplay,
          selected: 'bubble',
        })
        break
      }
      case 'level': {
        updateSkillDisplay({
          ...skillDisplay,
          selected: 'level',
        })
        break
      }
      default: {
        break
      }
    }
  }

  // scenario:
  // if no skills dont show this section
  // if skills but hidden then show some message only ex.(To see design options, add skills.)

  return (
    <Card className={''}>
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <ToggleGroup
          type="single"
          size={'lg'}
          className={'gap-3'}
          value={selectedSkillMode}
          onValueChange={(value) => {
            if (value) {
              handleSkillModeUpdate(value)
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
        <SkillGridModeOpts />

        <SkillRowModeOpts />

        <SkillTextModeOpts />

        <SkillBubbleModeOpts />

        <SkillLevelModeOpts />
      </CardContent>
    </Card>
  )
}
