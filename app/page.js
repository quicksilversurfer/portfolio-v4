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

export default function Home() {
  return (
    <>
      <Cover
        heading="Hi, I'm Prateek"
        description="I am an interaction designer at AWS, where I design tools for modern data infrastructures"
      />
      <Section
        header="work"
        title="At AWS, I work across a number of database services supporting service teams with design, research and strategy."
      >
        <ProjectCard
          title="AWS"
          description="tools to build and manage modern data infrastructures"
          image={awsCover}
          link="/aws"
        />
        <h3 className="font-serif text-3xl sm:text-5xl font-light tracking-normal mb-12 leading-[1.150] text-pretty">
          Previously at Siemens, I gained experience in end to end design
          execution and project management for complex medical systems.
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
            description="End to end design execution for a complex medical device"
            image={shuiCover}
            link="/shui"
          />
          <ProjectCard
            title="Vaccellent"
            description="End to end design execution for a complex medical device"
            image={vaccellentCover}
            link="/vaccellent"
          />
        </div>
      </Section>
      <Section
        header="personal"
        title="Outside of work, I enjoy exploring ideas that excite me, using skills I'd like to develop further."
      >
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
        title="Design is a combination of understanding & expression. A synthesis of form and content to create meaning."
      >
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-8 sm:col-start-5 font-sans mb-4 sm:mb-12">
            <p className="mb-4">
              Born and brought up in India, I studied Mechatronics engineering
              in school because I thought it would give me the broadest
              introduction to how things are built. Joined an IT company to
              learn how things are built on the Internet. Shifted to working at
              the intersection of design and engineering, to explore what I felt
              passionate about. And finally went to school in Italy when I
              realized that design was my true calling.
            </p>
            <p className="mb-4">
              To me, design is far more than aesthetics or utility; it's a deep
              understanding of a domain and its community. It's about creating
              products and experiences that resonate with people, ensuring they
              hold a meaningful place in the lives of users. It's about evolving
              this relationship of interaction and experience over time, and
              crafting solutions that are not only functional but also
              emotionally resonant and visually compelling.
            </p>
            <p className="mb-4">
              Design is the medium through which I express the change I want to
              see in the world, and work with people and teams attempting to do
              the same.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
