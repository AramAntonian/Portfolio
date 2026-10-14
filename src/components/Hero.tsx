"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* animated background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-24 h-96 w-96 animate-blob rounded-full bg-brand-200/60 blur-3xl" />
        <div
          className="absolute -right-24 top-40 h-96 w-96 animate-blob rounded-full bg-brand-300/40 blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 md:grid-cols-[1.2fr_1fr] md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-500" />
            Open to new opportunities
          </span>

          <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Hi, I&apos;m{" "}
            <span className="animate-gradient bg-gradient-to-r from-brand-600 via-brand-400 to-brand-700 bg-[length:200%_auto] bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          <p className="mt-4 text-xl font-medium text-slate-700">{profile.role}</p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-500">
            I build reliable, scalable web applications, APIs and internal tools for government and
            enterprise environments.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {/* primary action: solid & high contrast */}
            <a
              href={`mailto:${profile.email}`}
              className="rounded-xl bg-brand-600 px-6 py-3 font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Email me
            </a>
            {/* secondary action: outlined, lower emphasis */}
            <a
              href={`tel:${profile.phone}`}
              className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-700 shadow-sm ring-1 ring-slate-900/10 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Call {profile.phone}
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">📍 {profile.address}</p>
        </motion.div>

        {/* PROFILE IMAGE SLOT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mx-auto"
        >
          <div className="animate-float">
            <div className="rounded-[2rem] bg-gradient-to-br from-brand-300 to-brand-600 p-1.5 shadow-2xl shadow-brand-600/30">
              <div className="relative h-72 w-72 overflow-hidden rounded-[1.7rem] bg-brand-50 sm:h-80 sm:w-80">
                {profile.image ? (
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    priority
                    className="object-cover"
                    fill
                  />
                ) : (
                  // Empty placeholder – replace by setting `image` in lib/data.ts
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-brand-300 text-brand-400">
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
                    </svg>
                    <span className="text-sm font-medium">Profile image</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
