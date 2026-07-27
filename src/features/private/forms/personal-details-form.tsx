import { Button } from '#/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import { IconBulb } from '@tabler/icons-react'

import { Field, FieldGroup, FieldSeparator } from '#/components/ui/field'

import type { PersonalDetailsFormData } from '#/lib/validators/personal-info-schema'
import { updateIsEnabledFirstForm } from '#/store/resume-store'
import { Check } from 'lucide-react'
import type { SubmitErrorHandler, SubmitHandler } from 'react-hook-form'
import { useFormContext } from 'react-hook-form'
import PersonalDetailsFields from './personal-details'
import AddAdditionalField from './personal-details/add-additional-field'
import AddSocialLinkField from './personal-details/add-social-link-field'

export default function PersonalDetailsForm() {
  const form = useFormContext<PersonalDetailsFormData>()

  const onError: SubmitErrorHandler<PersonalDetailsFormData> = (errors) => {
    console.log('Form Errors:', errors)
  }

  const onSubmit: SubmitHandler<PersonalDetailsFormData> = (data) => {
    console.log('Form Data:', data)
  }

  return (
    <Card className={'col-span-full lg:col-span-5'}>
      <CardHeader>
        <CardTitle>Edit Personal Details</CardTitle>
        <CardAction>
          <Button variant={'ghost'} size={'sm'}>
            <IconBulb className={'size-4'} />
            Get Tips
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent>
        <div className="w-full">
          <form onSubmit={form.handleSubmit(onSubmit, onError)}>
            <FieldGroup className={'gap-2'}>
              <PersonalDetailsFields />

              <FieldSeparator />

              <AddAdditionalField />

              <FieldSeparator />

              <AddSocialLinkField />

              <Field orientation="horizontal">
                <Button
                  type="button"
                  size={'lg'}
                  className={'w-full'}
                  onClick={() => updateIsEnabledFirstForm(false)}
                >
                  <Check className={'size-4'} />
                  Done
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </div>
      </CardContent>
    </Card>
  )
}
