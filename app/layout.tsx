import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Developer UI-UX Portfolio",
  description: "Developer portfolio generated from Figma, running on Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/syj1eif.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}


