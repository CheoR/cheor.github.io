export const PROJECTS = [
  {
    id: "a00d3362-b7c5-4a6d-8182-b976d454056d",
    preview: "",
    repo: "https://github.com/CheoR/shipItOut-client",
    link: "https://shipitout.herokuapp.com/",
    aria: "GitHub Project: Ship It Out",
    label: "ShipItOut",
    description:
      "ShipItOut is my full stack NSS C46 capstone project. It is related to my initial project, PackItUp. ShipItOut consist of React front-end and Django backend. It is a dashboard-like app that tracks shipping containers where the shipper, container, port authorities can update the container status as it moves. ",
    tags: ["Django", "Heroku", "Node", "MUI", "React"],
  },
  {
    id: "c6409e2a-8f85-4141-b6fc-1c08315ffb98",
    preview: "",
    repo: "https://github.com/CheoR/pack-it-up",
    link: "https://cr-demo--packitup.netlify.app/",
    aria: "GitHub Project: Pack It Up",
    label: "PackItUp",
    description:
      "NSS front-end capstone project. PackItUp is a moving app to help users keep track of what items went into what box for moving/storage. ",
    tags: ["React"],
  },
  {
    id: "61a1783e-a60e-4aba-a412-f8dc00f5adee",
    preview: "",
    repo: "https://github.com/CheoR/BeerMe",
    link: "",
    aria: "GitHub Project: Beer Me",
    label: "BeerMe",
    description:
      "TDD project with React Frontend and Django backend. Testing done with Jest/Enzyme and Selenium. ",
    tags: ["Enzyme", "Formik", "React", "Yup"],
  },
  {
    id: "37e42ceb-e3fc-4531-9fa4-dac1f02fa3ef",
    preview: "",
    repo: "https://github.com/CheoR/recommend_wine",
    link: "",
    aria: "GitHub Project: Wine Recommender",
    label: "Wine Recommender",
    description:
      "Wine recommender k-means clustering to recommend wines based on user preferences and previous wine scores. This project uses TDD approach, Django backend and Travis-CI for deployment. ",
    tags: ["CI", "Django", "TDD"],
  },
  {
    id: "c3e4c2a5-c5cf-4c70-920f-7cdf7c246118",
    preview: "",
    repo: "https://github.com/CheoR/FreeCodeCampProjects",
    link: "",
    aria: "GitHub Project: Free Code Camp Projects",
    label: "FCC Projects",
    description:
      "FreeCodeCamp projects using HTML, CSS, React, Bootstrap and JavaScript. ",
    tags: ["CSS", "HTML", "JavaScript"],
  },
  {
    id: "de5fad68-95eb-4b5c-9d15-af576b845280",
    preview: "",
    repo: "https://codepen.io/CheoR/full/QzPJbQ",
    link: "",
    aria: "GitHub Project: Code Pen Projects",
    label: "CodePen",
    description: "Pens",
    tags: ["CSS", "HTML", "JavaScript"],
  },
  {
    id: "b4376e9d-bc40-4b35-b8f6-21ee8a0be005",
    preview: "https://cheor.github.io/",
    repo: "https://github.com/CheoR/cheor.github.io",
    link: "https://cheor.github.io/",
    aria: "Personal Portfolio",
    label: "Personal Portfolio",
    description: "You're viewing it!",
    tags: ["CSS", "Gatsby", "HTML", "JavaScript"],
  },
];

export const CHIPS = [
  // languages
  {
    order: 1,
    long: "Java",
    short: "Java",
    icon: "",
  },
  {
    order: 1,
    long: "JavaScript",
    short: "JS",
    icon: "",
  },
  {
    order: 1,
    long: "Python",
    short: "Py",
    icon: "",
  },
  {
    order: 1,
    long: "SQL",
    short: "SQL",
    icon: "",
  },
  // frameworks
  {
    order: 2,
    long: "Apollo-Client",
    short: "Apollo",
    icon: "",
  },
  {
    order: 2,
    long: "Apollo-Server",
    short: "Apollo",
    icon: "",
  },
  {
    order: 2,
    long: "Express",
    short: "Ex",
    icon: "",
  },
  {
    order: 2,
    long: "Django",
    short: "DJ",
    icon: "",
  },
  {
    order: 2,
    long: "Gatsby",
    short: "Gatsby",
    icon: "",
  },
  {
    order: 2,
    long: "Nextjs",
    short: "Nextjs",
    icon: "",
  },
  // testings
  {
    order: 3,
    long: "Jest",
    short: "Jest",
    icon: "",
  },
  {
    order: 3,
    long: "Cypress",
    short: "Cy",
    icon: "",
  },
  // server-side
  {
    order: 4,
    long: "Heroku",
    short: "Heroku",
    icon: "",
  },
  {
    order: 4,
    long: "MongoDB",
    short: "Mongo",
    icon: "",
  },
  {
    order: 4,
    long: "Node",
    short: "Node",
    icon: "",
  },
  {
    order: 4,
    long: "PostgresSQL",
    short: "PostgresSQL",
    icon: "",
  },
  {
    order: 4,
    long: "Redis",
    short: "Redis",
    icon: "",
  },
  // client-side
  {
    order: 5,
    long: "Android",
    short: "Android",
    icon: "",
  },
  {
    order: 5,
    long: "Bootstrap",
    short: "Bootstrap",
    icon: "",
  },
  {
    order: 5,
    long: "CSS",
    short: "CSS",
    icon: "",
  },
  {
    order: 5,
    long: "Material-UI",
    short: "MUI",
    icon: "",
  },
  {
    order: 5,
    long: "SASS",
    short: "SASS",
    icon: "",
  },
  // ui/ux
  {
    order: 6,
    long: "Figma",
    short: "Figma",
    icon: "",
  },
];

export const PAGES = [
  {
    url: "/",
    page: "Home",
  },
  {
    url: "/about",
    page: "About",
  },
  {
    url: "/blog",
    page: "Blog",
  },
  {
    url: "/contact",
    page: "Contact",
  },
  {
    url: "/v1", // https://cheor.github.io/v1/",
    page: "Portfolio V1",
  },
];

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/cheo-roman",
  github: "https://github.com/CheoR",
};

export const fsURL = process.env.GATSBY_FORMSPREE_URL;
export const fsEndpoint = process.env.GATSBY_FORMSPREE_ENDPOINT;
