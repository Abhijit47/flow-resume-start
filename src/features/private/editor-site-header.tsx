import { Button } from '#/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '#/components/ui/dropdown-menu'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '#/components/ui/select'
import {
  IconGridDots,
  IconNotes,
  IconPalette,
  IconShare,
  IconWand,
} from '@tabler/icons-react'
import { Link, linkOptions, useLocation } from '@tanstack/react-router'
import { DownloadCloudIcon, EllipsisVertical } from 'lucide-react'

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
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) sticky top-0 left-0 w-full bg-background z-50">
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
          <Select>
            <SelectTrigger className="w-full max-w-48">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent popover="hint" position="popper">
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

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
