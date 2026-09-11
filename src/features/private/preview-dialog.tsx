import { Button } from '#/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '#/components/ui/dialog'
import { ScrollArea } from '#/components/ui/scroll-area'
import { ZoomInIcon } from 'lucide-react'

export default function PreviewDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={
            'absolute inset-0 flex h-full w-full items-center justify-center group-hover:bg-white/5 group-hover:backdrop-blur-[1px]'
          }
        >
          <Button
            variant={'default'}
            size={'icon-xs'}
            className={'rounded-full opacity-0 group-hover:opacity-100'}
          >
            <ZoomInIcon className={''} />
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className={'overflow-y-scroll sm:max-w-4xl'}>
        <DialogHeader>
          <DialogTitle>title</DialogTitle>
        </DialogHeader>

        <ScrollArea className={'mx-auto h-[90vh] overflow-y-scroll'}>
          <div className={'mx-auto me-4'}>
            <div className={'group space-y-6 py-4'}>
              <div
                style={{
                  width: '210mm',
                  height: '297mm',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className={'border-2 border-accent bg-red-500/30'}
              >
                preview page 1 in dialog
              </div>
              <div
                style={{
                  width: '210mm',
                  height: '297mm',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className={'border-2 border-accent bg-red-500/30'}
              >
                preview page 2 in dialog
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
