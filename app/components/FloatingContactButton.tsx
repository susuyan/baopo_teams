"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

/**
 * FloatingContactButton - Fixed contact button at bottom-right corner
 *
 * Features:
 * - Fixed positioning at bottom-right of viewport
 * - Smooth scroll to #contact section on click
 * - Framer Motion entrance animation
 * - Accessible with proper aria labels
 * - Responsive design
 */
export function FloatingContactButton() {
  const handleClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:bg-primary-light hover:shadow-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2"
      aria-label="联系我们"
    >
      <MessageCircle className="w-6 h-6" aria-hidden="true" />
    </motion.button>
  );
}