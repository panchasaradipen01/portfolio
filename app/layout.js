import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  title: "Dipen Panchasara - React.js Developer | Frontend Portfolio",
  description: "React.js Developer with 2+ years of experience building scalable web applications, responsive UI, and performance-focused frontend systems with Next.js, TypeScript, and JavaScript.",
  keywords: [
    "Frontend Developer",
    "React JS Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Web Developer",
    "UI/UX Developer",
    "Frontend Engineer",
    "Ahmedabad Developer",
    "India Developer",
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
    title: "Dipen Panchasara - Software Engineer | Frontend Developer",
    description: "React.js Developer with 2+ years of experience in scalable frontend systems, responsive UI, and performance optimization.",
    url: "https://dipenpanchasara.dev",
    siteName: "Dipen Panchasara Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dipen Panchasara - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dipen Panchasara - Software Engineer | Frontend Developer",
    description: "React.js Developer with 2+ years of experience in scalable frontend systems, responsive UI, and performance optimization.",
    creator: "@DipenPanchasara",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://dipenpanchasara.dev" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#0f172a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dipen Panchasara",
              jobTitle: "Software Engineer (Frontend Developer)",
              description:
                "Experienced frontend developer with expertise in React JS, TypeScript and JavaScript.",
              email: "panchasaradipen01@gmail.com",
              telephone: "+91-9714241758",
              url: "https://dipenpanchasara.dev",
              sameAs: [
                "https://www.linkedin.com/in/DipenPanchasara",
                "https://leetcode.com/",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ahmedabad",
                addressCountry: "IN",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "B.H. Gardi College of Engineering & Technology",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Rajkot",
                  addressCountry: "IN",
                },
              },
              knowsAbout: [
                "React JS",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Frontend Development",
                "Web Development",
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
