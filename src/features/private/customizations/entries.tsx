import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'
import { IconColumns, IconMenu2 } from '@tabler/icons-react'
import DateAndLocationPosition from './entries/date-and-location-position'
import EntriesAdvancedSettings from './entries/entries-advanced-settings'
import EntryHeaderSplit from './entries/entry-header-split'
import ExpertSubtitlePlacement from './entries/expert-subtitle-placement'

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'
// const animationClass =
//   'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

/*
displayMode:
{"customizationUpdates":[{"value":"fullWidth","path":"entryLayout.displayMode"}],"resumeId":"b9b34f83-3bea-4dbc-95be-6c06a3dd15cb"}
{"customizationUpdates":[{"value":"dateLocationRight","path":"entryLayout.displayMode"}],"resumeId":"b9b34f83-3bea-4dbc-95be-6c06a3dd15cb"}
*/

export default function Entries() {
  const {
    customization: { entryLayout },
    updateEntryLayout,
  } = useCustomizationStore()

  // track either dateLocationRight/dateLocationLeft/dateLocationLeft one of the value
  const colsMode =
    entryLayout.displayMode === 'dateLocationLeft'
      ? 'dateLocationLeft'
      : entryLayout.displayMode === 'dateLocationRight'
        ? 'dateLocationRight'
        : entryLayout.displayMode === 'dateContentLocation'
          ? 'dateContentLocation'
          : 'dateLocationRight'

  return (
    <Card>
      <CardHeader>
        <CardTitle>Entry Layout</CardTitle>
      </CardHeader>

      <CardContent className={'space-y-4'}>
        <CardHeader>
          <CardTitle>Structure</CardTitle>
        </CardHeader>

        <CardContent>
          <ToggleGroup
            type="single"
            value={entryLayout.displayMode}
            onValueChange={(value) =>
              updateEntryLayout({ ...entryLayout, displayMode: value })
            }
            variant="outline"
            spacing={2}
            size="lg"
            className={'grid grid-cols-3 gap-2 w-full'}
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <ToggleGroupItem
                value="fullWidth"
                aria-label="Full Width"
                className={cn(
                  'flex flex-col justify-center items-center rounded-xl w-full h-16',
                  toggleState,
                )}
              >
                <IconMenu2 className={'size-16'} />
              </ToggleGroupItem>
              <span>Full Width</span>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
              <ToggleGroupItem
                value={colsMode}
                aria-label="Columns"
                className={cn(
                  'flex flex-col justify-center items-center rounded-xl w-full h-16',
                  toggleState,
                )}
              >
                <IconColumns className={'size-16'} />
              </ToggleGroupItem>
              <span>Columns</span>
            </div>
          </ToggleGroup>
        </CardContent>
      </CardContent>

      <DateAndLocationPosition />

      <EntryHeaderSplit />

      <ExpertSubtitlePlacement />

      <EntriesAdvancedSettings />
    </Card>
  )
}
