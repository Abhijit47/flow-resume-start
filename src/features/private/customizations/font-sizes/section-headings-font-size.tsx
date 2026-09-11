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
<input type="radio" name="sectionHeadingFontSizePt" id="sectionHeadingFontSizePt10" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="10" checked="">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="sectionHeadingFontSizePt10"></label>

<input type="radio" name="sectionHeadingFontSizePt" id="sectionHeadingFontSizePt10.5" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="10.5">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="sectionHeadingFontSizePt10.5"></label>

<input type="radio" name="sectionHeadingFontSizePt" id="sectionHeadingFontSizePt11" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="11">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="sectionHeadingFontSizePt11"></label>

<input type="radio" name="sectionHeadingFontSizePt" id="sectionHeadingFontSizePt11.5" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="11.5">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="sectionHeadingFontSizePt11.5"></label>

<input type="radio" name="sectionHeadingFontSizePt" id="sectionHeadingFontSizePt12" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="12">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="sectionHeadingFontSizePt12"></label>

<input type="radio" name="sectionHeadingFontSizePt" id="sectionHeadingFontSizePt12.5" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="12.5">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="sectionHeadingFontSizePt12.5"></label>

<input type="radio" name="sectionHeadingFontSizePt" id="sectionHeadingFontSizePt13" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="13">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="sectionHeadingFontSizePt13"></label>

<input type="radio" name="sectionHeadingFontSizePt" id="sectionHeadingFontSizePt13.5" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="13.5">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="sectionHeadingFontSizePt13.5"></label>

<input type="radio" name="sectionHeadingFontSizePt" id="sectionHeadingFontSizePt14" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="14">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="sectionHeadingFontSizePt14"></label>
*/

/*
API Req.
{"customizationUpdates":[{"value":10,"path":"spacing.sectionHeadingFontSizePt"}]}
{"customizationUpdates":[{"value":10.5,"path":"spacing.sectionHeadingFontSizePt"}]}
{"customizationUpdates":[{"value":11,"path":"spacing.sectionHeadingFontSizePt"}]}
{"customizationUpdates":[{"value":11.5,"path":"spacing.sectionHeadingFontSizePt"}]}
{"customizationUpdates":[{"value":12,"path":"spacing.sectionHeadingFontSizePt"}]}
{"customizationUpdates":[{"value":12.5,"path":"spacing.sectionHeadingFontSizePt"}]}
{"customizationUpdates":[{"value":13,"path":"spacing.sectionHeadingFontSizePt"}]}
{"customizationUpdates":[{"value":13.5,"path":"spacing.sectionHeadingFontSizePt"}]}
{"customizationUpdates":[{"value":14,"path":"spacing.sectionHeadingFontSizePt"}]}
*/

/**
 * Summary
 * Min 10
 * Max 14
 * Step 0.5 inc/dec
 * Steps 9
 * 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14
 */

const fontBtnClass =
  'size-8 rounded-none border-t-0 border-l-0 border-b-0 border-r border-foreground'

