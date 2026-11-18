"use client";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
const LINKS = [["home", "Home"], ["research", "Research"], ["projects", "Projects"], ["publications", "Publications"], ["about", "About"], ["contact", "Contact"]] as const;
const GROUP: Record<string, string> = { background: "about", next: "about" };
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [on, setOn] = useState("home");
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f();
    window.addEventListener("scroll", f, { passive: true });
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) setOn(GROUP[e.target.id] ?? e.target.id); }), { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("section[id]").forEach((s) => io.observe(s));
    return () => { window.removeEventListener("scroll", f); io.disconnect(); };
  }, []);
  return (
    <nav id="nav" className={scrolled ? "s" : ""} aria-label="Primary">
      <div className="wrap">
        <a href="#home" className="logo" aria-label="Home">MANPREET<b>.</b>S</a>
        <span className="mono stat nv"><span className="dot" />Open to PhD research opportunities</span>
        <div className={"links" + (open ? " o" : "")} id="lk" onClick={() => setOpen(false)}>
          {LINKS.map(([id, label]) => <a key={id} href={"#" + id} className={on === id ? "on" : ""}>{label}</a>)}
        </div>
        <ThemeToggle />
        <button id="mb" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
      </div>
    </nav>
  );
}
