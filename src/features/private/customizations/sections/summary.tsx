import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Checkbox } from '#/components/ui/checkbox'
import { Field, FieldGroup, FieldLabel } from '#/components/ui/field'
import { useCustomizationStore } from '#/store/customization-store'

/*
checked time:
{"customizationUpdates":[{"value":true,"path":"expert.mergeProfileWithHeader"}]}
{
	"sectionOrder": {
		"mix": [
			"profile",
			"work",
			"skill",
			"language",
			"certificate",
			"interest",
			"project",
			"course",
			"award",
			"organisation",
			"publication",
			"reference",
			"declaration",
			"break",
			"education"
		],
		"one": {
			"sectionsSorted": [
				"profile",
				"work",
				"skill",
				"language",
				"certificate",
				"interest",
				"project",
				"course",
				"award",
				"organisation",
				"publication",
				"reference",
				"declaration",
				"education"
			]
		},
		"two": {
			"leftSectionsSorted": [
				"profile",
				"skill",
				"certificate",
				"project",
				"award",
				"publication",
				"declaration"
			],
			"rightSectionsSorted": [
				"work",
				"language",
				"interest",
				"course",
				"organisation",
				"reference",
				"education"
			]
		}
	}
}

not checked:
{
getting res back 
	"customizationUpdates": [
		{
			"path": "expert.mergeProfileWithHeader",
			"value": false
		},
		{
			"path": "sectionOrder",
			"value": {
				"mix": [
					"profile",
					"work",
					"skill",
					"language",
					"certificate",
					"interest",
					"project",
					"course",
					"award",
					"organisation",
					"publication",
					"reference",
					"declaration",
					"break",
					"education"
				],
				"one": {
					"sectionsSorted": [
						"profile",
						"work",
						"skill",
						"language",
						"certificate",
						"interest",
						"project",
						"course",
						"award",
						"organisation",
						"publication",
						"reference",
						"declaration",
						"education"
					]
				},
				"two": {
					"leftSectionsSorted": [
						"profile",
						"skill",
						"certificate",
						"project",
						"award",
						"publication",
						"declaration"
					],
					"rightSectionsSorted": [
						"work",
						"language",
						"interest",
						"course",
						"organisation",
						"reference",
						"education"
					]
				}
			}
		}
	]
}
*/

/*
{"customizationUpdates":[{"value":false,"path":"expert.showProfileHeading"}]}
{"customizationUpdates":[{"value":true,"path":"expert.showProfileHeading"}]}
*/

const sectionOrderData = {
  mix: [
    'profile',
    'work',
    'skill',
    'language',
    'certificate',
    'interest',
    'project',
    'course',
    'award',
    'organisation',
    'publication',
    'reference',
    'declaration',
    'break',
    'education',
  ],
  one: {
    sectionsSorted: [
      'profile',
      'work',
      'skill',
      'language',
      'certificate',
      'interest',
      'project',
      'course',
      'award',
      'organisation',
      'publication',
      'reference',
      'declaration',
      'education',
    ],
  },
  two: {
    leftSectionsSorted: [
      'profile',
      'skill',
      'certificate',
      'project',
      'award',
      'publication',
      'declaration',
    ],
    rightSectionsSorted: [
      'work',
      'language',
      'interest',
      'course',
      'organisation',
      'reference',
      'education',
    ],
  },
}

export default function EditSummary() {
  const {
    customization: { expert, sectionOrder },
    updateExpert,
    updateSectionOrder,
  } = useCustomizationStore()

  const isShow = expert.mergeProfileWithHeader

  return (
    <Card className={''}>
      <CardHeader>
        <CardTitle>Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <FieldGroup className="">
          <Field orientation="horizontal">
            <Checkbox
              id="mergeProfileWithHeader"
              name="mergeProfileWithHeader"
              checked={expert.mergeProfileWithHeader}
              onCheckedChange={(checked) => {
                // Disable "Show summary heading" when "Display summary as part of header" is enabled
                if (checked) {
                  updateExpert({
                    ...expert,
                    mergeProfileWithHeader: checked as boolean,
                    showProfileHeading: false,
                  })

                  updateSectionOrder({
                    ...sectionOrder,
                    mix: sectionOrderData.mix,
                    one: sectionOrderData.one,
                    two: sectionOrderData.two,
                  })

                  // updateSectionOrder({
                  //   ...sectionOrderData,
                  //   mix: sectionOrderData.mix.filter((item) => item !== 'profile'),
                  //   one: {
                  //     sectionsSorted: sectionOrderData.one.sectionsSorted.filter(
                  //       (item) => item !== 'profile'
                  //     ),
                  //   },
                  //   two: {
                  //     leftSectionsSorted: sectionOrderData.two.leftSectionsSorted.filter(
                  //       (item) => item !== 'profile'
                  //     ),
                  //     rightSectionsSorted: sectionOrderData.two.rightSectionsSorted.filter(
                  //       (item) => item !== 'profile'
                  //     ),
                  //   },
                  // })
                } else {
                  updateExpert({
                    ...expert,
                    mergeProfileWithHeader: checked,
                    showProfileHeading: true,
                  })
                }
              }}
            />
            <FieldLabel htmlFor="mergeProfileWithHeader">
              Display summary as part of header
            </FieldLabel>
          </Field>
          {!isShow ? (
            <Field orientation="horizontal">
              <Checkbox
                id="showProfileHeading"
                name="showProfileHeading"
                checked={expert.showProfileHeading}
                onCheckedChange={(checked) => {
                  // toggle the state
                  updateExpert({
                    ...expert,
                    showProfileHeading: checked as boolean,
                  })
                }}
              />
              <FieldLabel htmlFor="showProfileHeading">
                Show summary heading
              </FieldLabel>
            </Field>
          ) : null}
        </FieldGroup>
      </CardContent>
    </Card>
  )
}
