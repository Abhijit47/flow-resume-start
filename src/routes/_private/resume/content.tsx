import { Button } from '#/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import AddContentDialog from '#/features/private/add-content-dialog'
import {
  IconCamera,
  IconEditCircle,
  IconMail,
  IconMap2,
  IconPhoneCall,
} from '@tabler/icons-react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_private/resume/content')({
  staticData: { showSidebar: false },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="px-4 lg:px-6 py-4 md:py-6">
      <div className={'grid grid-cols-1 lg:grid-cols-2 gap-6'}>
        <Card>
          <CardHeader>
            <CardTitle className={'text-xl font-semibold opacity-50'}>
              Your name
            </CardTitle>
            <CardAction>
              <Button className={'rounded-full'}>
                <IconEditCircle className={'size-4'} />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent className={'opacity-50'}>
            <div className={'flex items-center justify-between'}>
              <ul className={'flex flex-col gap-3'}>
                <li
                  className={
                    'inline-flex items-center gap-2 text-base font-medium'
                  }
                >
                  <IconMail className={'size-4'} /> Email
                </li>
                <li
                  className={
                    'inline-flex items-center gap-2 text-base font-medium'
                  }
                >
                  <IconPhoneCall className={'size-4'} /> Phone
                </li>
                <li
                  className={
                    'inline-flex items-center gap-2 text-base font-medium'
                  }
                >
                  <IconMap2 className={'size-4'} /> Address
                </li>
              </ul>

              <span className={'bg-accent rounded-full p-1.5'}>
                <IconCamera className={'size-20 stroke-1'} />
              </span>
            </div>
          </CardContent>
          <CardFooter className={'justify-center'}>
            <AddContentDialog />
          </CardFooter>
        </Card>
        <Card>
          <CardContent>CANVAS</CardContent>
        </Card>
      </div>
    </div>
  )
}
