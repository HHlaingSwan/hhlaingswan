import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import React from "react";
import { AuroraText } from "@/components/ui/aurora-text";

const ProjectOverview = () => {
  const content: any = [
    {
      title: "WeDay Page Login Api Integration",
      description:
        "Successfully integrated a robust login API into the WeDay platform using React, enhancing user authentication, session management, and overall security. This integration streamlines user access and improves data handling efficiency.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src="/ProjectData/IntegrationAPI.png"
            width={300}
            height={300}
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
          <img
            src="/ProjectData/shareLoc.png"
            width={300}
            height={300}
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
          <img
            src="/ProjectData/canViewImage.png"
            width={300}
            height={300}
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
          <img
            src="/ProjectData/canPlayVd.png"
            width={300}
            height={300}
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
          <img
            src="/ProjectData/cmtImageHoverView.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt=" comment hover image view demo"
          />
        </div>
      ),
    },
  ];
  return (
    <div className="p-4 md:p-10">
      <AuroraText>
        <div className="text-center">
          <h1 className="text-3xl font-bold md:text-5xl">Project Highlights</h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm md:text-lg">
            A showcase of my recent work and capabilities, demonstrating my
            skills in creating modern web applications.
          </p>
        </div>
      </AuroraText>
      <div className="mt-8">
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default ProjectOverview;