export default function SectionHeadingsFontSize() {
  // const { fontsData, onChangeFontData } = props

  const {
    customization: { spacing },
    updateSpacing,
  } = useCustomizationStore()

  const currentFontSize = spacing.sectionHeadingFontSizePt

  function handleSectionHeadingsSizeChange(
    field: 'sectionHeadingFontSizePt',
    value: number,
  ) {
    // if (value > 5) {
    //   onChangeFontData((prevState) => ({
    //     ...prevState,
    //     [field]: 5,
    //   }))
    // } else if (value < 1) {
    //   onChangeFontData((prevState) => ({
    //     ...prevState,
    //     [field]: 1,
    //   }))
    // } else {
    //   onChangeFontData((prevState) => ({
    //     ...prevState,
    //     [field]: value,
    //   }))
    // }

    if (value === 10) {
      updateSpacing({
        ...spacing,
        [field]: 10,
      })
    } else if (value === 14) {
      updateSpacing({
        ...spacing,
        [field]: 14,
      })
    } else {
      updateSpacing({
        ...spacing,
        [field]: value,
      })
    }
  }

  // if val 10 its show 1 , // 10.5 ->1.5 // 11 -> 2 how it should be calculated ??
  // in this calc 1 -> 1.05 not as expected...

  // now output came start from 0.5 and end 4.5
  // but result should be start from 1 end should be 5
  // const uiValue = currentFontSize - 9.5

  const syncUi =
    currentFontSize === 10
      ? 1
      : currentFontSize === 10.5
        ? 1.5
        : currentFontSize === 11
          ? 2
          : currentFontSize === 11.5
            ? 2.5
            : currentFontSize === 12
              ? 3
              : currentFontSize === 12.5
                ? 3.5
                : currentFontSize === 13
                  ? 4
                  : currentFontSize === 13.5
                    ? 4.5
                    : currentFontSize === 14
                      ? 5
                      : ''

  return (
    <CardContent>
      <CardHeader>
        <CardTitle>Section Headings({'sectionHeadingFontSizePt'})</CardTitle>
        <CardAction>+{syncUi}pt</CardAction>
      </CardHeader>
      <CardContent>
        <div className={'flex justify-between items-center gap-2'}>
          <div className={'bg-muted py-1'}>
            <div className={'w-full flex items-center justify-between'}>
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === 10 ? 'default' : 'outline'}
                onClick={() =>
                  handleSectionHeadingsSizeChange(
                    'sectionHeadingFontSizePt',
                    10,
                  )
                }
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === 10.5 ? 'default' : 'outline'}
                onClick={() =>
                  handleSectionHeadingsSizeChange(
                    'sectionHeadingFontSizePt',
                    10.5,
                  )
                }
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === 11 ? 'default' : 'outline'}
                onClick={() =>
                  handleSectionHeadingsSizeChange(
                    'sectionHeadingFontSizePt',
                    11,
                  )
                }
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === 11.5 ? 'default' : 'outline'}
                onClick={() =>
                  handleSectionHeadingsSizeChange(
                    'sectionHeadingFontSizePt',
                    11.5,
                  )
                }
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === 12 ? 'default' : 'outline'}
                onClick={() =>
                  handleSectionHeadingsSizeChange(
                    'sectionHeadingFontSizePt',
                    12,
                  )
                }
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === 12.5 ? 'default' : 'outline'}
                onClick={() =>
                  handleSectionHeadingsSizeChange(
                    'sectionHeadingFontSizePt',
                    12.5,
                  )
                }
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === 13 ? 'default' : 'outline'}
                onClick={() =>
                  handleSectionHeadingsSizeChange(
                    'sectionHeadingFontSizePt',
                    13,
                  )
                }
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === 13.5 ? 'default' : 'outline'}
                onClick={() =>
                  handleSectionHeadingsSizeChange(
                    'sectionHeadingFontSizePt',
                    13.5,
                  )
                }
              />
              <Button
                type="button"
                className={'size-8 rounded-none border-none'}
                variant={currentFontSize === 14 ? 'default' : 'outline'}
                onClick={() =>
                  handleSectionHeadingsSizeChange(
                    'sectionHeadingFontSizePt',
                    14,
                  )
                }
              />
            </div>
          </div>
          <div className={'flex gap-2'}>
            <Button
              type="button"
              variant={'outline'}
              onClick={() =>
                handleSectionHeadingsSizeChange(
                  'sectionHeadingFontSizePt',
                  currentFontSize - 0.5,
                )
              }
              disabled={currentFontSize === 10}
            >
              <MinusIcon />
            </Button>
            <Button
              type="button"
              variant={'outline'}
              onClick={() =>
                handleSectionHeadingsSizeChange(
                  'sectionHeadingFontSizePt',
                  currentFontSize + 0.5,
                )
              }
              disabled={currentFontSize === 14}
            >
              <PlusIcon />
            </Button>
          </div>
        </div>
      </CardContent>
    </CardContent>
  )
}
