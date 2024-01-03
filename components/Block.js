import React from "react";

export default function Block({ title, children }) {
  return (
    <section className="sm:grid grid-cols-12 gap-4 font-sans mb-12">
      <h3 className="mb-8 sm:mb-0 col-span-4 text-base-black dark:text-base-200 font-semibold sm:font-normal">
        {title}
      </h3>
      <div className="col-span-8 col-start-5 space-y-4 text-pretty text-base-black dark:text-base-200">
        {children}
      </div>
    </section>
  );
}
