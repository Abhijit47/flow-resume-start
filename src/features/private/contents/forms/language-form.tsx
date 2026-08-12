import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '#/components/ui/field'
import { Input } from '#/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '#/components/ui/select'
import { Textarea } from '#/components/ui/textarea'
import FormItemSettings from './form-item-settings'

const languageLevels = [
  {
    value: 'basic',
    label: 'Basic',
    level: 1,
  },
  {
    value: 'conversational',
    label: 'Conversational',
    level: 2,
  },
  {
    value: 'proficient',
    label: 'Proficient',
    level: 3,
  },
  {
    value: 'fluent',
    label: 'Fluent',
    level: 4,
  },
  {
    value: 'native/bilingual',
    label: 'Native/Bilingual',
    level: 5,
  },
]

export default function LanguageForm() {
  return (
    <FieldGroup>
      <FieldSet>
        <div className={'flex items-center justify-between'}>
          <FieldLegend>Edit Entry</FieldLegend>
          <FormItemSettings />
        </div>
        <FieldSet>
          <Field>
            <FieldLabel htmlFor="language-name">Language</FieldLabel>
            <Input id="language-name" placeholder="Enter language" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="language-additional-information">
              Additional information
            </FieldLabel>
            <Textarea
              id="language-additional-information"
              placeholder="Add any additional comments"
              className="resize-none"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="language-level">Language level</FieldLabel>
            <Select>
              <SelectTrigger id="language-level">
                <SelectValue placeholder="Select language level" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectGroup>
                  <SelectLabel>Choose level</SelectLabel>
                  {languageLevels.map((level) => (
                    <SelectItem
                      key={level.value}
                      value={level.level.toString()}
                    >
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </FieldSet>
      </FieldSet>
    </FieldGroup>
  )
}
