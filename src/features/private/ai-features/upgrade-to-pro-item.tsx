import { Button } from '#/components/ui/button'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from '#/components/ui/item'

type UpgradeToProItemProps = {
  onToggle: () => void
}

export default function UpgradeToProItem(props: UpgradeToProItemProps) {
  const { onToggle } = props
  return (
    <Item variant="outline">
      <ItemContent>
        <ItemTitle>Our AI features are available on our Pro plan.</ItemTitle>
        <ItemDescription>
          Upgrade to Pro to unlock the full potential of our AI tools and take
          your resume to the next level.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="lg" onClick={onToggle}>
          Upgrade to Pro
        </Button>
      </ItemActions>
    </Item>
  )
}
