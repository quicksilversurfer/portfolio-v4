import React from "react";

export default function ImgContainer({
  children,
  fullWidth = false,
  className = "",
}) {
  return (
    <section className={`font-sans flex justify-center pb-12 ${className}`}>
      <div
        className={
          fullWidth
            ? "max-w-screen-3xl px-8 lg:px-16"
            : "max-w-screen-lg mx-auto"
        }
      >
        <div className="grid grid-cols-12 gap-4">{children}</div>
      </div>
    </section>
  );
}
