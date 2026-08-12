import { Button } from '#/components/ui/button'
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '#/components/ui/field'
import { Input } from '#/components/ui/input'
import { Textarea } from '#/components/ui/textarea'
import { useState } from 'react'

import { Calendar } from '#/components/ui/calendar'
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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '#/components/ui/select'
import { Switch } from '#/components/ui/switch'
import { format } from 'date-fns'
import { CheckCircle2Icon, LinkIcon } from 'lucide-react'
import type { ChangeEvent, ChangeEventHandler } from 'react'
import type { DropdownNavProps, DropdownProps } from 'react-day-picker'
import FormItemSettings from './form-item-settings'

export default function OrganizationForm() {
  const [isPresent, setIsPresent] = useState(false)

  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)

  const [selectedEndDate, setSelectedEndDate] = useState<string | undefined>(
    () => {
      if (isPresent) {
        return 'Present'
      } else {
        return undefined
      }
    },
  )

  const [isOpen, setIsOpen] = useState(false)

  const handleCalendarChange = (
    _value: string | number,
    _e: ChangeEventHandler<HTMLSelectElement>,
  ) => {
    const _event = {
      target: {
        value: String(_value),
      },
    } as ChangeEvent<HTMLSelectElement>
    _e(_event)
  }

  return (
    <FieldGroup>
      <FieldSet>
        <div className={'flex items-center justify-between'}>
          <FieldLegend>Edit Entry</FieldLegend>
          <FormItemSettings />
        </div>
        <FieldSet>
          <Field>
            <FieldLabel htmlFor="organization-name">Organization</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="organization-name"
                placeholder="Enter organization name"
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
                      <FieldLabel htmlFor="organization-link-url">
                        Link URL
                      </FieldLabel>
                      <InputGroup>
                        <InputGroupInput
                          id="organization-link-url"
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
            <FieldLabel htmlFor="organization-your-position">
              Position
            </FieldLabel>
            <Input
              id="organization-your-position"
              placeholder="Enter position at the organization"
            />
          </Field>

          <div className={'grid grid-cols-1 md:grid-cols-3 gap-4'}>
            <Field>
              <FieldLabel htmlFor="organization-start-date">
                Start Date
              </FieldLabel>
              <Popover>
                <PopoverTrigger asChild id="organization-start-date">
                  <Button variant="outline" type="button">
                    {startDate ? format(startDate, 'MM/yyyy') : 'MM/YYYY'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full">
                  <Calendar
                    captionLayout="dropdown"
                    classNames={{
                      month_caption: 'mx-0',
                    }}
                    components={{
                      Dropdown: (props: DropdownProps) => {
                        return (
                          <Select
                            onValueChange={(value) => {
                              if (props.onChange && value) {
                                handleCalendarChange(value, props.onChange)
                              }
                            }}
                            value={String(props.value)}
                          >
                            <SelectTrigger className="first:grow">
                              <SelectValue>
                                {
                                  props.options?.find(
                                    (option) => option.value === props.value,
                                  )?.label
                                }
                              </SelectValue>
                            </SelectTrigger>
                            <SelectContent
                              align="start"
                              position="item-aligned"
                            >
                              {props.options?.map((option) => (
                                <SelectItem
                                  disabled={option.disabled}
                                  key={option.value}
                                  value={String(option.value)}
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )
                      },
                      DropdownNav: (props: DropdownNavProps) => {
                        return (
                          <div className="flex w-full items-center gap-2">
                            {props.children}
                          </div>
                        )
                      },
                    }}
                    defaultMonth={new Date()}
                    hideNavigation
                    mode="single"
                    startMonth={new Date(1980, 6)}
                    selected={startDate}
                    onSelect={setStartDate}
                  />
                </PopoverContent>
              </Popover>
            </Field>
            <Field>
              <FieldLabel htmlFor="organization-end-date">End Date</FieldLabel>
              <Popover>
                <PopoverTrigger asChild id="organization-end-date">
                  <Button variant="outline" type="button">
                    {endDate
                      ? format(endDate, 'MM/yyyy')
                      : selectedEndDate
                        ? selectedEndDate
                        : 'MM/YYYY'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full">
                  <Field orientation="horizontal" className="w-fit">
                    <FieldLabel htmlFor="organization-present-switch">
                      Present
                    </FieldLabel>
                    <Switch
                      id="organization-present-switch"
                      checked={isPresent}
                      onCheckedChange={(checked) => {
                        setIsPresent(!!checked)
                        if (checked) {
                          setSelectedEndDate('Present')
                          setEndDate(undefined) // Clear the end date when "Present" is checked
                        } else {
                          setSelectedEndDate(undefined)
                        }
                      }}
                    />
                  </Field>
                  <Calendar
                    captionLayout="dropdown"
                    classNames={{
                      month_caption: 'mx-0',
                    }}
                    components={{
                      Dropdown: (props: DropdownProps) => {
                        return (
                          <Select
                            onValueChange={(value) => {
                              if (props.onChange && value) {
                                handleCalendarChange(value, props.onChange)
                              }
                            }}
                            value={String(props.value)}
                            disabled={isPresent} // Disable the dropdown when "Present" is checked
                          >
                            <SelectTrigger className="first:grow">
                              <SelectValue>
                                {
                                  props.options?.find(
                                    (option) => option.value === props.value,
                                  )?.label
                                }
                              </SelectValue>
                            </SelectTrigger>
                            <SelectContent
                              align="start"
                              position="item-aligned"
                            >
                              {props.options?.map((option) => (
                                <SelectItem
                                  disabled={option.disabled}
                                  key={option.value}
                                  value={String(option.value)}
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )
                      },
                      DropdownNav: (props: DropdownNavProps) => {
                        return (
                          <div className="flex w-full items-center gap-2">
                            {props.children}
                          </div>
                        )
                      },
                    }}
                    defaultMonth={new Date()}
                    hideNavigation
                    mode="single"
                    startMonth={new Date(1980, 6)}
                    selected={endDate}
                    onSelect={setEndDate}
                    disabled={isPresent}
                  />
                </PopoverContent>
              </Popover>
            </Field>
            <Field>
              <FieldLabel htmlFor="organization-location">Location</FieldLabel>
              <Input id="organization-location" placeholder="City, Country" />
            </Field>
          </div>

          <Field>
            <FieldLabel htmlFor="organization-description">
              Description
            </FieldLabel>
            <Textarea
              id="organization-description"
              placeholder="Describe the organization and your role within it"
              className="resize-none"
            />
          </Field>
        </FieldSet>
      </FieldSet>
    </FieldGroup>
  )
}
