import { MinusIcon, PlusIcon } from 'lucide-react'

import { Button } from '#/components/ui/button'
import {
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import { useCustomizationStore } from '#/store/customization-store'

/*
<input type="radio" name="marginHorizontal" id="marginHorizontal0" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="0">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="marginHorizontal0"></label>

<input type="radio" name="marginHorizontal" id="marginHorizontal1" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="1">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="marginHorizontal1"></label>

<input type="radio" name="marginHorizontal" id="marginHorizontal2" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="2">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="marginHorizontal2"></label>

<input type="radio" name="marginHorizontal" id="marginHorizontal3" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="3">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="marginHorizontal3"></label>

<input type="radio" name="marginHorizontal" id="marginHorizontal4" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="4" checked="">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="marginHorizontal4"></label>

<input type="radio" name="marginHorizontal" id="marginHorizontal5" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="5">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="marginHorizontal5"></label>

<input type="radio" name="marginHorizontal" id="marginHorizontal6" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="6">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="marginHorizontal6"></label>

<input type="radio" name="marginHorizontal" id="marginHorizontal7" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="7">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="marginHorizontal7"></label>

<input type="radio" name="marginHorizontal" id="marginHorizontal8" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="8">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="marginHorizontal8"></label>
*/

/*
API req:
{"customizationUpdates":[{"value":"0","path":"spacing.marginHorizontal"}]}
{"customizationUpdates":[{"value":"1","path":"spacing.marginHorizontal"}]}
{"customizationUpdates":[{"value":"2","path":"spacing.marginHorizontal"}]}
{"customizationUpdates":[{"value":"3","path":"spacing.marginHorizontal"}]}
{"customizationUpdates":[{"value":"4","path":"spacing.marginHorizontal"}]}
{"customizationUpdates":[{"value":"5","path":"spacing.marginHorizontal"}]}
{"customizationUpdates":[{"value":"6","path":"spacing.marginHorizontal"}]}
{"customizationUpdates":[{"value":"7","path":"spacing.marginHorizontal"}]}
{"customizationUpdates":[{"value":"8","path":"spacing.marginHorizontal"}]}
*/

/**
 * API req. Summary
 * Min 0
 * Max 8
 * Step 1 inc/dec
 * Steps 9
 * 0, 1, 2, 3, 4, 5, 6, 7, 8
 */

const fontBtnClass =
  'size-8 rounded-none border-t-0 border-l-0 border-b-0 border-r border-foreground'

export default function LeftAndRightMargin() {
  const {
    customization: { spacing },
    updateSpacing,
  } = useCustomizationStore()

  const currentMarginHorizontal = spacing.marginHorizontal

  function handleMarginLeftRightChange(
    field: 'marginHorizontal',
    value: number,
  ) {
    if (value === 0) {
      updateSpacing({
        ...spacing,
        marginHorizontal: '0',
      })
    } else if (value === 8) {
      updateSpacing({
        ...spacing,
        marginHorizontal: '8',
      })
    } else {
      updateSpacing({
        ...spacing,
        [field]: value.toString(),
      })
    }
  }

  // ui start from 10 end 26mm
  const calcMM = (val: number) => val * 2 + 10

  return (
    <CardContent>
      <CardHeader>
        <CardTitle>Left & Right Margin</CardTitle>
        <CardAction>{calcMM(+currentMarginHorizontal)}mm</CardAction>
      </CardHeader>
      <CardContent>
        <div className={'flex justify-between items-center gap-2'}>
          <div className={'bg-muted py-1'}>
            <div className={'w-full flex items-center justify-between'}>
              <Button
                type="button"
                className={fontBtnClass}
                variant={
                  currentMarginHorizontal === '0' ? 'default' : 'outline'
                }
                onClick={() =>
                  handleMarginLeftRightChange('marginHorizontal', 0)
                }
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={
                  currentMarginHorizontal === '1' ? 'default' : 'outline'
                }
                onClick={() =>
                  handleMarginLeftRightChange('marginHorizontal', 1)
                }
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={
                  currentMarginHorizontal === '2' ? 'default' : 'outline'
                }
                onClick={() =>
                  handleMarginLeftRightChange('marginHorizontal', 2)
                }
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={
                  currentMarginHorizontal === '3' ? 'default' : 'outline'
                }
                onClick={() =>
                  handleMarginLeftRightChange('marginHorizontal', 3)
                }
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={
                  currentMarginHorizontal === '4' ? 'default' : 'outline'
                }
                onClick={() =>
                  handleMarginLeftRightChange('marginHorizontal', 4)
                }
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={
                  currentMarginHorizontal === '5' ? 'default' : 'outline'
                }
                onClick={() =>
                  handleMarginLeftRightChange('marginHorizontal', 5)
                }
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={
                  currentMarginHorizontal === '6' ? 'default' : 'outline'
                }
                onClick={() =>
                  handleMarginLeftRightChange('marginHorizontal', 6)
                }
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={
                  currentMarginHorizontal === '7' ? 'default' : 'outline'
                }
                onClick={() =>
                  handleMarginLeftRightChange('marginHorizontal', 7)
                }
              />
              <Button
                type="button"
                className={'size-8 rounded-none border-none'}
                variant={
                  currentMarginHorizontal === '8' ? 'default' : 'outline'
                }
                onClick={() =>
                  handleMarginLeftRightChange('marginHorizontal', 8)
                }
              />
            </div>
          </div>
          <div className={'flex gap-2'}>
            <Button
              type="button"
              variant={'outline'}
              onClick={() =>
                handleMarginLeftRightChange(
                  'marginHorizontal',
                  +currentMarginHorizontal - 1,
                )
              }
              disabled={currentMarginHorizontal === '0'}
            >
              <MinusIcon />
            </Button>
            <Button
              type="button"
              variant={'outline'}
              onClick={() =>
                handleMarginLeftRightChange(
                  'marginHorizontal',
                  +currentMarginHorizontal + 1,
                )
              }
              disabled={currentMarginHorizontal === '8'}
            >
              <PlusIcon />
            </Button>
          </div>
        </div>
      </CardContent>
    </CardContent>
  )
}
