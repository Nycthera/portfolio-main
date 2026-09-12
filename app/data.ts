import certificateRecords from "./data/certificates.json";

export type ProjectAccent = "mint" | "lilac" | "orange" | "pink" | "blue";

export type Project = {
  number: string;
  title: string;
  kind: string;
  description: string;
  stack: string;
  href: string;
  accent: ProjectAccent;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "portfolio-main",
    kind: "identity / contact",
    description:
      "A personal site with a working contact flow and a quietly polished React surface.",
    stack: "React + Vite",
    href: "https://github.com/Nycthera/portfolio-main",
    accent: "mint",
  },
  {
    number: "02",
    title: "imager",
    kind: "visual utility",
    description:
      "A focused image experience built to keep the visual object in the foreground.",
    stack: "React + CSS",
    href: "https://github.com/Nycthera/imager",
    accent: "lilac",
  },
  {
    number: "03",
    title: "textile-waste",
    kind: "cause / education",
    description:
      "An awareness site translating the environmental cost of fashion into practical action.",
    stack: "React + Tailwind",
    href: "https://github.com/Nycthera/textile-waste",
    accent: "orange",
  },
  {
    number: "04",
    title: "quotewebiste",
    kind: "tiny ritual",
    description:
      "A small quote experience with a simple premise: make a few seconds feel intentional.",
    stack: "JavaScript",
    href: "https://github.com/Nycthera/quotewebiste",
    accent: "pink",
  },
  {
    number: "05",
    title: "taskmanger",
    kind: "daily system",
    description:
      "A task manager made for getting the next thing out of your head and onto the page.",
    stack: "JavaScript + CSS",
    href: "https://github.com/Nycthera/taskmanger",
    accent: "blue",
  },
];

export const certificates = certificateRecords;
