import type { SVGProps } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Field, FieldDescription, FieldLabel } from '#/components/ui/field'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'

// "line" | "box"|"underline"|"topBottomLine"|"thickShortUnderline"|"simple"|"thinLine"|"zigZagLine"

// "line" | "box"|"underline"|"topBottomLine"|"thickShortUnderline"|"simple"|"thinLine"|"zigZagLine"
const headingsStyles = [
  {
    id: crypto.randomUUID(),
    label: 'Line',
    value: 'line',
    icon: '/heading-icons/line.svg',
    iconSvg: (props: SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 137 49"
        {...props}
      >
        <path
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20 33L100 33"
          stroke="currentColor"
        ></path>
        <rect width="44" height="9" x="20" y="16" rx="1"></rect>
      </svg>
    ),
  },
  {
    id: crypto.randomUUID(),
    label: 'Box',
    value: 'box',
    icon: '/heading-icons/box.svg',
    iconSvg: (props: SVGProps<SVGSVGElement>) => (
      <svg
        viewBox="0 0 137 49"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M29 35h79M108 14v21M29 13.92h79M29 14v20.5"
          stroke="currentColor"
        ></path>
        <rect x="47" y="20" width="44" height="9" rx="1"></rect>
      </svg>
    ),
  },
  {
    id: crypto.randomUUID(),
    label: 'Underline',
    value: 'underline',
    icon: '/heading-icons/underline.svg',
    iconSvg: (props: SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 137 49"
        {...props}
      >
        <rect
          width="48"
          height="9"
          x="20"
          y="16"
          rx="1"
          stroke="currentColor"
        ></rect>
        <path
          strokeLinejoin="round"
          strokeWidth="2.5"
          d="M20 32L68 32"
          stroke="currentColor"
        ></path>
      </svg>
    ),
  },
  {
    id: crypto.randomUUID(),
    label: 'Top Bottom Line',
    value: 'topBottomLine',
    icon: '/heading-icons/topBottomLine.svg',
    iconSvg: (props: SVGProps<SVGSVGElement>) => (
      <svg
        viewBox="0 0 137 49"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <line
          x1="27"
          y1="35"
          x2="110"
          y2="35"
          strokeWidth="2"
          strokeLinejoin="round"
          stroke="currentColor"
        ></line>
        <line
          x1="27"
          y1="14"
          x2="110"
          y2="14"
          strokeWidth="2"
          strokeLinejoin="round"
          stroke="currentColor"
        ></line>
        <rect x="46" y="20" width="44" height="9" rx="1"></rect>
      </svg>
    ),
  },
  {
    id: crypto.randomUUID(),
    label: 'Thick Short Underline',
    value: 'thickShortUnderline',
    icon: '/heading-icons/thickShortUnderline.svg',
    iconSvg: (props: SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 137 49"
        {...props}
      >
        <rect width="48" height="9" x="20.015" y="15" rx="1"></rect>
        <path
          strokeWidth="5"
          d="M20 32.5 L40 32.5"
          stroke="currentColor"
        ></path>
      </svg>
    ),
  },
  {
    id: crypto.randomUUID(),
    label: 'Simple',
    value: 'simple',
    icon: '/heading-icons/simple.svg',
    iconSvg: (props: SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 137 49"
        {...props}
      >
        <rect width="44" height="9" x="20" y="20" rx="1"></rect>
      </svg>
    ),
  },
  {
    id: crypto.randomUUID(),
    label: 'Thin Line',
    value: 'thinLine',
    icon: '/heading-icons/thinLine.svg',
    iconSvg: (props: SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 137 49"
        {...props}
      >
        <path
          strokeLinejoin="round"
          strokeWidth="1"
          d="M20 33L100 33"
          stroke="currentColor"
        ></path>
        <rect width="44" height="9" x="20" y="16" rx="1"></rect>
      </svg>
    ),
  },
  {
    id: crypto.randomUUID(),
    label: 'Zig Zag Line',
    value: 'zigZagLine',
    icon: '/heading-icons/zigZagLine.svg',
    iconSvg: (props: SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 138 49"
        {...props}
      >
        <rect width="44" height="9" x="20" y="16" rx="1"></rect>
        <path
          strokeWidth="5"
          d="M20 32.5 L40 32.5"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="matrix(-.66519 .74667 -.66519 -.74667 61.693 31)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="scale(-.94072 -1.05596) rotate(45 8.214 -93.334)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="matrix(-.66519 .74667 -.66519 -.74667 56.17 31)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="matrix(-.66519 -.74667 .66519 -.74667 54.388 35)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="matrix(-.66519 .74667 -.66519 -.74667 50.824 31)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="scale(-.94072 -1.05596) rotate(45 13.99 -79.388)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="matrix(-.66519 .74667 -.66519 -.74667 45.3 31)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="scale(-.94072 -1.05596) rotate(45 16.88 -72.415)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="matrix(-.66519 .74667 -.66519 -.74667 39.956 31)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="matrix(-.66519 -.74667 .66519 -.74667 38.085 35)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="matrix(-.66519 .74667 -.66519 -.74667 34.432 31)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="matrix(-.66519 -.74667 .66519 -.74667 32.65 35)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="matrix(-.66519 .74667 -.66519 -.74667 29.087 31)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="matrix(-.66519 -.74667 .66519 -.74667 27.216 35)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="matrix(-.66519 .74667 -.66519 -.74667 23.564 31)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="matrix(-.66519 .74667 -.66519 -.74667 100 31)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="matrix(-.66519 -.74667 .66519 -.74667 98.13 35)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="matrix(-.66519 .74667 -.66519 -.74667 94.477 31)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="matrix(-.66519 -.74667 .66519 -.74667 92.695 35)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="matrix(-.66519 .74667 -.66519 -.74667 89.131 31)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="matrix(-.66519 -.74667 .66519 -.74667 87.26 35)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="matrix(-.66519 .74667 -.66519 -.74667 83.608 31)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="matrix(-.66519 -.74667 .66519 -.74667 81.826 35)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="matrix(-.66519 .74667 -.66519 -.74667 78.263 31)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="matrix(-.66519 -.74667 .66519 -.74667 76.392 35)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="matrix(-.66519 .74667 -.66519 -.74667 72.74 31)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="matrix(-.66519 -.74667 .66519 -.74667 70.958 35)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="scale(-.94072 -1.05596) rotate(-45 -71.258 71.8)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="scale(-.94072 -1.05596) rotate(45 5.184 -100.65)"
          stroke="currentColor"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0.75 -0.75L4.607 -0.75"
          transform="matrix(-.66519 .74667 -.66519 -.74667 61.87 31)"
          stroke="currentColor"
        ></path>
      </svg>
    ),
  },
]

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'

