import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Checkbox } from '#/components/ui/checkbox'
import { Field, FieldLabel } from '#/components/ui/field'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'

/*
{"customizationUpdates":[{"value":{"showHeading":false,"position":"right","line":"solid"},"path":"declarationDisplay"}]}

Position:
{"customizationUpdates":[{"value":{"showHeading":true,"position":"left","line":"solid"},"path":"declarationDisplay"}]}
{"customizationUpdates":[{"value":{"showHeading":true,"position":"right","line":"solid"},"path":"declarationDisplay"}]}

Signature Line
{"customizationUpdates":[{"value":{"showHeading":true,"position":"right","line":"none"},"path":"declarationDisplay"}]}
{"customizationUpdates":[{"value":{"showHeading":true,"position":"right","line":"solid"},"path":"declarationDisplay"}]}
*/

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'

export default function EditDeclaration() {
  const {
    customization: { declarationDisplay },
    updateDeclaration,
  } = useCustomizationStore()

  const isShowHeading = declarationDisplay.showHeading

  const selectedPosition = declarationDisplay.position

  const selectedLine = declarationDisplay.line

  return (
    <Card>
      <CardHeader>
        <CardTitle>Declaration</CardTitle>
      </CardHeader>
      <CardContent>
        <Field orientation="horizontal">
          <Checkbox
            id="showDeclarationHeading"
            name="showDeclarationHeading"
            checked={isShowHeading}
            onCheckedChange={(checked) => {
              if (checked) {
                updateDeclaration({
                  ...declarationDisplay,
                  showHeading: true,
                  position: 'right',
                  line: 'solid',
                })
              } else {
                updateDeclaration({
                  ...declarationDisplay,
                  showHeading: false,
                  position: 'right',
                  line: 'solid',
                })
              }
            }}
          />
          <FieldLabel htmlFor="showDeclarationHeading">
            Show section heading
          </FieldLabel>
        </Field>
      </CardContent>

      <CardContent className={'space-y-4'}>
        <p>Position</p>
        <ToggleGroup
          type="single"
          value={selectedPosition}
          onValueChange={(value) => {
            if (value) {
              updateDeclaration({
                ...declarationDisplay,
                position: value,
                showHeading: true,
              })
            }
          }}
        >
          <ToggleGroupItem value="left" className={cn('group', toggleState)}>
            Left
          </ToggleGroupItem>
          <ToggleGroupItem value="right" className={cn('group', toggleState)}>
            Right
          </ToggleGroupItem>
        </ToggleGroup>
      </CardContent>

      <CardContent className={'space-y-4'}>
        <p>Signature Line</p>
        <ToggleGroup
          type="single"
          value={selectedLine}
          onValueChange={(value) => {
            if (value) {
              updateDeclaration({
                ...declarationDisplay,
                line: value,
                showHeading: true,
              })
            }
          }}
        >
          <ToggleGroupItem value="none" className={cn('group', toggleState)}>
            None
          </ToggleGroupItem>
          <ToggleGroupItem value="solid" className={cn('group', toggleState)}>
            Solid
          </ToggleGroupItem>
        </ToggleGroup>
      </CardContent>
    </Card>
  )
}
