import { IconColumns, IconMenu2 } from '@tabler/icons-react'
import {
  FileTextIcon,
  GripVerticalIcon,
  IdCardIcon,
  ImageIcon,
  MusicIcon,
  PlusIcon,
  VideoIcon,
} from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import {
  Sortable,
  SortableItem,
  SortableItemHandle,
} from '#/components/extends/sortable'
import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import { Label } from '#/components/ui/label'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'

interface SortableItem {
  id: string
  title: string
  description: string
  type: 'image' | 'document' | 'audio' | 'video'
  size: string
}

const defaultItems: SortableItem[] = [
  {
    id: '1',
    title: 'Product Demo',
    description: 'Main product image',
    type: 'image',
    size: '2.4 MB',
  },
  {
    id: '2',
    title: 'Product Specification',
    description: 'Technical details document',
    type: 'document',
    size: '1.2 MB',
  },
  {
    id: '3',
    title: 'Product Demo Video',
    description: 'How to use the product',
    type: 'video',
    size: '15.7 MB',
  },
  {
    id: '4',
    title: 'Product Audio Guide',
    description: 'Audio instructions',
    type: 'audio',
    size: '8.3 MB',
  },
  {
    id: '5',
    title: 'Product Specification',
    description: 'Additional product view',
    type: 'image',
    size: '3.1 MB',
  },
]

const getTypeIcon = (type: SortableItem['type']) => {
  switch (type) {
    case 'image':
      return <ImageIcon className="w-4 h-4" />
    case 'document':
      return <FileTextIcon className="w-4 h-4" />
    case 'audio':
      return <MusicIcon className="w-4 h-4" />
    case 'video':
      return <VideoIcon className="w-4 h-4" />
  }
}

const getTypeColor = (type: SortableItem['type']) => {
  switch (type) {
    case 'image':
      return 'primary-light'
    case 'document':
      return 'success-light'
    case 'audio':
      return 'destructive-light'
    case 'video':
      return 'info-light'
  }
}

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'

const animationClass =
  'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

export default function Layout() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Layout</CardTitle>
      </CardHeader>

      <LayoutCols />

      <HeaderPosition />

      <ColumnWidth />

      <SectionLayout />
    </Card>
  )
}

