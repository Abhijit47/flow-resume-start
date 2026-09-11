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
<input type="radio" name="titleAndSubtitleFontSizePt" id="titleAndSubtitleFontSizePt9" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="9" checked="">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="titleAndSubtitleFontSizePt9"></label>

<input type="radio" name="titleAndSubtitleFontSizePt" id="titleAndSubtitleFontSizePt9.25" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="9.25">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="titleAndSubtitleFontSizePt9.25"></label>

<input type="radio" name="titleAndSubtitleFontSizePt" id="titleAndSubtitleFontSizePt9.5" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="9.5">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="titleAndSubtitleFontSizePt9.5"></label>

<input type="radio" name="titleAndSubtitleFontSizePt" id="titleAndSubtitleFontSizePt9.75" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="9.75">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="titleAndSubtitleFontSizePt9.75"></label>

<input type="radio" name="titleAndSubtitleFontSizePt" id="titleAndSubtitleFontSizePt10" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="10">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="titleAndSubtitleFontSizePt10"></label>

<input type="radio" name="titleAndSubtitleFontSizePt" id="titleAndSubtitleFontSizePt10.25" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="10.25">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="titleAndSubtitleFontSizePt10.25"></label>

<input type="radio" name="titleAndSubtitleFontSizePt" id="titleAndSubtitleFontSizePt10.5" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="10.5">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="titleAndSubtitleFontSizePt10.5"></label>

<input type="radio" name="titleAndSubtitleFontSizePt" id="titleAndSubtitleFontSizePt10.75" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="10.75">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="titleAndSubtitleFontSizePt10.75"></label>

<input type="radio" name="titleAndSubtitleFontSizePt" id="titleAndSubtitleFontSizePt11" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="11">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="titleAndSubtitleFontSizePt11"></label>
*/

/*
{"customizationUpdates":[{"value":9,"path":"spacing.titleAndSubtitleFontSizePt"}]}
{"customizationUpdates":[{"value":9.25,"path":"spacing.titleAndSubtitleFontSizePt"},{"value":10.5,"path":"spacing.sectionHeadingFontSizePt"}]}
{"customizationUpdates":[{"value":9.5,"path":"spacing.titleAndSubtitleFontSizePt"}]}
{"customizationUpdates":[{"value":9.75,"path":"spacing.titleAndSubtitleFontSizePt"},{"value":11,"path":"spacing.sectionHeadingFontSizePt"}]}
{"customizationUpdates":[{"value":10,"path":"spacing.titleAndSubtitleFontSizePt"}]}
{"customizationUpdates":[{"value":10.25,"path":"spacing.titleAndSubtitleFontSizePt"},{"value":11.5,"path":"spacing.sectionHeadingFontSizePt"}]}
{"customizationUpdates":[{"value":10.5,"path":"spacing.titleAndSubtitleFontSizePt"}]}
{"customizationUpdates":[{"value":10.75,"path":"spacing.titleAndSubtitleFontSizePt"},{"value":12,"path":"spacing.sectionHeadingFontSizePt"}]}
{"customizationUpdates":[{"value":11,"path":"spacing.titleAndSubtitleFontSizePt"}]}
*/

/**
 * API req. Summary
 * Min 9
 * Max 11
 * Step 0.25 inc/dec
 * Steps 9
 * 9, 9.25, 9.5, 9.75, 10, 10.25, 10.5, 10.75, 11
 */

const fontBtnClass =
  'size-8 rounded-none border-t-0 border-l-0 border-b-0 border-r border-foreground'

