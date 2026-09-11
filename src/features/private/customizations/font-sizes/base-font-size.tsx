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
<input type="radio" name="fontSize" id="fontSize0" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="0" checked="">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="fontSize0"></label>

<input type="radio" name="fontSize" id="fontSize1" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="1">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="fontSize1"></label>

<input type="radio" name="fontSize" id="fontSize2" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="2">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="fontSize2"></label>

<input type="radio" name="fontSize" id="fontSize3" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="3"><label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="fontSize3"></label>

<input type="radio" name="fontSize" id="fontSize4" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="4"><label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="fontSize4"></label>

<input type="radio" name="fontSize" id="fontSize5" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="5">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="fontSize5"></label>

<input type="radio" name="fontSize" id="fontSize6" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="6">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="fontSize6"></label>

<input type="radio" name="fontSize" id="fontSize7" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="7">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="fontSize7"></label>

<input type="radio" name="fontSize" id="fontSize8" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="8"><label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="fontSize8"></label>
*/

/*
targetting Base Font Size:
{"customizationUpdates":[
{"value":"0","path":"spacing.fontSize"},
{"value":9,"path":"spacing.titleAndSubtitleFontSizePt"},
{"value":10,"path":"spacing.sectionHeadingFontSizePt"},
{"value":14,"path":"spacing.nameFontSizePt"},
{"value":11,"path":"spacing.jobTitleFontSizePt"}
]}

{"customizationUpdates":[
  {"value":"1","path":"spacing.fontSize"},
  {"value":9.5,"path":"spacing.titleAndSubtitleFontSizePt"},
  {"value":10.5,"path":"spacing.sectionHeadingFontSizePt"},
  {"value":14.5,"path":"spacing.nameFontSizePt"},
  {"value":11.5,"path":"spacing.jobTitleFontSizePt"}
]}

{"customizationUpdates":[
  {"value":"2","path":"spacing.fontSize"},
  {"value":10,"path":"spacing.titleAndSubtitleFontSizePt"},
  {"value":11,"path":"spacing.sectionHeadingFontSizePt"},
  {"value":15,"path":"spacing.nameFontSizePt"},
  {"value":12,"path":"spacing.jobTitleFontSizePt"}
]}

{"customizationUpdates":[
  {"value":"3","path":"spacing.fontSize"},
  {"value":10.5,"path":"spacing.titleAndSubtitleFontSizePt"},
  {"value":11.5,"path":"spacing.sectionHeadingFontSizePt"},
  {"value":15.5,"path":"spacing.nameFontSizePt"},
  {"value":12.5,"path":"spacing.jobTitleFontSizePt"}
]}

{"customizationUpdates":[
  {"value":"4","path":"spacing.fontSize"},
  {"value":11,"path":"spacing.titleAndSubtitleFontSizePt"},
  {"value":12,"path":"spacing.sectionHeadingFontSizePt"},
  {"value":16,"path":"spacing.nameFontSizePt"},
  {"value":13,"path":"spacing.jobTitleFontSizePt"}
]}

{"customizationUpdates":[
  {"value":"5","path":"spacing.fontSize"},
  {"value":11.5,"path":"spacing.titleAndSubtitleFontSizePt"},
  {"value":12.5,"path":"spacing.sectionHeadingFontSizePt"},
  {"value":16.5,"path":"spacing.nameFontSizePt"},
  {"value":13.5,"path":"spacing.jobTitleFontSizePt"}
]}

{"customizationUpdates":[
  {"value":"6","path":"spacing.fontSize"},
  {"value":12,"path":"spacing.titleAndSubtitleFontSizePt"},
  {"value":13,"path":"spacing.sectionHeadingFontSizePt"},
  {"value":17,"path":"spacing.nameFontSizePt"},
  {"value":14,"path":"spacing.jobTitleFontSizePt"}
]}

{"customizationUpdates":[
  {"value":"7","path":"spacing.fontSize"},
  {"value":12.5,"path":"spacing.titleAndSubtitleFontSizePt"},
  {"value":13.5,"path":"spacing.sectionHeadingFontSizePt"},
  {"value":17.5,"path":"spacing.nameFontSizePt"},
  {"value":14.5,"path":"spacing.jobTitleFontSizePt"}
]}

{"customizationUpdates":[
  {"value":"8","path":"spacing.fontSize"},
  {"value":13,"path":"spacing.titleAndSubtitleFontSizePt"},
  {"value":14,"path":"spacing.sectionHeadingFontSizePt"},
  {"value":18,"path":"spacing.nameFontSizePt"},
  {"value":15,"path":"spacing.jobTitleFontSizePt"}
]}
*/

