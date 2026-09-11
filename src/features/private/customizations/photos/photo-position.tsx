import { CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '#/components/ui/tooltip'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'

/*
{"customizationUpdates":[{"value":"left","path":"header.photoPositionHeaderOnTop"}]}
{"customizationUpdates":[{"value":"right","path":"header.photoPositionHeaderOnTop"}]}
*/

export default function PhotoPosition() {
  const {
    customization: { header },
    updateHeader,
  } = useCustomizationStore()

  const isTextAlignedStart = header.alignText === 'start'
  const isTextAlignedCenter = header.alignText === 'center'

  return (
    <CardContent className={'space-y-4'}>
      <CardHeader>
        <CardTitle>Photo Position</CardTitle>
      </CardHeader>
      <ToggleGroup
        type="single"
        size={'lg'}
        className={'gap-4'}
        value={header.photoPositionHeaderOnTop}
        onValueChange={(value) =>
          updateHeader({
            ...header,
            photoPositionHeaderOnTop: value,
          })
        }
      >
        <div className={'flex flex-col items-center gap-2'}>
          <ToggleGroupItem
            value="left"
            className={cn('group w-32 h-10', toggleState)}
            disabled={isTextAlignedCenter}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 92 26"
              // style="width: 36%;"
              className="w-full! h-4!"
            >
              <path d="M26 13c0 7.18-5.82 13-13 13S0 20.18 0 13 5.82 0 13 0s13 5.82 13 13zM90 2H36a2 2 0 00-2 2v5a2 2 0 002 2h54a2 2 0 002-2V4a2 2 0 00-2-2zm0 13H36a2 2 0 00-2 2v5a2 2 0 002 2h54a2 2 0 002-2v-5a2 2 0 00-2-2z"></path>
            </svg>
          </ToggleGroupItem>
          {!isTextAlignedStart ? (
            <Tooltip>
              <TooltipTrigger asChild disabled={isTextAlignedStart}>
                <span>Left</span>
              </TooltipTrigger>

              <TooltipContent className="max-w-40">
                <p>Set text alignment to left in &quot;Header Layout&quot;.</p>
              </TooltipContent>
            </Tooltip>
          ) : (
            <span>Left</span>
          )}
        </div>

        <div className={'flex flex-col items-center gap-2'}>
          <ToggleGroupItem
            value="top"
            className={cn('group w-32 h-10', toggleState)}
            disabled={!isTextAlignedCenter}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 92 56"
              // style="width: 32%;"
              className="w-full! h-6!"
            >
              <path d="M88.828 34H3.172C1.42 34 0 34.895 0 36v5c0 1.105 1.42 2 3.172 2h85.656C90.58 43 92 42.105 92 41v-5c0-1.105-1.42-2-3.172-2zm0 13H3.172C1.42 47 0 47.895 0 49v5c0 1.105 1.42 2 3.172 2h85.656C90.58 56 92 55.105 92 54v-5c0-1.105-1.42-2-3.172-2zM60 13c0 7.18-5.82 13-13 13s-13-5.82-13-13S39.82 0 47 0s13 5.82 13 13z"></path>
            </svg>
          </ToggleGroupItem>

          {!isTextAlignedCenter ? (
            <Tooltip>
              <TooltipTrigger asChild disabled={isTextAlignedCenter}>
                <span>Top</span>
              </TooltipTrigger>

              <TooltipContent className="max-w-40">
                <p>
                  Set text alignment to center in &quot;Header Layout&quot;.
                </p>
              </TooltipContent>
            </Tooltip>
          ) : (
            <span>Top</span>
          )}
        </div>

        <div className={'flex flex-col items-center gap-2'}>
          <ToggleGroupItem
            value="right"
            className={cn('group w-32 h-10', toggleState)}
            disabled={isTextAlignedCenter}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 92 26"
              // style="width: 36%;"
              className="w-full! h-4!"
            >
              <path d="M92 13c0 7.18-5.82 13-13 13s-13-5.82-13-13S71.82 0 79 0s13 5.82 13 13zM56 2H2a2 2 0 00-2 2v5a2 2 0 002 2h54a2 2 0 002-2V4a2 2 0 00-2-2zm0 13H2a2 2 0 00-2 2v5a2 2 0 002 2h54a2 2 0 002-2v-5a2 2 0 00-2-2z"></path>
            </svg>
          </ToggleGroupItem>

          {!isTextAlignedStart ? (
            <Tooltip>
              <TooltipTrigger asChild disabled={isTextAlignedStart}>
                <span>Right</span>
              </TooltipTrigger>

              <TooltipContent className="max-w-40">
                <p>Set text alignment to left in &quot;Header Layout&quot;.</p>
              </TooltipContent>
            </Tooltip>
          ) : (
            <span>Right</span>
          )}
        </div>
      </ToggleGroup>
    </CardContent>
  )
}
