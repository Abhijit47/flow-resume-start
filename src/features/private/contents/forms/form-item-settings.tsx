import { Button } from '#/components/ui/button'
import type { TipType } from '#/constants/tips'
import { useResumeFormContext } from '#/contexts/resume-form-context'
import { IconBulb, IconEye, IconTrash } from '@tabler/icons-react'
import { useNavigate } from '@tanstack/react-router'

type FormLabelSettingsProps = {
  viewItemId?: string // TODO: Make this required later
  deleteItemId?: string // TODO: Make this required later
  tipItemName: TipType
}

export default function FormItemSettings(props: FormLabelSettingsProps) {
  const { toggleTipsDialog } = useResumeFormContext()

  const navigate = useNavigate()

  return (
    <div className={'flex gap-2 items-center'}>
      <Button
        type="button"
        size={'sm'}
        variant={'outline'}
        onClick={() => {
          navigate({
            to: '/resume/content',
            hash: `#${props.tipItemName}`,
            mask: { to: '/resume/content' },
            hashScrollIntoView: true,
          })
          toggleTipsDialog()
        }}
      >
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
