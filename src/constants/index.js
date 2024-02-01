import {
  mobile,
  backend,
  creator,
  web,

  airflow,
  angular,
  eureka,
  graphql,
  java,
  jenkins,
  kafka,
  kubernetes,
  nginx,
  redis,
  sklearn,
  spring,
  scrum,
  oracle,
  flask,
  mysql,
  postgresql,

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
  tangermed,
  tesla,
  fiverr,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,


  divo,

  user
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "spring",
    icon: spring,
  },
  {
    name: "flask",
    icon: flask,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "airflow",
    icon: airflow,
  },
  {
    name: "sklearn",
    icon: sklearn,
  },
  {
    name: "nginx",
    icon: nginx,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
  {
    name: "jenkins",
    icon: jenkins,
  },
  {
    name: "kafka",
    icon: kafka,
  },
  {
    name: "eureka",
    icon: eureka,
  },
  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "scrum",
    icon: scrum,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "redis",
    icon: redis,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "oracle",
    icon: oracle,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },

];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Tanger Med Port Authority",
    icon: tangermed,
    iconBg: "#FFFFFF",
    date: "July 2023 - August 2023",
    points: [
      "Design and development of a notification system based on microservices architecture, intended for a SPA/PWA application.",
      "Utilization of the MERN stack (MongoDB, Express.js, React, Node.js) for Full Stack development.",
      "Containerization using Docker for efficient deployment and optimal scalability.",
      "Integration of WebSockets for real-time communication and instant notifications.",
      "Use of Git-Github for version control, fostering collaborative development within the team.",
      "Gained experience while working among a big developers team.",
    ],
  },
  {
    title: "UI/UX Designer",
    company_name: "Fiverr",
    icon: fiverr,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Present",
    points: [
      "As a dedicated UI/UX freelancer on Fiverr, I specialize in creating visually stunning and user-friendly interfaces.",
      "Leveraging my expertise in design principles and the latest industry trends, I craft engaging user experiences tailored to the unique needs of each project.",
      "I take pride in delivering top-notch UI/UX solutions that elevate the overall user experience and functionality of web platforms.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "i Just had to drop a quick note to say that Aya's UI/UX design work on Fiverr was nothing short of amazing! The quality, creativity, and your ability to deliver on time were exceptional. I'm thoroughly impressed and highly recommend your services!",
      name: "Fiverr Client",
      designation: "Client",
      company: "Fiverr",
    image: user,
  },
  {
    testimonial:
      "Really good quality work, just like the first time. I wouldn't hesitate to ask for a new project!",
    name: "Fiverr Client",
    designation: "Client",
    company: "Fiverr",
    image: user,
  },
  {
    testimonial:
      "Amazing job done by aya, i'd totally recommend her work",
      name: "Fiverr Client",
      designation: "Client",
      company: "Fiverr",
    image: user,
  },
];

const projects = [
  {
    name: "SecureWheels",
    description:
      "SecureWheels establish a decentralized architecture for managing automobile insurance contracts. The project embraces microservices, smart contracts and the integration of a recommendation system  based on machine learning algorithms to provide personalized recommendations.",
    tags: [
      {
        name: "Blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "pink-text-gradient",
      },
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "DevOps",
        color: "pink-text-gradient",
      },
      {
        name: "Scrum",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/project-smart-contract",
  },
  {
    name: "GigSafari",
    description:
      "Whether you are a freelancer looking for opportunities or a client in search of services, CloneFiverr promises a seamless and secure platform for connecting talents with needs. This project is not just a clone; it's a showcase of innovation, skill, and a commitment to delivering a feature-rich web platform.",
    tags: [
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Stripe",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/mohammedelbakkali/front-end-freelancer",
  },
  {
    name: "Divo Delivery",
    description:
      "Divo Delivery emerges as a dynamic delivery startup, deeply rooted in the bustling city of Tangier. Reliable delivery of not just food but anything you need. Divo Delivery is not just a delivery service; it's a local companion, simplifying your daily life and connecting you with the heart of Tangier.",
    tags: [
      {
        name: "flutter",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: divo,
    source_code_link: "https://github.com/Divo-Delivery",
  },
];

export { services, technologies, experiences, testimonials, projects };