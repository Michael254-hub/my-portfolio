import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-fg text-bg shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset] hover:shadow-[var(--glow-blue)] hover:-translate-y-0.5",
        secondary:
          "border border-border-strong bg-surface/60 text-fg backdrop-blur-sm hover:bg-surface-hover hover:-translate-y-0.5",
        ghost: "text-fg-muted hover:text-fg hover:bg-surface",
      },
      size: {
        default: "h-11 px-6",
        lg: "h-13 px-8 text-base",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: "button";
};
type ButtonAsAnchor = AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: "a";
};

type ButtonProps = (ButtonAsButton | ButtonAsAnchor) &
  VariantProps<typeof buttonVariants> & { children?: ReactNode };

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    if (props.as === "a") {
      const { as: _as, ...anchorProps } = props;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={cn(buttonVariants({ variant, size }), className)}
          {...anchorProps}
        >
          {children}
        </a>
      );
    }

    const { as: _as, ...buttonProps } = props;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cn(buttonVariants({ variant, size }), className)}
        {...buttonProps}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
