import { resumeData } from "@/data/resume";

export default function Skills() {
  const { skills } = resumeData;

  const skillCategories = [
    { title: "Languages", items: skills.languages },
    { title: "Tools", items: skills.tools },
    { title: "CS Fundamentals", items: skills.csFundamentals },
    { title: "Web Technologies", items: skills.webTechnologies },
    { title: "Databases", items: skills.databases },
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-10 text-center">
        Skills Summary
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></span>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {category.items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800 hover:scale-105 transition-transform duration-200"
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

