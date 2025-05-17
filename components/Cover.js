"use client";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
import SketchLoader from "./SketchLoader";

export default function Cover({ heading, description }) {
  const pathname = usePathname();

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1], // Optimized ease curve (similar to CSS ease-out-expo)
      },
    },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.05, // Slight delay between heading and description
      },
    },
  };

  const bioVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      className={clsx("w-full", {
        // For home page: height only on lg+ screens
        "lg:h-[calc(100vh-10rem)]": pathname === "/",
        // For other pages: height on all screens
        "h-[calc(100vh-10rem)]": pathname !== "/",
        "relative flex": true,
        "items-center":
          pathname.startsWith("/") || pathname.startsWith("/blog"),
        "items-end": !pathname.startsWith("/") && !pathname.startsWith("/blog"),
        // Add padding for home page
        "pt-8 pb-8 md:pt-16 md:pb-16": pathname === "/",
      })}
    >
      <div className="max-w-screen-lg mx-auto w-full px-8 sm:px-8 md:px-8 xl:px-0">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            variants={textVariants}
            className={clsx(
              // Smooth scaling for heading
              "font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.08] md:leading-[1.06] lg:leading-[1.04] text-base-black dark:text-base-200 mb-8 lg:mb-12"
            )}
          >
            {heading}
          </motion.h1>
          <motion.p
            variants={textVariants}
            className={clsx(
              // Use same large scale for description on all pages
              "font-serif text-[1.8rem] md:text-3xl lg:text-4xl leading-[1.45] md:leading-[1.32] lg:leading-[1.22] text-base-black dark:text-base-300 text-balance mb-0",
              pathname !== "/" && "max-w-2xl"
            )}
          >
            {description}
          </motion.p>

          {pathname === "/" && (
            <motion.div
              variants={bioVariants}
              initial="hidden"
              animate="visible"
              className="mt-8 mx-auto w-full"
            >
              <div className="mx-auto">
                <p className="font-serif text-[1.25rem] md:text-xl lg:text-2xl text-base-black dark:text-base-500 leading-[1.7] md:leading-[1.6] lg:leading-[1.5] text-balance">
                  My fascination with complex systems has guided my path through
                  healthcare and into cloud infrastructure. I&apos;ve learned
                  that <em>conceptual frameworks and code</em> are powerful
                  tools I can employ in my design process to foster
                  collaboration and shared understanding. This approach helped
                  improve usability of medical devices and now drives my current
                  work—creating better developer tooling while also building
                  custom tools that deepen our understanding of the people and
                  domains we serve. What truly intrigues me is design&apos;s
                  capacity to uncover domain-specific patterns and mental
                  models—how specialists think about their work and navigate
                  their worlds. By understanding these nuances, I aim to craft
                  experiences where{" "}
                  <em>purpose steps forward and technology recedes</em>,
                  allowing people to accomplish their goals without the friction
                  of unnecessary complexity.
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
      <SketchLoader />
    </section>
  );
}
