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

const skillLevels = [
  { value: 'beginner', label: 'Beginner', level: 1 },
  { value: 'amateur', label: 'Amateur', level: 2 },
  { value: 'comptetent', label: 'Comptetent', level: 3 },
  { value: 'proficient', label: 'Proficient', level: 4 },
  { value: 'expert', label: 'Expert', level: 5 },
]

export default function SkillForm() {
  return (
    <FieldGroup>
      <FieldSet>
        <div className={'flex items-center justify-between'}>
          <FieldLegend>Edit Entry</FieldLegend>
          <FormItemSettings />
        </div>
        <FieldSet>
          <Field>
            <FieldLabel htmlFor="skill-name">Skill</FieldLabel>
            <Input id="skill-name" placeholder="Enter skill" />
          </Field>
          <Field>
            <FieldLabel htmlFor="skill-sub-skills">
              Information / Sub-skills
            </FieldLabel>
            <Textarea
              id="skill-sub-skills"
              placeholder="Add any additional comments"
              className="resize-none"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="skill-level">Skill Level</FieldLabel>
            <Select>
              <SelectTrigger id="skill-level">
                <SelectValue placeholder="select skill level" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectGroup>
                  <SelectLabel>Choose level</SelectLabel>
                  {skillLevels.map((level) => (
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
