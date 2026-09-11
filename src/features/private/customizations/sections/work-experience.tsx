import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Checkbox } from '#/components/ui/checkbox'
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
} from '#/components/ui/field'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'

/*
update fields
{"customizationUpdates":[{"value":true,"path":"workDisplay.jobTitleBeforeEmployer"}]}

{"customizationUpdates":[{"value":false,"path":"workDisplay.jobTitleBeforeEmployer"}]}

{"customizationUpdates":[{"value":true/false,"path":"advanced.groupPromotions"}]}
*/

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'

export default function EditWorkExperience() {
  const {
    customization: { advanced, workDisplay },
    updateAdvanced,
    updateWorkDisplay,
  } = useCustomizationStore()

  const isCheckedGroupPromotions = advanced.groupPromotions

  const isJobTitleBeforeEmployer = workDisplay.jobTitleBeforeEmployer.toString()

  return (
    <Card className={''}>
      <CardHeader>
        <CardTitle>Work Experience</CardTitle>
      </CardHeader>

      <CardContent className={'space-y-4'}>
        <p className={'text-sm font-semibold text-muted-foreground'}>
          Title/Subtitle Order
        </p>
        <ToggleGroup
          type="single"
          size={'lg'}
          value={isJobTitleBeforeEmployer}
          onValueChange={(val) => {
            if (val === 'true') {
              updateWorkDisplay({
                ...workDisplay,
                jobTitleBeforeEmployer: true,
              })
            }
            if (val === 'false') {
              updateWorkDisplay({
                ...workDisplay,
                jobTitleBeforeEmployer: false,
              })
            }
          }}
        >
          <ToggleGroupItem value="true" className={cn('group', toggleState)}>
            Job Title - Employer
          </ToggleGroupItem>
          <ToggleGroupItem value="false" className={cn('group', toggleState)}>
            Employer - Job Title
          </ToggleGroupItem>
        </ToggleGroup>
      </CardContent>

      <CardContent>
        <FieldGroup className={'gap-2'}>
          <FieldLegend>Employment History</FieldLegend>
          <Field orientation="horizontal">
            <Checkbox
              id="groupPromotions"
              name="groupPromotions"
              checked={isCheckedGroupPromotions}
              onCheckedChange={(checked) => {
                // setIsGroupPromotionsEnabled(checked as boolean)
                if (checked) {
                  updateAdvanced({
                    ...advanced,
                    groupPromotions: true,
                  })
                } else {
                  updateAdvanced({
                    ...advanced,
                    groupPromotions: false,
                  })
                }
              }}
            />
            <FieldLabel htmlFor="groupPromotions">Group promotions</FieldLabel>
          </Field>
        </FieldGroup>
      </CardContent>
    </Card>
  )
}
