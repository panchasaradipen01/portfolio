import { resumeData } from "@/data/resume";

export default function Navigation() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-black/5 bg-white/55 backdrop-blur-xl">
      <div className="section-shell">
        <div className="flex min-h-18 items-center justify-between gap-4 py-4">
          <a href="#">
            <div className="font-heading text-lg font-bold tracking-tight text-slate-900 md:text-xl">
              {resumeData.personalInfo.name.split(" ")[0]} {resumeData.personalInfo.name.split(" ")[1]}
            </div>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition duration-200 hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