/*
getting res back after update
{
	"spacing": {
		"fontSize": "0",
		"lineHeight": "8",
		"spacingFactor": "3",
		"marginVertical": "3",
		"nameFontSizePt": 14,
		"marginHorizontal": "4",
		"jobTitleFontSizePt": 11,
		"sectionHeadingFontSizePt": 10,
		"titleAndSubtitleFontSizePt": 9
	}
}

{
	"spacing": {
		"fontSize": "1",
		"lineHeight": "8",
		"spacingFactor": "3",
		"marginVertical": "3",
		"nameFontSizePt": 14.5,
		"marginHorizontal": "4",
		"jobTitleFontSizePt": 11.5,
		"sectionHeadingFontSizePt": 10.5,
		"titleAndSubtitleFontSizePt": 9.5
	}
}

{
	"spacing": {
		"fontSize": "2",
		"lineHeight": "8",
		"spacingFactor": "3",
		"marginVertical": "3",
		"nameFontSizePt": 15,
		"marginHorizontal": "4",
		"jobTitleFontSizePt": 12,
		"sectionHeadingFontSizePt": 11,
		"titleAndSubtitleFontSizePt": 10
	}
}
{
	"spacing": {
		"fontSize": "3",
		"lineHeight": "8",
		"spacingFactor": "3",
		"marginVertical": "3",
		"nameFontSizePt": 15.5,
		"marginHorizontal": "4",
		"jobTitleFontSizePt": 12.5,
		"sectionHeadingFontSizePt": 11.5,
		"titleAndSubtitleFontSizePt": 10.5
	}
}
{
	"spacing": {
		"fontSize": "4",
		"lineHeight": "8",
		"spacingFactor": "3",
		"marginVertical": "3",
		"nameFontSizePt": 16,
		"marginHorizontal": "4",
		"jobTitleFontSizePt": 13,
		"sectionHeadingFontSizePt": 12,
		"titleAndSubtitleFontSizePt": 11
	}
}
{
	"spacing": {
		"fontSize": "5",
		"lineHeight": "8",
		"spacingFactor": "3",
		"marginVertical": "3",
		"nameFontSizePt": 16.5,
		"marginHorizontal": "4",
		"jobTitleFontSizePt": 13.5,
		"sectionHeadingFontSizePt": 12.5,
		"titleAndSubtitleFontSizePt": 11.5
	}
}
{
	"spacing": {
		"fontSize": "6",
		"lineHeight": "8",
		"spacingFactor": "3",
		"marginVertical": "3",
		"nameFontSizePt": 17,
		"marginHorizontal": "4",
		"jobTitleFontSizePt": 14,
		"sectionHeadingFontSizePt": 13,
		"titleAndSubtitleFontSizePt": 12
	}
}
{
	"spacing": {
		"fontSize": "7",
		"lineHeight": "8",
		"spacingFactor": "3",
		"marginVertical": "3",
		"nameFontSizePt": 17.5,
		"marginHorizontal": "4",
		"jobTitleFontSizePt": 14.5,
		"sectionHeadingFontSizePt": 13.5,
		"titleAndSubtitleFontSizePt": 12.5
	}
}
{ max value
	"spacing": {
		"fontSize": "8",
		"lineHeight": "8",
		"spacingFactor": "3",
		"marginVertical": "3",
		"nameFontSizePt": 18,
		"marginHorizontal": "4",
		"jobTitleFontSizePt": 15,
		"sectionHeadingFontSizePt": 14,
		"titleAndSubtitleFontSizePt": 13
	}
}
*/

/**
 * API req. Summary
 * Min 0
 * Max 8
 * Step 1 inc/dec
 * Steps 9
 * 0, 1, 2, 3, 4, 5, 6, 7, 8
 */

// const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'
const fontBtnClass =
  'size-8 rounded-none border-t-0 border-l-0 border-b-0 border-r border-foreground'

