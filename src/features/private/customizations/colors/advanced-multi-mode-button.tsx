import { ToggleGroupItem } from '#/components/ui/toggle-group'
import { useCustomizationStore } from '#/store/customization-store'

type AdvancedMultiModeButtonProps = {
  isShowAdvancedMultiModeBtn: boolean
}

export default function AdvancedMultiModeButton(
  props: AdvancedMultiModeButtonProps,
) {
  const { isShowAdvancedMultiModeBtn } = props

  const {
    customization: { colors },
  } = useCustomizationStore()

  return (
    <>
      {isShowAdvancedMultiModeBtn ? (
        <div className={'flex flex-col items-center justify-center gap-1'}>
          <ToggleGroupItem
            value="multi"
            className={
              'group gap-4 ring-accent ring-1 data-[state=on]:ring-foreground'
            }
          >
            <div
              className={'inline-flex flex-col gap-1'}
              style={{
                backgroundColor: colors.advanced.multi.strong.backgroundColor,
              }}
            >
              <span className="w-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 31 5"
                  className="w-full h-full"
                >
                  <path
                    fill={colors.advanced.multi.strong.textColor}
                    d="M16.611 29.592V6.826h8.19V.221H.804v6.605h8.234v22.766h7.574z"
                  ></path>
                </svg>
              </span>
              <span className="w-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 31 5"
                  className="w-full"
                >
                  <path
                    fill={colors.advanced.multi.strong.accentColor}
                    d="M0.838 0.35H30.768V4.35H0.838z"
                  ></path>
                </svg>
              </span>
            </div>

            <div
              className="flex flex-col justify-end items-center pb-1.75 w-12"
              style={{
                backgroundColor: colors.advanced.multi.light.backgroundColor,
              }}
            >
              <div className="w-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 31 5"
                  className="w-full"
                >
                  <path
                    fill={colors.advanced.multi.light.textColor}
                    d="M16.611 29.592V6.826h8.19V.221H.804v6.605h8.234v22.766h7.574z"
                  ></path>
                </svg>
              </div>
              <div className="w-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 31 5"
                  className="w-full h-full"
                >
                  <path
                    fill={colors.advanced.multi.light.accentColor}
                    d="M0.838 0.35H30.768V4.35H0.838z"
                  ></path>
                </svg>
              </div>
            </div>
          </ToggleGroupItem>
          <span>Multi</span>
        </div>
      ) : null}
    </>
  )
}
