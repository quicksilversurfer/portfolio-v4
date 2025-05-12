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
        "h-[calc(100vh-10rem)]": !pathname.startsWith("/blog"),
        "h-[calc(50vh-10rem)]":
          pathname.startsWith("/blog") || pathname.startsWith("/colophon"),
        "relative flex": true,
        "items-center":
          pathname.startsWith("/") || pathname.startsWith("/blog"),
        "items-end": !pathname.startsWith("/") && !pathname.startsWith("/blog"),
      })}
    >
      <div className="max-w-screen-lg mx-auto w-full px-8 sm:px-4 md:px-4 lg:px-0">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            variants={textVariants}
            className={clsx(
              "font-serif text-6xl text-base-black dark:text-base-200 mb-12",
              {
                "mb-8 sm:mb-12 sm:text-8xl": pathname === "/",
                "mb-8 sm:text-8xl": pathname !== "/",
              }
            )}
          >
            {heading}
          </motion.h1>
          <motion.p
            variants={textVariants}
            className={clsx(
              "font-serif text-4xl text-base-black dark:text-base-300 text-balance",
              {
                "sm:text-5xl sm:leading-[1.3]": pathname === "/",
                "sm:text-5xl sm:leading-[1.1]": pathname !== "/",
              }
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
                <p className="font-serif text-2xl sm:text-3xl text-base-black dark:text-base-500 leading-[1.5] sm:leading-[1.6] text-balance">
                  Working across complex domains has shaped my perspective. I
                  explore these domains through{" "}
                  <em>conceptual frameworks and working code</em>, seeking to
                  create clarity in healthcare and cloud infrastructure through
                  collaboration. Each prototype and framework helps reveal
                  complex socio-technical systems and their hidden patterns.
                  This approach has led to meaningful outcomes: award-winning
                  medical interfaces that streamline clinical work and AI
                  platforms that weave scattered feedback into coherent
                  narratives. I'm drawn to these spaces where small interactions
                  connect to larger systems—crafting experiences where{" "}
                  <em>purpose steps forward and technology recedes</em>. When
                  done thoughtfully, human intention can flow uninterrupted
                  through carefully designed pathways.
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
