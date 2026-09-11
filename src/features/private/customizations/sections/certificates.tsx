import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { cn } from '#/lib/utils'
import { useCustomizationStore } from '#/store/customization-store'
import CertificateBubbleModeOpts from './certificate-subitems/certificate-bubble-mode-opts'
import CertificateGridModeOpts from './certificate-subitems/certificate-grid-mode-opts'
import CertificateRowModeOpts from './certificate-subitems/certificate-row-mode-opts'
import CertificateTextModeOpts from './certificate-subitems/certificate-text-mode-opts'

/*
<div class="gap-2 grid grid-cols-3 mq5:grid-cols-5">
<label class="hover:opacity-80 cursor-pointer">
<input class="invisible fixed opacity-0" type="radio" name="skillDisplaySelected" value="grid">
<div class="flex justify-center items-center rounded-xl w-full h-10 text-sm capitalize cursor-pointer twChecked--checked">Grid</div></label>

<label class="hover:opacity-80 cursor-pointer">
<input class="invisible fixed opacity-0" type="radio" name="skillDisplaySelected" value="rows" checked="">
<div class="flex justify-center items-center rounded-xl w-full h-10 text-sm capitalize cursor-pointer twChecked--unchecked">Rows</div></label>

<label class="hover:opacity-80 cursor-pointer">
<input class="invisible fixed opacity-0" type="radio" name="skillDisplaySelected" value="text">
<div class="flex justify-center items-center rounded-xl w-full h-10 text-sm capitalize cursor-pointer twChecked--unchecked">Compact</div></label>

<label class="hover:opacity-80 cursor-pointer">
<input class="invisible fixed opacity-0" type="radio" name="skillDisplaySelected" value="bubble">
<div class="flex justify-center items-center rounded-xl w-full h-10 text-sm capitalize cursor-pointer twChecked--unchecked">Bubble</div></label>
</div>
*/

/*
{"customizationUpdates":[
  {"value":"grid","path":"certificateDisplay.selected"}
]}

{"customizationUpdates":[
  {"value":"text","path":"certificateDisplay.selected"},
  {"value":"newLine","path":"certificateDisplay.text"}
]}

{"customizationUpdates":[
  {"value":"text","path":"certificateDisplay.selected"},
  {"value":"wrap","path":"certificateDisplay.text"}
]}

{"customizationUpdates":[
  {"value":"bubble","path":"certificateDisplay.selected"}
]}
*/

export type CertificateDisplay = 'grid' | 'newLine' | 'wrap' | 'bubble'
export type CertificateDisplayGridColumns = 'one' | 'two' | 'three' | 'four'
export type CertificateSubinfoSeparator = 'colon' | 'dash' | 'bracket'
export type CertificateDisplayText = 'bullet' | 'pipe' | 'wrap'
export type CertificateDisplayLevel = 'text' | 'dots' | 'bar'

const toggleState = 'ring-1 ring-accent data-[state=on]:ring-foreground'
// const animationClass =
//   'animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8'

export default function EditCertificates() {
  const {
    customization: { certificateDisplay },
    updateCertificateDisplay,
  } = useCustomizationStore()

  const selectedCertificateMode = certificateDisplay.selected

  function handleCertificateModeUpdate(val: string) {
    switch (val) {
      case 'grid': {
        updateCertificateDisplay({
          ...certificateDisplay,
          selected: 'grid',
        })
        break
      }
      case 'rows': {
        updateCertificateDisplay({
          ...certificateDisplay,
          selected: 'rows',
          text: 'newLine',
        })
        break
      }
      case 'text': {
        updateCertificateDisplay({
          ...certificateDisplay,
          selected: 'text',
          text: 'wrap',
        })
        break
      }
      case 'bubble': {
        updateCertificateDisplay({
          ...certificateDisplay,
          selected: 'bubble',
        })
        break
      }
      default: {
        break
      }
    }
  }

  return (
    <Card className={''}>
      <CardHeader>
        <CardTitle>Certificates</CardTitle>
      </CardHeader>

      <CardContent>
        <ToggleGroup
          type="single"
          size={'lg'}
          className={'gap-3'}
          value={selectedCertificateMode}
          onValueChange={(value) => {
            if (value) {
              handleCertificateModeUpdate(value)
            }
          }}
        >
          <ToggleGroupItem value="grid" className={cn('group', toggleState)}>
            Grid
          </ToggleGroupItem>
          <ToggleGroupItem value="rows" className={cn('group', toggleState)}>
            Rows
          </ToggleGroupItem>
          <ToggleGroupItem value="text" className={cn('group', toggleState)}>
            Compact
          </ToggleGroupItem>
          <ToggleGroupItem value="bubble" className={cn('group', toggleState)}>
            Bubble
          </ToggleGroupItem>
        </ToggleGroup>
      </CardContent>

      <CardContent>
        <CertificateGridModeOpts />

        <CertificateRowModeOpts />

        <CertificateTextModeOpts />

        <CertificateBubbleModeOpts />

        {/* {selectedCertificateMode === 'bubble' ? (
          <div className={cn('space-y-4', animationClass)}>
            <div className={'space-y-4'}>
              <p>Subinfo Style</p>

              <ToggleGroup type="single">
                <ToggleGroupItem
                  value="colon"
                  className={cn('group', toggleState)}
                >
                  : Colon
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="dash"
                  className={cn('group', toggleState)}
                >
                  &mdash; Dash
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="bracket"
                  className={cn('group', toggleState)}
                >{`() Bracket`}</ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        ) : null} */}
      </CardContent>
    </Card>
  )
}
