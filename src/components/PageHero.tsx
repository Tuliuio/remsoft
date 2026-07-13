import Link from "next/link";

export default function PageHero({
  eyebrow,
  title,
  titleMuted,
  subtitle,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  titleMuted?: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-soft">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-6%] h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(20,202,244,0.30), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-[-6%] h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(3,93,187,0.22), transparent)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        {breadcrumb && (
          <nav className="mb-6 flex items-center gap-2 text-[13px] text-subtle">
            {breadcrumb.map((b, i) => (
              <span key={b.label} className="flex items-center gap-2">
                {b.href ? (
                  <Link href={b.href} className="hover:text-primary">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-ink">{b.label}</span>
                )}
                {i < breadcrumb.length - 1 && <span className="opacity-50">/</span>}
              </span>
            ))}
          </nav>
        )}

        <p className="label-eyebrow text-[13px] text-primary">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-sans text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold leading-[1.05] tracking-tight text-ink">
          {title}
          {titleMuted && (
            <>
              {" "}
              <span className="text-muted">{titleMuted}</span>
            </>
          )}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-[18px] leading-relaxed text-body">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
