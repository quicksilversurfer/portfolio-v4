import { motion } from "framer-motion";
import React from "react";

export default function DocumentPreview() {
  return (
    <motion.div
      className="absolute bg-base-paper aspect-[3/4] w-24 p-4 rounded shadow-md border -right-24 border-orange z-10 font-sans"
      initial={{ y: -220, rotate: 0 }}
      animate={{ y: -110, rotate: 25 }}
      exit={{ y: -220, rotate: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <div className="animate-pulse flex flex-col space-y-4">
        <div className="h-1 bg-base-500 rounded w-3/4"></div>
        <div className="space-y-1">
          <div className="h-1 bg-orange rounded-sm w-5/6"></div>
          <div className="h-1 bg-orange rounded-sm w-4/6"></div>
        </div>

        <div className="space-y-1">
          <div className="h-1 bg-orange rounded-sm w-5/6"></div>
          <div className="h-1 bg-orange rounded-sm w-4/6"></div>
        </div>

        <div className="space-y-1">
          <div className="h-1 bg-orange rounded-sm w-5/6"></div>
          <div className="h-1 bg-orange rounded-sm w-4/6"></div>
        </div>
      </div>
    </motion.div>
  );
}