function SectionLayout() {
  const [items, setItems] = useState<SortableItem[]>(defaultItems)

  const handleValueChange = (newItems: SortableItem[]) => {
    setItems(newItems)

    // Show toast with new order
    toast.success('Items reordered successfully!', {
      description: newItems
        .map((item, index) => `${index + 1}. ${item.title}`)
        .join(', '),
    })
  }

  const getItemValue = (item: SortableItem) => item.id

  return (
    <CardContent className={'space-y-2'}>
      <CardTitle>Change Section Layout</CardTitle>
      <Card className={'bg-muted'}>
        <CardContent className={'flex flex-col items-center justify-center'}>
          <div>
            <IdCardIcon className={'size-8'} />
          </div>
          <CardDescription>Personal Details</CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Sortable
            value={items}
            onValueChange={handleValueChange}
            getItemValue={getItemValue}
            strategy="horizontal"
            className="space-y-2"
          >
            {items.map((item) => (
              <SortableItem key={item.id} value={item.id}>
                <div
                  className="flex items-center gap-3 bg-background hover:bg-accent/50 p-3 border border-border rounded-md transition-colors cursor-pointer"
                  onClick={() => {}}
                >
                  <SortableItemHandle className="text-muted-foreground hover:text-foreground">
                    <GripVerticalIcon className="w-4 h-4" />
                  </SortableItemHandle>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    {getTypeIcon(item.type)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-xs truncate">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge
                      // variant={getTypeColor(item.type)}
                      variant={'outline'}
                    >
                      {item.type}
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      {item.size}
                    </span>
                  </div>
                </div>
              </SortableItem>
            ))}
          </Sortable>
        </CardContent>
      </Card>
    </CardContent>
  )
}

function LayoutCols() {
  // const [columns, setColumns] = useState('one')

  const {
    customization: { layout },
    updateLayout,
  } = useCustomizationStore()

  function handleColumnChange(value: string) {
    // setColumns(value)

    /*
     changes was happened
     
     for one =>         colsFromDetails: { top: 'one', left: 'two', right: 'two' },
     for two =>         colsFromDetails: { top: 'two', left: 'two', right: 'two' },
     for three = >      colsFromDetails: { top: 'mix', left: 'mix', right: 'mix' },
     
     
     */

    switch (value) {
      case 'one':
        // setColumns(value)

        updateLayout({
          ...layout,
          colsFromDetails: { top: 'one', left: 'two', right: 'two' },
        })

        toast.success('Columns changed successfully!' + value)
        break
      case 'two':
        // setColumns(value)

        updateLayout({
          ...layout,
          colsFromDetails: { top: 'two', left: 'two', right: 'two' },
          detailsPosition: 'top',
        })

        toast.success('Columns changed successfully!' + value)
        break
      case 'mix':
        // setColumns(value)

        updateLayout({
          ...layout,
          colsFromDetails: { top: 'mix', left: 'mix', right: 'mix' },
          detailsPosition: 'top',
        })

        toast.success('Columns changed successfully!' + value)
        break
    }
  }

  return (
    <CardContent className={'space-y-2'}>
      <CardTitle>Columns</CardTitle>

      <ToggleGroup
        type="single"
        value={layout.colsFromDetails.top}
        onValueChange={handleColumnChange}
        variant="outline"
        spacing={2}
        size="lg"
        className={'grid grid-cols-3 gap-2 w-full'}
      >
        <ToggleGroupItem
          value="one"
          aria-label="One"
          className={cn(
            'flex flex-col justify-center items-center rounded-xl w-full h-16',
            toggleState,
          )}
        >
          <IconMenu2 className={'size-16'} />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="two"
          aria-label="Two"
          className={cn(
            'flex flex-col justify-center items-center rounded-xl w-full h-16',
            toggleState,
          )}
        >
          <IconColumns className={'size-16'} />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="mix"
          aria-label="Mix"
          className={cn(
            'flex flex-col justify-center items-center rounded-xl w-full h-16',
            toggleState,
          )}
        >
          <IconMix />
        </ToggleGroupItem>
      </ToggleGroup>
    </CardContent>
  )
}

function HeaderPosition() {
  const {
    customization: { layout },
    updateLayout,
  } = useCustomizationStore()

  // if top is two or mix show only two layout options  (side by side , in top)
  const isShowHeaderPosition = layout.colsFromDetails.top !== 'one'

  function handleHeaderPositionChange(val: string) {
    switch (val) {
      case 'top':
        updateLayout({
          ...layout,
          detailsPosition: 'top',
        })

        toast.success('Header position changed successfully!' + val)
        break
      case 'left':
        updateLayout({
          ...layout,
          detailsPosition: 'left',
        })

        toast.success('Header position changed successfully!' + val)
        break
      case 'right':
        updateLayout({
          ...layout,
          detailsPosition: 'right',
        })

        toast.success('Header position changed successfully!' + val)
        break
    }
  }

  return (
    <>
      {isShowHeaderPosition && (
        <CardContent className={cn(animationClass, 'space-y-4')}>
          <CardTitle>Header Position</CardTitle>
          <ToggleGroup
            type="single"
            value={layout.detailsPosition}
            onValueChange={handleHeaderPositionChange}
            variant="outline"
            spacing={2}
            size="lg"
            className={'grid grid-cols-3 gap-2 w-full'}
          >
            <ToggleGroupItem
              value="top"
              aria-label="Top"
              className={cn(
                'flex flex-col justify-center items-center rounded-xl w-full h-16',
                toggleState,
              )}
            >
              Top
            </ToggleGroupItem>
            <ToggleGroupItem
              value="left"
              aria-label="Left"
              className={cn(
                'flex flex-col justify-center items-center rounded-xl w-full h-16',
                toggleState,
              )}
            >
              Left
            </ToggleGroupItem>
            <ToggleGroupItem
              value="right"
              aria-label="Right"
              className={cn(
                'flex flex-col justify-center items-center rounded-xl w-full h-16',
                toggleState,
              )}
            >
              Right
            </ToggleGroupItem>
          </ToggleGroup>
        </CardContent>
      )}
    </>
  )
}

function ColumnWidth() {
  const {
    customization: { layout },
    updateLayout,
  } = useCustomizationStore()

  const isShowColumnWidth = layout.colsFromDetails.top !== 'one'

  // const isColsModeTwo = layout.colsFromDetails.top === 'two'

  // const isColsModeMix = layout.colsFromDetails.top === 'mix'

  /*
    pick out the left or right width based on layout.detailsPosition = top/left/right
    colWidthsFromDetails: {
      top: {
          leftWidth: number;
          rightWidth: number;
      };
      left: {
          leftWidth: number;
          rightWidth: number;
      };
      right: {
        leftWidth: number;
        rightWidth: number;
      };
  };
  */

  // on the fly computing
  const currentWidth =
    layout.colWidthsFromDetails[
      layout.detailsPosition as 'top' | 'left' | 'right'
    ]

  function handleWidth(direction: 'left' | 'right') {
    // when left increse right should be decrease
    // min 20 and max 80 for any side either left or right

    /*
  layout: {
    colsFromDetails: { top: 'mix', left: 'mix', right: 'mix' },
    detailsPosition: 'top', // left/right/top
    colWidthsFromDetails: {
      top: { leftWidth: 79, rightWidth: 21 }, // if layout.detailsPosition = top  and isColsModeTwo and isColsModeMix same
      left: { leftWidth: 40, rightWidth: 60 }, // if layout.detailsPosition = left and isColsModeTwo and isColsModeMix same
      right: { leftWidth: 60, rightWidth: 40 }, // if layout.detailsPosition = right and isColsModeTwo and isColsModeMix same
    },
  },
  */

    if (direction === 'left') {
      if (currentWidth.leftWidth === 80) return
      // setWidth({
      //   left: currentWidth.leftWidth + 1,
      //   right: currentWidth.rightWidth - 1,
      // })

      updateLayout({
        ...layout,
        colWidthsFromDetails: {
          ...layout.colWidthsFromDetails,
          [layout.detailsPosition]: {
            leftWidth: currentWidth.leftWidth + 1,
            rightWidth: currentWidth.rightWidth - 1,
          },
        },
      })
    }

    if (direction === 'right') {
      if (currentWidth.rightWidth === 80) return
      // setWidth({
      //   left: currentWidth.leftWidth - 1,
      //   right: currentWidth.rightWidth + 1,
      // })

      updateLayout({
        ...layout,
        colWidthsFromDetails: {
          ...layout.colWidthsFromDetails,
          [layout.detailsPosition]: {
            leftWidth: currentWidth.leftWidth - 1,
            rightWidth: currentWidth.rightWidth + 1,
          },
        },
      })
    }
  }

  return (
    <>
      {isShowColumnWidth ? (
        <CardContent className={cn('space-y-6', animationClass)}>
          <CardHeader>
            <CardTitle>Column Width</CardTitle>
          </CardHeader>

          <div className="flex items-center gap-2">
            <div
              className="space-y-2"
              style={{
                width: `${currentWidth.leftWidth}%`,
              }}
            >
              <Label>Left {currentWidth.leftWidth} %</Label>
              <Button
                size={'lg'}
                variant={'outline'}
                onClick={() => handleWidth('left')}
                className="w-full"
                disabled={currentWidth.leftWidth === 80}
              >
                <PlusIcon />
              </Button>
            </div>

            <div
              className="space-y-2"
              style={{
                width: `${currentWidth.rightWidth}%`,
              }}
            >
              <Label>Right {currentWidth.rightWidth} %</Label>
              <Button
                size={'lg'}
                variant={'outline'}
                onClick={() => handleWidth('right')}
                className="w-full"
                disabled={currentWidth.rightWidth === 80}
              >
                <PlusIcon />
              </Button>
            </div>
          </div>
        </CardContent>
      ) : null}
    </>
  )
}

function IconMix() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 47 23"
      // className="w-12 xssm:w-14"
      className={'size-16'}
    >
      <rect
        width="20.701"
        height="4.878"
        x="0.818"
        y="0.953"
        fill="currentColor"
        stroke="currentColor"
        rx="1.5"
      ></rect>
      <rect
        width="20.701"
        height="4.878"
        x="25.479"
        y="0.953"
        fill="currentColor"
        stroke="currentColor"
        rx="1.5"
      ></rect>
      <rect
        width="45.361"
        height="4.878"
        x="0.818"
        y="8.896"
        fill="currentColor"
        stroke="currentColor"
        rx="1.5"
      ></rect>
      <rect
        width="30.565"
        height="4.878"
        x="0.818"
        y="16.838"
        fill="currentColor"
        stroke="currentColor"
        rx="1.5"
      ></rect>
      <rect
        width="10.837"
        height="4.878"
        x="35.345"
        y="16.838"
        fill="currentColor"
        stroke="currentColor"
        rx="1.5"
      ></rect>
    </svg>
  )
}

