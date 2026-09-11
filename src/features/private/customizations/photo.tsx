import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Checkbox } from '#/components/ui/checkbox'
import { Field, FieldGroup, FieldLabel } from '#/components/ui/field'
import { useCustomizationStore } from '#/store/customization-store'
import PhotoCustomization from './photos/photo-customization'

// type PhotoSize = 'xs' | 's' | 'm' | 'l' | 'xl'
// type PhotoShape =
//   'round' | 'square' | 'squareRounded' | 'portrait' | 'portraitRounded'

// const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'
// const toggleStateShape =
//   'ring-1 data-[state=on]:ring-2 data-[state=on]:ring-primary'

const animationClass =
  'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

/*
  {
  "customizationUpdates":[
    {
      "value":{"show":false,"grayscale":false,"size":"m"},"path":"header.photo"
    }
  ]
}

{"customizationUpdates":[
  {
    "value":{"show":true,"grayscale":true,"size":"m"},"path":"header.photo"}
    ]
  }
  */

export default function Photo() {
  const {
    customization: { header },
    updateHeader,
  } = useCustomizationStore()

  const isShow = header.photo.show

  return (
    <Card>
      <CardHeader>
        <CardTitle>Photo</CardTitle>
      </CardHeader>

      <CardContent>
        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox
              id="photoShow"
              name="photoShow"
              checked={header.photo.show}
              onCheckedChange={(checked) => {
                // toggle the show only
                updateHeader({
                  ...header,
                  photo: {
                    ...header.photo,
                    show: checked as boolean,
                    grayscale: false,
                    size: 'm',
                  },
                })
              }}
            />
            <FieldLabel htmlFor="photoShow">Show</FieldLabel>
          </Field>
          {isShow ? (
            <Field orientation="horizontal" className={animationClass}>
              <Checkbox
                id="photoGrayScale"
                name="photoGrayScale"
                checked={header.photo.grayscale}
                onCheckedChange={(checked) => {
                  updateHeader({
                    ...header,
                    photo: {
                      ...header.photo,
                      show: true,
                      grayscale: checked as boolean,
                      size: 'm',
                    },
                  })
                }}
              />
              <FieldLabel htmlFor="photoGrayScale">Grayscale</FieldLabel>
            </Field>
          ) : null}
        </FieldGroup>
      </CardContent>

      <PhotoCustomization />
    </Card>
  )
}
