import { CheckIcon } from 'lucide-react'

import { CardContent } from '#/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { useCustomizationStore } from '#/store/customization-store'
import type { Mode } from '../colors'

type BorderModeImageCustomizeProps = {
  // mode: string
  // selectedMode: string
  dominantColors: string[]
  // onUpdateSingleColors: (newColor: string) => void
}

export default function BorderModeImageCustomize(
  props: BorderModeImageCustomizeProps,
) {
  const { dominantColors } = props

  const {
    customization: { colors },
    updateColors,
  } = useCustomizationStore()

  const selectedMode = colors[colors.mode as Mode].selected

  const isShow = colors.mode === 'border' && selectedMode === 'image'

  function handleUpdateSingleColors(newColor: string) {
    // 1. value.basic.single
    // 2. value.advanced.single
    // 3. value.border.single all there should be updated at same time

    // setValue((prevValue) => ({
    //   ...prevValue,
    //   basic: {
    //     ...prevValue.basic,
    //     single: newColor,
    //   },
    //   advanced: {
    //     ...prevValue.advanced,
    //     single: newColor,
    //   },
    //   border: {
    //     ...prevValue.border,
    //     single: newColor,
    //   },
    // }))

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

  return (
    <>
      {isShow ? (
        <CardContent
          className={
            'space-y-4 animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'
          }
        >
          <p>Colors suggested based on your image</p>

          {dominantColors.length > 0 ? (
            <ToggleGroup
              type="single"
              size={'lg'}
              className={'flex-wrap max-w-xs'}
              onValueChange={(value) => {
                if (value) {
                  handleUpdateSingleColors(value)
                  //   toast.success(`Selected color: ${value}`)
                }
              }}
            >
              {dominantColors.map((c, cIdx) => (
                <ToggleGroupItem
                  value={c}
                  key={cIdx}
                  style={{ backgroundColor: c }}
                  className={
                    'ring-accent ring-1 data-[state=on]:ring-foreground rounded-full group size-10 cursor-pointer hover:opacity-80 relative'
                  }
                >
                  <CheckIcon
                    className={
                      'group-data-[state=off]:opacity-0 group-data-[state=on]:opacity-100 absolute inset-2.75 text-foreground z-10'
                    }
                  />
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          ) : null}
        </CardContent>
      ) : null}
    </>
  )
}
