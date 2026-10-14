import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { profile, stats } from "@/lib/data";

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle eyebrow="About me" title="Summary" />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="text-lg leading-8 text-slate-600">{profile.summary}</p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition hover:shadow-lg">
                <p className="text-4xl font-extrabold text-brand-600">{s.value}</p>
                <p className="mt-1 text-sm text-slate-500">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