export default function EntryHeaderFontSize() {
  // const { fontsData, onChangeFontData } = props

  const {
    customization: { spacing },
    updateSpacing,
  } = useCustomizationStore()

  const currentFontSize = spacing.titleAndSubtitleFontSizePt

  function handleEntryHeaderSizeChange(
    field: 'titleAndSubtitleFontSizePt',
    value: number,
  ) {
    if (
      value > 11 ||
      value < 9 ||
      (value > currentFontSize &&
        Math.round((value - currentFontSize) * 100) % 25 !== 0)
    ) {
      // Value out of allowed range or increment/decrement step is not 0.25
      return
    }
    switch (value) {
      case 9: {
        updateSpacing({
          ...spacing,
          [field]: value,
        })
        break
      }
      case 9.25: {
        updateSpacing({
          ...spacing,
          [field]: value,
          sectionHeadingFontSizePt: 10.5,
        })
        break
      }
      case 9.5: {
        updateSpacing({
          ...spacing,
          [field]: value,
        })
        break
      }
      case 9.75: {
        updateSpacing({
          ...spacing,
          [field]: value,
          sectionHeadingFontSizePt: 11,
        })
        break
      }
      case 10: {
        updateSpacing({
          ...spacing,
          [field]: value,
        })
        break
      }
      case 10.25: {
        updateSpacing({
          ...spacing,
          [field]: value,
          sectionHeadingFontSizePt: 11.5,
        })
        break
      }
      case 10.5: {
        updateSpacing({
          ...spacing,
          [field]: value,
        })
        break
      }
      case 10.75: {
        updateSpacing({
          ...spacing,
          [field]: value,
          sectionHeadingFontSizePt: 12,
        })
        break
      }
      case 11: {
        updateSpacing({
          ...spacing,
          [field]: value,
        })
        break
      }
      default: {
        break
      }
    }
  }

  return (
    <CardContent>
      <CardHeader>
        <CardTitle>Entry Header({'titleAndSubtitleFontSizePt'})</CardTitle>
        <CardAction>+{currentFontSize - 9}pt</CardAction>
      </CardHeader>
      <CardContent>
        <div className={'flex justify-between items-center gap-2'}>
          <div className={'bg-muted py-1'}>
            <div className={'w-full flex items-center justify-between'}>
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === 9 ? 'default' : 'outline'}
                onClick={() =>
                  handleEntryHeaderSizeChange('titleAndSubtitleFontSizePt', 9)
                }
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === 9.25 ? 'default' : 'outline'}
                onClick={() =>
                  handleEntryHeaderSizeChange(
                    'titleAndSubtitleFontSizePt',
                    9.25,
                  )
                }
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === 9.5 ? 'default' : 'outline'}
                onClick={() =>
                  handleEntryHeaderSizeChange('titleAndSubtitleFontSizePt', 9.5)
                }
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === 9.75 ? 'default' : 'outline'}
                onClick={() =>
                  handleEntryHeaderSizeChange(
                    'titleAndSubtitleFontSizePt',
                    9.75,
                  )
                }
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === 10 ? 'default' : 'outline'}
                onClick={() =>
                  handleEntryHeaderSizeChange('titleAndSubtitleFontSizePt', 10)
                }
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === 10.25 ? 'default' : 'outline'}
                onClick={() =>
                  handleEntryHeaderSizeChange(
                    'titleAndSubtitleFontSizePt',
                    10.25,
                  )
                }
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === 10.5 ? 'default' : 'outline'}
                onClick={() =>
                  handleEntryHeaderSizeChange(
                    'titleAndSubtitleFontSizePt',
                    10.5,
                  )
                }
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === 10.75 ? 'default' : 'outline'}
                onClick={() =>
                  handleEntryHeaderSizeChange(
                    'titleAndSubtitleFontSizePt',
                    10.75,
                  )
                }
              />
              <Button
                type="button"
                className={'size-8 rounded-none border-none'}
                variant={currentFontSize === 11 ? 'default' : 'outline'}
                onClick={() =>
                  handleEntryHeaderSizeChange('titleAndSubtitleFontSizePt', 11)
                }
              />
            </div>
          </div>
          <div className={'flex gap-2'}>
            <Button
              type="button"
              variant={'outline'}
              onClick={() =>
                handleEntryHeaderSizeChange(
                  'titleAndSubtitleFontSizePt',
                  currentFontSize - 0.25,
                )
              }
              disabled={currentFontSize === 9}
            >
              <MinusIcon />
            </Button>
            <Button
              type="button"
              variant={'outline'}
              onClick={() =>
                handleEntryHeaderSizeChange(
                  'titleAndSubtitleFontSizePt',
                  currentFontSize + 0.25,
                )
              }
              disabled={currentFontSize === 11}
            >
              <PlusIcon />
            </Button>
          </div>
        </div>
      </CardContent>
    </CardContent>
  )
}
