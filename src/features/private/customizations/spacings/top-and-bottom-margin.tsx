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
<input type="radio" name="marginVertical" id="marginVertical0" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="0">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="marginVertical0"></label>

<input type="radio" name="marginVertical" id="marginVertical1" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="1">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="marginVertical1"></label>

<input type="radio" name="marginVertical" id="marginVertical2" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="2">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="marginVertical2"></label>

<input type="radio" name="marginVertical" id="marginVertical3" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="3" checked="">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="marginVertical3"></label>

<input type="radio" name="marginVertical" id="marginVertical4" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="4">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="marginVertical4"></label>

<input type="radio" name="marginVertical" id="marginVertical5" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="5">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="marginVertical5"></label>

<input type="radio" name="marginVertical" id="marginVertical6" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="6">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="marginVertical6"></label>

<input type="radio" name="marginVertical" id="marginVertical7" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="7">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="marginVertical7"></label>

<input type="radio" name="marginVertical" id="marginVertical8" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="8">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="marginVertical8"></label>
*/

/*
API Req:
{"customizationUpdates":[{"value":"0","path":"spacing.marginVertical"}]}
{"customizationUpdates":[{"value":"1","path":"spacing.marginVertical"}]}
{"customizationUpdates":[{"value":"2","path":"spacing.marginVertical"}]}
{"customizationUpdates":[{"value":"3","path":"spacing.marginVertical"}]}
{"customizationUpdates":[{"value":"4","path":"spacing.marginVertical"}]}
{"customizationUpdates":[{"value":"5","path":"spacing.marginVertical"}]}
{"customizationUpdates":[{"value":"6","path":"spacing.marginVertical"}]}
{"customizationUpdates":[{"value":"7","path":"spacing.marginVertical"}]}
{"customizationUpdates":[{"value":"8","path":"spacing.marginVertical"}]}
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

export default function TopAndBottomMargin() {
  // const { spacing, onChangeSpacing } = props

  const {
    customization: { spacing },
    updateSpacing,
  } = useCustomizationStore()

  const currentMarginVertical = spacing.marginVertical

  function handleMarginTopBottomChange(field: 'marginVertical', value: number) {
    if (value === 0) {
      updateSpacing({
        ...spacing,
        marginVertical: '0',
      })
    } else if (value === 8) {
      updateSpacing({
        ...spacing,
        marginVertical: '8',
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
        <CardTitle>Top & Bottom Margin</CardTitle>
        <CardAction>{calcMM(+currentMarginVertical)}mm</CardAction>
      </CardHeader>
      <CardContent>
        <div className={'flex justify-between items-center gap-2'}>
          <div className={'bg-muted py-1'}>
            <div className={'w-full flex items-center justify-between'}>
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentMarginVertical === '0' ? 'default' : 'outline'}
                onClick={() => handleMarginTopBottomChange('marginVertical', 0)}
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentMarginVertical === '1' ? 'default' : 'outline'}
                onClick={() => handleMarginTopBottomChange('marginVertical', 1)}
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentMarginVertical === '2' ? 'default' : 'outline'}
                onClick={() => handleMarginTopBottomChange('marginVertical', 2)}
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentMarginVertical === '3' ? 'default' : 'outline'}
                onClick={() => handleMarginTopBottomChange('marginVertical', 3)}
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentMarginVertical === '4' ? 'default' : 'outline'}
                onClick={() => handleMarginTopBottomChange('marginVertical', 4)}
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentMarginVertical === '5' ? 'default' : 'outline'}
                onClick={() => handleMarginTopBottomChange('marginVertical', 5)}
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentMarginVertical === '6' ? 'default' : 'outline'}
                onClick={() => handleMarginTopBottomChange('marginVertical', 6)}
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentMarginVertical === '7' ? 'default' : 'outline'}
                onClick={() => handleMarginTopBottomChange('marginVertical', 7)}
              />
              <Button
                type="button"
                className={'size-8 rounded-none border-none'}
                variant={currentMarginVertical === '8' ? 'default' : 'outline'}
                onClick={() => handleMarginTopBottomChange('marginVertical', 8)}
              />
            </div>
          </div>
          <div className={'flex gap-2'}>
            <Button
              type="button"
              variant={'outline'}
              onClick={() =>
                handleMarginTopBottomChange(
                  'marginVertical',
                  +currentMarginVertical - 1,
                )
              }
              disabled={currentMarginVertical === '0'}
            >
              <MinusIcon />
            </Button>
            <Button
              type="button"
              variant={'outline'}
              onClick={() =>
                handleMarginTopBottomChange(
                  'marginVertical',
                  +currentMarginVertical + 1,
                )
              }
              disabled={currentMarginVertical === '8'}
            >
              <PlusIcon />
            </Button>
          </div>
        </div>
      </CardContent>
    </CardContent>
  )
}
