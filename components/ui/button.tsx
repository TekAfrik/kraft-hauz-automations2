"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary";

export function Button({
  href,
  children,
  variant = "primary",
  className
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-white/30";

  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-white/90"
      : "bg-white/10 text-white hover:bg-white/15 ring-1 ring-white/15";

  return (
    <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
      <Link href={href} className={`${base} ${styles} ${className ?? ""}`}>
        {children}
      </Link>
    </motion.div>
  );
}

