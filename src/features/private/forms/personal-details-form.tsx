import { IconBulb } from '@tabler/icons-react'
import { Check } from 'lucide-react'
import type { SubmitErrorHandler, SubmitHandler } from 'react-hook-form'
import { useFormContext } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '#/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import { Field, FieldGroup, FieldSeparator } from '#/components/ui/field'

import { ScrollArea } from '#/components/ui/scroll-area'
import type { ResumeFormValues } from '#/lib/validators/resume-schema'
import { updateIsEnabledFirstForm } from '#/store/resume-store'
import PersonalDetailsFields from './personal-details'
import AddAdditionalField from './personal-details/add-additional-field'
import AddSocialLinkField from './personal-details/add-social-link-field'

export default function PersonalDetailsForm() {
  const form = useFormContext<ResumeFormValues>()

  const onError: SubmitErrorHandler<ResumeFormValues> = (errors) => {
    // console.log('Form Errors:', errors)
    const personalErrors = errors.personalDetails ?? {}
    Object.keys(personalErrors).forEach((field) => {
      toast.error(`Error in field: ${field}`)
    })
    return
  }

  const onSubmit: SubmitHandler<ResumeFormValues> = (data) => {
    // console.log('Form Data:', JSON.stringify(data, null, 2))

    const personalDetails = data.personalDetails
    // console.log('Form Data:', JSON.stringify(personalDetails, null, 2))
    toast('You submitted the following values:', {
      description: (
        <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
          <code>{JSON.stringify(personalDetails, null, 2)}</code>
        </pre>
      ),
      position: 'bottom-right',
      classNames: {
        content: 'flex flex-col gap-2',
      },
      style: {
        '--border-radius': 'calc(var(--radius)  + 4px)',
      } as React.CSSProperties,
    })
    updateIsEnabledFirstForm(false)
    // console.log(
    //   'formState:',
    //   JSON.stringify(formState.dirtyFields.personalDetails, null, 2),
    // )
  }

  return (
    <ScrollArea className={'h-dvh w-full'}>
      <Card className={'w-full'}>
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

                <Field orientation="horizontal"></Field>
              </FieldGroup>
              <Button type="submit" size={'lg'} className={'w-full'}>
                <Check className={'size-4'} />
                Done
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </ScrollArea>
  )
}
