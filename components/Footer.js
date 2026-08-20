export default function Footer() {
  return (
    <footer className="border-t border-[#232C38] py-7">
      <div className="wrap flex justify-between items-center flex-wrap gap-2.5 font-mono text-[0.7rem] text-[#5C6773]">
        <span>© {new Date().getFullYear()} Dipen Panchasara</span>
        <span>Built with Next.js, Tailwind CSS &amp; Three.js</span>
      </div>
    </footer>
  );
}
