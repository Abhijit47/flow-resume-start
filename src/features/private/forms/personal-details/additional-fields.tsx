import { Field, FieldGroup, FieldLabel } from '#/components/ui/field'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '#/components/ui/input-group'
import { useResumeFormContext } from '#/contexts/resume-form-context'
import type { AdditionalPersonalDetailsSchema } from '#/lib/validators/personal-info-schema'
import { XIcon } from 'lucide-react'
import { Controller, useFormContext } from 'react-hook-form'

export default function AdditionalFields() {
  const form = useFormContext<AdditionalPersonalDetailsSchema>()

  const { selectedField, removeSelectedField } = useResumeFormContext()

  return (
    <FieldGroup className="gap-2">
      {selectedField.map((f) => (
        <Controller
          key={f.field}
          name={f.field}
          control={form.control}
          render={({ field: controllerField }) => (
            <Field>
              <FieldLabel htmlFor={f.field}>{f.fieldLabel}</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  placeholder={f.placeholder}
                  id={f.field}
                  {...controllerField}
                />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton
                    aria-label="Remove"
                    title="Remove"
                    size="icon-xs"
                    variant="destructive"
                    onClick={() => {
                      removeSelectedField(f)
                      form.setValue(f.field, undefined, {
                        shouldDirty: false,
                        shouldTouch: false,
                        shouldValidate: false,
                      })
                    }}
                  >
                    <XIcon className={'size-4'} />
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </Field>
          )}
        />
      ))}
    </FieldGroup>
  )
}
