import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { ScrollArea } from '#/components/ui/scroll-area'
import FeatureItems from '#/features/private/ai-features/feature-items'
import NewToolIdeaDialog from '#/features/private/ai-features/new-tool-idea-dialog'
import NewToolIdeaItem from '#/features/private/ai-features/new-tool-idea-item'
import UpgradeToProDialog from '#/features/private/ai-features/upgrade-to-pro-dialog'
import UpgradeToProItem from '#/features/private/ai-features/upgrade-to-pro-item'

export const Route = createFileRoute('/_resume/resume/ai-tools')({
  component: RouteComponent,
})

function RouteComponent() {
  const [isOpenPro, setIsOpenPro] = useState(false)
  const [isOpenNewIdea, setIsOpenNewIdea] = useState(false)

  function toggleProDialog() {
    setIsOpenPro((prev) => !prev)
  }

  function toggleNewIdeaDialog() {
    setIsOpenNewIdea((prev) => !prev)
  }

  return (
    <ScrollArea className={'h-dvh overflow-y-scroll w-full p-4'}>
      <Card className={'mb-20'}>
        <CardContent>
          <UpgradeToProItem onToggle={toggleProDialog} />
        </CardContent>

        <CardHeader>
          <CardTitle>
            <h3 className={'text-lg font-semibold'}>
              What would you like to do?
            </h3>
          </CardTitle>
        </CardHeader>

        <CardContent className={'space-y-4'}>
          <FeatureItems onToggle={toggleProDialog} />
        </CardContent>

        <CardContent>
          <NewToolIdeaItem onToggle={toggleNewIdeaDialog} />
        </CardContent>
      </Card>

      <UpgradeToProDialog isOpen={isOpenPro} onToggle={toggleProDialog} />
      <NewToolIdeaDialog
        isOpen={isOpenNewIdea}
        onToggle={toggleNewIdeaDialog}
      />
    </ScrollArea>
  )
}
