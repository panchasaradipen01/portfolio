import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { resumeData } from "@/data/resume";

export const metadata = {
  title: "Dipen Panchasara — MERN Stack & Frontend Engineer",
  description:
    "Dipen Panchasara — MERN Stack Developer with 3+ years experience building AI-integrated, full-stack web applications using React.js, Next.js, Node.js, and TypeScript.",
  keywords: [
    "Dipen Panchasara",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "AI Integration",
    "Gemini AI",
    "Bengaluru Developer",
    "India",
  ],
  authors: [{ name: "Dipen Panchasara" }],
  creator: "Dipen Panchasara",
  publisher: "Dipen Panchasara",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dipenpanchasara.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dipen Panchasara — MERN Stack & Frontend Engineer",
    description:
      "MERN Stack Developer with 3+ years experience building scalable, responsive web applications and AI integrations.",
    url: "https://dipenpanchasara.dev",
    siteName: "Dipen Panchasara Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dipen Panchasara — MERN Stack & Frontend Engineer",
    description:
      "MERN Stack Developer with 3+ years experience building scalable, responsive web applications and AI integrations.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  const { personalInfo } = resumeData;

  return (
    <html lang="en" className="scroll-smooth" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://dipenpanchasara.dev" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#0B0F14" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Prevent theme flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var pref = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
                  var theme = saved ? saved : pref;
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: personalInfo.name,
              jobTitle: personalInfo.title,
              description:
                "MERN Stack Developer with 3+ years experience building scalable web applications and AI integrations.",
              email: personalInfo.contact.email,
              telephone: personalInfo.contact.phone,
              url: "https://dipenpanchasara.dev",
              sameAs: [
                personalInfo.contact.linkedin,
                personalInfo.contact.leetcode,
                personalInfo.contact.github,
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bengaluru",
                addressCountry: "IN",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "B.H. Gardi College of Engineering & Technology",
              },
              knowsAbout: [
                "React.js",
                "Next.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "TypeScript",
                "JavaScript",
                "Gemini AI",
                "GraphQL",
                "Full Stack Development",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
