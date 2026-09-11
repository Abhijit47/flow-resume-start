import { Scrollspy } from '#/components/extends/scrollspy'
import { Button } from '#/components/ui/button'
import { Card, CardContent } from '#/components/ui/card'
import { ScrollArea } from '#/components/ui/scroll-area'
import { templateStatic } from '#/constants/customization/template-previews'
import FeatureFeedbackDialog from '#/features/private/customizations/feature-feedback-dialog'
import { scrollSpyNavbar } from '#/features/private/customizations/scroll-spy-navbar'
import ShareableLinkDialog from '#/features/private/customizations/shareable-link-dialog'
import { useCustomizationStore } from '#/store/customization-store'
import { createFileRoute, stripSearchParams } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'
import z from 'zod'

const defaultValues = {
  // one: 'all',
  // two: 'xyz',
  templateFilter: 'all',
} as const

export type TemplateFilterUnion =
  'all' | 'popular' | 'simple' | 'modern' | 'creative'

const customizationParams = z.object({
  modal: z.enum(['resume-templates']).optional(),
  templateFilter: z
    .enum(['all', 'popular', 'simple', 'modern', 'creative'])
    .default(defaultValues.templateFilter),
  template: z.string().optional(),
})

export const Route = createFileRoute('/_resume/resume/customization')({
  component: RouteComponent,
  validateSearch: customizationParams,
  search: {
    // strip default values
    middlewares: [stripSearchParams(defaultValues)],
  },
  loaderDeps: ({ search: { templateFilter, template } }) => ({
    templateFilter,
    template,
  }),
  loader: ({ deps: { templateFilter, template } }) => {
    // filter the templateStatic array by the templateFilter value
    const filteredItems = templateStatic.filter((t) =>
      t.tags.includes(templateFilter),
    )

    // search the template by its name in the filteredTemplatesByTags array
    const templateData = !template
      ? null
      : (filteredItems.find(
          (t) => t.name.toLowerCase() === template.toLowerCase(),
        ) ?? null)

    // take only popular items
    const popularTemplates = templateStatic.filter((t) =>
      t.tags.includes('popular'),
    )

    return {
      filteredItems,
      templateFilter,
      template,
      templateData,
      popularTemplates,
    }
  },
  wrapInSuspense: true,
  codeSplitGroupings: [['loader', 'component']],
})

function RouteComponent() {
  const parentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    useCustomizationStore.persist.rehydrate()
  }, [])

  return (
    <div className="flex gap-5 w-full grow">
      <div className="flex flex-col gap-2 w-37.5">
        <Scrollspy
          offset={50}
          targetRef={parentRef}
          className="flex flex-col gap-2.5 mt-8"
        >
          {scrollSpyNavbar.map((item) => (
            <Button
              key={item.id}
              variant="outline"
              data-scrollspy-anchor={item.id}
              className={
                'data-[active=true]:bg-primary data-[active=true]:text-muted-foreground'
              }
            >
              {item.label}
            </Button>
          ))}
        </Scrollspy>
      </div>
      <div className="grow" ref={parentRef}>
        <ScrollArea className="space-y-6 pe-4 w-full h-dvh">
          <div className="space-y-8 w-full">
            {scrollSpyNavbar.map((item) => (
              <div key={item.id} id={item.id} className="space-y-2.5">
                <div className="w-full h-full">
                  <item.comp />
                </div>
              </div>
            ))}
          </div>
          <Card className={'mb-28'}>
            <CardContent className={'space-y-2'}>
              <h4 className={'text-lg font-medium text-muted-foreground'}>
                Want to share your design?
              </h4>
              <ShareableLinkDialog />
            </CardContent>
            <CardContent className={'space-y-2'}>
              <h4 className={'text-lg font-medium text-muted-foreground'}>
                Do you have any feedback?
              </h4>
              <FeatureFeedbackDialog />
            </CardContent>
          </Card>
        </ScrollArea>
      </div>
    </div>
  )
}
