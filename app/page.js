/* eslint-disable react/no-unescaped-entities */
import Cover from "@/components/Cover";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
// images
import shuiCover from "@/public/images/shui/shui_cover.jpeg";
import awsCover from "@/public/images/aws/aws.jpg";
import ultrasoundCover from "@/public/images/ultrasound/ultrasound_cover.jpg";
import vaccellentCover from "@/public/images/tva/vaccellent_cover.jpg";
import cscwCover from "@/public/images/personal/cscw.png";
import d3Cover from "@/public/images/personal/d3people.png";
import rssCover from "@/public/images/personal/rss-reader_cover.png";
import hciCover from "@/public/images/hciindex/cover.png";

export default function Home() {
  return (
    <>
      <Cover
        heading="Hi, I'm Prateek"
        description="I am an interaction designer at AWS, where I design tools for modern data infrastructures"
      />
      <Section
        header="work"
        title="At AWS, I help build tools that empower businesses to manage their data with ease and efficiency."
      >
        <ProjectCard
          title="AWS"
          description="tools to build and manage modern data infrastructures"
          image={awsCover}
          link="/aws"
        />
        <h3 className="font-serif text-3xl sm:text-4xl font-light tracking-normal mb-12 sm:leading-[1.24] text-pretty">
          At Siemens Healthineers, I led the design of human-centered medical
          devices and helped build a comprehensive design system.
        </h3>
        <ProjectCard
          title="Ultrasound"
          description="End to end design execution for a complex medical device"
          image={ultrasoundCover}
          link="/ultrasound"
        />
        <div className="sm:grid grid-cols-2 gap-6">
          <ProjectCard
            title="Shui"
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
      <Section
        header="personal projects"
        title="I use personal projects as a playgorund to explore new ideas and technologies to continously expand my knowledge and skillset."
      >
        <ProjectCard
          title="HCI Index"
          description="a nextjs app that uses ai to summarize and recommend a collection of hci papers"
          image={hciCover}
          link="https://hci-ai-index.vercel.app/"
        />
        <div className="sm:grid grid-cols-3 gap-6">
          <ProjectCard
            title="cscw 2019"
            description="an article recounting my experience at CSCW 2019"
            image={cscwCover}
            link="/blog/cscw_2019"
          />
          <ProjectCard
            title="1000 people"
            description="a d3 network graph visualizing connections between people in a community of practice"
            image={d3Cover}
            link="https://quicksilversurfer.github.io/1000-people/"
          />
          <ProjectCard
            title="rss reader"
            description="a svelte app to read through some design & technology blogs"
            image={rssCover}
            link="https://github.com/quicksilversurfer/rss-reader"
          />
        </div>
      </Section>
      <Section
        header="about"
        title="Design is a combination of understanding & expression. A synthesis of form, function and context to create meaning."
      >
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-8 sm:col-start-5 font-sans mb-4 sm:mb-12 space-y-4">
            <p>
              Born and brought up in India, I studied Mechatronics engineering
              in school because I believed it would give me the broadest
              introduction to how things are built. Joined an IT company to
              learn how things are built on the internet. Shifted to working at
              the intersection of design and engineering, to explore what I felt
              passionate about. And finally went to school in Italy when I
              realized that design was my true calling.
            </p>
            <p>
              To me, design is far more than aesthetics or utility; it's a deep
              understanding of a domain and its community. By immersing myself
              in these complex environments, I aim to gain insights about
              motives, goals, and context that shape acitivites in a domain.
              This holistic understanding allows me to systematically design
              solutions that integrate into people's lives addressing addressing
              their needs, motivations, among other factors that influence their
              interactions.
            </p>
            <p>
              With a diverse portfolio spanning multiple complex domains, I have
              honed the ability to quickly learn about these environments,
              distilling insights to enable cross-functional collaboration and
              innovation. I bring a strategic, collaborative, critical thinking
              approach and mindset to achieve team and business objectives by
              creating solutions that resonate with people.
            </p>
            <p>
              Design empowers me to express the change I want to see in the
              world — and work with people and teams attempting to do the same.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
