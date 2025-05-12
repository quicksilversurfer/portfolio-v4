import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col sm:flex-row justify-between mb-12 max-w-screen-lg mx-auto ">
      <ul className="flex flex-col sm:flex-row text-base font-sans space-y-2 sm:space-y-0">
        <li className="sm:mr-2">
          <a
            href="mailto:hello@prateeksolanki.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link-style"
          >
            hello@prateeksolanki.com
          </a>
        </li>
        <li className=" hidden sm:mr-2 sm:block">—</li>
        <li className="sm:mr-2">
          <a
            href="https://www.linkedin.com/in/prateek-solanki-78313218/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-style"
          >
            linkedin
          </a>
        </li>
        <li className="hidden sm:mr-2 sm:block">—</li>
        <li>
          <a
            href="https://github.com/quicksilversurfer"
            target="_blank"
            rel="noopener noreferrer"
            className="link-style"
          >
            github
          </a>
        </li>
      </ul>
      <p className="font-sans mt-4 sm:mt-0 text-base flex text-base-600">
        built with
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="24"
          viewBox="0 0 24 24"
          className="mx-1 fill-red-light dark:fill-red"
        >
          <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
        </svg>
        /
        <Link className="link-style ml-1" href="/colophon">
          colophon
        </Link>
      </p>
    </div>
  );
}
