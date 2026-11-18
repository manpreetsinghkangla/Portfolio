"use client";
import { useEffect, useState } from "react";
type Theme = "auto" | "light" | "dark";
const ORDER: Theme[] = ["auto", "light", "dark"];
export default function ThemeToggle() {
  const [t, setT] = useState<Theme>("auto");
  useEffect(() => {
    try { const v = localStorage.getItem("theme") as Theme | null; if (v && ORDER.includes(v)) setT(v); } catch {}
  }, []);
  function next() {
    const n = ORDER[(ORDER.indexOf(t) + 1) % ORDER.length];
    setT(n);
    try { localStorage.setItem("theme", n); } catch {}
    const r = document.documentElement;
    if (n === "auto") r.removeAttribute("data-theme"); else r.setAttribute("data-theme", n);
    window.dispatchEvent(new Event("themechange"));
  }
  return <button className="tg" type="button" onClick={next} aria-label={`Theme: ${t}. Click to change.`} title="Switch theme (auto follows your browser)">{t.toUpperCase()}</button>;
}
