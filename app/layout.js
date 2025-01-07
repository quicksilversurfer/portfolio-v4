import localfont from "next/font/local";
import { EB_Garamond } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { CSPostHogProvider } from "./providers";

import { Providers } from "./providers";
import Header from "../components/Header";
import Section from "../components/Section";

export const metadata = {
  metadataBase: new URL("https://prateeksolanki.com/"),
  title: "Prateek Solanki | Interaction Designer",
  description:
    "Interaction design portfolio of Prateek Solanki, Sr. UX Designer at AWS.",
  keywords:
    "Prateek Solanki, Interaction Designer, Portfolio, Product Designer, UX Designer, Healthcare design, Siemens Healthineers, AWS, UI/UX, Design Projects, Databases",
  referrer: "origin-when-cross-origin",
  openGraph: {
    images: "/opengraph-image.png",
  },
};

const crimson = localfont({
  src: "../fonts/crimsonpro-variable.woff2",
  display: "swap",
  variable: "--font-crimson",
});

const publicsans = localfont({
  src: "../fonts/publicsans-variable.woff2",
  display: "swap",
  variable: "--font-public",
});

const sentient = localfont({
  src: "../fonts/sentient-variable.woff2",
  display: "swap",
  variable: "--font-sentient",
});

const garamond = EB_Garamond({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-garamond",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <CSPostHogProvider>
        <body
          className={clsx(
            "h-full w-full antialiased bg-base-paper dark:bg-base-black",
            crimson.variable,
            publicsans.variable,
            garamond.variable,
            sentient.variable
          )}
        >
          <Providers>
            <Header />
            <main className="flex flex-col items-center w-full">
              {children}
              <Section isFooter header="connect" />
            </main>
          </Providers>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
