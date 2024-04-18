/* eslint-disable react/no-unescaped-entities */
import Cover from "@/components/Cover";
import Section from "@/components/Section";
import Block from "@/components/Block";
import Media from "@/components/Media";
import Blockquote from "@/components/Blockquote";
import ProjectCard from "@/components/ProjectCard";
import SectionHighlight from "@/components/SectionHighlight";
import ImgContainer from "@/components/ImgContainer";
import Divider from "@/components/Divider";

//images
import ultrasoundCover from "@/public/images/ultrasound/ultrasound_cover.jpg";
import shuiCover from "@/public/images/shui/shui_cover.jpeg";
import img_1 from "@/public/images/aws/IO_Optimized_AWS.png";
import img_2 from "@/public/images/aws/2_aws.png";

const awsDetails = [
  {
    title: "work experience",
    description: "aws / jun 2022 to present",
  },
  {
    title: "collaborators",
    description: "aws design team",
  },
  {
    title: "contribution",
    description: "interaction design, visual design, user research",
  },
];
export default function AWS() {
  return (
    <>
      <Cover
        heading="AWS"
        description="tools to build and manage modern data infrastructures"
      />
      <Section projectInfo={awsDetails}>
        <SectionHighlight
          kicker="Project Overview"
          heading="Designing for efficiency and ease of use in the AWS Console"
          subHeading="My contributions to streamlining user interfaces and workflows within the AWS Console led to increased adoption of cost-saving features and improved user experience for managing cloud-based database systems.
"
        >
          <Block title="Role & contributions">
            <p>
              At AWS, I am part of the Databases service team, responsible for
              delivering modern and fully managed cloud database management
              systems.
            </p>
            <p>
              As a UX Designer, my primary focus is enhancing the usability,
              functionality, and accessibility of the AWS Console. This involves
              aligning my design approach with the five pillars of the AWS
              Well-Architected Framework: Operational Excellence, Security,
              Reliability, Performance Efficiency, and Cost Optimization.
            </p>
            <p>
              My work centers around crafting intuitive interfaces that simplify
              complex cloud computing tasks for our customers. The AWS Console
              serves as the central platform for managing cloud resources,
              monitoring system performance, and ensuring security compliance.
            </p>
            <p>
              I strive to create experiences that seamlessly support these
              critical activities, from streamlining workflows to surfacing key
              insights, ultimately optimizing the console to align with
              customers' diverse needs.
            </p>
            <p>
              While I am actively involved in a range of projects, some
              involving unreleased features and confidential information, I am
              pleased to share a few projects that I've contributed to, and are
              released in the AWS Console.
            </p>
          </Block>
          <Divider />
          <Block title="Enabling Cost Optimization with Aurora I/O-Optimized Configuration">
            <p>
              The launch of{" "}
              <a
                href="https://aws.amazon.com/blogs/aws/new-amazon-aurora-i-o-optimized-cluster-configuration-with-up-to-40-cost-savings-for-i-o-intensive-applications/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                Amazon Aurora I/O-Optimized
              </a>{" "}
              marked a significant advancement in database solutions for
              I/O-intensive applications. This new cluster configuration offers
              enhanced price performance and more predictable pricing,
              particularly benefiting customers running e-commerce applications,
              payment processing systems, and similar workloads. Aurora
              I/O-Optimized is engineered to increase throughput and reduce
              latency, addressing the needs of the most demanding database
              operations.
            </p>
          </Block>
          <Blockquote>
            By designing a clear and intuitive interface for selecting and
            managing Aurora I/O-Optimized configurations, we empowered customers
            to easily adopt this cost-saving feature and optimize their database
            expenses for I/O-intensive workloads.
          </Blockquote>
          <Block>
            <p>
              My role in this project involved defining a clear and intuitive
              user interface within the AWS Console to make it easier for
              customers to leverage this powerful feature. By creating a clear
              and intuitive interface for selecting and managing I/O-Optimized
              configurations, we empowered customers to optimize their database
              costs effectively. This resulted in a significant increase in the
              adoption of I/O-Optimized configurations and substantial cost
              savings for customers with high I/O workloads.
            </p>
          </Block>
          <ImgContainer>
            <div className="col-span-6">
              <Media
                src={img_1}
                alt="Aurora I/O-Optimized configuration in the AWS Console"
              ></Media>
            </div>
            <div className="col-span-6">
              <Media
                src={img_2}
                alt="Customer testimonials for Aurora I/O-Optimized configuration"
              ></Media>
            </div>
            <span className="col-span-12 text-sm text-base-600 dark:text-base-500 font-sans text-left mt-2">
              Aurora I/O-Optimized configuration in the AWS Console & customer
              testimonials
            </span>
          </ImgContainer>
          <Divider />
          <Block title="Facilitating cost savings with MemoryDB Reserved Instances">
            <p>
              The introduction of{" "}
              <a
                href="https://aws.amazon.com/about-aws/whats-new/2022/12/amazon-memorydb-redis-reserved-nodes/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                Reserved nodes in Amazon MemoryDB for Redis
              </a>{" "}
              presented a valuable opportunity for customers to achieve cost
              savings of up to 55% compared to On-Demand node pricing. This
              initiative introduced flexible one- or three-year term commitments
              with various payment options, including No Upfront, Partial
              Upfront, and All Upfront.
            </p>
            <p>
              To ensure a seamless user experience, I focused on streamlining
              the interface for selecting and managing reserved nodes within the
              AWS Management Console. By designing an intuitive reservation
              flow, we reduced the time and effort required for customers to
              purchase and manage their MemoryDB Reserved Instances. This
              resulted in increased adoption and contributed to substantial cost
              savings for our customers. Additionally, I facilitated alignment
              of this feature across other AWS services to ensure a consistent
              and user-friendly experience.
            </p>
          </Block>
          <Blockquote>
            The streamlined reservation flow for MemoryDB Reserved Instances
            enabled customers to easily adopt this cost-saving option, leading
            to increased efficiency and significant cost reductions.
          </Blockquote>
        </SectionHighlight>
      </Section>
      <Section header="other projects">
        <div className="grid grid-cols-2 gap-6">
          <ProjectCard
            title="ultrasound"
            description="End to end design execution for a complex medical device"
            image={ultrasoundCover}
            link="/ultrasound"
          />
          <ProjectCard
            title="shui"
            description="developing design systems for user interface consistency and increased internal productivity"
            image={shuiCover}
            link="/shui"
          />
        </div>
      </Section>
    </>
  );
}
