export type Project = {
  id: string;
  no: string;
  name: string;
  category: string;
  description: string;
  href: string;
  displayUrl: string;
};

export const projects: Project[] = [
  {
    id: "portfolio",
    no: "01",
    name: "Design Portfolio",
    category: "Design",
    description:
      "My product design portfolio — the case studies and craft behind everything else on this page.",
    href: "https://design.headfavour.com",
    displayUrl: "design.headfavour.com",
  },
  {
    id: "stampdx",
    no: "02",
    name: "StampDX",
    category: "Growth",
    description:
      "Turns event attendees into brand ambassadors with shareable, personalized branded stamps — one link, zero apps.",
    href: "https://stampdx.com",
    displayUrl: "stampdx.com",
  },
  {
    id: "magznmaker",
    no: "03",
    name: "MagznMaker",
    category: "Media",
    description:
      "Turns a folder of photos into a beautifully designed, ready-to-share digital magazine in minutes.",
    href: "https://magznmaker.com",
    displayUrl: "magznmaker.com",
  },
  {
    id: "moniematch",
    no: "04",
    name: "MonieMatch",
    category: "Fintech",
    description:
      "Matches everyday investors with vetted small businesses nearby — structured deals, real returns, real hustle.",
    href: "https://moniematch.com",
    displayUrl: "moniematch.com",
  },
  {
    id: "findanyrev",
    no: "05",
    name: "Findanyrev",
    category: "Directory",
    description:
      "A fast way to find real reviews for anything, before you commit.",
    href: "https://anyrev.vercel.app",
    displayUrl: "anyrev.vercel.app",
  },
];

export type Social = {
  id: string;
  label: string;
  handle: string;
  href: string;
};

export const socials: Social[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "favourmustapha1",
    href: "https://www.linkedin.com/in/favourmustapha1/",
  },
  {
    id: "github",
    label: "GitHub",
    handle: "mustaphafavour1",
    href: "https://github.com/mustaphafavour1",
  },
  {
    id: "twitter",
    label: "X / Twitter",
    handle: "headfavour",
    href: "https://twitter.com/headfavour",
  },
  {
    id: "instagram",
    label: "Instagram",
    handle: "head_favour",
    href: "https://www.instagram.com/head_favour/",
  },
  {
    id: "facebook",
    label: "Facebook",
    handle: "favour.mustapha.9",
    href: "https://www.facebook.com/favour.mustapha.9/",
  },
];

export const EMAIL = "mustaphafavour1@gmail.com";
