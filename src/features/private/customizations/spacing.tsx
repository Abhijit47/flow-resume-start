import { Card, CardHeader, CardTitle } from '#/components/ui/card'
import LeftAndRightMargin from './spacings/left-and-right-margin'
import LineHeight from './spacings/line-height'
import SpaceBetween from './spacings/space-between'
import TopAndBottomMargin from './spacings/top-and-bottom-margin'

export default function Spacing() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Spacing</CardTitle>
      </CardHeader>

      <LineHeight />

      <SpaceBetween />

      <LeftAndRightMargin />

      <TopAndBottomMargin />
    </Card>
  )
}