export const Example = () => {
  const [width, setWidth] = useState({
    left: 79,
    right: 21,
  })

  function handleWidth(val: string) {
    // when left increse right should be decrease
    // min 20 and max 80 for any side either left or right

    if (val === 'left') {
      if (width.left === 80) return
      setWidth({
        left: width.left + 1,
        right: width.right - 1,
      })
    }
    if (val === 'right') {
      if (width.right === 80) return
      setWidth({
        left: width.left - 1,
        right: width.right + 1,
      })
    }
  }
  return (
    <div className="flex ring-1 ring-red-400 w-full">
      <div
        className="group flex flex-col pr-2 w-full"
        style={{ width: `${width.left}%` }}
      >
        <div className="text-sm whitespace-nowrap">
          <span>Left</span>
          <span className="text-xs">{width.left} %</span>
        </div>
        <button
          type="button"
          className="flex justify-center items-center hover:opacity-80 border border-uncheckedGray border-solid rounded-xl focus-visible:outline-blue-600 w-full h-10 font-bold appearance-none touch-manipulation cursor-pointer"
          onClick={() => handleWidth('left')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19 19"
            fill="currentColor"
            className="group-hover:fill-brandDarkBlue w-[1.15em] text-gray-500"
          >
            <path
              fill-rule="evenodd"
              d="M10.8 2.452a1.3 1.3 0 10-2.6 0v5.316H2.885a1.3 1.3 0 000 2.6H8.2v5.315a1.3 1.3 0 002.6 0v-5.315h5.315a1.3 1.3 0 100-2.6H10.8V2.452z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className="group flex flex-col pl-2 w-full"
        style={{ width: `${width.right}%` }}
      >
        <div className="text-sm whitespace-nowrap">
          <span>Right</span>
          <span className="text-xs">{width.right} %</span>
        </div>
        <button
          type="button"
          className="flex justify-center items-center hover:opacity-80 border border-uncheckedGray border-solid rounded-xl focus-visible:outline-blue-600 w-full h-10 font-bold appearance-none touch-manipulation cursor-pointer"
          onClick={() => handleWidth('right')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19 19"
            fill="currentColor"
            className="group-hover:fill-brandDarkBlue w-[1.15em] text-gray-500"
          >
            <path
              fill-rule="evenodd"
              d="M10.8 2.452a1.3 1.3 0 10-2.6 0v5.316H2.885a1.3 1.3 0 000 2.6H8.2v5.315a1.3 1.3 0 002.6 0v-5.315h5.315a1.3 1.3 0 100-2.6H10.8V2.452z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  )
}
