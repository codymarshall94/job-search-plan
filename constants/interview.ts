export type JuniorInterviewPrep = {
  html: string[];
  css: string[];
  javascript: string[];
  react: string[];
  nextjs: string[];
};

export type InterviewPrep = {
  junior: JuniorInterviewPrep;
};

export const INTERVIEW_SPOKEN: InterviewPrep = {
  junior: {
    html: [
      "What is the purpose of the DOCTYPE declaration in HTML?",
      "Explain the difference between block-level and inline-level elements.",
      "What is the semantic meaning of the <article> tag?",
      "What are self-closing HTML tags, and can you provide an example?",
      "What is the purpose of the alt attribute in an <img> tag?",
      "How do you create a hyperlink in HTML?",
      "Explain the difference between <div> and <span> elements.",
      "What is the difference between HTML and XHTML?",
      "What is the role of the <meta> tag in HTML?",
      "How can you include comments in HTML documents?",
    ],
    css: [
      "What is the box model in CSS, and how does it work?",
      "Explain the difference between margin and padding.",
      "What is the purpose of CSS selectors?",
      "What is a CSS pseudo-class, and provide an example.",
      "What is the difference between relative and absolute positioning in CSS?",
      "What is the CSS float property used for?",
      "How can you center an element horizontally and vertically in CSS?",
      "What is the difference between display: block, display: inline, and display: inline-block?",
      "Explain the concept of specificity in CSS.",
      "What is responsive web design, and how can you achieve it with CSS?",
    ],
    javascript: [
      "What is JavaScript, and how does it differ from Java?",
      "What is a variable in JavaScript, and how do you declare one?",
      "Explain the difference between 'let', 'const', and 'var' in variable declaration.",
      "What is the purpose of the 'this' keyword in JavaScript?",
      "How do you create a function in JavaScript?",
      "What is an array in JavaScript, and how can you add and remove elements from it?",
      "Explain the difference between '==' and '===' in JavaScript.",
      "What is an object in JavaScript, and how do you access its properties?",
      "What is event delegation in JavaScript?",
      "What is a callback function, and why is it useful?",
    ],
    react: [
      "What is React, and what problem does it solve?",
      "Explain the concept of virtual DOM in React.",
      "What are functional components in React, and when would you use them?",
      "How do you pass data from a parent component to a child component in React?",
      "What is JSX, and how is it different from HTML?",
      "What is state in React, and how do you manage it?",
      "Explain the component lifecycle in React.",
      "What is a React prop, and how do you use it?",
      "What are React hooks, and why are they used?",
      "What is the purpose of the 'key' prop when rendering lists in React?",
    ],
    nextjs: [
      "What is Next.js, and what are its advantages over traditional React applications?",
      "Explain server-side rendering (SSR) and how Next.js supports it.",
      "How do you create a dynamic route in Next.js?",
      "What is the purpose of 'getStaticProps' and 'getServerSideProps' in Next.js?",
      "What are API routes in Next.js, and how do you create them?",
      "What is the 'Link' component in Next.js, and how does it optimize client-side navigation?",
      "Explain the purpose of 'Head' in Next.js.",
      "How do you deploy a Next.js application to a production environment?",
      "What is the purpose of 'getInitialProps' and how is it used in Next.js?",
      "How can you handle data fetching and API requests in Next.js applications?",
    ],
  },
};
