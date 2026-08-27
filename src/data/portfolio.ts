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
    id: "upstream",
    title: "Upstream Contributions — Linux Kernel & Beyond",
    date: "2026",
    location: "Linux · Bitcoin Core · hippo-memory",
    badges: ["Upstream", "Linux Kernel", "CVE", "Open Source"],
    description:
      "Contributed accepted fixes to the Linux kernel, Bitcoin Core, and hippo-memory. Linux work includes 10 accepted upstream patches across Bluetooth, DRM/panel, IIO, MediaTek Wi-Fi, and coreboot, led by the Realtek firmware-bounds fix assigned CVE-2026-68479. In Bitcoin Core, removed obsolete wallet declarations and LegacyScriptPubKeyMan references, then updated the retained migration path and targeted wallet tests. In hippo-memory, landed three pull requests fixing zero-context budget handling, fractional drill-depth validation, and malformed-version rollback guards with regression coverage.",
    stats: [
      { value: "10", label: "accepted kernel patches" },
      { value: "1", label: "assigned CVE" },
      { value: "BTC", label: "Bitcoin Core" },
      { value: "3", label: "merged hippo-memory PRs" },
    ],
    links: [
      {
        label: "CVE-2026-68479",
        href: "https://www.cve.org/CVERecord?id=CVE-2026-68479",
      },
      {
        label: "609c5b04a28d",
        href: "https://github.com/torvalds/linux/commit/609c5b04a28dc1b0f3af6a7bc93055135b2d2059",
      },
      {
        label: "e3643fbddb25",
        href: "https://github.com/torvalds/linux/commit/e3643fbddb257c928c075cab05bbd929106b56ee",
      },
      {
        label: "0acd4eeb4b22",
        href: "https://github.com/torvalds/linux/commit/0acd4eeb4b225b9bebbf9ef96cc10cdd79b94899",
      },
      {
        label: "2bf6b9baca93",
        href: "https://github.com/torvalds/linux/commit/2bf6b9baca9372ea51b6d0f2820dc9bf29a83ef4",
      },
      {
        label: "a58a57a1076f",
        href: "https://github.com/torvalds/linux/commit/a58a57a1076f8c5dae0327e3710899478c3be901",
      },
      {
        label: "653c6e289b13",
        href: "https://github.com/torvalds/linux/commit/653c6e289b13cc6942f3e8f8e3c568e70fa42d1f",
      },
      {
        label: "9417c5818a01",
        href: "https://github.com/torvalds/linux/commit/9417c5818a0146980c2608fda94c908e604eb033",
      },
      {
        label: "f0f3401388dc",
        href: "https://kernel.googlesource.com/pub/scm/linux/kernel/git/jic23/iio/+/f0f3401388dc9ba396d0c64888cf5aaf65e0dc06",
      },
      {
        label: "a9f950adfe21",
        href: "https://github.com/torvalds/linux/commit/a9f950adfe2147318d75e7a6eab5e814851802ac",
      },
      {
        label: "a41000ba3a23",
        href: "https://github.com/torvalds/linux/commit/a41000ba3a230bed1e422f283486ff8f77fe0d30",
      },
      {
        label: "Bitcoin Core PR #35955",
        href: "https://github.com/bitcoin/bitcoin/pull/35955",
      },
      {
        label: "hippo-memory",
        href: "https://github.com/kitfunso/hippo-memory",
      },
    ],
  },
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
