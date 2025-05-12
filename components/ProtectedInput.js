"use client";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

import ProtectedContent from "./ProtectedContent";

// Add Loading component
const Loading = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-base-600 dark:text-base-400 animate-pulse"
    aria-hidden="true"
  >
    <path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 0 1-1.5 0V6.75a3.75 3.75 0 1 0-7.5 0v3a3 3 0 0 1 3 3v6.75a3 3 0 0 1-3 3H3.75a3 3 0 0 1-3-3v-6.75a3 3 0 0 1 3-3h9v-3c0-2.9 2.35-5.25 5.25-5.25Z" />
  </svg>
);

const ErrorDisplay = ({ message, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -5 }}
    transition={{ duration: 0.3 }}
    className="mt-2 mr-auto w-fit p-3 rounded-md bg-red-50 border border-red-200 text-red-600 dark:bg-red-900/30 dark:border-red-800 dark:text-red-300 relative flex items-center"
    role="alert"
  >
    <p className="pr-7">{message}</p>
    <button
      onClick={onClose}
      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 hover:text-red-700 dark:text-red-300 dark:hover:text-red-100 ml-2"
      aria-label="Dismiss error"
    >
      ✕
    </button>
  </motion.div>
);

ErrorDisplay.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default function ProtectedInput() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [contentError, setContentError] = useState(null);
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const passwordInputRef = useRef(null);
  const pathname = usePathname();

  const currentRoute = pathname.split("/")[1];

  // Dynamically import the content component based on the current route
  const ContentComponent = dynamic(
    () =>
      import(`../app/${currentRoute}/_content/details.js`).catch((err) => {
        console.error("Failed to load the content module:", err);
        setContentError(
          `Unable to load content for "${currentRoute}". Please try again later.`
        );
        return () => null;
      }),
    {
      loading: () => (
        <motion.div className="flex justify-center py-8">
          <Loading />
        </motion.div>
      ),
      ssr: false,
    }
  );

  const handleUnlock = async (e) => {
    e.preventDefault();

    if (!password.trim()) {
      setError("Password cannot be empty");
      return;
    }

    setIsVerifying(true);
    try {
      if (password === process.env.NEXT_PUBLIC_CASE_STUDY_PASSWORD) {
        setUnlocked(true);
        setError(null);
      } else {
        setError("Incorrect password. Please try again.");
      }
    } catch (err) {
      setError("An error occurred while verifying the password");
    } finally {
      setIsVerifying(false);
    }
  };

  const resetForm = () => {
    setUnlocked(false);
    setPassword("");
    setError(null);
    setContentError(null);
    setIsContentLoaded(false);

    // Focus the input after resetting
    setTimeout(() => {
      if (passwordInputRef.current) {
        passwordInputRef.current.focus();
      }
    }, 0);
  };

  if (contentError && unlocked) {
    return (
      <div className="text-red-600 dark:text-red-400 p-4 border border-red-300 dark:border-red-800 rounded-md">
        <p>{contentError}</p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={resetForm}
          className="mt-4 px-4 py-2 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-md hover:bg-red-200 dark:hover:bg-red-800"
        >
          Try Again
        </motion.button>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {!unlocked ? (
        <ProtectedContent key="protected-form" isLocked={true}>
          <motion.form
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleUnlock}
            className="flex gap-4 flex-col sm:flex-row sm:gap-2 sm:items-center justify-center w-full sm:w-8/12"
          >
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="password"
              id="password"
              ref={passwordInputRef}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              disabled={isVerifying}
              aria-invalid={!!error}
              aria-describedby={error ? "password-error" : undefined}
              className="block sm:w-9/12 rounded-md border-0 py-1.5 text-base-900 dark:text-base-100 shadow-sm ring-1 ring-inset ring-base-300 dark:ring-base-800 placeholder:text-base-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isVerifying}
              className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-normal sm:font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-3/12 bg-base-black dark:bg-base-50 text-base-50 dark:text-base-900 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isVerifying ? (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  Verifying...
                </motion.span>
              ) : (
                "Unlock"
              )}
            </motion.button>
          </motion.form>

          <AnimatePresence>
            {error && (
              <motion.div
                className="mt-4 flex justify-center"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ErrorDisplay message={error} onClose={() => setError(null)} />
              </motion.div>
            )}
          </AnimatePresence>
        </ProtectedContent>
      ) : (
        <motion.div
          key="protected-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <ContentComponent />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
