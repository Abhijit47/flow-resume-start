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
<input type="radio" name="lineHeight" id="lineHeight0" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="0">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="lineHeight0"></label>

<input type="radio" name="lineHeight" id="lineHeight1" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="1">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="lineHeight1"></label>

<input type="radio" name="lineHeight" id="lineHeight2" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="2">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="lineHeight2"></label

<input type="radio" name="lineHeight" id="lineHeight3" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="3">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="lineHeight3"></label>

<input type="radio" name="lineHeight" id="lineHeight4" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="4">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="lineHeight4"></label>

<input type="radio" name="lineHeight" id="lineHeight5" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="5">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="lineHeight5"></label>

<input type="radio" name="lineHeight" id="lineHeight6" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="6">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="lineHeight6"></label>

<input type="radio" name="lineHeight" id="lineHeight7" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="7">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="lineHeight7"></label>

<input type="radio" name="lineHeight" id="lineHeight8" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="8" checked="">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="lineHeight8"></label>
*/

/*
API Req.
{"customizationUpdates":[{"value":"0","path":"spacing.lineHeight"}]}
{"customizationUpdates":[{"value":"1","path":"spacing.lineHeight"}]}
{"customizationUpdates":[{"value":"2","path":"spacing.lineHeight"}]}
{"customizationUpdates":[{"value":"3","path":"spacing.lineHeight"}]}
{"customizationUpdates":[{"value":"4","path":"spacing.lineHeight"}]}
{"customizationUpdates":[{"value":"5","path":"spacing.lineHeight"}]}
{"customizationUpdates":[{"value":"6","path":"spacing.lineHeight"}]}
{"customizationUpdates":[{"value":"7","path":"spacing.lineHeight"}]}
{"customizationUpdates":[{"value":"8","path":"spacing.lineHeight"}]}
*/

/**
 * API req. Summary
 * Min 0
 * Max 8
 * Step 1 inc/dec
 * Steps 9
 * 0, 1, 2, 3, 4, 5, 6, 7, 8
 */

/**
 * RnD: Spacing Customization
 * 1. lineHeight
 * 2. spaceBetween
 * 3. marginLeftRight
 * 4. marginTopBottom
 *
 * lineHeight
 * ui
 * 1.1
 * 1.15
 * 1.2
 * 1.25
 * 1.3
 * 1.35
 * 1.4
 * 1.45
 * 1.5
 *
 * spaceBetween
 * [-] , [--] , [---] , [----] , [-----] , [------] , [-------] , [--------] , [---------]
 *
 */

function renderLineHeightValue(value: number) {
  switch (value) {
    case 0:
      return '1.1'
    case 1:
      return '1.15'
    case 2:
      return '1.2'
    case 3:
      return '1.25'
    case 4:
      return '1.3'
    case 5:
      return '1.35'
    case 6:
      return '1.4'
    case 7:
      return '1.45'
    case 8:
      return '1.5'
    default:
      return '1.1'
  }
}

const fontBtnClass =
  'size-8 rounded-none border-t-0 border-l-0 border-b-0 border-r border-foreground'

export default function LineHeight() {
  const {
    customization: { spacing },
    updateSpacing,
  } = useCustomizationStore()

  const currentLineHeight = spacing.lineHeight

  function handleLineHeightChange(field: 'lineHeight', value: number) {
    if (value === 0) {
      updateSpacing({
        ...spacing,
        lineHeight: '0',
      })
    } else if (value === 8) {
      updateSpacing({
        ...spacing,
        lineHeight: '8',
      })
    } else {
      updateSpacing({
        ...spacing,
        [field]: value.toString(),
      })
    }
  }

  return (
    <CardContent>
      <CardHeader>
        <CardTitle>Line Height</CardTitle>
        <CardAction>{renderLineHeightValue(+currentLineHeight)}</CardAction>
      </CardHeader>
      <CardContent>
        <div className={'flex justify-between items-center gap-2'}>
          <div className={'bg-muted py-1'}>
            <div className={'w-full flex items-center justify-between'}>
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentLineHeight === '0' ? 'default' : 'outline'}
                onClick={() => handleLineHeightChange('lineHeight', 0)}
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentLineHeight === '1' ? 'default' : 'outline'}
                onClick={() => handleLineHeightChange('lineHeight', 1)}
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentLineHeight === '2' ? 'default' : 'outline'}
                onClick={() => handleLineHeightChange('lineHeight', 2)}
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentLineHeight === '3' ? 'default' : 'outline'}
                onClick={() => handleLineHeightChange('lineHeight', 3)}
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentLineHeight === '4' ? 'default' : 'outline'}
                onClick={() => handleLineHeightChange('lineHeight', 4)}
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentLineHeight === '5' ? 'default' : 'outline'}
                onClick={() => handleLineHeightChange('lineHeight', 5)}
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentLineHeight === '6' ? 'default' : 'outline'}
                onClick={() => handleLineHeightChange('lineHeight', 6)}
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentLineHeight === '7' ? 'default' : 'outline'}
                onClick={() => handleLineHeightChange('lineHeight', 7)}
              />
              <Button
                type="button"
                className={'size-8 rounded-none border-none'}
                variant={currentLineHeight === '8' ? 'default' : 'outline'}
                onClick={() => handleLineHeightChange('lineHeight', 8)}
              />
            </div>
          </div>
          <div className={'flex gap-2'}>
            <Button
              type="button"
              variant={'outline'}
              onClick={() =>
                handleLineHeightChange('lineHeight', +currentLineHeight - 1)
              }
              disabled={currentLineHeight === '0'}
            >
              <MinusIcon />
            </Button>
            <Button
              type="button"
              variant={'outline'}
              onClick={() =>
                handleLineHeightChange('lineHeight', +currentLineHeight + 1)
              }
              disabled={currentLineHeight === '8'}
            >
              <PlusIcon />
            </Button>
          </div>
        </div>
      </CardContent>
    </CardContent>
  )
}
