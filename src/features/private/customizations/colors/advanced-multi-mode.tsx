import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'
import type { Mode } from '../colors'

type AdvancedTabMultiModeProps = {
  selectedAdvancedMultiAccentColor: string
  onUpdateAdvancedMultiAccentColor: (newColor: string) => void
}

const animationClass =
  'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

export default function AdvancedMultiMode(props: AdvancedTabMultiModeProps) {
  const { selectedAdvancedMultiAccentColor, onUpdateAdvancedMultiAccentColor } =
    props

  const {
    customization: { colors },
    updateColors,
  } = useCustomizationStore()

  const selectedMode = colors[colors.mode as Mode].selected

  const isShowAdvancedMultiMode =
    colors.mode === 'advanced' && selectedMode === 'multi'

  function handleUpdateAdvancedMultiAccentColor(newColor: string) {
    onUpdateAdvancedMultiAccentColor(newColor)
    /*
      default:
      multi: {
        strong: {
          backgroundColor: '#000000',
          accentColor: '#ffffff',
          textColor: '#ffffff',
        },
        light: {
          backgroundColor: '#ffffff',
          accentColor: '#000000',
          textColor: '#000000',
        },
      },    
		*/

    switch (newColor) {
      case '1': {
        /*
					multi: {
              strong: {
                textColor: '#FFFCF9',
                accentColor: '#F45B69',
                backgroundColor: '#313D5D',
              },
              light: {
                textColor: '#313D5D',
                accentColor: '#F45B69',
                backgroundColor: '#FFFCF9',
              },
            },
				*/
        return updateColors({
          ...colors,
          advanced: {
            ...colors.advanced,
            multi: {
              strong: {
                backgroundColor: '#313D5D',
                accentColor: '#F45B69',
                textColor: '#FFFCF9',
              },
              light: {
                backgroundColor: '#FFFCF9',
                accentColor: '#F45B69',
                textColor: '#313D5D',
              },
            },
          },
        })
      }
      case '2': {
        /*
						multi: {
              strong: {
                backgroundColor: '#f3f2ef',
                textColor: '#222222',
                accentColor: '#17535b',
              },
              light: {
                accentColor: '#17535b',
                textColor: '#222222',
                backgroundColor: '#ffffff',
              },
            },
				 */
        return updateColors({
          ...colors,
          advanced: {
            ...colors.advanced,
            multi: {
              strong: {
                backgroundColor: '#f3f2ef',
                textColor: '#222222',
                accentColor: '#17535b',
              },
              light: {
                backgroundColor: '#ffffff',
                accentColor: '#17535b',
                textColor: '#222222',
              },
            },
          },
        })
      }
      case '3': {
        /*
						multi: {
              strong: {
                backgroundColor: '#193141', // updated
                textColor: '#ffffff', // updated
                accentColor: '#d2bfb7 ', // updated
              },
              light: {
                accentColor: '#193141', // updated
                textColor: '#222222', // same as 2nd
                backgroundColor: '#ffffff', // same as 2nd
              },
            },
				*/
        return updateColors({
          ...colors,
          advanced: {
            ...colors.advanced,
            multi: {
              strong: {
                backgroundColor: '#193141', // updated
                accentColor: '#d2bfb7', // updated
                textColor: '#ffffff', // updated
              },
              light: {
                backgroundColor: '#ffffff', // same as 2nd
                accentColor: '#193141', // updated
                textColor: '#222222', // same as 2nd
              },
            },
          },
        })
      }
      case '4': {
        /*
						multi: {
              strong: {
                backgroundColor: '#e6e6e4', // updated
                textColor: '#222222', // updated
                accentColor: '#666a54', // updated
              },
              light: {
                accentColor: '#a78173', // updated
                textColor: '#222222', // same as 2nd
                backgroundColor: '#ffffff', // same as 2nd
              },
            },
				*/
        return updateColors({
          ...colors,
          advanced: {
            ...colors.advanced,
            multi: {
              strong: {
                backgroundColor: '#e6e6e4', // updated
                accentColor: '#666a54', // updated
                textColor: '#222222', // updated
              },
              light: {
                backgroundColor: '#ffffff', // same as 2nd
                accentColor: '#a78173', // updated
                textColor: '#222222', // same as 2nd
              },
            },
          },
        })
      }
      case '5': {
        /*
						multi: {
              strong: {
                backgroundColor: '#d9e2e9', // updated
                textColor: '#222222', // same as 2nd
                accentColor: '#2f3556', // updated
              },
              light: {
                accentColor: '#2f3556', // updated
                textColor: '#222222', // same as 2nd
                backgroundColor: '#ffffff', // same as 2nd
              },
            },
				*/
        return updateColors({
          ...colors,
          advanced: {
            ...colors.advanced,
            multi: {
              strong: {
                backgroundColor: '#d9e2e9', // updated
                accentColor: '#2f3556', // updated
                textColor: '#222222', // same as 2nd
              },
              light: {
                backgroundColor: '#ffffff', // same as 2nd
                accentColor: '#2f3556', // updated
                textColor: '#222222', // same as 2nd
              },
            },
          },
        })
      }
      case '6': {
        /*
						multi: {
              strong: {
                textColor: '#FFFCF9',
                accentColor: '#84D2F6',
                backgroundColor: '#313D5D',
              },
              light: {
                textColor: '#313D5D',
                accentColor: '#313D5D',
                backgroundColor: '#FFFCF9',
              },
            },
				*/
        return updateColors({
          ...colors,
          advanced: {
            ...colors.advanced,
            multi: {
              strong: {
                backgroundColor: '#313D5D',
                accentColor: '#84D2F6',
                textColor: '#FFFCF9',
              },
              light: {
                backgroundColor: '#FFFCF9',
                accentColor: '#313D5D',
                textColor: '#313D5D',
              },
            },
          },
        })
      }
      case '7': {
        /*
						multi: {
              strong: {
                backgroundColor: '#FFFCF9', // updated
                accentColor: '#84D2F6', // same as 6th
                textColor: '#313D5D', // updated
              },
              light: {
                textColor: '#313D5D', // same as 6th
                accentColor: '#313D5D', // same as 6th
                backgroundColor: '#D5C7BC', // updated
              },
            },
				*/
        return updateColors({
          ...colors,
          advanced: {
            ...colors.advanced,
            multi: {
              strong: {
                backgroundColor: '#FFFCF9', // updated
                accentColor: '#84D2F6', // same as 6th
                textColor: '#313D5D', // updated
              },
              light: {
                backgroundColor: '#D5C7BC', // updated
                accentColor: '#313D5D', // same as 6th
                textColor: '#313D5D', // same as 6th
              },
            },
          },
        })
      }
      case '8': {
        /*
				multi: {
              strong: {
                textColor: '#FFFCF9',
                accentColor: '#BF5294',
                backgroundColor: ' #672D50',
              },
              light: {
                textColor: '#672D50',
                accentColor: '#BF5294',
                backgroundColor: '#F6F6F9',
              },
            },
				*/
        return updateColors({
          ...colors,
          advanced: {
            ...colors.advanced,
            multi: {
              strong: {
                backgroundColor: ' #672D50',
                accentColor: '#BF5294',
                textColor: '#FFFCF9',
              },
              light: {
                backgroundColor: '#F6F6F9',
                accentColor: '#BF5294',
                textColor: '#672D50',
              },
            },
          },
        })
      }

      case 'custom': {
        /*
				multi: {
					strong: {
						backgroundColor: '#000000',
						accentColor: '#ffffff',
						textColor: '#ffffff',
					},
					light: {
						backgroundColor: '#ffffff',
						accentColor: '#000000',
						textColor: '#000000',
					},
				},
				*/
        return updateColors({
          ...colors,
          advanced: {
            ...colors.advanced,
            multi: {
              strong: {
                backgroundColor: '#000000',
                accentColor: '#ffffff',
                textColor: '#ffffff',
              },
              light: {
                backgroundColor: '#ffffff',
                accentColor: '#000000',
                textColor: '#000000',
              },
            },
            multiCustom: {
              strong: {
                backgroundColor: '#000000',
                accentColor: '#ffffff',
                textColor: '#ffffff',
              },
              light: {
                backgroundColor: '#ffffff',
                accentColor: '#000000',
                textColor: '#000000',
              },
            },
          },
        })
      }
    }
  }

  return (
    <>
      {isShowAdvancedMultiMode ? (
        <ToggleGroup
          type="single"
          size={'lg'}
          className={cn('flex-wrap max-w-sm', animationClass)}
          value={selectedAdvancedMultiAccentColor}
          onValueChange={(value) => {
            if (value) {
              handleUpdateAdvancedMultiAccentColor(value)
            }
          }}
        >
          <ToggleGroupItem
            value="1"
            className={
              'w-24 ring-accent ring-1 data-[state=on]:ring-foreground'
            }
          >
            A
          </ToggleGroupItem>
          <ToggleGroupItem
            value="2"
            className={
              'w-24 ring-accent ring-1 data-[state=on]:ring-foreground'
            }
          >
            B
          </ToggleGroupItem>
          <ToggleGroupItem
            value="3"
            className={
              'w-24 ring-accent ring-1 data-[state=on]:ring-foreground'
            }
          >
            A
          </ToggleGroupItem>
          <ToggleGroupItem
            value="4"
            className={
              'w-24 ring-accent ring-1 data-[state=on]:ring-foreground'
            }
          >
            B
          </ToggleGroupItem>
          <ToggleGroupItem
            value="5"
            className={
              'w-24 ring-accent ring-1 data-[state=on]:ring-foreground'
            }
          >
            C
          </ToggleGroupItem>
          <ToggleGroupItem
            value="6"
            className={
              'w-24 ring-accent ring-1 data-[state=on]:ring-foreground'
            }
          >
            A
          </ToggleGroupItem>
          <ToggleGroupItem
            value="7"
            className={
              'w-24 ring-accent ring-1 data-[state=on]:ring-foreground'
            }
          >
            B
          </ToggleGroupItem>
          <ToggleGroupItem
            value="8"
            className={
              'w-24 ring-accent ring-1 data-[state=on]:ring-foreground'
            }
          >
            C
          </ToggleGroupItem>
          <ToggleGroupItem
            value="custom"
            className={
              'w-24 ring-accent ring-1 data-[state=on]:ring-foreground'
            }
          >
            Custom
          </ToggleGroupItem>
        </ToggleGroup>
      ) : null}
    </>
  )
}
