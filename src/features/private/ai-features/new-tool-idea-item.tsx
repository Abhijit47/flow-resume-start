import { Button } from '#/components/ui/button'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from '#/components/ui/item'

type NewToolIdeaItemProps = {
  onToggle: () => void
}

export default function NewToolIdeaItem(props: NewToolIdeaItemProps) {
  const { onToggle: toggleNewIdeaDialog } = props

  return (
    <Item variant="outline">
      <ItemContent>
        <ItemTitle>Got an idea for a new AI tool?</ItemTitle>
        <ItemDescription>
          We are currently working on new features 🏭
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="link" size="lg" onClick={toggleNewIdeaDialog}>
          Let us know
        </Button>
      </ItemActions>
    </Item>
  )
}
