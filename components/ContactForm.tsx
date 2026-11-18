"use client";
import { FormEvent } from "react";
import { profile } from "@/data/profile";
export default function ContactForm() {
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const name = String(d.get("name")), from = String(d.get("email")), msg = String(d.get("message"));
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Portfolio enquiry from " + name)}&body=${encodeURIComponent(`${msg}\n\n${name} (${from})`)}`;
  }
  return (
    <form className="rv" onSubmit={submit}>
      <label className="mono" htmlFor="fn">Name</label><input id="fn" name="name" required autoComplete="name" />
      <label className="mono" htmlFor="fm">Your email</label><input id="fm" name="email" type="email" required autoComplete="email" />
      <label className="mono" htmlFor="fg">Message</label><textarea id="fg" name="message" rows={5} required />
      <button className="btn p" type="submit" style={{ justifyContent: "center" }}>Compose email</button>
    </form>
  );
}
