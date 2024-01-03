/* eslint-disable react/no-unescaped-entities */
import Cover from "@/components/Cover";
import Section from "@/components/Section";
import Block from "@/components/Block";
import Media from "@/components/Media";
import Blockquote from "@/components/Blockquote";
import ProjectCard from "@/components/ProjectCard";

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
        <Block title="background">
          <p>
            The COVID-19 pandemic placed enormous strain on countries around the
            world, exposing long standing gaps in public health and exacerbating
            chronic inequities.
          </p>
          <p>
            One of these gaps and challenges is the inoculation of roughly 7.5
            billion people with a limited number of vaccines. To address this
            challenge, a small cross-functional team within Siemens Healthineers
            set about to create a novel product to enable the digitalization of
            the vaccine supply chain.
          </p>
          <p>
            I supported the team with envisioning and crafting a clear product
            definition, through journey maps and workshops. I helped make these
            ideas tangible through mockups which drove decisions for the scope
            and priority of features that needed to be built.
          </p>
          <p>
            Within a short amount of time, we created a suite of tools for two
            key customer types - Vaccellent Operations & Vaccellent Dashboard -
            one supporting the utlization of vaccines at hospitals and clinics,
            and the other supporting governing authorities to make data-driven
            decisions about the distribution of vaccines.
          </p>
          <p>
            Although well received in the limited release these products had,
            the project has officially been shut down. Part of what we built
            continues to live on and supports internal employee vaccination
            registrations at Siemens Healthineers and other partner companies.
          </p>
        </Block>
        <Media
          src={vaccelentOpsImg}
          alt="Vaccelent operations and mobile app"
          caption=""
        />
        <Block title="value proposition">
          <p>
            The tools we developed addressed the following challenges for
            customers -
          </p>
          <h4 className="uppercase text-sm pt-4">
            managing vaccine distrubtion effectively
          </h4>
          <p>
            Empowering public health authorities to make data-driven decisions
            through adaptive AI-based analytics
          </p>
          <h4 className="uppercase text-sm pt-4">
            operating vaccination procedures efficiently
          </h4>
          <p>
            Streamlined patient scheduling and simplified vaccine inventory
            management to optimize clinical workflow
          </p>
          <h4 className="uppercase text-sm pt-4">
            coordinating doses, dates, patients and places
          </h4>
          <p>
            Seamlessly bringing together real-time data related to vaccination
            operations with high transparency
          </p>
        </Block>
        <Block title="vaccellent operations">
          <p>
            Regional health facilities in several countries and regions are not
            well-equipped to handle the scale of this vaccination effort. To
            address this, we created a scheduling app for patients, and an
            operations dashboard for healthcare facilities where they could
            create vaccination time slots, view and record vaccinations, and
            manage their inventory of vaccines.
          </p>
          <p>
            We focused on creating simple and intuitive workflows with only the
            most essential information. For the scheduling app, we developed a
            step-by-step registration flow, focusing on accessibility and
            relying on guerilla testing to validate our concepts.
          </p>
          <p>
            For healthcare professionals and facilities, we developed a
            dashboard which presented relevant and essential information
            regarding vaccination appointments, and inventory levels.
            Conversations with local healthcare partners and subject matter
            experts were very helpful in navigating the dynamic nature of the
            vaccination effort.
          </p>
        </Block>
        <Media
          src={vaccelentDashboardImg}
          alt="Vaccellent dashboard user interface"
          caption=""
        />
        <Block title="vaccellent dashboard">
          <p>
            Another novel aspect of Vaccellent was the capability to optimize
            the distribution of vaccines based on data-driven modelling of
            distribution scenarios. With the help of AI-based simulations, the
            expected impact on cumulative infection rate could be modelled,
            helping public health authorities make fast and confident decisions,
            reducing deaths, and the spread of infections.
          </p>
          <p>
            I worked closely with the product management, and engineering teams
            to understand capabilities of the AI algorithms, and created
            concepts for how these capabilities could be presented in simple and
            intuitive workflows.
          </p>
        </Block>
        <Block title="outlook">
          <p>
            Despite the project being challenging in many ways - constrained
            timelines and resources, rapidly changing environment, lack of
            contact with end-users - we were able to create a compelling value
            proposition for Vaccellent.{" "}
          </p>
          <p>
            Unfortunately because of the evolving operational and political
            climate around vaccines, Vaccellent has been discontinued. But parts
            of the system we developed are in use internally to support
            vaccination efforts in Siemens Healthineers and other partner
            companies. Other systems are being reshaped to broaden their area of
            use and will likely find life in new settings.
          </p>
          <p>
            In the limited time that Vaccellent was available, it received
            favorable reviews. A partner working with early versions of the
            Vaccellent system in the Vaccination Center at Erlangen, Germany had
            the following to say -
          </p>
        </Block>
        <Blockquote>
          <p>
            <i>
              " Vaccellent is intuitive to use. I can immediately see what I’m
              looking for. This saves time. I found that Vaccellent is easy to
              handle for different users – everybody intuitively knew what to do
              next without special training.
            </i>
          </p>
          <p className="mt-4">
            <i>
              For me as an administrator also responsible for coordinating
              fluctuating groups of staff, such as students, this saves a lot of
              time. Well done!"
            </i>
          </p>
        </Blockquote>
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
