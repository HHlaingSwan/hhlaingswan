import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Htet Hlaing Swan | Developer",
    template: "%s | Htet Hlaing Swan",
  },
  description:
    "Full-Stack Developer from Myanmar specializing in React, Node.js, MongoDB, and modern web applications. Building scalable solutions with clean code.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB",
    "TypeScript",
    "Next.js",
    "Web Developer",
    "Portfolio",
    "Myanmar",
  ],
  authors: [
    { name: "Htet Hlaing Swan", url: "https://hhlaingswan.vercel.app" },
  ],
  creator: "Htet Hlaing Swan",
  publisher: "Htet Hlaing Swan",
  formatDetection: {
    email: true,
    address: true,
  },
  metadataBase: new URL("https://hhlaingswan.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hhlaingswan.vercel.app",
    title: "Htet Hlaing Swan | Full-Stack Developer",
    description:
      "Full-Stack Developer from Myanmar specializing in React, Node.js, MongoDB, and modern web applications.",
    siteName: "Htet Hlaing Swan",
    images: [
      {
        url: "/personal.jpg",
        width: 1200,
        height: 630,
        alt: "Htet Hlaing Swan - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Htet Hlaing Swan | Full-Stack Developer",
    description:
      "Full-Stack Developer from Myanmar specializing in React, Node.js, MongoDB, and modern web applications.",
    images: ["/personal.jpg"],
    creator: "@hhlaingswan",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <a
          href="#contact"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg"
        >
          Skip to contact form
        </a>
        {children}
      </body>
    </html>
  );
}
