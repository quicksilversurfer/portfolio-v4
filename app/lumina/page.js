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

//images
import ultrasoundCover from "@/public/images/ultrasound/ultrasound_home_cover.png";
import shuiCover from "@/public/images/shui/shui_home_cover.png";
import designBreakfastTitle from "@/public/images/aws/lumina/design_breakfast_title.png";
import designBreakfastSlide from "@/public/images/aws/lumina/design_breakfast_slide.png";

const luminaDetails = [
  {
    title: "work experience",
    description: "aws / jun 2023 to present",
  },
  {
    title: "collaborators",
    description: "chike orjih, ray festa",
  },
  {
    title: "contribution",
    description: "lead designer, design technologist",
  },
];

export default function LuminaDetails() {
  return (
    <>
      <Cover
        heading="Lumina"
        description="ai-powered customer insights for data-driven product decisions"
      />
      <Section projectInfo={luminaDetails}>
        <SectionHighlight
          kicker="Project Overview"
          heading="Lumina: Transforming Customer Feedback into Product Insights"
          subHeading="Designed and built an AI-powered analytics platform that reduced feedback processing time from weeks to minutes while enabling data-driven product decisions across AWS database services."
        >
          <Block title="The challenge">
            <p>
              AWS database services support millions of customers running
              mission-critical workloads. Despite collecting thousands of
              feedback items through the AWS Console, teams struggled to extract
              meaningful patterns and insights from this wealth of information,
              creating a growing disconnect between customer needs and product
              decisions.
            </p>
            <p>
              The challenge went beyond just volume. The technical complexity of
              database services made it difficult for designers and product
              teams to understand feedback without deep domain expertise. Teams
              faced a massive backlog of customer comments spanning different
              stages of product maturity, with no clear way to prioritize which
              issues to address first.
            </p>
            <p>
              When product teams are focused on technical implementation
              details, it's easy to lose sight of the actual human problems
              customers are trying to solve. We needed a way to transform raw
              feedback into actionable insights that could drive
              customer-centered decisions at scale.
            </p>
          </Block>

          <Block title="My role & contribution">
            <p>
              As the designer and developer of Lumina, I led this project from
              concept to implementation:
            </p>
            <ul className="list-outside pl-4 space-y-4">
              <li className="list-disc pl-2">
                <b className="font-semibold">Concept and research:</b>{" "}
                Identified the opportunity to leverage AI for feedback analysis
                through my firsthand experience with existing feedback processes
                and discussions with my manager about improving our design
                workflow through AI
              </li>
              <li className="list-disc pl-2">
                <b className="font-semibold">Design and architecture:</b>{" "}
                Created the multi-dimensional classification system and designed
                both the backend processing pipeline and frontend visualization
              </li>
              <li className="list-disc pl-2">
                <b className="font-semibold">Technical implementation:</b> Built
                the entire system using AWS serverless technologies and AI
                services, from initial prototype to production solution
              </li>
              <li className="list-disc pl-2">
                <b className="font-semibold">Adoption and iteration:</b> Led
                adoption across AWS Databases and Analytics teams and evolved
                the system based on ongoing feedback
              </li>
            </ul>
          </Block>

          <Block title="Solution & impact">
            <p>
              Lumina transformed scattered customer feedback into structured
              insights through a multi-dimensional AI classification system that
              analyzes intent, technical areas, product features, and user
              journey stages simultaneously.
            </p>
            <p>
              The system processes thousands of feedback items in minutes
              instead of weeks, enabling teams to analyze 100% of customer
              feedback rather than the previous 15-20% sample. This
              comprehensive view provides a foundation for more informed product
              decisions.
            </p>
            <p>
              While direct attribution is challenging, Lumina has contributed to
              numerous product improvements by highlighting patterns in customer
              feedback and providing evidence to support design decisions. Its
              most significant impact has been changing how teams approach
              customer feedback—transforming conversations from "Do we have time
              to read feedback?" to "What are we learning from our customers?"
            </p>
          </Block>
          <ImgContainer fullWidth>
            <div className="col-span-6">
              <Media
                src={designBreakfastTitle}
                alt="Lumina presentation slide showing the title of the project"
              ></Media>
            </div>
            <div className="col-span-6">
              <Media
                src={designBreakfastSlide}
                alt="Lumina presentation slide showing the importance of understanding customer feedback"
              ></Media>
            </div>
            <span className="col-span-12 text-sm text-base-600 dark:text-base-500 font-sans text-left mt-2">
              Presentation slides from a Design Breakfast session in 2025
              showcasing Lumina's impact. I also presented this project at
              Conflux 2025, an Amazon wide design conference, as part of the
              Deep Dive into AI sessions.
            </span>
          </ImgContainer>

          <Blockquote>
            The heart of design is connecting humans to other humans. As
            products grow more complex and scale to millions of users,
            maintaining that connection becomes both more challenging and more
            crucial. Lumina shows how thoughtfully applied technology can help
            us stay connected to the people we serve.
          </Blockquote>
        </SectionHighlight>
        <ProtectedInput />
      </Section>
      <Section header="other projects" constrain>
        <div className="grid grid-cols-2 gap-6">
          <ProjectCard
            title="shui"
            description="developing design systems for user interface consistency and increased internal productivity"
            image={shuiCover}
            link="/shui"
          />
          <ProjectCard
            title="ultrasound"
            description="End to end design execution for a complex medical device"
            image={ultrasoundCover}
            link="/ultrasound"
          />
        </div>
      </Section>
    </>
  );
}
