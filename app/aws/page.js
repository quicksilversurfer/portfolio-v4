/* eslint-disable react/no-unescaped-entities */
import Cover from "@/components/Cover";
import Section from "@/components/Section";
import Block from "@/components/Block";
import Media from "@/components/Media";
import Blockquote from "@/components/Blockquote";
import ProjectCard from "@/components/ProjectCard";

//images
import ultrasoundCover from "@/public/images/ultrasound/ultrasound_cover.jpg";
import shuiCover from "@/public/images/shui/shui_cover.jpeg";

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
        <Block title="summary">
          <p>
            I am part of the Databases service team that offers modern, fully
            managed, purpose-built cloud-based database management systems.{" "}
          </p>
          <p>
            As a UX Designer at AWS, my work is primarily focused on enhanching
            the usability, functionality and accessibility of the AWS Console to
            help customers achieve key goals: Operational Excellence, Security,
            Reliability, Performance Efficiency, and Cost Optimization. These
            pillars guide my design approach in order to create intuitive
            interface that simplifies complex cloud computing tasks.
          </p>
          <p>
            The AWS Console is the central platform for customers to manage
            cloud resources, monitor system performance, and ensure security
            compliance. My role focuses on crafting experiences that seamlessly
            support these critical activities. From streamlining workflows to
            surfacing key insights, my work revolves around optimizing the
            console to align with customers' needs in each of these areas.
          </p>
        </Block>
        <Block title="projects">
          <p>
            There's a limited amount of work I can share publicly, but here are
            a few projects I've worked on:
          </p>
          <h4 className="uppercase text-sm">Aurora: I/O Pricing Modes</h4>
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
            marks a significant advancement in database solutions for
            I/O-intensive applications. This new cluster configuration is
            designed to offer customers, especially those running e-commerce
            applications, payment processing systems, and similar workloads,
            enhanced price performance and more predictable pricing. Aurora
            I/O-Optimized is engineered to increase throughput and reduce
            latency, addressing the needs of the most demanding database
            operations.
          </p>
          <p>
            This new configuration not only offers significant cost savings — up
            to 40% for high I/O workloads — but also introduces a choice between
            the traditional Aurora Standard and the new I/O-Optimized
            configuration. By streamlining the user interface, we made it more
            convenient and accessible for users to leverage this powerful
            feature, thereby facilitating better cost prediction and performance
            optimization for businesses with intensive data demands.
          </p>
          <p></p>
          <h4 className="uppercase text-sm pt-4">
            MemoryDB: Reserved Instances
          </h4>
          <p>
            The launch of{" "}
            <a
              href="https://aws.amazon.com/about-aws/whats-new/2022/12/amazon-memorydb-redis-reserved-nodes/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-style"
            >
              Reserved nodes in Amazon MemoryDB for Redis
            </a>{" "}
            was a significant feature that allows up to 55% savings compared to
            On-Demand node prices. This initiative introduces a cost-efficient
            solution with flexible one- or three-year term commitments, offering
            No Upfront, Partial Upfront, and All Upfront payment options. My
            role involved streamlining the user interface within the AWS
            Management Console ensuring an effortless process for users to
            select and manage their reserved nodes.
          </p>
          <p>
            I designed an intuitive reservation flow, reducing the time and
            effort needed for users to purchase MemoryDB reserved instances.
            This contributed to a significant increase in the adoption of
            MemoryDB reserved instances due to the enhanced user experience. I
            also facilitated alignment across multiple teams to ensure a
            consistent experience across other AWS services.
          </p>
        </Block>
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
