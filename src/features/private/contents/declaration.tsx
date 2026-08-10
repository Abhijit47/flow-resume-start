import { IconTrash } from '@tabler/icons-react'
import { ChevronsUpDownIcon, EyeIcon, EyeOffIcon } from 'lucide-react'
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
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '#/components/ui/input-group'
import { Label } from '#/components/ui/label'
import { useResumeFormContext } from '#/contexts/resume-form-context'

export function DeclarationContent() {
  const [isOpen, setIsOpen] = useState(false)

  const {
    declarationOpts: { fields, append },
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
                <h4 className="text-sm font-semibold">Declaration</h4>
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
            <CardContent>
              <CollapsibleContent className="flex flex-col gap-2 mt-4">
                {fields.map((field, index) => (
                  <div key={field.id}>
                    <Label
                      htmlFor={`contents.summary.${index}.text`}
                      className="sr-only"
                    >
                      Declaration {index + 1}
                    </Label>

                    <InputGroup className="h-12!">
                      <InputGroupInput
                        placeholder="https://x.com/shadcn"
                        {...{
                          ...field,
                          name: `contents.work.${index}.text`,
                        }}
                      />
                      <InputGroupAddon align="inline-end">
                        <InputGroupButton
                          aria-label="Toggle visibility"
                          title="Toggle visibility"
                          size="icon-xs"
                          onClick={() => {
                            field.isHidden = !field.isHidden
                          }}
                        >
                          {field.isHidden ? (
                            <EyeIcon className="size-4" />
                          ) : (
                            <EyeOffIcon className="size-4" />
                          )}
                        </InputGroupButton>
                      </InputGroupAddon>
                    </InputGroup>
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
                        declarationText: '',
                      })
                    }}
                  >
                    Add entry
                  </Button>

                  <CardAction className={'float-end ml-auto self-center'}>
                    <DeclarationDeleteButton />
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

export function DeclarationDeleteButton() {
  const [isAccepted, setIsAccepted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const {
    declarationOpts: { fields, remove },
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
          <DialogTitle>Delete “Declaration” section?</DialogTitle>
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
