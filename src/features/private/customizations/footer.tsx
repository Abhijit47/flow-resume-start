import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Checkbox } from '#/components/ui/checkbox'
import { Field, FieldGroup, FieldLabel } from '#/components/ui/field'
import { useCustomizationStore } from '#/store/customization-store'
import FooterAdvancedSettings from './footers/footer-advanced-settings'

/*
{"customizationUpdates":[{"value":true,"path":"expert.footer.pages"}]}

{"customizationUpdates":[{"value":true,"path":"expert.footer.email"}]}

{"customizationUpdates":[{"value":true,"path":"expert.footer.name"}]}
*/

// const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'
// const animationClass =
//   'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

export default function Footer() {
  const {
    customization: { expert },
    updateExpert,
  } = useCustomizationStore()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Footer</CardTitle>
      </CardHeader>

      <CardContent>
        <FieldGroup className="">
          <Field orientation="horizontal">
            <Checkbox
              id="footerPageNumber"
              name="footerPageNumber"
              checked={expert.footer.pages}
              onCheckedChange={(checked) => {
                // toggle the state
                updateExpert({
                  ...expert,
                  footer: {
                    ...expert.footer,
                    pages: checked as boolean,
                  },
                })
              }}
            />
            <FieldLabel htmlFor="footerPageNumber">Page numbers</FieldLabel>
          </Field>

          <Field orientation="horizontal">
            <Checkbox
              id="footerEmail"
              name="footerEmail"
              checked={expert.footer.email}
              onCheckedChange={(checked) => {
                // toggle the state
                updateExpert({
                  ...expert,
                  footer: {
                    ...expert.footer,
                    email: checked as boolean,
                  },
                })
              }}
            />
            <FieldLabel htmlFor="footerEmail">Email</FieldLabel>
          </Field>

          <Field orientation="horizontal">
            <Checkbox
              id="footerName"
              name="footerName"
              checked={expert.footer.name}
              onCheckedChange={(checked) => {
                // toggle the state
                updateExpert({
                  ...expert,
                  footer: {
                    ...expert.footer,
                    name: checked as boolean,
                  },
                })
              }}
            />
            <FieldLabel htmlFor="footerName">Name</FieldLabel>
          </Field>
        </FieldGroup>
      </CardContent>

      <FooterAdvancedSettings />
    </Card>
  )
}
