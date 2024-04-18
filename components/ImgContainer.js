import React from "react";

export default function ImgContainer({ children }) {
  return (
    <section className="grid grid-cols-12 gap-4 font-sans pb-12">
      {children}
    </section>
  );
}
