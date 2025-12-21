import React from "react";
import Image from "next/image";
import IntegrationAPI from "@/assets/images/IntegrationAPI.png";
import shareLoc from "@/assets/images/shareLoc.png";
import canViewImage from "@/assets/images/canViewImage.png";
import canPlayVd from "@/assets/images/canPlayVd.png";
import cmtImageHoverView from "@/assets/images/cmtImageHoverView.png";
import arcane from "@/assets/images/arcane.png";
import gac from "@/assets/images/gac.png";

export const content = [
  {
    title: "Global University Website",
    description: (
      <>
        This is my first production static website for Global University,
        showcasing my ability to create professional and informative web pages.
        The site features a clean design, easy navigation, and essential
        information about the university's programs and services. You can visit
        the website at{" "}
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
          width={1500}
          height={1500}
          className="h-full w-full object-cover"
          alt="  arcane demo"
        />
      </div>
    ),
  },
  {
    title: "WeDay Page Login Api Integration",
    description:
      "Successfully integrated a robust login API into the WeDay platform using React, enhancing user authentication, session management, and overall security. This integration streamlines user access and improves data handling efficiency.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={IntegrationAPI}
          width={1500}
          height={1500}
          className="h-full w-full object-cover"
          alt=" login api demo"
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
          width={1500}
          height={1500}
          className="h-full w-full object-cover"
          alt="share location demo"
        />
      </div>
    ),
  },
  {
    title: "Rich Media Viewing - Photos",
    description:
      "Integrated advanced media viewing capabilities, allowing users to view high-resolution photos directly within the application. Optimized for fast loading and a visually rich experience, ensuring all images are displayed with clarity and detail.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={canViewImage}
          width={1500}
          height={1500}
          className="h-full w-full object-cover"
          alt=" view Image demo"
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
          width={1500}
          height={1500}
          className="h-full w-full object-cover"
          alt=" play video demo"
        />
      </div>
    ),
  },
  {
    title: "Hover-Enabled Comment Photo Previews",
    description:
      "Developed a unique feature where hovering over a comment dynamically displays associated photos. This innovative interaction provides context and enriches the comment viewing experience, making discussions more visual and engaging.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={cmtImageHoverView}
          width={1500}
          height={1500}
          className="h-full w-full object-cover"
          alt=" comment hover image view demo"
        />
      </div>
    ),
  },
  {
    title: "  Static Movie Fan Page  Base On Arcane Series",
    description:
      "Created a visually captivating static fan page dedicated to the Arcane series, showcasing key characters, episodes, and lore. The page features immersive design elements that celebrate the show's unique art style and storytelling.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={arcane}
          width={1500}
          height={1500}
          className="h-full w-full object-cover"
          alt="  arcane demo"
        />
      </div>
    ),
  },
];
