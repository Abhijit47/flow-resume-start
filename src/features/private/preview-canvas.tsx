import { Card, CardContent } from '#/components/ui/card'
import type { PersonalDetailsFormData } from '#/contexts/resume-form-context'
import { useFormContext, useWatch } from 'react-hook-form'

export default function PreviewCanvas() {
  const form = useFormContext<PersonalDetailsFormData>()

  const watchedValues = useWatch({
    control: form.control,
  })

  return (
    <Card className={'col-span-full lg:col-span-7'}>
      <CardContent>
        <pre>{JSON.stringify(watchedValues, null, 2)}</pre>
      </CardContent>
    </Card>
  )
}
