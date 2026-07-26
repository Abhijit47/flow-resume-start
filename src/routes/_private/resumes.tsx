import { Button } from '#/components/ui/button'
import { Card, CardContent, CardDescription } from '#/components/ui/card'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { ChevronRightCircle, PlusCircleIcon } from 'lucide-react'

export const Route = createFileRoute('/_private/resumes')({
  staticData: { showSidebar: true },
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()

  return (
    <div className="px-4 lg:px-6 py-4 md:py-6">
      <Card>
        <CardContent className={'grid grid-cols-2 gap-4'}>
          <Card className={'min-h-72 flex items-center justify-center'}>
            <CardContent>
              <Button variant={'secondary'} size={'lg'}>
                <PlusCircleIcon className={'size-6'} />
                <CardDescription>New Resume</CardDescription>
              </Button>
            </CardContent>
          </Card>
          <Card className={'min-h-72 flex items-center justify-center'}>
            <CardContent>
              <Button
                variant={'secondary'}
                size={'lg'}
                onClick={() => {
                  navigate({
                    to: '/resume/content',
                    viewTransition: true,
                  })
                }}
              >
                <ChevronRightCircle className={'size-4'} />
                <CardDescription>View Resume</CardDescription>
              </Button>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}
