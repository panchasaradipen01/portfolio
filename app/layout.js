import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "Dipen Panchasara - Software Engineer | Frontend Developer | React JS Expert",
  description: "Experienced Frontend Developer with 2+ years of expertise in React JS, Next.js, TypeScript, and JavaScript. Specialized in building scalable web applications, e-commerce platforms, and modern UI/UX solutions. Available for opportunities.",
  keywords: [
    "Frontend Developer",
    "React JS Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Web Developer",
    "Software Engineer",
    "UI/UX Developer",
    "React Native",
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
    description: "Experienced Frontend Developer with 2+ years of expertise in React JS, Next.js, TypeScript, and JavaScript.",
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
    description: "Experienced Frontend Developer with 2+ years of expertise in React JS, Next.js, TypeScript, and JavaScript.",
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
        <link rel="icon" href="/favicon.ico" />
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
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
