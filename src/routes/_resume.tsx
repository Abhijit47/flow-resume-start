import { ResumeFormContextProvider } from '#/contexts/resume-form-context'
import EditorSiteHeader from '#/features/private/editor-site-header'
import PreviewCanvas from '#/features/private/preview-canvas'
import { getSession } from '#/lib/auth.functions'
import {
  ClientOnly,
  createFileRoute,
  Outlet,
  redirect,
} from '@tanstack/react-router'

export const Route = createFileRoute('/_resume')({
  staticData: { showNavbar: false },
  beforeLoad: async ({ location }) => {
    const session = await getSession()
    if (!session) {
      throw redirect({
        to: '/login',
        search: { redirect: location.href },
      })
    }
    return { user: session.user }
  },
  loader: ({ context }) => {
    return { user: context.user }
  },
  component: RouteComponent,
  notFoundComponent: NotFoundComponent,
  // pendingComponent: PendingComponent,
  // errorComponent: ErrorComponent,
  wrapInSuspense: true,
  codeSplitGroupings: [['loader', 'component', 'notFoundComponent']],
})

function RouteComponent() {
  const { user } = Route.useLoaderData()

  return (
    <>
      <EditorSiteHeader />
      <main className="px-2 lg:px-4 py-2 md:py-4 h-[calc(100dvh-4rem)] overflow-y-hidden">
        <div className={'grid grid-cols-12 gap-2'}>
          <ClientOnly fallback={<div>Loading...</div>}>
            <ResumeFormContextProvider user={user}>
              <section className={'col-span-full lg:col-span-5'}>
                <Outlet />
              </section>
              <section className={'col-span-full lg:col-span-7'}>
                <PreviewCanvas />
              </section>
            </ResumeFormContextProvider>
          </ClientOnly>
        </div>
      </main>
    </>
  )
}

// function PendingComponent() {
//   return (
//     <div className="px-2 lg:px-4 py-2 md:py-4">
//       <div className={'grid grid-cols-12 gap-2'}>
//         <div>Loading...</div>
//       </div>
//     </div>
//   )
// }

// function ErrorComponent({ error }: { error: Error }) {
//   return (
//     <div className="px-2 lg:px-4 py-2 md:py-4">
//       <div className={'grid grid-cols-12 gap-2'}>
//         <div>Error: {error.message}</div>
//       </div>
//     </div>
//   )
// }

function NotFoundComponent() {
  return (
    <div className="px-2 lg:px-4 py-2 md:py-4">
      <div className={'grid grid-cols-12 gap-2'}>
        <div>Not Found</div>
      </div>
    </div>
  )
}
