import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  WhiteHouse,
  Virtual,
  comprehensive,
  ATechSight,
  shopify,
  carrent,
  jobit,
  tripguide,
  next,
  bootstrap,
  firebase,
  github,
  threejs,
  weather,
  malefashion,
  migrantsmart,
  girap,
  hafh,
  attendence,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Front End Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  
];

const technologies: TTechnology[] = [
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  
  {
    name: "bootstrap",
    icon: bootstrap,
  },
 , {
    name: "figma",
    icon: figma,
  }, {
    name: "github",
    icon: github,
  },
  {
    name: "next",
    icon: next,
  },
  {
    name: "firebase",
    icon: firebase,
  },
 

];

const experiences: TExperience[] = [
  {
    title: "Matric",
    companyName: "White House Grammar School ",
    icon: WhiteHouse,
    iconBg: "#ffff",
    date: "2018 - 2020",
    points: [
      
    ],
  },
  {
    title: "Intermediate ( Pre Engineering )",
    companyName: "Comprehensive Boys College",
    icon: comprehensive,
    iconBg: "#f2f1ed",
    date: "2020 - 2022",
    points: [
      
    ],
  },
  {
    title: "Bachelor's in Computer Science",
    companyName: "Virtual University",
    icon: Virtual,
    iconBg: "#ffff",
    date: "2023",
    points: [
      
    ],
  },
  {
    title: "Front-End Developer",
    companyName: "A Tech Sight",
    icon: ATechSight,
    iconBg: "#f7f7f5",
    date: "July 2024 - Present",
    points: [
      
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Girapp",
    description:
      "A versatile software project offering innovative solutions across various domains. Designed to integrate and streamline multiple technological approaches for a range of business needs. Visit Website https://girap.netlify.app",
    tags: [
      
    ],
    image: girap,
    sourceCodeLink: "https://girap.netlify.app//",
  },
  {
    name: "HAFH",
    description:
    "A platform connecting property owners and guests for hassle-free, secure mid-term rentals, providing flexibility and comfort worldwide. Offers guests secure, flexible, and fully furnished housing options for mid-term stays. ",
    tags: [
     
    ],
    image: hafh,
    sourceCodeLink: "https://hafhstays.com/",
  },
  {
    name: "Migrant Smart",
    description:
     "Built a platform for MigrantSmart to empower immigrants with resources, settlement services, and professional development for a smooth transition. Designed features to connect companies and schools with global talent.",
    tags: [
     
    ],
    image: migrantsmart,
    sourceCodeLink: "https://migrantsmart.developer-ma.com/",
  },
  {
    name: "Male Fashion",
    description: "This is a React-based e-commerce clothing store featuring a modern design and user-friendly interface. It fetches real-time data via APIs and ensures a dynamic, responsive shopping experience,",
    tags: [
     
    ],
    image: malefashion,
    sourceCodeLink: "https://clothigstore.vercel.app",
  },
  {
    name: "Weather App",
    description: "This is a React-based weather app that fetches real-time weather data using an API. It features a clean, responsive design for viewing current weather conditions and forecasts",
    tags: [
     
    ],
    image: weather,
    sourceCodeLink: "https://weather-app-sufiyan.netlify.app/",
  },
  {
    name: "Attendence Portal",
    description: "This is a React-based attendance portal designed for efficient attendance management. It utilizes APIs to fetch and update data in real-time, offering a user-friendly and responsive interface.",
    tags: [
     
    ],
    image: attendence,
    sourceCodeLink: "https://attendenceportal.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
