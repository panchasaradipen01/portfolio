import { resumeData } from "@/data/resume";

export default function Education() {
  const { education } = resumeData;

  return (
    <section id="education" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-10 text-center">
        Education
      </h2>
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-10 shadow-xl border border-slate-100 dark:border-slate-700">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">{education.degree}</h3>
            <p className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium mt-2">{education.institution}</p>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mt-2">{education.university}</p>
            <p className="text-base text-slate-500 dark:text-slate-500 mt-1">{education.location}</p>
          </div>
          <div className="text-right mt-4 md:mt-0">
            <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              CPI: {education.cpi}
            </p>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium">
              {education.startDate} - {education.endDate}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

