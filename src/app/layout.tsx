import type { Metadata } from "next";
import { Alan_Sans, IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";

const alanSans = Alan_Sans({
  subsets: ["latin"],
  variable: "--font-alan-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://headfavour.com"),
  title: "headfavour — Favour Mustapha",
  description:
    "Startup builder shipping with AI, daily. A live catalog of what's actually launched — StampDX, MagznMaker, MonieMatch, and more.",
  openGraph: {
    title: "Favour Mustapha ᐧ Serial Startup Builder",
    description:
      "Startup builder shipping with AI, daily. A live catalog of what's actually launched.",
    url: "https://headfavour.com",
    siteName: "headfavour",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Favour Mustapha ᐧ Serial Startup Builder",
    site: "@headfavour",
    creator: "@headfavour",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${alanSans.variable} ${plexMono.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex h-dvh flex-col overflow-hidden bg-ink text-paper">
        {children}
      </body>
    </html>
  );
}
