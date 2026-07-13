"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { IconPlay, IconLayers, IconChart } from "./icons";

const VIDEO_ID = "rk0wC81RH-0";
const START = 29;

export default function HeroVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-[28px] shadow-[var(--shadow-card)]">
        {playing ? (
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?start=${START}&autoplay=1&rel=0&modestbranding=1`}
              title="Vídeo institucional Rem Soft"
              allow="accelerated-motion; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label="Assistir ao vídeo institucional da Rem Soft"
            className="group relative block w-full"
          >
            <img
              src="/equipe-remsoft.webp"
              alt="Equipe da Rem Soft"
              className="h-[420px] w-full object-cover object-[center_30%] md:h-[520px]"
            />
            {/* darkening overlay */}
            <span className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 via-transparent to-transparent transition-colors group-hover:from-primary-dark/60" />

            {/* Play button */}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-primary shadow-[var(--shadow-float)] transition-transform duration-300 group-hover:scale-110">
                <span className="absolute inset-0 animate-ping rounded-full bg-white/40" />
                <IconPlay className="relative ml-1 h-8 w-8" />
              </span>
            </span>

            {/* Label */}
            <span className="absolute bottom-5 left-5 flex items-center gap-2 rounded-[var(--radius-pill)] bg-white/90 px-4 py-2 text-[13px] font-semibold text-ink backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan" />
              Vídeo institucional
            </span>
          </button>
        )}
      </div>

      {/* Floating card — top */}
      {!playing && (
        <>
          <div className="animate-float-slow absolute -left-3 top-8 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-[var(--shadow-float)] md:left-[-18px]">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl brand-gradient text-white">
              <IconLayers />
            </span>
            <span className="leading-tight">
              <span className="block text-[15px] font-bold text-ink">
                Squads Ágeis
              </span>
              <span className="block text-[12px] text-subtle">
                Times dedicados ao seu projeto
              </span>
            </span>
          </div>

          {/* Floating card — bottom */}
          <div className="animate-float-slower absolute -right-3 bottom-10 flex flex-col items-center gap-2 rounded-2xl bg-white px-5 py-4 text-center shadow-[var(--shadow-float)] md:right-[-18px]">
            <span className="flex h-11 w-11 items-center justify-center rounded-full brand-gradient text-white">
              <IconChart />
            </span>
            <span className="text-[13px] font-semibold leading-tight text-ink">
              Business
              <br />
              Intelligence
            </span>
          </div>
        </>
      )}
    </div>
  );
}
