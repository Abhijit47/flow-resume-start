import {
  ColorPicker,
  parseColor,
  useColorPicker,
} from '@ark-ui/react/color-picker'
import { CheckIcon, CrosshairIcon, PipetteIcon } from 'lucide-react'
import { useId, useState } from 'react'

import { Button } from '#/components/ui/button'
import { useCustomizationStore } from '#/store/customization-store'
import type { Mode } from '../colors'

const swatches = [
  '#ffffff',
  '#495963',
  '#547980',
  '#93b7be',
  '#348aa7',
  '#355c7d',
  '#386fa4',
  '#6798c0',
  '#59a5d8',
  '#84d2f6',
  '#432371',
  '#672d50',
  '#c06c84',
  '#c7417b',
  '#f45b69',
]

/**
 *  basic.single	"#9b3333"
 *  basic.singleCustom	"#9b3333"
 *
 *  path	"colors.basic.single"
 *  value	"#9b3333"
 *  path	"colors.advanced.single"
 *  value	"#9b3333"
 *  path	"colors.border.single"
 *  value	"#9b3333"
 */

/**
 * @variation
 * 1. Mode = basic -> single -> predefined swatches
 * 2. Mode = basic -> single -> custom color from picker
 *
 * 3. Mode = advanced -> single -> predefined swatches
 * 4. Mode = advanced -> single -> custom color from picker
 *
 * 5. Mode = border -> single -> predefined swatches
 * 6. Mode = border -> single -> custom color from picker
 * 7. Mode = border -> image -> predefined swatches
 * 8. Mode = border -> image -> custom color from picker
 * 9. Mode = border -> image -> from suggested swatches
 *
 * @constant
 * 1. colors.basic.single -> common update for all case
 * 2. colors.advanced.single -> common update all case
 * 3. colors.border.single -> common update all case
 *
 * @fires
 * 1. mode === basic && selected === 'single' -> colors.basic.single
 *
 * 2. mode === advanced && selected === 'single' -> colors.advanced.single
 *
 * 3. mode === border && selected === 'single' -> colors.border.single
 *
 * 4. mode === border && selected === 'image' -> colors.border.image
 *
 */

