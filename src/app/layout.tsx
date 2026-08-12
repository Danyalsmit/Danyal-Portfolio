import type { Metadata } from "next";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import { profile, siteMeta } from "@/data/profile";
import FloatingContact from "@/components/ui/FloatingContact";
import ExitIntentPopup from "@/components/ui/ExitIntentPopup";
import SmoothScroll from "@/components/ui/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: siteMeta.title,
    template: `%s | ${profile.fullName}`,
  },
  description: siteMeta.description,
  applicationName: profile.fullName,
  authors: [{ name: profile.fullName, url: siteMeta.url }],
  creator: profile.fullName,
  publisher: profile.fullName,
  keywords: [
    "Danyal Khan",
    "Danyal Khan Developer",
    "Danyal Khan Web Developer",
    "Danyal Khan MERN Developer",
    "Danyal Khan Karachi",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Karachi",
    "Web Developer Pakistan",
    "Freelance Web Developer Pakistan",
    "Hire MERN Developer",
    "Microsoft 365 Add-in Developer",
  ],
  alternates: {
    canonical: siteMeta.url,
  },
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.url,
    siteName: siteMeta.title,
    locale: "en_US",
    type: "profile",
    images: [{ url: "/images/og-cover.svg", width: 1200, height: 630, alt: siteMeta.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
    images: ["/images/og-cover.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
   icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

// Structured data (JSON-LD) — tells Google exactly who you are, what you do,
// and which profiles belong to you, so your name / role can surface as a
// rich result and be linked to your GitHub, LinkedIn, and Upwork profiles.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  alternateName: profile.name,
  url: siteMeta.url,
  jobTitle: profile.role,
  description: siteMeta.description,
  image: `${siteMeta.url}${profile.avatarSrc}`,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  sameAs: [profile.social.github, profile.social.linkedin, profile.social.upwork],
  knowsAbout: [
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "Full Stack Development",
    "MERN Stack",
    "Microsoft 365 Add-ins",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Freelance / Self-Employed",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Runs before paint so the correct theme applies immediately —
            avoids a flash of the wrong theme on load. Default is dark. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.add('light')}}catch(e){}`,
          }}
        />
      </head>
      <body className="bg-void text-text antialiased">
        <SmoothScroll />
        {children}
        <FloatingContact />
        <ExitIntentPopup />
      </body>
    </html>
  );
}