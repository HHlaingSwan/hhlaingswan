import type { Project } from "@/types";

export const content: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack shop with product management, secure auth, cart/checkout, and admin dashboard.",
    url: "https://master-project-sable.vercel.app",
    tags: ["MERN", "E-Commerce", "Admin", "Cloudinary"],
    impact: "Full-stack shop with role-based admin access and order tracking.",
    images: ["/images/homeView.png"],
  },
  {
    title: "Real-Time Chat App",
    description:
      "Full-stack chat with real-time messaging, media sharing, presence, and JWT auth.",
    url: "https://unit-chat-five.vercel.app/",
    tags: ["MERN", "Socket.IO", "JWT", "Cloudinary"],
    impact: "Real-time messaging with auth, media sharing, and live presence.",
    images: ["/images/demoChatApp.png"],
  },
  {
    title: "Expense Tracker Bot (Myanmar)",
    description:
      "Telegram bot for Burmese/English expense logging, monthly summaries, and holiday sync.",
    url: "https://t.me/gogoTimeBot",
    tags: ["Node.js", "Telegram Bot", "MongoDB", "API"],
    impact: "Burmese/English expense logging with automatic category mapping.",
    images: ["/images/function.png"],
  },
];
