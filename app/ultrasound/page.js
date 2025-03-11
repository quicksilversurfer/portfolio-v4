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
          heading="Transforming Complex Medical Devices into Intuitive Tools"
          subHeading="Leading the design of next-generation ultrasound systems that achieved 82% user preference and a system usability score of 86—making sophisticated medical technology accessible through thoughtful design."
        >
          <Block title="Role & contributions">
            <p>
              Medical imaging represents one of the most complex intersections
              of technology and human expertise. Ultrasound systems must balance
              powerful capabilities with usability in high-pressure environments
              where every moment matters. The{" "}
              <a
                href="https://www.siemens-healthineers.com/en-us/ultrasound/new-era-ultrasound/acuson-sequoia"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                ACUSON Sequoia
              </a>{" "}
              and{" "}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                ACUSON Origin
              </a>{" "}
              projects presented an opportunity to reimagine how healthcare
              professionals interact with these essential diagnostic tools.
            </p>
            <p>
              As part of a focused four-person UX team, I collaborated with{" "}
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
              </a>{" "}
              to address a growing challenge in healthcare: the{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/38534218/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                increasing shortage of specialized sonographers{" "}
              </a>
              . This staffing reality meant many facilities relied on traveling
              technicians who needed to quickly adapt to different
              systems—making intuitive interfaces and standardized interactions
              essential.
            </p>
            <p>
              Our opportunity was to reimagine these complex devices as
              intuitive tools that would feel natural to both experienced users
              and those new to the platform. Working closely with ultrasound
              engineers, clinical specialists, and human factors experts, we set
              out to create interfaces that would reduce cognitive load and help
              professionals focus on what matters most—their patients.
            </p>
          </Block>
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
          <Block title="ACUSON Sequoia: Establishing foundations">
            <p>
              My journey with the Sequoia platform began during early concept
              exploration, where we balanced ambitious reinvention with the
              realities of established clinical workflows. Rather than assuming
              we knew what users needed, we built functional prototypes in
              Flash, Processing, and Java to test different interaction models
              with actual sonographers.
            </p>
            <p>
              These prototypes explored foundational questions: Could we reduce
              the complexity of the control panel without sacrificing
              functionality? Would a trackpad provide better usability than the
              traditional trackball? How might we reorganize the information
              architecture to better match users' mental models?
            </p>
            <p>
              This early exploration phase revealed important insights about how
              sonographers think about their work and interact with ultrasound
              systems. By mapping the existing system controls, modes, and
              categories, I created a framework that would guide the
              reorganization of features into more intuitive groupings—making
              the system feel like a natural extension of the user's intent
              rather than a complex machine.
            </p>
            <p>
              The iterative prototyping and testing approach continued
              throughout development, allowing us to refine the interface based
              on continuous user feedback. The result was a system that felt
              both familiar and improved—maintaining critical workflows while
              reducing unnecessary complexity.
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
          <Blockquote>
            When designing medical devices, the stakes are uniquely high—these
            are tools that professionals rely on to make critical decisions.
            Finding clarity in this complexity means creating systems that fade
            into the background, allowing healthcare providers to focus entirely
            on patient care.
          </Blockquote>
          <Block title="ACUSON Origin: Leading through research">
            <p>
              As project lead for the ACUSON Origin alongside Aishwarya Suresh,
              I faced the challenge of creating a specialized cardiology
              ultrasound system that would integrate seamlessly into established
              clinical workflows while introducing meaningful improvements. This
              required deep immersion in the world of cardiac imaging—a domain
              with its own language, procedures, and expectations.
            </p>
            <p>
              To build this understanding, I designed and led comprehensive
              research across three countries, gathering insights from over 40
              cardiologists and sonographers. These studies went beyond
              superficial preference testing, using methods like contextual
              inquiry, workflow analysis, and controlled experiments to reveal
              the nuances of how cardiac imaging professionals work.
            </p>
            <p>
              A pivotal moment came when our research revealed a significant
              usability issue with the proposed trackpad input device. By
              designing a controlled study based on Fitts' Law principles, we
              collected objective data showing that the traditional trackball
              provided significantly better precision for critical measurement
              tasks. This evidence-based approach led to a fundamental design
              decision that ultimately affected the entire platform.
            </p>
            <p>
              The development process continued through iterative definition of
              the control panel, touchscreen interface, and monitor UI. I
              facilitated cross-functional workshops that brought together
              clinical, engineering, and design perspectives—creating alignment
              around a shared vision for the product and the overall Sequioa
              platform. This collaborative approach ensured that the final
              system not only worked effectively but genuinely enhanced the
              workflow of cardiac imaging professionals.
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
          <Block title="Results & impact">
            <p>
              The true measure of our work came when independent evaluations
              showed that{" "}
              <a
                href="https://cdn0.scrvt.com/39b415fb07de4d9656c7b516d8e2d907/a9f2e35938123fba/71722cb4bb86/Siemens-White-Paper_FINAL-HOOD05162003107116--1-.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                82% of study participants{" "}
              </a>{" "}
              preferred the ACUSON systems over competing devices. The Sequoia
              achieved an exceptional System Usability Score of 86—well above
              industry standards—and earned the{" "}
              <a
                href="https://www.red-dot.org/project/acuson-sequoia-38968"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                Red Dot Design Award
              </a>{" "}
              for excellence in Industrial Design.
            </p>
            <p>
              Beyond the metrics, seeing healthcare professionals interact with
              these systems revealed the real impact of our work. Tasks that
              once required navigating complex menus became intuitive. Features
              that had been hidden became discoverable. Most importantly, the
              technology receded into the background, allowing clinicians to
              focus on what truly matters—providing excellent patient care.
            </p>
          </Block>
          <Blockquote>
            The most elegant design solutions don't draw attention to
            themselves—they simply make complex tasks feel natural. Watching
            sonographers intuitively use systems we designed, without requiring
            instruction or explanation, was the true measure of our success.
          </Blockquote>
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
