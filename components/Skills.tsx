import { SKILLS } from "@/data/skills";
export default function Skills() {
  return (
    <div className="sk">
      {Object.entries(SKILLS).map(([group, items]) => (
        <div className="rv" key={group}>
          <p className="mono ac">{group}</p>
          <div className="cw">{items.map((t, i) => <span key={t} style={{ transitionDelay: `${i * 45}ms` }}>{t}</span>)}</div>
        </div>
      ))}
    </div>
  );
}
