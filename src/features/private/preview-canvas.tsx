import { useMutation } from '@tanstack/react-query'
import { useServerFn } from '@tanstack/react-start'
import { useFormContext, useWatch } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '#/components/ui/button'
import { Card, CardContent } from '#/components/ui/card'
import { createResumePDF } from '#/lib/download-resume.functions'
import type { ResumeFormValues } from '#/lib/validators/resume-schema'
import { ResumeTemplate } from './resume-template'

export default function PreviewCanvas() {
  const form = useFormContext<ResumeFormValues>()

  const watchedValues = useWatch({
    control: form.control,
  })

  const createResume = useServerFn(createResumePDF)

  const { mutateAsync } = useMutation({
    mutationFn: createResume,
    mutationKey: ['createResume'],
  })

  const handleDownload = async () => {
    toast.promise(mutateAsync({ data: watchedValues }), {
      loading: 'Creating resume PDF...',
      success: 'Resume PDF created successfully!',
      error: (err) => {
        return err.message || 'Error creating resume PDF.'
      },
    })
  }

  return (
    <Card className={'space-y-6 pb-36'}>
      <CardContent className={'mx-auto'}>
        <ResumeTemplate data={watchedValues} />

        <Button className="mt-4" onClick={handleDownload}>
          Download
        </Button>
      </CardContent>
    </Card>
  )
}
