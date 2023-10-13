export type WebDevTag =
  | "Documentation"
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "Tutorials"
  | "Q&A"
  | "Programming"
  | "Version Control"
  | "Web Development"
  | "Code Hosting"
  | "Front-End"
  | "Web Design"
  | "UI/UX"
  | "Community"
  | "Blogging";

interface WebDevResource {
  name: string;
  link: string;
  tags: WebDevTag[];
  description: string;
}

export const WEB_DEV_RESOURCES: WebDevResource[] = [
  {
    name: "MDN Web Docs",
    link: "https://developer.mozilla.org/",
    tags: ["Documentation", "HTML", "CSS", "JavaScript"],
    description: "Comprehensive web development documentation.",
  },
  {
    name: "W3Schools",
    link: "https://www.w3schools.com/",
    tags: ["Tutorials", "HTML", "CSS", "JavaScript"],
    description: "Interactive tutorials for web technologies.",
  },
  {
    name: "Stack Overflow",
    link: "https://stackoverflow.com/",
    tags: ["Q&A", "Programming", "Web Development"],
    description: "Q&A community for developers.",
  },
  {
    name: "GitHub",
    link: "https://github.com/",
    tags: ["Version Control", "Code Hosting"],
    description: "Platform for hosting and collaborating on code.",
  },
  {
    name: "CSS-Tricks",
    link: "https://css-tricks.com/",
    tags: ["CSS", "Front-End"],
    description: "Tips, tricks, and tutorials for CSS.",
  },
  {
    name: "Smashing Magazine",
    link: "https://www.smashingmagazine.com/",
    tags: ["Web Design", "UI/UX"],
    description: "Web design and UX articles and resources.",
  },
  {
    name: "Dev.to",
    link: "https://dev.to/",
    tags: ["Community", "Blogging", "Programming"],
    description: "Community and blogging platform for developers.",
  },
];
