import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = "https://hhlaingswan.vercel.app";
const SITE_NAME = "Htet Hlaing Swan";
const DESCRIPTION =
  "Full-Stack Developer from Myanmar specializing in React, Node.js, MongoDB, and modern web applications.";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Developer`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
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
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: `${SITE_NAME} | Full-Stack Developer`,
    description: DESCRIPTION,
    siteName: SITE_NAME,
    images: [{ url: "/cartoon.jpeg", width: 1200, height: 630, alt: `${SITE_NAME} - Full-Stack Developer` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Full-Stack Developer`,
    description: DESCRIPTION,
    images: ["/cartoon.jpeg"],
    creator: "@hhlaingswan",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
