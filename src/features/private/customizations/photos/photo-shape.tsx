import type { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'

import { Button } from '#/components/ui/button'
import { CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '#/components/ui/dialog'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'

const toggleStateShape =
  'ring-1 data-[state=on]:ring-2 data-[state=on]:ring-primary'

type PhotoShapeUnion =
  'round' | 'square' | 'squareRounded' | 'portrait' | 'portraitRounded'

/*
{"resumeId":"b9b34f83-3bea-4dbc-95be-6c06a3dd15cb",
"personalDetails":{
"age":"","visa":"","phone":"+91 7495062331",

// update here
"photo":{
"widthPct":0.5878894767783657,
"heightPct":0.5878894767783657,
"xPct":0.20606448340653133,
"yPct":0.2098961395257693,
"shape":"squareRounded",
"originalWidth":1024,
"originalHeight":1024,
"imageId":"avatar/vQp6rzEc5NbMsrq3WAQy_.jpeg"},

"gender":"Sint quidem magnam o",
"height":"",
"social":{
  "orcid":{"display":"Molestiae ut Nam ess"},
  "gitbook":{"display":"Eveniet corporis mo"},
  "linkedIn":{"display":"Nostrud voluptates p"}},
"weight":"",
"address":"Nisi architecto volu",
"smoking":"",
"website":"https://www.qedajurilezaj.ws",
"birthday":{"day":"","year":"","month":""},
"fullName":"Vanna Boyer",
"jobTitle":"Ut fugiat adipisci",
"military":"","passport":"240",
"workMode":"",
"portfolio":"",
"usAddress":false,
"disability":"",
"relocation":"Voluptatibus dolores",
"birthdayStr":"",
"nationality":"Ea et enim qui dolor",
"secondPhone":"",
"websiteLink":"",
"availability":"",
"detailsOrder":["displayEmail","phone","address","passport","gender","nationality","relocation","website","linkedIn","gitbook","orcid"],
"displayEmail":"lylyg@gmail.com",
"maritalStatus":"",
"portfolioLink":"",
"drivingLicense":"",
"expectedSalary":"",
"showPlaceholder":false,
"securityClearance":""}}
*/

/*
photo cropping
{"resumeId":"dbc793d3-3bba-4a2d-b427-934e69985d69","personalDetails":{"age":"","visa":"","phone":"+91 1458024121","photo":{"widthPct":0.9990009990009991,"heightPct":0.9990009990009991,"xPct":0.0004995004995004271,"yPct":0.0004995004995004271,"shape":"round","originalWidth":1024,"originalHeight":1024,"imageId":"avatar/ab-BS6LkGWexRFJBPm-xC.jpeg"},"gender":"","height":"","social":{},"weight":"","address":"Ipsa a commodi comm","smoking":"","website":"","birthday":{"day":"","year":"","month":""},"fullName":"Harlan Ferrell","jobTitle":"Aperiam placeat tot","military":"","passport":"","workMode":"","portfolio":"","usAddress":false,"disability":"","relocation":"","birthdayStr":"","nationality":"","secondPhone":"","websiteLink":"","availability":"","detailsOrder":["address","displayEmail","phone"],"displayEmail":"pikubiburo@gmail.com","maritalStatus":"","portfolioLink":"","drivingLicense":"","expectedSalary":"","showPlaceholder":false,"securityClearance":""}}

update this
"photo":{"widthPct":0.9990009990009991,"heightPct":0.9990009990009991,"xPct":0.0004995004995004271,"yPct":0.0004995004995004271,"shape":"round","originalWidth":1024,"originalHeight":1024,"imageId":"avatar/ab-BS6LkGWexRFJBPm-xC.jpeg"}
*/

export default function PhotoShape() {
  const [photoShape, setPhotoShape] = useState<PhotoShapeUnion>('round')
  const [photoCropDialogOpen, setPhotoCropDialogOpen] = useState(false)

  const {
    customization: { header },
    updateHeader,
  } = useCustomizationStore()

  return (
    <CardContent className={'space-y-4'}>
      <CardHeader>
        <CardTitle>Shape</CardTitle>
      </CardHeader>
      <ToggleGroup
        type="single"
        size={'lg'}
        className={'gap-4'}
        value={photoShape}
        onValueChange={(value) => {
          setPhotoShape(value as PhotoShapeUnion)
          setPhotoCropDialogOpen(true)
        }}
      >
        <ToggleGroupItem
          value="round"
          className={cn('group rounded-full size-9', toggleStateShape)}
        >
          &nbsp;
        </ToggleGroupItem>
        <ToggleGroupItem
          value="square"
          className={cn('group rounded-none size-9', toggleStateShape)}
        >
          &nbsp;
        </ToggleGroupItem>
        <ToggleGroupItem
          value="squareRounded"
          className={cn('group size-9', toggleStateShape)}
        >
          &nbsp;
        </ToggleGroupItem>
        <ToggleGroupItem
          value="portrait"
          className={cn('group rounded-none w-8 h-12', toggleStateShape)}
        >
          &nbsp;
        </ToggleGroupItem>
        <ToggleGroupItem
          value="portraitRounded"
          className={cn('group w-8 h-12', toggleStateShape)}
        >
          &nbsp;
        </ToggleGroupItem>
      </ToggleGroup>

      <PhotoCropper
        open={photoCropDialogOpen}
        onOpenChange={setPhotoCropDialogOpen}
      />
    </CardContent>
  )
}

type PhotoCropperProps = {
  open: boolean
  onOpenChange: Dispatch<SetStateAction<boolean>>
}

function PhotoCropper(props: PhotoCropperProps) {
  const { open, onOpenChange } = props

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">IMAGE CROPPER</div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
