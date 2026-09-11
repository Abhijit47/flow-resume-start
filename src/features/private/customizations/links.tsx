import { ChevronDownCircleIcon, ChevronUpCircleIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '#/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Checkbox } from '#/components/ui/checkbox'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '#/components/ui/collapsible'
import { Field, FieldGroup, FieldLabel } from '#/components/ui/field'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'

/*
link styling
{"customizationUpdates":[{"value":true,"path":"advanced.underlineLinks"}]}

{"customizationUpdates":[{"value":true,"path":"advanced.makeLinksBlue"}]}

{"customizationUpdates":[{"value":"none","path":"advanced.linkIcon"}]}
{"customizationUpdates":[{"value":"diagonalChain","path":"advanced.linkIcon"}]}

{"customizationUpdates":[{"value":{"phone":false,"displayEmail":true},"path":"advanced.applyLinkStylingToHeaderLinks"}]}

{"customizationUpdates":[{"value":{"phone":true,"displayEmail":true},"path":"advanced.applyLinkStylingToHeaderLinks"}]}
*/

const animationClass =
  'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

export default function LinksConfig() {
  const [isShowingAdvancedSettings, setIsShowingAdvancedSettings] =
    useState(false)

  const {
    customization: { advanced },
    updateAdvanced,
  } = useCustomizationStore()

  const isLinkIconVisible = advanced.linkIcon !== 'none'

  return (
    <Card>
      <CardHeader>
        <CardTitle>Link Styling</CardTitle>
      </CardHeader>

      <CardContent>
        <FieldGroup className="">
          <Field orientation="horizontal">
            <Checkbox
              id="underlineLinks"
              name="underlineLinks"
              checked={advanced.underlineLinks}
              onCheckedChange={(checked) => {
                const isChecked = checked as boolean
                updateAdvanced({
                  ...advanced,
                  underlineLinks: !!isChecked,
                })
              }}
            />
            <FieldLabel htmlFor="underlineLinks">Underline</FieldLabel>
          </Field>

          <Field orientation="horizontal">
            <Checkbox
              id="makeLinksBlue"
              name="makeLinksBlue"
              checked={advanced.makeLinksBlue}
              onCheckedChange={(checked) => {
                const isChecked = checked as boolean
                updateAdvanced({
                  ...advanced,
                  makeLinksBlue: !!isChecked,
                })
              }}
            />
            <FieldLabel htmlFor="makeLinksBlue">Blue color</FieldLabel>
          </Field>

          <Field orientation="horizontal">
            <Checkbox
              id="linkIcon"
              name="linkIcon"
              checked={isLinkIconVisible}
              onCheckedChange={(checked) => {
                const isChecked = checked as boolean
                updateAdvanced({
                  ...advanced,
                  linkIcon: isChecked ? 'diagonalChain' : 'none',
                })
              }}
            />
            <FieldLabel htmlFor="linkIcon">Link icon</FieldLabel>
          </Field>
        </FieldGroup>
      </CardContent>

      <Collapsible
        className={'px-2'}
        open={isShowingAdvancedSettings}
        onOpenChange={setIsShowingAdvancedSettings}
      >
        <CollapsibleTrigger asChild>
          <Button
            size={'lg'}
            variant={'outline'}
            className={'w-full justify-between'}
          >
            Advanced Settings{' '}
            {isShowingAdvancedSettings ? (
              <ChevronUpCircleIcon
                className={'size-4 transition-transform duration-300'}
              />
            ) : (
              <ChevronDownCircleIcon
                className={'size-4 transition-transform duration-300'}
              />
            )}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent
          className={cn('space-y-4 p-2 border-l-2', animationClass)}
        >
          <CardHeader>
            <CardTitle>Apply underline and blue color to header</CardTitle>
          </CardHeader>

          <FieldGroup className="">
            <Field orientation="horizontal">
              <Checkbox
                id="displayEmail"
                name="displayEmail"
                checked={advanced.applyLinkStylingToHeaderLinks.displayEmail}
                onCheckedChange={(checked) => {
                  const isChecked = checked as boolean
                  updateAdvanced({
                    ...advanced,
                    applyLinkStylingToHeaderLinks: {
                      ...advanced.applyLinkStylingToHeaderLinks,
                      displayEmail: isChecked,
                    },
                  })
                }}
              />
              <FieldLabel htmlFor="displayEmail">Email</FieldLabel>
            </Field>

            <Field orientation="horizontal">
              <Checkbox
                id="displayPhone"
                name="displayPhone"
                checked={advanced.applyLinkStylingToHeaderLinks.phone}
                onCheckedChange={(checked) => {
                  const isChecked = checked as boolean
                  updateAdvanced({
                    ...advanced,
                    applyLinkStylingToHeaderLinks: {
                      ...advanced.applyLinkStylingToHeaderLinks,
                      phone: isChecked,
                    },
                  })
                }}
              />
              <FieldLabel htmlFor="displayPhone">Phone</FieldLabel>
            </Field>
          </FieldGroup>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
}
