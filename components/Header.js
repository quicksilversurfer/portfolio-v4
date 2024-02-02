"use client";
import React from "react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";

import { ThemeSelector } from "./ThemeSelector";
import DocumentPreview from "./DocPreview";

export default function Header() {
  let [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const pathname = usePathname();

  return (
    <header
      className={clsx(
        "w-full sticky top-0 left-0 z-50 flex flex-wrap justify-between py-10 bg-base-paper dark:bg-base-black transition duration-500 dark:shadow-none",
        isScrolled
          ? "bg-base-paper/95 backdrop-blur-sm [@supports(backdrop-filter:blur(0))]:bg-base-paper/75 dark:bg-base-black/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-base-black/75"
          : "bg-transparent dark:bg-transparent"
      )}
    >
      <nav className="flex flex-row justify-between font-light font-sans max-w-screen-lg px-8 mx-auto w-full">
        <Link
          className={`link-style ${pathname === "/" ? "active" : ""}`}
          href="/"
        >
          ps
        </Link>
        <div className="flex flex-row relative">
          {/* <Link
            className={`link-style mr-12  ${
              pathname === "/blog" ? "active" : ""
            }`}
            href="/blog"
          >
            blog
          </Link> */}
          <Link
            className="link-style mr-12"
            href="https://drive.google.com/file/d/1PjHiM20e9UfJnAxwGw10C-BeUex6IP7v/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            résumé
          </Link>
          <AnimatePresence>{isHovered && <DocumentPreview />}</AnimatePresence>
          <ThemeSelector />
        </div>
      </nav>
    </header>
  );
}
