import {
  Field,
  FieldContent,
  FieldGroup,
  FieldLabel,
} from '#/components/ui/field'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '#/components/ui/input-group'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '#/components/ui/popover'
import { useResumeFormContext } from '#/contexts/resume-form-context'
import { capitalizeString } from '#/lib/utils'
import type { PersonalDetailsFormData } from '#/lib/validators/personal-info-schema'
import { IconLinkPlus } from '@tabler/icons-react'
import { CheckCircle, XIcon } from 'lucide-react'
import { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

export default function SocialLinks() {
  const form = useFormContext<PersonalDetailsFormData>()

  const {
    multiFieldOpts: { fields, remove },
  } = useResumeFormContext()

  return (
    <FieldGroup className="gap-2">
      {fields.map((field, index) => (
        <Controller
          name={`social.${index}.link` as const}
          key={field.id}
          control={form.control}
          render={({ field: controllerField, fieldState }) => (
            <Field
              data-invalid={fieldState.invalid}
              aria-invalid={fieldState.invalid}
            >
              <FieldLabel htmlFor={`form-rhf-array-social-${index}`}>
                {capitalizeString(field.display ?? 'Social Profile')}
              </FieldLabel>
              <FieldContent>
                <InputGroup>
                  <InputGroupInput
                    {...controllerField}
                    id={`form-rhf-array-social-${index}`}
                    aria-invalid={fieldState.invalid}
                    placeholder={field.display || 'https://www.example.com'}
                    type="email"
                    autoComplete="email"
                    value={controllerField.value || ''}
                    onChange={(e) => {
                      controllerField.onChange(e)
                      form.setValue(`social.${index}.display`, field.display)
                    }}
                  />

                  <AddSocialLinkPopover idx={index} />

                  <InputGroupAddon align="inline-end">
                    <InputGroupButton
                      type="button"
                      variant="destructive"
                      size="icon-xs"
                      onClick={() => remove(index)}
                      aria-label={`Remove item ${index + 1}`}
                    >
                      <XIcon />
                    </InputGroupButton>
                  </InputGroupAddon>
                  {/* {fields.length > 1 && (
                    <InputGroupAddon align="inline-end">
                      <InputGroupButton
                        type="button"
                        variant="ghost"
                        size="icon-xs"
                        onClick={() => remove(index)}
                        aria-label={`Remove email ${index + 1}`}
                      >
                        <XIcon />
                      </InputGroupButton>
                    </InputGroupAddon>
                  )} */}
                </InputGroup>
              </FieldContent>
            </Field>
          )}
        />
      ))}
    </FieldGroup>
  )
}

function AddSocialLinkPopover({ idx }: { idx: number }) {
  const [url, setUrl] = useState('')
  const [openUrlPopover, setOpenUrlPopover] = useState(false)

  const form = useFormContext<PersonalDetailsFormData>()

  return (
    <Popover open={openUrlPopover} onOpenChange={setOpenUrlPopover}>
      <PopoverTrigger asChild>
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            type="button"
            variant="outline"
            size="xs"
            aria-label={`Add item url ${idx + 1}`}
          >
            <IconLinkPlus className={'size-4'} /> Link
          </InputGroupButton>
        </InputGroupAddon>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <Field>
          <FieldLabel htmlFor={`form-rhf-array-social-${idx}-url`}>
            Link URL {idx + 1}
          </FieldLabel>
          <InputGroup>
            <InputGroupInput
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              id={`form-rhf-array-social-${idx}-url`}
              placeholder={`Add url ${idx + 1}`}
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                type="button"
                variant="ghost"
                size="icon-xs"
                onClick={() => {
                  form.setValue(`social.${idx}.link`, url)
                  setUrl('')
                  setOpenUrlPopover(false)
                }}
                aria-label={`Add url ${idx + 1}`}
              >
                <CheckCircle />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </Field>
      </PopoverContent>
    </Popover>
  )
}

// function Sample() {
//   return (
//     <InputGroup className="[--radius:9999px]">
//       <Popover>
//         <PopoverTrigger>
//           <InputGroupAddon>
//             <InputGroupButton variant="secondary" size="icon-xs">
//               <IconInfoCircle />
//             </InputGroupButton>
//           </InputGroupAddon>
//         </PopoverTrigger>
//         <PopoverContent
//           align="start"
//           className="flex flex-col gap-1 rounded-xl text-sm"
//         >
//           <p className="font-medium">Your connection is not secure.</p>
//           <p>You should not enter any sensitive information on this site.</p>
//         </PopoverContent>
//       </Popover>
//       <InputGroupAddon className="pl-1.5 text-muted-foreground">
//         https://
//       </InputGroupAddon>
//       <InputGroupInput id="input-secure-19" />
//       <InputGroupAddon align="inline-end">
//         <InputGroupButton onClick={() => {}} size="icon-xs">
//           <IconStar
//             // data-favorite={isFavorite}
//             data-favorite={false}
//             className="data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600"
//           />
//         </InputGroupButton>
//       </InputGroupAddon>
//     </InputGroup>
//   )
// }
