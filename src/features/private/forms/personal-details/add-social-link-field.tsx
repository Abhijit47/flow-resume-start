import { Button } from '#/components/ui/button'
import { Card, CardContent } from '#/components/ui/card'
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '#/components/ui/field'
import { Input } from '#/components/ui/input'
import { ScrollArea } from '#/components/ui/scroll-area'
import { useResumeFormContext } from '#/contexts/resume-form-context'
import { capitalizeString } from '#/lib/utils'
import { PlusCircleIcon } from 'lucide-react'

export default function AddSocialLinkField() {
  const {
    filteredSocialProfileField,
    searchSocialProfile,
    onSearchSocialProfileChange,
    multiFieldOpts: { fields, append },
  } = useResumeFormContext()

  return (
    <FieldGroup>
      <FieldSet>
        <FieldLegend>Links / social profiles</FieldLegend>
        <Field>
          <FieldLabel htmlFor="social-profile">Search Providers</FieldLabel>
          <Input
            id="social-profile"
            placeholder="Search social profile"
            value={searchSocialProfile}
            onChange={(e) => onSearchSocialProfileChange(e.target.value)}
            disabled={fields.length >= 5}
          />
        </Field>
      </FieldSet>
      <Card className={'py-0 rounded-none shadow-none ring-0'}>
        <ScrollArea className="h-48 w-full">
          <CardContent className={'px-0 space-x-2 space-y-2'}>
            {filteredSocialProfileField.map((field) => (
              <Button
                variant={'outline'}
                key={crypto.randomUUID()}
                type="button"
                onClick={() => append({ link: '', display: field })}
                disabled={fields.length >= 5}
              >
                <PlusCircleIcon className={'size-4'} />
                {capitalizeString(field)}
              </Button>
            ))}
          </CardContent>
        </ScrollArea>
      </Card>
    </FieldGroup>
  )
}
