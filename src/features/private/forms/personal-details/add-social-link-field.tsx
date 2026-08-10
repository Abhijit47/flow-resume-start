import { Button } from '#/components/ui/button'
import { Card, CardContent } from '#/components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '#/components/ui/collapsible'
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
import { ChevronsUpDownIcon, PlusCircleIcon } from 'lucide-react'
import { useState } from 'react'

export default function AddSocialLinkField() {
  const [isOpen, setIsOpen] = useState(false)
  const {
    filteredSocialProfileField,
    searchSocialProfile,
    onSearchSocialProfileChange,
    multiFieldOpts: { fields, append },
  } = useResumeFormContext()

  return (
    <FieldGroup>
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
        <div className="flex items-center justify-between">
          <FieldSet>
            <FieldLegend>Links / social profiles</FieldLegend>
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

        <CollapsibleContent className="flex flex-col gap-2">
          <FieldGroup className={'gap-2'}>
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
            <Card className={'py-0 rounded-none shadow-none ring-0'}>
              <ScrollArea className="h-48 w-full">
                <CardContent className={'px-0 space-x-2 space-y-2'}>
                  {filteredSocialProfileField.map((field) => (
                    <Button
                      variant={'outline'}
                      key={crypto.randomUUID()}
                      type="button"
                      onClick={() => {
                        append({ link: '', display: field })
                        setIsOpen(false)
                      }}
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
        </CollapsibleContent>
      </Collapsible>
    </FieldGroup>
  )
}
