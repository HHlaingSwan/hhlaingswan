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
            width={1024} // Actual width of the image
            height={1366} // Actual height of the image (3:4 aspect ratio)
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
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Actively seeking out new technologies and best practices.</li>
              <li>
                Constantly striving to deepen my understanding and expand my
                skill set.
              </li>
              <li>Embracing challenges as opportunities for growth.</li>
              <li>
                Eager to tackle complex problems with innovative solutions.
              </li>
              <li>Dedicated to continuous learning and self-improvement.</li>
            </ul>
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
