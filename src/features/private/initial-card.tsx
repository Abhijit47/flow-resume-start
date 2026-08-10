import { Button } from '#/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import AddContentDialog from '#/features/private/add-content-dialog'
import { useSession } from '#/lib/auth-client'
import type { PersonalDetailsFormData } from '#/lib/validators/personal-info-schema'
import { updateIsEnabledFirstForm } from '#/store/resume-store'
import {
  IconCamera,
  IconEditCircle,
  IconMail,
  IconMap2,
  IconPhoneCall,
} from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useIndexedDB } from 'react-indexed-db-hook'

interface ExtendedFile extends File {
  preview: string
}

type FormFields =
  'fullName' | 'jobTitle' | 'displayEmail' | 'phone' | 'address' | 'avatar'

type BaseDetailsFormFields = Pick<PersonalDetailsFormData, FormFields>

async function fileToDataUrl(file: File) {
  return new Promise<string>((resolve) => {
    const reader = new FileReader()

    reader.onload = () => {
      resolve(reader.result as string)
    }

    reader.readAsDataURL(file)
  })
}

export default function InitialCard() {
  const [files, setFiles] = useState<ExtendedFile[]>([])

  const { data } = useSession()

  const { getByID } = useIndexedDB('userAvatar')

  const form = useFormContext<BaseDetailsFormFields>()

  useEffect(() => {
    if (data) {
      getByID(data.user.id).then((savedAvatar) => {
        setFiles(
          savedAvatar
            ? [
                {
                  ...savedAvatar.avatar,
                  preview: URL.createObjectURL(savedAvatar.avatar),
                },
              ]
            : [],
        )

        fileToDataUrl(savedAvatar?.avatar as File).then((dataUrl) => {
          form.setValue('avatar', dataUrl || '', {
            shouldDirty: true,
            shouldTouch: true,
          })
        })

        // form.setValue(
        //   'avatar',
        //   savedAvatar ? URL.createObjectURL(savedAvatar.avatar) : '',
        //   { shouldDirty: true, shouldTouch: true },
        // )
      })
    }
  }, [data, getByID, form])

  return (
    <Card>
      <CardHeader>
        <CardTitle className={'text-xl font-semibold opacity-50'}>
          Your name
        </CardTitle>
        <CardAction>
          <Button
            size={'icon-sm'}
            className={'rounded-full'}
            onClick={() => updateIsEnabledFirstForm(true)}
          >
            <IconEditCircle className={'size-4'} />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className={'opacity-50'}>
        <div className={'flex items-center justify-between'}>
          <ul className={'flex flex-col gap-3'}>
            <li
              className={'inline-flex items-center gap-2 text-base font-medium'}
            >
              <IconMail className={'size-4'} /> Email
            </li>
            <li
              className={'inline-flex items-center gap-2 text-base font-medium'}
            >
              <IconPhoneCall className={'size-4'} /> Phone
            </li>
            <li
              className={'inline-flex items-center gap-2 text-base font-medium'}
            >
              <IconMap2 className={'size-4'} /> Address
            </li>
          </ul>

          {files.length > 0 ? (
            <img
              src={files[0].preview}
              alt="Avatar Preview"
              className={'size-28 rounded-full object-cover'}
            />
          ) : (
            <span className={'bg-accent rounded-full p-1.5'}>
              <IconCamera className={'size-20 stroke-1'} />
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className={'justify-center'}>
        <AddContentDialog />
      </CardFooter>
    </Card>
  )
}
