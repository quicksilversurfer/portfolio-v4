"use client";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
import SketchLoader from "./SketchLoader";

export default function Cover({ heading, description }) {
  const pathname = usePathname();
  return (
    <section
      className={clsx("w-full", {
        "h-[calc(100vh-10rem)]": !pathname.startsWith("/blog"),
        "h-[calc(50vh-10rem)]":
          pathname.startsWith("/blog") || pathname.startsWith("/colophon"),
        "relative flex": true,
        "items-center":
          pathname.startsWith("/") || pathname.startsWith("/blog"),
        "items-end": !pathname.startsWith("/") && !pathname.startsWith("/blog"),
      })}
    >
      <div className="max-w-screen-lg px-8 mx-auto w-full">
        <motion.h1
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 12,
            damping: 5,
          }}
          className={clsx(
            " font-serif font-light text-6xl text-base-black dark:text-base-200 mb-12",
            {
              "mb-8 sm:mb-12 sm:text-8xl": pathname === "/",
              "mb-8 sm:text-8xl": pathname !== "/",
            }
          )}
        >
          {heading}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 5,
            damping: 5,
          }}
          className={clsx(
            "font-serif font-thin text-4xl text-base-600 dark:text-base-500 text-balance",
            {
              "sm:text-7xl sm:leading-[1.2]": pathname === "/",
              "sm:text-5xl mb-12 sm:leading-[1.2]": pathname !== "/",
            }
          )}
        >
          {description}
        </motion.p>
      </div>
      <SketchLoader />
    </section>
  );
}
