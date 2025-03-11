import React from "react";

export default function ImgContainer({
  children,
  fullWidth = false,
  className = "",
}) {
  return (
    <section className={`font-sans pb-12 ${className}`}>
      <div
        className={fullWidth ? "px-8 lg:px-16" : "max-w-screen-lg px-8 mx-auto"}
      >
        <div className="grid grid-cols-12 gap-4">{children}</div>
      </div>
    </section>
  );
}
