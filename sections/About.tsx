import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-20  px-4 bg-gradient-to-b from-background via-secondary to-background dark:via-slate-950"
    >
      <div className="container mx-auto   flex flex-col md:flex-row items-center gap-16">
        {/* Left Column: Photo */}
        <div className="md:w-2/5 flex justify-center">
          {/* Placeholder for user's photo */}
          {/* Please replace this div with your actual Image component. */}
          {/* Ensure your image is optimized for the web and ideally has a 3:4 or 2:3 aspect ratio. */}
          <Image
            src="/personal.jpg"
            alt="Htet Hlaing Swan's Photo"
            width={768} // Actual width of the image
            height={1024} // Actual height of the image (3:4 aspect ratio)
            className="rounded-lg shadow-lg object-cover w-full h-auto" // Use h-auto to respect aspect ratio with given width
          />
        </div>

        {/* Right Column: Text Content */}
        <div className="md:w-3/5 px-6 md:px-0 text-lg space-y-8">
          <h2 className="text-3xl text-primary font-bold mb-4 text-center md:text-left">
            About Me
          </h2>
          <p className="text-muted-foreground">
            Hello! I&apos;m Htet Hlaing Swan, a passionate full-stack developer
            based in Myanmar. My journey in software development has been driven
            by a desire to create impactful and user-friendly applications that
            bridge the gap between design and functionality.
          </p>

          <div>
            <h3 className="text-2xl font-semibold mb-2 text-primary text-center md:text-left">
              In My Element
            </h3>
            <p className="text-muted-foreground">
              I thrive on solving complex problems, whether it's optimizing
              database queries, crafting scalable APIs, or designing intuitive
              user interfaces. I believe in writing clean, maintainable code and
              continuously learning new technologies to deliver high-quality
              solutions.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2 text-primary text-center md:text-left">
              Beyond the Code
            </h3>
            <p className="text-muted-foreground">
              When I&apos;m not immersed in code, you can find me exploring new
              hiking trails, experimenting with photography, or diving into a
              good book. I believe a balanced life fuels creativity and
              innovation in my professional work.
            </p>
          </div>

          <div className="mt-8 flex justify-center md:justify-start">
            {/* Call to Action - Placeholder for a button or link */}
            <button className="px-6 py-3 bg-accent text-accent-foreground font-bold rounded-md shadow-md hover:bg-accent/90 transition-colors">
              View My Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
