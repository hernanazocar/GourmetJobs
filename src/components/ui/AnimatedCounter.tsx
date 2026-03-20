"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export default function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateValue();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  });

  function animateValue() {
    const numericMatch = value.match(/[\d,.]+/);
    if (!numericMatch) {
      setDisplayed(value);
      return;
    }

    const numStr = numericMatch[0];
    const target = parseFloat(numStr.replace(/,/g, ""));
    const prefix = value.slice(0, value.indexOf(numStr));
    const suffix = value.slice(value.indexOf(numStr) + numStr.length);
    const hasComma = numStr.includes(",");
    const duration = 1800;
    const start = performance.now();

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * eased);

      const formatted = hasComma
        ? current.toLocaleString("en-US")
        : String(current);

      setDisplayed(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayed(value);
      }
    }

    requestAnimationFrame(step);
  }

  return (
    <span ref={ref} className={className}>
      {displayed}
    </span>
  );
}
