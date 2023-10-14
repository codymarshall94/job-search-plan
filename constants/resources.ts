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
  url: string;
  tags: WebDevTag[];
  description: string;
}

export const WEB_DEV_RESOURCES: WebDevResource[] = [
  {
    name: "MDN Web Docs",
    url: "https://developer.mozilla.org/",
    tags: ["Documentation", "HTML", "CSS", "JavaScript"],
    description: "Comprehensive web development documentation.",
  },
  {
    name: "W3Schools",
    url: "https://www.w3schools.com/",
    tags: ["Tutorials", "HTML", "CSS", "JavaScript"],
    description: "Interactive tutorials for web technologies.",
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/",
    tags: ["Q&A", "Programming", "Web Development"],
    description: "Q&A community for developers.",
  },
  {
    name: "GitHub",
    url: "https://github.com/",
    tags: ["Version Control", "Code Hosting"],
    description: "Platform for hosting and collaborating on code.",
  },
  {
    name: "CSS-Tricks",
    url: "https://css-tricks.com/",
    tags: ["CSS", "Front-End"],
    description: "Tips, tricks, and tutorials for CSS.",
  },
  {
    name: "Smashing Magazine",
    url: "https://www.smashingmagazine.com/",
    tags: ["Web Design", "UI/UX"],
    description: "Web design and UX articles and resources.",
  },
  {
    name: "Dev.to",
    url: "https://dev.to/",
    tags: ["Community", "Blogging", "Programming"],
    description: "Community and blogging platform for developers.",
  },
  {
    name: "CodePen",
    url: "https://codepen.io/",
    tags: ["Front-End", "HTML", "CSS", "JavaScript"],
    description:
      "Online code editor for front-end developers to experiment and share web snippets.",
  },
  {
    name: "SitePoint",
    url: "https://www.sitepoint.com/",
    tags: ["Web Development", "HTML", "CSS", "JavaScript"],
    description:
      "A platform offering web development articles, tutorials, and courses.",
  },
  {
    name: "A List Apart",
    url: "https://alistapart.com/",
    tags: ["Web Design", "Front-End", "UI/UX"],
    description:
      "Focuses on web design and user experience articles and best practices.",
  },
  {
    name: "CSS Grid Garden",
    url: "https://cssgridgarden.com/",
    tags: ["CSS", "Front-End"],
    description: "An interactive game for learning CSS Grid layout.",
  },
  {
    name: "Mozilla Hacks",
    url: "https://hacks.mozilla.org/",
    tags: ["Web Development", "JavaScript", "Front-End"],
    description:
      "Mozilla's blog for web developers with insights and tutorials.",
  },
  {
    name: "DevHints",
    url: "https://devhints.io/",
    tags: ["Cheat Sheets", "Programming"],
    description:
      "Quick reference cheat sheets for various programming languages and tools.",
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/",
    tags: ["UI/UX", "Web Design"],
    description:
      "A platform for designers to showcase their work and find design inspiration.",
  },
  {
    name: "Scotch.io",
    url: "https://scotch.io/",
    tags: ["Tutorials", "Web Development", "JavaScript"],
    description:
      "Offers web development tutorials, particularly focused on JavaScript.",
  },
  {
    name: "The Net Ninja",
    url: "https://netninja.dev/",
    tags: ["Tutorials", "JavaScript", "Front-End"],
    description: "Video tutorials on web development and programming.",
  },
  {
    name: "Frontend Masters",
    url: "https://frontendmasters.com/",
    tags: ["Tutorials", "Web Development", "Front-End"],
    description:
      "A platform offering in-depth courses on front-end development.",
  },
];
