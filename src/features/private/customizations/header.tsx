import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'
import HeaderAdvancedSettings from './headers/header-advanced-settings'
import HeaderDetailsArrangement from './headers/header-details-arrangement'
import HeaderIconStyles from './headers/header-icon-styles'

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'
// const toggleStateInvert = 'ring-1 ring-accent data-[state=on]:ring-background'
// const animationClass =
//   'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

type HeaderIconFrame = 'circle' | 'rounded' | 'square'
type HeaderIconFrameStyle = 'filled' | 'outline'
export type Combination = 'none' | `${HeaderIconFrame}-${HeaderIconFrameStyle}`

/*
{"customizationUpdates":[
  {"value":"start","path":"header.alignText"},
  {"value":"left","path":"header.photoPositionHeaderOnTop"},
  {"value":"sameLine","path":"header.jobTitlePosition"},
  {"value":"icon","path":"header.detailsDisplayLeftRight"},
  {"value":"icon","path":"header.detailsDisplayCenter"}
]};

{"customizationUpdates":[
  {"value":"center","path":"header.alignText"},
  {"value":"top","path":"header.photoPositionHeaderOnTop"},
  {"value":"wrap","path":"header.detailsArrangement"},
  {"value":"below","path":"header.jobTitlePosition"},
  {"value":"icon","path":"header.detailsDisplayLeftRight"},
  {"value":"icon","path":"header.detailsDisplayCenter"}
]}
*/

export default function Header() {
  const {
    customization: { header },
    updateHeader,
  } = useCustomizationStore()

  function handleAlignText(val: 'start' | 'center') {
    switch (val) {
      case 'start': {
        updateHeader({
          ...header,
          alignText: val,
          photoPositionHeaderOnTop: 'left',
          jobTitlePosition: 'sameLine',
          detailsDisplayLeftRight: 'icon',
          detailsDisplayCenter: 'icon',
        })
        break
      }

      case 'center': {
        updateHeader({
          ...header,
          alignText: val,
          photoPositionHeaderOnTop: 'top',
          detailsArrangement: 'wrap',
          jobTitlePosition: 'below',
          detailsDisplayLeftRight: 'icon',
          detailsDisplayCenter: 'icon',
        })
        break
      }

      default: {
        break
      }
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Header</CardTitle>
      </CardHeader>

      <CardContent className={'space-y-4'}>
        <CardHeader>
          <CardTitle>Text Alignment</CardTitle>
        </CardHeader>

        <ToggleGroup
          type="single"
          value={header.alignText}
          onValueChange={(value) => {
            if (value === 'start' || value === 'center') {
              handleAlignText(value)
            }
          }}
        >
          <div className={'flex flex-col items-center gap-2'}>
            <ToggleGroupItem
              value="start"
              className={cn('group w-32 h-10', toggleState)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 92 42"
                fill="none"
                aria-hidden="true"
                className="w-15!"
              >
                <rect
                  x="8"
                  y="6"
                  width="68"
                  height="11"
                  rx="3.5"
                  fill="currentColor"
                ></rect>
                <rect
                  x="8"
                  y="24"
                  width="42"
                  height="11"
                  rx="3.5"
                  fill="currentColor"
                ></rect>
              </svg>
            </ToggleGroupItem>
            <span>Left</span>
          </div>
          <div className={'flex flex-col items-center gap-2'}>
            <ToggleGroupItem
              value="center"
              className={cn('group w-32 h-10', toggleState)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 92 42"
                fill="none"
                aria-hidden="true"
                className="w-15!"
              >
                <rect
                  x="14"
                  y="6"
                  width="64"
                  height="11"
                  rx="3.5"
                  fill="currentColor"
                ></rect>
                <rect
                  x="6"
                  y="24"
                  width="36"
                  height="11"
                  rx="3.5"
                  fill="currentColor"
                ></rect>
                <rect
                  x="50"
                  y="24"
                  width="36"
                  height="11"
                  rx="3.5"
                  fill="currentColor"
                ></rect>
              </svg>
            </ToggleGroupItem>
            <span>Center</span>
          </div>
        </ToggleGroup>
      </CardContent>

      <HeaderDetailsArrangement />

      <HeaderIconStyles />

      <HeaderAdvancedSettings />
    </Card>
  )
}
