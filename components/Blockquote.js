import React from "react";

export default function Blockquote({ children }) {
  return (
    <blockquote className="pt-12 pb-24 font-serif text-3xl font-light leading-[1.24] text-pretty text-center">
      {children}
    </blockquote>
  );
}
