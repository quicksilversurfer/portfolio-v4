/* eslint-disable react/no-unescaped-entities */
import Cover from "@/components/Cover";
import Section from "@/components/Section";
import Block from "@/components/Block";

export default function Colophon() {
  return (
    <>
      <Cover
        heading="colophon"
        description="bits & pieces that make up this site"
      />
      <Section>
        <Block>
          <p>
            Building my website and portfolio was a turning point in my journey
            as a designer. It's what got me my start in this field, and has been
            a constant source of learning and growth. I believe it's important
            understand the medium I design for most often and learn how to build
            with it. Code is an ultimately an interface and despite its rather
            steep learning curve and complex nature, offers remarkable
            flexibility and creative potential.
          </p>
          <p>
            Over the past few years, the web has grown in capability and
            complexity. Although there's more to learn and consider now, I am
            reassured to see a trend towards making these technologies more
            approachable to a wider audience. Overall the web is evolving to be
            faster, more accessible, and user-friendly for both consumers and
            producers. Updating my portfolio this time around has been notably
            more enjoyable and fulfilling experience than before.
          </p>
          <p>
            Although overengineered for what it's supposed to be, I do deeply
            enjoy the opportunity to experiment with frameworks and libraries
            that offer such great possibilities. It's also a welcome diversion
            into logical, systematic problem solving - a brief respite from the
            chaotic, abstract nature of design work. And it's a great little
            playground that allows me to learn, experiment, explore and create.
          </p>
        </Block>
        <Block title="technologies">
          <p>
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-style"
            >
              Next.js
            </a>
            : a React framework that allows for server-side rendering and
            pre-rendering of static pages. It's a great tool for building
            performant, modern web applications.
          </p>
          <p>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-style"
            >
              Tailwind CSS
            </a>
            : a utility-first CSS framework that allows for rapid development
            and prototyping.
          </p>
          <p>
            <a
              href="https://www.framer.com/motion/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-style"
            >
              Framer Motion
            </a>
            : a motion library for React.
          </p>
          <p>
            <a
              href="https://ptsjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-style"
            >
              Pts.js
            </a>
            : a creative coding library made by{" "}
            <a href="http://williamngan.com/" className="link-style">
              William Ngan
            </a>
            .
          </p>
        </Block>
        <Block title="design">
          <p>
            <a
              href="https://www.fontshare.com/fonts/literata"
              target="_blank"
              rel="noopener noreferrer"
              className="link-style"
            >
              Literata
            </a>
            : open source serif developed by{" "}
            <a href="https://www.type-together.com/" className="link-style">
              TypeTogether
            </a>{" "}
            foundry.
          </p>
          <p>
            <a
              href="https://www.fontshare.com/fonts/public-sans"
              target="_blank"
              rel="noopener noreferrer"
              className="link-style"
            >
              Public Sans
            </a>
            : open source sans-serif developed for{" "}
            <a href="https://designsystem.digital.gov/" className="link-style">
              USWDS
            </a>
            .
          </p>
          <p>
            <a
              href="https://stephango.com/flexoki"
              target="_blank"
              rel="noopener noreferrer"
              className="link-style"
            >
              Flexoki
            </a>
            : color scheme by{" "}
            <a href="https://stephango.com/" className="link-style">
              Steph Ango
            </a>
            .
          </p>
        </Block>
      </Section>
    </>
  );
}
