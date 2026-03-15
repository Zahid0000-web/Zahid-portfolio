import {
  Code,
  Server,
  Database,
  Paintbrush,
  Type,
  GitBranch,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Link2Icon,
} from "lucide-react";

export const fetchData = [
  { label: "User", value: "aj7@garuda" },
  { label: "OS", value: "Garuda Linux Broadwing x86_64" },
  { label: "Host", value: "ASUS TUF Gaming F15 FX506HF" },
  { label: "Kernel", value: "6.14.2-zen1-1-zen" },
  { label: "Packages", value: "1519 (pacman)" },
  { label: "Shell", value: "zsh 5.9" },
  { label: "CPU", value: "i5-11400H (12) @ 4.50GHz" },
  { label: "GPU", value: "Intel UHD + RTX 2050" },
  { label: "Memory", value: "15725MiB" },
  { label: "Peak Uptime", value: "13 hour's" },
];

export const skills = [
  { name: "React.js", icon: Code },
  { name: "Node.js", icon: Server },
  { name: "MongoDB", icon: Database },
  { name: "Tailwind CSS", icon: Paintbrush },
  { name: "JavaScript", icon: Type },
  { name: "Git & GitHub", icon: GitBranch },
  { name: "HTML5", icon: Link2Icon },
  { name: "Bootstrap", icon: Link2Icon },
];

export const facts = [
  "Student",
  "Passion for tech",
  "Learner",
  "IT technician",
  "Aspiring Full Stack Developer",
];

export const timeline = [
  { year: "2021", detail: "Started exploring electronics & tech." },
  { year: "2022", detail: "Discovered coding & web development." },
  { year: "2023", detail: "Built a few small projects." },
  { year: "2024", detail: "Learned more about web development." },
  { year: "2025", detail: "Learning New things and Improving my skills..." },
];

export const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "mzahidking0000",
    href: "mailto:mzahidking0000@gmail.com",
    color: "text-blue-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pakistan",
    href: null,
    color: "text-red-500",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Muhammad Zahid",
    href: "https://github.com/Zahid0000-web",
    color: "text-foreground",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/Muhammad Zahid",
    href: "https://linkedin.com/in/muhammad-zahid-a4aaa139a",
    color: "text-blue-600",
  },
  {
    icon: Link2Icon,
    label: "Discord",
    value: "Discord",
    href: "https://discord.com/",
    color: "text-indigo-500",
  },
];

export const projectData = [
  {
    name: "post-job",
    description: "Job portal for searching and post job.",
    tech: [ "React", "JavaScript", "TailwindCSS", "HTML5", "Css3"],
    live: "https://post-job-gamma.vercel.app/",
    github: "https://github.com/Zahid0000-web/post-job",
    category: "Web",
  },
  {
    name: "Powerfit-gym",
    description: "Join the ultimate fitness journey with our fully responsive gym website template.",
    tech: [ "React", "javaScript", "TailwindCSS",],
    live: "https://powerfit-gym-template.vercel.app/",
    github: "https://github.com/Zahid0000-web/post-job"
    category: "Web",
  },
  {
    name: "Landing Page",
    description: "Simple Landing Page.",
    tech: ["NextJS", "React", "JavaScript", "TailwindCSS", "Shadcn", "Framer-motion"],
    live: "https://landing-page-ajseven.vercel.app",
    github: "https://github.com/aj-seven/landing-page",
    category: "Web",
  },
  {
    name: "IMDB-Clone",
    description:"The IMDb Clone is a modern web application built with React, Vite, and Tailwind CSS, replicating the core functionality and design of the popular IMDb platform",
    tech: ["React", "TailwindCSS", "Context API"],
    live: "https://www.smartlandservices.com/",
    github: "https://github.com/Zahid0000-web/zmdb.com",
    category: "Web",
  },
  {
    name: "Sketchify",
    description: "Convert Images to sketches with Adjustable effects.",
    tech: ["React", "TailwindCSS", "Canvas"],
    live: "https://sketchify-app.vercel.app",
    github: "https://github.com/aj-seven/sketchify",
    category: "Web",
  },
  {
    name: "Task Quest",
    description: "A simple yet modern task tracker built for productivity.",
    tech: ["React", "TailwindCSS"],
    live: "https://task-quest.pages.dev",
    github: "https://github.com/aj-seven/task-quest",
    category: "Web",
  },
 
];
