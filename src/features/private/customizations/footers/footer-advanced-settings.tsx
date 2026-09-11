import { ChevronDownCircleIcon, ChevronUpCircleIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '#/components/ui/button'
import { CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Checkbox } from '#/components/ui/checkbox'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '#/components/ui/collapsible'
import { Field, FieldLabel } from '#/components/ui/field'
import { Textarea } from '#/components/ui/textarea'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'
const animationClass =
  'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

/*
{"customizationUpdates":[{"value":{"pages":false,"name":false,"email":false,"custom":{"enabled":true,"col1":"{{name}}{{phone}}{{email}}{{page}} / {{pages}}","col2":"","col3":""}},"path":"expert.footer"}]}

{"customizationUpdates":[{"value":{"pages":false,"name":false,"email":false,"custom":{"enabled":false,"col1":"{{name}}{{phone}}{{email}}{{page}} / {{pages}}","col2":"","col3":""}},"path":"expert.footer"}]}

{"customizationUpdates":[{"value":"{{name}}{{phone}}{{email}}{{page}} / {{pages}}{{name}}","path":"expert.footer.custom.col1"}]}
{"customizationUpdates":[{"value":"{{name}}{{phone}}{{email}}{{page}} / {{pages}}{{name}}{{phone}}","path":"expert.footer.custom.col1"}]}
{"customizationUpdates":[{"value":"{{name}}{{phone}}{{email}}{{page}} / {{pages}}{{name}}{{phone}}{{email}}","path":"expert.footer.custom.col1"}]}
{"customizationUpdates":[{"value":"{{name}}{{phone}}{{email}}{{page}} / {{pages}}{{name}}{{phone}}{{email}}{{page}} / {{pages}}","path":"expert.footer.custom.col1"}]}
*/

export default function FooterAdvancedSettings() {
  const [isShowingAdvancedSettings, setIsShowingAdvancedSettings] =
    useState(false)

  const [insertPlaceholder, setInsertPlaceholder] = useState('')

  const [insertPlaceholders, setInsertPlaceholders] = useState({
    leftCol: '',
    centerCol: '',
    rightCol: '',
  })

  const {
    customization: { expert },
    updateExpert,
  } = useCustomizationStore()

  const isShowCustomFooter = expert.footer.custom.enabled

  function handleLeftColUpdate(val: string) {
    updateExpert({
      ...expert,
      footer: {
        ...expert.footer,
        custom: {
          ...expert.footer.custom,
          col1: val,
        },
      },
    })
  }

  function handleCenterColUpdate(val: string) {
    updateExpert({
      ...expert,
      footer: {
        ...expert.footer,
        custom: {
          ...expert.footer.custom,
          col2: val,
        },
      },
    })
  }

  function handleRightColUpdate(val: string) {
    updateExpert({
      ...expert,
      footer: {
        ...expert.footer,
        custom: {
          ...expert.footer.custom,
          col3: val,
        },
      },
    })
  }

  function handleInsertPlaceholder(placeholder: string) {
    if (placeholder === '{{ name }}') {
      setInsertPlaceholders({
        ...insertPlaceholders,
        leftCol: placeholder,
      })
      handleLeftColUpdate(placeholder)
    }
    if (placeholder === '{{ page }} / {{ pages }}') {
      setInsertPlaceholders({
        ...insertPlaceholders,
        centerCol: placeholder,
      })
      handleCenterColUpdate(placeholder)
    }
    if (placeholder === '{{ phone }}') {
      setInsertPlaceholders({
        ...insertPlaceholders,
        rightCol: placeholder,
      })
      handleRightColUpdate(placeholder)
    }
  }

  return (
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
        <Field orientation="horizontal">
          <Checkbox
            id="customFooter"
            name="customFooter"
            checked={expert.footer.custom.enabled}
            onCheckedChange={(checked) => {
              updateExpert({
                ...expert,
                footer: {
                  ...expert.footer,
                  custom: {
                    ...expert.footer.custom,
                    enabled: checked as boolean,
                    col1: '{{name}}{{phone}}{{email}}{{page}} / {{pages}}',
                    col2: '',
                    col3: '',
                  },
                },
              })
            }}
          />
          <FieldLabel htmlFor="customFooter">Custom footer</FieldLabel>
        </Field>

        {isShowCustomFooter ? (
          <div className={cn('space-y-4', animationClass)}>
            <CardContent className={'space-y-4'}>
              <CardHeader>
                <CardTitle>Insert placeholders</CardTitle>
              </CardHeader>

              <ToggleGroup
                type="single"
                className={'max-w-sm gap-4 flex-wrap'}
                value={insertPlaceholder}
                onValueChange={(value) => {
                  if (!value) return
                  setInsertPlaceholder(value)
                  handleInsertPlaceholder(value)
                }}
                size={'lg'}
              >
                <ToggleGroupItem
                  value="{{ name }}"
                  className={cn('group', toggleState)}
                >
                  Name {`{{ name }}`}
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="{{ phone }}"
                  className={cn('group', toggleState)}
                >
                  Phone {`{{ phone }}`}
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="{{ email }}"
                  className={cn('group', toggleState)}
                >
                  Email {`{{ email }}`}
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="{{ page }} / {{ pages }}"
                  className={cn('group', toggleState)}
                >
                  Page Numbers {`{{ page }} / {{ pages }}`}
                </ToggleGroupItem>
              </ToggleGroup>
            </CardContent>
            <Field>
              <FieldLabel htmlFor="leftColumn">Left Column</FieldLabel>
              <Textarea
                id="leftColumn"
                placeholder="e.g. {{ name }}"
                value={expert.footer.custom.col1}
                onChange={(e) => handleLeftColUpdate(e.target.value)}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="centerColumn">Center Column</FieldLabel>
              <Textarea
                id="centerColumn"
                placeholder="e.g. {{ page }} / {{ pages }}"
                value={expert.footer.custom.col2}
                onChange={(e) => handleCenterColUpdate(e.target.value)}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="rightColumn">Right Column</FieldLabel>
              <Textarea
                id="rightColumn"
                placeholder="e.g. {{ phone }}"
                value={expert.footer.custom.col3}
                onChange={(e) => handleRightColUpdate(e.target.value)}
              />
            </Field>
          </div>
        ) : null}
      </CollapsibleContent>
    </Collapsible>
  )
}
