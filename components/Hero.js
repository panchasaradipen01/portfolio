import { resumeData } from "@/data/resume";
import DownloadPDF from "./DownloadPDF";

export default function Hero() {
  const { personalInfo } = resumeData;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          {personalInfo.name}
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-slate-600 dark:text-slate-300 mb-6 font-medium">
          {personalInfo.title}
        </h2>
        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10">
          {personalInfo.experience} | {personalInfo.tagline}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${personalInfo.contact.email}`}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
          >
            Get In Touch
          </a>
          <a
            href={personalInfo.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all duration-200 font-medium"
          >
            LinkedIn
          </a>
          <DownloadPDF />
        </div>
      </div>
    </section>
  );
}

