import { CheckIcon } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { bgImages } from '#/constants/customization/color-section'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'
import AccentColorCustomize from './colors/accent-color-customize'
import AdvancedMultiCustomMode from './colors/advanced-multi-custom-mode'
import AdvancedMultiMode from './colors/advanced-multi-mode'
import AdvancedMultiModeButton from './colors/advanced-multi-mode-button'
import BasicMultiCustomMode from './colors/basic-multi-custom-mode'
import BasicMultiMode from './colors/basic-multi-mode'
import BasicMultiModeButton from './colors/basic-multi-mode-button'
import BorderModeCustomize from './colors/border-mode-customize'
import BorderModeImageCustomize from './colors/border-mode-image-customize'
import ColorPickerWithSwatches from './colors/color-picker-with-swatches'
import PredefinedImages from './colors/predefined-images'

export type Mode = 'basic' | 'advanced' | 'border'
export type BasicMode = 'basic' | 'advanced' | 'border'

export type BorderWidth = 's' | 'm' | 'l'
export type BorderBG = 'single' | 'image'
export type BorderSide = 'left' | 'top' | 'right' | 'bottom'

// const animationClass =
//   'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

export default function Colors() {
  const [selectedImage, setSelectedImage] = useState('')
  const [dominantColors, setDominantColors] = useState<string[]>([''])
  const [selectedBasicMultiAccentColor, setSelectedBasicMultiAccentColor] =
    useState('custom')
  const [
    selectedAdvancedMultiAccentColor,
    setSelectedAdvancedMultiAccentColor,
  ] = useState('custom')

  const {
    customization: { colors },
    updateColors,
  } = useCustomizationStore()

  const selectedMode = colors[colors.mode as Mode].selected

  const isShowBasicMultiModeBtn = colors.mode === 'basic'

  const isShowBasicMultiCustomMode =
    colors.mode === 'basic' &&
    selectedMode === 'multi' &&
    selectedBasicMultiAccentColor === 'custom'

  const isShowAdvancedMultiModeBtn = colors.mode === 'advanced'

  const isShowAdvancedMultiCustomMode =
    colors.mode === 'advanced' &&
    selectedMode === 'multi' &&
    selectedAdvancedMultiAccentColor === 'custom'

  return (
    <Card>
      <CardHeader>
        <CardTitle>Colors</CardTitle>
      </CardHeader>

      {/* Mode toggle  */}
      <CardContent>
        <ToggleGroup
          type="single"
          value={colors.mode}
          onValueChange={(val) => {
            if (val) {
              // handleUpdateMode(val as Mode)
              updateColors({ mode: val })
              toast.warning('Mode: ' + val)
            }
          }}
          variant="outline"
          spacing={2}
          size="lg"
          className={'flex-wrap'}
        >
          <ToggleGroupItem
            value={'basic'}
            aria-label={'Toggle basic'}
            className="flex flex-col justify-center items-center rounded-lg ring-1 ring-accent data-[state=on]:ring-foreground w-16 h-20"
            variant={'outline'}
          >
            <span className="mt-26">Full Page</span>
          </ToggleGroupItem>
          <ToggleGroupItem
            value={'advanced'}
            aria-label={'Toggle advanced'}
            className="group relative flex flex-col justify-center items-center rounded-lg ring-1 ring-accent data-[state=on]:ring-foreground w-16 h-20"
            variant={'outline'}
          >
            <span
              className={
                'rounded-t-lg h-8 absolute top-0 left-0 w-full group-data-[state=off]:bg-foreground group-data-[state=on]:bg-red-400 transition-opacity duration-300'
              }
            >
              &nbsp;
            </span>
            <span className="mt-26">Header</span>
          </ToggleGroupItem>

          <ToggleGroupItem
            value={'border'}
            aria-label={'Toggle border'}
            className="flex flex-col justify-center items-center border-[7px] data-[state=off]:border-border data-[state=on]:border-red-300 rounded-lg w-16 h-20"
            variant={'outline'}
          >
            <span className="mt-26">Border</span>
          </ToggleGroupItem>
        </ToggleGroup>
      </CardContent>

      {/* selected mode toggle */}
      <CardContent className={'mt-6'}>
        <ToggleGroup
          value={selectedMode}
          onValueChange={(val) => {
            if (val) {
              // handleUpdateSelectedMode(val as Mode)
              updateColors({
                [colors.mode]: {
                  ...colors[colors.mode as Mode],
                  selected: val,
                },
              })
              // toast.success(`Selected mode: ${val}`)

              // TODO: if val === "image" then set the image in state
              if (val === 'image') {
                setSelectedImage(bgImages[0].imageUrl)
              }
            }
          }}
          variant="outline"
          type="single"
          size={'lg'}
          spacing={3}
        >
          <div className={'flex flex-col items-center justify-center gap-1'}>
            <ToggleGroupItem
              value="single"
              aria-label="Toggle single"
              style={{ backgroundColor: colors.basic.single }}
              className={cn(
                'group relative bg-transparent ring-1 ring-accent data-[state=on]:ring-foreground w-24',
              )}
            >
              <CheckIcon
                className={
                  'group-data-[state=off]:opacity-0 group-data-[state=on]:opacity-100 absolute inset-2.5 mx-auto text-foreground z-10 w-full h-full'
                }
              />
            </ToggleGroupItem>
            <span>Single</span>
          </div>

          <BasicMultiModeButton
            isShowBasicMultiModeBtn={isShowBasicMultiModeBtn}
          />

          <AdvancedMultiModeButton
            isShowAdvancedMultiModeBtn={isShowAdvancedMultiModeBtn}
          />

          <div className={'flex flex-col items-center justify-center gap-1'}>
            <ToggleGroupItem
              value="image"
              aria-label="Toggle image"
              className={
                'w-24 ring-accent ring-1 data-[state=on]:ring-foreground'
              }
              style={{
                backgroundImage: `url(${selectedImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            ></ToggleGroupItem>
            <span>Image</span>
          </div>
        </ToggleGroup>
      </CardContent>

      {/* advanced multi mode */}
      <CardContent className={'space-y-4'}>
        {/* {value.mode === 'advanced' && selectedMode === 'multi' ? ( */}
        <AdvancedMultiMode
          selectedAdvancedMultiAccentColor={selectedAdvancedMultiAccentColor}
          onUpdateAdvancedMultiAccentColor={setSelectedAdvancedMultiAccentColor}
        />

        <AdvancedMultiCustomMode
          isShowAdvancedMultiCustomMode={isShowAdvancedMultiCustomMode}
        />

        <ColorPickerWithSwatches />

        {/* basic multi mode */}
        {/* {selectedMode === 'multi' ? ( */}
        {/* {value.mode === 'basic' && selectedMode === 'multi' ? ( */}
        <BasicMultiMode
          selectedBasicMultiAccentColor={selectedBasicMultiAccentColor}
          onUpdateBasicMultiAccentColor={setSelectedBasicMultiAccentColor}
        />

        {/* Basic Multi Custom Mode */}
        {/* {selectedMode === 'multi' && selectAccrentColor === 'custom' ? ( */}
        <BasicMultiCustomMode
          isShowBasicMultiCustomMode={isShowBasicMultiCustomMode}
        />

        <BorderModeImageCustomize dominantColors={dominantColors} />

        {/* PredefinedImages */}
        <PredefinedImages
          // isBorderWithImage={isBorderWithImage}
          selectedImage={selectedImage}
          onSelectImage={setSelectedImage}
          onUpdateDominantColors={setDominantColors}
        />

        {/* border customization */}
        <BorderModeCustomize />

        {/* Apply accent color */}
        <AccentColorCustomize />
      </CardContent>
    </Card>
  )
}
