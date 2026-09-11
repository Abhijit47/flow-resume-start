import { CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'

/*
{"customizationUpdates":[{"value":{"show":true,"grayscale":false,"size":"xs"},"path":"header.photo"}]}
{"customizationUpdates":[{"value":{"show":true,"grayscale":false,"size":"s"},"path":"header.photo"}]}
{"customizationUpdates":[{"value":{"show":true,"grayscale":false,"size":"m"},"path":"header.photo"}]}
{"customizationUpdates":[{"value":{"show":true,"grayscale":false,"size":"l"},"path":"header.photo"}]}
{"customizationUpdates":[{"value":{"show":true,"grayscale":false,"size":"xl"},"path":"header.photo"}]}
 */

// type PhotoSizeUnion = 'xs' | 's' | 'm' | 'l' | 'xl'

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'

export default function PhotoSize() {
  const {
    customization: { header },
    updateHeader,
  } = useCustomizationStore()

  return (
    <CardContent className={'space-y-4'}>
      <CardHeader>
        <CardTitle>Size</CardTitle>
      </CardHeader>
      <ToggleGroup
        type="single"
        size={'lg'}
        className={'gap-4'}
        value={header.photo.size}
        onValueChange={(value) => {
          if (value) {
            updateHeader({
              ...header,
              photo: {
                ...header.photo,
                size: value,
                show: true,
                grayscale: false,
              },
            })
          }
        }}
      >
        <ToggleGroupItem value="xs" className={cn('group', toggleState)}>
          XS
        </ToggleGroupItem>
        <ToggleGroupItem value="s" className={cn('group', toggleState)}>
          S
        </ToggleGroupItem>
        <ToggleGroupItem value="m" className={cn('group', toggleState)}>
          M
        </ToggleGroupItem>
        <ToggleGroupItem value="l" className={cn('group', toggleState)}>
          L
        </ToggleGroupItem>
        <ToggleGroupItem value="xl" className={cn('group', toggleState)}>
          XL
        </ToggleGroupItem>
      </ToggleGroup>
    </CardContent>
  )
}
