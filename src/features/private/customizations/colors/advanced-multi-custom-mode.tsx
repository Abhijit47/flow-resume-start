import { cn } from '#/lib/utils'
import {
  ColorPickerAdvancedLightAccent,
  ColorPickerAdvancedLightBackground,
  ColorPickerAdvancedLightText,
  ColorPickerAdvancedStrongAccent,
  ColorPickerAdvancedStrongBackground,
  ColorPickerAdvancedStrongText,
} from './color-pickers-advanced-custom-mode'

type AdvancedMultiCustomModeProps = {
  isShowAdvancedMultiCustomMode: boolean
}

const animationClass =
  'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

export default function AdvancedMultiCustomMode(
  props: AdvancedMultiCustomModeProps,
) {
  const { isShowAdvancedMultiCustomMode } = props

  return (
    <>
      {isShowAdvancedMultiCustomMode ? (
        <div className={cn('flex flex-col gap-4', animationClass)}>
          <div className="space-y-2">
            <p className="font-bold text-center capitalize">
              advanced custom strong row
            </p>
            <div className="flex justify-evenly items-center gap-2">
              <div className="flex flex-col items-center gap-2">
                <span>Text</span>
                <ColorPickerAdvancedStrongText />
              </div>
              <div className="flex flex-col items-center gap-2">
                <span>Background</span>
                <ColorPickerAdvancedStrongBackground />
              </div>
              <div className="flex flex-col items-center gap-2">
                <span>Accent</span>
                <ColorPickerAdvancedStrongAccent />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-bold text-center capitalize">
              advanced custom light row
            </p>

            <div className="flex justify-evenly items-center gap-2">
              <div className="flex flex-col items-center gap-2">
                <span>Text</span>
                <ColorPickerAdvancedLightText />
              </div>
              <div className="flex flex-col items-center gap-2">
                <span>Background</span>
                <ColorPickerAdvancedLightBackground />
              </div>
              <div className="flex flex-col items-center gap-2">
                <span>Accent</span>
                <ColorPickerAdvancedLightAccent />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
