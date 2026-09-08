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
    id: "design-system",
    no: "01",
    name: "Design System",
    category: "System",
    description:
      "The tokens, components, and patterns behind everything I ship.",
    href: "https://designsystem.headfavour.com",
    displayUrl: "designsystem.headfavour.com",
  },
  {
    id: "portfolio",
    no: "02",
    name: "Portfolio",
    category: "Design",
    description: "My product design portfolio — case studies and craft.",
    href: "https://design.headfavour.com",
    displayUrl: "design.headfavour.com",
  },
  {
    id: "stampdx",
    no: "03",
    name: "StampDX",
    category: "Growth",
    description:
      "Turns event attendees into brand ambassadors with shareable, branded stamps.",
    href: "https://www.stampdx.com",
    displayUrl: "stampdx.com",
  },
  {
    id: "magznmaker",
    no: "04",
    name: "MagznMaker",
    category: "Media",
    description:
      "Turns a folder of photos into a ready-to-share digital magazine in minutes.",
    href: "https://www.magznmaker.com",
    displayUrl: "magznmaker.com",
  },
  {
    id: "moniematch",
    no: "05",
    name: "MonieMatch",
    category: "Fintech",
    description:
      "Matches everyday investors with vetted small businesses nearby.",
    href: "https://www.moniematch.com",
    displayUrl: "moniematch.com",
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
