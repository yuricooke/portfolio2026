import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yuri Cooke - Frontend Developer & UI/UX Designer",
  description:
    "Yuri Cooke is a frontend developer and UI/UX designer who creates digital experiences that not only look stunning but perform flawlessly across every device. Specialized in React, Next.js, TypeScript, and modern web design.",
  keywords: [
    "frontend developer",
    "UI/UX designer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "web developer",
    "UI designer",
    "UX designer",
    "responsive design",
    "web design",
    "frontend design",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Angular",
    "portfolio",
    "web development",
    "user interface design",
    "user experience design",
  ],
  authors: [{ name: "Yuri Cooke" }],
  creator: "Yuri Cooke",
  publisher: "Yuri Cooke",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yuricooke.com"), // Update with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yuri Cooke - Frontend Developer & UI/UX Designer",
    description:
      "Frontend developer and UI/UX designer creating pixel-perfect digital experiences. Specialized in React, Next.js, TypeScript, and modern web design.",
    url: "https://yuricooke.com", // Update with your actual domain
    siteName: "Yuri Cooke Portfolio",
    images: [
      {
        url: "/Cooke_Yuri.jpg",
        width: 1200,
        height: 630,
        alt: "Yuri Cooke - Frontend Developer & UI/UX Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuri Cooke - Frontend Developer & UI/UX Designer",
    description:
      "Frontend developer and UI/UX designer creating pixel-perfect digital experiences. Specialized in React, Next.js, TypeScript, and modern web design.",
    images: ["/Cooke_Yuri.jpg"],
    creator: "@yuricooke", // Update with your Twitter handle if available
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
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  category: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yuri Cooke",
    jobTitle: "Frontend Developer & UI/UX Designer",
    description:
      "Frontend developer and UI/UX designer creating pixel-perfect digital experiences. Specialized in React, Next.js, TypeScript, and modern web design.",
    url: "https://yuricooke.com", // Update with your actual domain
    image: "https://yuricooke.com/Cooke_Yuri.jpg", // Update with your actual domain
    sameAs: [
      // Add your social media profiles
      // "https://github.com/yuricooke",
      // "https://linkedin.com/in/yuricooke",
      // "https://twitter.com/yuricooke",
    ],
    knowsAbout: [
      "Frontend Development",
      "UI/UX Design",
      "React",
      "Next.js",
      "TypeScript",
      "Web Design",
      "Responsive Design",
      "Angular",
      "Tailwind CSS",
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/syj1eif.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
