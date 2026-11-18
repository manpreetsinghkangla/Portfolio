"use client";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export default function CVModal() {
  const [open, setOpen] = useState(false);
  const last = useRef<Element | null>(null);
  useEffect(() => {
    const o = () => { last.current = document.activeElement; setOpen(true); };
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("open-cv", o); window.addEventListener("keydown", k);
    return () => { window.removeEventListener("open-cv", o); window.removeEventListener("keydown", k); };
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) (last.current as HTMLElement | null)?.focus?.();
  }, [open]);
  if (!open) return null;
  const url = base + profile.cv;
  return (
    <div id="cvm" className="o" role="dialog" aria-modal="true" aria-label="Curriculum vitae">
      <header>
        <span className="mono" style={{ color: "var(--tx)" }}>Manpreet Singh — CV (PDF)</span>
        <div className="row">
          <a className="btn p" href={url} download="Manpreet_Singh_CV.pdf">Download PDF</a>
          <button className="btn" type="button" autoFocus onClick={() => setOpen(false)}>Close ✕</button>
        </div>
      </header>
      <object data={url + "#view=FitH"} type="application/pdf" aria-label="CV preview">
        <p>Your browser cannot preview PDFs here. <a className="ac" href={url}>Open the CV</a> or use the download button.</p>
      </object>
    </div>
  );
}
