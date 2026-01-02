import { Terminal, Shield, Globe, Cpu, Code, Database, GitBranch, Wifi } from 'lucide-react';

export const personalInfo = {
  name: "CyberSec Student",
  role: "Cybersecurity Analyst & Developer",
  headline: "Securing the Digital Frontier",
  subHeadline: "MSc Cybersecurity Student | Network Defense | Full-Stack Development",
  location: "Bangalore / Udupi, India",
  email: "poojaryakash55@gmail.com",
  github: "https://github.com/Akash-billawa",
  linkedin: "https://www.linkedin.com/in/akash-poojary-904500383",
  resume: "/resume.pdf"
};

export const about = {
  title: "About Me",
  description: "I am an MSc Cybersecurity student with a passion for network defense and secure coding. My journey involves deep diving into networking protocols, mastering Python for automation, and exploring the intricacies of web security. I believe in hands-on learning, constantly testing my skills against real-world scenarios (in controlled environments, of course)."
};

export const skills = [
  {
    category: "Cybersecurity",
    icon: Shield,
    items: ["Network Security", "Penetration Testing", "Nmap", "Wireshark", "Ethical Hacking"]
  },

  {
    category: "Networking",
    icon: Wifi,
    items: ["TCP/IP", "OSI Model", "Subnetting", "Routing & Switching", "Cisco Packet Tracer"]
  },
  {
    category: "Development",
    icon: Code,
    items: ["Python", "JavaScript (ES6+)", "React", "HTML5/CSS3", "Bash Scripting"]
  },
  {
    category: "Tools & Platforms",
    icon: Terminal,
    items: ["Linux (Kali/Ubuntu)", "Git & GitHub", "Docker", "VS Code", "Burp Suite"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Cyber Quiz Arena",
    description: "A high-stakes interactive quiz platform designed to test cybersecurity knowledge under pressure.",
    features: [
      "Dynamic Question Bank with Randomization",
      "Anti-Cheat System: Tab-switch detection & Context Menu blocking",
      "Real-time Timer & Score Logic",
      "Responsive Glassmorphic UI"
    ],
    tech: ["JavaScript", "CSS3", "HTML5", "Local Storage"],
    github: "https://github.com",
    demo: "#",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Habit Command Center",
    description: "A minimalist dashboard for tracking daily habits and productivity metrics with data persistence.",
    features: [
      "Persistent Data Storage using Local Storage",
      "Visual Progress Charts & Streaks",
      "Date Logic for Daily Resets",
      "Dark Mode Optimized Interface"
    ],
    tech: ["React", "Chart.js", "Tailwind-like CSS", "Vite"],
    github: "https://github.com",
    demo: "#",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Port Scanner Script",
    description: "A custom multi-threaded port scanner built with Python to identify open ports and services.",
    features: [
      "Multi-threading for speed",
      "Common port range scanning",
      "Banner Grabbing capabilities",
      "Clean CLI Output"
    ],
    tech: ["Python", "Socket Programming", "Threading"],
    github: "https://github.com",
    demo: "#",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Car Traders",
    description: "A modern marketplace for buying and selling vehicles, featuring real-time listings and secure communication.",
    features: [
      "Advanced Search & Filtering System",
      "User Dashboard for Listing Management",
      "Secure Messaging Implementation",
      "Responsive & Interactive UI"
    ],
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "#",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Calculator App",
    description: "A sleek and efficient calculator application designed for quick calculations with a user-friendly interface.",
    features: [
      "Standard Arithmetic Operations",
      "History of Calculations",
      "Dark/Light Mode Toggle",
      "Responsive Design"
    ],
    tech: ["React", "CSS Modules", "JavaScript"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=800"
  }
];

export const skillDetails = [
  {
    name: "Nmap",
    category: "Network Security",
    level: "Expert",
    description: "Network scanning, port discovery, service detection, vulnerability assessment",
    certification: "Nmap Network Discovery Specialist",
    experienceYears: 4,
    projects: [
      "Internal Network Audit",
      "Perimeter Assessment",
      "Port Scanner Script"
    ],
    verification: {
      method: "project_evidence",
      details: "Repository links and assessment reports"
    },
    lastUsed: "2025-11-15"
  }
];
