import React from "react";
import Footer from "./Footer";

export default function Section({
  children,
  isFooter = false,
  projectInfo = null,
  header,
  title,
}) {
  if (isFooter) {
    return (
      <section className="max-w-screen-lg px-8 w-full">
        <div className="border-t border-base-black dark:border-base-200">
          <h2 className="font-sans text-base mt-4 mb-8">{header}</h2>
          <Footer />
        </div>
      </section>
    );
  }
  if (projectInfo !== null) {
    return (
      <section className="max-w-screen-lg px-8 w-full">
        <div className="border-t border-base-black dark:border-base-200">
          <div className="sm:grid grid-cols-3 gap-6 mb-12 md:mb-4 sm:mb-0">
            {projectInfo.map((project, index) => (
              <div key={index} className="flex flex-col col-span-1">
                <h2 className="font-sans font-light text-base mt-4 mb-2 text-base-black dark:text-base-200">
                  {project.title}
                </h2>
                <h3 className="font-sans font-light text-base mb-2 sm:mb-12 text-base-600 dark:text-base-500 text-pretty">
                  {project.description}
                </h3>
              </div>
            ))}
          </div>
          {children}
        </div>
      </section>
    );
  }
  return (
    <section className="max-w-screen-lg px-8 w-full">
      <div className="border-t border-base-black dark:border-base-200 mb-8 sm:mb-16">
        <h2 className="font-sans text-base mt-4 mb-8">{header}</h2>
        <h3 className="font-serif text-3xl sm:text-4xl font-light tracking-normal mb-12 sm:leading-[1.24] text-pretty">
          {title}
        </h3>
        {children}
      </div>
    </section>
  );
}
