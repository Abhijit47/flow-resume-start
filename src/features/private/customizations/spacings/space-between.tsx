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
<input type="radio" name="spacingFactor" id="spacingFactor0" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="0">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="spacingFactor0"></label>

<input type="radio" name="spacingFactor" id="spacingFactor1" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="1">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="spacingFactor1"></label>

<input type="radio" name="spacingFactor" id="spacingFactor2" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="2">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="spacingFactor2"></label>

<input type="radio" name="spacingFactor" id="spacingFactor3" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="3" checked="">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="spacingFactor3"></label>

<input type="radio" name="spacingFactor" id="spacingFactor4" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="4">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="spacingFactor4"></label>

<input type="radio" name="spacingFactor" id="spacingFactor5" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="5">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="spacingFactor5"></label>

<input type="radio" name="spacingFactor" id="spacingFactor6" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="6">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="spacingFactor6"></label>

<input type="radio" name="spacingFactor" id="spacingFactor7" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="7">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="spacingFactor7"></label>

<input type="radio" name="spacingFactor" id="spacingFactor8" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="8">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="spacingFactor8"></label>
*/

/*
{"customizationUpdates":[{"value":"0","path":"spacing.spacingFactor"}]}
{"customizationUpdates":[{"value":"1","path":"spacing.spacingFactor"}]}
{"customizationUpdates":[{"value":"2","path":"spacing.spacingFactor"}]}
{"customizationUpdates":[{"value":"3","path":"spacing.spacingFactor"}]}
{"customizationUpdates":[{"value":"4","path":"spacing.spacingFactor"}]}
{"customizationUpdates":[{"value":"5","path":"spacing.spacingFactor"}]}
{"customizationUpdates":[{"value":"6","path":"spacing.spacingFactor"}]}
{"customizationUpdates":[{"value":"7","path":"spacing.spacingFactor"}]}
{"customizationUpdates":[{"value":"8","path":"spacing.spacingFactor"}]}
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

export default function SpaceBetween() {
  const {
    customization: { spacing },
    updateSpacing,
  } = useCustomizationStore()

  const currentSpacingFactor = spacing.spacingFactor

  function handleSpaceBetweenChange(field: 'spacingFactor', value: number) {
    if (value === 0) {
      updateSpacing({
        ...spacing,
        spacingFactor: '0',
      })
    } else if (value === 8) {
      updateSpacing({
        ...spacing,
        spacingFactor: '8',
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
        <CardTitle>Space Between Elements</CardTitle>
        <CardAction className={'max-w-48'}>
          [
          {Array.from({ length: +currentSpacingFactor + 1 }).map((_, index) => (
            <span key={index} className="mx-px text-[6px]">
              &mdash;
            </span>
          ))}
          ]
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className={'flex justify-between items-center gap-2'}>
          <div className={'bg-muted py-1'}>
            <div className={'w-full flex items-center justify-between'}>
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentSpacingFactor === '0' ? 'default' : 'outline'}
                onClick={() => handleSpaceBetweenChange('spacingFactor', 0)}
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentSpacingFactor === '1' ? 'default' : 'outline'}
                onClick={() => handleSpaceBetweenChange('spacingFactor', 1)}
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentSpacingFactor === '2' ? 'default' : 'outline'}
                onClick={() => handleSpaceBetweenChange('spacingFactor', 2)}
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentSpacingFactor === '3' ? 'default' : 'outline'}
                onClick={() => handleSpaceBetweenChange('spacingFactor', 3)}
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentSpacingFactor === '4' ? 'default' : 'outline'}
                onClick={() => handleSpaceBetweenChange('spacingFactor', 4)}
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentSpacingFactor === '5' ? 'default' : 'outline'}
                onClick={() => handleSpaceBetweenChange('spacingFactor', 5)}
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentSpacingFactor === '6' ? 'default' : 'outline'}
                onClick={() => handleSpaceBetweenChange('spacingFactor', 6)}
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentSpacingFactor === '7' ? 'default' : 'outline'}
                onClick={() => handleSpaceBetweenChange('spacingFactor', 7)}
              />
              <Button
                type="button"
                className={'size-8 rounded-none border-none'}
                variant={currentSpacingFactor === '8' ? 'default' : 'outline'}
                onClick={() => handleSpaceBetweenChange('spacingFactor', 8)}
              />
            </div>
          </div>
          <div className={'flex gap-2'}>
            <Button
              type="button"
              variant={'outline'}
              onClick={() =>
                handleSpaceBetweenChange(
                  'spacingFactor',
                  +currentSpacingFactor - 1,
                )
              }
              disabled={currentSpacingFactor === '0'}
            >
              <MinusIcon />
            </Button>
            <Button
              type="button"
              variant={'outline'}
              onClick={() =>
                handleSpaceBetweenChange(
                  'spacingFactor',
                  +currentSpacingFactor + 1,
                )
              }
              disabled={currentSpacingFactor === '8'}
            >
              <PlusIcon />
            </Button>
          </div>
        </div>
      </CardContent>
    </CardContent>
  )
}
