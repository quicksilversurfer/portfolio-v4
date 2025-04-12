/* eslint-disable react/no-unescaped-entities */
import Cover from "@/components/Cover";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
// images
import shuiCover from "@/public/images/shui/shui_home_cover.png";
import awsCover from "@/public/images/aws/aws.jpg";
import ultrasoundCover from "@/public/images/ultrasound/ultrasound_home_cover.png";
import vaccellentCover from "@/public/images/tva/vaccellent_home_cover.png";
import cscwCover from "@/public/images/personal/cscw.png";
import d3Cover from "@/public/images/personal/d3people.png";
import rssCover from "@/public/images/personal/rss-reader_cover.png";
import hciCover from "@/public/images/hciindex/cover.png";
import rasabhoomiCover from "@/public/images/rasabhoomi/og.png";

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
        constrain
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
        constrain
      >
        <ProjectCard
          title="Rasabhūmi"
          description="a sveltekit app that maps protected regional specialties using mapbox to explore cultural heritage"
          image={rasabhoomiCover}
          link="https://rasabhoomi.vercel.app/"
        />
        <ProjectCard
          title="HCI Index"
          description="a nextjs app that uses ai to summarize and recommend a collection of hci papers"
          image={hciCover}
          link="https://hci-ai-index.vercel.app/"
        />
        <div className="sm:grid grid-cols-2 gap-6">
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
        </div>
      </Section>
      <Section
        header="about"
        title="Design is understanding made visible—a bridge between complex systems and the humans who use them."
        constrain
      >
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-8 sm:col-start-5 font-sans mb-4 sm:mb-12 space-y-4">
            <p>
              My journey began in India with Mechatronics engineering—a field
              that interweaves mechanical, electronic, and software systems.
              This foundation gave me an appreciation for how different elements
              come together to create functional wholes. After working in IT and
              experiencing how digital products evolve, I found myself drawn to
              the human side of technology. This curiosity eventually led me to
              Italy to study Interaction Design, formalizing what had been an
              intuitive interest.
            </p>
            <p>
              What continues to fascinate me about design is finding clarity
              within complexity. Each domain—whether healthcare or cloud
              computing—contains its own language, rituals, and mental models.
              I'm drawn to these specialized worlds, uncovering how humans
              navigate their environments and translate their expertise into
              daily workflows. By immersing myself in these contexts, I can
              distill complex knowledge into frameworks that reveal underlying
              patterns. This exploration resembles learning a new language,
              where each term, task, and interaction carries layers of
              meaning—presenting opportunities for design to simplify and
              enhance the experience.
            </p>
            <p>
              Through various research methods, I build an understanding of both
              technical systems and human needs. The most rewarding moments come
              when these perspectives align—when a complex capability becomes an
              intuitive interaction. My work often involves creating artifacts
              that make abstract concepts tangible, helping teams develop a
              shared vocabulary and vision. These thinking tools become bridges
              between different disciplines, enabling collaboration toward
              clearer solutions.
            </p>
            <p>
              I believe the most elegant design does the heavy lifting so users
              don't have to. It reveals only what's necessary at each moment,
              creating a sense of flow rather than friction. This principle
              guides my approach across projects, whether reimagining medical
              devices or simplifying cloud infrastructure. My aim is to create
              spaces where complexity recedes into the background, and people
              can focus on their actual goals rather than the tools themselves.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
