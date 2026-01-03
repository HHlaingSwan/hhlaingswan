import React from "react";
import Image from "next/image";
import shareLoc from "@/assets/images/shareLoc.png";
import canPlayVd from "@/assets/images/canPlayVd.png";
import arcane from "@/assets/images/arcane.png";
import gac from "@/assets/images/gac.png";
import loginChat from "@/assets/images/loginChatApp.png";
import demoChat from "@/assets/images/demoChatApp.png";
import mobileView from "@/assets/images/mobileView.png";
import perTest from "@/assets/images/performanceTest.png";

export const content = [
  {
    title: "Global University Website",
    description: (
      <>
        This is my first production static website for Global University,
        showcasing my ability to create professional and informative web pages.
        The site features a clean design, easy navigation, and essential
        information about the university&apos;s programs and services. You can
        visit the website at{" "}
        <a
          href="https://www.gacportal.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline"
        >
          gacportal.com
        </a>
        .
      </>
    ),
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
    title: "Advanced Sharing & Tagging",
    description:
      "Introduced comprehensive sharing functionalities, allowing users to share posts, broadcast their location, and tag friends. This fosters deeper connections and community interaction, making content sharing more dynamic and personalized.",
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
    title: "Rich Media Viewing - Videos",
    description:
      "Implemented a seamless video playback experience within the application, enabling users to watch videos without leaving the platform. Features include responsive playback controls and optimized streaming for various devices and network conditions.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={canPlayVd}
          className="h-full w-full object-contain"
          alt=" play video demo"
        />
      </div>
    ),
  },

  {
    title: "Static Movie Fan Page Base On Arcane Series",
    description: (
      <>
        Created a visually captivating static fan page dedicated to the Arcane
        series, showcasing key characters, episodes, and lore. The page features
        immersive design elements that celebrate the show's unique art style and
        storytelling.
        <a
          href="https://arcane-game.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline"
        >
          Arcane
        </a>
      </>
    ),
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
    title: "About Authentication & Authorization",
    description: (
      <>
        Password is not stored in plain text. Instead, it is hashed using a
        secure algorithm (e.g., bcrypt) before being stored in the database.
        This ensures that even if the database is compromised, the actual
        passwords remain protected.
        <a
          href="https://unit-chat-five.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline"
        >
          Login Here
        </a>
      </>
    ),
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
    title: "Demo Chat Style",
    description: (
      <>
        User can send messages, images and receive real-time
        notifications.Images Are Stored in Cloudinary. Active users are updated
        in real-time.But you have to login first if not i protected route you
        will be redirected to login page without token exist.
        <a
          href="https://unit-chat-five.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline"
        >
          Demo Chat Style
        </a>
      </>
    ),
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
    title: "Responsive Design Like Mobile App",
    description:
      "Engineered a fully responsive chat application with a mobile-first design philosophy, ensuring a seamless and intuitive user experience across all devices, from smartphones to desktops. The interface adapts fluidly to different screen sizes, providing an experience so cohesive that it feels like a native mobile app, even on the web.",
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
    title: "This is Performance, Accessibility, Best Practices and SEO Testing",
    description:
      "Tested the chat application for performance, accessibility, best practices, and SEO. Ensured optimal loading times, compatibility with various browsers and devices, and adherence to web standards. Conducted thorough testing to identify and address any potential issues, resulting in a highly performant and user-friendly application.",
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