export default function BaseFontSize() {
  // const { fontsData, onChangeFontData } = props

  const {
    customization: { spacing },
    updateSpacing,
  } = useCustomizationStore()

  const currentFontSize = spacing.fontSize

  // sync the ui with calc value '0' means 9 inc 0.5 (max can show 13 min can be 9)
  const syncUi =
    currentFontSize === '0'
      ? 9
      : currentFontSize === '1'
        ? 9.5
        : currentFontSize === '2'
          ? 10
          : currentFontSize === '3'
            ? 10.5
            : currentFontSize === '4'
              ? 11
              : currentFontSize === '5'
                ? 11.5
                : currentFontSize === '6'
                  ? 12
                  : currentFontSize === '7'
                    ? 12.5
                    : currentFontSize === '8'
                      ? 13
                      : ''

  function handleFontSizeChange(field: string, value: number) {
    // if (value > 13) {
    //   onChangeFontData((prevState) => ({
    //     ...prevState,
    //     [field]: 13,
    //   }))
    // } else if (value < 9) {
    //   onChangeFontData((prevState) => ({
    //     ...prevState,
    //     [field]: 9,
    //   }))
    // } else {
    //   onChangeFontData((prevState) => ({
    //     ...prevState,
    //     [field]: value,
    //   }))
    // }
    if (value === 0) {
      updateSpacing({
        ...spacing,
        fontSize: '0',

        // TODO: as of not doing ui needs to be change
        // titleAndSubtitleFontSizePt: 9,
        // sectionHeadingFontSizePt: 10,
        // nameFontSizePt: 14,
        // jobTitleFontSizePt: 11,
      })
      return
    } else if (value === 8) {
      updateSpacing({
        ...spacing,
        fontSize: '8',

        // TODO: as of not doing ui needs to be change
        // titleAndSubtitleFontSizePt: 9,
        // sectionHeadingFontSizePt: 10,
        // nameFontSizePt: 14,
        // jobTitleFontSizePt: 11,
      })
      return
    } else {
      updateSpacing({
        ...spacing,
        [field]: value.toString(),
        // fontSize: (parseInt(currentFontSize) - 1).toString(),

        // TODO: as of not doing ui needs to be change
        // titleAndSubtitleFontSizePt:
        //   spacing.titleAndSubtitleFontSizePt - 0.5,
        // sectionHeadingFontSizePt:
        //   spacing.sectionHeadingFontSizePt - 0.5,
        // nameFontSizePt: spacing.nameFontSizePt - 0.5,
        // jobTitleFontSizePt: spacing.jobTitleFontSizePt - 0.5,
      })
    }
  }

  return (
    <CardContent>
      <CardHeader>
        <CardTitle>Base Font Size({'fontSize'})</CardTitle>
        <CardAction>{syncUi}pt</CardAction>
      </CardHeader>
      <CardContent>
        <div className={'flex justify-between items-center gap-2'}>
          <div className={'bg-muted py-1'}>
            <div className={'w-full flex items-center justify-between'}>
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === '0' ? 'default' : 'outline'}
                onClick={() => handleFontSizeChange('fontSize', 0)}
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === '1' ? 'default' : 'outline'}
                onClick={() => handleFontSizeChange('fontSize', 1)}
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === '2' ? 'default' : 'outline'}
                onClick={() => handleFontSizeChange('fontSize', 2)}
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === '3' ? 'default' : 'outline'}
                onClick={() => handleFontSizeChange('fontSize', 3)}
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === '4' ? 'default' : 'outline'}
                onClick={() => handleFontSizeChange('fontSize', 4)}
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === '5' ? 'default' : 'outline'}
                onClick={() => handleFontSizeChange('fontSize', 5)}
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === '6' ? 'default' : 'outline'}
                onClick={() => handleFontSizeChange('fontSize', 6)}
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === '7' ? 'default' : 'outline'}
                onClick={() => handleFontSizeChange('fontSize', 7)}
              />
              <Button
                type="button"
                className={'size-8 rounded-none border-none'}
                variant={currentFontSize === '8' ? 'default' : 'outline'}
                onClick={() => handleFontSizeChange('fontSize', 8)}
              />
            </div>
          </div>
          <div className={'flex gap-2'}>
            <Button
              type="button"
              variant={'outline'}
              disabled={spacing.fontSize === '0'}

              onClick={() =>
                handleFontSizeChange('fontSize', +currentFontSize - 1)
              }
            >
              <MinusIcon />
            </Button>
            <Button
              type="button"
              variant={'outline'}
              disabled={spacing.fontSize === '8'}

              onClick={() =>
                handleFontSizeChange('fontSize', +currentFontSize + 1)
              }
            >
              <PlusIcon />
            </Button>
          </div>
        </div>
      </CardContent>
    </CardContent>
  )
}
