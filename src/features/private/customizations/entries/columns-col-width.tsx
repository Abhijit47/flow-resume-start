import { Button } from '#/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Field, FieldLabel } from '#/components/ui/field'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'
const animationClass =
  'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

/*
{"customizationUpdates":[{"value":"auto","path":"entryLayout.colMode"}]}

{"customizationUpdates":[
  {"value":"manual","path":"entryLayout.colMode"},
  {"value":{
    "dateLocationLeft":{"left":20,"right":80},
    "dateLocationRight":{"right":20,"left":80},
    "dateContentLocation":{"left":17,"middle":65,"right":18}},
    "path":"entryLayout.colWidths"
  }]
}

{"customizationUpdates":[{"value":{"left":78,"right":22},"path":"entryLayout.colWidths.dateLocationRight"}]}
{"customizationUpdates":[{"value":{"left":79,"right":21},"path":"entryLayout.colWidths.dateLocationRight"}]}


{"customizationUpdates":[{"value":{"left":18,"middle":64.5,"right":17.5},"path":"entryLayout.colWidths.dateContentLocation"}],"resumeId":"b9b34f83-3bea-4dbc-95be-6c06a3dd15cb"}
 */

export default function ColumnsColWidth() {
  const {
    customization: { entryLayout },
    updateEntryLayout,
  } = useCustomizationStore()

  const isColumnsModeSelected =
    entryLayout.displayMode === 'dateLocationRight' ||
    entryLayout.displayMode === 'dateLocationLeft' ||
    entryLayout.displayMode === 'dateContentLocation'

  const isShowRightBtns =
    entryLayout.colMode === 'manual' &&
    entryLayout.displayMode === 'dateLocationRight'
  const isShowLeftBtns =
    entryLayout.colMode === 'manual' &&
    entryLayout.displayMode === 'dateLocationLeft'
  const isShowSplitBtns =
    entryLayout.colMode === 'manual' &&
    entryLayout.displayMode === 'dateContentLocation'

  const currentRightWidth = entryLayout.colWidths['dateLocationRight']

  const currentLeftWidth = entryLayout.colWidths['dateLocationLeft']
  const currentMiddleWidth = entryLayout.colWidths['dateContentLocation']

  function handleColMode(val: string) {
    if (val === 'auto') {
      updateEntryLayout({ ...entryLayout, colMode: 'auto' })
    } else {
      updateEntryLayout({
        ...entryLayout,
        colMode: 'manual',
        colWidths: {
          dateLocationLeft: {
            left: 20,
            right: 80,
          },
          dateLocationRight: {
            left: 80,
            right: 20,
          },
          dateContentLocation: {
            left: 17,
            middle: 65,
            right: 18,
          },
        },
      })
    }
  }

  function handleUpdateColRightWidth(
    val: 'rightWidthLeft' | 'rightWidthRight',
  ) {
    if (val === 'rightWidthLeft') {
      if (currentRightWidth.left === 80) {
        return
      }
      updateEntryLayout({
        ...entryLayout,
        colWidths: {
          ...entryLayout.colWidths,
          dateLocationRight: {
            left: currentRightWidth.left + 1,
            right: currentRightWidth.right - 1,
          },
        },
      })
    } else {
      if (currentRightWidth.right === 80) {
        return
      }
      updateEntryLayout({
        ...entryLayout,
        colWidths: {
          ...entryLayout.colWidths,
          dateLocationRight: {
            left: currentRightWidth.left - 1,
            right: currentRightWidth.right + 1,
          },
        },
      })
    }
  }

  function handleUpdateColLeftWidth(val: 'leftWidthLeft' | 'leftWidthRight') {
    if (val === 'leftWidthLeft') {
      if (currentLeftWidth.left === 80) {
        return
      }
      updateEntryLayout({
        ...entryLayout,
        colWidths: {
          ...entryLayout.colWidths,
          dateLocationLeft: {
            left: currentLeftWidth.left + 1,
            right: currentLeftWidth.right - 1,
          },
        },
      })
    } else {
      if (currentLeftWidth.right === 80) {
        return
      }
      updateEntryLayout({
        ...entryLayout,
        colWidths: {
          ...entryLayout.colWidths,
          dateLocationLeft: {
            left: currentLeftWidth.left - 1,
            right: currentLeftWidth.right + 1,
          },
        },
      })
    }
  }

  function handleUpdateColMiddleWidth(
    val: 'middleWidthLeft' | 'middleWidthMiddle' | 'middleWidthRight',
  ) {
    if (val === 'middleWidthLeft') {
      updateEntryLayout({
        ...entryLayout,
        colWidths: {
          ...entryLayout.colWidths,
          dateContentLocation: {
            left: currentMiddleWidth.left + 1,
            middle: currentMiddleWidth.middle - 0.5,
            right: currentMiddleWidth.right - 0.5,
          },
        },
      })
    }

    if (val === 'middleWidthMiddle') {
      updateEntryLayout({
        ...entryLayout,
        colWidths: {
          ...entryLayout.colWidths,
          dateContentLocation: {
            left: currentMiddleWidth.left - 0.5,
            middle: currentMiddleWidth.middle + 1,
            right: currentMiddleWidth.right - 0.5,
          },
        },
      })
    }

    if (val === 'middleWidthRight') {
      updateEntryLayout({
        ...entryLayout,
        colWidths: {
          ...entryLayout.colWidths,
          dateContentLocation: {
            left: currentMiddleWidth.left - 0.5,
            middle: currentMiddleWidth.middle - 0.5,
            right: currentMiddleWidth.right + 1,
          },
        },
      })
    }
  }

  return (
    <>
      {isColumnsModeSelected ? (
        <Card>
          <CardHeader>
            <CardTitle>Column Width</CardTitle>
          </CardHeader>
          <CardContent className={cn('space-y-2', animationClass)}>
            <ToggleGroup
              id={`colModeToggler`}
              type="single"
              variant="outline"
              value={entryLayout.colMode}
              onValueChange={(value) => {
                if (value) {
                  handleColMode(value)
                }
              }}
            >
              <ToggleGroupItem value="auto" className={cn(toggleState)}>
                Auto
              </ToggleGroupItem>
              <ToggleGroupItem value="manual" className={cn(toggleState)}>
                Manual
              </ToggleGroupItem>
            </ToggleGroup>

            {isShowRightBtns ? (
              <div className={cn('flex items-center gap-2', animationClass)}>
                <Field style={{ width: `${currentRightWidth.left}%` }}>
                  <FieldLabel htmlFor={'rightModeLeft'} className="font-normal">
                    Left {currentRightWidth.left}%
                  </FieldLabel>
                  <Button
                    variant={'outline'}
                    onClick={() => handleUpdateColRightWidth('rightWidthLeft')}
                    disabled={currentRightWidth.left === 80}
                  >
                    +
                  </Button>
                </Field>
                <Field style={{ width: `${currentRightWidth.right}%` }}>
                  <FieldLabel
                    htmlFor={'rightModeRight'}
                    className="font-normal"
                  >
                    Right {currentRightWidth.right}%
                  </FieldLabel>
                  <Button
                    variant={'outline'}
                    onClick={() => handleUpdateColRightWidth('rightWidthRight')}
                    disabled={currentRightWidth.right === 80}
                  >
                    +
                  </Button>
                </Field>
              </div>
            ) : null}

            {isShowLeftBtns ? (
              <div className={cn('flex items-center gap-2', animationClass)}>
                <Field style={{ width: `${currentLeftWidth.left}%` }}>
                  <FieldLabel htmlFor={'leftModeLeft'} className="font-normal">
                    Left {currentLeftWidth.left}%
                  </FieldLabel>
                  <Button
                    variant={'outline'}
                    onClick={() => handleUpdateColLeftWidth('leftWidthLeft')}
                    disabled={currentLeftWidth.left === 80}
                  >
                    +
                  </Button>
                </Field>
                <Field style={{ width: `${currentLeftWidth.right}%` }}>
                  <FieldLabel htmlFor={'leftModeRight'} className="font-normal">
                    Right {currentLeftWidth.right}%
                  </FieldLabel>
                  <Button
                    variant={'outline'}
                    onClick={() => handleUpdateColLeftWidth('leftWidthRight')}
                    disabled={currentLeftWidth.right === 80}
                  >
                    +
                  </Button>
                </Field>
              </div>
            ) : null}

            {isShowSplitBtns ? (
              <div className={cn('flex items-center gap-2', animationClass)}>
                <Field style={{ width: `${currentMiddleWidth.left}%` }}>
                  <FieldLabel
                    htmlFor={'dateContentLocationLeft'}
                    className="font-normal"
                  >
                    Left {currentMiddleWidth.left}%
                  </FieldLabel>
                  <Button
                    variant={'outline'}
                    onClick={() =>
                      handleUpdateColMiddleWidth('middleWidthLeft')
                    }
                  >
                    +
                  </Button>
                </Field>
                <Field style={{ width: `${currentMiddleWidth.middle}%` }}>
                  <FieldLabel
                    htmlFor="dateContentLocationMiddle"
                    className="font-normal"
                  >
                    Middle {currentMiddleWidth.middle}%
                  </FieldLabel>
                  <Button
                    variant={'outline'}
                    onClick={() =>
                      handleUpdateColMiddleWidth('middleWidthMiddle')
                    }
                  >
                    +
                  </Button>
                </Field>
                <Field style={{ width: `${currentMiddleWidth.right}%` }}>
                  <FieldLabel
                    htmlFor="dateContentLocationRight"
                    className="font-normal"
                  >
                    Right {currentMiddleWidth.right}%
                  </FieldLabel>
                  <Button
                    variant={'outline'}
                    onClick={() =>
                      handleUpdateColMiddleWidth('middleWidthRight')
                    }
                  >
                    +
                  </Button>
                </Field>
              </div>
            ) : null}
          </CardContent>
        </Card>
      ) : null}
    </>
  )
}
