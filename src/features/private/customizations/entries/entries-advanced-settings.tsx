import {
  ChevronDownCircleIcon,
  ChevronUpCircleIcon,
  InfoIcon,
} from 'lucide-react'
import { useId, useState } from 'react'

import { Button } from '#/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Checkbox } from '#/components/ui/checkbox'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '#/components/ui/collapsible'
import { Field, FieldLabel } from '#/components/ui/field'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '#/components/ui/tooltip'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'
import ColumnsColWidth from './columns-col-width'

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'
const animationClass =
  'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

/*
{"customizationUpdates":[{"value":"normal","path":"entryLayout.subtitleStyle"}]}
{"customizationUpdates":[{"value":"bold","path":"entryLayout.subtitleStyle"}]}
{"customizationUpdates":[{"value":"italic","path":"entryLayout.subtitleStyle"}]}

{"customizationUpdates":[{"value":"normal","path":"entryLayout.dateStyle"}]}
{"customizationUpdates":[{"value":"bold","path":"entryLayout.dateStyle"}]}
{"customizationUpdates":[{"value":"italic","path":"entryLayout.dateStyle"}]}

{"customizationUpdates":[{"value":"normal","path":"entryLayout.locationStyle"}]}
{"customizationUpdates":[{"value":"bold","path":"entryLayout.locationStyle"}]}
{"customizationUpdates":[{"value":"italic","path":"entryLayout.locationStyle"}]}

{"customizationUpdates":[{"value":"0","path":"entryLayout.bodyIndentation"}]}
{"customizationUpdates":[{"value":"1","path":"entryLayout.bodyIndentation"}]}

{"customizationUpdates":[{"value":"bullet","path":"advanced.listStyle"}]}
{"customizationUpdates":[{"value":"hyphen","path":"advanced.listStyle"}]}

{"customizationUpdates":[{"value":"dateLocation","path":"entryLayout.dateLocationOrder"}]}
{"customizationUpdates":[{"value":"locationDate","path":"entryLayout.dateLocationOrder"}]}

{"customizationUpdates":[{"value":"trySameLine","path":"entryLayout.fullWidthDateLocationBelowSubtitlePlacement"}]}
{"customizationUpdates":[{"value":"nextLine","path":"entryLayout.fullWidthDateLocationBelowSubtitlePlacement"}]}

{"customizationUpdates":[{"value":"trySameLine","path":"entryLayout.fullWidthDateLocationBelowLocationPlacement"}]}
{"customizationUpdates":[{"value":"nextLine","path":"entryLayout.fullWidthDateLocationBelowLocationPlacement"}]}
*/

