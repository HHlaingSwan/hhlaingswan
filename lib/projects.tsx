import React from "react";
import Image from "next/image";
import shareLoc from "@/assets/images/shareLoc.png";
import canPlayVd from "@/assets/images/canPlayVd.png";
import arcane from "@/assets/images/arcaneImage.png";
import gac from "@/assets/images/gac.png";
import loginChat from "@/assets/images/loginChatApp.png";
import demoChat from "@/assets/images/demoChatApp.png";
import mobileView from "@/assets/images/mobileView.png";
import perTest from "@/assets/images/performanceTest.png";

export const content = [
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
    title: "Authentication & Authorization (MERN Stack)",
    description: (
      <>
        Password is not stored in plain text. Instead, it is hashed using a
        secure algorithm (e.g., bcrypt) before being stored in the database.
        This ensures that even if the database is compromised, the actual
        passwords remain protected.
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
    title: "Demo Chat Style (MERN Stack)",
    description: (
      <>
        User can send messages, images and receive real-time
        notifications.Images Are Stored in Cloudinary. Active users are updated
        in real-time.{" "}
        <span className="text-amber-400">
          {" "}
          But you have to login first if not, I&apos;m a protected route{" "}
        </span>
        and you will be redirected to the login page without a token.{" "}
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
    title: "Responsive Design Like Mobile App (MERN Stack)",
    description:
      "Engineered a fully responsive chat application with a mobile-first design philosophy, ensuring a seamless and intuitive user experience across all devices, from smartphones to desktops. The interface adapts fluidly to different screen sizes, providing an experience so cohesive that it feels like a native mobile app, even on the web.",
    url: "#projects",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={mobileView}
          className="h-full w-full object-contain"
          alt="  chat application demo"
        />
      </div>
    ),
  },
  {
    title:
      "This is Performance, Accessibility, Best Practices and SEO Testing (MERN Stack)",
    description:
      "Tested the chat application for performance, accessibility, best practices, and SEO. Ensured optimal loading times, compatibility with various browsers and devices, and adherence to web standards. Conducted thorough testing to identify and address any potential issues, resulting in a highly performant and user-friendly application.",
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
];
