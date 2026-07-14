"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 300, suffix: "+", label: "Projetos entregues" },
  { value: 160, suffix: "", label: "Clientes atendidos" },
  { value: 12, suffix: "+", label: "Anos de mercado" },
  { value: 92, suffix: "", label: "NPS de satisfação" },
];

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return n;
}

function Metric({
  value,
  suffix,
  label,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const n = useCountUp(value, active);
  return (
    <div className="text-center">
      <div className="font-sans text-[clamp(2.4rem,5vw,3.4rem)] font-extrabold leading-none tabular-nums text-white">
        {n}
        <span className="text-cyan">{suffix}</span>
      </div>
      <div className="mt-2 text-[14px] font-medium text-white/70">{label}</div>
    </div>
  );
}

export default function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-5 md:px-8">
      <div
        ref={ref}
        className="relative overflow-hidden rounded-[32px] px-6 py-14 md:px-16"
        style={{
          backgroundImage:
            "linear-gradient(120deg, var(--color-primary-dark), var(--color-primary) 55%, var(--color-cyan))",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl"
        />
        <div className="relative grid grid-cols-2 gap-10 md:grid-cols-4">
          {metrics.map((m) => (
            <Metric key={m.label} {...m} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
