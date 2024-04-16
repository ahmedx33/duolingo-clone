import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-[14px] whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "border-[#E5E5E5] border-2 border-b-4 bg-white active:border-b-2 hover:bg-[#E5E5E5] hover:border-[#CECECE]",
                primaryGreen: "border-[#58A700] border-1 border-b-4 bg-[#58CC02] active:border-b-2 hover:bg-[#61E002] hover:border-[#61B800]",
                primaryRed: " active:border-b-2 hover:bg-[#FF5252] hover:border-[#FF2F2F]",
                primaryPruple: "border-[#3F22EC] border-1 border-b-4 bg-[#3C4DFF] active:border-b-2 hover:bg-[#4255FF] hover:border-[#4525FF]",
            },
            size: {
                default: "h-9 px-4 py-2 rounded-[14px]",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9",
                rounded: "rounded-full",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };
