import { resumeData } from "@/data/resume";

export default function Education() {
  const { education } = resumeData;

  return (
    <section id="education" className="section-shell section-block">
      <div className="section-heading">
        <div className="eyebrow">Education</div>
        <h2 className="font-heading text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
          Strong academic grounding in software systems
        </h2>
      </div>
      <div className="panel p-6 md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="font-heading text-2xl font-bold text-slate-950 md:text-3xl">{education.degree}</h3>
            <p className="mt-3 text-lg font-medium text-slate-700 md:text-xl">{education.institution}</p>
            <p className="mt-1 text-base text-slate-500">{education.location}</p>
          </div>
          <div className="rounded-[24px] border border-slate-900/10 bg-white/70 px-5 py-4 md:text-right">
            <p className="font-heading text-2xl font-bold text-slate-950 md:text-3xl">
              CGPA: {education.cgpa}
            </p>
            <p className="mt-2 text-base font-medium text-slate-600 md:text-lg">
              {education.startDate} - {education.endDate}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

