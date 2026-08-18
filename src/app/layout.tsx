import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
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
    "Startup builder shipping with AI, daily. A live catalog of what's actually launched — StampDX, MagznMaker, MonieMatch, Findanyrev, and more.",
  openGraph: {
    title: "headfavour — Favour Mustapha",
    description:
      "Startup builder shipping with AI, daily. A live catalog of what's actually launched.",
    url: "https://headfavour.com",
    siteName: "headfavour",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@headfavour",
    creator: "@headfavour",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${plexMono.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper">
        {children}
      </body>
    </html>
  );
}
