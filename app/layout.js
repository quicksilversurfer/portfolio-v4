import { Inter } from "next/font/google";
import localfont from "next/font/local";
import clsx from "clsx";
import "./globals.css";

import { Providers } from "./providers";
import Header from "../components/Header";
import Section from "../components/Section";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://prateeksolanki.com"),
  title: "Prateek Solanki | Interaction Designer",
  description:
    "Interaction design portfolio of Prateek Solanki, Sr. UX Designer at AWS.",
  keywords:
    "Prateek Solanki, Interaction Designer, Portfolio, Product Designer, UX Designer, Healthcare design, Siemens Healthineers, AWS, UI/UX, Portfolio, Design Projects, Databases",
  image: "/path-to-your-image.jpg", // A URL to an image that represents your page
  og: {
    title: "Prateek Solanki | Interaction Designer",
    description:
      "Interaction design portfolio of Prateek Solanki, Sr. UX Designer at AWS.",
    image: "/path-to-your-og-image.jpg", // Open Graph image URL
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    image: "/path-to-your-twitter-image.jpg", // Twitter card image URL
    creator: "@quicksilvrsrfr", // Your Twitter handle, if applicable
  },
  canonical: "https://prateeksolanki.com", // Your portfolio URL
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "h-full w-full antialiased bg-base-paper dark:bg-base-black",
          crimson.variable,
          publicsans.variable
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
    </html>
  );
}