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
<input type="radio" name="jobTitleFontSizePt" id="jobTitleFontSizePt11" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="11" checked="">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="jobTitleFontSizePt11"></label>

<input type="radio" name="jobTitleFontSizePt" id="jobTitleFontSizePt12.5" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="12.5">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="jobTitleFontSizePt12.5"></label>

<input type="radio" name="jobTitleFontSizePt" id="jobTitleFontSizePt14" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="14">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="jobTitleFontSizePt14"></label>

<input type="radio" name="jobTitleFontSizePt" id="jobTitleFontSizePt15.5" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="15.5">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="jobTitleFontSizePt15.5"></label>

<input type="radio" name="jobTitleFontSizePt" id="jobTitleFontSizePt17" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="17">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="jobTitleFontSizePt17"></label>

<input type="radio" name="jobTitleFontSizePt" id="jobTitleFontSizePt18.5" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="18.5">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="jobTitleFontSizePt18.5"></label>

<input type="radio" name="jobTitleFontSizePt" id="jobTitleFontSizePt20" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="20">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="jobTitleFontSizePt20"></label>

<input type="radio" name="jobTitleFontSizePt" id="jobTitleFontSizePt21.5" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="21.5">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="jobTitleFontSizePt21.5"></label>

<input type="radio" name="jobTitleFontSizePt" id="jobTitleFontSizePt23" class="invisible fixed [&amp;:checked+label]:bg-transparent opacity-0" value="23">
<label class="block relative hover:bg-blue-200 rounded-4px h-10 transition-colors duration-200 cursor-pointer" style="width: 11.1111%;" for="jobTitleFontSizePt23"></label>

*/

/*
API Req: No change here
{"customizationUpdates":[{"value":11,"path":"spacing.jobTitleFontSizePt"}]}
{"customizationUpdates":[{"value":12.5,"path":"spacing.jobTitleFontSizePt"}]}
{"customizationUpdates":[{"value":14,"path":"spacing.jobTitleFontSizePt"}]}

{"customizationUpdates":[
{"value":15.5,"path":"spacing.jobTitleFontSizePt"},
{"value":(15.5+1),"path":"spacing.nameFontSizePt"}
]}
{"customizationUpdates":[
{"value":17,"path":"spacing.jobTitleFontSizePt"},
{"value":(17+1),"path":"spacing.nameFontSizePt"}
]}
{"customizationUpdates":[
{"value":18.5,"path":"spacing.jobTitleFontSizePt"},
{"value":(18.5+1) (for match ui as of now),"path":"spacing.nameFontSizePt"}
]}
{"customizationUpdates":[
{"value":20,"path":"spacing.jobTitleFontSizePt"},
{"value":(20+1) (for match ui as of now),"path":"spacing.nameFontSizePt"}
]}
{"customizationUpdates":[
{"value":21.5,"path":"spacing.jobTitleFontSizePt"},
{"value":(21.5+1) (for match ui as of now),"path":"spacing.nameFontSizePt"}
]}
{"customizationUpdates":[
{"value":23,"path":"spacing.jobTitleFontSizePt"},
{"value":(23+1) (for match ui as of now),"path":"spacing.nameFontSizePt"}
]}
 */

/**
 * API Req. Summary
 * Min 11
 * Max 23
 * Step 1.5 inc/dec
 * Steps 9
 * 11, 12.5, 14, 15.5, 17, 18.5, 20, 21.5, 23
 */

const fontBtnClass =
  'size-8 rounded-none border-t-0 border-l-0 border-b-0 border-r border-foreground'
// const animationClass =
//   'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

// const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'

export default function ProfessionalTitleFontSize() {
  const {
    customization: { spacing },
    updateSpacing,
  } = useCustomizationStore()

  const currentFontSize = spacing.jobTitleFontSizePt

  function handleProfessionalTitleSizeChange(field: string, value: number) {
    if (value < 11) {
      return
    } else if (value > 23) {
      return
    } else {
      updateSpacing({
        ...spacing,
        [field]: value,
        // when 15.5 to 23
        nameFontSizePt: value > 14 ? value + 1 : spacing.nameFontSizePt,
      })
    }
  }

  return (
    <CardContent>
      <CardHeader>
        <CardTitle>Professional Title({'jobTitleFontSizePt'})</CardTitle>
        <CardAction>+{currentFontSize - 10 + 1}pt</CardAction>
      </CardHeader>
      <CardContent>
        <div className={'flex justify-between items-center gap-2'}>
          <div className={'bg-muted py-1'}>
            <div className={'w-full flex items-center justify-between'}>
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === 11 ? 'default' : 'outline'}
                onClick={() =>
                  handleProfessionalTitleSizeChange('jobTitleFontSizePt', 11)
                }
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === 12.5 ? 'default' : 'outline'}
                onClick={() =>
                  handleProfessionalTitleSizeChange('jobTitleFontSizePt', 12.5)
                }
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === 14 ? 'default' : 'outline'}
                onClick={() =>
                  handleProfessionalTitleSizeChange('jobTitleFontSizePt', 14)
                }
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === 15.5 ? 'default' : 'outline'}
                onClick={() =>
                  handleProfessionalTitleSizeChange('jobTitleFontSizePt', 15.5)
                }
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === 17 ? 'default' : 'outline'}
                onClick={() =>
                  handleProfessionalTitleSizeChange('jobTitleFontSizePt', 17)
                }
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === 18.5 ? 'default' : 'outline'}
                onClick={() =>
                  handleProfessionalTitleSizeChange('jobTitleFontSizePt', 18.5)
                }
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === 20 ? 'default' : 'outline'}
                onClick={() =>
                  handleProfessionalTitleSizeChange('jobTitleFontSizePt', 20)
                }
              />
              <Button
                type="button"
                className={fontBtnClass}
                variant={currentFontSize === 21.5 ? 'default' : 'outline'}
                onClick={() =>
                  handleProfessionalTitleSizeChange('jobTitleFontSizePt', 21.5)
                }
              />
              <Button
                type="button"
                className={'size-8 rounded-none border-none'}
                variant={currentFontSize === 23 ? 'default' : 'outline'}
                onClick={() =>
                  handleProfessionalTitleSizeChange('jobTitleFontSizePt', 23)
                }
              />
            </div>
          </div>
          <div className={'flex gap-2'}>
            <Button
              type="button"
              variant={'outline'}
              disabled={currentFontSize === 11}
              onClick={() =>
                handleProfessionalTitleSizeChange(
                  'jobTitleFontSizePt',
                  currentFontSize - 1.5,
                )
              }
            >
              <MinusIcon />
            </Button>
            <Button
              type="button"
              variant={'outline'}
              disabled={currentFontSize === 23}
              onClick={() =>
                handleProfessionalTitleSizeChange(
                  'jobTitleFontSizePt',
                  currentFontSize + 1.5,
                )
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
