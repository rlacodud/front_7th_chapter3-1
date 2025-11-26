import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center rounded-sm px-4 font-medium transition-colors border",
  {
    variants: {
      variant: {
        primary: "bg-primary hover:bg-primary-hover text-primary-foreground border-primary",
        secondary: "bg-secondary hover:bg-secondary-hover border-border-light text-secondary-foreground",
        danger: "bg-danger hover:bg-danger-hover text-danger-foreground border-danger",
        success: "bg-success hover:bg-success-hover text-success-foreground border-success",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <>
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    </>
  );
}

export { Button, buttonVariants };