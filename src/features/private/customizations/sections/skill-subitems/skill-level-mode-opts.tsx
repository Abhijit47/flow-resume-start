import { InfoIcon } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '#/components/ui/alert'
import { Button } from '#/components/ui/button'
import { Item, ItemActions, ItemContent, ItemTitle } from '#/components/ui/item'
import { Separator } from '#/components/ui/separator'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Field, FieldGroup } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

/*
level mode:
{"customizationUpdates":[{"value":"text","path":"skillDisplay.level.selected"}]}
{"customizationUpdates":[{"value":"dots","path":"skillDisplay.level.selected"}]}
{"customizationUpdates":[{"value":"bar","path":"skillDisplay.level.selected"}]}
*/

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'
const animationClass =
  'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

export default function SkillLevelModeOpts() {
  const isSkillsEmpty = Boolean(true) // Replace with actual logic to check if skills are empty

  const {
    customization: { skillDisplay },
    updateSkillDisplay,
  } = useCustomizationStore()

  const isLevelMode = skillDisplay.selected === 'level'

  const selectedLevelVal = skillDisplay.level.selected

  const isSelectedLevelModeAsText = skillDisplay.level.selected === 'text'

  return (
    <>
      {isLevelMode ? (
        <div className={cn('space-y-4', animationClass)}>
          <ToggleGroup
            type="single"
            size={'lg'}
            className={'gap-3'}
            value={selectedLevelVal}
            onValueChange={(val) => {
              if (val) {
                updateSkillDisplay({
                  ...skillDisplay,
                  level: {
                    ...skillDisplay.level,
                    selected: val,
                  },
                })
              }
            }}
          >
            <ToggleGroupItem value="text" className={cn('group', toggleState)}>
              Text
            </ToggleGroupItem>
            <ToggleGroupItem value="dots" className={cn('group', toggleState)}>
              Dots
            </ToggleGroupItem>
            <ToggleGroupItem value="bar" className={cn('group', toggleState)}>
              Bar
            </ToggleGroupItem>
          </ToggleGroup>

          {isSkillsEmpty ? (
            <Alert>
              <InfoIcon />
              <AlertTitle>No skills found</AlertTitle>
              <AlertDescription>
                None of your skills have a level yet. Add a level to a skill to
                make this style visible.
              </AlertDescription>
            </Alert>
          ) : null}

          {isSelectedLevelModeAsText ? (
            <Item variant="outline" className={cn(animationClass)}>
              <ItemContent>
                <ItemTitle className="text-xs">
                  Beginner, Amateur, Competent, Proficientssss, Expert
                </ItemTitle>
              </ItemContent>
              <ItemActions>
                <SkillCustomizeLevel />
              </ItemActions>
            </Item>
          ) : null}
        </div>
      ) : null}
    </>
  )
}

/*

{
	"customizationUpdates": [
		{
			"path": "skillDisplay.level",
			"value": {
				"customLabels": {
					"1": "Beginner1",
					"2": "Amateur2"
				},
				"selected": "text"
			}
		}
	]
}

{
	"customizationUpdates": [
		{
			"path": "skillDisplay.level",
			"value": {
				"customLabels": {
					"2": "Amateur2"
				},
				"selected": "text"
			}
		}
	]
}

{
	"customizationUpdates": [
		{
			"path": "skillDisplay.level",
			"value": {
				"customLabels": {
					"1": "Beginner1",
					"2": "Amateur2",
					"3": "Competent3"
				},
				"selected": "text"
			}
		}
	]
}

{
	"customizationUpdates": [
		{
			"path": "skillDisplay.level",
			"value": {
				"customLabels": {
					"1": "Beginner1",
					"2": "Amateur2",
					"3": "Competent3",
					"4": "Proficient4"
				},
				"selected": "text"
			}
		}
	]
}

{
	"customizationUpdates": [
		{
			"path": "skillDisplay.level",
			"value": {
				"customLabels": {
					"1": "Beginner1",
					"2": "Amateur2",
					"3": "Competent3",
					"4": "Proficient4",
					"5": "Expert5"
				},
				"selected": "text"
			}
		}
	]
}
when remove customLabels values then remove the key from value obj only selected can be show
*/

function SkillCustomizeLevel() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Customize
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Skills – Customize Labels</DialogTitle>
        </DialogHeader>

        <Separator />
        <FieldGroup>
          <Field>
            <Label htmlFor="level-1">Level 1</Label>
            <Input id="level-1" name="level-1" defaultValue="Beginner" />
          </Field>
          <Field>
            <Label htmlFor="level-2">Level 2</Label>
            <Input id="level-2" name="level-2" defaultValue="Amateur" />
          </Field>
          <Field>
            <Label htmlFor="level-3">Level 3</Label>
            <Input id="level-3" name="level-3" defaultValue="Competent" />
          </Field>
          <Field>
            <Label htmlFor="level-4">Level 4</Label>
            <Input id="level-4" name="level-4" defaultValue="Proficient" />
          </Field>
          <Field>
            <Label htmlFor="level-5">Level 5</Label>
            <Input id="level-5" name="level-5" defaultValue="Expert" />
          </Field>
        </FieldGroup>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
