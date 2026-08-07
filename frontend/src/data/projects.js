import lumora from "../assets/images/lumora.png";
import civixa from "../assets/images/Citizen_Dashboard_1.png";
import portfolio from "../assets/images/portfolio.png";

export const projects = [
  {
    id: 1,
    title: "Lumora",

    description:
      "A modern MERN story publishing platform with authentication, writer dashboard, chapter management, bookmarks and Cloudinary image uploads.",

    image: lumora,

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
    ],

    github: "https://github.com/sumitsalmuthe/Lumora-Full-Stack-Story-Publishing-Platform",

    live: "#",
  },

  {
    id: 2,
    title: "Civixa",

    description:
      "A civic issue reporting platform where citizens can report problems, upload images and track complaint status.",

    image: civixa,

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],

    github: "https://github.com/sumitsalmuthe/Civixa---Smart-Civic-Reporter",

    live: "#",
  },

  {
    id: 3,
    title: "AcademicHub",

    description:
      "A college academic management platform for students and faculty with authentication, dashboards and resource management.",

    image: "",

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],

    github: "#",

    live: "#",
  },

  {
    id: 4,
    title: "Sumit. Portfolio",

    description:
      "A clean and recruiter-friendly personal portfolio showcasing projects, skills and experience.",

    image: portfolio,

    tech: [
      "React",
      "CSS",
      "JavaScript",
    ],

    github: "https://github.com/sumitsalmuthe/SumitsSalmuthe-Portfolio",

    live: "#",
  },
];