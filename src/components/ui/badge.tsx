import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "emergency" | "accent";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const base =
    "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide transition-colors";

  const variants = {
    default: "bg-teal-100 text-teal-900 border border-teal-200/60",
    secondary: "bg-sky-50 text-sky-900 border border-sky-200/60",
    outline: "border border-slate-300 text-slate-700 bg-white",
    success: "bg-emerald-100 text-emerald-900 border border-emerald-200",
    emergency: "bg-rose-100 text-rose-900 border border-rose-300 font-bold",
    accent: "bg-amber-100 text-amber-900 border border-amber-200",
  };

  return <div className={cn(base, variants[variant], className)} {...props} />;
}
