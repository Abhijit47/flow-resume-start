import { CheckIcon } from 'lucide-react'

import { ToggleGroupItem } from '#/components/ui/toggle-group'
import { useCustomizationStore } from '#/store/customization-store'

type BasicMultiModeButtonProps = {
  isShowBasicMultiModeBtn: boolean
}

export default function BasicMultiModeButton(props: BasicMultiModeButtonProps) {
  const { isShowBasicMultiModeBtn } = props

  const {
    customization: { colors },
  } = useCustomizationStore()

  return (
    <>
      {isShowBasicMultiModeBtn ? (
        <div className={'flex flex-col items-center justify-center gap-1'}>
          <ToggleGroupItem
            value="multi"
            className={
              'w-24 group ring-accent ring-1 data-[state=on]:ring-foreground'
            }
          >
            <div
              className="flex flex-col justify-end items-center w-full"
              style={{
                backgroundColor: colors.basic.multi.backgroundColor,
              }}
            >
              <div className="w-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 25 35"
                  className="w-full"
                >
                  <path
                    fill={colors.basic.multi.textColor}
                    d="M16.611 29.592V6.826h8.19V.221H.804v6.605h8.234v22.766h7.574z"
                  ></path>
                </svg>
              </div>
              <div className="w-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 31 5"
                  className="w-full"
                >
                  <path
                    fill={colors.basic.multi.accentColor}
                    d="M0.838 0.35H30.768V4.35H0.838z"
                  ></path>
                </svg>
              </div>
            </div>
            {/* <span className={'text-base font-semibold'}>T</span> */}
            <div
              style={{ backgroundColor: colors.basic.multi.accentColor }}
              className={'size-9 rounded-tr-lg rounded-br-lg relative'}
            >
              <CheckIcon
                className={
                  'group-data-[state=off]:opacity-0 group-data-[state=on]:opacity-100 absolute inset-2.5 text-foreground z-10'
                }
              />
            </div>
          </ToggleGroupItem>
          <span>Multi</span>
        </div>
      ) : null}
    </>
  )
}
