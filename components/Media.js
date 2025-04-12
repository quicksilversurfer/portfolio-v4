import React from "react";
import Image from "next/image";

export default function Media({ caption, src, alt, isVideo = false }) {
  return (
    <div className="w-full relative">
      {isVideo ? (
        <div className="w-full flex justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-[1920px] h-auto rounded-md border border-base-200 dark:border-base-900"
          >
            <source src={src} type="video/webm" />
            <track kind="captions" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          quality={100}
          className="rounded-md border border-base-200 dark:border-base-900"
          placeholder="blur"
        />
      )}
      {caption && (
        <figcaption className="text-sm text-base-600 dark:text-base-500 font-sans text-left mt-4">
          {caption}
        </figcaption>
      )}
    </div>
  );
}
