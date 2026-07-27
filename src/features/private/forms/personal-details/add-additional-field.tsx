import { Button } from '#/components/ui/button'
import { Card, CardContent } from '#/components/ui/card'
import {
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from '#/components/ui/field'
import { useResumeFormContext } from '#/contexts/resume-form-context'
import { PlusCircle } from 'lucide-react'

export default function AddAdditionalField() {
  const { filteredPersonalField, addSelectedField } = useResumeFormContext()

  return (
    <FieldGroup className={'gap-2'}>
      <FieldSet>
        <FieldLegend>Add details</FieldLegend>
        <FieldDescription>Personal details</FieldDescription>
      </FieldSet>
      <FieldSeparator />
      <Card className={'py-0 rounded-none shadow-none ring-0'}>
        <CardContent className={'px-0 space-x-2 space-y-2'}>
          {filteredPersonalField.map((field) => (
            <Button
              variant={'outline'}
              key={crypto.randomUUID()}
              type="button"
              onClick={() => addSelectedField(field)}
            >
              <PlusCircle className={'size-4'} />
              {field.fieldLabel}
            </Button>
          ))}
        </CardContent>
      </Card>
    </FieldGroup>
  )
}
