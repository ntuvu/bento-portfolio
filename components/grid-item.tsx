import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const variants = cva(
  "shadow-grid rounded-3xl bg-white dark:bg-neutral-900 flex flex-col justify-center shadow-[0_0_10px_rgba(0,0,0,0.2)]",
  {
    variants: {
      size: {
        "1x2": "col-span-1 row-span-2 p-8",
        "2x1": "col-span-2 row-span-1 px-8 py-4",
        "2x2": "col-span-2 row-span-2 p-8",
        "2x4": "col-span-2 row-span-4 relative overflow-hidden",
        "4x4": "col-span-4 row-span-4",
      },
    },
    defaultVariants: {
      size: "1x2",
    },
  }
);

type GridItemProps = { children: React.ReactNode } & VariantProps<
  typeof variants
>;

const GridItem = ({ size, children }: GridItemProps) => {
  return <div className={cn(variants({ size }))}>{children}</div>;
};

export default GridItem;
