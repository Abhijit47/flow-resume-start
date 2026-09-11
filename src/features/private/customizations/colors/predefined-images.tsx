import { getPaletteSync } from 'colorthief'
import { useLayoutEffect } from 'react'

import { CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Field, FieldLabel } from '#/components/ui/field'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '#/components/ui/input-group'
import { ScrollArea, ScrollBar } from '#/components/ui/scroll-area'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { bgImages } from '#/constants/customization/color-section'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'
import type { Mode } from '../colors'

const animationClass =
  'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

type PredefinedImagesProps = {
  // isBorderWithImage: boolean
  // selectedMode: string

  selectedImage: string
  onSelectImage: (imageUrl: string) => void
  onUpdateDominantColors: (colors: string[]) => void
}

export default function PredefinedImages(props: PredefinedImagesProps) {
  const {
    // isBorderWithImage,
    // selectedMode,
    selectedImage,
    onSelectImage,
    onUpdateDominantColors,
  } = props

  const {
    customization: { colors },
  } = useCustomizationStore()

  const selectedMode = colors[colors.mode as Mode].selected

  const isBorderWithImage = colors.mode === 'border' && selectedMode === 'image'

  const firstRowImages = bgImages.slice(0, 4)
  const secondRowImages = bgImages.slice(7, -1)

  function generateDominantColors(imageUrl: string) {
    if (!imageUrl) return
    const img = new Image()
    img.crossOrigin = 'Anonymous'
    img.src = imageUrl
    img.onload = () => {
      // Extract 10 dominant colors
      const palette = getPaletteSync(img, {
        colorCount: 10,

        // center crop
        // region: { x: 0.25, y: 0.25, width: 0.5, height: 0.5 },
        // bottom third
        //  region: { x: 0, y: 0.66, width: 1, height: 0.34 },
      })
      if (!palette) return
      // conditions:
      // 1. when first add colors remove the empty string,
      // 2. next time, before adding remove the old colors
      // 3. then add the new colors
      // TODO: fallback: 10 random color should be added if no colors found
      onUpdateDominantColors(palette.map((c) => c.hex()))
    }
  }

  useLayoutEffect(() => {
    if (selectedImage) {
      generateDominantColors(selectedImage)
    }
  }, [selectedImage])

  return (
    <>
      {selectedMode === 'image' ? (
        <CardContent className={'space-y-4'}>
          <CardHeader>
            <CardTitle>Images powered by Unsplash</CardTitle>
          </CardHeader>
          <ToggleGroup
            type="single"
            className={cn('flex-col gap-2 max-w-sm', animationClass)}
            value={selectedImage}
            onValueChange={(val) => {
              if (val) {
                onSelectImage(val)

                if (isBorderWithImage) {
                  generateDominantColors(val)
                }
              }
            }}
          >
            <ScrollArea className="py-3 w-full h-28 whitespace-nowrap">
              {firstRowImages.map((item) => (
                <ToggleGroupItem
                  key={item.id}
                  value={item.imageUrl}
                  aria-label="Toggle image"
                  className={
                    'w-30 h-20 cursor-pointer hover:opacity-80 data-[state=on]:ring-primary data-[state=on]:ring-2 relative'
                  }
                >
                  <img
                    src={item.imageUrl}
                    alt={`Background image ${item.id}`}
                    className={'w-full h-full object-cover rounded-lg'}
                    loading="lazy"
                  />
                </ToggleGroupItem>
              ))}
              <ScrollBar orientation="horizontal" />
            </ScrollArea>

            <ScrollArea className="py-3 w-full h-28 whitespace-nowrap">
              {secondRowImages.map((item) => (
                <ToggleGroupItem
                  key={item.id}
                  value={item.imageUrl}
                  aria-label="Toggle image"
                  className={
                    'w-30 h-20 cursor-pointer hover:opacity-80 data-[state=on]:ring-primary data-[state=on]:ring-2 relative'
                  }
                >
                  <img
                    src={item.imageUrl}
                    alt={`Background image ${item.id}`}
                    className={'w-full h-full object-cover rounded-lg'}
                    loading="lazy"
                  />
                </ToggleGroupItem>
              ))}
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </ToggleGroup>

          <Field
            className={
              'animate-in fade-in slide-out-from-bottom-8 duration-300'
            }
          >
            <FieldLabel htmlFor="search-image" className={'sr-only'}>
              Search Image
            </FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="search-image"
                placeholder="Type to search..."
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton variant="secondary">Search</InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </CardContent>
      ) : null}
    </>
  )
}
