import { MinusIcon, PlusIcon, XIcon } from 'lucide-react'

import { Button } from '#/components/ui/button'
import {
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'

/*
<input type="radio" name="nameFontSizePt" id="nameFontSizePt14" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="14" checked="">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="nameFontSizePt14">

<input type="radio" name="nameFontSizePt" id="nameFontSizePt15.5" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="15.5">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="nameFontSizePt15.5"> 

<input type="radio" name="nameFontSizePt" id="nameFontSizePt17" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="17">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="nameFontSizePt17"> 

<input type="radio" name="nameFontSizePt" id="nameFontSizePt18.5" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="18.5">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="nameFontSizePt18.5"> 

<input type="radio" name="nameFontSizePt" id="nameFontSizePt20" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="20">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="nameFontSizePt20"> 

<input type="radio" name="nameFontSizePt" id="nameFontSizePt21.5" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="21.5">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="nameFontSizePt21.5"> 

<input type="radio" name="nameFontSizePt" id="nameFontSizePt23" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="23">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="nameFontSizePt23"> 

<input type="radio" name="nameFontSizePt" id="nameFontSizePt24.5" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="24.5">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="nameFontSizePt24.5"> 

<input type="radio" name="nameFontSizePt" id="nameFontSizePt26" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="26">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="nameFontSizePt26">
*/

/*
API Req:
{"customizationUpdates":[{"value":15,"path":"spacing.nameFontSizePt"}]}
{"customizationUpdates":[{"value":16.5,"path":"spacing.nameFontSizePt"}]}
{"customizationUpdates":[{"value":18,"path":"spacing.nameFontSizePt"}]}
{"customizationUpdates":[{"value":19.5,"path":"spacing.nameFontSizePt"}]}
{"customizationUpdates":[{"value":21,"path":"spacing.nameFontSizePt"}]}
{"customizationUpdates":[{"value":22.5,"path":"spacing.nameFontSizePt"}]}
{"customizationUpdates":[{"value":24,"path":"spacing.nameFontSizePt"}]}
{"customizationUpdates":[{"value":25.5,"path":"spacing.nameFontSizePt"}]}
{"customizationUpdates":[{"value":27,"path":"spacing.nameFontSizePt"}]}
*/

/**
 * API Req. Summary No Change here
 * Min 15
 * Max 27
 * Step 1.5 inc/dec
 * Steps 9
 * 15, 16.5, 18, 19.5, 21, 22.5, 24, 25.5, 27
 */

/**
 * Component Summary No Change here
 * Min 14
 * Max 26
 * Step 1.5 inc/dec
 * Steps 9
 * 14, 15.5, 17, 18.5, 20, 21.5, 23, 24.5, 26
 */

const fontBtnClass =
  'size-8 rounded-none border-t-0 border-l-0 border-b-0 border-r border-foreground'
const animationClass =
  'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'

export default function FullNameFontSize() {
  const {
    customization: { spacing },
    updateSpacing,
  } = useCustomizationStore()

  const currentFontSize = spacing.nameFontSizePt

  const isLargerNameFontActivate =
    spacing.nameFontSizePt === 30 ||
    spacing.nameFontSizePt === 33 ||
    spacing.nameFontSizePt === 36 ||
    spacing.nameFontSizePt === 39 ||
    spacing.nameFontSizePt === 42

  function handleFullNameSizeChange(field: string, value: number) {
    if (value > 27) {
      updateSpacing({
        ...spacing,
        nameFontSizePt: 27,
      })
    } else if (value < 15) {
      updateSpacing({
        ...spacing,
        nameFontSizePt: 15,
      })
    } else {
      updateSpacing({
        ...spacing,
        [field]: value,
      })
    }
  }

  return (
    <CardContent>
      <CardHeader>
        <CardTitle>Full Name({'nameFontSizePt'})</CardTitle>
        <CardAction>+{currentFontSize - 10}pt</CardAction>
      </CardHeader>
      <CardContent>
        <div className={'flex justify-between items-start gap-2'}>
          <div className="space-y-1">
            <div className={'bg-muted py-1'}>
              <div className={'w-full flex items-center justify-between'}>
                <Button
                  type="button"
                  className={fontBtnClass}
                  variant={currentFontSize === 15 ? 'default' : 'outline'}
                  onClick={() => handleFullNameSizeChange('nameFontSizePt', 15)}
                />
                <Button
                  type="button"
                  className={fontBtnClass}
                  variant={currentFontSize === 16.5 ? 'default' : 'outline'}
                  onClick={() =>
                    handleFullNameSizeChange('nameFontSizePt', 16.5)
                  }
                />
                <Button
                  type="button"
                  className={fontBtnClass}
                  variant={currentFontSize === 18 ? 'default' : 'outline'}
                  onClick={() => handleFullNameSizeChange('nameFontSizePt', 18)}
                />
                <Button
                  type="button"
                  className={fontBtnClass}
                  variant={currentFontSize === 19.5 ? 'default' : 'outline'}
                  onClick={() =>
                    handleFullNameSizeChange('nameFontSizePt', 19.5)
                  }
                />
                <Button
                  type="button"
                  className={fontBtnClass}
                  variant={currentFontSize === 21 ? 'default' : 'outline'}
                  onClick={() => handleFullNameSizeChange('nameFontSizePt', 21)}
                />
                <Button
                  type="button"
                  className={fontBtnClass}
                  variant={currentFontSize === 22.5 ? 'default' : 'outline'}
                  onClick={() =>
                    handleFullNameSizeChange('nameFontSizePt', 22.5)
                  }
                />
                <Button
                  type="button"
                  className={fontBtnClass}
                  variant={currentFontSize === 24 ? 'default' : 'outline'}
                  onClick={() => handleFullNameSizeChange('nameFontSizePt', 24)}
                />
                <Button
                  type="button"
                  className={fontBtnClass}
                  variant={currentFontSize === 25.5 ? 'default' : 'outline'}
                  onClick={() =>
                    handleFullNameSizeChange('nameFontSizePt', 25.5)
                  }
                />
                <Button
                  type="button"
                  className={'size-8 rounded-none border-none'}
                  variant={
                    currentFontSize === 27 || isLargerNameFontActivate
                      ? 'default'
                      : 'outline'
                  }
                  onClick={() => handleFullNameSizeChange('nameFontSizePt', 27)}
                />
              </div>
            </div>

            {currentFontSize === 27 || isLargerNameFontActivate ? (
              <LargeNameOpts />
            ) : null}
          </div>
          <div className={'flex gap-2'}>
            <Button
              type="button"
              variant={'outline'}
              onClick={() =>
                handleFullNameSizeChange(
                  'nameFontSizePt',
                  spacing.nameFontSizePt - 1.5,
                )
              }
              disabled={currentFontSize === 15}
            >
              <MinusIcon />
            </Button>
            <Button
              type="button"
              variant={'outline'}
              onClick={() =>
                handleFullNameSizeChange(
                  'nameFontSizePt',
                  spacing.nameFontSizePt + 1.5,
                )
              }
              disabled={currentFontSize === 27}
            >
              <PlusIcon />
            </Button>
          </div>
        </div>
      </CardContent>
    </CardContent>
  )
}

/*
3+ bigger:
{"customizationUpdates":[{"value":30,"path":"spacing.nameFontSizePt"},{"value":13.5,"path":"spacing.jobTitleFontSizePt"}]}

6+ bigger
{"customizationUpdates":[{"value":33,"path":"spacing.nameFontSizePt"},{"value":15,"path":"spacing.jobTitleFontSizePt"}]}

9+ bigger
{"customizationUpdates":[{"value":36,"path":"spacing.nameFontSizePt"},{"value":16.5,"path":"spacing.jobTitleFontSizePt"}]}

12+ bigger
{"customizationUpdates":[{"value":39,"path":"spacing.nameFontSizePt"},{"value":18,"path":"spacing.jobTitleFontSizePt"}]}

15+ bigger
{"customizationUpdates":[{"value":42,"path":"spacing.nameFontSizePt"},{"value":19.5,"path":"spacing.jobTitleFontSizePt"}]}

when clr the larger name opts:
{"customizationUpdates":[{"value":27,"path":"spacing.nameFontSizePt"},{"value":12,"path":"spacing.jobTitleFontSizePt"}]}
*/

function LargeNameOpts() {
  const {
    customization: { spacing },
    updateSpacing,
  } = useCustomizationStore()

  const isLargerNameFontActivate =
    spacing.nameFontSizePt === 30 ||
    spacing.nameFontSizePt === 33 ||
    spacing.nameFontSizePt === 36 ||
    spacing.nameFontSizePt === 39 ||
    spacing.nameFontSizePt === 42

  function handleLargeNameOptsChange(value: string) {
    switch (value) {
      case '3': {
        updateSpacing({
          ...spacing,
          nameFontSizePt: 30,

          // TODO: as of now ui sync
          jobTitleFontSizePt: 13.5,
        })
        break
      }
      case '6': {
        updateSpacing({
          ...spacing,
          nameFontSizePt: 33,

          // TODO: as of now ui sync
          jobTitleFontSizePt: 15,
        })
        break
      }
      case '9': {
        updateSpacing({
          ...spacing,
          nameFontSizePt: 36,

          // TODO: as of now ui sync
          jobTitleFontSizePt: 16.5,
        })
        break
      }
      case '12': {
        updateSpacing({
          ...spacing,
          nameFontSizePt: 39,

          // TODO: as of now ui sync
          jobTitleFontSizePt: 18,
        })
        break
      }
      case '15': {
        updateSpacing({
          ...spacing,
          nameFontSizePt: 42,

          // TODO: as of now ui sync
          jobTitleFontSizePt: 19.5,
        })
        break
      }
      default: {
        updateSpacing({
          ...spacing,
          nameFontSizePt: 27,

          // TODO: as of now ui sync
          jobTitleFontSizePt: 12,
        })
        break
      }
    }
  }

  function handleResetLargerNameFontSize() {
    updateSpacing({
      ...spacing,
      nameFontSizePt: 27,
      jobTitleFontSizePt: 12,
    })
  }

  return (
    <div className={cn('flex items-center gap-2', animationClass)}>
      <p className={'text-xs text-muted-foreground'}>Need a larger name?</p>
      <ToggleGroup
        type="single"
        size={'sm'}
        variant={'outline'}
        onValueChange={handleLargeNameOptsChange}
      >
        <ToggleGroupItem value="3" className={cn('size-5', toggleState)}>
          +3
        </ToggleGroupItem>
        <ToggleGroupItem value="6" className={cn('size-5', toggleState)}>
          +6
        </ToggleGroupItem>
        <ToggleGroupItem value="9" className={cn('size-5', toggleState)}>
          +9
        </ToggleGroupItem>
        <ToggleGroupItem value="12" className={cn('size-5', toggleState)}>
          +12
        </ToggleGroupItem>
        <ToggleGroupItem value="15" className={cn('size-5', toggleState)}>
          +15
        </ToggleGroupItem>
      </ToggleGroup>

      {isLargerNameFontActivate ? (
        <Button
          type="button"
          variant={'destructive'}
          size={'icon-xs'}
          onClick={handleResetLargerNameFontSize}
        >
          <XIcon />
        </Button>
      ) : null}
    </div>
  )
}
