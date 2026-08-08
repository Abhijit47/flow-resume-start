import { Button } from '#/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import { DBConfig } from '#/constants/indexDB-config'
import AddContentDialog from '#/features/private/add-content-dialog'
import { updateIsEnabledFirstForm } from '#/store/resume-store'
import {
  IconCamera,
  IconEditCircle,
  IconMail,
  IconMap2,
  IconPhoneCall,
} from '@tabler/icons-react'
import { useEffect } from 'react'
import { initDB } from 'react-indexed-db-hook'

export default function InitialCard() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      initDB(DBConfig)
    }
  }, [])

  return (
    <Card className={'col-span-full lg:col-span-5'}>
      <CardHeader>
        <CardTitle className={'text-xl font-semibold opacity-50'}>
          Your name
        </CardTitle>
        <CardAction>
          <Button
            className={'rounded-full'}
            onClick={() => updateIsEnabledFirstForm(true)}
          >
            <IconEditCircle className={'size-4'} />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className={'opacity-50'}>
        <div className={'flex items-center justify-between'}>
          <ul className={'flex flex-col gap-3'}>
            <li
              className={'inline-flex items-center gap-2 text-base font-medium'}
            >
              <IconMail className={'size-4'} /> Email
            </li>
            <li
              className={'inline-flex items-center gap-2 text-base font-medium'}
            >
              <IconPhoneCall className={'size-4'} /> Phone
            </li>
            <li
              className={'inline-flex items-center gap-2 text-base font-medium'}
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
  )
}
