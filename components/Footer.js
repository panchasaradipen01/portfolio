export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className="text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} Dipen Panchasara. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


