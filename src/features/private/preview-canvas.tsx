import { Button } from '#/components/ui/button'
import { Card, CardContent } from '#/components/ui/card'
import { createResumePDF } from '#/lib/download-resume.functions'
import type { PersonalDetailsFormData } from '#/lib/validators/personal-info-schema'
import { useMutation } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'
import { useServerFn } from '@tanstack/react-start'
import { useFormContext, useWatch } from 'react-hook-form'
import { toast } from 'sonner'
import { ResumeTemplate } from './resume-template'

export default function PreviewCanvas() {
  const form = useFormContext<PersonalDetailsFormData>()

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
    <Card className={'col-span-full lg:col-span-7'}>
      <CardContent>
        <ResumeTemplate data={watchedValues} />

        <Button className="mt-4" onClick={handleDownload}>
          Download
        </Button>
        <Button className="mt-4" asChild>
          <Link to="/print" viewTransition>
            Goto
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
