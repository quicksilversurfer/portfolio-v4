"use client";
import React from "react";
import { motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 2 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 12, damping: 5 }}
    >
      <Link href={link} className="group">
        <div className="flex flex-col mb-12 relative">
          <Image
            src={image}
            alt={title}
            className="rounded-lg grayscale-[10%] transition-all duration-500 ease-in-out group-hover:scale-[1.01] group-hover:grayscale-0 aspect-[16/9] object-cover"
          />
          <div className="flex flex-col mt-4">
            <h3 className="before:scale-x-0 origin-top-right font-sans link-style text-base font-light mb-1 lowercase w-max group-hover:before:scale-x-100 group-hover:before:origin-top-left">
              {title}
            </h3>
            <p className="font-sans text-base font-light text-base-600 dark:text-base-500 lowercase">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
