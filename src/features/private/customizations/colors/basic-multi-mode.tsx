import { CheckIcon } from 'lucide-react'

import { CardContent } from '#/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { useCustomizationStore } from '#/store/customization-store'
import type { Mode } from '../colors'

type BasicMultiModeProps = {
  selectedBasicMultiAccentColor: string
  onUpdateBasicMultiAccentColor: (color: string) => void
}

export default function BasicMultiMode(props: BasicMultiModeProps) {
  const { selectedBasicMultiAccentColor, onUpdateBasicMultiAccentColor } = props

  const {
    customization: { colors },
    updateColors,
  } = useCustomizationStore()

  const selectedMode = colors[colors.mode as Mode].selected

  const isShowBasicMultiMode =
    colors.mode === 'basic' && selectedMode === 'multi'

  function handleUpdateBasicMultiAccentColor(newColor: string) {
    /*
          basic.multi {
          accentColor	"#F45B69" // only update this
          backgroundColor	"#ffffff" // fixed for this fn
          textColor	"#313D5D" // fixed for this fn
          }
          basic.multi {
          accentColor	"#84D2F6" // only update this
          backgroundColor	"#ffffff" // fixed for this fn
          textColor	"#000000" // fixed for this fn
          }
          basic.multi {
          accentColor	"#348AA7" // only update this
          backgroundColor	"#FFFCF9" // fixed for this fn
          textColor	"#313D5D" // fixed for this fn
          }
          basic.multi {
          accentColor	"#BF5294" // only update this
          backgroundColor	"#F6F6F9" // fixed for this fn
          textColor	"#313D5D" // fixed for this fn
          }
        */

    onUpdateBasicMultiAccentColor(newColor)

    switch (newColor) {
      case '#F45B69': {
        // setValue((prevValue) => ({
        //   ...prevValue,
        //   basic: {
        //     ...prevValue.basic,
        //     multi: {
        //       ...prevValue.basic.multi,
        //       accentColor: newColor,
        //       backgroundColor: '#ffffff',
        //       textColor: '#313D5D',
        //     },
        //   },
        // }))
        updateColors({
          ...colors,
          basic: {
            ...colors.basic,
            multi: {
              accentColor: newColor,
              backgroundColor: '#ffffff',
              textColor: '#313D5D',
            },
          },
        })
        return
      }
      case '#84D2F6': {
        // setValue((prevValue) => ({
        //   ...prevValue,
        //   basic: {
        //     ...prevValue.basic,
        //     multi: {
        //       ...prevValue.basic.multi,
        //       accentColor: newColor,
        //       backgroundColor: '#ffffff',
        //       textColor: '#000000',
        //     },
        //   },
        // }))
        updateColors({
          ...colors,
          basic: {
            ...colors.basic,
            multi: {
              accentColor: newColor,
              backgroundColor: '#ffffff',
              textColor: '#000000',
            },
          },
        })
        return
      }
      case '#348AA7': {
        // setValue((prevValue) => ({
        //   ...prevValue,
        //   basic: {
        //     ...prevValue.basic,
        //     multi: {
        //       ...prevValue.basic.multi,
        //       accentColor: newColor,
        //       backgroundColor: '#FFFCF9',
        //       textColor: '#313D5D',
        //     },
        //   },
        // }))
        updateColors({
          ...colors,
          basic: {
            ...colors.basic,
            multi: {
              accentColor: newColor,
              backgroundColor: '#FFFCF9',
              textColor: '#313D5D',
            },
          },
        })
        return
      }
      case '#BF5294': {
        // setValue((prevValue) => ({
        //   ...prevValue,
        //   basic: {
        //     ...prevValue.basic,
        //     multi: {
        //       ...prevValue.basic.multi,
        //       accentColor: newColor,
        //       backgroundColor: '#F6F6F9',
        //       textColor: '#313D5D',
        //     },
        //   },
        // }))
        updateColors({
          ...colors,
          basic: {
            ...colors.basic,
            multi: {
              accentColor: newColor,
              backgroundColor: '#F6F6F9',
              textColor: '#313D5D',
            },
          },
        })
        return
      }

      case 'custom': {
        // setValue((prevValue) => ({
        //   ...prevValue,
        //   basic: {
        //     ...prevValue.basic,
        //     multi: {
        //       ...prevValue.basic.multi,
        //       accentColor: '#000000',
        //       backgroundColor: '#ffffff',
        //       textColor: '#1c1a1a',
        //     },
        //   },
        // }))
        updateColors({
          ...colors,
          basic: {
            ...colors.basic,
            multi: {
              accentColor: '#000000',
              backgroundColor: '#ffffff',
              textColor: '#1c1a1a',
            },
            multiCustom: {
              accentColor: '#000000',
              backgroundColor: '#ffffff',
              textColor: '#1c1a1a',
            },
          },
        })
        return
      }
    }
  }

  return (
    <>
      {isShowBasicMultiMode ? (
        <CardContent
          className={
            'space-y-4 animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'
          }
        >
          <span>basic multi mode</span>
          <ToggleGroup
            type="single"
            size={'lg'}
            value={selectedBasicMultiAccentColor}
            onValueChange={(value) => {
              if (value) {
                handleUpdateBasicMultiAccentColor(value)
              }
            }}
          >
            <ToggleGroupItem
              value="#F45B69"
              className={
                'pr-0 pl-3 group gap-4 ring-accent ring-1 data-[state=on]:ring-foreground'
              }
            >
              <span className={'text-base font-semibold'}>T</span>
              <span
                style={{ backgroundColor: '#F45B69' }}
                className={'size-9 rounded-tr-lg rounded-br-lg relative'}
              >
                <CheckIcon
                  className={
                    'group-data-[state=off]:opacity-0 group-data-[state=on]:opacity-100 absolute inset-2.5 text-foreground z-10'
                  }
                />
              </span>
            </ToggleGroupItem>
            <ToggleGroupItem
              value="#84D2F6"
              className={
                'pr-0 pl-3 group gap-4 ring-accent ring-1 data-[state=on]:ring-foreground'
              }
            >
              <span className={'text-base font-semibold'}>T</span>
              <span
                style={{ backgroundColor: '#84D2F6' }}
                className={'size-9 rounded-tr-lg rounded-br-lg relative'}
              >
                <CheckIcon
                  className={
                    'group-data-[state=off]:opacity-0 group-data-[state=on]:opacity-100 absolute inset-2.5 text-foreground z-10'
                  }
                />
              </span>
            </ToggleGroupItem>
            <ToggleGroupItem
              value="#348AA7"
              className={
                'pr-0 pl-3 group gap-4 ring-accent ring-1 data-[state=on]:ring-foreground'
              }
            >
              <span className={'text-base font-semibold'}>T</span>
              <span
                style={{ backgroundColor: '#348AA7' }}
                className={'size-9 rounded-tr-lg rounded-br-lg relative'}
              >
                <CheckIcon
                  className={
                    'group-data-[state=off]:opacity-0 group-data-[state=on]:opacity-100 absolute inset-2.5 text-foreground z-10'
                  }
                />
              </span>
            </ToggleGroupItem>
            <ToggleGroupItem
              value="#BF5294"
              className={
                'pr-0 pl-3 group gap-4 ring-accent ring-1 data-[state=on]:ring-foreground'
              }
            >
              <span className={'text-base font-semibold'}>T</span>
              <span
                style={{ backgroundColor: '#BF5294' }}
                className={'size-9 rounded-tr-lg rounded-br-lg relative'}
              >
                <CheckIcon
                  className={
                    'group-data-[state=off]:opacity-0 group-data-[state=on]:opacity-100 absolute inset-2.5 text-foreground z-10'
                  }
                />
              </span>
            </ToggleGroupItem>
            <ToggleGroupItem
              value="custom"
              className={'ring-accent ring-1 data-[state=on]:ring-foreground'}
            >
              Custom
            </ToggleGroupItem>
          </ToggleGroup>
        </CardContent>
      ) : null}
    </>
  )
}
