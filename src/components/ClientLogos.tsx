/* eslint-disable @next/next/no-img-element */
import fs from "fs";
import path from "path";

const IMAGE_EXTS = new Set([".svg", ".png", ".webp", ".jpg", ".jpeg", ".gif"]);

/** Auto-discovers logos in /public/clientes (drop files, no code changes). */
function getLogos() {
  const dir = path.join(process.cwd(), "public", "clientes");
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }
  return files
    .filter(
      (f) =>
        IMAGE_EXTS.has(path.extname(f).toLowerCase()) &&
        !f.startsWith(".") &&
        !f.startsWith("_") &&
        // never treat the Rem Soft team photo as a client logo
        !f.toLowerCase().startsWith("rem-soft") &&
        !f.toLowerCase().includes("equipe")
    )
    .sort()
    .map((file) => ({
      file,
      // "01-ana-celia.svg" -> "ana celia"
      alt: file
        .replace(/\.[^.]+$/, "")
        .replace(/^\d+[-_]/, "")
        .replace(/[-_]/g, " ")
        .trim(),
    }));
}

export default function ClientLogos() {
  const logos = getLogos();
  if (logos.length === 0) return null;

  return (
    <section className="border-y border-line bg-soft">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
        <p className="text-center text-[14px] font-medium uppercase tracking-[0.18em] text-subtle">
          Empresas que confiam na Rem Soft
        </p>

        <div className="marquee mt-10">
          <div className="marquee-track items-center gap-16 pr-16">
            {[false, true].map((clone) => (
              <div
                key={clone ? "clone" : "original"}
                aria-hidden={clone || undefined}
                className="flex shrink-0 items-center gap-16"
              >
                {logos.map((logo) => (
                  <div
                    key={logo.file}
                    className="flex h-14 w-[140px] shrink-0 items-center justify-center"
                  >
                    <img
                      src={`/clientes/${logo.file}`}
                      alt={clone ? "" : logo.alt}
                      title={logo.alt}
                      loading="lazy"
                      className="max-h-14 w-auto max-w-[140px] object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
