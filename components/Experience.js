import { resumeData } from "@/data/resume";

export default function Experience() {
  const { experience } = resumeData;

  return (
    <section id="experience" className="section-shell section-block">
      <div className="section-heading">
        <div className="eyebrow">Experience</div>
        <h2 className="font-heading text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
          Product work across fast-moving teams
        </h2>
      </div>
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <div
            key={`${exp.company}-${index}`}
            className="panel p-6 md:p-10"
          >
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="font-heading text-2xl font-bold text-slate-950 md:text-3xl">{exp.role}</h3>
                <p className="mt-2 text-lg font-medium text-slate-600 md:text-xl">{exp.company}</p>
              </div>
              <div className="md:text-right">
                <p className="text-base font-medium text-slate-700 md:text-lg">
                  {exp.startDate} - {exp.endDate}
                </p>
                <p className="mt-1 text-sm text-slate-500 md:text-base">{exp.location}</p>
              </div>
            </div>

            {exp.projects ? (
              <div className="space-y-5">
                {exp.projects.map((project, projectIndex) => (
                  <div
                    key={`${project.name}-${projectIndex}`}
                    className={`rounded-[24px] border border-slate-900/10 bg-white/65 p-5 md:p-6 ${
                      projectIndex > 0 ? "" : ""
                    }`}
                  >
                    <h4 className="font-heading text-xl font-semibold text-slate-900 md:text-2xl">
                      {project.name}
                    </h4>
                    <p className="mb-4 mt-3 text-base leading-7 text-slate-600 md:text-lg">{project.description}</p>
                    <ul className="ml-5 list-disc space-y-2 text-sm text-slate-700 md:text-base">
                      {project.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="leading-7">{responsibility}</li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="pill"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <ul className="ml-5 list-disc space-y-2 text-sm text-slate-700 md:text-base">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="leading-7">{responsibility}</li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="pill"
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