export default function EntriesAdvancedSettings() {
  const [isOpen, setIsOpen] = useState(false)
  // const [advancedSettings, setAdvancedSettings] = useState({
  //   subtitle: 'bold', // normal, bold,  italic
  //   date: 'bold', // normal, bold,  italic
  //   location: 'bold', // normal, bold,  italic
  //   descriptionIndentation: false, // true, false
  //   listStyle: 'bullet', // bullet, hyphen
  //   dateAndLocationOrder: 'dateLocation', // dateLocation, locationDate
  // })

  const id = useId()

  // function handleAdvancedSettingsChange(
  //   key: keyof typeof advancedSettings,
  //   value: string | boolean,
  // ) {
  //   setAdvancedSettings((prevSettings) => ({
  //     ...prevSettings,
  //     [key]: value,
  //   }))
  // }

  const {
    customization: { entryLayout, advanced },
    updateEntryLayout,
    updateAdvanced,
  } = useCustomizationStore()

  const isShowSubtitleAndLocationPlacement =
    entryLayout.fullWidthDateLocationPlacement === 'below'

  const isCheckedDescriptionIndentation =
    entryLayout.bodyIndentation === '1' ? true : false

  return (
    <CardContent>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button
            size={'lg'}
            variant={'outline'}
            className={'w-full justify-between'}
          >
            Advanced Settings{' '}
            {isOpen ? (
              <ChevronUpCircleIcon
                className={'size-4 transition-transform duration-300'}
              />
            ) : (
              <ChevronDownCircleIcon
                className={'size-4 transition-transform duration-300'}
              />
            )}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className={cn('space-y-3 p-2', animationClass)}>
          <ColumnsColWidth />

          <Card>
            <CardHeader>
              <CardTitle>Subtitle</CardTitle>
            </CardHeader>
            <CardContent>
              <ToggleGroup
                variant="outline"
                type="single"
                value={entryLayout.subtitleStyle}
                onValueChange={(value) =>
                  updateEntryLayout({
                    ...entryLayout,
                    subtitleStyle: value,
                  })
                }
              >
                <ToggleGroupItem
                  value="normal"
                  aria-label="Toggle normal"
                  className={cn(toggleState)}
                >
                  A
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="bold"
                  aria-label="Toggle bold"
                  className={cn('font-semibold', toggleState)}
                >
                  A
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="italic"
                  aria-label="Toggle italic"
                  className={cn('italic', toggleState)}
                >
                  A
                </ToggleGroupItem>
              </ToggleGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Date</CardTitle>
            </CardHeader>
            <CardContent>
              <ToggleGroup
                variant="outline"
                type="single"
                value={entryLayout.dateStyle}
                onValueChange={(value) =>
                  updateEntryLayout({
                    ...entryLayout,
                    dateStyle: value,
                  })
                }
              >
                <ToggleGroupItem
                  value="normal"
                  aria-label="Toggle normal"
                  className={cn(toggleState)}
                >
                  A
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="bold"
                  aria-label="Toggle bold"
                  className={cn('font-semibold', toggleState)}
                >
                  A
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="italic"
                  aria-label="Toggle italic"
                  className={cn('italic', toggleState)}
                >
                  A
                </ToggleGroupItem>
              </ToggleGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              <ToggleGroup
                variant="outline"
                type="single"
                value={entryLayout.locationStyle}
                onValueChange={(value) =>
                  updateEntryLayout({
                    ...entryLayout,
                    locationStyle: value,
                  })
                }
              >
                <ToggleGroupItem
                  value="normal"
                  aria-label="Toggle normal"
                  className={cn(toggleState)}
                >
                  A
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="bold"
                  aria-label="Toggle bold"
                  className={cn('font-semibold', toggleState)}
                >
                  A
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="italic"
                  aria-label="Toggle italic"
                  className={cn('italic', toggleState)}
                >
                  A
                </ToggleGroupItem>
              </ToggleGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Description Indentation</CardTitle>
            </CardHeader>
            <CardContent>
              <Field orientation="horizontal">
                <Checkbox
                  id="indent-body"
                  checked={isCheckedDescriptionIndentation}
                  onCheckedChange={(checked) => {
                    updateEntryLayout({
                      ...entryLayout,
                      bodyIndentation: checked ? '1' : '0',
                    })
                  }}
                />
                <FieldLabel htmlFor="indent-body" className="font-normal">
                  Indent body
                </FieldLabel>
              </Field>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>List Style</CardTitle>
            </CardHeader>
            <CardContent>
              <ToggleGroup
                variant="outline"
                type="single"
                value={advanced.listStyle}
                onValueChange={(value) => {
                  if (value) {
                    updateAdvanced({
                      ...advanced,
                      listStyle: value,
                    })
                  }
                }}
              >
                <ToggleGroupItem
                  value="bullet"
                  aria-label="Toggle bullet"
                  className={cn(toggleState)}
                >
                  <span className={'size-1 rounded-full bg-foreground'}>
                    &nbsp;
                  </span>
                  Bullet
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="hyphen"
                  aria-label="Toggle hyphen"
                  className={cn(toggleState)}
                >
                  <span className={'w-3 h-px bg-foreground'}>&nbsp;</span>
                  Hyphen
                </ToggleGroupItem>
              </ToggleGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Date & Location Order</CardTitle>
            </CardHeader>
            <CardContent>
              <ToggleGroup
                variant="outline"
                type="single"
                className={'w-full grid grid-cols-2 gap-2'}
                value={entryLayout.dateLocationOrder}
                onValueChange={(value) => {
                  if (value) {
                    updateEntryLayout({
                      ...entryLayout,
                      dateLocationOrder: value,
                    })
                  }
                }}
              >
                <ToggleGroupItem
                  value="dateLocation"
                  aria-label="Toggle dateLocation"
                  className={cn('w-full', toggleState)}
                >
                  Date - Location
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="locationDate"
                  aria-label="Toggle dateLocation"
                  className={cn('w-full', toggleState)}
                >
                  Location - Date
                </ToggleGroupItem>
              </ToggleGroup>
            </CardContent>
          </Card>

          {isShowSubtitleAndLocationPlacement ? (
            <>
              <Card className={cn(animationClass)}>
                <CardHeader>Subtitle Placement</CardHeader>
                <CardContent>
                  <ToggleGroup
                    id={`${id}-subtitle-placement`}
                    variant="outline"
                    type="single"
                    value={
                      entryLayout.fullWidthDateLocationBelowSubtitlePlacement
                    }
                    onValueChange={(value) => {
                      if (value) {
                        updateEntryLayout({
                          ...entryLayout,
                          fullWidthDateLocationBelowSubtitlePlacement: value,
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
                </CardContent>
              </Card>

              <Card className={cn(animationClass)}>
                <CardHeader className={'flex items-center gap-2'}>
                  Location Placement
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size={'icon-sm'} variant={'ghost'}>
                        <InfoIcon />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className={'max-w-48'}>
                      <p>Only applies when both date and location are shown.</p>
                    </TooltipContent>
                  </Tooltip>
                </CardHeader>
                <CardContent>
                  <ToggleGroup
                    id={`${id}-location-placement`}
                    variant="outline"
                    type="single"
                    value={
                      entryLayout.fullWidthDateLocationBelowLocationPlacement
                    }
                    onValueChange={(value) => {
                      if (value) {
                        updateEntryLayout({
                          ...entryLayout,
                          fullWidthDateLocationBelowLocationPlacement: value,
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
                </CardContent>
              </Card>
            </>
          ) : null}
        </CollapsibleContent>
      </Collapsible>
    </CardContent>
  )
}
