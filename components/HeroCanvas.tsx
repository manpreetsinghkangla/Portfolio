"use client";
import { useEffect, useRef } from "react";
type Node = { x: number; y: number; vx: number; vy: number; l: number; r: number };
export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!; const x = c.getContext("2d")!;
    const RM = matchMedia("(prefers-reduced-motion:reduce)").matches;
    let lastW = innerWidth, W = 0, H = 0, N: Node[] = [], mx = 0, my = 0, vis = true, raf = 0;
    const rs = () => { const r = devicePixelRatio > 1.5 ? 1.5 : 1; W = c.clientWidth; H = c.clientHeight; c.width = W * r; c.height = H * r; x.setTransform(r, 0, 0, r, 0, 0); };
    const init = () => { N = []; const n = innerWidth < 700 ? 36 : 90; for (let i = 0; i < n; i++) { const l = i % 3; N.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25, l, r: [1.6, 2.6, 4.2][l] }); } };
    const draw = () => {
      if (vis) {
        const st = getComputedStyle(document.documentElement), ac = st.getPropertyValue("--ac").trim(), vi = st.getPropertyValue("--vi").trim(), col = [ac, ac, vi];
        x.clearRect(0, 0, W, H);
        N.forEach((a) => { if (!RM) { a.x += a.vx; a.y += a.vy; if (a.x < 0 || a.x > W) a.vx *= -1; if (a.y < 0 || a.y > H) a.vy *= -1; } });
        for (let i = 0; i < N.length; i++) {
          const a = N[i], px = (mx - W / 2) * 0.012 * (a.l + 1), py = (my - H / 2) * 0.012 * (a.l + 1);
          for (let j = i + 1; j < N.length; j++) { const b = N[j], d = Math.hypot(a.x - b.x, a.y - b.y), m = 70 + a.l * 30; if (d < m) { x.globalAlpha = (1 - d / m) * 0.28; x.strokeStyle = col[a.l]; x.beginPath(); x.moveTo(a.x + px, a.y + py); x.lineTo(b.x + px, b.y + py); x.stroke(); } }
          x.globalAlpha = a.l === 2 ? 0.85 : 0.55; x.fillStyle = col[a.l]; x.beginPath(); x.arc(a.x + px, a.y + py, a.r, 0, 6.283); x.fill();
          if (a.l === 2) { x.globalAlpha = 0.18; x.strokeStyle = vi; x.beginPath(); x.arc(a.x + px, a.y + py, a.r * 5, 0, 6.283); x.stroke(); }
        }
      }
      if (!RM) raf = requestAnimationFrame(draw);
    };
    const redraw = () => { if (RM) draw(); };
    const onResize = () => { rs(); if (innerWidth !== lastW) { lastW = innerWidth; init(); } redraw(); };
    const onMove = (e: PointerEvent) => { mx = e.clientX; my = e.clientY; };
    rs(); init(); draw();
    window.addEventListener("resize", onResize);
    window.addEventListener("themechange", redraw);
    if (!RM && innerWidth >= 700) window.addEventListener("pointermove", onMove);
    const onVis = () => { vis = !document.hidden; };
    document.addEventListener("visibilitychange", onVis);
    return () => { cancelAnimationFrame(raf); document.removeEventListener("visibilitychange", onVis); window.removeEventListener("resize", onResize); window.removeEventListener("themechange", redraw); window.removeEventListener("pointermove", onMove); };
  }, []);
  return <canvas id="cv" ref={ref} aria-hidden="true" />;
}
