"use client";

import { useEffect, useRef, type CSSProperties } from "react";

/**
 * Reveals children with a fade-up when they enter the viewport.
 * Progressive enhancement: without JS the content is always visible
 * (the hidden state is gated behind `html.js` in globals.css).
 *
 * - `stagger` animates direct children in sequence (grids/lists).
 * - `delay` offsets the whole block (ms).
 */
export default function Reveal({
  children,
  className = "",
  stagger = false,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Gate das animações: só oculta conteúdo quando o JS está ativo,
    // e somente após a hidratação (evita mismatch de SSR).
    document.documentElement.classList.add("js");
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${stagger ? "reveal-stagger" : "reveal"} ${className}`}
      style={
        delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined
      }
    >
      {children}
    </div>
  );
}
