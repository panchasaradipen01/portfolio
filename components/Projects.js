import { resumeData } from "@/data/resume";

export default function Projects() {
  const { projects } = resumeData;

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-10 text-center">
        Academic Project
      </h2>
      {projects.map((project, index) => (
        <div
          key={`${project.name}-${index}`}
          className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-10 shadow-xl border border-slate-100 dark:border-slate-700 mb-6 hover:shadow-2xl transition-shadow duration-300"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-5">{project.name}</h3>
          <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 rounded-lg text-sm font-medium border border-green-200 dark:border-green-800 hover:scale-105 transition-transform duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

