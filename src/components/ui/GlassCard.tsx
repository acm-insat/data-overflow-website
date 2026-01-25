import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const GlassCard = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-8 relative overflow-hidden group",
        className,
      )}
    >
      {/* Hover Glow Effect */}
      <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine" />
      {children}
    </div>
  );
};
