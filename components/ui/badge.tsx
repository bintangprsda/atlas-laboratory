import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        completed:
          "border-transparent bg-green-500 text-white shadow hover:bg-green-600",
          Selesai:
          "border-transparent bg-green-500 text-white shadow hover:bg-green-600",
        sending:
          "border-transparent bg-blue-500 text-white shadow hover:bg-blue-600",
          Dikirim:
          "border-transparent bg-blue-500 text-white shadow hover:bg-blue-600",
        Running:
          "border-transparent bg-yellow-500 text-white shadow hover:bg-yellow-600",
        pickup:
          "border-transparent bg-orange-500 text-white shadow hover:bg-orange-600",
          Dibatalkan:
          "border-transparent bg-rose-500 text-white shadow hover:bg-rose-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
