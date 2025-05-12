import React from "react";
import Footer from "./Footer";

export default function Section({
  children,
  isFooter = false,
  projectInfo = null,
  header,
  title,
  constrain = false,
}) {
  // Footer section
  if (isFooter) {
    return (
      <section className="w-full">
        <div className="border-t border-base-black/30 dark:border-base-200/20">
          <div
            className={
              constrain
                ? "max-w-screen-lg mx-auto px-8 sm:px-4 md:px-4 lg:px-0"
                : "px-8 sm:px-4 md:px-4 lg:px-0"
            }
          >
            <div className="max-w-screen-lg mx-auto">
              <h2 className="font-sans text-base mt-4 mb-8">{header}</h2>
            </div>
            <Footer />
          </div>
        </div>
      </section>
    );
  }

  // Project info section
  if (projectInfo !== null) {
    return (
      <section className="w-full">
        <div className="border-t border-base-black/30 dark:border-base-200/20">
          <div className="max-w-screen-lg mx-auto px-8 sm:px-4 md:px-4 lg:px-0">
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
          </div>
        </div>
        {constrain ? (
          <div className="max-w-screen-lg mx-auto px-8 sm:px-4 md:px-4 lg:px-0">
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    );
  }

  // Default section
  return (
    <section className="w-full">
      {constrain ? (
        <div className="max-w-screen-lg mx-auto px-8 sm:px-4 md:px-4 lg:px-0">
          <div className="border-t border-base-black/30 dark:border-base-200/20 mb-8 sm:mb-16 ">
            <h2 className="font-sans text-base mt-4 mb-8">{header}</h2>
            <h3 className="font-serif text-3xl sm:text-4xl font-light tracking-normal mb-12 sm:leading-[1.24] text-pretty">
              {title}
            </h3>
            {children}
          </div>
        </div>
      ) : (
        <div className="border-t border-base-black/30 dark:border-base-200/20 mb-8 sm:mb-16 ">
          <div className="max-w-screen-lg mx-auto px-8 sm:px-4 md:px-4 lg:px-0">
            <h2 className="font-sans text-base mt-4 mb-8">{header}</h2>
            <h3 className="font-serif text-3xl sm:text-4xl font-light tracking-normal mb-12 sm:leading-[1.24] text-pretty">
              {title}
            </h3>
          </div>
          {children}
        </div>
      )}
    </section>
  );
}
