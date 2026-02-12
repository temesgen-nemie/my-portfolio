import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks = [
  {
    icon: FaGithub,
    url: "https://github.com/temesgen-nemie",
    name: "GitHub",
  },
  {
    icon: FaLinkedin,
    url: "https://linkedin.com/in/temesgen-nemie",
    name: "LinkedIn",
  },
  {
    icon: FaEnvelope,
    url: "mailto:temen9020@gmail.com",
    name: "Email",
  },
];

export const skills = [
  { name: "React", level: "Advanced", icon: "⚛️" },
  { name: "Next.js", level: "Intermediate", icon: "▲" },
  { name: "Tailwind CSS", level: "Advanced", icon: "🎨" },
  { name: "TypeScript", level: "Intermediate", icon: "📘" },
  { name: "Node.js", level: "Junior", icon: "🟢" },
  { name: "Bootstrap", level: "Intermediate", icon: "🅱️" },
];

export const projects = [
    {
  title: "StarPay USSD Integration", 
  description: "Real-time USSD payment gateway using Apache NiFi for data orchestration and Express.js backend, enabling seamless mobile payments across Ethiopian banks/wallets.",
  tech: ["Apache NiFi", "Node.js", "Express.js", "Redis", "USSD"],
  demo: "https://www.starpayethiopia.com/",
  image: "/assets/starpay_ussd.webp",
  color: "from-indigo-500 to-purple-500"
},
  {
    title: "Donation Platform",
    description: "A transparent digital ecosystem connecting donors, NGOs, and volunteers to facilitate impactful giving.",
    tech: ["React", "Node.js", "Express"],
    github: "https://github.com/temesgen-nemie/Online-Donation-Platform-through-NGOs",
    demo: "https://donate-link.netlify.app/",
    image: "/assets/donationplatform.png",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "NU EVENT",
    description: "Comprehensive event management and ticketing solution handling complex scheduling and bookings.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    github: "https://github.com/temesgen-nemie/nuevents-project",
    demo: "https://github.com/temesgen-nemie/nuevents-project",
    image: "/assets/nuevent.jpg",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "AI Disease Surveillance",
    description: "Early warning system utilizing predictive analytics for rapid disease detection and response.",
    tech: ["React", "AI/ML", "Data Viz"],
    github: "#",
    demo: "#",
    image: "/assets/AI in disease.png",
    color: "from-emerald-500 to-teal-500"
  },
];

export const experiences = [
  {
    role: "Backend Developer",
    company: "Eaglelion System Technology",
    period: "July 2025 - Present",
    description: [
      "Designing and developing scalable backend services and APIs.",
      "Building and optimizing data flows using Apache NiFi.",
      "Implementing Redis caching strategies for performance improvement.",
      "Collaborating with frontend teams to integrate secure RESTful APIs.",
    ],
    icon: "FiCode",
    color: "from-green-400 to-emerald-600",
    glow: "shadow-emerald-500/50",
  },
  {
    role: "Intern",
    company: "Eaglelion System Technology",
    period: "Feb 2024 - Jun 2024",
    description: [
      "Contributed to NU EVENT, a comprehensive event management platform.",
      "Built responsive UI components using Next.js and Tailwind CSS.",
      "Collaborated with senior developers in an agile environment.",
    ],
    icon: "FiBriefcase",
    color: "from-blue-400 to-blue-600",
    glow: "shadow-blue-500/50",
  },
  {
    role: "Hackathon Participant",
    company: "Stride for Ethiopia",
    period: "May 2024 - Jun 2024",
    description: [
      "Developed 'AI in Disease Surveillance' prototype within 48 hours.",
      "Implemented real-time data visualization dashboards.",
      "Won recognition for innovative use of predictive analytics.",
    ],
    icon: "FiCode",
    color: "from-purple-400 to-purple-600",
    glow: "shadow-purple-500/50",
  },
  {
    role: "Hackathon Participant",
    company: "Venture Meda",
    period: "Nov 2024 - Dec 2024",
    description: [
      "Built WedShop, an AR-enabled e-commerce platform for weddings.",
      "Integrated 3D product previews for immersive user experience.",
      "Designed mobile-first interface focusing on conversion.",
    ],
    icon: "FiAward",
    color: "from-cyan-400 to-cyan-600",
    glow: "shadow-cyan-500/50",
  },
];

export const certificates = [
  {
    title: "EagleLion System Technology",
    image: "/assets/internship.jpg",
    description: "Internship Completion",
    date: "Sep 2024",
    details:
      "Recognized for strong commitment and professionalism during internship at EagleLion System Technology",
  },
  {
    title: "3rd Best Project Award",
    image: "/assets/project.jpg",
    description: "Outstanding Final Year Project",
    date: "Jun 2025",
    details:
      "Recognized for exceptional innovation and technical excellence for the project 'Digital Platform for Donation'",
  },
  {
    title: "Great Distinction",
    image: "/assets/Tempo.jpg",
    description: "BSc Graduation",
    date: "2025",
    details:
      "Graduated with strong academic performance and hands-on experience in software engineering.",
  },
  {
    title: "Cisco Graphics Design",
    image: "/assets/cisco.jpg",
    description: "Cisco Networking Academy",
    date: "2025",
    details:
      "Completed Graphics Design Training gaining practical skills in visual communication and branding",
  },
];

export const contactInfo = [
  {
    icon: FiMail,
    title: "Email",
    value: "temen9020@gmail.com",
    link: "mailto:temen9020@gmail.com",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: FiPhone,
    title: "Phone",
    value: "+251962187032",
    link: "tel:+251962187032",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: FiMapPin,
    title: "Location",
    value: "Addis Ababa, Ethiopia",
    link: "#",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
];
