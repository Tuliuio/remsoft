"use client";

import { useEffect, useState } from "react";
import { IconWhatsapp } from "./icons";

const PHONE = "554840422634";

export default function WhatsAppFab() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState(false);

  // Close on Escape + lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const valid = name.trim().length > 1 && phone.replace(/\D/g, "").length >= 8;

  function start(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    const msg = `Olá! Meu nome é ${name.trim()}. Gostaria de falar com um especialista da Rem Soft. Meu WhatsApp é ${phone.trim()}.`;
    window.open(
      `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setOpen(false);
    setTouched(false);
    setName("");
    setPhone("");
  }

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)] transition-transform hover:scale-105"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp/40" />
        <IconWhatsapp className="relative" />
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="wa-title"
        >
          <button
            aria-label="Fechar"
            onClick={() => setOpen(false)}
            className="absolute inset-0 cursor-default bg-ink/60 backdrop-blur-sm animate-fade-up"
          />

          <div className="relative w-full max-w-md overflow-hidden rounded-[28px] bg-white shadow-[var(--shadow-float)] animate-fade-up">
            {/* Header */}
            <div className="relative flex items-start gap-3 bg-[#0b5d51] px-6 py-6 pr-14">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                <IconWhatsapp className="h-6 w-6" />
              </span>
              <p id="wa-title" className="text-[17px] font-semibold leading-snug text-white">
                Olá! Preencha os campos abaixo para iniciar a conversa no
                WhatsApp.
              </p>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Body */}
            <form onSubmit={start} className="space-y-4 px-6 py-7">
              <div>
                <label className="mb-1.5 block text-[13px] font-semibold text-ink">
                  Nome <span className="text-whatsapp">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  autoFocus
                  className="w-full rounded-2xl border border-line bg-soft px-4 py-3.5 text-[15px] text-ink outline-none transition focus:border-whatsapp focus:bg-white"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[13px] font-semibold text-ink">
                  WhatsApp <span className="text-whatsapp">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(00) 00000-0000"
                  className="w-full rounded-2xl border border-line bg-soft px-4 py-3.5 text-[15px] text-ink outline-none transition focus:border-whatsapp focus:bg-white"
                />
              </div>

              {touched && !valid && (
                <p className="text-[13px] font-medium text-red-500">
                  Preencha seu nome e um número de WhatsApp válido.
                </p>
              )}

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2.5 rounded-[var(--radius-pill)] bg-whatsapp px-6 py-4 text-[16px] font-bold text-white shadow-[0_10px_24px_-10px_rgba(37,211,102,0.7)] transition-transform hover:scale-[1.01]"
              >
                Iniciar a conversa
                <IconWhatsapp className="h-5 w-5" />
              </button>

              <p className="text-center text-[12px] text-subtle">
                Você será direcionado ao WhatsApp da Rem Soft.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
