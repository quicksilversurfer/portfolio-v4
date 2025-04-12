/* eslint-disable react/no-unescaped-entities */
import Cover from "@/components/Cover";
import Section from "@/components/Section";
import Block from "@/components/Block";
import Media from "@/components/Media";
import Blockquote from "@/components/Blockquote";
import ProjectCard from "@/components/ProjectCard";
import SectionHighlight from "@/components/SectionHighlight";
import ImgContainer from "@/components/ImgContainer";
import ProtectedInput from "@/components/ProtectedInput";

// images
import useCases from "@/public/images/shui/shui_use_cases.png";
import ultrasoundCover from "@/public/images/ultrasound/ultrasound_home_cover.png";
import vaccellentCover from "@/public/images/tva/vaccellent_home_cover.png";

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
        <SectionHighlight
          kicker="Project Overview"
          heading="Harmonizing Design Language for Siemens Healthineers"
          subHeading="My contributions to the development of the Shui design system helped establish a cohesive design language across the Siemens Healthineers product portfolio, improving user experience, reducing design and engineering time, and winning prestigious design awards."
        >
          <Block title="Role & contributions">
            <p>
              When Siemens Healthineers became a separate entity in 2017, the
              design organization faced the challenge of creating a unified
              identity and user experience across its vast and diverse product
              portfolio. Years of growth and acquisitions had resulted in
              inconsistencies in visual design and user interactions, hindering
              brand recognition and user efficiency.
            </p>
            <p>
              As a core member of a small, dedicated team, we were tasked with
              scaling and developing Shui, a comprehensive design system aimed
              at harmonizing the design language for Siemens Healthineers.
            </p>
            <p>
              Working collaboratively with designers, engineers, and product
              managers, we focused on establishing a robust and scalable
              foundation that could be adopted across new and existing products.
            </p>
            <p>
              This involved defining core principles, creating reusable
              components and patterns, and developing guidelines for visual
              design and interaction design. Additionally, I actively
              evangelized the design system within the company, showcasing its
              benefits and providing support to product teams during
              implementation to support seamless and progressive adoption into
              legacy product lines.
            </p>
          </Block>
          <ImgContainer fullWidth>
            <div className="col-span-12">
              <Media
                src={useCases}
                alt="Broad range of Siemens Healthineers product classes showcasing the variety of use cases that the design system needed to solve for."
                caption="A broad range of product classes and use environments · Image Credit: Siemens Healthineers"
              />
            </div>
          </ImgContainer>
          <Block title="Shui's impact & recognition">
            <p>
              In just a few years, Shui has become the go-to design system for
              developing{" "}
              <a
                href="https://www.siemens-healthineers.com/en-us/ultrasound/new-era-ultrasound/acuson-redwood"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                new products
              </a>{" "}
              at Siemens Healthineers and is gradually being adopted across{" "}
              <a
                href="https://www.siemens-healthineers.com/medical-imaging-it/advanced-visualization-solutions/syngovia-viewandgo"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                existing flagship
              </a>{" "}
              products.
            </p>
            <p>
              The design system's success is evident not only in its widespread
              adoption but also in the external recognition it has received,
              including prestigious awards such as the{" "}
              <a
                href="https://www.red-dot.org/project/shui-siemens-healthineers-user-interface-25965"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                Red Dot Design Award
              </a>{" "}
              ,{" "}
              <a
                href="https://www.ux-design-awards.com/en/gewinner/shui"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                UX Design Awards
              </a>
              , and{" "}
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
        </SectionHighlight>
        <ProtectedInput />
      </Section>

      <Section header="other projects" constrain>
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
