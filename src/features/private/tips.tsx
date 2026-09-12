import { IconBulb } from '@tabler/icons-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '#/components/ui/accordion'
import { ScrollArea } from '#/components/ui/scroll-area'
import { Separator } from '#/components/ui/separator'
import { tipsActionWords, tipsContents, tipsReferences } from '#/constants/tips'
import { useResumeFormContext } from '#/contexts/resume-form-context'
import { capitalizeString } from '#/lib/utils'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useLocation, useNavigate } from '@tanstack/react-router'

export default function ResumeTips() {
  return <TipsDialog />
}

function TipsDialog() {
  const navigate = useNavigate()

  const hiddenHash = useLocation({
    select: (loc) => loc.hash,
  })

  const { isTipsDialogOpen, toggleTipsDialog } = useResumeFormContext()

  return (
    <Dialog open={isTipsDialogOpen} onOpenChange={toggleTipsDialog}>
      <DialogContent className="sm:top-auto sm:right-0 sm:bottom-0 sm:left-auto sm:m-6 sm:max-w-lg sm:translate-x-0 sm:translate-y-0">
        <DialogHeader>
          <DialogTitle className={'flex items-center gap-2'}>
            <IconBulb />
            Tips
          </DialogTitle>
          <DialogDescription>
            Here are some tips to help you get started with your resume editing.
          </DialogDescription>
        </DialogHeader>

        <Separator />

        <ScrollArea className="max-h-[65vh] w-full pr-4">
          <div className="grid gap-4">
            <Accordion
              type="single"
              collapsible
              className='w-full border-0 [&>*>[data-slot="accordion-content"]]:px-0'
              value={hiddenHash}
              onValueChange={(val) => {
                if (val) {
                  navigate({
                    to: '/resume/content',
                    hash: `#${val}`,
                    mask: { to: '/resume/content' },
                    hashScrollIntoView: true,
                  })
                }
              }}
            >
              <AccordionItem
                id="action-words"
                value={'action-words'}
                className="bg-transparent data-open:border-primary not-last:data-open:border-b-2 dark:data-open:border-primary-foreground"
              >
                <AccordionTrigger className="px-0 in-data-open:text-primary in-data-open:**:data-[slot=accordion-trigger-icon]:text-primary dark:in-data-open:text-primary dark:in-data-open:**:data-[slot=accordion-trigger-icon]:text-foreground">
                  {tipsActionWords[0].title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground h-fit space-y-2">
                  <p>{tipsActionWords[0].description}</p>

                  <ul className={'space-y-2 list-["👉"] list-inside'}>
                    {tipsActionWords.slice(1).map((item) => (
                      <li key={item.id} className="">
                        {' '}
                        <strong className={'underline'}>{item.title}</strong>
                        <p>{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {Object.entries(tipsContents).map(([key, item], index) => (
                <AccordionItem
                  key={index}
                  id={key}
                  value={key}
                  className="bg-transparent data-open:border-primary not-last:data-open:border-b-2 dark:data-open:border-primary-foreground"
                >
                  <AccordionTrigger className="px-0 in-data-open:text-primary in-data-open:**:data-[slot=accordion-trigger-icon]:text-primary dark:in-data-open:text-primary dark:in-data-open:**:data-[slot=accordion-trigger-icon]:text-foreground">
                    {capitalizeString(key.toString().replace(/-/g, ' '))}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground h-fit">
                    <ul className={'space-y-2 list-["👉"] list-inside'}>
                      {item.map((tip, tipIndex) => (
                        <li key={tipIndex} className="">
                          {' '}
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}

              <AccordionItem
                id={`references`}
                value={`references`}
                className="bg-transparent data-open:border-primary not-last:data-open:border-b-2 dark:data-open:border-primary-foreground"
              >
                <AccordionTrigger className="px-0 in-data-open:text-primary in-data-open:**:data-[slot=accordion-trigger-icon]:text-primary dark:in-data-open:text-primary dark:in-data-open:**:data-[slot=accordion-trigger-icon]:text-foreground">
                  References
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground h-fit">
                  <ul className={'space-y-2 list-["👉"] list-inside'}>
                    {tipsReferences.map((item) => (
                      <li key={item.id}>
                        {' '}
                        {item.title}
                        {item.items.length ? (
                          <ul className={'pl-4'}>
                            {item.items.map((subItem, subIndex) => (
                              <li
                                key={subIndex}
                                className="list-['-'] list-inside"
                              >
                                {' '}
                                {subItem}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
