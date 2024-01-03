/* eslint-disable react/no-unescaped-entities */
import Cover from "@/components/Cover";
import Section from "@/components/Section";
import Block from "@/components/Block";
import Media from "@/components/Media";
import Blockquote from "@/components/Blockquote";
import ProjectCard from "@/components/ProjectCard";

// images
import sequoiaImg from "@/public/images/ultrasound/sequoia.png";
import easiestImg from "@/public/images/ultrasound/easiest.png";
// import keyImg from "@/public/images/ultrasound/key_difference.png";
import leaderImg from "@/public/images/ultrasound/leader.png";
import learningImg from "@/public/images/ultrasound/learning_curve.png";
import preferenceImg from "@/public/images/ultrasound/preference.png";
import studyImg from "@/public/images/ultrasound/study_design.png";
import successImg from "@/public/images/ultrasound/success.png";
import sc2000Img from "@/public/images/ultrasound/acuson_sc2000.jpg";
import originImg from "@/public/images/ultrasound/acuson_origin.png";
// import ultrasoundImg from "@/public/images/ultrasound/ultrasound.png";
// import usabilityImg from "@/public/images/ultrasound/usability.png";
import shuiCover from "@/public/images/shui/shui_cover.jpeg";
import vaccellentCover from "@/public/images/tva/vaccellent_cover.jpg";

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
        <Block title="summary">
          <p>
            <a
              href="https://www.siemens-healthineers.com/en-us/ultrasound/new-era-ultrasound/acuson-sequoia"
              target="_blank"
              rel="noopener noreferrer"
              className="link-style"
            >
              Acuson Sequoia
            </a>{" "}
            and the{" "}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="link-style"
            >
              Acuson Origin
            </a>{" "}
            are the next generation Ultrasound product platforms for Siemens
            Healthineers. Built from the ground up with input from users around
            the world, it has been created with users and patients in mind.
          </p>
          <p>
            Addressing some of the prevalent challenges in Ultrasound imaging
            today: the imaging of different sized patients, ease of use,
            learnability and standardization of exams, the Acuson Sequoia was
            the most preferred Ultrasound device amongst it's main competitors
            as proven in an independent comparative usability study.
          </p>
          <p>
            I was part of a 4-person UX team supported by Ultrasoud Human Factor
            engineers, and Clinical teams, that spearheaded designs for Siemens'
            groundbreaking Acuson Sequoia and Acuson Origin platforms. Our
            user-centered process led to intuitive interfaces favored by{" "}
            <a
              href="https://cdn0.scrvt.com/39b415fb07de4d9656c7b516d8e2d907/a9f2e35938123fba/71722cb4bb86/Siemens-White-Paper_FINAL-HOOD05162003107116--1-.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="link-style"
            >
              82% of study participants
            </a>
            , with a best-in-class 86 System Usability Score. It was also
            conferred the{" "}
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
        <Media
          src={preferenceImg}
          alt="Sonographers strongly preferred the Acuson Sequoia over the other devices - 82% of the participants preferred the Sequoia"
          caption="Overvhelming preference for Acuson Sequoia · Image Credit: Siemens Healthineers / Macadamian Technologies"
        ></Media>
        <Block>
          <h4 className="uppercase text-sm pt-4">Acuson Sequoia</h4>
          <p>
            My contributions spanned competitive analysis, conceptual
            prototyping, information architecture, and summative testing for the
            Sequoia. I also was part of the FDA submission preparations to get
            the device ready for general availability in the market.
          </p>
          <Media
            src={sequoiaImg}
            alt="Acuson Sequoia Ultrasound Machine"
            caption="Acuson Sequoia · Image Credit: Siemens Healthineers"
          />
          <h4 className="uppercase text-sm pt-4">
            Acuson Origin for Cardiology
          </h4>
          <p>
            I managed the multi-year redesign of the{" "}
            <a
              href="https://www.siemens-healthineers.com/en-us/ultrasound/cardiovascular/acuson-sc2000-ultrasound-system"
              target="_blank"
              rel="noopener noreferrer"
              className="link-style"
            >
              SC2000 PRIME cardiology system
            </a>
            , managing timelines, budgeting, research, iterative workflow
            improvements, design documentation, and user evaluations with over
            60+ global participants
          </p>
          <p>
            My leadership of these highly complex projects exemplified strategic
            planning, stakeholder collaboration, user empathy, data-driven
            decisions, and unwavering commitment to user-centered design.
          </p>
          <Media
            src={originImg}
            alt="Acuson Origin Ultrasound Machine"
            caption="Acuson Origin · Image Credit: Siemens Healthineers"
          />
        </Block>

        <Block title="role">
          <p>
            My contributions were part of a team of four UX designers leading
            the charge in user experience and interaction design, working in
            synergy with Human Factors, Project Management, Clinical, and
            Engineering departments within the Ultrasound division.
          </p>
          <p>
            Our team, which operated as in-house consultants, worked on
            high-impact projects —such as comprehensive redesigns or
            strategically critical endeavors. Based in Princeton, we maintained
            a close partnership with the Seattle-based Ultrasound team, with
            regular travel for crucial meetings and user evaluations.
          </p>
          <p>
            I was deeply involved in the early phases of the Acuson Sequoia's
            development, led the SC2000 PRIME (Cardiology) redesign and
            eventually returned to leading the Acuson Sequoia development.
          </p>
        </Block>
        <Block title="background & brief">
          <p>
            Ultrasound devices are indispensable, they are the most commonly
            used non-invasive tools in modern medical imaging used by
            sonographers and physicians to diagnose a variety of conditions
            across different populations. As medical technology evolves, these
            machines have become more complex, featuring multifaceted control
            panels and touchscreens that demand skilled navigation and
            expertise.
          </p>
          <h4 className="uppercase text-sm pt-4">design challenge</h4>
          <p>
            There are specialization nuances within ultrasound imaging: General
            Imaging for body-wide diagnostics and Cardiology, with a focus on
            the heart's dynamic nature. Each comes with its unique imaging
            demands, shaping the specialized features and functions of these
            machines.
          </p>
          <p>
            As the industry moves toward standardization to simplify the use and
            learning curve of ultrasound systems—similar to the automotive
            industry's approach to interface design—manufacturers strive to
            produce more user-friendly, compact devices.
          </p>
        </Block>
        <Media
          src={learningImg}
          alt="Shortening the learning curve for sonographers - what employers of sonographers are looking for"
          caption="Challenges with Ultrasound devices · Image Credit: Siemens Healthineers / Macadamian Technologies"
        />
        <Block>
          <p>
            The challenge in designing these systems lies in striking a balance
            between familiarity and innovation. Given today's clinical
            environment with staff shortages and the reliance on freelance
            sonographers, the need for immediate, intuitive operation of various
            ultrasound machines is critical.
          </p>
          <h4 className="uppercase text-sm pt-4">
            elevating usability & workflow
          </h4>
          <p>
            My involvement began with the transition from the{" "}
            <a
              href="https://www.siemens-healthineers.com/en-us/ultrasound/general-imaging/acuson-s3000-ultrasound-machine"
              target="_blank"
              rel="noopener noreferrer"
              className="link-style"
            >
              S3000 HELX
            </a>{" "}
            to the Sequoia platform, where the aim was clear: to equal or
            surpass the workflow of competitors and significantly enhance the
            system's walk-up usability. The goal was to deliver an ultrasound
            interface that could be swiftly and efficiently mastered by any
            practitioner, whether in a stable staff position or stepping in as a
            freelancer.
          </p>
          <p>
            As the project evolved, I took on the leadership role in updating
            the SC2000 Cardiology platform as well, and migrating it to the
            Sequoia platform. The goal was to leapfrog the HELX platform and
            deliver an advanced, intuitive system that conformed with the
            overarching vision for user-friendliness, seamless workflow
            integration and improving walk-up usability.
          </p>
        </Block>
        <Blockquote>
          The goal was to deliver an ultrasound interface that could be swiftly
          and efficiently mastered by any practitioner, whether in a stable
          staff position or stepping in as a freelancer.
        </Blockquote>
        <Block title="sequoia foundations">
          <p>
            During my internship at Siemens Healthineers, I contributed to the
            early-stage research for the Sequoia ultrasound platform, evaluating
            design possibilities ranging from incremental changes to disruptive
            innovations. Our goal was enhancing walk-up usability through
            reduced control panel keys and exploring alternative input devices
            to improve cleanliness and differentiation—critical in sterile
            environments.
          </p>
          <h4 className="uppercase text-sm pt-4">prototype development</h4>
          <p>
            I helped create functioning prototypes of Ultrasound systems using
            various technologies to simulate real-world use. User evaluations
            confirmed a preference for streamlined controls but mixed feedback
            on the innovative input device. While some liked its
            forward-thinking approach, others worried about the learning curve.
            We ultimately proceeded with the new device, eager to capitalize on
            its benefits yet underestimating comprehensive validation needs.
          </p>
          <h4 className="uppercase text-sm pt-4">information architecture</h4>
          <p>
            A pivotal challenge was presenting the complex information
            architecture intuitively across modes. My analysis categorizing
            controls by type and availability was key to mapping them within the
            interaction framework. Engaging users and experts provided insights
            into mental models for an intuitive hierarchy.
          </p>
          <p>
            Balancing innovation and utility was crucial. These early user
            interface and input device decisions shaped ongoing Sequoia
            development, underscoring the importance of aligning bold vision
            with practical validation.
          </p>
        </Block>
        <Block title="cardiology platform redesign">
          <p>
            I had the privilege to lead the significant update to the Cardiology
            device within the Sequoia platform development. Tasked with a
            complex multi-year redesign, I planned strategies for transitioning
            primarily hardware controlled system into a modern, partially
            digital interface for this highly complex medical device. The
            redesign required aligning with the Sequoia platform while uniquely
            tailoring it for specialized cardiology needs.{" "}
          </p>
          <Media
            src={sc2000Img}
            alt="Acuson SC2000 Cardiology System"
            caption="Acuson SC2000 Cardiology System · Image Credit: Siemens Healthineers"
          />
          <h4 className="uppercase text-sm pt-4">project management</h4>
          <p>
            Using an iterative approach, we simultaneously engaged in discovery
            and definition conducting extensive research for Cardiology and
            swiftly adapting concepts based on insights from the Sequoia’s
            advancement that was being done parallely.
          </p>
          <p>
            Our approach consolidated existing cardiologic features into a more
            intuitive interface, leveraging Sequoia’s work to enhance and
            customize. Conducting this project in parallel allowed each one to
            inform the other through shared learnings and cross-pollination,
            maximizing efficiency and innovation.
          </p>
          <p>
            The planning and execution, while tremendously challenging,
            exemplified the power of adaptive planning, collaboration across
            functions, and unwavering commitment to user-centric design.
          </p>
          <h4 className="uppercase text-sm pt-4">control panel design</h4>
          <p>
            I leveraged vast existing research and conversations across teams to
            glean pivotal insights for our first cardiology imaging interface
            iteration. A competitive analysis, heuristic evaluation, and global
            contextual inquiries gave a well-rounded view of expectations and
            gaps.
          </p>
          <p>
            For the next phase, we refined concepts and prepared to test with
            external users, maintaining alignment with stakeholders. I organized
            research with 30+ customers across key markets in USA, Germany and
            China, conducting interviews and onsite inquiries to grasp diverse
            needs and workflows.
          </p>
          <p>
            Our preliminary research indicated the need for further research
            into an innovative direction the Sequoia platform had taken for the
            main input device. I used scholarly research to identify an
            evaluation method based on Fitts's law, enabling objective
            performance data collection.
          </p>
          <p>
            During our global user evaluations that encompassed a spectrum of
            users, we were able to contrast individuals’ performance and
            impressions while using this input device. Results showed slower
            response times and higher errors with the new device, especially for
            precision tasks critical in cardiology.
          </p>
          <p>
            These insights sparked intense debate but led us to recommend
            improving the alternative input device or reconsidering the
            traditional one, mitigating usability risks. Grounded in data, we
            advocated for addressing limitations before adoption to senior
            leadership. After a long round of discussions, our recommendation
            was accepted and the input device was redesigned.
          </p>
          <p>
            Armed with evaluation findings, we finalized an optimal control
            panel layout and initiated touch screen definition, having bolstered
            confidence in our design choices through aligning with user needs
            over multiple iterations.
          </p>
          <h4 className="uppercase text-sm pt-4">digital interface design</h4>
          <p>
            With control panel specifics defined, we shifted focus to detailing
            the touch screen and monitor interaction, mapping existing functions
            into a new user-friendly framework that retained familiarity while
            improving learnability and usability.
          </p>
          <p>
            We dissected features systematically via targeted design sprints,
            carefully considering each element’s redesign extent while balancing
            importance and engineering bandwidth. Cross-functional collaboration
            played a crucial role, and we worked closely with the Ultrasound
            team to scope features, and changes carefully.
          </p>
          <p>
            Solid documentation structures became essential to convey intent
            clearly amidst the framework transformation and to stay ahead of
            engineering. We developed detailed templates to share workflow
            details with engineering teams enabling a smooth engineering
            handoff.
          </p>
          <p>
            Formative evaluations with prototypes validated directions and
            allowed symbiotic insight exchange with the Sequoia team to improve
            the overall platform.
          </p>
        </Block>
        <Block title="outcomes">
          <p>
            The result was a system built around customer needs, workflows and
            requirements. Before the official launch of the Sequoia, around the
            summer of 2018, a third-party research agency Macadamian was
            contracted to evaluate and benchmark the system against it's main
            competitors.
          </p>
          <p>
            We expected good results for the system based on our own internal
            evaluations, but were pleasantly surprised by the dramatic positive
            reactions from customers.
          </p>
          <Media
            src={easiestImg}
            alt="Acuson Sequoia was rated as the easiest to use - a 4.54 rating on a 5 point scale"
            caption="Ease of Use Rating · Image Credit: Siemens Healthineers / Macadamian Technologies"
          ></Media>
          <p>
            Published results of that study can be found{" "}
            <a
              href="https://www.siemens-healthineers.com/fr-be/ultrasound/shaping-the-future-of-healthcare/sequoia-comparative-usability-study"
              target="_blank"
              rel="noopener noreferrer"
              className="link-style"
            >
              here
            </a>
            , along with a video presentation of the results.
          </p>
        </Block>
        <Media
          src={leaderImg}
          alt="Acuson Sequoia was the clear standout leader in the comparative study"
          caption="Preferred Device · Image Credit: Siemens Healthineers / Macadamian Technologies"
        ></Media>
        <Block title="reflection">
          <p>
            This complex project proved to be the most demanding yet rewarding
            experiences of my design career. Imparting invaluable lessons for
            driving large initiatives to fruition through strategic execution,
            collaboration, and adaptability.
          </p>
          <p>Key Takeaways:</p>
          <p>
            <strong>Leverage organizational expertise:</strong> Tap into the
            collective wisdom across teams and departments to inform and elevate
            projects. Cross-functional insight strengthens solutions.
          </p>
          <p>
            <strong>Adapt the process:</strong> Navigating design phases with an
            open mind enables deeper problem understanding to shape subsequent
            stages. Creativity in applying tools and engaging stakeholders is
            vital.
          </p>
          <p>
            <strong>Decision driven by evidence:</strong> Remaining objective
            combats overconfidence, ensuring logical, judicious choices.
            Fact-based rationale grounds effective determinations.
          </p>
          <p>
            <strong>Compassion powers collaboration:</strong> Recognize unseen
            barriers teammates face through empathy. Understanding constraints
            enables priority alignment and cooperation essential for on-target
            delivery.
          </p>
        </Block>
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
