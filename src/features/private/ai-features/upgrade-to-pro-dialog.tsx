import { Button } from '#/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

type UpgradeToProDialogProps = {
  isOpen: boolean
  onToggle: () => void
}

export default function UpgradeToProDialog(props: UpgradeToProDialogProps) {
  const { isOpen, onToggle } = props
  return (
    <Dialog open={isOpen} onOpenChange={onToggle}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>AI features are available on the Pro Plan</DialogTitle>
          <DialogDescription>
            Your free plan still includes unlimited PDF downloads, access to all
            resume templates and design options.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Stay on Free
            </Button>
          </DialogClose>
          <Button type="button">Upgrade to Pro</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
