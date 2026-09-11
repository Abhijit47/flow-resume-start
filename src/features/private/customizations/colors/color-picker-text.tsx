import {
  ColorPicker,
  parseColor,
  useColorPicker,
} from '@ark-ui/react/color-picker'
import { CrosshairIcon, PipetteIcon } from 'lucide-react'
import { useId, useState } from 'react'

import { Button } from '#/components/ui/button'
import { useCustomizationStore } from '#/store/customization-store'

export default function ColorPickerText() {
  const [open, setOpen] = useState(false)
  const id = useId()

  const {
    customization: { colors },
    updateColors,
  } = useCustomizationStore()

  const colorPicker = useColorPicker({
    id: id,
    defaultValue: parseColor(colors.basic.multiCustom.textColor),
    closeOnSelect: true,
    onValueChange(event) {
      console.log('onValueChange', event.value.toString('hex'))
      // console.log("parse", parseColor(details.value.toString()))
      // console.log('onValueChange', event)
      // setSelectedHexColor(event.value.toString('hex'))

      // criteria:
      // colors.basic.multi.textColor = newValue
      // colors.basic.multiCustom.textColor = newValue
      updateColors({
        basic: {
          ...colors.basic,
          multi: {
            ...colors.basic.multi,
            textColor: event.value.toString('hex'),
          },
          multiCustom: {
            ...colors.basic.multiCustom,
            textColor: event.value.toString('hex'),
          },
        },
      })
      // setOpen(false)
    },
    open,
    onOpenChange(e) {
      setOpen(e.open)
    },
    format: 'rgba',
    onFocusOutside() {
      setOpen(false)
    },
    onInteractOutside() {
      setOpen(false)
    },
    onValueChangeEnd(event) {
      // setOpen(false)
      // console.log('onValueChangeEnd', event)
      // console.log('isCustomColorMode', isCustomColorMode)
      // console.log(
      //   'onValueChangeEnd',
      //   JSON.stringify(event.valueAsString, null, 2),
      // )
      console.log('info', event.value.toString('hex'))
      // setSelectedHexColor(event.value.toString('hex'))

      // criteria:
      // colors.basic.multi.textColor = newValue
      // colors.basic.multiCustom.textColor = newValue
      updateColors({
        basic: {
          ...colors.basic,
          multi: {
            ...colors.basic.multi,
            textColor: event.value.toString('hex'),
          },
          multiCustom: {
            ...colors.basic.multiCustom,
            textColor: event.value.toString('hex'),
          },
        },
      })
      // setOpen(false)
    },
    onPointerDownOutside() {
      setOpen(false)
    },
    openAutoFocus: true,
  })

  return (
    <ColorPicker.RootProvider className={'h-fit max-w-100'} value={colorPicker}>
      <ColorPicker.Label className={'sr-only'}>Text Color</ColorPicker.Label>

      <ColorPicker.Control className="flex flex-wrap items-center gap-1">
        <ColorPicker.Trigger asChild>
          <Button
            size={'icon-lg'}
            variant={'outline'}
            className={'h-10 w-10 cursor-pointer rounded-full p-0'}
          >
            <ColorPicker.TransparencyGrid
              className={'h-full w-full rounded-full'}
            />
            <ColorPicker.ValueSwatch
              className={'z-1 h-full w-full rounded-full'}
              // style={{
              //   background:
              //     'conic-gradient(from 90deg, violet, indigo, blue, green, yellow, orange, red, violet)',
              // }}
              // onClick={() => setIsCustomColorMode(true)}
            />
          </Button>
        </ColorPicker.Trigger>
      </ColorPicker.Control>

      <ColorPicker.Positioner>
        <ColorPicker.Content className="z-10 relative flex flex-col gap-3 bg-card drop-shadow-lg p-4 border border-muted rounded-lg w-full min-w-xs h-full origin-start">
          <ColorPicker.Area
            className={
              'relative h-40 w-full touch-none overflow-hidden rounded-md'
            }
          >
            <ColorPicker.AreaBackground
              className={'h-full w-full rounded-lg bg-amber-900 p-2'}
            />
            <ColorPicker.AreaThumb asChild>
              <Button
                size={'icon-xs'}
                variant={'ghost'}
                className={
                  'size-4.5 -translate-x-2/4 -translate-y-2/4 rounded-full border-background focus-visible:shadow-sm'
                }
              >
                <CrosshairIcon className="stroke-white" />
              </Button>
            </ColorPicker.AreaThumb>
          </ColorPicker.Area>
          <div className={'flex items-center gap-3'}>
            <ColorPicker.EyeDropperTrigger asChild>
              <Button
                size={'icon-lg'}
                variant={'outline'}
                className={'rounded-full'}
              >
                <PipetteIcon />
              </Button>
            </ColorPicker.EyeDropperTrigger>
            <div className={'flex flex-col gap-2'}>
              <ColorPicker.ChannelSlider
                className={'relative h-2.5 w-full flex-1 rounded-full'}
                channel="hue"
              >
                <ColorPicker.ChannelSliderTrack
                  className={'h-2.5 w-full min-w-56 rounded-full'}
                />
                <ColorPicker.ChannelSliderThumb
                  className={
                    'h-3 w-3 -translate-x-2/4 -translate-y-2/4 rounded-full shadow-lg ring-2 ring-white'
                  }
                />
              </ColorPicker.ChannelSlider>

              <ColorPicker.ChannelSlider
                className={'relative h-2.5 w-full flex-1 rounded-full'}
                channel="alpha"
              >
                <ColorPicker.TransparencyGrid
                  className={'h-full w-full rounded-full'}
                />
                <ColorPicker.ChannelSliderTrack
                  className={'h-2.5 w-full min-w-56 rounded-full'}
                />
                <ColorPicker.ChannelSliderThumb
                  className={
                    'h-3 w-3 -translate-x-2/4 -translate-y-2/4 rounded-full shadow-lg ring-2 ring-white'
                  }
                />
              </ColorPicker.ChannelSlider>
            </div>
          </div>

          {/* TODO: if color mode changing dropdown and manual color type feature */}
        </ColorPicker.Content>
      </ColorPicker.Positioner>
      <ColorPicker.HiddenInput />
    </ColorPicker.RootProvider>
  )
}
