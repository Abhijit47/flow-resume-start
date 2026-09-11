import { IconCopy, IconCopyCheck, IconLink } from '@tabler/icons-react'
import { PaletteIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '#/components/ui/button'
import { Card, CardContent } from '#/components/ui/card'
import { Checkbox } from '#/components/ui/checkbox'
import { Field, FieldLabel } from '#/components/ui/field'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from '#/components/ui/item'
import { Label } from '#/components/ui/label'
import { Switch } from '#/components/ui/switch'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
      },
      (err) => {
        console.error('Failed to copy text: ', err)
      },
    )
  }

  return { copyToClipboard, isCopied }
}

export default function ShareableLinkDialog() {
  const { copyToClipboard, isCopied } = useCopyToClipboard()
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [isCreateResumeTemplate, setIsCreateResumeTemplate] = useState(false)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" size={'lg'}>
          <PaletteIcon /> Manage shareable link
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Save your design as a resume template</DialogTitle>
          <DialogDescription>
            Copy this private link to share your custom resume template.
          </DialogDescription>
        </DialogHeader>

        <Card>
          <CardContent className={'space-y-4'}>
            <div className="flex items-center space-x-2">
              <Switch
                id="isCreateResumeTemplate"
                name="isCreateResumeTemplate"
                checked={isCreateResumeTemplate}
                onCheckedChange={(checked) =>
                  setIsCreateResumeTemplate(checked)
                }
              />
              <Label htmlFor="isCreateResumeTemplate">
                Create resume template
              </Label>
            </div>

            <Item variant={'outline'}>
              <ItemMedia variant="icon">
                <IconLink />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>
                  http://example.com/your-custom-resume-template
                </ItemTitle>
              </ItemContent>
              <ItemActions>
                <Button
                  type="button"
                  size={'icon-sm'}
                  onClick={() => copyToClipboard('https://example.com')}
                >
                  {isCopied ? <IconCopyCheck /> : <IconCopy />}
                </Button>
              </ItemActions>
            </Item>

            <Field orientation="horizontal">
              <Checkbox
                id="is-anonymous"
                name="is-anonymous"
                checked={isAnonymous}
                onCheckedChange={(checked) =>
                  setIsAnonymous(checked as boolean)
                }
              />
              <FieldLabel htmlFor="is-anonymous">
                Make it anonymous. Personal data will be replaced.
              </FieldLabel>
            </Field>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  )
}
