import { InfoIcon } from 'lucide-react'
import { useId } from 'react'

import { Button } from '#/components/ui/button'
import { CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Field, FieldLabel } from '#/components/ui/field'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '#/components/ui/tooltip'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'
const animationClass =
  'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

/*
{"customizationUpdates":[
{"value":"auto","path":"entryLayout.fullWidthDateLocationRightEntryHeaderMode"}]}

{"customizationUpdates":[
{"value":"manual",
"path":"entryLayout.fullWidthDateLocationRightEntryHeaderMode"},
{
  "value":{"titleAndSubtitle":55,"dateLocation":45},
"path":"entryLayout.fullWidthDateLocationRightHeaderWidths"}]}

manual mode updates
{"customizationUpdates":[{"value":{"titleAndSubtitle":54,"dateLocation":46},"path":"entryLayout.fullWidthDateLocationRightHeaderWidths"}]}
{"customizationUpdates":[{"value":{"titleAndSubtitle":55,"dateLocation":45},"path":"entryLayout.fullWidthDateLocationRightHeaderWidths"}]}

{"customizationUpdates":[{"value":"nextLine","path":"entryLayout.fullWidthDateLocationRightSubtitlePlacement"}]}
{"customizationUpdates":[{"value":"trySameLine","path":"entryLayout.fullWidthDateLocationRightSubtitlePlacement"}]}

{"customizationUpdates":[{"value":"trySameLine","path":"entryLayout.fullWidthDateLocationRightLocationPlacement"}]}
{"customizationUpdates":[{"value":"nextLine","path":"entryLayout.fullWidthDateLocationRightLocationPlacement"}]}
*/

