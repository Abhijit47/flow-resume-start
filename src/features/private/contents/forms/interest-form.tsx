import { Button } from '#/components/ui/button'
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '#/components/ui/field'
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
import { Textarea } from '#/components/ui/textarea'
import { CheckCircle2Icon, LinkIcon } from 'lucide-react'
import { useState } from 'react'
import FormItemSettings from './form-item-settings'

export default function InterestForm() {
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
            <FieldLabel htmlFor="interest-name">Interest</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="interest-name"
                placeholder="Enter interest / hobby"
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
                      <FieldLabel htmlFor="interest-link-url">
                        Link URL
                      </FieldLabel>
                      <InputGroup>
                        <InputGroupInput
                          id="interest-link-url"
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

          <Field>
            <FieldLabel htmlFor="interest-additional-information">
              Additional information
            </FieldLabel>
            <Textarea
              id="interest-additional-information"
              placeholder="Add any additional comments"
              className="resize-none"
            />
          </Field>
        </FieldSet>
      </FieldSet>
    </FieldGroup>
  )
}
