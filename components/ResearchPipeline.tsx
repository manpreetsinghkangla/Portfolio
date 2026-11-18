"use client";
import { useState } from "react";
import { STAGES, LABEL } from "@/data/pipeline";
export default function ResearchPipeline() {
  const [sel, setSel] = useState<number | null>(null);
  const s = sel === null ? null : STAGES[sel];
  return (
    <>
      <div className="pipe">
        {STAGES.map((st, k) => (
          <button key={st.title} type="button" className={`nd s-${st.status}`} aria-pressed={sel === k} onClick={() => setSel(k)}>
            <small>{`0${k + 1} · ${LABEL[st.status].toUpperCase()}`}</small>
            <b>{st.title}</b>
          </button>
        ))}
      </div>
      <div id="pd" aria-live="polite">
        {s ? <><b style={{ color: "var(--tx)" }}>{s.title}</b>{` — ${LABEL[s.status]}. ${s.note}`}</> : "Select a stage to see its current status."}
      </div>
    </>
  );
}
