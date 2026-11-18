"use client";
import { useEffect } from "react";
export default function Effects() {
  useEffect(() => {
    const rm = matchMedia("(prefers-reduced-motion:reduce)").matches;
    const t = setTimeout(() => { document.getElementById("ld")?.classList.add("x"); document.body.classList.add("go"); }, rm ? 0 : 1200);
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
    document.querySelectorAll(".rv,.tl").forEach((n) => io.observe(n));
    return () => { clearTimeout(t); io.disconnect(); };
  }, []);
  return null;
}
