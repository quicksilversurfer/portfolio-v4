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
import ultrasoundCover from "@/public/images/ultrasound/ultrasound_home_cover.png";
import shuiCover from "@/public/images/shui/shui_home_cover.png";
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
          kicker="Role Overview"
          heading="Simplifying Cloud Infrastructure in the AWS Console"
          subHeading="My work at AWS focuses on transforming complex database management into intuitive experiences—resulting in higher adoption of cost-saving features and more efficient workflows for cloud infrastructure."
        >
          <Block title="Role & approach">
            <p>
              At AWS, I work with the Databases service team designing
              interfaces for modern, fully managed cloud database systems. My
              focus is on making powerful but complex technologies accessible
              through thoughtful design.
            </p>
            <p>
              The AWS Console serves as the central interface where customers
              manage critical infrastructure—creating databases, configuring
              settings, monitoring performance, and optimizing costs. My
              challenge is to translate technical capabilities into interfaces
              that feel natural and predictable, regardless of a user's
              technical background.
            </p>
            <p>
              My design process begins by understanding the mental models of
              both database experts and those new to cloud infrastructure. This
              foundation helps me create experiences that align with the AWS
              Well-Architected Framework's pillars: Operational Excellence,
              Security, Reliability, Performance Efficiency, and Cost
              Optimization.
            </p>
            <p>
              While many of my projects involve unreleased features, the
              following examples demonstrate how I approach the challenge of
              making complex systems more intuitive.
            </p>
          </Block>
          <Divider />
          <SectionHighlight
            kicker="Project"
            heading="Making cost optimization intuitive with Aurora I/O-Optimized"
            subHeading="My work at AWS focuses on transforming complex database management into intuitive experiences—resulting in higher adoption of cost-saving features and more efficient workflows for cloud infrastructure."
          >
            {" "}
            <Block title="Project brief">
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
                created an opportunity to deliver significant cost savings for
                I/O-intensive applications like e-commerce platforms and payment
                processing systems. The technical complexity behind this
                feature—involving throughput optimization and latency
                reduction—presented a key design challenge: how to make this
                sophisticated capability accessible without overwhelming users.
              </p>
            </Block>
            <Blockquote>
              Technical capabilities only deliver value when customers can
              easily discover, understand, and implement them. Our design
              approach transformed a complex pricing model into a clear decision
              point, enabling more customers to optimize their database
              expenses.
            </Blockquote>
            <Block>
              <p>
                I approached this by creating a clear decision framework within
                the console, highlighting the benefits of I/O-Optimized
                configurations at key moments in the customer journey. This
                required close collaboration with product managers to understand
                the technical nuances, and with engineers to ensure the
                interface accurately represented system capabilities.
              </p>
              <p>
                The resulting design simplified the selection process while
                providing context that helped customers make informed decisions.
                This clarity led to higher adoption rates of I/O-Optimized
                configurations and delivered meaningful cost savings for
                customers with high I/O workloads.
              </p>
            </Block>
            <ImgContainer fullWidth>
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
          </SectionHighlight>

          <Divider />
          <SectionHighlight
            kicker="Project"
            heading="Creating consistent patterns for MemoryDB Reserved Instances"
            subHeading="My work at AWS focuses on transforming complex database management into intuitive experiences—resulting in higher adoption of cost-saving features and more efficient workflows for cloud infrastructure."
          >
            {" "}
            <Block title="Creating consistent patterns for MemoryDB Reserved Instances">
              <p>
                When{" "}
                <a
                  href="https://aws.amazon.com/about-aws/whats-new/2022/12/amazon-memorydb-redis-reserved-nodes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-style"
                >
                  Reserved nodes in Amazon MemoryDB for Redis
                </a>{" "}
                launched, customers gained access to potential savings of up to
                55% compared to On-Demand pricing. However, the concept of
                reserved instances involves complex trade-offs between term
                lengths, payment options, and flexibility considerations.
              </p>
              <p>
                My challenge was to create an interface that would guide
                customers through these decisions while maintaining consistency
                with similar reservation flows across AWS. This required
                creating a mental model that made these abstract pricing
                concepts tangible and easy to compare.
              </p>
              <p>
                Working closely with the product team, I designed a streamlined
                reservation flow that reduced friction in the purchase process
                while helping customers understand the implications of their
                choices. The resulting interface balanced simplicity with the
                detail necessary for confident decision-making, contributing to
                increased adoption and substantial customer savings.
              </p>
            </Block>
            <Blockquote>
              Consistency across AWS services creates a sense of familiarity
              that helps customers navigate complex decisions. Our work on
              MemoryDB reservations built on established patterns while refining
              the experience to increase clarity and confidence.
            </Blockquote>
          </SectionHighlight>
        </SectionHighlight>
      </Section>
      <Section header="other projects" constrain>
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
