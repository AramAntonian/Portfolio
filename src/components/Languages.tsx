import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { languages } from "@/lib/data";

export default function Languages() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Communication" title="Languages" />
        <div className="flex flex-wrap gap-4">
          {languages.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.1}>
              <div className="rounded-full bg-brand-50 px-8 py-3 text-lg font-semibold text-brand-700 ring-1 ring-brand-200 transition hover:bg-brand-600 hover:text-white">
                {l.name}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
