import { IconLink } from '@tabler/icons-react'

import { CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'
const toggleStateInvert = 'ring-1 ring-accent data-[state=on]:ring-background'
const animationClass =
  'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

type HeaderIconFrame = 'circle' | 'rounded' | 'square'
type HeaderIconFrameStyle = 'filled' | 'outline'
// export type Combination = 'none' | `${HeaderIconFrame}-${HeaderIconFrameStyle}`

/*
none mode:
{"customizationUpdates":[{"value":"none","path":"header.iconFrame"}]}
{"customizationUpdates":[{"value":"filled","path":"header.iconFrameStyle"}]}

circle-filled mode:
{"customizationUpdates":[{"value":"circle","path":"header.iconFrame"}]}
{"customizationUpdates":[{"value":"filled","path":"header.iconFrameStyle"}]}

rounded-filled mode:
{"customizationUpdates":[{"value":"rounded","path":"header.iconFrame"}]}
{"customizationUpdates":[{"value":"filled","path":"header.iconFrameStyle"}]}

square-filled mode:
{"customizationUpdates":[{"value":"square","path":"header.iconFrame"}]}
{"customizationUpdates":[{"value":"filled","path":"header.iconFrameStyle"}]}

circle-outline mode:
{"customizationUpdates":[{"value":"circle","path":"header.iconFrame"}]}
{"customizationUpdates":[{"value":"outline","path":"header.iconFrameStyle"}]}

rounded-outline mode:
{"customizationUpdates":[{"value":"rounded","path":"header.iconFrame"}]}
{"customizationUpdates":[{"value":"outline","path":"header.iconFrameStyle"}]}

square-outline mode:
{"customizationUpdates":[{"value":"square","path":"header.iconFrame"}]}
{"customizationUpdates":[{"value":"outline","path":"header.iconFrameStyle"}]}
 */

export default function HeaderIconStyles() {
  const {
    customization: { header },
    updateHeader,
  } = useCustomizationStore()

  const isShow = header.detailsDisplayLeftRight === 'icon'

  return (
    <>
      {isShow ? (
        <CardContent className={cn('space-y-4', animationClass)}>
          <CardHeader>
            <CardTitle>Icon Style</CardTitle>
          </CardHeader>

          <ToggleGroup
            type="single"
            size={'lg'}
            value={header.iconFrame + '-' + header.iconFrameStyle}
            onValueChange={(value) => {
              if (value) {
                const [iconFrame, iconFrameStyle] = value.split('-') as [
                  HeaderIconFrame,
                  HeaderIconFrameStyle,
                ]
                updateHeader({
                  ...header,
                  iconFrame,
                  iconFrameStyle,
                })
              }
            }}
          >
            <ToggleGroupItem value="none-filled" className={cn(toggleState)}>
              <IconLink />
            </ToggleGroupItem>

            <ToggleGroupItem
              value="circle-filled"
              className={cn(
                'bg-primary data-[state=on]:bg-primary hover:bg-primary/90 rounded-full',
                toggleStateInvert,
              )}
            >
              <IconLink className={'stroke-secondary'} />
            </ToggleGroupItem>

            <ToggleGroupItem
              value="rounded-filled"
              className={cn(
                'bg-primary data-[state=on]:bg-primary hover:bg-primary/90',
                toggleStateInvert,
              )}
            >
              <IconLink className={'stroke-secondary'} />
            </ToggleGroupItem>

            <ToggleGroupItem
              value="square-filled"
              className={cn(
                'bg-primary data-[state=on]:bg-primary hover:bg-primary/90 rounded-none',
                toggleStateInvert,
              )}
            >
              <IconLink className={'stroke-secondary'} />
            </ToggleGroupItem>

            <ToggleGroupItem
              value="circle-outline"
              className={cn('rounded-full', toggleState)}
            >
              <IconLink />
            </ToggleGroupItem>

            <ToggleGroupItem
              value="rounded-outline"
              className={cn(toggleState)}
            >
              <IconLink />
            </ToggleGroupItem>

            <ToggleGroupItem
              value="square-outline"
              className={cn('rounded-none', toggleState)}
            >
              <IconLink />
            </ToggleGroupItem>
          </ToggleGroup>
        </CardContent>
      ) : null}
    </>
  )
}
