import { IconCamera } from '@tabler/icons-react'
import { XCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Controller, useFormContext } from 'react-hook-form'
import { useIndexedDB } from 'react-indexed-db-hook'
import { toast } from 'sonner'

import { Button } from '#/components/ui/button'
import { Field, FieldGroup, FieldLabel } from '#/components/ui/field'
import { Input } from '#/components/ui/input'
import { useSession } from '#/lib/auth-client'
import type { ResumeFormValues } from '#/lib/validators/resume-schema'

interface ExtendedFile extends File {
  preview: string
}

// type FormFields =
//   'fullName' | 'jobTitle' | 'displayEmail' | 'phone' | 'address' | 'avatar'

// type BaseDetailsFormFields = Pick<
//   ResumeFormValues['personalDetails'],
//   'fullName' | 'jobTitle' | 'displayEmail' | 'phone' | 'address' | 'avatar'
// >

async function fileToDataUrl(file: File) {
  return new Promise<string>((resolve) => {
    const reader = new FileReader()

    reader.onload = () => {
      resolve(reader.result as string)
    }

    reader.readAsDataURL(file)
  })
}

export default function BaseDetails() {
  const [files, setFiles] = useState<ExtendedFile[]>([])

  const { data } = useSession()

  const { clear, update, getByID } = useIndexedDB('userAvatar')

  const form = useFormContext<ResumeFormValues>()

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': [] },
    maxSize: 5 * 1024 * 1024, // 5MB
    multiple: false,
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      )
    },
  })

  useEffect(() => {
    // Revoke the data uris to avoid memory leaks on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview))
  }, [files])

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
          form.setValue('personalDetails.avatar', dataUrl || '', {
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

  function handleRemovePhoto() {
    toast.promise(clear(), {
      loading: 'Removing photo...',
      success: () => {
        setFiles([])
        form.setValue('personalDetails.avatar', '', {
          shouldDirty: true,
          shouldTouch: true,
        })
        return 'Photo removed from IndexedDB!'
      },
      error: 'Failed to remove photo from IndexedDB.',
    })
  }

  function handleUploadPhoto(file: File) {
    toast.promise(
      Promise.all([
        clear(),
        update({
          id: data?.user.id || 1, // Use user ID or a default value
          name: 'avatar',
          avatar: file,
        }),
      ]),
      {
        loading: 'Uploading photo...',
        success: 'Photo uploaded successfully!',
        error: 'Failed to upload photo.',
      },
    )
  }

  const thumbs = files.map((file) => (
    <div key={crypto.randomUUID()}>
      <img
        src={file.preview}
        onLoad={() => URL.revokeObjectURL(file.preview)}
        alt={file.name}
      />
    </div>
  ))

  function PreviewAvatar() {
    return (
      <div className={'relative'}>
        <div className={'size-24 mx-auto rounded-lg overflow-hidden'}>
          {thumbs}
        </div>
        <Button
          size={'icon-xs'}
          variant={'destructive'}
          type="button"
          onClick={() => handleRemovePhoto()}
          className={'absolute top-0 right-0 z-10'}
        >
          <span className={'sr-only'}>Remove photo</span>
          <XCircle className={'size-4'} />
        </Button>
      </div>
    )
  }

  return (
    <>
      <div className={'grid grid-cols-6 gap-4'}>
        <FieldGroup className={'col-span-full md:col-span-4'}>
          <Controller
            name="personalDetails.fullName"
            control={form.control}
            render={({ field }) => (
              <Field>
                <FieldLabel htmlFor="full-name">Full name</FieldLabel>
                <Input id="full-name" placeholder="Evil Rabbit" {...field} />
              </Field>
            )}
          />

          <Controller
            name="personalDetails.jobTitle"
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

        <Controller
          name="personalDetails.avatar"
          control={form.control}
          render={({ field }) => (
            <Field className={'col-span-full md:col-span-2'}>
              <FieldLabel htmlFor="photo" className={'text-center w-full'}>
                Photo
              </FieldLabel>

              <div className={'h-full w-full'}>
                {files.length > 0 ? (
                  <PreviewAvatar />
                ) : (
                  <div {...getRootProps({ className: 'dropzone h-full' })}>
                    <input
                      {...getInputProps({ name: 'avatar' })}
                      onChange={async (e) => {
                        const file = e.target.files?.[0]
                        if (file) {
                          const dataUrl = await fileToDataUrl(file)
                          field.onChange(dataUrl)
                          handleUploadPhoto(file)
                          // const preview = URL.createObjectURL(file)
                          // setFiles([{ ...file, preview }])
                          // field.onChange(preview)
                          // // Save the avatar to IndexedDB
                          // handleUploadPhoto(file)
                        }
                      }}
                    />
                    <div
                      className={
                        'bg-accent rounded-lg h-full w-full inline-flex items-center justify-center'
                      }
                      id="photo"
                    >
                      <IconCamera className={'size-18 mx-auto stroke-1'} />
                    </div>
                  </div>
                )}
              </div>
            </Field>
          )}
        />
      </div>

      <Controller
        name="personalDetails.displayEmail"
        control={form.control}
        render={({ field }) => (
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" placeholder="someone@gmail.com" {...field} />
          </Field>
        )}
      />

      <Controller
        name="personalDetails.phone"
        control={form.control}
        render={({ field }) => (
          <Field>
            <FieldLabel htmlFor="phone">Phone</FieldLabel>
            <Input id="phone" placeholder="+1 (555) 123-4567" {...field} />
          </Field>
        )}
      />

      <Controller
        name="personalDetails.address"
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
