import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '#/components/ui/item'
import { aiFeatures } from '#/constants/ai-features'

type FeatureItemsProps = {
  onToggle: () => void
}

export default function FeatureItems(props: FeatureItemsProps) {
  const { onToggle } = props
  return (
    <>
      {aiFeatures.map((item) => (
        <Item
          key={item.id}
          variant="outline"
          size={'default'}
          onClick={(ev) => {
            ev.stopPropagation()
            onToggle()
          }}
        >
          <ItemMedia variant={'image'} className={'bg-background'}>
            {<item.icon className={'size-6'} />}
          </ItemMedia>
          <ItemContent>
            <ItemTitle>
              {item.title}
              {item.tag === 'new' && <Badge>New</Badge>}
            </ItemTitle>
            <ItemDescription>{item.description}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button
              variant="outline"
              size="lg"
              className={'capitalize'}
              onClick={(ev) => {
                ev.stopPropagation()
                onToggle()
              }}
            >
              {item.btnText}
            </Button>
          </ItemActions>
        </Item>
      ))}
    </>
  )
}
