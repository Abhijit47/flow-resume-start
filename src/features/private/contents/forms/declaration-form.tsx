import SignaturePad from '#/components/extends/signature-pad'
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '#/components/ui/tabs'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { IconSignature, IconUpload } from '@tabler/icons-react'
import { BrushCleaningIcon, PlusCircle, SaveIcon, XCircle } from 'lucide-react'
import { Fragment, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import FormItemSettings from './form-item-settings'

export default function DeclarationForm() {
  return (
    <FieldGroup>
      <FieldSet>
        <div className={'flex items-center justify-between'}>
          <FieldLegend>Edit Entry</FieldLegend>
          <FormItemSettings />
        </div>
        <FieldSet>
          <Field>
            <FieldLabel htmlFor="declaration-text">Text</FieldLabel>
            <Input id="declaration-text" placeholder="Enter declaration text" />
          </Field>

          <div>
            <DeclarationSignatureDialog />
          </div>

          <Field>
            <FieldLabel htmlFor="declaration-full-name">Full name</FieldLabel>
            <Input id="declaration-full-name" placeholder="Enter full name" />
          </Field>

          <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
            <Field>
              <FieldLabel htmlFor="declaration-place">Place</FieldLabel>
              <Input id="declaration-place" placeholder="Enter place" />
            </Field>
            <Field>
              <FieldLabel htmlFor="declaration-date">Date</FieldLabel>
              <Input id="declaration-date" placeholder="Enter date" />
            </Field>
          </div>
        </FieldSet>
      </FieldSet>
    </FieldGroup>
  )
}

interface ExtendedFile extends File {
  preview: string
}

function DeclarationSignatureDialog() {
  const [files, setFiles] = useState<ExtendedFile[]>([])
  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': [] },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024, // 5MB
    multiple: false,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      )
      // TODO: Upload to INDEXDB
    },
  })

  const thumbs = files.map((file) => (
    <Fragment key={file.name}>
      <div className={'size-24 mx-auto relative'}>
        <img
          src={file.preview}
          onLoad={() => URL.revokeObjectURL(file.preview)}
          alt={file.name}
          className="size-full"
        />
        <Button
          size={'icon-sm'}
          variant={'destructive'}
          type="button"
          onClick={handleRemoveFile}
          className={'absolute -top-4 -right-4 rounded-full'}
        >
          <XCircle />
        </Button>
      </div>
    </Fragment>
  ))

  function handleRemoveFile() {
    setFiles([])
  }

  useEffect(() => {
    // Revoke the data uris to avoid memory leaks on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview))
  }, [files])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button">
          <PlusCircle /> Create / Upload
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="overview" className="w-full h-full">
          <TabsList className={'w-full'} variant={'default'}>
            <TabsTrigger value="overview">
              <IconSignature className={'size-6 stroke-1'} />
              Signature
            </TabsTrigger>
            <TabsTrigger value="analytics">
              <IconUpload className={'size-6 stroke-1'} />
              Upload
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card className={''}>
              <CardContent>
                <SignaturePad
                  penColor="hsl(var(--foreground))"
                  lineWidth={4}
                  showButtons={true}
                  saveButtonIcon={<SaveIcon />}
                  clearButtonIcon={<BrushCleaningIcon />}
                  onSave={(val) => {
                    console.log(val)
                    // TODO: Upload to INDEXDB
                  }}
                  onChange={(val) => console.log(val)}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics">
            <Card>
              <CardContent>
                {files.length > 0 ? (
                  <div className={'min-h-46 flex items-center justify-center'}>
                    {thumbs}
                  </div>
                ) : (
                  <div
                    {...getRootProps({
                      className:
                        'dropzone min-h-46 flex items-center justify-center',
                    })}
                  >
                    <input {...getInputProps()} />
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
