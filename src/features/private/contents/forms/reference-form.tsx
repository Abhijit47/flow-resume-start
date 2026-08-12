import { Button } from '#/components/ui/button'
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '#/components/ui/field'
import { Input } from '#/components/ui/input'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '#/components/ui/input-group'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '#/components/ui/popover'
import { CheckCircle2Icon, LinkIcon } from 'lucide-react'
import { useState } from 'react'
import FormItemSettings from './form-item-settings'

export default function ReferenceForm() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <FieldGroup>
      <FieldSet>
        <div className={'flex items-center justify-between'}>
          <FieldLegend>Edit Entry</FieldLegend>
          <FormItemSettings />
        </div>
        <FieldSet>
          <Field>
            <FieldLabel htmlFor="reference-name">Name</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="reference-name"
                placeholder="Enter the full name"
              />
              <InputGroupAddon align="inline-end">
                <Popover open={isOpen} onOpenChange={setIsOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      aria-label="More"
                      size="xs"
                      type="button"
                    >
                      <LinkIcon /> Link
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="end" className="w-72">
                    <Field>
                      <FieldLabel htmlFor="reference-link-url">
                        Link URL
                      </FieldLabel>
                      <InputGroup>
                        <InputGroupInput
                          id="reference-link-url"
                          placeholder="Enter link"
                          onMouseDown={() => setIsOpen(true)}
                        />
                        <InputGroupAddon align="inline-end">
                          <Button
                            type="button"
                            size={'icon-xs'}
                            variant={'outline'}
                            onClick={() => {
                              setIsOpen(false)
                            }}
                          >
                            <CheckCircle2Icon />
                          </Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </Field>
                  </PopoverContent>
                </Popover>
              </InputGroupAddon>
            </InputGroup>
          </Field>

          <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
            <Field>
              <FieldLabel htmlFor="reference-job-title">Job Title</FieldLabel>
              <Input id="reference-job-title" placeholder="Enter job title" />
            </Field>
            <Field>
              <FieldLabel htmlFor="reference-organization">
                Organization
              </FieldLabel>
              <Input
                id="reference-organization"
                placeholder="Enter organization"
              />
            </Field>
          </div>
          <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
            <Field>
              <FieldLabel htmlFor="reference-email">Email</FieldLabel>
              <Input id="reference-email" placeholder="Enter email" />
            </Field>
            <Field>
              <FieldLabel htmlFor="reference-phone">Phone</FieldLabel>
              <Input id="reference-phone" placeholder="Enter phone number" />
            </Field>
          </div>
        </FieldSet>
      </FieldSet>
    </FieldGroup>
  )
}
