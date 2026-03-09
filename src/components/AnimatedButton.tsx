"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  [key: string]: unknown;
}

export default function AnimatedButton({
  children,
  className = "",
  delay = 0.3,
  duration = 0.8,
  distance = 50,
  ...props
}: AnimatedButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { y: distance, opacity: 0, visibility: "visible" });

    gsap.to(el, {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease: "power3.out",
    });
  }, [distance, duration, delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ visibility: "hidden" }}
      {...props}
    >
      {children}
    </div>
  );
}
