import {
    mobile,
    web,
    javascript,
    typescript,
    html,
    css,
    cpp,
    python,
    git,
    sql,
    go,
    carrent,
    jobit,
    tripguide,
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
      title: "Frontend Development",
      icon: web,
    },
    {
      title: "Embedded Systems",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "GO",
      icon: go,
    },
    {
      name: "SQL",
      icon: sql,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineering Intern",
      company_name: "Index Exchange",
      iconBg: "#383E56",
      date: "January 2022 - April 2022",
      points: [
        "Assist in software architecture development, debugging and testing in Go",
        "Implement new features resulting in increased advertisement revenue ",
        "Run experiments, update documentation, present during Knowledge Transfer sessions",
        "Write unit tests, validate solutions and take responsibility of deployment",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "American Iron & Metal (AIM)",
      iconBg: "#E6DEDD",
      date: "January 2021 - January 2022",
      points: [
        "Work on inventory application using Angular and Ionic ",
        "Write docs, knowledge transfer, client assistance ",
        "Ensure visual accessibility of application",
        "Implementing responsive design and ensuring cross-browser compatibility",
      ],
    },
    {
      title: "Software Quality Assurance Intern",
      company_name: "Matrox",
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Execute test plans and report bugs",
        "Install, setup and use Linux CentOS and Ubuntu to run tests",
        "Setup and configure NIC, connect to 10Gb or 25 Gb network"
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Warzone Game (Risk)",
      description:
        "A Warzone version written in C++ as part of a team class project, played in a terminal. Two or more players can play by placing armies on countries they own, from which they can attack adjacent countries to conquer them. The objective of the game is to conquer all countries on the map.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "OOP",
          color: "green-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/VikaTheDuck/Warzone-Project",
    },
    {
      name: "Embedded Systems",
      description:
        "Little projects with embedded systems, IoT, sensors... Mock smart door lock with use login, Bluetooth connectivity and communication between two TTGO boards, mobile device detection by Bluetooth activation. ",
      tags: [
        {
          name: "IoT",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "embedded",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/VikaTheDuck/Embedded_Systems",
    },
    {
      name: "Flask Project",
      description:
        "A small Flask website about everything you need to know to start playing Rocket League.",
      tags: [
        {
          name: "flask",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/VikaTheDuck/Rocket-League-Flask-Project",
    },
  ];
  
  export { services, technologies, experiences, projects };