export default function EntryHeaderSplit() {
  const id = useId()

  const {
    customization: { entryLayout },
    updateEntryLayout,
  } = useCustomizationStore()

  const isShow =
    entryLayout.displayMode === 'fullWidth' &&
    entryLayout.fullWidthDateLocationPlacement === 'right'

  const isShowManual =
    entryLayout.fullWidthDateLocationRightEntryHeaderMode === 'manual'

  const titleAndSubtitleBtnWidth =
    entryLayout.fullWidthDateLocationRightHeaderWidths.titleAndSubtitle
  const dateAndLocationBtnWidth =
    entryLayout.fullWidthDateLocationRightHeaderWidths.dateLocation

  function handleWidth(val: string) {
    if (val === 'titleAndSubtitle') {
      if (titleAndSubtitleBtnWidth === 80) return

      updateEntryLayout({
        ...entryLayout,
        fullWidthDateLocationRightHeaderWidths: {
          ...entryLayout.fullWidthDateLocationRightHeaderWidths,
          titleAndSubtitle: titleAndSubtitleBtnWidth + 1,
          dateLocation: dateAndLocationBtnWidth - 1,
        },
      })
    }

    if (val === 'dateLocation') {
      if (dateAndLocationBtnWidth === 80) return

      updateEntryLayout({
        ...entryLayout,
        fullWidthDateLocationRightHeaderWidths: {
          ...entryLayout.fullWidthDateLocationRightHeaderWidths,
          titleAndSubtitle: titleAndSubtitleBtnWidth - 1,
          dateLocation: dateAndLocationBtnWidth + 1,
        },
      })
    }
  }

  return (
    <>
      {isShow ? (
        <CardContent className={cn('space-y-2', animationClass)}>
          <CardHeader>
            <CardTitle>Entry Header Split</CardTitle>
          </CardHeader>

          <CardContent className={'space-y-4'}>
            <ToggleGroup
              variant="outline"
              type="single"
              value={entryLayout.fullWidthDateLocationRightEntryHeaderMode}
              onValueChange={(value) => {
                if (value === 'auto') {
                  // only update header widths
                  updateEntryLayout({
                    ...entryLayout,
                    fullWidthDateLocationRightEntryHeaderMode: value,
                  })
                  return
                }
                if (value === 'manual') {
                  updateEntryLayout({
                    ...entryLayout,
                    fullWidthDateLocationRightEntryHeaderMode: value,
                    fullWidthDateLocationRightHeaderWidths: {
                      titleAndSubtitle: 55,
                      dateLocation: 45,
                    },
                  })
                }
              }}
            >
              <ToggleGroupItem
                value="auto"
                aria-label="Toggle auto"
                className={cn(toggleState)}
              >
                Auto
              </ToggleGroupItem>
              <ToggleGroupItem
                value="manual"
                aria-label="Toggle manual"
                className={cn(toggleState)}
              >
                Manual
              </ToggleGroupItem>
            </ToggleGroup>

            {isShowManual ? (
              <CardContent
                className={cn('space-y-2 border-l-3', animationClass)}
              >
                <div className={'flex items-center gap-2'}>
                  <Field style={{ width: `${titleAndSubtitleBtnWidth}%` }}>
                    <FieldLabel
                      htmlFor="titleAndSubtitle"
                      className="font-normal"
                    >
                      Title & Subtitle {titleAndSubtitleBtnWidth}%
                    </FieldLabel>
                    <Button
                      variant={'outline'}
                      onClick={() => handleWidth('titleAndSubtitle')}
                      disabled={titleAndSubtitleBtnWidth === 80}
                    >
                      +
                    </Button>
                  </Field>
                  <Field style={{ width: `${dateAndLocationBtnWidth}%` }}>
                    <FieldLabel
                      htmlFor="dateAndLocation"
                      className="font-normal"
                    >
                      Date & Location {dateAndLocationBtnWidth}%
                    </FieldLabel>
                    <Button
                      variant={'outline'}
                      onClick={() => handleWidth('dateLocation')}
                      disabled={dateAndLocationBtnWidth === 80}
                    >
                      +
                    </Button>
                  </Field>
                </div>

                <div className={'space-y-2'}>
                  <CardHeader>Subtitle Placement</CardHeader>
                  <ToggleGroup
                    id={`${id}-subtitle-placement`}
                    variant="outline"
                    type="single"
                    value={
                      entryLayout.fullWidthDateLocationRightSubtitlePlacement
                    }
                    onValueChange={(value) => {
                      if (value) {
                        updateEntryLayout({
                          ...entryLayout,
                          fullWidthDateLocationRightSubtitlePlacement: value,
                        })
                      }
                    }}
                  >
                    <ToggleGroupItem
                      value="trySameLine"
                      aria-label="Toggle trySameLine"
                      className={cn(toggleState)}
                    >
                      Try Same Line
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="nextLine"
                      aria-label="Toggle nextLine"
                      className={cn(toggleState)}
                    >
                      Next Line
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>

                <div className={'space-y-2'}>
                  <CardHeader className={'flex items-center gap-2'}>
                    Location Placement
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size={'icon-sm'} variant={'ghost'}>
                          <InfoIcon />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className={'max-w-48'}>
                        <p>
                          Only applies when both date and location are shown.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </CardHeader>
                  <ToggleGroup
                    id={`${id}-location-placement`}
                    variant="outline"
                    type="single"
                    value={
                      entryLayout.fullWidthDateLocationRightLocationPlacement
                    }
                    onValueChange={(value) => {
                      if (value) {
                        updateEntryLayout({
                          ...entryLayout,
                          fullWidthDateLocationRightLocationPlacement: value,
                        })
                      }
                    }}
                  >
                    <ToggleGroupItem
                      value="trySameLine"
                      aria-label="Toggle trySameLine"
                      className={cn(toggleState)}
                    >
                      Try Same Line
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="nextLine"
                      aria-label="Toggle nextLine"
                      className={cn(toggleState)}
                    >
                      Next Line
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </CardContent>
            ) : null}
          </CardContent>
        </CardContent>
      ) : null}
    </>
  )
}
