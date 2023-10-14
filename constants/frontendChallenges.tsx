export const TECHNICAL_CHALLENGES = [
  {
    id: 1,
    name: "React Todo List Challenge",
    slug: "react-todo-list-challenge",
    level: "Junior",
    description:
      "Test your knowledge of React and object-oriented programming.",
    tasks: [
      "Given starter code with a styled todo list that supports adding tasks, your goal is to add functionality to toggle the 'checked' state by clicking on a todo item.",
      "Implement the ability to save and load the todo list state from local storage.",
      "Ensure that checked items automatically sink to the bottom of the list.",
    ],
    stretch_goals: [
      "Allow todo items to be deleted by adding an 'X' button when hovering over a todo item. Clicking 'X' should remove it from the list.",
      "Add timestamps to todo items (created_at, completed_at) for sorting purposes. Active todos should be sorted by created_at (descending), and completed todos should be sorted by completed_at (ascending).",
    ],
  },
  {
    id: 2,
    name: "Simple Weather App",
    slug: "simple-weather-app",
    level: "Junior",
    description:
      "Create a basic weather app that fetches and displays weather information.",
    tasks: [
      "Fetch current weather data (temperature, conditions, etc.) from an API (e.g., OpenWeatherMap).",
      "Display the weather data for the user's current location or for a city specified by the user.",
      "Implement a responsive user interface that adapts to different screen sizes and devices.",
    ],
    stretch_goals: [
      "Add a 5-day weather forecast to the app.",
      "Implement geolocation to automatically fetch the user's location and weather data.",
      "Allow users to switch between different units (e.g., Fahrenheit and Celsius).",
    ],
  },
  {
    id: 3,
    name: "Image Gallery",
    slug: "image-gallery",
    level: "Junior",
    description: "Create an image gallery with thumbnails and a lightbox.",
    tasks: [
      "Display a grid of images with clickable thumbnails below the main image area.",
      "Implement a lightbox that shows a larger version of the selected image when a thumbnail is clicked.",
      "Allow users to navigate between images in the lightbox using next and previous buttons.",
    ],
    stretch_goals: [
      "Implement the ability to upload images and add them to the gallery.",
      "Add a search functionality to allow users to search for specific images by keywords or tags.",
      "Include keyboard navigation in the lightbox for better accessibility.",
    ],
  },
  {
    id: 4,
    name: "Form Validation",
    slug: "form-validation",
    level: "Junior",
    description: "Build a form with client-side validation for user data.",
    tasks: [
      "Create a user registration or data input form with fields like email, password, and phone number.",
      "Validate user input fields in real-time and provide immediate feedback on validation errors, such as invalid email format or password strength.",
      "Prevent form submission if there are validation errors.",
    ],
    stretch_goals: [
      "Implement real-time password strength meter for assessing password complexity.",
      "Add a CAPTCHA or anti-bot mechanism to the form.",
      "Provide instant feedback during input field interaction for improved user experience.",
    ],
  },
  {
    id: 5,
    name: "Basic E-commerce Cart",
    slug: "basic-e-commerce-cart",
    level: "Junior",
    description: "Create a simple shopping cart for e-commerce.",
    tasks: [
      "Allow users to add products to the cart by clicking an 'Add to Cart' button.",
      "Display the cart's contents, including product names, quantities, and individual prices.",
      "Calculate and display the total price of the items in the cart.",
    ],
    stretch_goals: [
      "Allow users to apply discount codes during checkout for price reduction.",
      "Implement a guest checkout option without requiring user registration.",
      "Add a product review and rating feature with user comments.",
    ],
  },
  {
    id: 6,
    name: "Blog Post Display",
    slug: "blog-post-display",
    level: "Junior",
    description: "Create a webpage to display blog posts.",
    tasks: [
      "Design a user-friendly layout for displaying blog post content, including titles and summaries.",
      "Fetch and render a list of blog post data on the webpage.",
      "Implement features like pagination or a search bar to filter and navigate through the posts.",
    ],
    stretch_goals: [
      "Add user authentication and allow authenticated users to post comments on blog posts.",
      "Implement infinite scroll for loading more blog posts as the user scrolls down the page.",
      "Enable users to share blog posts on social media platforms.",
    ],
  },
  {
    id: 7,
    name: "Basic Animation",
    slug: "basic-animation",
    level: "Junior",
    description: "Add simple animations to a webpage.",
    tasks: [
      "Create CSS animations or transitions for specific UI elements, such as buttons or images.",
      "Implement hover effects that change the appearance of buttons or images when the mouse cursor hovers over them.",
      "Add basic interactivity to the webpage using animations, such as sliding in content or fading in images.",
    ],
    stretch_goals: [
      "Create an animated navigation menu that slides in from the side when a button is clicked.",
      "Add parallax scrolling effects to background images on the webpage.",
      "Implement subtle page transitions between different sections of the webpage.",
    ],
  },
  {
    id: 8,
    name: "Online Quiz App",
    slug: "online-quiz-app",
    level: "Junior",
    description: "Build a basic online quiz app for multiple-choice questions.",
    tasks: [
      "Create a set of multiple-choice questions and corresponding answer choices.",
      "Allow users to select answers for each question, and calculate their scores upon completion.",
      "Display the final quiz score and provide feedback on correct and incorrect answers.",
    ],
    stretch_goals: [
      "Create a timer for each quiz question to add an element of urgency.",
      "Allow users to share their quiz scores on social media after completing a quiz.",
      "Implement different quiz themes with custom styles and animations.",
    ],
  },
  {
    id: 9,
    name: "User Profile Page",
    slug: "user-profile-page",
    level: "Junior",
    description:
      "Develop a user profile page for managing personal information.",
    tasks: [
      "Create a user profile with editable fields for personal information, such as name and email.",
      "Implement form handling to enable users to update their profile data.",
      "Allow users to upload and manage a profile picture and display it on the profile page.",
    ],
    stretch_goals: [
      "Add a user activity log to track recent profile updates and actions.",
      "Include the ability for users to set and manage privacy settings for their profile data.",
      "Implement email verification for user accounts to enhance security.",
    ],
  },
];
