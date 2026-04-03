import { resumeData } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="section-shell section-block">
      <div className="section-heading">
        <div className="eyebrow">About</div>
        <h2 className="font-heading text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
          Calm interfaces, practical engineering
        </h2>
      </div>
      <div className="panel grid gap-8 px-6 py-8 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:py-10">
        <div>
          <p className="max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
            {resumeData.about.summary}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-900/10 bg-white/75 p-5">
            <p className="text-sm text-slate-500">Working style</p>
            <p className="mt-2 text-base font-medium text-slate-900">Clean systems, thoughtful UX, steady iteration</p>
          </div>
          <div className="rounded-3xl border border-slate-900/10 bg-white/75 p-5">
            <p className="text-sm text-slate-500">Strengths</p>
            <p className="mt-2 text-base font-medium text-slate-900">Frontend architecture, responsiveness, polish</p>
          </div>
        </div>
      </div>
    </section>
  );
}

