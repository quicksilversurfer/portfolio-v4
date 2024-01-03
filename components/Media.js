import React from "react";
import Image from "next/image";

export default function Media({ caption, src, alt }) {
  return (
    <div className="w-full mb-12">
      <Image
        src={src}
        alt={alt}
        quality={100}
        className="rounded-lg"
        placeholder="blur"
      />
      <figcaption className="text-sm text-base-600 dark:text-base-500 font-sans text-left mt-2">
        {caption}
      </figcaption>
    </div>
  );
}
