import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Kraft Hauz Automations",
    template: "%s · Kraft Hauz Automations"
  },
  description:
    "AI-powered automation consultancy helping modern businesses eliminate manual work, streamline operations, and scale without increasing headcount.",
  metadataBase: new URL("https://kraft-hauz-automations.vercel.app"),
  openGraph: {
    title: "Kraft Hauz Automations",
    description:
      "AI-powered automation systems for modern businesses—workflows, integrations, and ops automation built to scale.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Kraft Hauz Automations",
    description:
      "AI-powered automation systems for modern businesses—workflows, integrations, and ops automation built to scale."
  }
};

export default function SiteLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${inter.className} h-full bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}

