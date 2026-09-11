import { InfoIcon } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '#/components/ui/alert'
import { Button } from '#/components/ui/button'
import { CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'
const animationClass =
  'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

/*
when columns is selected, then dateLocationPosition:dateLocationRight (default),

{"customizationUpdates":[{"value":"dateLocationRight","path":"entryLayout.displayMode"}]}
{"customizationUpdates":[{"value":"dateLocationLeft","path":"entryLayout.displayMode"}]}
{"customizationUpdates":[{"value":"dateContentLocation","path":"entryLayout.displayMode"}]}

dateLocationPosition:
{"customizationUpdates":[{"value":"below","path":"entryLayout.fullWidthDateLocationPlacement"}]}
{"customizationUpdates":[{"value":"right","path":"entryLayout.fullWidthDateLocationPlacement"}]}
*/

export default function DateAndLocationPosition() {
  const {
    customization: { entryLayout },
    updateEntryLayout,
  } = useCustomizationStore()

  const isFullWidthModeSelected = entryLayout.displayMode === 'fullWidth'
  const isColumnsModeSelected =
    entryLayout.displayMode === 'dateLocationRight' ||
    entryLayout.displayMode === 'dateLocationLeft' ||
    entryLayout.displayMode === 'dateContentLocation'

  const isShowAlert =
    entryLayout.displayMode === 'fullWidth' &&
    entryLayout.fullWidthDateLocationPlacement === 'right'

  return (
    <CardContent className={'space-y-4'}>
      <CardHeader>
        <CardTitle>Date & Location Position</CardTitle>
      </CardHeader>

      <CardContent>
        {isFullWidthModeSelected ? (
          <ToggleGroup
            variant="outline"
            type="single"
            value={entryLayout.fullWidthDateLocationPlacement}
            onValueChange={(value) =>
              updateEntryLayout({
                ...entryLayout,
                fullWidthDateLocationPlacement: value,
              })
            }
            className="gap-2 grid grid-cols-3 w-full"
          >
            <ToggleGroupItem
              value="right"
              aria-label="Toggle right"
              className={cn('col-span-1', toggleState)}
            >
              Right
            </ToggleGroupItem>
            <ToggleGroupItem
              value="below"
              aria-label="Toggle below"
              className={cn('col-span-1', toggleState)}
            >
              Below
            </ToggleGroupItem>
          </ToggleGroup>
        ) : null}

        {isColumnsModeSelected ? (
          <ToggleGroup
            variant="outline"
            type="single"
            value={entryLayout.displayMode}
            onValueChange={(value) =>
              updateEntryLayout({
                ...entryLayout,
                displayMode: value,
              })
            }
            className="gap-2 grid grid-cols-3 w-full"
          >
            <ToggleGroupItem
              value="dateLocationRight"
              aria-label="Toggle right"
              className={cn('col-span-1', toggleState)}
            >
              Right
            </ToggleGroupItem>

            <ToggleGroupItem
              value="dateLocationLeft"
              aria-label="Toggle left"
              className={cn('col-span-1', toggleState)}
            >
              Left
            </ToggleGroupItem>
            <ToggleGroupItem
              value="dateContentLocation"
              aria-label="Toggle split"
              className={cn('col-span-1', toggleState)}
            >
              Split
            </ToggleGroupItem>
          </ToggleGroup>
        ) : null}
      </CardContent>

      {/* TODO: depends on layout section mix mode */}
      {isShowAlert ? (
        <Alert className={cn('items-center w-full', animationClass)}>
          <InfoIcon />
          <AlertTitle className="sr-only">
            Update Date & Location width
          </AlertTitle>
          <AlertDescription>
            In narrow columns, Date & Location move below the title to keep
            entries readable. Set{' '}
            <Button
              className="px-0 underline hover:no-underline"
              variant={'link'}
            >
              column width
            </Button>{' '}
            to at least 60% to keep them on the right.
          </AlertDescription>
        </Alert>
      ) : null}
    </CardContent>
  )
}
