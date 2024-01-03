import React from "react";

export default function Blockquote({ children }) {
  return (
    <blockquote className="mb-12 font-serif text-4xl font-light text-pretty">
      {children}
    </blockquote>
  );
}
