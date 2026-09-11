import { Button } from '#/components/ui/button'
import { Field, FieldGroup } from '#/components/ui/field'
import { Label } from '#/components/ui/label'
import { Textarea } from '#/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

type NewIdeaDialogProps = {
  isOpen: boolean
  onToggle: () => void
}

export default function NewToolIdeaDialog(props: NewIdeaDialogProps) {
  const { isOpen, onToggle } = props
  return (
    <Dialog open={isOpen} onOpenChange={onToggle}>
      <form
        className={'w-full'}
        onSubmit={(ev) => {
          ev.preventDefault()
          ev.stopPropagation()
          onToggle()
        }}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Got an idea for an AI tool?</DialogTitle>
            <DialogDescription>
              Let us know what AI tools you'd like to see.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="newIdea" className={'sr-only'}>
                New Idea
              </Label>
              <Textarea
                id="newIdea"
                name="newIdea"
                placeholder="What AI tool would you like to see?"
                className={'min-h-20'}
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <Button type="submit" className={'w-full'}>
              Send Feedback
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
