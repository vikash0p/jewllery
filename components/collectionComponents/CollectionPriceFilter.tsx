'use client'
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

type SliderProps = React.ComponentProps<typeof Slider>;

export function CollectionPriceFilter({ className, ...props }: SliderProps) {
    
  return (
    <div>
        <h5 className="text-xl font-bold py-4">Price</h5>
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn("w-[60%]", className)}
        {...props}
      />
    </div>
  );
}
