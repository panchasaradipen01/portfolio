import { resumeData } from "@/data/resume";

export default function Skills() {
  const { skills } = resumeData;

  const skillCategories = [
    { title: "Languages", items: skills.languages },
    { title: "Frontend", items: skills.frontend },
    { title: "Web", items: skills.web },
    { title: "Testing", items: skills.testing },
    { title: "Tools", items: skills.tools },
    { title: "Other", items: skills.other },
  ];

  return (
    <section id="skills" className="section-shell section-block">
      <div className="section-heading">
        <div className="eyebrow">Skills</div>
        <h2 className="font-heading text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
          Tools I use to ship reliable frontend work
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="grid-card"
          >
            <h3 className="mb-5 flex items-center gap-3 font-heading text-xl font-semibold text-slate-950 md:text-2xl">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-950 text-xs font-bold text-white">
                {category.title.charAt(0)}
              </span>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {category.items.map((skill) => (
                <span
                  key={skill}
                  className="pill hover:-translate-y-0.5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

