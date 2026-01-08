import React from "react";
import Image from "next/image";
import shareLoc from "@/assets/images/shareLoc.png";
import canPlayVd from "@/assets/images/canPlayVd.png";
import arcane from "@/assets/images/arcaneImage.png";
import gac from "@/assets/images/gac.png";
import loginChat from "@/assets/images/loginChatApp.png";
import demoChat from "@/assets/images/demoChatApp.png";
import perTest from "@/assets/images/performanceTest.png";
import welcomeBot from "@/assets/images/welcome.png";
import functionallityBot from "@/assets/images/function.png";
import type { Project } from "@/types";

export const content: Project[] = [
  {
    title: `Global University Website (Freelance)`,
    description: (
      <>
        This is my first production static website for Global University,
        showcasing my ability to create professional and informative web pages.
        The site features a clean design, easy navigation, and essential
        information about the university&apos;s programs and services.
      </>
    ),
    url: "https://www.gacportal.com",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={gac}
          className="h-full w-full object-contain"
          alt="global university website demo"
        />
      </div>
    ),
  },
  {
    title: "Advanced Sharing & Tagging (React)",
    description:
      "Introduced comprehensive sharing functionalities, allowing users to share posts, broadcast their location, and tag friends. This fosters deeper connections and community interaction, making content sharing more dynamic and personalized.",
    url: "#projects",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={shareLoc}
          className="h-full w-full object-contain"
          alt="share location demo"
        />
      </div>
    ),
  },
  {
    title: "Rich Media Viewing - Videos (React)",
    description:
      "Implemented a seamless video playback experience within the application, enabling users to watch videos without leaving the platform. Features include responsive playback controls and optimized streaming for various devices and network conditions.",
    url: "#projects",
    status: "in-progress",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white relative">
        <Image
          src={canPlayVd}
          className="h-full w-full object-contain"
          alt=" play video demo"
        />
      </div>
    ),
  },

  {
    title: "Static Movie Fan Page Base On Arcane Series ",
    description: (
      <>
        Created a visually captivating static fan page dedicated to the Arcane
        series, showcasing key characters, episodes, and lore. The page features
        immersive design elements that celebrate the show&apos;s unique art
        style and storytelling.
      </>
    ),
    url: "https://arcane-game.vercel.app",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={arcane}
          className="h-full w-full object-contain"
          alt="  arcane demo"
        />
      </div>
    ),
  },
  {
    title: "Secure Authentication (MERN Stack)",
    description: (
      <>
        Implemented JWT-based authentication with bcrypt password hashing and
        cookie-based session management. Features include secure 7-day persistent
        sessions, protected routes, guest route guards, and welcome email delivery
        via Resend API. User credentials are never stored in plain text, ensuring
        maximum security for all user accounts.
      </>
    ),
    url: "https://unit-chat-five.vercel.app/",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={loginChat}
          className="h-full w-full object-contain"
          alt="  chat application demo"
        />
      </div>
    ),
  },
  {
    title: "Real-Time Chat Application (MERN Stack)",
    description: (
      <>
        Built a full-featured real-time messaging platform with Socket.IO for
        instant message delivery. Users can send text and share images via
        Cloudinary, view online status indicators, track last seen timestamps,
        and manage contacts with add/block functionality. Features responsive
        design with smooth Framer Motion animations and skeleton loading states.
      </>
    ),
    url: "https://unit-chat-five.vercel.app/",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={demoChat}
          className="h-full w-full object-contain"
          alt="  chat application demo"
        />
      </div>
    ),
  },
  {
    title: "Performance & Security Optimization",
    description:
      "Optimized the chat application for peak performance and security. Achieved excellent Lighthouse scores across performance, accessibility, best practices, and SEO. Implemented Arcjet bot protection, efficient database queries, and responsive UI for all devices. Rigorous testing ensured fast loading times and seamless user experience across browsers.",
    url: "#projects",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={perTest}
          className="h-full w-full object-contain"
          alt="  chat application demo"
        />
      </div>
    ),
  },
  {
    title: "Myanmar Expense Tracker Telegram Bot",
    description: (
      <>
        A Telegram bot for tracking daily expenses with Myanmar language support.
        Features include breakfast/lunch/dinner tracking, monthly spending overview,
        and automatic Myanmar holiday detection from Calendarific API. Supports both
        Burmese and English inputs for seamless expense logging.{" "}
        <a
          className="text-amber-400"
          href="https://t.me/gogoTimeBot"
          target="_blank"
        >
          @gogoTimeBot
        </a>
      </>
    ),
    url: "https://t.me/gogoTimeBot",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={welcomeBot}
          className="h-full w-full object-contain"
          alt="  expense tracker bot demo"
        />
      </div>
    ),
  },
  {
    title: "Bot Features & Daily Usage Guide",
    description: (
      <>
        Use natural language commands like <code className="text-amber-400">breakfast 1000</code> or
        <code className="text-amber-400"> ညနေစာ 5000</code> to log expenses instantly. View today&apos;s spending with
        <code className="text-amber-400">/today</code>, get monthly summaries with <code className="text-amber-400">/thismonth</code>,
        and check Myanmar holidays with <code className="text-amber-400">/holidays</code>. The bot automatically categorizes
        expenses by keywords and syncs holidays for better financial planning.
      </>
    ),
    url: "https://t.me/gogoTimeBot",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={functionallityBot}
          className="h-full w-full object-contain"
          alt="  expense tracker bot demo"
        />
      </div>
    ),
  },
];
