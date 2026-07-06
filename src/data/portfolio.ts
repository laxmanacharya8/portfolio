export type Achievement = {
  id: string;
  title: string;
  date: string;
  team?: string;
  location?: string;
  description: string;
  badges: string[];
  links?: { label: string; href: string }[];
  stats?: { value: string; label: string }[];
  teamMembers?: string[];
};

export type Project = {
  id: string;
  title: string;
  type: string;
  description: string;
  tech: string[];
  year: string;
  github: string;
  caseStudyLabel: string;
  accent: "language" | "health" | "systems" | "finance";
};

export const socials = {
  email: "laxmanacharya8848@gmail.com",
  github: "https://github.com/laxmanacharya8",
  linkedin: "https://www.linkedin.com/in/laxmanacharya8848",
  githubUser: "laxmanacharya8",
};

export const statusChips = [
  "Kathmandu University",
  "Digital Health",
  "Language Accessibility",
  "Mobile Apps",
  "Social Impact Tech",
];

export const achievements: Achievement[] = [
  {
    id: "hackforuhc",
    title: "HackForUHC 2026 — 1st Place",
    date: "June 18–19, 2026",
    team: "CLAIM∅",
    badges: ["1st Place", "Digital Health", "openIMIS", "Kathmandu"],
    description:
      "As team CLAIM∅, we won 1st place at HackForUHC 2026, a national hackathon focused on digital innovation for openIMIS and universal health coverage. After the win, we were invited to participate in and present our solution at the 10th anniversary openIMIS Community Meeting in Kathmandu.",
    links: [
      { label: "HackForUHC 2026 event listing", href: "#hackforuhc-event" },
      { label: "Health Informatics Lab announcement", href: "#hil-announcement" },
      { label: "openIMIS Community Meeting presentation", href: "#openimis-presentation" },
    ],
  },
  {
    id: "openimis",
    title: "Presented at the 10th Anniversary openIMIS Community Meeting",
    date: "June 23–25, 2026",
    location: "Kathmandu, Nepal",
    badges: ["Presented", "openIMIS", "Digital Health", "Kathmandu"],
    description:
      "Following our HackForUHC 2026 win, our team presented our solution at the 10th anniversary openIMIS Community Meeting in Kathmandu. The event brought together software developers, implementers, academia, funders, and stakeholders working on health insurance, social protection, and digital public goods.",
    stats: [
      { value: "120+", label: "participants" },
      { value: "20", label: "countries" },
      { value: "KTM", label: "Kathmandu, Nepal" },
      { value: "DPG", label: "Digital public goods" },
    ],
  },
  {
    id: "harvard",
    title: "Harvard Health Systems Innovation Lab Hackathon",
    date: "April 10–11, 2026",
    team: "Never Silent Pass",
    location: "Kathmandu Hub",
    badges: ["Participant", "Health Systems", "AI", "Kathmandu Hub"],
    description:
      "Participated with team Never Silent Pass in the 7th edition of the Harvard Health Systems Innovation Lab Hackathon at the Kathmandu Hub. The event focused on building high-value health systems by leveraging AI.",
  },
];

export const projects: Project[] = [
  {
    id: "bridgelens",
    title: "Bridgelens",
    type: "Browser Extension / Language Accessibility",
    description:
      "Bridgelens is a browser extension designed to help users translate languages easily between English, Tamang, and Nepali. It focuses on making multilingual communication more accessible and practical.",
    tech: ["JavaScript", "HTML", "CSS", "Browser Extension APIs"],
    year: "2026",
    github: "https://github.com/laxmanacharya8/Bridgelens",
    caseStudyLabel: "Coming Soon",
    accent: "language",
  },
  {
    id: "hamro-care",
    title: "Hamro Care",
    type: "Mobile Health Application",
    description:
      "Hamro Care is a mobile application built with React Native, FastAPI, and MySQL. It supports AI-based symptom checking, family health tracking, and interaction history management.",
    tech: ["React Native", "FastAPI", "MySQL", "TypeScript", "AI-assisted health tools"],
    year: "2026",
    github: "https://github.com/laxmanacharya8/Hamro-Care",
    caseStudyLabel: "Coming Soon",
    accent: "health",
  },
  {
    id: "zero-burn",
    title: "Zero-Burn",
    type: "Civic Technology / Waste-Burning Response",
    description:
      "Zero-Burn OS is a GIS and phone-IoT civic response system for detecting, mapping, and preventing open waste burning.",
    tech: ["TypeScript", "GIS", "Phone IoT", "Civic Technology"],
    year: "2026",
    github: "https://github.com/laxmanacharya8/Zero-Burn-",
    caseStudyLabel: "Coming Soon",
    accent: "systems",
  },
  {
    id: "openimis-niyam",
    title: "openIMIS Niyam",
    type: "Claim Validation Module / Digital Health",
    description:
      "A deterministic pre-submission claim validation module for openIMIS with transparent rule-based decisions, standalone Python support, and seamless backend integration.",
    tech: ["Python", "openIMIS", "Rule-based validation", "Backend integration"],
    year: "2026",
    github: "https://github.com/laxmanacharya8/openIMIS-Niyam",
    caseStudyLabel: "Coming Soon",
    accent: "health",
  },
];
