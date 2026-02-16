import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-sans font-bold tracking-wide transition-all duration-300 hover-trigger";

  const variants = {
    primary:
      "bg-brand-cyan text-obsidian hover:shadow-glow hover:scale-105 active:scale-95",
    secondary:
      "bg-brand-purple text-white hover:shadow-glow-purple hover:scale-105 active:scale-95",
    outline:
      "border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan/10 hover:shadow-glow",
    ghost: "text-white hover:text-brand-cyan hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs rounded-md",
    md: "px-6 py-3 text-sm rounded-lg",
    lg: "px-8 py-4 text-base rounded-xl",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
