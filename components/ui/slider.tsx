"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"

interface SliderProps extends React.ComponentProps<typeof SliderPrimitive.Root> {
  showSteps?: boolean;
}

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  step = 1,
  showSteps = true,
  onValueChange,
  ...props
}: SliderProps) {
  // 1. Maintain local state for the "active" value to ensure the text is reactive
  const [localValue, setLocalValue] = React.useState(value || defaultValue || [min]);

  // Update local value if the external 'value' prop changes (e.g., from form reset)
  React.useEffect(() => {
    if (value) setLocalValue(value);
  }, [value]);

  const handleValueChange = (newValues: number[]) => {
    setLocalValue(newValues); // Update thumb text immediately
    if (onValueChange) onValueChange(newValues); // Notify React Hook Form
  };

  // Calculate ticks
  const steps = Array.from(
    { length: Math.floor((max - min) / step) + 1 },
    (_, i) => min + i * step
  );

  return (
    <div className="relative w-full py-6">
      <SliderPrimitive.Root
        min={min}
        max={max}
        step={step}
        value={localValue}
        onValueChange={handleValueChange}
        className={cn(
          "relative flex w-full touch-none items-center select-none",
          className
        )}
        {...props}
      >
        <SliderPrimitive.Track className="bg-muted relative h-2 grow rounded-full w-full">
          {/* Ticks/Indice markings */}
          {showSteps && (
            <div className="absolute w-full h-full flex justify-between px-1">
              {steps.map((s) => (
                <div 
                  key={s} 
                  className={cn(
                    "w-0.5 h-full transition-colors",
                    s <= localValue[0] ? "bg-primary/20" : "bg-foreground/10"
                  )}
                />
              ))}
            </div>
          )}
          <SliderPrimitive.Range className="bg-primary absolute h-full rounded-full" />
        </SliderPrimitive.Track>

        {localValue.map((val, index) => (
          <SliderPrimitive.Thumb
            key={index}
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background shadow-lg transition-transform active:scale-110 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {/* Real-time Value Inside Thumb */}
            <span className="text-[11px] font-black text-primary leading-none">
              {val}
            </span>
          </SliderPrimitive.Thumb>
        ))}
      </SliderPrimitive.Root>
    </div>
  )
}

export { Slider }