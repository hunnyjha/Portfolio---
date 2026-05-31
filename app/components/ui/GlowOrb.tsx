"use client";

import { cn } from "@/app/lib/utils";

interface GlowOrbProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "gold" | "white" | "purple";
  opacity?: number;
}

export default function GlowOrb({
  className,
  size = "md",
  color = "gold",
  opacity = 0.15,
}: GlowOrbProps) {
  const sizeMap = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
    xl: "w-[600px] h-[600px]",
  };

  const colorMap = {
    gold: "#C9A84C",
    white: "#FFFFFF",
    purple: "#8B5CF6",
  };

  return (
    <div
      className={cn("glow-orb pointer-events-none absolute", sizeMap[size], className)}
      style={{
        background: `radial-gradient(circle, ${colorMap[color]}${Math.round(opacity * 255).toString(16).padStart(2, "0")} 0%, transparent 70%)`,
      }}
    />
  );
}
