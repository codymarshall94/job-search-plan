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
  | "Blogging"
  | "Cheat Sheets";

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
  {
    name: "CodePen",
    link: "https://codepen.io/",
    tags: ["Front-End", "HTML", "CSS", "JavaScript"],
    description:
      "Online code editor for front-end developers to experiment and share web snippets.",
  },
  {
    name: "SitePoint",
    link: "https://www.sitepoint.com/",
    tags: ["Web Development", "HTML", "CSS", "JavaScript"],
    description:
      "A platform offering web development articles, tutorials, and courses.",
  },
  {
    name: "A List Apart",
    link: "https://alistapart.com/",
    tags: ["Web Design", "Front-End", "UI/UX"],
    description:
      "Focuses on web design and user experience articles and best practices.",
  },
  {
    name: "CSS Grid Garden",
    link: "https://cssgridgarden.com/",
    tags: ["CSS", "Front-End"],
    description: "An interactive game for learning CSS Grid layout.",
  },
  {
    name: "Mozilla Hacks",
    link: "https://hacks.mozilla.org/",
    tags: ["Web Development", "JavaScript", "Front-End"],
    description:
      "Mozilla's blog for web developers with insights and tutorials.",
  },
  {
    name: "DevHints",
    link: "https://devhints.io/",
    tags: ["Cheat Sheets", "Programming"],
    description:
      "Quick reference cheat sheets for various programming languages and tools.",
  },
  {
    name: "Dribbble",
    link: "https://dribbble.com/",
    tags: ["UI/UX", "Web Design"],
    description:
      "A platform for designers to showcase their work and find design inspiration.",
  },
  {
    name: "Scotch.io",
    link: "https://scotch.io/",
    tags: ["Tutorials", "Web Development", "JavaScript"],
    description:
      "Offers web development tutorials, particularly focused on JavaScript.",
  },
  {
    name: "The Net Ninja",
    link: "https://netninja.dev/",
    tags: ["Tutorials", "JavaScript", "Front-End"],
    description: "Video tutorials on web development and programming.",
  },
  {
    name: "Frontend Masters",
    link: "https://frontendmasters.com/",
    tags: ["Tutorials", "Web Development", "Front-End"],
    description:
      "A platform offering in-depth courses on front-end development.",
  },
];
