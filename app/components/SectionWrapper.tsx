"use client";

import { ScrollReveal } from "./ScrollReveal";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  fullHeight?: boolean;
  noReveal?: boolean;
}

/**
 * SectionWrapper component for consistent section styling across the site.
 * Combines ScrollReveal animation with section layout and typography.
 *
 * @param id - Section ID for navigation anchor
 * @param children - Section content
 * @param className - Additional CSS classes
 * @param title - Optional section title (h2)
 * @param subtitle - Optional section subtitle (p)
 * @param centered - Center align content (default: false)
 * @param dark - Dark background variant (default: false)
 * @param fullHeight - Full viewport height (default: false)
 * @param noReveal - Disable scroll reveal animation (default: false)
 */
export function SectionWrapper({
  id,
  children,
  className,
  title,
  subtitle,
  centered = false,
  dark = false,
  fullHeight = false,
  noReveal = false,
}: SectionWrapperProps) {
  const containerClasses = cn(
    "w-full py-16 md:py-24 lg:py-32",
    "px-4 sm:px-6 lg:px-8",
    fullHeight && "min-h-screen flex flex-col justify-center",
    dark ? "bg-zinc-900 text-zinc-50" : "bg-white text-zinc-900",
    className
  );

  const contentClasses = cn(
    "max-w-7xl mx-auto",
    centered && "text-center"
  );

  const Wrapper = noReveal ? "div" : ScrollReveal;

  return (
    <section id={id} className={containerClasses}>
      <Wrapper className={contentClasses}>
        {(title || subtitle) && (
          <div className={cn("mb-12 md:mb-16", centered && "text-center")}>
            {title && (
              <h2 className={cn(
                "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
                dark ? "text-zinc-50" : "text-zinc-900"
              )}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={cn(
                "mt-4 text-lg md:text-xl",
                dark ? "text-zinc-400" : "text-zinc-600"
              )}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Wrapper>
    </section>
  );
}