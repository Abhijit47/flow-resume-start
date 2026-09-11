import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'

/*
{"customizationUpdates":[{"value":true,"path":"educationDisplay.degreeBeforeSchool"}]}
{"customizationUpdates":[{"value":false,"path":"educationDisplay.degreeBeforeSchool"}]}
*/

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'

export default function EditEducation() {
  const {
    customization: { educationDisplay },
    updateEducationDisplay,
  } = useCustomizationStore()

  const isDegreeBeforeSchool = educationDisplay.degreeBeforeSchool.toString()

  return (
    <Card className={''}>
      <CardHeader>
        <CardTitle>Education</CardTitle>
      </CardHeader>
      <CardContent className={'space-y-4'}>
        <p>Title & Subtitle Order</p>
        <ToggleGroup
          type="single"
          size={'lg'}
          value={isDegreeBeforeSchool}
          onValueChange={(val) => {
            if (val === 'true') {
              updateEducationDisplay({
                ...educationDisplay,
                degreeBeforeSchool: true,
              })
            }
            if (val === 'false') {
              updateEducationDisplay({
                ...educationDisplay,
                degreeBeforeSchool: false,
              })
            }
          }}
        >
          <ToggleGroupItem value="true" className={cn('group', toggleState)}>
            Degree, School
          </ToggleGroupItem>
          <ToggleGroupItem value="false" className={cn('group', toggleState)}>
            School, Degree
          </ToggleGroupItem>
        </ToggleGroup>
      </CardContent>
    </Card>
  )
}
