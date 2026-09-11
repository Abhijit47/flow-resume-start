import { CheckIcon, ChevronsUpDown, InfoIcon } from 'lucide-react'
import { useState } from 'react'

import { Alert, AlertDescription, AlertTitle } from '#/components/ui/alert'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '#/components/ui/collapsible'
import { Field, FieldGroup, FieldLabel } from '#/components/ui/field'
import type {
  DocumentLanguageType,
  DocumentLocale,
} from '#/constants/customization/document-section'
import { documentLanguages } from '#/constants/customization/document-section'
import { getDateFormatByLocale } from '#/lib/date-utils'
import { useCustomizationStore } from '#/store/customization-store'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function Document() {
  const [selectedlanguage, setSelectedLanguage] =
    useState<DocumentLanguageType>({
      label: 'English (US)',
      value: 'english (us)',
      lng: 'en_US',
    })
  const [locale, setLocale] = useState<DocumentLocale>('en_US')
  const [isCustomDialogOpen, setIsCustomDialogOpen] = useState(false)

  const {
    customization: { pageFormat },
    updatePageFormat,
    // TODO: work in near future updateFullDateFormat,
    // TODO: work in near future updateMonthYearFormat,
  } = useCustomizationStore()

  const dateFormats = getDateFormatByLocale(locale)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Document Settings</CardTitle>
      </CardHeader>

      <CardContent className={'space-y-4'}>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="document-language" className="text-sm">
              Language
            </FieldLabel>
            <Select
              value={JSON.stringify(selectedlanguage)}
              onValueChange={(value) => {
                const selected = documentLanguages.find(
                  (lang) => JSON.stringify(lang) === value,
                )
                setSelectedLanguage(selected as DocumentLanguageType)
                setLocale((selected as DocumentLanguageType).lng)
              }}
            >
              <SelectTrigger className="w-full" id="document-language">
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectGroup>
                  <SelectLabel>Choose language</SelectLabel>
                  {documentLanguages.map((language) => (
                    <SelectItem
                      key={crypto.randomUUID()}
                      value={JSON.stringify(language)}
                    >
                      {language.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>

          {/* Alert for (arabic,hebrew) Right-to-left (RTL) layout is enabled because Arabic is selected. */}
          {locale === 'ar' || locale === 'he' ? (
            <Alert className="slide-out-to-top-8 slide-in-from-top-8 animate-in duration-300 fade-in">
              <InfoIcon />
              <AlertTitle>
                <strong>Right-to-left</strong>
              </AlertTitle>
              <AlertDescription>
                (RTL) layout is enabled because Arabic is selected.
              </AlertDescription>
            </Alert>
          ) : null}

          <Field>
            <FieldLabel htmlFor="date-format-select" className="text-sm">
              Date Format
            </FieldLabel>
            <Select>
              <SelectTrigger className="w-full" id="date-format-select">
                <SelectValue
                  className={'w-full! flex! items-center! justify-between!'}
                  placeholder="Select date format"
                />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectGroup>
                  <SelectLabel>Date Format</SelectLabel>
                  {dateFormats.map((item) => (
                    <SelectItem
                      key={crypto.randomUUID()}
                      value={item.label}
                      className={'justify-between'}
                    >
                      <span className="text-muted-foreground text-sm">
                        {item.label}
                      </span>
                      <span className="text-muted-foreground/80 text-xs">
                        {item.value}
                      </span>
                    </SelectItem>
                  ))}

                  <SelectItem
                    value="custom"
                    onClick={() => setIsCustomDialogOpen(true)}
                  >
                    <span className="text-muted-foreground text-sm">
                      Custom
                    </span>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <CustomDateFormatDialog
              isOpen={isCustomDialogOpen}
              onOpenChange={setIsCustomDialogOpen}
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="page-format-select" className="text-sm">
              Page Format
            </FieldLabel>
            <Select
              value={pageFormat}
              onValueChange={(val) => {
                updatePageFormat(val)
              }}
            >
              <SelectTrigger className="w-full" id="page-format-select">
                <SelectValue placeholder="Select a format" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectGroup>
                  <SelectLabel>Choose Format</SelectLabel>
                  <SelectItem value="A4">A4</SelectItem>
                  <SelectItem value="Letter">
                    Letter <small>(US & Canada)</small>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </FieldGroup>
      </CardContent>
    </Card>
  )
}

type CustomDateFormatDialogProps = {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function CustomDateFormatDialog(props: CustomDateFormatDialogProps) {
  const { isOpen, onOpenChange } = props
  const [isGuidesOpen, setIsGuidesOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Custom Date Format</DialogTitle>
          <DialogDescription>
            You can use the following tokens to create a custom date format:
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="gap-2 grid grid-cols-1 md:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="month-year-format-input">
                Month/Year Format
              </FieldLabel>
              <Input
                id="month-year-format-input"
                type="text"
                placeholder="MMMM YYYY"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="full-date-format-input">
                Full Date Format
              </FieldLabel>
              <Input
                id="full-date-format-input"
                type="text"
                placeholder="MMMM Do, YYYY"
              />
            </Field>
          </div>

          <Collapsible
            open={isGuidesOpen}
            onOpenChange={setIsGuidesOpen}
            className="group flex flex-col gap-2 w-full"
          >
            {/* <div className="flex justify-between items-center gap-4 px-4">
              <h4 className="font-semibold group-data-[state=closed]:text-blue-700 group-data-[state=open]:text-red-500 text-sm group-data-[state=closed]:after-content-['▼'] group-data-[state=open]:after-content-['▲']">
                Show how custom formats work
              </h4>
            </div> */}
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="lg" className="justify-start">
                <ChevronsUpDown />
                {isGuidesOpen
                  ? 'Hide explanation'
                  : 'Show how custom formats work'}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="slide-out-to-top-8 slide-in-from-top-8 animate-in duration-300 fade-in">
              <div className="space-y-4 -mx-4 px-4 border-t max-h-[50vh] overflow-y-auto no-scrollbar">
                <h5>Available date placeholders</h5>

                <div>
                  <h6>Day</h6>
                  <ul className="space-y-2 list-['👉'] list-inside">
                    <li>
                      <code className="bg-muted px-1 py-0.5 rounded text-sm">
                        <strong>DD</strong>
                      </code>
                      : Day of the month with two digits (e.g., 01, 31)
                    </li>
                    <li>
                      <code className="bg-muted px-1 py-0.5 rounded text-sm">
                        <strong>D</strong>
                      </code>
                      : Day of the month without leading zeros (e.g., 1, 31)
                    </li>
                    <li>
                      <code className="bg-muted px-1 py-0.5 rounded text-sm">
                        <strong>Do</strong>
                      </code>
                      : Day of the month with an ordinal suffix (e.g., 1st, 2nd,
                      31st)
                    </li>
                  </ul>
                </div>

                <div>
                  <h6>Month</h6>
                  <ul className="space-y-2 list-['👉'] list-inside">
                    <li>
                      <code className="bg-muted px-1 py-0.5 rounded text-sm">
                        <strong>M</strong>
                      </code>
                      : Month as a number without leading zeros (e.g., 1, 12)
                    </li>
                    <li>
                      <code className="bg-muted px-1 py-0.5 rounded text-sm">
                        <strong>MM</strong>
                      </code>
                      : Month as a number with two digits (e.g., 01, 12)
                    </li>
                    <li>
                      <code className="bg-muted px-1 py-0.5 rounded text-sm">
                        <strong>MMM</strong>
                      </code>
                      : Abbreviated month name (e.g., Jan, Dec)
                    </li>
                    <li>
                      <code className="bg-muted px-1 py-0.5 rounded text-sm">
                        <strong>MMMM</strong>
                      </code>
                      : Full month name (e.g., January, December)
                    </li>
                  </ul>
                </div>

                <div>
                  <h6>Year</h6>
                  <ul className="space-y-2 list-['👉'] list-inside">
                    <li>
                      <code className="bg-muted px-1 py-0.5 rounded text-sm">
                        <strong>YY</strong>
                      </code>
                      : Two-digit year (e.g., 24)
                    </li>
                    <li>
                      <code className="bg-muted px-1 py-0.5 rounded text-sm">
                        <strong>YYYY</strong>
                      </code>
                      : Full year (e.g., 2024)
                    </li>
                  </ul>
                </div>

                <div>
                  <h6>Example formats</h6>
                  <ul className="space-y-2 list-['👉'] list-inside">
                    <li>
                      <code className="bg-muted px-1 py-0.5 rounded text-sm">
                        <strong>DD MMM YYYY</strong>
                      </code>
                      → 31 Dec 2024
                    </li>
                    <li>
                      <code className="bg-muted px-1 py-0.5 rounded text-sm">
                        <strong>Do of MMMM YYYY</strong>
                      </code>
                      → 31st of December 2024
                    </li>
                    <li>
                      <code className="bg-muted px-1 py-0.5 rounded text-sm">
                        <strong>MMMM DD, YYYY</strong>
                      </code>
                      → December 31, 2024
                    </li>
                  </ul>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
        <DialogFooter className="sm:justify-center">
          <DialogClose asChild>
            <Button type="button" size={'lg'}>
              <CheckIcon />
              Done
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
