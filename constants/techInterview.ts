export type InterviewTopics = {
  [key: string]: string[];
  html: string[];
  css: string[];
  javascript: string[];
  react: string[];
  nextjs: string[];
};

export type InterviewPrep = {
  junior: InterviewTopics;
  mid: InterviewTopics;
  senior: InterviewTopics;
};

export const INTERVIEW_TECHNICAL: InterviewPrep = {
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
  mid: {
    html: [
      "Explain the purpose and usage of HTML5 semantic elements like <header>, <footer>, and <section>.",
      "What is the HTML entity code for a non-breaking space, and why is it used?",
      "What is the 'meta' tag, and what are some common attributes used with it?",
      "Describe the difference between 'GET' and 'POST' methods in HTML forms.",
      "What is the 'canvas' element in HTML, and how can it be used for drawing graphics?",
      "Explain the concept of responsive images in HTML.",
      "What is the purpose of the 'figure' and 'figcaption' elements in HTML?",
      "How can you embed audio and video in an HTML document?",
      "What is the purpose of the 'details' and 'summary' elements in HTML?",
      "What is the 'time' element in HTML, and how is it used?",
    ],
    css: [
      "What is the CSS 'box-sizing' property, and how does it affect the layout of elements?",
      "Explain the concept of CSS specificity and how it determines which styles are applied.",
      "What is the 'z-index' property in CSS, and how does it control the stacking order of elements?",
      "What is the CSS 'transform' property, and how can it be used for element transformations?",
      "Describe the difference between 'rem' and 'em' units in CSS.",
      "What is the 'media query' in CSS, and how is it used for responsive design?",
      "What are pseudo-elements in CSS, and provide some examples.",
      "Explain the concept of 'box-shadow' and 'text-shadow' in CSS.",
      "What is the CSS 'flexbox' layout model, and how can it be used for creating flexible layouts?",
      "What is the purpose of 'CSS variables' (custom properties), and how are they defined and used?",
    ],
    javascript: [
      "What is the 'event loop' in JavaScript, and how does it handle asynchronous operations?",
      "Explain the concept of 'closures' in JavaScript, and provide an example of their use.",
      "What is 'hoisting' in JavaScript, and how does it impact variable declarations and function definitions?",
      "Describe the difference between 'map', 'filter', and 'reduce' methods in JavaScript arrays.",
      "What is 'destructuring' in JavaScript, and how can it simplify working with objects and arrays?",
      "What is 'async/await' in JavaScript, and how does it simplify asynchronous code?",
      "Explain the 'localStorage' and 'sessionStorage' objects in JavaScript and their usage.",
      "What are 'promises' in JavaScript, and how can they be used for managing asynchronous operations?",
      "What is 'scope' in JavaScript, and how does it impact variable visibility and accessibility?",
      "What is the 'Module' system in JavaScript, and how can it be used for code organization and reuse?",
    ],
    react: [
      "What are 'higher-order components' (HOCs) in React, and why are they used?",
      "Explain the concept of 'context' in React, and how can it be used for state management?",
      "What is 'render prop' in React, and how does it promote component composition?",
      "What is 'Redux,' and how does it work as a state management library in React?",
      "What is 'React Router,' and how can it be used for client-side routing in React applications?",
      "Explain the concept of 'memoization' in React and its benefits for performance optimization.",
      "What are 'portals' in React, and how can they be used for rendering elements outside the component hierarchy?",
      "Describe 'React Fragments' and their use in rendering multiple elements without a parent container.",
      "What is the 'Error Boundary' concept in React, and how can it be used to handle errors gracefully?",
      "What is 'Server Components' in React, and how does it enhance server-side rendering?",
    ],
    nextjs: [
      "Explain 'Next.js Image,' and how does it optimize image loading and performance?",
      "What are 'environment variables' in Next.js, and how can they be used for configuration?",
      "Describe the purpose of 'getStaticPaths' in Next.js, and how is it used for dynamic routes?",
      "What are 'middleware' functions in Next.js, and how can they be used for request handling?",
      "What is 'SWR' (Stale-While-Revalidate) in Next.js, and how does it simplify data fetching?",
      "Explain the concept of 'pre-rendering' in Next.js and its impact on application performance.",
      "What is 'Web Vitals,' and how can Next.js be optimized for better user experience?",
      "Describe 'serverless deployment' in Next.js, and how can it be achieved on popular platforms?",
      "What are 'hybrid applications' in Next.js, and how do they combine server-side and client-side rendering?",
      "Explain 'Next.js telemetry' and its role in gathering usage statistics and performance insights.",
    ],
  },
  senior: {
    html: [
      "Explain the HTML5 'Web Storage' API, including 'localStorage' and 'sessionStorage' usage.",
      "What is the purpose of 'progressive web apps' (PWAs), and how can they be implemented with HTML?",
      "Describe the 'picture' element and 'srcset' attribute in HTML and their role in responsive images.",
      "What is 'Web Components' in HTML, and how can it be used for encapsulating and reusing UI elements?",
      "Explain 'Content Security Policy' (CSP) in HTML and its role in preventing cross-site scripting (XSS) attacks.",
      "What is 'microdata' in HTML, and how can it be used to provide structured data to search engines?",
      "Describe 'long polling' and 'server-sent events' (SSE) in HTML for real-time communication.",
      "What is 'web workers' in HTML, and how can they be used for parallel processing in the browser?",
      "Explain 'semantic HTML' and its significance for accessibility and SEO optimization.",
      "What is 'HTML forms validation,' and how can it be achieved using HTML attributes and JavaScript?",
    ],
    css: [
      "Discuss 'custom properties' (CSS variables) and their use in creating dynamic and maintainable styles.",
      "What is 'Critical CSS,' and how can it be implemented to improve page load performance?",
      "Describe the 'BEM' (Block Element Modifier) methodology in CSS and its benefits for class naming.",
      "What is the 'CSS-in-JS' approach, and how does it integrate CSS with JavaScript?",
      "Explain the 'CSS Grid' layout system and its advantages for complex layouts.",
      "Discuss 'CSS transitions' and 'animations' for creating smooth and interactive user interfaces.",
      "What is 'CSS architecture,' and how can it be organized for scalable and maintainable styles?",
      "Describe 'browser compatibility' challenges in CSS and strategies for handling them.",
      "Explain 'critical path rendering' in CSS and its impact on rendering performance.",
      "What are 'pseudo-classes' and 'pseudo-elements' in CSS, and how can they be used for styling?",
    ],
    javascript: [
      "What are 'web workers' in JavaScript, and how can they be used for multi-threading in web applications?",
      "Explain 'generators' and 'iterators' in JavaScript, and their use in asynchronous programming.",
      "What is 'functional programming' in JavaScript, and how does it promote code readability and maintainability?",
      "Discuss 'memoization' techniques in JavaScript and their benefits for performance optimization.",
      "Describe 'asynchronous generators' in JavaScript and their use in handling asynchronous data streams.",
      "What is 'immutable data' in JavaScript, and how does it enhance predictability and reliability of code?",
      "Explain 'proxy objects' in JavaScript and their role in controlling access to objects.",
      "What are 'Web APIs' in JavaScript, and how can they be used for various browser-related tasks?",
      "Discuss 'tree shaking' in JavaScript and its role in reducing bundle size for optimized performance.",
      "Explain 'dynamic imports' in JavaScript and their use for code splitting and lazy loading.",
    ],
    react: [
      "Describe 'context API' in React, and how can it be used for state management and global data sharing.",
      "What is 'React suspense,' and how does it enhance the user experience by handling async tasks?",
      "Explain 'render performance optimizations' in React, such as 'memo,' 'useMemo,' and 'useCallback.'",
      "Discuss 'code splitting' and 'lazy loading' in React, and their impact on application performance.",
      "What is 'Server Components' in React, and how do they enable server-side rendering of components?",
      "Explain 'React Testing Library' and its use for testing React components.",
      "What are 'TypeScript' and 'Flow' in React, and how do they enhance type checking and static analysis?",
      "Describe 'portals' in React and their role in rendering components outside the normal component hierarchy.",
      "What is 'React Concurrent Mode,' and how does it improve the responsiveness of user interfaces?",
      "Discuss 'state machines' and their application in React for managing complex user interface logic.",
    ],
    nextjs: [
      "Explain 'image optimization' in Next.js and its role in improving page loading performance.",
      "What is 'serverless functions' in Next.js, and how can they be used for backend operations?",
      "Describe 'i18n' (Internationalization) in Next.js and its role in supporting multiple languages.",
      "Explain 'dynamic imports' in Next.js and their use for code splitting and improved resource loading.",
      "Discuss 'Webpack' in the context of Next.js and its role in bundling assets.",
      "What is 'Serverless Deployment' in Next.js, and how can it be achieved on cloud platforms?",
      "Describe 'international SEO' strategies for Next.js applications targeting global audiences.",
      "What are 'runtime configuration' options in Next.js, and how can they be used for app setup?",
      "Explain 'e-commerce optimization' in Next.js, including strategies for product listings and cart management.",
      "Discuss 'server components' in Next.js and their role in rendering complex pages efficiently.",
    ],
  },
};