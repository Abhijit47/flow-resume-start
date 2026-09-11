// import {
//   ColorPicker,
//   ColorPickerAlpha,
//   ColorPickerEyeDropper,
//   ColorPickerFormat,
//   ColorPickerHue,
//   ColorPickerOutput,
//   ColorPickerSelection,
// } from '#/components/extends/color-picker'
// import {
//   Popover,
//   PopoverContent,
//   PopoverDescription,
//   PopoverHeader,
//   PopoverTitle,
//   PopoverTrigger,
// } from '#/components/ui/popover'
// import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
// import { staticColorsList } from '#/constants/customization/color-section'
// import { rgbaToHex } from '#/lib/utils'
// import { useCustomizationStore } from '#/store/customization-store'
// import { CheckIcon } from 'lucide-react'
// import { Fragment } from 'react'

// type PredefinedColorsProps = {
//   // isShowPredefinedColors: boolean
//   // onUpdateSingleColors: (newColor: string) => void

//   selectedPredefinedColor: string // local state would be better to manage
//   onChangePredefinedColor: (newColor: string) => void
//   isOpenColorPicker: boolean
//   onOpenColorPicker: (isOpen: boolean) => void
//   isLastColorSelected: boolean
//   onLastColorSelected: (isSelected: boolean) => void
//   selctedBasicMultiCustomColor: string
//   // onUpdateSingleCustomColors: (newColor: string) => void
// }

// type Mode = 'basic' | 'advanced' | 'border'

// export default function PredefinedColors(props: PredefinedColorsProps) {
//   const {
//     // isShowPredefinedColors,
//     selectedPredefinedColor, // required
//     onChangePredefinedColor, // required
//     // onUpdateSingleColors,
//     isOpenColorPicker,
//     onOpenColorPicker,
//     onLastColorSelected,
//     selctedBasicMultiCustomColor, // may be remove
//     // onUpdateSingleCustomColors,
//   } = props

//   const {
//     customization: { colors },
//     updateColors,
//   } = useCustomizationStore()

//   const selectedMode = colors[colors.mode as Mode].selected

//   const isShowPredefinedColors =
//     (colors.mode === 'basic' && selectedMode === 'single') ||
//     (colors.mode === 'advanced' && selectedMode === 'single') ||
//     (colors.mode === 'border' && selectedMode === 'single') ||
//     (colors.mode === 'border' && selectedMode === 'image')

//   function handleUpdateSingleColors(newColor: string) {
//     // 1. value.basic.single
//     // 2. value.advanced.single
//     // 3. value.border.single all there should be updated at same time

//     // setValue((prevValue) => ({
//     //   ...prevValue,
//     //   basic: {
//     //     ...prevValue.basic,
//     //     single: newColor,
//     //   },
//     //   advanced: {
//     //     ...prevValue.advanced,
//     //     single: newColor,
//     //   },
//     //   border: {
//     //     ...prevValue.border,
//     //     single: newColor,
//     //   },
//     // }))

//     updateColors({
//       basic: {
//         ...colors.basic,
//         single: newColor,
//       },
//       advanced: {
//         ...colors.advanced,
//         single: newColor,
//       },
//       border: {
//         ...colors.border,
//         single: newColor,
//       },
//     })
//   }

//   function handleUpdateSingleCustomColors(newColor: string) {
//     /**
//        * basic.single	"#9b3333"
//           basic.singleCustom	"#9b3333"
//        * path	"colors.basic.single"
//          value	"#9b3333"

//        * path	"colors.advanced.single"
//          value	"#9b3333"

//        * path	"colors.border.single"
//          value	"#9b3333"
//        */
//     // setSelectedBasicMultiCustomColor(newColor)
//     // setValue((prevValue) => ({
//     //   ...prevValue,
//     //   basic: {
//     //     ...prevValue.basic,
//     //     single: newColor,
//     //     singleCustom: newColor,
//     //   },
//     //   advanced: {
//     //     ...prevValue.advanced,
//     //     single: newColor,
//     //   },
//     //   border: {
//     //     ...prevValue.border,
//     //     single: newColor,
//     //   },
//     // }))

//     updateColors({
//       ...colors,
//       basic: {
//         ...colors.basic,
//         single: newColor,
//         singleCustom: newColor,
//       },
//       advanced: {
//         ...colors.advanced,
//         single: newColor,
//       },
//       border: {
//         ...colors.border,
//         single: newColor,
//       },
//     })
//   }

