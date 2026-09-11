import {
  IconBinoculars,
  IconBox,
  IconBriefcase,
  IconStar,
} from '@tabler/icons-react'
import { getRouteApi } from '@tanstack/react-router'
import { useState } from 'react'
import { toast } from 'sonner'

import { Button } from '#/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import type { TemplateFilterUnion } from '#/routes/_resume/resume/customization'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const routeApi = getRouteApi('/_resume/resume/customization')

export default function Templates() {
  const { template, popularTemplates } = routeApi.useLoaderData()

  const [isTemplatesDialogOpen, setIsTemplatesDialogOpen] = useState(false)
  const [isTemplateDialogOpen, setIsTemplateDialogOpen] = useState(() => {
    return !!template
  })
  // const routeSearch = routeApi.useSearch()

  // https://app.flowcv.com/resume/customization?modal=resume-templates&templateFilter=creative&template=dark-leaves-multi-column-border-left#nav-document

  const navigate = routeApi.useNavigate()

  // navigate({
  //   search: (prev) => ({ page: prev.page + 1 }),
  // })

  // Or set directly
  // navigate({
  //   to: '/posts',
  //   search: { page: 2 },
  // })

  function toggleTemplateDialog() {
    if (!isTemplatesDialogOpen) {
      setIsTemplatesDialogOpen(true)
      navigate({
        search: (prev) => ({
          ...prev,
          modal: 'resume-templates',
        }),
        // hash={(prev) => prev}  // retain current hash
        hash(prev) {
          return prev ? prev : 'nav-document'
        },
      })
    } else {
      setIsTemplatesDialogOpen(false)
      // reset the search params to remove the modal and templateFilter
      navigate({
        search: (prev) => {
          // const { modal, templateFilter, ...rest } = prev
          // return rest
          return {
            ...prev,
            modal: undefined,
            templateFilter: undefined,
            template: undefined,
          }
        },
        hash(prev) {
          return prev ? prev : 'nav-document'
        },
      })
    }
  }

  function handleOpenNestedDialog(templateName: string) {
    navigate({
      search: (prev) => ({
        ...prev,
        template: templateName.toLowerCase(),
      }),
      hash(prev) {
        return prev ? prev : 'nav-document'
      },
    })
    setIsTemplateDialogOpen(true)
  }

  return (
    <Card className={'px-4'}>
      <CardHeader>
        <CardTitle>Design Templates</CardTitle>
        <CardDescription>
          Update your entire resume design with one click 🔄
        </CardDescription>
      </CardHeader>
      <CardContent
        className={
          'h-36 rounded-lg w-full flex items-center gap-1 overflow-hidden relative'
        }
      >
        {popularTemplates.length === 0 ? (
          <p>No popular templates found</p>
        ) : (
          <>
            {popularTemplates.map((item) => (
              <div key={item.id}>
                <div>
                  <img
                    src={item.preview}
                    alt={`Preview of ${item.name} template`}
                    className={'w-full h-full'}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </>
        )}

        <div
          className={
            'absolute px-4 top-0 left-0 w-full h-full flex items-center justify-center bg-accent/50 backdrop-blur-[1px]'
          }
        >
          <TemplatesDialog
            isOpen={isTemplatesDialogOpen}
            onOpenChange={toggleTemplateDialog}
            onOpenNestedDialog={handleOpenNestedDialog}
          />
        </div>
      </CardContent>
      <TemplateDetailsDialog
        isOpen={isTemplateDialogOpen}
        onOpenChange={(prev) => {
          setIsTemplateDialogOpen(prev)
          navigate({
            search: (prevVal) => ({
              ...prevVal,
              template: undefined,
            }),
            hash(prevVal) {
              return prevVal ? prevVal : 'nav-document'
            },
          })
        }}
      />
    </Card>
  )
}

type TemplatesDialogProps = {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  onOpenNestedDialog: (templateName: string) => void
}

function TemplatesDialog(props: TemplatesDialogProps) {
  const { isOpen, onOpenChange, onOpenNestedDialog } = props

  const { filteredItems, templateFilter } = routeApi.useLoaderData()

  const navigate = routeApi.useNavigate()

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button size={'lg'} type="button" variant={'secondary'}>
          <IconBinoculars />
          Browse Templates
        </Button>
      </DialogTrigger>
      <DialogContent className={'sm:max-w-7xl'}>
        <DialogHeader>
          <DialogTitle>Apply a design template</DialogTitle>
        </DialogHeader>

        <Tabs
          defaultValue={templateFilter}
          value={templateFilter}
          onValueChange={(value) => {
            navigate({
              search: (prev) => ({
                ...prev,
                templateFilter: value as TemplateFilterUnion,
                template: undefined, // reset template when changing filter
              }),
              hash(prev) {
                return prev ? prev : 'nav-document'
              },
            })
          }}
        >
          <TabsList className={'rounded-full'}>
            <TabsTrigger value="all" className={'rounded-full'}>
              All Templates
            </TabsTrigger>
            <TabsTrigger value="popular" className={'rounded-full'}>
              <IconStar />
              Popular
            </TabsTrigger>
            <TabsTrigger value="simple" className={'rounded-full'}>
              <IconBriefcase />
              Simple
            </TabsTrigger>
            <TabsTrigger value="modern" className={'rounded-full'}>
              <IconBox />
              Modern
            </TabsTrigger>
            <TabsTrigger value="creative" className={'rounded-full'}>
              <IconUnicorn />
              Creative
            </TabsTrigger>
          </TabsList>

          <TabsContent value={templateFilter}>
            <Card>
              <CardContent className="text-sm text-muted-foreground">
                {filteredItems.length === 0 ? (
                  <>No Items</>
                ) : (
                  <div className="-mx-4 no-scrollbar max-h-[70vh] overflow-y-auto px-4">
                    <div
                      className={
                        'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
                      }
                    >
                      {filteredItems.map((item) => (
                        <Card
                          key={item.id}
                          className="p-2 border rounded-lg mb-2"
                          onClick={() => onOpenNestedDialog(item.name)}
                        >
                          <CardContent>
                            <img
                              src={item.preview}
                              alt={`Preview of ${item.name} template`}
                              className={'rounded-lg w-full h-full'}
                              loading="lazy"
                            />
                          </CardContent>
                          <CardDescription>
                            <p className={'text-muted-foreground'}>
                              {item.name}
                            </p>
                          </CardDescription>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

type TemplateDetailsDialogProps = {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

function TemplateDetailsDialog(props: TemplateDetailsDialogProps) {
  const { isOpen, onOpenChange } = props

  const { template, templateData } = routeApi.useLoaderData()

  if (!template || !templateData) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className={'sm:max-w-7xl'}>
        <DialogHeader>
          <DialogTitle>{template}</DialogTitle>
        </DialogHeader>
        <div className="-mx-4 no-scrollbar max-h-[90vh] overflow-y-auto px-4">
          <div className={'grid grid-cols-1 lg:grid-cols-2 gap-4'}>
            <Card>
              <CardContent>
                <img
                  src={templateData.preview}
                  alt={`Preview of ${templateData.name} template`}
                  className={'rounded-lg w-full h-full'}
                  loading="lazy"
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{templateData.name}</CardTitle>
                <CardDescription>{templateData.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className={'list-disc list-inside'}>
                  {templateData.features.length ? (
                    templateData.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))
                  ) : (
                    <li>No features listed for this template.</li>
                  )}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  type="button"
                  size={'lg'}
                  onClick={() => {
                    toast.info(
                      'This feature is not implemented yet. Please check back later.',
                    )
                  }}
                >
                  Use this template
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function IconUnicorn() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 14 12"
      className="w-4.5 pb-0.5"
    >
      <path
        fill="currentColor"
        d="M9.666 2.667a.358.358 0 00-.333-.334.343.343 0 00-.333.334.33.33 0 00.333.333.343.343 0 00.333-.333zM13.48 2H11.29l-.312-.375a.98.98 0 00.667-.75.176.176 0 00-.167-.208H8.646c-1.417 0-2.605 1-2.917 2.333-.771-.02-1.542-.27-2.042-.854C3.604 2.063 3.5 2 3.396 2A.4.4 0 003 2.417c0 1.791 1.229 3.375 2.916 3.812a.342.342 0 00.417-.333v-.333c0-.146-.104-.292-.25-.313a2.919 2.919 0 01-1.792-1.542c.48.209 1.021.292 1.563.292h.792v-.333a2 2 0 012-2h1.083l.917 1.146.02 1.354c0 .104-.083.187-.166.229l-.646.208a.323.323 0 01-.354-.083L9 4h-.667v1.666c0 .562-.27 1.041-.667 1.333v3.333h-1v-3l-2.25-.625-.604 1.646.5 1.98h-.854L3 8.52c0-.063-.021-.104-.021-.167 0-.062.02-.125.042-.187l.458-1.584a1.357 1.357 0 01-.813-1.25c0-.291.105-.583.271-.812-.187-.292-.312-.625-.416-.958-.167.125-.334.27-.459.458A1.812 1.812 0 00.333 5.833V7a.33.33 0 00.333.333H1A.343.343 0 001.333 7V5.833c0-.27.125-.5.333-.645v.145c0 .646.23 1.23.667 1.646l-.27.917c-.042.146-.084.292-.084.458 0 .146.02.271.062.396l.5 2.083c.063.292.334.5.646.5H4.75c.416 0 .75-.395.646-.812l-.542-2.104.187-.5.625.187v2.563c0 .375.292.666.667.666H8a.671.671 0 00.666-.666v-3.23c.417-.479.667-1.104.667-1.77v-.104c.417.145.792.02.833 0l.646-.23c.5-.166.854-.645.854-1.166l-.02-1.084 1.937-.77c.146-.084.063-.313-.104-.313z"
      ></path>
    </svg>
  )
}
