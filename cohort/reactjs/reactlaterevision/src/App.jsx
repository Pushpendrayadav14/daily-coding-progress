import React from "react";
import Card from "./components/Card";

export const App = () => {
  const arr = [
    {
      id: 1,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      userName: "John Smith",
      userProfile:
        "Passionate full stack developer who enjoys building modern web applications using React and Node.js.",
    },
    {
      id: 2,
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      userName: "Emma Johnson",
      userProfile:
        "Creative UI and UX designer focused on creating beautiful, responsive, and user-friendly interfaces.",
    },
    {
      id: 3,
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      userName: "Michael Brown",
      userProfile:
        "Experienced backend developer specializing in Express.js, MongoDB, REST APIs, and scalable server architecture.",
    },
    {
      id: 4,
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      userName: "Sophia Davis",
      userProfile:
        "Frontend developer passionate about animations, accessibility, and creating engaging user experiences with React.",
    },
    {
      id: 5,
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      userName: "David Wilson",
      userProfile:
        "Software engineer interested in cloud computing, DevOps practices, and high-performance backend systems.",
    },
    {
      id: 6,
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      userName: "Olivia Taylor",
      userProfile:
        "Digital marketer with expertise in SEO, content strategy, and social media brand growth campaigns.",
    },
    {
      id: 7,
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      userName: "James Anderson",
      userProfile:
        "Python developer working on artificial intelligence, machine learning, and intelligent automation solutions.",
    },
    {
      id: 8,
      image: "https://randomuser.me/api/portraits/women/8.jpg",
      userName: "Ava Martinez",
      userProfile:
        "Professional graphic designer creating logos, branding materials, and digital illustrations for businesses worldwide.",
    },
    {
      id: 9,
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      userName: "William Thomas",
      userProfile:
        "Cybersecurity analyst focused on protecting organizations from threats through proactive monitoring and security testing.",
    },
    {
      id: 10,
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      userName: "Isabella Garcia",
      userProfile:
        "Mobile application developer building fast, secure, and responsive Android and iOS applications using Flutter.",
    },
    {
      id: 11,
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      userName: "Daniel Harris",
      userProfile:
        "Database administrator skilled in SQL optimization, database design, backup strategies, and server maintenance.",
    },
    {
      id: 12,
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      userName: "Mia Clark",
      userProfile:
        "Content writer producing engaging articles, blogs, and technical documentation for software development companies.",
    },
    {
      id: 13,
      image: "https://randomuser.me/api/portraits/men/13.jpg",
      userName: "Joseph Lewis",
      userProfile:
        "React developer passionate about reusable components, performance optimization, and modern JavaScript development.",
    },
    {
      id: 14,
      image: "https://randomuser.me/api/portraits/women/14.jpg",
      userName: "Charlotte Walker",
      userProfile:
        "Project manager experienced in agile methodologies, sprint planning, and successful software delivery management.",
    },
    {
      id: 15,
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      userName: "Matthew Hall",
      userProfile:
        "Data analyst transforming raw information into meaningful insights using Python, SQL, and business intelligence tools.",
    },
    {
      id: 16,
      image: "https://randomuser.me/api/portraits/women/16.jpg",
      userName: "Amelia Allen",
      userProfile:
        "Cloud engineer deploying secure applications using AWS, Docker, Kubernetes, and modern cloud infrastructure technologies.",
    },
    {
      id: 17,
      image: "https://randomuser.me/api/portraits/men/17.jpg",
      userName: "Christopher Young",
      userProfile:
        "Game developer creating immersive gameplay experiences using Unity, C#, and interactive game mechanics.",
    },
    {
      id: 18,
      image: "https://randomuser.me/api/portraits/women/18.jpg",
      userName: "Harper King",
      userProfile:
        "Business analyst helping organizations improve workflows, increase productivity, and make data-driven decisions effectively.",
    },
    {
      id: 19,
      image: "https://randomuser.me/api/portraits/men/19.jpg",
      userName: "Andrew Scott",
      userProfile:
        "Quality assurance engineer ensuring software reliability through automation testing, manual testing, and debugging techniques.",
    },
    {
      id: 20,
      image: "https://randomuser.me/api/portraits/women/20.jpg",
      userName: "Evelyn Green",
      userProfile:
        "Software consultant guiding businesses in selecting modern technologies, improving architecture, and delivering scalable solutions.",
    },
  ];

  return (
    <div className="container">
      {arr.map((elem) => {
        return <Card key={elem.id} {...elem} />;
      })}
    </div>
  );
};
