import React from "react";

export default function Block({ title, children }) {
  return (
    <section className="font-sans pb-12">
      <div className="max-w-screen-lg px-8 mx-auto sm:grid grid-cols-12 gap-4">
        <h3 className="mb-8 sm:mb-0 col-span-4 text-xl leading-7 text-pretty text-base-black dark:text-base-100 font-normal sm:font-light pr-12">
          {title}
        </h3>
        <div className="col-span-8 col-start-5 space-y-4 text-pretty text-base-black dark:text-base-200">
          {children}
        </div>
      </div>
    </section>
  );
}
