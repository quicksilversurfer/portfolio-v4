"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

import ProtectedContent from "./ProtectedContent";

export default function ProtectedInput() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const pathname = usePathname();

  const currentRoute = pathname.split("/")[1];

  // Dynamically import the content component based on the current route
  const ContentComponent = dynamic(
    () =>
      import(`../app/${currentRoute}/_content/details`).catch((err) =>
        console.error("Failed to load the content module:", err)
      ),
    {
      loading: () => <ProtectedContent loading />,
    }
  );

  const handleUnlock = async () => {
    try {
      if (password === process.env.NEXT_PUBLIC_CASE_STUDY_PASSWORD) {
        setUnlocked(true);
        setError(null);
      } else {
        setError("Incorrect password");
      }
    } catch (err) {
      setError("An error occurred while verifying the password");
    }
  };

  if (error) {
    return (
      <div className="text-base-600 dark:text-base-400">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      {!unlocked ? (
        <ProtectedContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUnlock();
            }}
            className="flex gap-4 sm:flex-row sm:gap-2 items-center justify-center w-10/12 sm:w-8/12"
          >
            <label id="password" className="sr-only"></label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="block w-9/12 rounded-md border-0 py-1.5 text-base-900 dark:text-base-100 shadow-sm ring-1 ring-inset ring-base-300 dark:ring-base-800 placeholder:text-base-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
            />
            <button
              type="submit"
              className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-3/12 bg-base-black  dark:bg-base-50 text-base-50 dark:text-base-900"
            >
              Unlock
            </button>
          </form>
        </ProtectedContent>
      ) : (
        <div className="text-base-600 dark:text-base-400">
          {" "}
          {ContentComponent && <ContentComponent />}
        </div>
      )}
    </>
  );
}
