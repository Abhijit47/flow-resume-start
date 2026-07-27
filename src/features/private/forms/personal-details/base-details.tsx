import { Field, FieldGroup, FieldLabel } from '#/components/ui/field'
import { Input } from '#/components/ui/input'
import type { PersonalDetailsFormData } from '#/lib/validators/personal-info-schema'
import { IconCamera } from '@tabler/icons-react'
import { Controller, useFormContext } from 'react-hook-form'

export default function BaseDetails() {
  const form =
    useFormContext<
      Pick<
        PersonalDetailsFormData,
        'fullName' | 'jobTitle' | 'displayEmail' | 'phone' | 'address'
      >
    >()

  return (
    <>
      <div className={'grid grid-cols-6 gap-4'}>
        <FieldGroup className={'col-span-full md:col-span-4'}>
          <Controller
            name="fullName"
            control={form.control}
            render={({ field }) => (
              <Field>
                <FieldLabel htmlFor="full-name">Full name</FieldLabel>
                <Input id="full-name" placeholder="Evil Rabbit" {...field} />
              </Field>
            )}
          />

          <Controller
            name="jobTitle"
            control={form.control}
            render={({ field }) => (
              <Field>
                <FieldLabel htmlFor="professional-title">
                  Professional title
                </FieldLabel>
                <Input
                  id="professional-title"
                  placeholder="Software Engineer"
                  {...field}
                />
              </Field>
            )}
          />
        </FieldGroup>
        <Field className={'col-span-full md:col-span-2'}>
          <FieldLabel htmlFor="photo" className={'text-center w-full'}>
            Photo
          </FieldLabel>
          <Input
            id="photo"
            type="file"
            placeholder="Upload your photo"
            // className="hidden"
          />
          <div className={'bg-accent rounded-lg'} id="photo">
            <IconCamera className={'size-18 mx-auto stroke-1'} />
          </div>
        </Field>
      </div>

      <Controller
        name="displayEmail"
        control={form.control}
        render={({ field }) => (
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" placeholder="someone@gmail.com" {...field} />
          </Field>
        )}
      />

      <Controller
        name="phone"
        control={form.control}
        render={({ field }) => (
          <Field>
            <FieldLabel htmlFor="phone">Phone</FieldLabel>
            <Input id="phone" placeholder="+1 (555) 123-4567" {...field} />
          </Field>
        )}
      />

      <Controller
        name="address"
        control={form.control}
        render={({ field }) => (
          <Field>
            <FieldLabel htmlFor="location">Location</FieldLabel>
            <Input
              id="location"
              placeholder="123 Main St, City, Country"
              {...field}
            />
          </Field>
        )}
      />
    </>
  )
}
