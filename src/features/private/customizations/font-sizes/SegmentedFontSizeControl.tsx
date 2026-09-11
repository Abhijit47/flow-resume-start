'use client'

import { Minus, Plus } from 'lucide-react'
import { Slider as SliderPrimitive } from 'radix-ui'
import * as React from 'react'

// import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export function SegmentedFontSizeControl() {
  // 9pt represents the first block (value: 1)
  const [fontSize, setFontSize] = React.useState(9)

  // Map slider steps (1-9) to your desired pt sizes
  const minStep = 1
  const maxStep = 9
  const currentStep = fontSize - 8 // maps 9pt to step 1, 10pt to step 2, etc.

  const handleStepChange = (stepValue: number) => {
    setFontSize(stepValue + 8)
  }

  const increment = () => {
    if (fontSize < 16) setFontSize((prev) => prev + 1)
  }

  const decrement = () => {
    if (fontSize > 9) setFontSize((prev) => prev - 1)
  }

  return (
    <div className="space-y-4 bg-[#121214] p-6 rounded-lg w-full max-w-md text-white select-none">
      <div className="flex justify-between items-center">
        <span className="font-medium text-gray-300 text-sm">
          Base Font Size
        </span>
        <span className="font-medium text-sm">{fontSize}pt</span>
      </div>

      <div className="flex items-center gap-4">
        {/* Segmented Draggable Container */}
        <SliderPrimitive.Root
          className="relative flex items-center bg-[#202024] border border-[#2e2e33] rounded-sm w-full h-10 overflow-hidden touch-none select-none"
          value={[currentStep]}
          min={minStep}
          max={maxStep}
          step={1}
          onValueChange={(val) => handleStepChange(val[0])}
        >
          {/* Background Grid Segments */}
          <div className="absolute inset-0 grid grid-cols-9 divide-x divide-[#2e2e33] pointer-events-none" />

          {/* Filled Track Range (Matches the block progress) */}
          <SliderPrimitive.Track className="relative h-full grow">
            <SliderPrimitive.Range className="absolute bg-[#3a3a40] h-full" />
          </SliderPrimitive.Track>

          {/* Draggable Block Thumb (The white portion) */}
          <SliderPrimitive.Thumb
            className="block bg-[#c2c2c9] hover:bg-[#e1e1e6] border-[#121214] border-r focus:outline-none h-full transition-colors cursor-grab"
            style={{
              width: `${100 / maxStep}%`,
              // Offsets the absolute positioning of radix thumb to fit perfectly into the css grid
              transform: `translateX(${(currentStep - 1) * 100}%)`,
              left: 0,
            }}
          />
        </SliderPrimitive.Root>

        {/* Increment / Decrement Buttons */}
        <div className="flex gap-1">
          <Button
            variant="outline"
            size="icon"
            onClick={decrement}
            className="bg-[#202024] hover:bg-[#2e2e33] border-[#2e2e33] w-10 h-10 text-white"
          >
            <Minus className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={increment}
            className="bg-[#202024] hover:bg-[#2e2e33] border-[#2e2e33] w-10 h-10 text-white"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
