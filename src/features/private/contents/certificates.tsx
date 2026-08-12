import { IconTrash } from '@tabler/icons-react'
import { ChevronsUpDownIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '#/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from '#/components/ui/card'
import { Checkbox } from '#/components/ui/checkbox'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '#/components/ui/collapsible'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '#/components/ui/dialog'
import { Field } from '#/components/ui/field'
import { Label } from '#/components/ui/label'
import { Separator } from '#/components/ui/separator'
import { useResumeFormContext } from '#/contexts/resume-form-context'
import CertificateForm from './forms/certificate-form'

export default function CertificatesContent() {
  const [isOpen, setIsOpen] = useState(false)

  const {
    certificatesOpts: { fields, append },
  } = useResumeFormContext()

  return (
    <>
      {fields.length > 0 ? (
        <Card>
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-full px-0"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold">Certificate</h4>
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
            </CardHeader>
            <Separator className={'my-2'} />
            <CardContent>
              <CollapsibleContent className="data-closed:animate-collapsible-up data-open:animate-collapsible-down flex flex-col gap-4 overflow-hidden transition-all duration-300">
                {fields.map((fieldItem, fieldIdx) => (
                  <div key={fieldItem.id}>
                    <CertificateForm />
                  </div>
                ))}
                <CardFooter className={'px-0'}>
                  <Button
                    variant={'secondary'}
                    type="button"
                    onClick={() => {
                      append({
                        isHidden: false,
                        showPlaceholder: false,
                        certificate: '',
                      })
                    }}
                  >
                    Add entry
                  </Button>

                  <CardAction className={'float-end ml-auto self-center'}>
                    <CertificateDeleteButton />
                  </CardAction>
                </CardFooter>
              </CollapsibleContent>
            </CardContent>
          </Collapsible>
        </Card>
      ) : null}
    </>
  )
}

export function CertificateDeleteButton() {
  const [isAccepted, setIsAccepted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const {
    certificatesOpts: { fields, remove },
  } = useResumeFormContext()

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button type="button" variant={'destructive'} size={'icon-sm'}>
          <IconTrash />
        </Button>
      </DialogTrigger>
      <DialogContent className={'mx-auto sm:max-w-md'}>
        <DialogHeader>
          <DialogTitle>Delete “Certificate” section?</DialogTitle>
          <DialogDescription>
            This will permanently delete this section and all its entries. This
            action can't be undone.
          </DialogDescription>
        </DialogHeader>
        <Field orientation="horizontal">
          <Checkbox
            id="terms-checkbox"
            name="terms-checkbox"
            checked={isAccepted}
            onCheckedChange={(checked) => setIsAccepted(!!checked)}
          />
          <Label htmlFor="terms-checkbox">Accept terms and conditions</Label>
        </Field>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button
            variant={'destructive'}
            disabled={!isAccepted}
            type="button"
            onClick={() => {
              remove(fields.length - 1)
              setIsOpen(false)
            }}
          >
            Delete Section
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
