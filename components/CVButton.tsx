"use client";
export default function CVButton() {
  return <button className="btn" type="button" onClick={() => window.dispatchEvent(new Event("open-cv"))}>View &amp; Download CV</button>;
}
