import { resumeData } from "@/data/resume";
import DownloadPDF from "./DownloadPDF";

export default function Hero() {
  const { personalInfo } = resumeData;

  return (
    <section className="section-shell section-block pt-16 md:pt-24">
      <div className="panel relative overflow-hidden px-6 py-12 md:px-10 md:py-16">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-72 bg-[radial-gradient(circle_at_center,rgba(191,219,254,0.55),transparent_65%)] lg:block" />
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <div className="eyebrow animate-fade-up">Available for frontend opportunities</div>
            <h1 className="font-heading animate-fade-up text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
              {personalInfo.name}
            </h1>
            <p className="animate-fade-up-delay mt-5 max-w-3xl text-xl text-slate-600 md:text-2xl">
              {personalInfo.title}
            </p>
            <p className="animate-fade-up-delay mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Building polished, scalable interfaces with React, Next.js, and a steady focus on performance, clarity, and user experience.
            </p>
            <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-3">
              <span className="pill">{personalInfo.experience}</span>
              <span className="pill">{personalInfo.tagline}</span>
            </div>
            <div className="animate-fade-up-delay-2 mt-10 flex flex-wrap gap-3">
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="inline-flex items-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Start a conversation
              </a>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-slate-900/10 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-800 transition duration-300 hover:-translate-y-0.5 hover:border-slate-900/20"
              >
                View LinkedIn
              </a>
              <DownloadPDF />
            </div>
          </div>

          <div className="animate-fade-up-delay panel border-white/70 bg-white/70 p-6">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Snapshot</p>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(34,197,94,0.15)]" />
            </div>
            <div className="space-y-5">
              <div>
                <p className="text-sm text-slate-500">Focus</p>
                <p className="mt-1 text-base font-medium text-slate-900">Modern frontend systems and product UI</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Location</p>
                <p className="mt-1 text-base font-medium text-slate-900">Ahmedabad, India</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Primary stack</p>
                <p className="mt-1 text-base font-medium text-slate-900">React, Next.js, TypeScript, Tailwind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

