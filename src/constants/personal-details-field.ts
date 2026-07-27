export const personalDetailsField = [
  { fieldLabel: 'Passport or Id', field: 'passport', placeholder: 'Passport' },
  {
    fieldLabel: 'Nationality',
    field: 'nationality',
    placeholder: 'Nationality',
  },
  {
    fieldLabel: 'Date of Birth',
    field: 'birthdayStr',
    placeholder: 'Date of Birth',
  },
  { fieldLabel: 'Visa', field: 'visa', placeholder: 'Visa' },
  {
    fieldLabel: 'Availability',
    field: 'availability',
    placeholder: 'Availability',
  },
  {
    fieldLabel: 'Gender/Pronoun',
    field: 'gender',
    placeholder: 'Gender/Pronoun',
  },
  { fieldLabel: 'Disability', field: 'disability', placeholder: 'Disability' },
  {
    fieldLabel: 'Work mode',
    field: 'workMode',
    placeholder: 'Remote, Hybrid, On-site',
  },
  { fieldLabel: 'Relocation', field: 'relocation', placeholder: 'Relocation' },
  {
    fieldLabel: 'Expected salary',
    field: 'expectedSalary',
    placeholder: 'Expected salary',
  },
  {
    fieldLabel: 'Second phone',
    field: 'secondPhone',
    placeholder: 'Second phone',
  },
  {
    fieldLabel: 'Driving License',
    field: 'drivingLicense',
    placeholder: 'Driving License',
  },
  {
    fieldLabel: 'Security clearance',
    field: 'securityClearance',
    placeholder: 'Security clearance',
  },
  {
    fieldLabel: 'Marital status',
    field: 'maritalStatus',
    placeholder: 'Marital status',
  },
  {
    fieldLabel: 'Military Service',
    field: 'military',
    placeholder: 'Military Service',
  },
  { fieldLabel: 'Smoking', field: 'smoking', placeholder: 'Smoking' },
  { fieldLabel: 'Height', field: 'height', placeholder: 'Height' },
  { fieldLabel: 'Weight', field: 'weight', placeholder: 'Weight' },
]

// export type PersonalDetailsFieldType =
//   (typeof personalDetailsField)[number]['field']

export type Base =
  | {
      fieldLabel: 'Passport or Id'
      field: 'passport'
      placeholder: 'Passport'
    }
  | {
      fieldLabel: 'Nationality'
      field: 'nationality'
      placeholder: 'Nationality'
    }
  | {
      fieldLabel: 'Date of Birth'
      field: 'birthdayStr'
      placeholder: 'Date of Birth'
    }
  | {
      fieldLabel: 'Visa'
      field: 'visa'
      placeholder: 'Visa'
    }
  | {
      fieldLabel: 'Availability'
      field: 'availability'
      placeholder: 'Availability'
    }
  | {
      fieldLabel: 'Gender/Pronoun'
      field: 'gender'
      placeholder: 'Gender/Pronoun'
    }
  | {
      fieldLabel: 'Disability'
      field: 'disability'
      placeholder: 'Disability'
    }
  | {
      fieldLabel: 'Work mode'
      field: 'workMode'
      placeholder: 'Remote, Hybrid, On-site'
    }
  | {
      fieldLabel: 'Relocation'
      field: 'relocation'
      placeholder: 'Relocation'
    }
  | {
      fieldLabel: 'Expected salary'
      field: 'expectedSalary'
      placeholder: 'Expected salary'
    }
  | {
      fieldLabel: 'Second phone'
      field: 'secondPhone'
      placeholder: 'Second phone'
    }
  | {
      fieldLabel: 'Driving License'
      field: 'drivingLicense'
      placeholder: 'Driving License'
    }
  | {
      fieldLabel: 'Security clearance'
      field: 'securityClearance'
      placeholder: 'Security clearance'
    }
  | {
      fieldLabel: 'Marital status'
      field: 'maritalStatus'
      placeholder: 'Marital status'
    }
  | {
      fieldLabel: 'Military Service'
      field: 'military'
      placeholder: 'Military Service'
    }
  | {
      fieldLabel: 'Smoking'
      field: 'smoking'
      placeholder: 'Smoking'
    }
  | {
      fieldLabel: 'Height'
      field: 'height'
      placeholder: 'Height'
    }
  | {
      fieldLabel: 'Weight'
      field: 'weight'
      placeholder: 'Weight'
    }

// export type AdditionalBaseType = (typeof personalDetailsField)[number]

// export type AdditionalFieldLabel = AdditionalBaseType['fieldLabel']
// export type AdditionalField = Extract<
//   AdditionalBaseType,
//   { fieldLabel: AdditionalFieldLabel }
// >['field']

// export type AdditionalFieldType = {
//   fieldLabel: AdditionalFieldLabel
//   field: AdditionalField
// }

/*
<span class="ml-1.5">Passport or Id</span>
<span class="ml-1.5">Nationality</span>
<span class="ml-1.5">Date of Birth</span>
<span class="ml-1.5">Visa</span>
<span class="ml-1.5">Availability</span>
<span class="ml-1.5">Gender/Pronoun</span>
<span class="ml-1.5">Disability</span>
<span class="ml-1.5">Work mode</span>
<span class="ml-1.5">Relocation</span>
<span class="ml-1.5">Expected salary</span>
<span class="ml-1.5">Second phone</span>
<span class="ml-1.5">Driving License</span>
<span class="ml-1.5">Security clearance</span>
<span class="ml-1.5">Marital status</span>
<span class="ml-1.5">Military Service</span>
<span class="ml-1.5">Smoking</span>
<span class="ml-1.5">Height</span>
<span class="ml-1.5">Weight</span>
*/
