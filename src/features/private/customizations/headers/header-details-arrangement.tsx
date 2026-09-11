import { DotIcon, SmileIcon, Tally1Icon } from 'lucide-react'

import { CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'
// const toggleStateInvert = 'ring-1 ring-accent data-[state=on]:ring-background'
// const animationClass =
//   'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

/*
{"customizationUpdates":[
{"value":"column","path":"header.detailsArrangement"},
{"value":"icon","path":"header.detailsDisplayLeftRight"},
{"value":"icon","path":"header.detailsDisplayCenter"}]}

{"customizationUpdates":[
{"value":"wrap","path":"header.detailsArrangement"},
{"value":"icon","path":"header.detailsDisplayLeftRight"},
{"value":"icon","path":"header.detailsDisplayCenter"}]}

{"customizationUpdates":[
{"value":"grid","path":"header.detailsArrangement"},
{"value":"icon","path":"header.detailsDisplayLeftRight"},
{"value":"icon","path":"header.detailsDisplayCenter"}]}

column mode:
{"customizationUpdates":[{"value":"icon","path":"header.detailsDisplayLeftRight"}]}
{"customizationUpdates":[{"value":"none","path":"header.detailsDisplayLeftRight"}]}

{"customizationUpdates":[{"value":"icon","path":"header.detailsDisplayLeftRight"}]}
{"customizationUpdates":[{"value":"bullet","path":"header.detailsDisplayLeftRight"}]}
{"customizationUpdates":[{"value":"verticalBar","path":"header.detailsDisplayLeftRight"}]}
*/

export default function HeaderDetailsArrangement() {
  const {
    customization: { header },
    updateHeader,
  } = useCustomizationStore()

  const isShow =
    header.detailsArrangement === 'column' ||
    header.detailsArrangement === 'grid'

  return (
    <CardContent className={'space-y-4'}>
      <CardHeader>
        <CardTitle>Details Arrangement</CardTitle>
      </CardHeader>

      <ToggleGroup
        type="single"
        spacing={3}
        value={header.detailsArrangement}
        onValueChange={(value) => {
          updateHeader({
            ...header,
            detailsArrangement: value,
            detailsDisplayLeftRight: 'icon',
            detailsDisplayCenter: 'icon',
          })
        }}
      >
        <ToggleGroupItem
          value="column"
          className={cn('group w-32 h-10', toggleState)}
        >
          <svg
            width="39"
            height="24"
            viewBox="0 0 39 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="group-data-[state=on]:fill-background group-data-[state=on]:stroke-foreground w-full! h-full!"
          >
            <rect width="39" height="6" rx="1"></rect>
            <rect y="9" width="39" height="6" rx="1"></rect>
            <rect y="18" width="39" height="6" rx="1"></rect>
          </svg>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="wrap"
          className={cn('group w-32 h-10', toggleState)}
        >
          <svg
            viewBox="0 0 82 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="group-data-[state=on]:fill-background group-data-[state=on]:stroke-foreground w-full! h-full!"
          >
            <rect y="9" width="39" height="6" rx="1"></rect>
            <rect x="44" y="9" width="38" height="6" rx="1"></rect>
            <rect width="24" height="6" rx="1"></rect>
            <rect y="18" width="24" height="6" rx="1"></rect>
            <rect x="29" width="24" height="6" rx="1"></rect>
            <rect x="29" y="18" width="24" height="6" rx="1"></rect>
            <rect x="58" y="18" width="24" height="6" rx="1"></rect>
            <rect x="58" width="24" height="6" rx="1"></rect>
          </svg>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="grid"
          className={cn('group w-32 h-10', toggleState)}
        >
          <svg
            viewBox="0 0 83 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="group-data-[state=on]:fill-background group-data-[state=on]:stroke-foreground w-full! h-full!"
          >
            <rect width="39" height="6" rx="1"></rect>
            <rect x="44" width="39" height="6" rx="1"></rect>
            <rect y="9" width="39" height="6" rx="1"></rect>
            <rect x="44" y="9" width="39" height="6" rx="1"></rect>
            <rect x="44" y="18" width="39" height="6" rx="1"></rect>
            <rect y="18" width="39" height="6" rx="1"></rect>
          </svg>
        </ToggleGroupItem>
      </ToggleGroup>

      <ToggleGroup
        type="single"
        className={'flex-wrap max-w-sm'}
        value={header.detailsDisplayLeftRight}
        onValueChange={(value) => {
          updateHeader({
            ...header,
            detailsDisplayLeftRight: value,
          })
        }}
        spacing={3}
      >
        <ToggleGroupItem
          value="icon"
          className={cn('group w-30 h-10', toggleState)}
        >
          <SmileIcon /> Icon
        </ToggleGroupItem>
        {isShow ? (
          <ToggleGroupItem
            value="none"
            className={cn('group w-30 h-10', toggleState)}
          >
            None
          </ToggleGroupItem>
        ) : (
          <>
            <ToggleGroupItem
              value="bullet"
              className={cn('group w-30 h-10', toggleState)}
            >
              <DotIcon className={'size-8'} /> Bullet
            </ToggleGroupItem>
            <ToggleGroupItem
              value="verticalBar"
              className={cn('group w-30 h-10', toggleState)}
            >
              <Tally1Icon /> Bar
            </ToggleGroupItem>
          </>
        )}
      </ToggleGroup>
    </CardContent>
  )
}
