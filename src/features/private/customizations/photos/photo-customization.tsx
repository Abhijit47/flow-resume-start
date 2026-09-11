import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'
import PhotoPosition from './photo-position'
import PhotoShape from './photo-shape'
import PhotoSize from './photo-size'

const animationClass =
  'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

export default function PhotoCustomization() {
  const {
    customization: { header },
  } = useCustomizationStore()

  const isShow = header.photo.show

  return (
    <>
      {isShow ? (
        <div className={cn('space-y-6 border-l-2', animationClass)}>
          <PhotoPosition />

          <PhotoSize />

          <PhotoShape />
        </div>
      ) : null}
    </>
  )
}
