import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "h-15 w-15 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        rose: "bg-rose-500 text-destructive-foreground hover:bg-rose-800 hover:text-accent-foreground",
        blue: "bg-light-blue-500 text-destructive-foreground hover:bg-light-blue-800 hover:text-accent-foreground",
        green: "bg-green-500 text-destructive-foreground hover:bg-green-800 hover:text-accent-foreground",
        yellow: "bg-yellow-500 text-destructive-foreground hover:bg-yellow-800 hover:text-accent-foreground",
        orange: "bg-orange-500 text-destructive-foreground hover:bg-orange-800 hover:text-accent-foreground",
        purple: "bg-purple-500 text-destructive-foreground hover:bg-purple-800 hover:text-accent-foreground",
        pink: "bg-pink-500 text-destructive-foreground hover:bg-pink-800 hover:text-accent-foreground",
        teal: "bg-teal-500 text-destructive-foreground hover:bg-teal-800 hover:text-accent-foreground",
        indigo: "bg-indigo-500 text-destructive-foreground hover:bg-indigo-800 hover:text-accent-foreground",
        gray: "bg-gray-500 text-destructive-foreground hover:bg-gray-800 hover:text-accent-foreground",
        responsive: "bg-primary text-primary-foreground text-sm sm:text-xs hover:bg-primary/90",

        
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
        
      },
      
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
      iconColor: {
        // Define colors for light theme
        lightPrimary: "text-light-primary",
        lightDestructive: "text-light-destructive",
        lightAccent: "text-light-accent",
        lightRose: "text-light-rose",
        lightSecondary: "text-light-secondary",
        lightGhost: "text-light-ghost",
        lightLink: "underline-offset-4 hover:underline text-light-primary",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      iconColor: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, iconColor, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, iconColor, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
