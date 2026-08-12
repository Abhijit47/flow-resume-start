// import { ClientOnly, createFileRoute } from '@tanstack/react-router'

// import { ResumeFormContextProvider } from '#/contexts/resume-form-context'
// import PreviewCanvas from '#/features/private/preview-canvas'
// import ResumeEditor from '#/features/private/resume-editor'

// export const Route = createFileRoute('/_private/resume/content')({
//   staticData: { showSidebar: false },
//   loader: async ({ context }) => {
//     return { user: context.user }
//   },
//   component: RouteComponent,
//   wrapInSuspense: true,
//   codeSplitGroupings: [['loader', 'component']],
// })

// function RouteComponent() {
//   const { user } = Route.useLoaderData()

//   return (
//     <div className="px-2 lg:px-4 py-2 md:py-4">
//       <div className={'grid grid-cols-12 gap-2'}>
//         <ClientOnly fallback={<div>Loading...</div>}>
//           <ResumeFormContextProvider user={user}>
//             <ResumeEditor />

//             <PreviewCanvas />
//           </ResumeFormContextProvider>
//         </ClientOnly>
//       </div>
//     </div>
//   )
// }
