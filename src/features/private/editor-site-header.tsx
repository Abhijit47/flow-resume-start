import { Button } from '#/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '#/components/ui/dropdown-menu'
import { Item, ItemActions, ItemContent, ItemTitle } from '#/components/ui/item'
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from '#/components/ui/popover'
import {
  IconGridDots,
  IconNotes,
  IconPalette,
  IconShare,
  IconWand,
} from '@tabler/icons-react'
import { Link, linkOptions, useLocation } from '@tanstack/react-router'
import {
  CopyIcon,
  DownloadCloudIcon,
  EditIcon,
  EllipsisVertical,
  EllipsisVerticalIcon,
  Trash2Icon,
} from 'lucide-react'

const headerLinks = linkOptions([
  {
    id: crypto.randomUUID(),
    name: 'Overview',
    to: '/resumes',
    icon: <IconGridDots className={'size-4'} />,
    active: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'content',
    to: '/resume/content',
    icon: <IconNotes className={'size-4'} />,
    active: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'customize',
    to: '/resume/customization',
    icon: <IconPalette className={'size-4'} />,
    active: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'ai-tools',
    to: '/resume/ai-tools',
    icon: <IconWand className={'size-4'} />,
    active: false,
  },
])

export default function EditorSiteHeader() {
  const { pathname } = useLocation()

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) sticky top-0 left-0 w-full bg-background z-50">
      <nav className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <ul className={'flex items-center gap-4'}>
          {headerLinks.map((item) => (
            <li key={item.id}>
              <Button
                asChild
                variant={item.to === pathname ? 'outline' : 'ghost'}
              >
                <Link to={item.to}>
                  {item.icon} {item.name}
                </Link>
              </Button>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Resume 1</Button>
            </PopoverTrigger>
            <PopoverContent className="w-sm" align="end">
              <PopoverTitle>My Resumes</PopoverTitle>
              <Item variant="outline">
                <ItemContent>
                  <ItemTitle>Resume 1</ItemTitle>
                </ItemContent>
                <ItemActions>
                  <Button variant="outline" size="sm">
                    <CopyIcon />
                    Duplicate
                  </Button>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon-sm">
                        <EllipsisVerticalIcon />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <EditIcon />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Trash2Icon />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </ItemActions>
              </Item>
            </PopoverContent>
          </Popover>

          <Button variant="default" size="default" className="hidden sm:flex">
            Download
            <DownloadCloudIcon />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <EllipsisVertical className={'size-4'} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className={'w-fit'}>
              <DropdownMenuGroup>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuItem>
                  <DownloadCloudIcon className={'size-4'} />
                  Download via email
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconShare className={'size-4'} />
                  Get Shareable link
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  )
}
