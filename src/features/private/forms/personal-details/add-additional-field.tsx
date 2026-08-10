import { Button } from '#/components/ui/button'
import { Card, CardContent } from '#/components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '#/components/ui/collapsible'
import {
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from '#/components/ui/field'
import { useResumeFormContext } from '#/contexts/resume-form-context'
import { ChevronsUpDownIcon, PlusCircle } from 'lucide-react'
import { useState } from 'react'

export default function AddAdditionalField() {
  const [isOpen, setIsOpen] = useState(false)
  const { filteredPersonalField, addSelectedField } = useResumeFormContext()

  return (
    <FieldGroup className={'gap-2'}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
        <div className="flex items-center justify-between">
          <FieldSet>
            <FieldLegend>Add details</FieldLegend>
            <FieldDescription>Personal details</FieldDescription>
          </FieldSet>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="size-8"
              type="button"
            >
              <ChevronsUpDownIcon />
              <span className="sr-only">Toggle details</span>
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className="flex flex-col gap-2 mt-2">
          <Card className={'py-0 rounded-none shadow-none ring-0'}>
            <CardContent className={'px-0 space-x-2 space-y-2'}>
              {filteredPersonalField.map((field) => (
                <Button
                  variant={'outline'}
                  key={crypto.randomUUID()}
                  type="button"
                  onClick={() => {
                    addSelectedField(field)
                    setIsOpen(false)
                  }}
                >
                  <PlusCircle className={'size-4'} />
                  {field.fieldLabel}
                </Button>
              ))}
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>
    </FieldGroup>
  )
}
