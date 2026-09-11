import { CardContent } from '#/components/ui/card'
import { Checkbox } from '#/components/ui/checkbox'
import { Field, FieldLabel } from '#/components/ui/field'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { useCustomizationStore } from '#/store/customization-store'
import type { BorderSide, BorderWidth } from '../colors'

export default function BorderModeCustomize() {
  // const [isTopBorderVisible, setIsTopBorderVisible] = useState(true)
  // const [isBottomBorderVisible, setIsBottomBorderVisible] = useState(true)
  // const [isLeftBorderVisible, setIsLeftBorderVisible] = useState(true)
  // const [isRightBorderVisible, setIsRightBorderVisible] = useState(true)

  // const { onChangeBorderSide, onChangeBorderSize } = props

  const {
    customization: { colors },
    updateColors,
  } = useCustomizationStore()

  // const isShow = mode === 'border'
  const isShow = colors.mode === 'border'

  function handleUpdateBorderSize(newBorderSize: BorderWidth) {
    // setValue((prevValue) => ({
    //   ...prevValue,
    //   border: {
    //     ...prevValue.border,
    //     width: newBorderSize,
    //   },
    // }))
    updateColors({
      border: {
        ...colors.border,
        width: newBorderSize,
      },
    })
  }

  function handleBorderVisiblity(side: BorderSide, isVisible: boolean) {
    // setValue((prevValue) => ({
    //   ...prevValue,
    //   border: {
    //     ...prevValue.border,
    //     [side]: isVisible,
    //   },
    // }))
    updateColors({
      border: {
        ...colors.border,
        [side]: isVisible,
      },
    })
  }

  return (
    <div
      className={
        'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'
      }
    >
      {isShow ? (
        <div className={'space-y-4'}>
          <CardContent className={'space-y-4'}>
            <h4>Size</h4>
            <ToggleGroup
              type="single"
              size={'lg'}
              // value={borderSize}
              value={colors.border.width}
              onValueChange={(val) => {
                if (val) handleUpdateBorderSize(val as BorderWidth)
              }}
            >
              <ToggleGroupItem
                value="s"
                className={'ring-accent ring-1 data-[state=on]:ring-foreground'}
              >
                S
              </ToggleGroupItem>
              <ToggleGroupItem
                value="m"
                className={'ring-accent ring-1 data-[state=on]:ring-foreground'}
              >
                M
              </ToggleGroupItem>
              <ToggleGroupItem
                value="l"
                className={'ring-accent ring-1 data-[state=on]:ring-foreground'}
              >
                L
              </ToggleGroupItem>
            </ToggleGroup>
          </CardContent>

          <CardContent className={'space-y-4'}>
            <h4>Show Border</h4>
            <div className="gap-4 grid grid-cols-2">
              <Field orientation="horizontal">
                <Checkbox
                  id="top"
                  name="top"
                  checked={colors.border.top}
                  onCheckedChange={(checked) => {
                    const isVisible = checked === true
                    // setIsTopBorderVisible(isVisible)
                    handleBorderVisiblity('top', isVisible)
                  }}
                />
                <FieldLabel htmlFor="top">Top</FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox
                  id="bottom"
                  name="bottom"
                  checked={colors.border.bottom}
                  onCheckedChange={(checked) => {
                    const isVisible = checked === true
                    // setIsBottomBorderVisible(isVisible)
                    handleBorderVisiblity('bottom', isVisible)
                  }}
                />
                <FieldLabel htmlFor="bottom">Bottom</FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox
                  id="right"
                  name="right"
                  checked={colors.border.right}
                  onCheckedChange={(checked) => {
                    const isVisible = checked === true
                    // setIsRightBorderVisible(isVisible)
                    handleBorderVisiblity('right', isVisible)
                  }}
                />
                <FieldLabel htmlFor="right">Right</FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox
                  id="left"
                  name="left"
                  checked={colors.border.left}
                  onCheckedChange={(checked) => {
                    const isVisible = checked === true
                    // setIsLeftBorderVisible(isVisible)
                    handleBorderVisiblity('left', isVisible)
                  }}
                />
                <FieldLabel htmlFor="left">Left</FieldLabel>
              </Field>
            </div>
          </CardContent>
        </div>
      ) : null}
    </div>
  )
}
