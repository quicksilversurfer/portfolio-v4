import React from "react";

export default function Block({ title, children }) {
  return (
    <section className="font-sans pb-12">
      <div className="max-w-screen-lg mx-auto sm:grid grid-cols-12 gap-4 w-full px-8 sm:px-8 md:px-8 xl:px-0">
        <h3 className="mb-8 sm:mb-0 col-span-4 text-lg leading-7 text-pretty text-base-black dark:text-base-100 sm:font-light pr-12">
          {title}
        </h3>
        <div className="col-span-8 col-start-5 space-y-4 text-pretty text-base-black dark:text-base-200">
          {children}
        </div>
      </div>
    </section>
  );
}