// const svgState =
//   'group-data-[state=on]:fill-background group-data-[state=on]:stroke-foreground'

// const animationClass =
//   'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

/*
{"customizationUpdates":[{"value":"line","path":"heading.style"}]}
{"customizationUpdates":[{"value":"box","path":"heading.style"}]}
{"customizationUpdates":[{"value":"underline","path":"heading.style"}]}
{"customizationUpdates":[{"value":"topBottomLine","path":"heading.style"}]}
{"customizationUpdates":[{"value":"thickShortUnderline","path":"heading.style"}]}
{"customizationUpdates":[{"value":"simple","path":"heading.style"}]}
{"customizationUpdates":[{"value":"thinLine","path":"heading.style"}]}
{"customizationUpdates":[{"value":"zigZagLine","path":"heading.style"}]}

{"customizationUpdates":[{"value":"capitalize","path":"heading.capitalization"}]}
{"customizationUpdates":[{"value":"uppercase","path":"heading.capitalization"}]}

{"customizationUpdates":[{"value":"none","path":"heading.icons"}]}
{"customizationUpdates":[{"value":"outline","path":"heading.icons"}]}
{"customizationUpdates":[{"value":"filled","path":"heading.icons"}]}
 */

export default function Headings() {
  const {
    customization: { heading },
    updateHeading,
  } = useCustomizationStore()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Section Headings</CardTitle>
      </CardHeader>

      <CardContent>
        <CardHeader>Style</CardHeader>
        <CardContent>
          <Field>
            <FieldLabel>Font Weight</FieldLabel>
            <ToggleGroup
              type="single"
              variant="outline"
              spacing={2}
              size="lg"
              className={'flex-wrap gap-2'}
              value={heading.style}
              onValueChange={(value) => {
                if (value) {
                  updateHeading({
                    ...heading,
                    style: value,
                  })
                }
              }}
            >
              {headingsStyles.map((style) => (
                <ToggleGroupItem
                  key={style.id}
                  value={style.value}
                  aria-label={style.label}
                  className={cn(
                    'flex flex-col justify-center items-center rounded-xl w-24 h-16',
                    toggleState,
                    'group',
                  )}
                  variant={'outline'}
                  // style={{
                  //   backgroundImage: `url(${style.icon})`,
                  //   backgroundPosition: 'center',
                  //   backgroundSize: 'contain',
                  //   backgroundRepeat: 'no-repeat',
                  // }}
                >
                  {/* <span className="">
                    <img
                      src={style.icon}
                      alt={style.label}
                      className="w-6 h-6"
                    />
                  </span> */}
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 137 49"
                    className={
                      'size-20 group-data-[state=on]:fill-background group-data-[state=on]:stroke-foreground'
                    }
                  >
                    <path
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 33L100 33"
                      stroke="currentColor"
                    ></path>
                    <rect width="44" height="9" x="20" y="16" rx="1"></rect>
                  </svg> */}

                  <style.iconSvg className="group-data-[state=on]:fill-background group-data-[state=on]:stroke-foreground size-20" />

                  <span className="sr-only">{style.label}</span>
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
            <FieldDescription>Use to set the font weight.</FieldDescription>
          </Field>
        </CardContent>
      </CardContent>

      <CardContent className={'space-y-2'}>
        <CardHeader>Capitalization</CardHeader>
        <CardContent>
          <ToggleGroup
            variant="outline"
            type="single"
            value={heading.capitalization}
            onValueChange={(value) => {
              if (value) {
                updateHeading({
                  ...heading,
                  capitalization: value,
                })
              }
            }}
          >
            <ToggleGroupItem
              value="capitalize"
              aria-label="Toggle capitalize"
              className={cn(toggleState)}
            >
              Capitalize
            </ToggleGroupItem>
            <ToggleGroupItem
              value="uppercase"
              aria-label="Toggle uppercase"
              className={cn(toggleState)}
            >
              Uppercase
            </ToggleGroupItem>
          </ToggleGroup>
        </CardContent>
      </CardContent>

      <CardContent className={'space-y-2'}>
        <CardHeader>Icons</CardHeader>
        <CardContent>
          <ToggleGroup
            variant="outline"
            type="single"
            value={heading.icons}
            onValueChange={(value) => {
              if (value) {
                updateHeading({
                  ...heading,
                  icons: value,
                })
              }
            }}
          >
            <ToggleGroupItem
              value="none"
              aria-label="Toggle none"
              className={cn(toggleState)}
            >
              None
            </ToggleGroupItem>
            <ToggleGroupItem
              value="outline"
              aria-label="Toggle outline"
              className={cn(toggleState)}
            >
              Outline
            </ToggleGroupItem>
            <ToggleGroupItem
              value="filled"
              aria-label="Toggle filled"
              className={cn(toggleState)}
            >
              Filled
            </ToggleGroupItem>
          </ToggleGroup>
        </CardContent>
      </CardContent>
    </Card>
  )
}
