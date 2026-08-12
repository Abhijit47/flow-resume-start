import { Button } from '#/components/ui/button'
import { IconBulb, IconEye, IconTrash } from '@tabler/icons-react'

type FormLabelSettingsProps = {
  viewItemId?: string // TODO: Make this required later
  deleteItemId?: string // TODO: Make this required later
}

export default function FormItemSettings(props: FormLabelSettingsProps) {
  return (
    <div className={'flex gap-2 items-center'}>
      <Button type="button">
        <IconBulb />
        Get Tips
      </Button>
      <Button type="button" size={'icon-sm'} variant={'outline'}>
        <IconEye className={'size-4'} />
      </Button>
      <Button type="button" size={'icon-sm'} variant={'outline'}>
        <IconTrash className={'size-4'} />
      </Button>
    </div>
  )
}