export default function ColorPickerWithSwatches() {
  const [open, setOpen] = useState(false)
  const [isCustomColorMode, setIsCustomColorMode] = useState(false)

  const id = useId()

  const {
    customization: { colors },
    updateColors,
  } = useCustomizationStore()

  const selectedMode = colors[colors.mode as Mode].selected

  const isShowColorSwatches =
    (colors.mode === 'basic' && selectedMode === 'single') ||
    (colors.mode === 'advanced' && selectedMode === 'single') ||
    (colors.mode === 'border' && selectedMode === 'single') ||
    (colors.mode === 'border' && selectedMode === 'image')

  function handleUpdateColors(newColor: string) {
    switch (colors.mode) {
      case 'basic': {
        // basic -> single -> predefined swatches
        if (selectedMode === 'single' && !isCustomColorMode) {
          updateColors({
            basic: {
              ...colors.basic,
              single: newColor,
            },
            advanced: {
              ...colors.advanced,
              single: newColor,
            },
            border: {
              ...colors.border,
              single: newColor,
            },
          })
        }

        // basic -> single -> custom mode
        if (selectedMode === 'single' && isCustomColorMode) {
          updateColors({
            basic: {
              ...colors.basic,
              single: newColor,
              singleCustom: newColor,
            },
            advanced: {
              ...colors.advanced,
              single: newColor,
            },
            border: {
              ...colors.border,
              single: newColor,
            },
          })
        }
        break
      }
      case 'advanced': {
        // advanced -> single -> predefined swatches
        if (selectedMode === 'single' && !isCustomColorMode) {
          updateColors({
            advanced: {
              ...colors.advanced,
              single: newColor,
            },
            basic: {
              ...colors.basic,
              single: newColor,
            },
            border: {
              ...colors.border,
              single: newColor,
            },
          })
        }

        // advanced -> single -> custom mode
        if (selectedMode === 'single' && isCustomColorMode) {
          updateColors({
            advanced: {
              ...colors.advanced,
              single: newColor,
              singleCustom: newColor,
            },
            basic: {
              ...colors.basic,
              single: newColor,
            },
            border: {
              ...colors.border,
              single: newColor,
            },
          })
        }
        break
      }
      case 'border': {
        // border -> single -> predefined swatches
        if (selectedMode === 'single' && !isCustomColorMode) {
          updateColors({
            border: {
              ...colors.border,
              single: newColor,
            },
            basic: {
              ...colors.basic,
              single: newColor,
            },
            advanced: {
              ...colors.advanced,
              single: newColor,
            },
          })
        }

        // border -> single -> custom mode
        if (selectedMode === 'single' && isCustomColorMode) {
          updateColors({
            border: {
              ...colors.border,
              single: newColor,
              singleCustom: newColor,
            },
            basic: {
              ...colors.basic,
              single: newColor,
            },
            advanced: {
              ...colors.advanced,
              single: newColor,
            },
          })
        }

        // border -> image -> predefined swatches
        if (selectedMode === 'image' && !isCustomColorMode) {
          updateColors({
            border: {
              ...colors.border,
              single: newColor,
            },
            basic: {
              ...colors.basic,
              single: newColor,
            },
            advanced: {
              ...colors.advanced,
              single: newColor,
              multi: {
                light: {
                  ...colors.advanced.multi.light,
                  accentColor: newColor,
                },
                strong: {
                  ...colors.advanced.multi.strong,
                  accentColor: newColor,
                },
              },
            },
          })
        }

        // border -> image -> custom mode
        if (selectedMode === 'image' && isCustomColorMode) {
          updateColors({
            border: {
              ...colors.border,
              single: newColor,
              singleCustom: newColor,
            },
            basic: {
              ...colors.basic,
              single: newColor,
            },
            advanced: {
              ...colors.advanced,
              single: newColor,
            },
          })
        }
        break
      }
      default: {
        break
      }
    }
  }

  const colorPicker = useColorPicker({
    id: id,
    // defaultValue: parseColor('#eb5e41'),
    defaultValue: parseColor(colors[colors.mode as Mode].single),
    closeOnSelect: true,
    onValueChange(event) {
      // console.log("onValueChange", event.value.toString("hex"))
      // console.log("parse", parseColor(details.value.toString()))
      // console.log('onValueChange', event)
      handleUpdateColors(event.value.toString('hex'))
    },
    open,
    onOpenChange(e) {
      setOpen(e.open)
      setIsCustomColorMode(e.open)
    },
    format: 'rgba',
    onFocusOutside() {
      setOpen(false)
      setIsCustomColorMode(false)
    },
    onInteractOutside() {
      setOpen(false)
      setIsCustomColorMode(false)
    },
    onValueChangeEnd(event) {
      // console.log('onValueChangeEnd', event)
      // console.log("info", event.value.toString("hex"))
      handleUpdateColors(event.value.toString('hex'))
    },
    onPointerDownOutside() {
      setOpen(false)
      setIsCustomColorMode(false)
    },
    openAutoFocus: true,
  })

  return (
    <>
      {/* <output>{selectedHexColor}</output>
      <output>isCustomColorMode: {isCustomColorMode.toString()}</output> */}

      {isShowColorSwatches ? (
        <ColorPicker.RootProvider
          className={'h-fit max-w-100'}
          value={colorPicker}
        >
          <ColorPicker.Label className={'sr-only'}>Color</ColorPicker.Label>

          <ColorPicker.Control className="flex flex-wrap items-center gap-1">
            {/* <ColorPicker.SwatchGroup className="flex flex-wrap items-center gap-1 w-full">
          </ColorPicker.SwatchGroup> */}
            {swatches.map((color) => (
              <ColorPicker.SwatchTrigger
                key={color}
                style={{ backgroundColor: color }}
                className="rounded-full size-10"
                value={color}
              >
                <ColorPicker.Swatch
                  value={color}
                  className="rounded-full w-full h-full"
                >
                  <ColorPicker.SwatchIndicator className="flex justify-center items-center w-full h-full">
                    <CheckIcon />
                  </ColorPicker.SwatchIndicator>
                </ColorPicker.Swatch>
              </ColorPicker.SwatchTrigger>
            ))}
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
                  style={{
                    background:
                      'conic-gradient(from 90deg, violet, indigo, blue, green, yellow, orange, red, violet)',
                  }}
                  onClick={() => setIsCustomColorMode(true)}
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
      ) : null}
    </>
  )
}
