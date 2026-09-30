import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "emergency" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer active:scale-[0.98]";

    const variantStyles = {
      default:
        "bg-teal-700 text-white hover:bg-teal-800 shadow-sm hover:shadow-md hover:shadow-teal-700/20 focus-visible:ring-teal-700",
      secondary:
        "bg-teal-50 text-teal-800 hover:bg-teal-100/90 border border-teal-200/80 focus-visible:ring-teal-600",
      outline:
        "border-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 focus-visible:ring-slate-400",
      ghost:
        "text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-slate-400",
      emergency:
        "bg-rose-600 text-white hover:bg-rose-700 shadow-sm hover:shadow-lg hover:shadow-rose-600/30 focus-visible:ring-rose-600 animate-pulse hover:animate-none",
      link: "text-teal-700 underline-offset-4 hover:underline p-0 h-auto focus-visible:ring-teal-700",
    };

    const sizeStyles = {
      sm: "h-9 px-3.5 text-xs",
      md: "h-11 px-5 text-sm",
      lg: "h-13 px-7 text-base font-semibold",
      icon: "h-10 w-10 p-0",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
