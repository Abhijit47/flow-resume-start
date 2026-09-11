import { MessageCircleMoreIcon, SendIcon } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import { Button } from '#/components/ui/button'
import { Card, CardContent } from '#/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '#/components/ui/field'
import { Textarea } from '#/components/ui/textarea'
import { cn } from '#/lib/utils'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

const animationClass =
  'animate-in fade-in slide-in-from-top-8 duration-300 fade-out slide-out-to-top-8'

export default function FeatureFeedbackDialog() {
  const [feedback, setFeedback] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    event.stopPropagation()
    // Handle the feedback submission logic here
    console.log('Feedback submitted:', feedback)
    toast.success('Thank you for your feedback! We appreciate your input.')
    // Clear the feedback input after submission
    setFeedback('')
    setIsOpen(false) // Close the dialog after submission
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button type="button" size={'lg'}>
          <MessageCircleMoreIcon /> Give feedback
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Help us improve FlowCV</DialogTitle>
          <DialogDescription>
            We appreciate your feedback and read every message 🙌
          </DialogDescription>
        </DialogHeader>

        <Card>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="feedback">
                    Your valuable feedback
                  </FieldLabel>
                  <Textarea
                    id="feedback"
                    placeholder="Please share your feedback here..."
                    className="resize-none min-h-24"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                  />
                </Field>

                {feedback.length > 0 ? (
                  <Button type="submit" className={cn(animationClass)}>
                    <SendIcon />
                    Submit Feedback
                  </Button>
                ) : null}
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  )
}
