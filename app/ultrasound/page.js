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
import usabilityImg from "@/public/images/ultrasound/usability.png";
import preferenceImg from "@/public/images/ultrasound/preference.png";
import shuiCover from "@/public/images/shui/shui_cover.jpeg";
import vaccellentCover from "@/public/images/tva/vaccellent_cover.jpg";
import img_1 from "@/public/images/ultrasound/1_Ultrasound.png";
import img_2 from "@/public/images/ultrasound/2_Ultrasound.png";
import img_3 from "@/public/images/ultrasound/3_Ultrasound.png";
import img_4 from "@/public/images/ultrasound/4_Ultrasound.png";

const ultrasoundDetails = [
  {
    title: "work experience",
    description: "siemens healthineers / nov 2015 to oct 2018",
  },
  {
    title: "collaborators",
    description: "siemens healthineers design team",
  },
  {
    title: "contribution",
    description:
      "project management, user research, interaction design, visual design, usability testing",
  },
];

export default function Ultrasound() {
  return (
    <>
      <Cover
        heading="Ultrasound"
        description="end to end design execution for a new ultrasound system"
      />
      <Section projectInfo={ultrasoundDetails}>
        <SectionHighlight
          kicker="Project Overview"
          heading="Designing Next-Generation Ultrasound Systems"
          subHeading="My contributions to the user-centered design of the ACUSON Sequoia and ACUSON Origin ultrasound systems led to exceptional results, with 82% user preference for the Sequoia and a best-in-class System Usability Score of 86."
        >
          <Block title="Role & contributions">
            <p>
              <a
                href="https://www.siemens-healthineers.com/en-us/ultrasound/new-era-ultrasound/acuson-sequoia"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                ACUSON Sequoia
              </a>{" "}
              and the{" "}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                ACUSON Origin
              </a>{" "}
              are the next generation Ultrasound product platforms for Siemens
              Healthineers. As part of a small, dedicated UX team of four
              designers, I played a crucial role in defining the user experience
              and interaction design of both the ACUSON Sequoia and ACUSON
              Origin ultrasound platforms. Working alongside{" "}
              <a
                href="https://www.linkedin.com/in/eminsinani/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                Emin Sinani
              </a>
              ,{" "}
              <a
                href="https://www.linkedin.com/in/xinranfan/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                Xinran Fan
              </a>
              ,{" "}
              <a
                href="https://www.linkedin.com/in/saishwarya06/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                Aishwarya Suresh
              </a>
              , and a pool of interns our team collaborated closely with
              ultrasound human factor engineers, product managers, and clinical
              teams to ensure a holistic and user-centered approach throughout
              the design process.
            </p>
            <p>
              Our goal was to address prevalent challenges in ultrasound imaging
              by focusing on ease of use, learnability, and standardization –
              factors critical to improving efficiency and effectiveness for
              healthcare professionals, especially considering the{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/38534218/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                growing shortage of sonographers{" "}
              </a>
              and trained ultrasound technicians in the field. This shortage has
              placed increased pressure on healthcare facilities, often
              requiring them to hire freelance sonographers who need to quickly
              adapt to different ultrasound systems. Therefore, creating
              intuitive and standardized interfaces was essential to
              facilitating efficient workflows and reducing the learning curve
              for both new and experienced users.
            </p>
            <p>
              Our user-centered process, incorporating extensive user research,
              iterative prototyping, and usability testing, ultimately led to
              intuitive interfaces that were favored by{" "}
              <a
                href="https://cdn0.scrvt.com/39b415fb07de4d9656c7b516d8e2d907/a9f2e35938123fba/71722cb4bb86/Siemens-White-Paper_FINAL-HOOD05162003107116--1-.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                82% of study participants.{" "}
              </a>
              The ACUSON Sequoia achieved a best-in-class System Usability Score
              (SUS) of 86, exceeding industry standards and demonstrating the
              success of our design approach. The system was also recognized for
              its design excellence, receiving the prestigious{" "}
              <a
                href="https://www.red-dot.org/project/acuson-sequoia-38968"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                Red Dot Design Award
              </a>{" "}
              in 2019.
            </p>
          </Block>
          <Blockquote>
            The success of the ACUSON Sequoia and ACUSON Origin is a testament
            to the power of user-centered design and the collaborative spirit of
            the team. Witnessing healthcare professionals embrace these systems
            with such enthusiasm was truly rewarding.
          </Blockquote>
          <ImgContainer>
            <div className="col-span-6">
              <Media
                src={preferenceImg}
                alt="Sonographers strongly preferred the Acuson Sequoia over the other devices - 82% of the participants preferred the Sequoia"
              ></Media>
            </div>
            <div className="col-span-6">
              <Media
                src={usabilityImg}
                alt="Sonographers strongly preferred the Acuson Sequoia over the other devices - 82% of the participants preferred the Sequoia"
              ></Media>
            </div>
            <span className="col-span-12 text-sm text-base-600 dark:text-base-500 font-sans text-left mt-2">
              Comparative Usability Study Results | Image Credit: Siemens
              Healthineers / Macadamian Technologies
            </span>
          </ImgContainer>

          <Block title="ACUSON Sequoia: Role & contributions">
            <p>
              My involvement in the ACUSON Sequoia project began in the early
              research and concept exploration phase. During this time, we
              explored a wide range of design concepts, from incremental
              improvements to radical redesigns of the user interface.
            </p>
            <p>
              I contributed to building functional prototypes using Flash,
              Processing, and Java, which allowed us to test key concepts with
              sonographers and gather valuable feedback on their preferences.
              These early prototypes explored ideas such as reducing the number
              of keys on the control panel, introducing a trackpad instead of a
              trackball, and reorganizing the information architecture based on
              user mental models. This iterative process of prototyping and user
              testing was instrumental in shaping the design direction of the
              Sequoia platform.
            </p>
            <p>
              Additionally, I tackled the complex challenge of analyzing the
              existing information architecture and defining intuitive methods
              for adjusting system controls, ensuring a seamless and efficient
              user experience.
            </p>
            <p>
              Later in the project, I played a key role in maintaining
              harmonization between the Sequoia platform and the specialized
              Cardiology device (ACUSON Origin), aligning workflows,
              terminology, and visual design elements across both systems.
            </p>
          </Block>
          <ImgContainer>
            <div className="col-span-6">
              <Media
                src={img_1}
                alt="Acuson Sequoia Ultrasound Machine"
              ></Media>
            </div>
            <div className="col-span-6">
              <Media
                src={img_2}
                alt="Customers using the Acuson Sequoia Ultrasound Machine"
              ></Media>
            </div>
            <span className="col-span-12 text-sm text-base-600 dark:text-base-500 font-sans text-left mt-2">
              ACUSON Sequioa Ultrasound System. Launched in 2018 | Image Credit:
              Siemens Healthineers
            </span>
          </ImgContainer>
          <Block title="ACUSON Origin: Role & contributions">
            <p>
              As the project lead for the ACUSON Origin alongside Aishwarya
              Suresh, I spearheaded the design and development of this
              cardiology-specific ultrasound system, playing a pivotal role in
              its transformation from concept to reality. My responsibilities
              spanned the entire project lifecycle, from planning and executing
              an extensive international user research initiative to leading the
              iterative design and refinement of the user interface.
            </p>
            <p>
              The user research, conducted across the USA, Germany, and China,
              involved in-depth interviews, evaluations, and site visits with
              over 40 cardiologists and sonographers. This provided us with
              invaluable insights into real-world cardiology workflows, pain
              points, and unmet needs.
            </p>
            <p>
              A key outcome of this research was the identification of potential
              usability issues with the initially proposed trackpad input
              device. Through rigorous testing and data analysis, we were able
              to demonstrate the superiority of the traditional trackball for
              precise measurements and user comfort, leading to a pivotal
              decision that impacted the entire Sequoia platform.
            </p>
            <p>
              Beyond user research, I led the iterative definition of the
              control panel, touch screen, and monitor UI through
              cross-functional workshops, formative evaluations, and continuous
              refinement based on user feedback. This collaborative process
              ensured that the final design was not only intuitive and efficient
              but also tailored to the specific workflows and preferences of
              cardiologists worldwide. The successful launch of the ACUSON
              Origin, met with praise from the medical community, is a testament
              to the impact of this user-centered design approach.
            </p>
          </Block>
          <ImgContainer>
            <div className="col-span-6">
              <Media src={img_3} alt="Acuson Origin Ultrasound Machine"></Media>
            </div>
            <div className="col-span-6">
              <Media
                src={img_4}
                alt="Customers using the Acuson Origin Ultrasound Machine"
              ></Media>
            </div>
            <span className="col-span-12 text-sm text-base-600 dark:text-base-500 font-sans text-left mt-2">
              ACUSON Origin Cardiology Ultrasound System. Launched in 2022 |
              Image Credit: Siemens Healthineers
            </span>
          </ImgContainer>
        </SectionHighlight>
        <ProtectedInput />
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
            title="vaccellent"
            description="tools to manage, and coordinate the distribution and utilization of COVID-19 vaccines"
            image={vaccellentCover}
            link="/vaccellent"
          />
        </div>
      </Section>
    </>
  );
}
