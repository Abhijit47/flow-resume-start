import { Button } from '#/components/ui/button'
import { Checkbox } from '#/components/ui/checkbox'
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '#/components/ui/field'
import { Input } from '#/components/ui/input'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '#/components/ui/input-group'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '#/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '#/components/ui/select'
import { Textarea } from '#/components/ui/textarea'
import { CheckCircle2Icon, LinkIcon } from 'lucide-react'
import { useState } from 'react'
import FormItemSettings from './form-item-settings'

// generate month options with Intl Object
function generateMonthOptions() {
  const monthOptions = []
  for (let month = 0; month < 12; month++) {
    const monthName = new Intl.DateTimeFormat('en-US', {
      month: 'long',
    }).format(new Date(0, month))
    monthOptions.push({ value: month + 1, label: monthName })
  }
  return monthOptions
}

// generate year options from 1900 to current year with Intl Object
function generateYearOptions(reverse = true) {
  if (reverse) {
    const currentYear = new Date().getFullYear()
    const yearOptions = []
    for (let year = 1900; year <= currentYear; year++) {
      yearOptions.push({ value: year, label: year.toString() })
    }
    return yearOptions.reverse()
  } else {
    const currentYear = new Date().getFullYear()
    const yearOptions = []
    for (let year = 1900; year <= currentYear; year++) {
      yearOptions.push({ value: year, label: year.toString() })
    }
    return yearOptions
  }
}

export default function PublicationForm() {
  const [isShowDay, setIsShowDay] = useState(true)
  const [isShowMonth, setIsShowMonth] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <FieldGroup>
      <FieldSet>
        <div className={'flex items-center justify-between'}>
          <FieldLegend>Edit Entry</FieldLegend>
          <FormItemSettings />
        </div>
        <FieldSet>
          <Field>
            <FieldLabel htmlFor="publication-title">Title</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="publication-title"
                placeholder="Enter the title of your publication"
              />
              <InputGroupAddon align="inline-end">
                <Popover open={isOpen} onOpenChange={setIsOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      aria-label="More"
                      size="xs"
                      type="button"
                    >
                      <LinkIcon /> Link
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="end" className="w-72">
                    <Field>
                      <FieldLabel htmlFor="publication-link-url">
                        Link URL
                      </FieldLabel>
                      <InputGroup>
                        <InputGroupInput
                          id="publication-link-url"
                          placeholder="Enter link"
                          onMouseDown={() => setIsOpen(true)}
                        />
                        <InputGroupAddon align="inline-end">
                          <Button
                            type="button"
                            size={'icon-xs'}
                            variant={'outline'}
                            onClick={() => {
                              setIsOpen(false)
                            }}
                          >
                            <CheckCircle2Icon />
                          </Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </Field>
                  </PopoverContent>
                </Popover>
              </InputGroupAddon>
            </InputGroup>
          </Field>

          <Field>
            <FieldLabel htmlFor="publication-publisher">Publisher</FieldLabel>
            <Input
              id="publication-publisher"
              placeholder="Enter the name of the publisher"
            />
          </Field>

          <FieldGroup className={'gap-2'}>
            <FieldSet>
              <FieldLegend>Date</FieldLegend>
            </FieldSet>
            <div className={'grid grid-cols-1 md:grid-cols-3 gap-4'}>
              <FieldGroup className={'gap-2'}>
                {isShowDay ? (
                  <Field>
                    <FieldLabel
                      htmlFor="publication-date-day"
                      className={'sr-only'}
                    >
                      Day
                    </FieldLabel>
                    <Select>
                      <SelectTrigger id="publication-date-day">
                        <SelectValue placeholder="Day" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectGroup>
                          <SelectLabel>Choose a day</SelectLabel>
                          {[...Array(31)].map((_, index) => (
                            <SelectItem
                              key={index}
                              value={(index + 1).toString()}
                            >
                              {index + 1}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                ) : null}

                <Field orientation="horizontal">
                  <Checkbox
                    id="publication-day-dont-show-checkbox"
                    checked={!isShowDay}
                    onCheckedChange={(checked) => setIsShowDay(!checked)}
                  />
                  <FieldLabel
                    htmlFor="publication-day-dont-show-checkbox"
                    className="font-normal"
                  >
                    Don't show
                  </FieldLabel>
                </Field>
              </FieldGroup>

              <FieldGroup className={'gap-2'}>
                {isShowMonth ? (
                  <Field>
                    <FieldLabel
                      htmlFor="publication-date-month"
                      className={'sr-only'}
                    >
                      Month
                    </FieldLabel>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Month" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectGroup>
                          <SelectLabel>Choose a month</SelectLabel>
                          {generateMonthOptions().map((month) => (
                            <SelectItem
                              key={month.value}
                              value={month.value.toString()}
                            >
                              {month.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                ) : null}

                <Field orientation="horizontal">
                  <Checkbox
                    id="publication-month-dont-show-checkbox"
                    checked={!isShowMonth}
                    onCheckedChange={(checked) => setIsShowMonth(!checked)}
                  />
                  <FieldLabel
                    htmlFor="publication-month-dont-show-checkbox"
                    className="font-normal"
                  >
                    Don't show
                  </FieldLabel>
                </Field>
              </FieldGroup>

              <Field>
                <FieldLabel
                  htmlFor="publication-date-year"
                  className={'sr-only'}
                >
                  Year
                </FieldLabel>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectGroup>
                      <SelectLabel>Choose a year</SelectLabel>
                      {generateYearOptions().map((year) => (
                        <SelectItem
                          key={year.value}
                          value={year.value.toString()}
                        >
                          {year.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
            </div>
          </FieldGroup>

          <Field>
            <FieldLabel htmlFor="publication-description">
              Description
            </FieldLabel>
            <Textarea
              id="publication-description"
              placeholder="Describe your publication..."
              className="resize-none"
            />
          </Field>
        </FieldSet>
      </FieldSet>
    </FieldGroup>
  )
}
