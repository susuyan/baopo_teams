"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { StyledAvatar } from "./StyledAvatar";

interface TeamMemberCardProps {
  initials: string;
  colorScheme: "primary" | "secondary" | "accent" | "neutral";
  title: string;
  role: string;
  count?: number;
  skills: string[];
  description: string;
  delay?: number;
}

/**
 * TeamMemberCard component with hover interaction.
 * Displays styled avatar, role info, and reveals description on hover.
 *
 * @param initials - Avatar initials
 * @param colorScheme - Avatar color scheme
 * @param title - Member title in Chinese
 * @param role - Role description
 * @param count - Number of members (optional, for "×3" badge)
 * @param skills - Array of skill bullets
 * @param description - Brief description revealed on hover
 * @param delay - Animation delay (default: 0)
 */
export function TeamMemberCard({
  initials,
  colorScheme,
  title,
  role,
  count,
  skills,
  description,
  delay = 0,
}: TeamMemberCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn(
        "relative p-6 bg-zinc-800 rounded-xl border border-zinc-700",
        "transition-all duration-300",
        isHovered && "bg-zinc-750 border-primary/50 shadow-xl scale-105"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      {/* Avatar */}
      <div className="mb-4">
        <StyledAvatar initials={initials} colorScheme={colorScheme} size="lg" />
      </div>

      {/* Title with optional count badge */}
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-lg font-semibold text-zinc-50">{title}</h3>
        {count && count > 1 && (
          <span
            className={cn(
              "px-2 py-0.5 text-xs font-medium rounded-full",
              "bg-primary/20 text-primary-light"
            )}
          >
            ×{count}
          </span>
        )}
      </div>

      {/* Role */}
      <p className="text-sm text-zinc-400 mb-3">{role}</p>

      {/* Skills */}
      <ul className="space-y-1 mb-3">
        {skills.map((skill, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
            <span className="text-primary-light mt-1">•</span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>

      {/* Hover-reveal description */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 pt-4 border-t border-zinc-700"
          >
            <p className="text-sm text-zinc-200 leading-relaxed">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}