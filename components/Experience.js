import { resumeData } from "@/data/resume";

export default function Experience() {
  const { experience } = resumeData;

  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-10 text-center">
        Experience
      </h2>
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <div
            key={`${exp.company}-${index}`}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-10 shadow-xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">{exp.role}</h3>
                <p className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium">
                  {exp.startDate} - {exp.endDate}
                </p>
                <p className="text-sm md:text-base text-slate-500 dark:text-slate-500">{exp.location}</p>
              </div>
            </div>

            {exp.projects ? (
              <div className="mt-6 space-y-6">
                {exp.projects.map((project, projectIndex) => (
                  <div
                    key={`${project.name}-${projectIndex}`}
                    className={projectIndex > 0 ? "pt-4 border-t border-slate-200 dark:border-slate-700" : ""}
                  >
                    <h4 className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
                      {project.name}
                    </h4>
                    <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{project.description}</p>
                    <ul className="list-disc list-inside space-y-2.5 text-slate-700 dark:text-slate-300 ml-4 text-sm md:text-base">
                      {project.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="leading-relaxed">{responsibility}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-700 dark:text-blue-300 rounded-lg text-xs md:text-sm font-medium border border-blue-200 dark:border-blue-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-6">
                <ul className="list-disc list-inside space-y-2.5 text-slate-700 dark:text-slate-300 ml-4 text-sm md:text-base">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="leading-relaxed">{responsibility}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-700 dark:text-blue-300 rounded-lg text-xs md:text-sm font-medium border border-blue-200 dark:border-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

