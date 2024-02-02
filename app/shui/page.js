/* eslint-disable react/no-unescaped-entities */
import Cover from "@/components/Cover";
import Section from "@/components/Section";
import Block from "@/components/Block";
import Media from "@/components/Media";
import Blockquote from "@/components/Blockquote";
import ProjectCard from "@/components/ProjectCard";

// images
import useCases from "@/public/images/shui/shui_use_cases.png";
import ultrasoundCover from "@/public/images/ultrasound/ultrasound_cover.jpg";
import vaccellentCover from "@/public/images/tva/vaccellent_cover.jpg";

const shuiDetails = [
  {
    title: "work experience",
    description: "siemens healthineers / nov 2017 to nov 2022",
  },
  {
    title: "collaborators",
    description: "siemens healthineers design team, ideo",
  },
  {
    title: "contribution",
    description: "interaction design, visual design, front-end development",
  },
];

export default function Shui() {
  return (
    <>
      <Cover
        heading="Shui"
        description="developing design systems for user interface consistency and increased internal productivity"
      />
      <Section projectInfo={shuiDetails}>
        <Block title="summary">
          <p>
            Shui® is a design system that aims to harmonize the design language
            for the vast Siemens Healthineers product portfolio.
          </p>
          <p>
            The healthcare division forms one part of the giant Siemens
            conglomerate, which over years of growth and acquisitions evolved
            into something that referenced Siemens, but did not quite hold
            it&rsquo;s own identity. Alongside other issues like no central body
            overseeing the portfolio, the product design language lacked visual
            and behavioral consistency.
          </p>
          <p>
            In 2017, when Siemens Healthineers was spun off as a separate
            entity, the design org was presented with an opportunity to re-align
            and build a cohesive experience around the new brand.
          </p>
          <p>
            I am part of a small team that is developing a design system that
            aims to raise the quality of user experience, reduce design and
            engineering time, and creates a common foundation for new and
            existing products.
          </p>
          <p>
            In the past couple of years, we have been able to build a robust
            design language, that has been adopted by{" "}
            <a
              href="https://www.siemens-healthineers.com/en-us/ultrasound/new-era-ultrasound/acuson-redwood"
              target="_blank"
              rel="noopener noreferrer"
              className="link-style"
            >
              several
            </a>{" "}
            <a
              href="https://www.siemens-healthineers.com/medical-imaging-it/advanced-visualization-solutions/syngovia-viewandgo"
              target="_blank"
              rel="noopener noreferrer"
              className="link-style"
            >
              flagship
            </a>{" "}
            <a
              href="https://www.siemens-healthineers.com/en-us/radiography/digital-x-ray/multix-impact-c"
              target="_blank"
              rel="noopener noreferrer"
              className="link-style"
            >
              products
            </a>{" "}
            and supported the development of many{" "}
            <a
              href="https://www.siemens-healthineers.com/en-us/digital-health-solutions/digital-solutions-overview/clinical-decision-support/ai-rad-companion"
              target="_blank"
              rel="noopener noreferrer"
              className="link-style"
            >
              new ones
            </a>
            .
          </p>
          <p>
            Externally, the design system has also won several awards -{" "}
            <a
              href="https://www.red-dot.org/project/shui-siemens-healthineers-user-interface-25965"
              target="_blank"
              rel="noopener noreferrer"
              className="link-style"
            >
              Red Dot
            </a>
            ,{" "}
            <a
              href="https://www.ux-design-awards.com/en/gewinner/shui"
              target="_blank"
              rel="noopener noreferrer"
              className="link-style"
            >
              UX Design Awards
            </a>
            ,{" "}
            <a
              href="https://www.german-design-award.com/en/the-winners/gallery/detail/23757-shui.html"
              target="_blank"
              rel="noopener noreferrer"
              className="link-style"
            >
              German Design Award
            </a>
            .
          </p>
        </Block>
        <Media
          src={useCases}
          alt="Broad range of Siemens Healthineers product classes showcasing the variety of use cases that the design system needed to solve for."
          caption="A broad range of product classes and use environments · Image Credit: Siemens Healthineers"
        />
        <Block title="challenges & learnings">
          <p>
            Below I describe some key challenges along the journey of developing
            Shui, outlining my role and learnings -
          </p>

          <h4 className="uppercase text-sm pt-4">
            managing scale & complexity
          </h4>
          <p>
            The size and complexity of a wide portfolio of products (see image
            above) presents an obvious challenge to standardization. We focused
            early on to build a solid foundation of core fundamentals and
            components, and introduced new guidelines only when they were
            scalable to multiple products.
          </p>
          <p>
            Although this might have slowed growth in the beginning, and
            aggravated some internal consumers, but carefully expanding scope
            has paid dividends for maintainability, and robustness today.
          </p>
        </Block>
        <Blockquote>
          Product teams give up a lot of control by handing over work to a
          design systems team. This trust needs to be earned through
          communication, building relationships and delivering high-quality
          work.
        </Blockquote>
        <Block>
          <h4 className="uppercase text-sm pt-4">workflow standardization</h4>
          <p>
            As we established visual design standards, we began to see overlap
            in how some high level workflows are similar across products. For
            example, workflows like patient management, are commonly used for
            starting and documenting patient exams and are quite similar across
            medical imaging devices (CT, MR, Ultrasound etc.).{" "}
          </p>
          <p>
            I've identified, and led the design of several of these communal
            patterns which standardize workflows across a number of products.
            The rationale being that customers can now easily transfer knowledge
            of operating one device to multiple other devices. Besides the
            advantages of consistency and a common way of operating these
            complex devices, it reduces training time, improves learnability and
            addresses the staff shortages rising across the healthcare industry.
          </p>
        </Block>
      </Section>
      <Section header="other projects">
        <div className="grid grid-cols-2 gap-6">
          <ProjectCard
            title="Ultrasound"
            description="End to end design execution for a complex medical device"
            image={ultrasoundCover}
            link="/ultrasound"
          />
          <ProjectCard
            title="Vaccellent"
            description="tools to manage, and coordinate the distribution and utilization of COVID-19 vaccines"
            image={vaccellentCover}
            link="/vaccellent"
          />
        </div>
      </Section>
    </>
  );
}
