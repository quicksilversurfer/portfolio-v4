import React from "react";
import Image from "next/image";

export default function Media({ caption, src, alt }) {
  return (
    <div className="w-full relative">
      <Image
        src={src}
        alt={alt}
        quality={100}
        className="rounded-md border border-base-200 dark:border-base-900"
        placeholder="blur"
      />
      {caption && (
        <figcaption className="text-sm text-base-600 dark:text-base-500 font-sans text-left mt-4">
          {caption}
        </figcaption>
      )}
    </div>
  );
}
