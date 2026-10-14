import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

function getBadges() {
  const dir = path.join(process.cwd(), "public", "badges");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(png|jpe?g|webp|svg|gif|avif)$/i.test(f))
    .sort()
    .map((file) => ({
      src: `/badges/${encodeURIComponent(file)}`,
      label: file.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " "),
    }));
}

export default function Badges() {
  const badges = getBadges();

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle eyebrow="Achievements" title="Badges & Certificates" />

      {badges.length === 0 ? (
        <p className="rounded-2xl border-2 border-dashed border-brand-200 p-10 text-center text-slate-500">
          Add images to <code>public/badges</code> and they will appear here.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {badges.map((b, i) => (
            <Reveal key={b.src} delay={(i % 5) * 0.07}>
              <div className="group flex h-full flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-900/5 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-600/10">
                <Image
                  src={b.src}
                  alt={b.label}
                  width={112}
                  height={112}
                  className="h-28 w-28 object-contain transition duration-300 group-hover:scale-110 group-hover:rotate-3"
                />
                <p className="mt-4 text-sm font-medium capitalize text-slate-600">{b.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
