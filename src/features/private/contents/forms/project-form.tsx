import { Button } from '#/components/ui/button'
import { Calendar } from '#/components/ui/calendar'
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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '#/components/ui/select'
import { Switch } from '#/components/ui/switch'
import { Textarea } from '#/components/ui/textarea'
import { format } from 'date-fns'
import { CheckCircle2Icon, LinkIcon } from 'lucide-react'
import type { ChangeEvent, ChangeEventHandler } from 'react'
import { useState } from 'react'
import type { DropdownNavProps, DropdownProps } from 'react-day-picker'
import FormItemSettings from './form-item-settings'

export default function ProjectForm() {
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
            <FieldLabel htmlFor="project-title">Project title</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="project-title"
                placeholder="Enter project title"
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
                      <FieldLabel htmlFor="project-link-url">
                        Link URL
                      </FieldLabel>
                      <InputGroup>
                        <InputGroupInput
                          id="project-link-url"
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
            <FieldLabel htmlFor="project-subtitle">Subtitle</FieldLabel>
            <Input id="project-subtitle" placeholder="Enter subtitle" />
          </Field>

          <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
            <Field>
              <FieldLabel htmlFor="education-start-date">Start Date</FieldLabel>
              <Popover>
                <PopoverTrigger asChild id="education-start-date">
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
              <FieldLabel htmlFor="education-end-date">End Date</FieldLabel>
              <Popover>
                <PopoverTrigger asChild id="education-end-date">
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
                    <FieldLabel htmlFor="education-present-switch">
                      Present
                    </FieldLabel>
                    <Switch
                      id="education-present-switch"
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
          </div>

          <Field>
            <FieldLabel htmlFor="project-description">Description</FieldLabel>
            <Textarea
              id="project-description"
              placeholder="Describe your project and its outcomes..."
              className="resize-none"
            />
          </Field>
        </FieldSet>
      </FieldSet>
    </FieldGroup>
  )
}
