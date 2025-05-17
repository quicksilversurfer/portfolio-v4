/* eslint-disable react/no-unescaped-entities */
import Cover from "@/components/Cover";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
// images
import shuiCover from "@/public/images/shui/shui_home_cover.png";
import awsCover from "@/public/images/aws/aws_cover.png";
import luminaCover from "@/public/images/aws/lumina/lumina_cover.png";
import ultrasoundCover from "@/public/images/ultrasound/ultrasound_home_cover.png";
import vaccellentCover from "@/public/images/tva/vaccellent_home_cover.png";
import cscwCover from "@/public/images/personal/cscw.png";
import d3Cover from "@/public/images/personal/d3people.png";
import hciCover from "@/public/images/hciindex/cover.png";
import rasabhoomiCover from "@/public/images/rasabhoomi/og.png";

export default function Home() {
  return (
    <>
      <Cover
        heading="Hi, I'm Prateek."
        description="I am an interaction designer at AWS, where I design tools for modern data infrastructures."
      />
      <Section
        header="work"
        title="At AWS, I work on simplifying developer tooling for complex database services, while also building tools that enhance how teams understand customer needs."
        constrain
      >
        <ProjectCard
          title="Lumina"
          description="ai-powered customer insights for data-driven product decisions"
          image={luminaCover}
          link="/lumina"
        />
        <ProjectCard
          title="AWS"
          description="tools to build and manage modern data infrastructures"
          image={awsCover}
          link="/aws"
        />
        <h3 className="font-serif text-3xl sm:text-4xl font-light tracking-normal mb-12 sm:leading-[1.24] text-pretty">
          At Siemens Healthineers, I improved medical device usability through
          research while building a comprehensive design system and patterns
          that scale across products.
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
              create functional wholes. After working in IT and seeing how
              digital products evolve, I found myself drawn to the human side of
              technology, which led me to study Interaction Design in Italy.
            </p>
            <p>
              What fascinates me about design is finding clarity within
              complexity. Each domain contains its own language, rituals, and
              mental models. I'm drawn to these specialized worlds, uncovering
              how experts translate their knowledge into daily workflows. By
              immersing myself in these contexts, I can distill complex
              knowledge into frameworks that reveal underlying patterns—much
              like learning a new language where each term carries layers of
              meaning.
            </p>
            <p>
              The most rewarding moments come when technical systems and human
              needs align—when complex capabilities become intuitive
              interactions. My work often involves creating{" "}
              <em>conceptual frameworks and working code</em> that make abstract
              ideas tangible, helping teams develop shared understanding. These
              thinking tools bridge different disciplines, enabling
              collaborative exploration of complex problems.
            </p>
            <p>
              I believe elegant design does the heavy lifting so users don't
              have to. It reveals only what's necessary, creating flow rather
              than friction. This principle guides my approach whether improving
              medical devices or simplifying developer tools. My aim is to craft
              experiences where purpose steps forward and technology recedes,
              allowing people to focus on their goals rather than the tools
              themselves.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
