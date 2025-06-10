import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Maharashtra State Board (10th and 12th)",
    location: "Amravati",
    description:
      "Scored 90.60 % in 10th and 96 % in 12th in Computer Science",
    icon: React.createElement(LuGraduationCap),
    date: "2013-2020",
  },
  {
    title: "Bachlors in Computer Science and Engineering",
    location: "Savitribai Phule Pune University",
    description:
      "with CGPA of 8.8",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
   {
    title: "Persistent Martian Internship",
    location: "Pune",
    description:
      "7-week Summer Internship 2023",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Associate Software Engineer at Accenture",
    location: "Bangalore",
    description:
      " Spring Boot , Java Development , JPA , Spring Framework & Sonarqube",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Translate and Transcribe",
    description:
      "With help of API's , This Application helps to record and transcribe the voice and translate it to different international languages.",
    tags: ["Javascript","API Development","NodeJS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Chat-App Web Application",
    description:
      "Chat-App using NodeJS and Socket.io helps user to text in common chatroom using username and room code.",
    tags: ["NodeJs","Socket.io","React"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Augmented Reality Based Navigation Interface System",
    description:
      "An AR-based navigation system offering immersive, real-time indoor guidance using computer vision, sensors, and metadata for accurate positioning.",
    tags: ["A* Algorithm", "ARCore", "Unity", "NavigationAI"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Online Voting Database Management",
    description:
      "Database management for online voting with admin and participant accesses and admin with controls to view the specific details",
    tags: ["Python", "MySQL", "Tkinter"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Weather Application",
    description:
      "Weather application with geocode and weather api.",
    tags: ["JavaScript", "API Development", "Postman", "NodeJS"],
    imageUrl: wordanalyticsImg,
  }
] as const;

export const skillsData = [
  "Java",
  "DSA",
  "Python",
  "JavaScript",
  "React",
  "Node.js",
  "Git",
  "SpringBoot",
  "Unity",
  "MongoDB",
  "Redux",
  "MySQL",
  "Postman",
  "Express",
  "Django",
  "AWS",
] as const;
