import {
  mobile,
  backend,
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
  nodejs,
  mongodb,
  git,
  figma,
  docker,

  tangermed,
  fiverr,
  divo,
  divoLogo,
  expleo,

  carrent,
  jobit,

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
    title: "Full Stack - Devops engineer",
    company_name: "Divo Delivery",
    icon: divoLogo,
    iconBg: "#FFFFFF",
    date: "July 2023 - Present",
    points: [
      "Designing the architecture of Divo Delivery's applicaiton including Microservices Architecture and technologies to use",
      "Developping Services and APIs using the whole Spring ecosystem including spring cloud for building scalable and resilient distributed systems, spring security, etc...",
      "Developping Client applications (client app, delivery personnel app, restaurant app) using flutter and the admin dashboard using Angular",
      "Implementing DevOps practices and tools to automate the deployment process and ensure the reliability of the application",
      "Utilizing Scrum methodology to manage and execute the project. This includes regular sprint planning, daily stand-ups, sprint reviews, and retrospectives to ensure continuous improvement and effective collaboration within the team."
    ],
  },
  {
    title: "UI/UX Designer",
    company_name: "Fiverr",
    icon: fiverr,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - June 2024",
    points: [
      "Worked as a freelancer, providing UI/UX design services to clients across various industries.",
      "this experience helped me to develop my skills in working with different clients accross the world and understand their needs and requirements.",
    ],
  },
  {
    title: "Software engineer intern",
    company_name: "Expleo Group",
    icon: expleo,
    iconBg: "#FFF",
    date: "June 2024 - September 2024",
    points: [
      "Worked on the development of a web application for managing the company's internal resources.",],
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
      "SecureWheels establish a decentralized architecture for managing automobile insurance contracts with Blockchain. The project embraces microservices, smart contracts and the integration of a recommendation system  based on machine learning algorithms to provide personalized recommendations.",
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
    name: "Divo Delivery",
    description:
      "Divo Delivery emerges as a dynamic delivery startup, deeply rooted in the bustling city of Tangier. Reliable delivery of not just food but anything you need. Divo Delivery is not just a delivery service; it's a local companion, simplifying your daily life and connecting you with the heart of Tangier.",
    tags: [
      {
        name: "Spring ecosystem",
        color: "green-text-gradient",
      },
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Microservices",
        color: "pink-text-gradient",
      },
      {
        name: "DevOps",
        color: "green-text-gradient",
      },
      {
        name: "Scrum",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: divo,
    source_code_link: "https://github.com/Divo-Delivery",
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
];

export { services, technologies, experiences, testimonials, projects };