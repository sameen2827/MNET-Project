import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "glow";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-semibold",
  secondary: "bg-violet-600 text-white hover:bg-violet-500",
  outline: "border border-slate-600 text-slate-200 hover:border-cyan-500/50 hover:bg-cyan-500/5",
  ghost: "text-slate-400 hover:text-cyan-400 hover:bg-white/5",
  glow: "bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:opacity-90 shadow-lg shadow-cyan-500/20",
};

const sizes: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition-all disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

interface ButtonLinkProps {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition-all",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </Link>
  );
}
