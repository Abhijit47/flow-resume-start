import { FieldGroup } from '#/components/ui/field'
import AdditionalFields from './additional-fields'
import BaseDetails from './base-details'
import SocialLinks from './social-links'

export default function PersonalDetailsFields() {
  return (
    <div className={'col-span-full lg:col-span-5'}>
      <FieldGroup className={'gap-2'}>
        <BaseDetails />

        <AdditionalFields />

        <SocialLinks />
      </FieldGroup>
    </div>
  )
}
