import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function GlowCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-border-subtle bg-surface/60 backdrop-blur-sm transition-all duration-300 hover:border-border-strong hover:bg-surface-hover",
        className
      )}
      {...props}
    />
  );
}
