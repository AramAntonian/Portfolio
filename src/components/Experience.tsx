import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Career" title="Work Experience" />

        <div className="relative space-y-8 border-l-2 border-brand-100 pl-8">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1}>
              <div className="relative rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-900/5 transition hover:shadow-lg">
                <span className="absolute -left-[2.6rem] top-9 h-4 w-4 rounded-full border-4 border-white bg-brand-500 shadow" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                  <span className="rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-700">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 font-medium text-brand-600">{job.company}</p>
                <p className="mt-4 leading-7 text-slate-600">{job.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
