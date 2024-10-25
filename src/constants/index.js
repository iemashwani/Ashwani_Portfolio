import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  cpp,
  mern,
  database,
  web1,
  spic,
  united,
  java,
  python,
  sql,
  tcpp,
  heartility,
  blogify,
  rental,
  pdf,
  LinkedIn,
  Twitter,
  insta,
  research,
  Resume,
  github,
  gfg,
  leetcode
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web1,
  },
  {
    title: "Backend Developer",
    icon: mern,
  },
  {
    title: "Database",
    icon: database,
  },

  {
    title: "C++ Problem Solving",
    icon: cpp,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "cpp",
    icon: tcpp,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
];

const education = [
  {
    title: "Graduation",
    company_name: "United Institute of Technology",
    stream: "Computer Science and Engineering",
    icon: united,
    iconBg: "#E6DEDD",
    date: "December 2020 - July 2024",
    points: [
      "Fundamental Subjects: Programming, Data Structures and Algorithms, Computer Network, Operating Systems, Database Management.",
      "Advanced Topics: Artificial Intelligence, Machine Learning, Cybersecurity, Web Development, Software Engineering, Data Science.",
      "Get opportunities to participate in research projects, often under the guidance of faculty, contributing to advancements in technology and computing.",
      "Get exposure to new technologies such as Cloud Computing, Big Data, IoT, Blockchain",
    ],
  },
  {
    title: "Senior Secondary School (12th Grade)",
    company_name: "Uttar Pradesh Madhyamik Shiksha Parishad (UPMSP)",
    stream: "Science",
    icon: spic,
    iconBg: "#E6DEDD",
    date: "April 2019 - March 2020",
    points: [
      "Core Subjects: Mathematics, Physics, Chemistry",
      "Emphasis on analytical skills and problem-solving abilities",
      "Guidance on college applications, entrance exams. (like SAT, JEE, NEET, etc.)",
      "Exploring different career options and understanding the educational pathways for various professions.",
    ],
  },
  {
    title: "Secondary School (10th Grade)",
    company_name: "Uttar Pradesh Madhyamik Shiksha Parishad (UPMSP)",
    stream: "Science",
    icon: spic,
    iconBg: "#E6DEDD",
    date: "April 2017 - March 2018",
    points: [
      "Core Subjects: Mathematics, Science, Social Science.",
      "Get an Introduction to various career paths and educational streams available in Class 11 (Science, Commerce, Humanities).",
      "Aware of balancing academics, extracurricular activities, and personal interests.",
      "Familiar with the internet and other digital platforms for educational purposes.",
    ],
  },
];
const social = [
  {
    name: "Resume",
    icon: Resume,
    link: "https://docs.google.com/document/d/1M9y9gbDEBi5S5JSyyTYQWNDS7HYiqeu0JkiSZawCy2k/edit?usp=sharing",
  },
  {
    name: "LeetCode",
    icon: leetcode,
    link: "https://leetcode.com/u/iemashwani/",
  },
  {
    name: "GFG",
    icon: gfg,
    link: "https://www.geeksforgeeks.org/user/iemashwani/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/iemashwani",
  },
  {
    name: "LinkedIn",
    icon: LinkedIn,
    link: "https://www.linkedin.com/in/iemashwani/",
  },
  {
    name: "Twitter",
    icon: Twitter,
    link: "https://x.com/iemashwanisingh",
  },
  

];
const cources = [
  {
    cources:
      "Proficient in improving model efficiency in supervised learning by leveraging pattern recognition, data visualization, feature engineering, statistical analysis, and data preprocessing. Skilled in optimizing model performance through insightful visualizations and targeted feature engineering.",
    name: "Data Science Master",
    designation: "Online",
    company: "Physics Wallah",
    image:
      "https://drive.google.com/file/d/1dE0tyQ9ATeJcNKbShG_rUgHsNcJz1aQi/view?usp=sharing",
    icon: pdf,
  },
  {
    cources:
      "Completed an intensive bootcamp covering fundamental concepts of cloud computing, including virtualization, cloud service models (IaaS, PaaS, SaaS), and cloud deployment strategies.",
    name: "Cloud Computing Bootcamp",
    designation: "Online",
    company: "Geeks for Geeks",
    image:
      "https://drive.google.com/file/d/17vOPz348b6DeCZwh-ujU9-EvfeQ_Q3ab/view?usp=sharing",
    icon: pdf,
  },
  {
    cources:
      "Demonstrated proficiency in solving algorithmic and computational problems through HackerRank's rigorous problem-solving certification. This certificate showcases my ability to think critically, optimize code, and apply logical reasoning to develop efficient solutions.",
    name: "Problem Solving",
    designation: "Online",
    company: "Hacker Rank",
    image:
      "https://drive.google.com/file/d/1wjKI3ZPCCm7OaO_Ko6IFU3u1P1CTdymg/view?usp=sharing",
    icon: pdf,
  },
];

const projects = [
  {
    name: "Heartility",
    description:
      "Developed a heart disease prediction app using medical parameters, implementing multiple ML algorithms (Logistic Regression, Naive Bayes, KNN, Decision Tree, Random Forest) after EDA and Feature Engineering. Achieved improved accuracy.",
    tags: [
      {
        name: "ML Algorithms",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "streamlit",
        color: "yellow-text-gradient",
      },
    ],
    image: heartility,
    source_code_link: "https://github.com/iemashwani/heartility",
  },
  {
    name: "Blogify",
    description:
      "Blogify built using EJS, MongoDB, and Node.js is a dynamic web application that allows users to create, read, update, and delete blog posts (CRUD operations). The application follows the MVC architecture, with MongoDB as the database to store blog content, user data, and other related information.",
    tags: [
      {
        name: "ejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: blogify,
    source_code_link: "https://github.com/iemashwani/Blog_App",
  },
  {
    name: "Vehicle Rent",
    description:
      "This project is an autonomous Vehicle Rental Management System that maintains a record of all available and rented cars. Users can rent cars based on factors like efficiency, performance, or cost. The system provides a user-friendly interface developed using HTML, CSS, and JavaScript.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: rental,
    source_code_link: "https://github.com/iemashwani",
  },
];

export { services, technologies, education, cources, projects,social};
