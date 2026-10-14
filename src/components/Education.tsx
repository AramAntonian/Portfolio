import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle eyebrow="Learning" title="Education" />

      <div className="grid gap-6 md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 0.1}>
            <div className="h-full rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl">
              <span className="text-sm font-medium text-brand-600">{e.period}</span>
              <h3 className="mt-2 text-lg font-bold text-slate-900">{e.school}</h3>
              <p className="mt-1 text-slate-500">{e.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
