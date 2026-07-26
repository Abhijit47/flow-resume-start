import { Button, buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Link, useLocation } from '@tanstack/react-router'

export function CommonSiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-(var(--header-height)) data-[orientation=vertical]:w-px"
        />
        <HeaderText />
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
            <span className="text-sm font-medium">Create New</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

function HeaderText() {
  const { pathname } = useLocation()

  switch (pathname) {
    case '/resumes':
      return (
        <div>
          <h1 className="text-2xl font-semibold">My Resumes</h1>
          <p className={'text-sm text-muted-foreground'}>
            Your first resume is free forever. Need more than one resume?{' '}
            <Link
              to="/plans"
              viewTransition
              className={buttonVariants({ variant: 'link' })}
            >
              Upgrade your plan
            </Link>
          </p>
        </div>
      )
    case '/cover-letters':
      return (
        <div>
          <h1 className="text-2xl font-semibold">Create a cover letter</h1>
          <p className={'text-sm text-muted-foreground'}>
            Your first cover letter – 100% free, forever, all features,
            unlimited downloads, yes really.
          </p>
        </div>
      )
    case '/job-tracker':
      return (
        <div>
          <h1 className="text-2xl font-semibold">Job Tracker</h1>
          <p className={'text-sm text-muted-foreground'}>
            Track all your job applications in one place. Available in Basic and
            Pro.{' '}
            <Link
              to="/plans"
              viewTransition
              className={buttonVariants({ variant: 'link' })}
            >
              Upgrade your plan
            </Link>
          </p>
        </div>
      )
    case '/plans':
      return (
        <div>
          <h1 className="text-2xl font-semibold">Plans & Pricing</h1>
          <p className={'text-sm text-muted-foreground'}></p>
        </div>
      )
    case '/student-benefits':
      return (
        <div>
          <h1 className="text-2xl font-semibold">Student Benefits Program</h1>
          <p></p>
        </div>
      )

    default:
      return null
  }
}
