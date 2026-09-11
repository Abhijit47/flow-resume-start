import { ChevronDownCircleIcon, ChevronUpCircleIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '#/components/ui/button'
import { CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '#/components/ui/collapsible'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'
const animationClass =
  'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

/*
advanced settings under header
1. nameStyle
{"customizationUpdates":[{"value":false,"path":"header.accentuateName"}]}
{"customizationUpdates":[{"value":true,"path":"header.accentuateName"}]}

2. professionalTitleStyle
{"customizationUpdates":[{"value":"normal","path":"header.jobTitleStyle"}]}
{"customizationUpdates":[{"value":"italic","path":"header.jobTitleStyle"}]}

3. professionalTitlePosition
{"customizationUpdates":[{"value":"sameLine","path":"header.jobTitlePosition"}]}
{"customizationUpdates":[{"value":"below","path":"header.jobTitlePosition"}]}
*/

export default function HeaderAdvancedSettings() {
  const [isShowingAdvancedSettings, setIsShowingAdvancedSettings] =
    useState(false)

  const {
    customization: { header },
    updateHeader,
  } = useCustomizationStore()

  return (
    <Collapsible
      className={'px-2'}
      open={isShowingAdvancedSettings}
      onOpenChange={setIsShowingAdvancedSettings}
    >
      <CollapsibleTrigger asChild>
        <Button
          size={'lg'}
          variant={'outline'}
          className={'w-full justify-between'}
        >
          Advanced Settings{' '}
          {isShowingAdvancedSettings ? (
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
      <CollapsibleContent
        className={cn('space-y-4 p-2 border-l-2', animationClass)}
      >
        <CardContent className={'space-y-4'}>
          <CardHeader>
            <CardTitle>Name Style</CardTitle>
          </CardHeader>

          <ToggleGroup
            type="single"
            size={'lg'}
            value={header.accentuateName.toString()}
            onValueChange={(val) => {
              if (val) {
                updateHeader({
                  ...header,
                  accentuateName: !header.accentuateName,
                })
              }
            }}
          >
            <ToggleGroupItem
              value="false"
              className={cn('group font-normal', toggleState)}
            >
              Aa
            </ToggleGroupItem>
            <ToggleGroupItem
              value="true"
              className={cn('group font-bold', toggleState)}
            >
              Aa
            </ToggleGroupItem>
          </ToggleGroup>
        </CardContent>

        <CardContent className={'space-y-4'}>
          <CardHeader>
            <CardTitle>Professional Title Style</CardTitle>
          </CardHeader>

          <ToggleGroup
            type="single"
            size={'lg'}
            value={header.jobTitleStyle}
            onValueChange={(val) => {
              if (val) {
                updateHeader({
                  ...header,
                  jobTitleStyle: val,
                })
              }
            }}
          >
            <ToggleGroupItem
              value="normal"
              className={cn('group font-normal', toggleState)}
            >
              Aa
            </ToggleGroupItem>
            <ToggleGroupItem
              value="italic"
              className={cn('group italic', toggleState)}
            >
              Aa
            </ToggleGroupItem>
          </ToggleGroup>
        </CardContent>

        <CardContent className={'space-y-4'}>
          <CardHeader>
            <CardTitle>Professional Title Position</CardTitle>
          </CardHeader>

          <ToggleGroup
            type="single"
            size={'lg'}
            value={header.jobTitlePosition}
            onValueChange={(val) => {
              if (val) {
                updateHeader({
                  ...header,
                  jobTitlePosition: val,
                })
              }
            }}
          >
            <ToggleGroupItem
              value="sameLine"
              className={cn('group w-32 h-10', toggleState)}
            >
              Try Same Line
            </ToggleGroupItem>
            <ToggleGroupItem
              value="below"
              className={cn('group w-32 h-10', toggleState)}
            >
              Below
            </ToggleGroupItem>
          </ToggleGroup>
        </CardContent>
      </CollapsibleContent>
    </Collapsible>
  )
}
