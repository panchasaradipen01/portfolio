import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden text-slate-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_60%)]" />
      <div className="pointer-events-none absolute left-[6%] top-28 h-28 w-28 rounded-full border border-white/60 bg-white/40 blur-2xl animate-drift" />
      <div className="pointer-events-none absolute right-[8%] top-[28rem] h-40 w-40 rounded-full bg-blue-200/25 blur-3xl animate-drift" />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
