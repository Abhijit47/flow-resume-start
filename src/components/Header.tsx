import { Link, linkOptions, useLocation } from '@tanstack/react-router'
// import TanChatAIAssistant from './demo-AIAssistant.tsx'
import { signOut, useSession } from '#/lib/auth-client.ts'
import { useState } from 'react'
import { toast } from 'sonner'
import ParaglideLocaleSwitcher from './LocaleSwitcher.tsx'
import { ModeToggle } from './mode-toggle.tsx'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar.tsx'
import { Badge } from './ui/badge.tsx'
import { Button, buttonVariants } from './ui/button.tsx'
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from './ui/popover.tsx'
import { Separator } from './ui/separator.tsx'
import { Spinner } from './ui/spinner.tsx'

const publicLinkOptions = linkOptions([
  {
    to: '/',
    label: 'Home',
    search: { search: '' },
  },
  {
    to: '/about',
    label: 'About',
    search: { search: '' },
  },
  {
    to: '/pricing',
    label: 'Pricing',
    search: { search: '' },
  },
  {
    to: '/resume-templates',
    label: 'Resume Templates',
    search: { search: '' },
  },
])

const privateLinkOptions = linkOptions([
  {
    to: '/resumes',
    label: 'Resumes',
    search: { search: '' },
  },
  {
    to: '/cover-letters',
    label: 'Cover Letters',
    search: { search: '' },
  },
  {
    to: '/job-tracker',
    label: 'Job Tracker',
    search: { search: '' },
  },
  {
    to: '/plans',
    label: 'Cover Letters',
    search: { search: '' },
  },
  {
    to: '/student-benefits',
    label: 'Student Benefits',
    search: { search: '' },
  },
])

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { data, isRefetching, isPending } = useSession()

  const { pathname } = useLocation()

  function handleLogout() {
    toast.promise(signOut(), {
      loading: 'Logging out...',
      success: 'Logged out successfully!',
      error: 'Error logging out. Please try again.',
    })
  }

  return (
    // <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] px-4 backdrop-blur-lg">
    //   <nav className="page-wrap flex flex-wrap items-center gap-x-3 gap-y-2 py-3 sm:py-4">
    //     <h2 className="m-0 flex-shrink-0 text-base font-semibold tracking-tight">
    //       <Link
    //         to="/"
    //         className="inline-flex items-center gap-2 rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-1.5 text-sm text-[var(--sea-ink)] no-underline shadow-[0_8px_24px_rgba(30,90,72,0.08)] sm:px-4 sm:py-2"
    //       >
    //         <span className="h-2 w-2 rounded-full bg-[linear-gradient(90deg,#56c6be,#7ed3bf)]" />
    //         TanStack Start
    //       </Link>
    //     </h2>

    //     <div className="order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-1 pb-1 text-sm font-semibold sm:order-none sm:w-auto sm:flex-nowrap sm:pb-0">
    //       <Link
    //         to="/"
    //         className="nav-link"
    //         activeProps={{ className: 'nav-link is-active' }}
    //       >
    //         Home
    //       </Link>
    //       <Link
    //         to="/about"
    //         className="nav-link"
    //         activeProps={{ className: 'nav-link is-active' }}
    //       >
    //         About
    //       </Link>
    //       <a
    //         href="https://tanstack.com/start/latest/docs/framework/react/overview"
    //         className="nav-link"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         Docs
    //       </a>
    //       <details className="relative w-full sm:w-auto">
    //         <summary className="nav-link list-none cursor-pointer">
    //           Demos
    //         </summary>
    //         <div className="mt-2 min-w-56 rounded-xl border border-[var(--line)] bg-[var(--header-bg)] p-2 shadow-lg sm:absolute sm:right-0">
    //           <a
    //             href="/demo/prisma"
    //             className="block rounded-lg px-3 py-2 text-sm text-[var(--sea-ink-soft)] no-underline transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
    //           >
    //             Prisma
    //           </a>
    //           <a
    //             href="/demo/ai-chat"
    //             className="block rounded-lg px-3 py-2 text-sm text-[var(--sea-ink-soft)] no-underline transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
    //           >
    //             Chat
    //           </a>
    //           <a
    //             href="/demo/ai-image"
    //             className="block rounded-lg px-3 py-2 text-sm text-[var(--sea-ink-soft)] no-underline transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
    //           >
    //             Generate Image
    //           </a>
    //           <a
    //             href="/demo/ai-structured"
    //             className="block rounded-lg px-3 py-2 text-sm text-[var(--sea-ink-soft)] no-underline transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
    //           >
    //             Structured Output
    //           </a>
    //           <a
    //             href="/demo/form/simple"
    //             className="block rounded-lg px-3 py-2 text-sm text-[var(--sea-ink-soft)] no-underline transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
    //           >
    //             Simple Form
    //           </a>
    //           <a
    //             href="/demo/form/address"
    //             className="block rounded-lg px-3 py-2 text-sm text-[var(--sea-ink-soft)] no-underline transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
    //           >
    //             Address Form
    //           </a>
    //           <a
    //             href="/demo/i18n"
    //             className="block rounded-lg px-3 py-2 text-sm text-[var(--sea-ink-soft)] no-underline transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
    //           >
    //             I18n example
    //           </a>
    //           <a
    //             href="/demo/table"
    //             className="block rounded-lg px-3 py-2 text-sm text-[var(--sea-ink-soft)] no-underline transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
    //           >
    //             TanStack Table
    //           </a>
    //           <a
    //             href="/demo/trpc-todo"
    //             className="block rounded-lg px-3 py-2 text-sm text-[var(--sea-ink-soft)] no-underline transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
    //           >
    //             tRPC Todo
    //           </a>
    //           <a
    //             href="/demo/better-auth"
    //             className="block rounded-lg px-3 py-2 text-sm text-[var(--sea-ink-soft)] no-underline transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
    //           >
    //             Better Auth
    //           </a>
    //           <a
    //             href="/demo/store"
    //             className="block rounded-lg px-3 py-2 text-sm text-[var(--sea-ink-soft)] no-underline transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
    //           >
    //             Store
    //           </a>
    //           <a
    //             href="/demo/tanstack-query"
    //             className="block rounded-lg px-3 py-2 text-sm text-[var(--sea-ink-soft)] no-underline transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
    //           >
    //             TanStack Query
    //           </a>
    //           <a
    //             href="/demo/posthog"
    //             className="block rounded-lg px-3 py-2 text-sm text-[var(--sea-ink-soft)] no-underline transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
    //           >
    //             PostHog
    //           </a>
    //         </div>
    //       </details>
    //     </div>

    //     <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
    //       <TanChatAIAssistant />
    //       <ParaglideLocaleSwitcher />

    //       <Link to="/login" viewTransition>
    //         Login
    //       </Link>
    //       <Link to="/register" viewTransition>
    //         SignUp
    //       </Link>

    //       <ModeToggle />
    //     </div>
    //   </nav>
    // </header>

    <header className="sticky top-0 z-50 border-b px-4 backdrop-blur-lg flex items-center justify-between gap-4 py-4">
      <div>RESUME</div>
      <nav className="flex items-center gap-4">
        {publicLinkOptions.map((link) => (
          <Link key={link.to} to={link.to} search={link.search} viewTransition>
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
        <ParaglideLocaleSwitcher />

        {isPending || isRefetching ? (
          <Spinner className={'size-4'} />
        ) : !data ? (
          <>
            <Link to="/login" viewTransition>
              Login
            </Link>

            <Link to="/register" viewTransition>
              SignUp
            </Link>
          </>
        ) : (
          <Popover open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <PopoverTrigger asChild>
              <Avatar>
                <AvatarImage
                  src={data.user.image || '/images/avatar-placeholder.png'}
                  alt={data.user.name || 'User Avatar'}
                  className="grayscale"
                />
                <AvatarFallback>{data.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent align="end" className={'w-48'}>
              <PopoverHeader>
                <div className={'flex items-center'}>
                  <PopoverTitle className={'line-clamp-1'}>
                    {data.user.name}
                  </PopoverTitle>
                  <Badge className={'ml-auto'}>Free</Badge>
                </div>
                <PopoverDescription>{data.user.email}</PopoverDescription>
              </PopoverHeader>
              <Separator />
              <div className={'space-y-1'}>
                {privateLinkOptions.map((link) => (
                  <Link
                    to={link.to}
                    key={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={buttonVariants({
                      variant: pathname === link.to ? 'default' : 'outline',
                      size: 'sm',
                      className: 'w-full justify-start',
                    })}
                    viewTransition
                  >
                    {link.label}
                  </Link>
                ))}
                <Separator />
                <Button
                  variant={'destructive'}
                  size={'sm'}
                  className={'w-full justify-start'}
                  onClick={handleLogout}
                  type="button"
                >
                  Logout
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        )}

        <ModeToggle />
      </div>
    </header>
  )
}
