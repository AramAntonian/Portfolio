import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Toolbox" title="Technical Proficiencies" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-900/5 transition hover:shadow-lg">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  {s.group}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-brand-700 shadow-sm ring-1 ring-brand-200 transition hover:-translate-y-0.5 hover:bg-brand-600 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
