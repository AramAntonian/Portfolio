import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-brand-900 py-16 text-brand-100">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white">Let&apos;s work together</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-brand-200">
          <a className="hover:text-white" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="hover:text-white" href={`tel:${profile.phone}`}>
            {profile.phone}
          </a>
          <span>{profile.address}</span>
        </div>
        <p className="mt-10 text-sm text-brand-300">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
