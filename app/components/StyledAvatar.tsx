"use client";

import { cn } from "@/lib/utils";

interface StyledAvatarProps {
  initials: string;
  colorScheme: "primary" | "secondary" | "accent" | "neutral";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const colorSchemes = {
  primary: {
    bg: "bg-gradient-to-br from-primary to-primary-light",
    text: "text-white",
  },
  secondary: {
    bg: "bg-gradient-to-br from-secondary to-secondary-light",
    text: "text-white",
  },
  accent: {
    bg: "bg-gradient-to-br from-emerald-500 to-emerald-400",
    text: "text-white",
  },
  neutral: {
    bg: "bg-gradient-to-br from-zinc-600 to-zinc-500",
    text: "text-white",
  },
};

const sizes = {
  sm: "w-12 h-12 text-base",
  md: "w-16 h-16 text-lg",
  lg: "w-20 h-20 text-xl",
};

/**
 * StyledAvatar component for team member cards.
 * Displays colored initials with gradient background.
 *
 * @param initials - 2-3 character initials to display
 * @param colorScheme - Color scheme: primary, secondary, accent, or neutral
 * @param size - Avatar size: sm, md, or lg (default: md)
 * @param className - Additional CSS classes
 */
export function StyledAvatar({
  initials,
  colorScheme,
  size = "md",
  className,
}: StyledAvatarProps) {
  const colors = colorSchemes[colorScheme];
  const sizeClass = sizes[size];

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full font-bold shadow-lg",
        colors.bg,
        colors.text,
        sizeClass,
        className
      )}
    >
      {initials}
    </div>
  );
}