//   return (
//     <>
//       {isShowPredefinedColors ? (
//         <ToggleGroup
//           value={selectedPredefinedColor}
//           onValueChange={(value) => {
//             if (value === '') {
//               onChangePredefinedColor('#000000')
//               handleUpdateSingleColors('#000000')
//               return
//             }
//             if (value.includes('conic-gradient')) {
//               onLastColorSelected(true)
//               onChangePredefinedColor('')
//               return
//             }

//             if (!value.includes('conic-gradient')) {
//               onChangePredefinedColor(value)
//               handleUpdateSingleColors(value)
//             }
//           }}
//           variant="outline"
//           type="single"
//           defaultValue="none"
//           className={
//             'flex-wrap gap-2 animate-in fade-in slide-in-from-top-8 duration-300 slide-out-to-top-8 max-w-sm'
//           }
//           size={'lg'}
//         >
//           <ToggleGroupItem
//             value="#000000"
//             aria-label="Toggle none"
//             className={
//               'rounded-full group bg-white! ring-1 size-10 cursor-pointer hover:opacity-80 relative after:absolute after:top-4.5 after:-left-0.5 after:w-10 after:rotate-135 after:h-0.5 after:bg-background after:content-[""]'
//             }
//           >
//             <CheckIcon
//               className={
//                 'group-data-[state=off]:opacity-0 group-data-[state=on]:opacity-100 absolute inset-2.75 text-background z-10'
//               }
//             />
//           </ToggleGroupItem>
//           {staticColorsList.map((item, idx) => {
//             const isLastItem = idx === staticColorsList.length - 1

//             return (
//               <Fragment key={item.id}>
//                 {isLastItem ? (
//                   <Popover
//                     open={isOpenColorPicker}
//                     onOpenChange={onOpenColorPicker}
//                   >
//                     <PopoverTrigger asChild>
//                       <ToggleGroupItem
//                         value={item.bgColor}
//                         aria-label={`Toggle ${item.bgColor}`}
//                         key={item.id}
//                         style={{ background: item.bgColor }}
//                         className={
//                           'rounded-full group ring-1 size-10 cursor-pointer hover:opacity-80 data-[state=open]:ring-violet-600 data-[state=on]:ring-2 relative'
//                         }
//                       >
//                         <CheckIcon
//                           className={
//                             'group-data-[state=closed]:opacity-0 group-data-[state=open]:opacity-100 absolute inset-2.75 text-foreground z-10'
//                           }
//                         />
//                       </ToggleGroupItem>
//                     </PopoverTrigger>
//                     <PopoverContent alignOffset={120} arrowPadding={150}>
//                       <PopoverHeader>
//                         <PopoverTitle>Custom Color Picker</PopoverTitle>
//                         <PopoverDescription>
//                           Choose your desired color from the color picker below.
//                         </PopoverDescription>
//                       </PopoverHeader>
//                       <ColorPicker
//                         className="bg-background shadow-sm p-4 border-border rounded-md w-full"
//                         value={selctedBasicMultiCustomColor}
//                         onValueChange={(e) => {
//                           // console.log('Selected color:', e)
//                           console.log('hex', rgbaToHex(e as number[]))
//                           handleUpdateSingleCustomColors(
//                             rgbaToHex(e as number[]),
//                           )
//                           // toast.success(`Selected color: ${e}`)
//                         }}
//                       >
//                         <ColorPickerSelection />
//                         <div className="flex items-center gap-4">
//                           <ColorPickerEyeDropper />
//                           <div className="gap-1 grid w-full">
//                             <ColorPickerHue />
//                             <ColorPickerAlpha />
//                           </div>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <ColorPickerOutput />
//                           <ColorPickerFormat />
//                         </div>
//                       </ColorPicker>
//                     </PopoverContent>
//                   </Popover>
//                 ) : (
//                   <ToggleGroupItem
//                     value={item.bgColor}
//                     aria-label={`Toggle ${item.bgColor}`}
//                     key={item.id}
//                     style={{ backgroundColor: item.bgColor }}
//                     className={
//                       'rounded-full group ring-1 size-10 cursor-pointer hover:opacity-80 data-[state=on]:ring-primary data-[state=on]:ring-2 relative'
//                     }
//                   >
//                     <CheckIcon
//                       className={
//                         'group-data-[state=off]:opacity-0 group-data-[state=on]:opacity-100 absolute inset-2.75 text-foreground z-10'
//                       }
//                     />
//                   </ToggleGroupItem>
//                 )}
//               </Fragment>
//             )
//           })}
//         </ToggleGroup>
//       ) : null}
//     </>
//   )
// }
