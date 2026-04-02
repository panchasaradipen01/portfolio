import { resumeData } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">
        About Me
      </h2>
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-10 shadow-xl border border-slate-100 dark:border-slate-700">
        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed text-center max-w-4xl mx-auto">
          {resumeData.about.summary}
        </p>
      </div>
    </section>
  );
}

