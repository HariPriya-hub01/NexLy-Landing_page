import { Rocket, Users, ShieldCheck, Workflow, Bell, Plug } from "lucide-react";
import { LucidePieChart, LucideCalendarClock, LucideMailCheck, LucideBarChart3 } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Design", href: "#design" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    text: "Real-time Collaboration",
    icon: <Users className="w-8 h-8 dark:text-yellow-400 text-yellow-600" />,
    description: "Stay connected with your team, make edits together, and keep everything in sync—instantly.",
  },
  {
    text: "Project Workflows",
    icon: <Workflow className="w-8 h-8 dark:text-rose-400 text-rose-600" />,
    description: "Create custom task pipelines and automate the boring stuff with powerful workflows.",
  },
  {
    text: "Built for Scale",
    icon: <Rocket className="w-8 h-8 dark:text-yellow-400 text-yellow-600" />,
    description: "Designed to handle teams of any size with performance that never breaks a sweat.",
  },
  {
    text: "Secure by Default",
    icon: <ShieldCheck className="w-8 h-8 dark:text-rose-400 text-rose-600" />,
    description: "Your data is safe with us. End-to-end encryption and enterprise-grade security built-in.",
  },
  {
    text: "Smart Notifications",
    icon: <Bell className="w-8 h-8 dark:text-yellow-400 text-yellow-600" />,
    description: "Get just the right alerts—no spam, no noise. Only what actually matters to your workflow.",
  },
  {
    text: "Seamless Integration",
    icon: <Plug className="w-8 h-8 dark:text-rose-400 text-rose-600" />,
    description: "Connect Nexly with your favorite tools like Slack, GitHub, Notion, and more—zero friction.",
  },
];

export const checklistItems = [
  {
    title: "Unified Project Dashboard",
    icon: <LucidePieChart className="dark:text-yellow-400 text-yellow-600 w-6 h-6" />,
    description:
      "All your projects in one smart, visually organized dashboard. Track progress, deadlines and team activity at a glance with real-time updates.",
  },
  {
    title: "Interactive Gantt & Timeline Views",
    icon: <LucideCalendarClock className="dark:text-rose-400 text-rose-600 w-6 h-6" />,
    description:
      "Visualize project plans with drag-and-drop Gantt charts and intuitive timelines that make scheduling and adjusting tasks effortless.",
  },
  {
    title: "Smart Notifications & Email Summaries",
    icon: <LucideMailCheck className="dark:text-yellow-400 text-yellow-600 w-6 h-6" />,
    description:
      "Stay in the loop with personalized notifications and daily email digests. Nexly highlights only what matters — no noise, just impact.",
  },
  {
    title: "Built-In Analytics & Reporting",
    icon: <LucideBarChart3 className="dark:text-rose-400 text-rose-600 w-6 h-6" />,
    description:
      "Gain insights through sleek charts and performance graphs. Measure productivity, task velocity, and bottlenecks with ease.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: ["Private board sharing", "5 Gb Storage", "Web Analytics", "Private Mode"],
  },
  {
    title: "Pro",
    price: "$10",
    features: ["Private board sharing", "10 Gb Storage", "Web Analytics (Advance)", "Private Mode"],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: ["Private board sharing", "Unlimited Storage", "High Performance Network", "Private Mode"],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
