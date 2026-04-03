import { resumeData } from "@/data/resume";

export default function Projects() {
  const { projects } = resumeData;

  return (
    <section id="projects" className="section-shell section-block">
      <div className="section-heading">
        <div className="eyebrow">Projects</div>
        <h2 className="font-heading text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
          Selected academic build
        </h2>
      </div>
      {projects.map((project, index) => (
        <div
          key={`${project.name}-${index}`}
          className="panel mb-6 p-6 md:p-10"
        >
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Case study</p>
              <h3 className="mt-3 font-heading text-2xl font-bold text-slate-950 md:text-3xl">{project.name}</h3>
            </div>
            <div className="rounded-full border border-slate-900/10 bg-white/75 px-4 py-2 text-sm font-medium text-slate-600">
              Product + engineering focused
            </div>
          </div>
          <p className="mb-6 max-w-4xl text-base leading-8 text-slate-700 md:text-lg">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2.5">
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
    </section>
  );
}

