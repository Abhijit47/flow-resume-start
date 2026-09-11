import { CardContent } from '#/components/ui/card'
import ColorPickerAccent from './color-picker-accent'
import ColorPickerBackground from './color-picker-background'
import ColorPickerText from './color-picker-text'

type BasicMultiCustomModeProps = {
  isShowBasicMultiCustomMode: boolean
}

export default function BasicMultiCustomMode(props: BasicMultiCustomModeProps) {
  const { isShowBasicMultiCustomMode } = props

  return (
    <>
      {isShowBasicMultiCustomMode ? (
        <CardContent
          className={
            'space-y-4 animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'
          }
        >
          <div
            className={
              'flex items-center justify-between max-w-xs mx-auto gap-x-8'
            }
          >
            <div className={'flex flex-col items-center gap-2'}>
              <span>Text</span>
              <ColorPickerText />
            </div>
            <div className={'flex flex-col items-center gap-2'}>
              <span>Background</span>
              <ColorPickerBackground />
            </div>
            <div className={'flex flex-col items-center gap-2'}>
              <span>Accent</span>
              <ColorPickerAccent />
            </div>
          </div>
        </CardContent>
      ) : null}
    </>
  )
}
