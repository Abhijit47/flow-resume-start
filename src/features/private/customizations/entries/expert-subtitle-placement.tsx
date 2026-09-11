import { useId } from 'react'

import { CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'
const animationClass =
  'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

/*
{"customizationUpdates":[{"value":"trySameLine","path":"expert.subTitlePlacement"}]}
{"customizationUpdates":[{"value":"nextLine","path":"expert.subTitlePlacement"}]}
*/

export default function ExpertSubtitlePlacement() {
  const id = useId()

  const {
    customization: { entryLayout, expert },
    updateExpert,
  } = useCustomizationStore()

  const isShow =
    entryLayout.displayMode === 'dateLocationRight' ||
    entryLayout.displayMode === 'dateLocationLeft' ||
    entryLayout.displayMode === 'dateContentLocation'
  return (
    <>
      {isShow ? (
        <CardContent className={cn('space-y-2', animationClass)}>
          <CardHeader>
            <CardTitle>Subtitle Placement</CardTitle>
          </CardHeader>

          <CardContent>
            <ToggleGroup
              id={`${id}-expert-subtitle-placement`}
              value={expert.subTitlePlacement}
              onValueChange={(value) =>
                updateExpert({ ...expert, subTitlePlacement: value })
              }
              variant="outline"
              type="single"
            >
              <ToggleGroupItem
                value="trySameLine"
                aria-label="Toggle try same line"
                className={cn(toggleState)}
              >
                Try Same Line
              </ToggleGroupItem>
              <ToggleGroupItem
                value="belowTitle"
                aria-label="Toggle below title"
                className={cn(toggleState)}
              >
                Below Title
              </ToggleGroupItem>
            </ToggleGroup>
          </CardContent>
        </CardContent>
      ) : null}
    </>
  )
}
