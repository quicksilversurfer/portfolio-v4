/* eslint-disable react/no-unescaped-entities */
import Cover from "@/components/Cover";
import Section from "@/components/Section";
import Block from "@/components/Block";
import Media from "@/components/Media";
import Blockquote from "@/components/Blockquote";
import ProjectCard from "@/components/ProjectCard";
import SectionHighlight from "@/components/SectionHighlight";
import ImgContainer from "@/components/ImgContainer";
import ProtectedContent from "@/components/ProtectedContent";

//images
import vaccelentOpsImg from "@/public/images/tva/vaccellent_operations.png";
import vaccelentDashboardImg from "@/public/images/tva/vaccellent_dashboard.png";
import ultrasoundCover from "@/public/images/ultrasound/ultrasound_cover.jpg";
import shuiCover from "@/public/images/shui/shui_cover.jpeg";

const vaccellentDetails = [
  {
    title: "work experience",
    description: "siemens healthineers / nov 2020 to apr 2021",
  },
  {
    title: "collaborators",
    description: " siemens healthineers design team",
  },
  {
    title: "contribution",
    description: "interaction design, visual design",
  },
];

export default function Vaccellent() {
  return (
    <>
      <Cover
        heading="Vaccellent"
        description="tools to manage, and coordinate the distribution and utilization of COVID-19 vaccines"
      />
      <Section projectInfo={vaccellentDetails}>
        <SectionHighlight
          kicker="Project Overview"
          heading="Enabling Efficient COVID-19 Vaccine Distribution"
          subHeading="My contributions to the Vaccellent project involved envisioning and designing a suite of digital tools to support efficient COVID-19 vaccine distribution and administration, including patient scheduling, inventory management, and data-driven decision-making for public health authorities."
        >
          <Block title="Role & contributions">
            <p>
              During the COVID-19 pandemic, the urgent need to vaccinate a
              global population presented significant logistical challenges. To
              address this, a small cross-functional team within Siemens
              Healthineers embarked on developing Vaccellent, a novel product
              aimed at digitalizing the vaccine supply chain.
            </p>
            <p>
              I was one of two designers, alongside{" "}
              <a
                href="https://www.linkedin.com/in/joanna-pruchnicka-9b903173/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                Joanna Pruchnicka
              </a>{" "}
              , supporting the team in envisioning and crafting a clear product
              definition. Through journey maps and collaborative workshops, we
              identified key user needs and pain points within the vaccine
              distribution process. I then translated these insights into
              tangible mockups and prototypes, which helped drive decisions
              regarding feature prioritization and scope for the development
              team.
            </p>
          </Block>
          <Block title="Addressing Challenges in Vaccine Distribution">
            <p>
              Vaccellent addressed several critical challenges faced by
              stakeholders involved in the vaccination effort:
            </p>
            <ul className="list-outside pl-4 space-y-4">
              <li className="list-disc pl-2">
                <b className="font-semibold">
                  Managing Vaccine Distribution Effectively:
                </b>{" "}
                Empowering public health authorities to make data-driven
                decisions through adaptive AI-based analytics, optimizing
                vaccine allocation and distribution.
              </li>
              <li className="list-disc pl-2">
                <b className="font-semibold">
                  Operating Vaccination Procedures Efficiently:
                </b>{" "}
                Streamlining patient scheduling and simplifying vaccine
                inventory management to optimize clinical workflows and reduce
                administrative burden.
              </li>
              <li className="list-disc pl-2">
                <b className="font-semibold">
                  Coordinating Doses, Dates, Patients, and Places:
                </b>{" "}
                Seamlessly bringing together real-time data related to
                vaccination operations with high transparency, ensuring
                efficient coordination between various stakeholders.
              </li>
            </ul>
          </Block>
          <Block title="Vaccellent Operations">
            <p>
              Recognizing the strain on regional health facilities, we developed
              Vaccellent Operations – a suite of tools including a patient
              scheduling app and an operations dashboard for healthcare
              providers.
            </p>
            <p>
              The scheduling app offered a simple and intuitive step-by-step
              registration flow, prioritizing accessibility and ease of use for
              patients.
            </p>
            <p>
              For healthcare facilities, the operations dashboard provided
              essential information regarding vaccination appointments,
              inventory levels, and patient records, allowing for efficient
              management of vaccination procedures.
            </p>
          </Block>
          <ImgContainer>
            <div className="col-span-12">
              <Media
                src={vaccelentOpsImg}
                alt="Vaccelent operations and mobile app"
                caption=""
              />
            </div>
          </ImgContainer>

          <Block title="Vaccellent Dashboard: Data-Driven Decision Making">
            <p>
              A unique aspect of Vaccellent we were exploring was the ability to
              optimize vaccine distribution using AI-based modeling and
              simulations. This would provide public health authorities with
              data-driven insights into the potential impact of different
              distribution scenarios on infection rates and other key metrics,
              enabling them to make informed decisions and allocate resources
              effectively.
            </p>
            <p>
              I worked closely with the product management and engineering teams
              to translate the complex capabilities of the AI algorithms into
              clear and intuitive visualizations and workflows within the
              Vaccellent Dashboard.
            </p>
          </Block>
          <ImgContainer>
            <div className="col-span-12">
              <Media
                src={vaccelentDashboardImg}
                alt="Vaccellent dashboard user interface"
                caption=""
              />
            </div>
          </ImgContainer>

          <Block title="Project Outcome & Impact">
            <p>
              Despite facing challenges such as constrained timelines, limited
              resources, and a rapidly evolving environment, the team
              successfully developed a compelling solution with Vaccellent. In
              the limited release of Vaccellent Operations, the product received
              positive feedback from users, highlighting its intuitive design
              and efficiency in managing vaccination processes.
            </p>
            <p>
              Unfortunately because of the evolving operational and political
              climate around vaccines, Vaccellent has been discontinued. But
              parts of the system we developed continue to be in use internally
              to support vaccination efforts in Siemens Healthineers and other
              partner companies. Other systems are being reshaped to broaden
              their area of use and will likely find life in new settings.
            </p>
            <p>
              In the limited time that Vaccellent was available, it received
              favorable reviews. A partner working with early versions of the
              Vaccellent system in the Vaccination Center at Erlangen, Germany
              had the following to say -
            </p>
          </Block>
          <Blockquote>
            "Vaccellent is intuitive to use. I can immediately see what I’m
            looking for. This saves time. I found that Vaccellent is easy to
            handle for different users – everybody intuitively knew what to do
            next without special training."
            <p className="text-lg font-sans mt-8">
              Partner at the vaccination center in Erlangen, Germany
            </p>
          </Blockquote>
        </SectionHighlight>
        <ProtectedContent soon />
      </Section>
      <Section header="other projects">
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
