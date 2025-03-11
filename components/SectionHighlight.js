import React from "react";

export default function SectionHighlight({
  kicker,
  heading,
  subHeading,
  children,
}) {
  return (
    <section className="font-sans pb-12 flex-col">
      <div className="max-w-screen-lg px-8 mx-auto">
        <h3 className="pb-2 sm:pb-4 text-base text-base-600 dark:text-base-400 sm:font-light">
          {kicker}
        </h3>
        <h2 className="text-4xl sm:text-5xl pb-6 font-extralight text-balance text-base-black dark:text-base-50 leading-tight">
          {heading}
        </h2>
        {subHeading && (
          <p className="text-2xl sm:text-2xl text-base-black dark:text-base-50 font-light text-pretty sm:leading-8">
            {subHeading}
          </p>
        )}
      </div>
      <div className="pt-12 text-base-black dark:text-base-200 w-full">
        {children}
      </div>
    </section>
  );
}
