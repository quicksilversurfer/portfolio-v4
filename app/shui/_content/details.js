/* eslint-disable react/no-unescaped-entities */
import SectionHighlight from "@/components/SectionHighlight";
import Media from "@/components/Media";
import ImgContainer from "@/components/ImgContainer";
import Block from "@/components/Block";
import Blockquote from "@/components/Blockquote";
import ProjectCard from "@/components/ProjectCard";

import finalPattern from "@/public/images/shui/final_pattern.png";
import guidingPrinciples from "@/public/images/shui/guiding_principles.png";
import imagingPortfolio from "@/public/images/shui/imaging_portfolio.png";
import imagingWorkflow from "@/public/images/shui/imaging_workflow.png";
import modalitiesContext from "@/public/images/shui/modalities_context.png";
import patientListUIs from "@/public/images/shui/patient_list_uis.png";
import shuiLibrary from "@/public/images/shui/shui_library.png";
import uiIterations from "@/public/images/shui/ui_iterations.png";
import patientJacketVideo from "@/public/images/shui/shui_patient_jacket.webm";
import patientJacketReadVideo from "@/public/images/shui/shui_patient_jacket_read.webm";
import patientListViews from "@/public/images/shui/shui_patient_list_views.webm";
import shuiDocs from "@/public/images/shui/shui_design_system_doc.webm";

export default function ShuiDetails() {
  return (
    <>
      <div className="border-t border-base-200 dark:border-base-800 my-8"></div>

      <SectionHighlight
        kicker="Project Impact"
        heading="Harmonized Patient Management Across Imaging Products"
        subHeading="Led design system standardization that reduced training time and increased cross-product efficiency for 550+ users across Siemens Healthineers' global medical imaging portfolio."
      >
        <Block title="My role & contribution to SHUI">
          <p>
            As a lead designer for the SHUI design system at Siemens
            Healthineers since its inception, I've helped establish a unified
            design language across the company's diverse medical imaging
            portfolio. My responsibilities have evolved alongside the system,
            including:
          </p>
          <ul className="list-outside pl-4 space-y-4">
            <li className="list-disc pl-2">
              <b className="font-semibold">Component & pattern design:</b>{" "}
              Creating and refining interaction patterns, UI components, and
              visualization solutions tailored to healthcare workflows
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Documentation & prototyping:</b>{" "}
              Building comprehensive documentation and interactive prototypes to
              facilitate adoption by product teams
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Design system evangelism:</b> Working
              directly with product teams to drive understanding and adoption of
              the design system across the organization
            </li>
          </ul>
          <p>
            My most significant contribution has been leading the development of
            the Patient Management Workflow Pattern—a framework that
            standardizes how healthcare professionals interact with patient data
            across diverse imaging products.
          </p>
        </Block>
        <ImgContainer fullWidth>
          <div className="col-span-12">
            <Media
              src={shuiLibrary}
              alt="Multiple screens showing work across interaction design, documentation, and design system evangelism"
              caption="SHUI design system components, patterns, and documentation I've contributed to and maintained"
            />
          </div>
        </ImgContainer>
        <Blockquote>
          Design systems in healthcare aren't just about visual
          consistency—they're about codifying shared understanding around
          complex workflows. Every simplified interaction translates directly to
          time saved for clinicians and better care for patients.
        </Blockquote>
      </SectionHighlight>

      <SectionHighlight
        kicker="Challenge & Solution"
        heading="From Fragmented Interfaces to Unified Experiences"
        subHeading="Three key insights guided our approach to harmonizing patient management across imaging modalities."
      >
        <Block title="Cross-product consistency through workflow patterns">
          <p>
            Siemens Healthineers offers numerous diagnostic imaging
            products—MRI, CT, Ultrasound, X-ray—each historically developed by
            separate teams with unique interfaces. Despite serving the same
            fundamental workflow, these systems had diverged significantly,
            creating multiple challenges:
          </p>
          <ul className="list-outside pl-4 space-y-4">
            <li className="list-disc pl-2">
              <b className="font-semibold">Training burden:</b> Healthcare
              professionals needed to learn different interfaces for the same
              tasks across modalities
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Brand fragmentation:</b> Products
              felt disconnected rather than part of a cohesive healthcare
              ecosystem
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Limited cross-modality workflow:</b>{" "}
              Interface inconsistencies created barriers to efficient
              cross-modality collaboration
            </li>
          </ul>
          <p>
            The Patient Management Workflow Pattern directly addressed these
            issues by creating a standardized approach to patient data
            interaction that spans all imaging modalities, while preserving the
            flexibility needed for each product's unique requirements.
          </p>
        </Block>
        <ImgContainer fullWidth>
          <div className="col-span-12">
            <Media
              src={imagingPortfolio}
              alt="Diagram showing different imaging modalities and their interfaces before standardization"
              caption="Siemens Healthineers' diverse imaging portfolio required a cohesive approach to patient data management"
            />
          </div>
        </ImgContainer>
        <ImgContainer fullWidth>
          <div className="col-span-12">
            <Media
              src={finalPattern}
              alt="UI showing the final pattern implementation with flexible components"
              caption="The final pattern balanced standardization with flexibility to support diverse product needs"
            />
          </div>
        </ImgContainer>

        <Block title="Mental models over interface conventions">
          <p>
            The breakthrough in our approach came from focusing on healthcare
            professionals' mental models rather than existing interface
            conventions. Through extensive research across modalities, I
            identified core user needs that transcended specific products:
          </p>
          <ul className="list-outside pl-4 space-y-4">
            <li className="list-disc pl-2">
              "I need to see my current workload at a glance"
            </li>
            <li className="list-disc pl-2">
              "I need quick access to patient history and previous studies"
            </li>
            <li className="list-disc pl-2">
              "I need to move efficiently between different patients and
              procedures"
            </li>
          </ul>
          <p>
            By organizing our pattern around these fundamental mental models
            rather than existing UI structures, we created a solution that felt
            intuitive to users across modalities while still accommodating
            product-specific requirements.
          </p>
        </Block>
        <ImgContainer fullWidth>
          <div className="col-span-12">
            <Media
              src={patientListViews}
              isVideo={true}
              alt="Video showing different patient list views and interactions"
              caption="The flexible patient list adapts to different contexts while maintaining consistent interaction patterns"
            />
          </div>
        </ImgContainer>

        <Block title="Balancing standardization with flexibility">
          <p>
            The success of this pattern hinged on finding the right balance
            between standardization and flexibility. Our approach addressed this
            challenge through:
          </p>
          <ul className="list-outside pl-4 space-y-4">
            <li className="list-disc pl-2">
              <b className="font-semibold">Adaptable framework:</b> Core
              structures (patient lists, information cards) that could be
              configured to different contexts
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Consistent data representation:</b>{" "}
              Standardized ways of displaying patient information that
              maintained familiarity across products
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Scalable interactions:</b> Common
              interaction patterns that could be implemented regardless of
              specific modality requirements
            </li>
          </ul>
          <p>
            This balanced approach enabled us to gain adoption from nearly all
            products across the Siemens Healthineers portfolio, demonstrating
            that the pattern met both standardization and flexibility
            requirements.
          </p>
        </Block>

        <Blockquote>
          Effective design systems balance standardization with flexibility. Too
          rigid, and teams won't adopt them; too loose, and you lose the
          benefits of consistency. Success comes from standardizing what matters
          most to users while giving product teams freedom to adapt to their
          specific contexts.
        </Blockquote>
      </SectionHighlight>

      {/* BOTTOM OF THE PYRAMID: Provide additional clarity */}
      <SectionHighlight
        kicker="Implementation Process"
        heading="From Research to Adoption"
        subHeading="A systematic approach to understanding workflows, creating solutions, and driving organizational adoption."
      >
        <Block title="Collaborative research methodology">
          <p>
            I began by mapping the shared diagnostic imaging workflow across
            modalities, working directly with product teams in Germany to
            understand their unique requirements and identify common patterns.
            The research process included:
          </p>
          <ul className="list-outside pl-4 space-y-4">
            <li className="list-disc pl-2">
              <b className="font-semibold">Workflow analysis:</b> Identifying
              the common patient management workflows across MRI, CT,
              Ultrasound, and X-ray products
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Collaborative workshops:</b>{" "}
              Facilitating sessions with product teams to create journey maps
              and task analyses
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Interface audits:</b> Cataloging and
              analyzing existing interface solutions across the product
              portfolio
            </li>
          </ul>
          <p>
            This collaborative approach ensured that we built alignment with
            product teams from the beginning, creating shared ownership of the
            solution rather than imposing a pattern from above.
          </p>
        </Block>
        <ImgContainer fullWidth>
          <div className="col-span-12">
            <Media
              src={imagingWorkflow}
              alt="Journey maps and workflow documentation created during the research phase"
              caption="Collaborative research with product teams helped identify common workflows and pain points"
            />
          </div>
        </ImgContainer>
        <ImgContainer fullWidth>
          <div className="col-span-12">
            <Media
              src={modalitiesContext}
              alt="Diagram showing different patient list UI contexts across medical imaging modalities including registration, scanner operation, and reading workflows"
              caption="Analysis of patient list workflows across different contexts: Registration & Patient Prep, Modality Scanner, and Reading & Management"
            />
          </div>
        </ImgContainer>
        <ImgContainer fullWidth>
          <div className="col-span-12">
            <Media
              src={guidingPrinciples}
              alt="Diagram showing how mental models map to UI components"
              caption="Guiding principles rooted in healthcare professionals' mental models informed our pattern design"
            />
          </div>
        </ImgContainer>
        <ImgContainer fullWidth>
          <div className="col-span-12">
            <Media
              src={patientListUIs}
              alt="Collection of inconsistent patient list interfaces from different Siemens Healthineers imaging products before standardization"
              caption="Before implementation of the Patient Management Workflow Pattern: disparate interfaces across products with inconsistent layouts, interactions, and visual design despite serving similar purposes"
            />
          </div>
        </ImgContainer>
        <Block title="Iterative design process">
          <p>
            Rather than creating an entirely new solution, I took an iterative
            approach that built on existing interfaces while addressing
            identified issues:
          </p>
          <ul className="list-outside pl-4 space-y-4">
            <li className="list-disc pl-2">
              <b className="font-semibold">Component identification:</b>{" "}
              Breaking down the pattern into fundamental elements (patient
              lists, information cards, procedure details)
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Progressive refinement:</b> Creating
              multiple design iterations based on feedback from product teams
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Prototype testing:</b> Building
              interactive prototypes to validate solutions with users and
              stakeholders
            </li>
          </ul>
          <p>
            Throughout this process, I maintained close communication with both
            the SHUI design team and product teams, ensuring that the pattern
            evolved to meet both system-level and product-specific needs.
          </p>
        </Block>
        <ImgContainer fullWidth>
          <div className="col-span-12">
            <Media
              src={uiIterations}
              alt="Multiple UI variations showing the evolution of the design"
              caption="Design iterations showing the evolution of the pattern based on user feedback and product team input"
            />
          </div>
        </ImgContainer>
        <Block title="Core solution elements">
          <p>
            The final pattern included several key components designed to create
            consistency while maintaining flexibility:
          </p>
          <ul className="list-outside pl-4 space-y-4">
            <li className="list-disc pl-2">
              <b className="font-semibold">Flexible patient list:</b>{" "}
              Collapsible/expandable list of patients that adapts to different
              contexts and screen sizes
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Structured patient cards:</b>{" "}
              Hierarchically organized patient information with expandable
              sections based on importance
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Patient jacket:</b> One-click access
              to frequently used functions, creating consistent interaction
              patterns across products
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">
                Standardized data representations:
              </b>{" "}
              Consistent ways of displaying patient information, statuses, and
              actions
            </li>
          </ul>
        </Block>
        <ImgContainer fullWidth>
          <div className="col-span-12">
            <Media
              src={patientJacketVideo}
              isVideo={true}
              alt="Video demonstrating the Patient Jacket component functionality"
              caption="The Patient Jacket component provides consistent access to key functions across products"
            />
          </div>
        </ImgContainer>

        <ImgContainer fullWidth>
          <div className="col-span-12">
            <Media
              src={patientJacketReadVideo}
              isVideo={true}
              alt="Video demonstration of the Patient Jacket component in a reading workflow, showing efficient access to patient information and study data during image interpretation"
              caption="The Patient Jacket pattern in reading workflows enables radiologists to efficiently access patient information and navigate between studies while maintaining context during image interpretation"
            />
          </div>
        </ImgContainer>
        <Block title="Driving organizational adoption">
          <p>
            Creating the pattern was only half the challenge—driving adoption
            across the organization required a comprehensive approach:
          </p>
          <ul className="list-outside pl-4 space-y-4">
            <li className="list-disc pl-2">
              <b className="font-semibold">Comprehensive documentation:</b>{" "}
              Detailed guidelines explaining implementation details, behavior
              specifications, and best practices
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Developer resources:</b> Code
              examples, templates, and implementation specifications to
              streamline technical adoption
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Direct team engagement:</b> Working
              one-on-one with product teams to help them understand and
              implement the pattern
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Validation and refinement:</b>{" "}
              Conducting evaluations with users and iterating based on feedback
              to improve the pattern
            </li>
          </ul>
        </Block>
        <ImgContainer fullWidth>
          <div className="col-span-12">
            <Media
              src={shuiDocs}
              isVideo={true}
              alt="Video showing the comprehensive documentation created for the pattern"
              caption="Comprehensive documentation and resources helped drive adoption across product teams"
            />
          </div>
        </ImgContainer>
        <Blockquote>
          Building a pattern is one thing—driving adoption is another entirely.
          The most elegant solution has no impact if it sits unused. Our success
          came from treating product teams as partners rather than recipients,
          giving them the tools and support needed to implement the pattern
          effectively in their specific contexts.
        </Blockquote>
      </SectionHighlight>

      <SectionHighlight
        kicker="Results & Impact"
        heading="Measurable Improvements Across the Product Portfolio"
        subHeading="The Patient Management Workflow Pattern has delivered significant value to both users and the organization."
      >
        <Block title="Quantifiable outcomes">
          <p>
            The SHUI design system has delivered measurable benefits across the
            Siemens Healthineers ecosystem:
          </p>
          <ul className="list-outside pl-4 space-y-4">
            <li className="list-disc pl-2">
              <b className="font-semibold">Organizational adoption:</b> 550+
              users across product teams now utilize the design system in their
              work
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">System growth:</b> Expanded to 48
              components and 15 patterns that provide consistent solutions
              across products
            </li>
          </ul>
          <p>
            Beyond these metrics, SHUI has contributed to significant
            improvements across Siemens Healthineers products:
          </p>
          <ul className="list-outside pl-4 space-y-4">
            <li className="list-disc pl-2">
              <b className="font-semibold">Reduced training time</b> for
              healthcare professionals working across multiple systems
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Increased brand cohesiveness</b>{" "}
              across the Siemens Healthineers product portfolio
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Enhanced cross-modality workflows</b>{" "}
              and data sharing capabilities
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Improved development efficiency</b>{" "}
              through reusable patterns and components
            </li>
          </ul>
        </Block>
        <Block title="User feedback highlights">
          <p>
            External evaluations with 13 technologists and 3 radiologists
            specifically for the Patient Management Pattern confirmed strong
            preference for the standardized approach.
          </p>
          <ul className="list-outside pl-4 space-y-4">
            <li className="list-disc pl-2">
              "Structure is understandable and clear in general."
            </li>
            <li className="list-disc pl-2">
              "Having one place where I can access all the information about a
              patient is very helpful."
            </li>
            <li className="list-disc pl-2">
              "The consistent approach makes it much easier to move between
              different systems."
            </li>
          </ul>
          <p>
            We've also received constructive feedback that has guided ongoing
            refinements:
          </p>
          <ul className="list-outside pl-4 space-y-4">
            <li className="list-disc pl-2">
              "Icons should be easier to differentiate (e.g., green checkmark
              for priors)."
            </li>
            <li className="list-disc pl-2">
              "Consider additional customization options for different clinical
              specialties."
            </li>
          </ul>
          <p>
            This feedback loop has been essential to ensuring the pattern
            continues to evolve based on real-world usage and changing
            requirements.
          </p>
        </Block>
        <Block title="Organizational impact">
          <p>
            Perhaps the most significant impact has been on how Siemens
            Healthineers approaches design across the organization. The success
            of this pattern has:
          </p>
          <ul className="list-outside pl-4 space-y-4">
            <li className="list-disc pl-2">
              <b className="font-semibold">Established a model</b> for
              approaching other cross-product patterns and workflows
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Demonstrated the value</b> of looking
              beyond individual products to the larger ecosystem
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Created a foundation</b> for more
              holistic, user-centered design approaches
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Built understanding</b> of how design
              systems can address complex workflow challenges
            </li>
          </ul>
        </Block>
        <Blockquote>
          Design systems succeed when they fade into the background, letting
          users focus on what matters. The moment that solidified this project's
          value wasn't a metrics report—it was watching healthcare professionals
          move effortlessly between systems, spending less time navigating
          interfaces and more time on patient care.
        </Blockquote>
      </SectionHighlight>

      <SectionHighlight
        kicker="Reflection & Applications"
        heading="Key Insights"
        subHeading="Learnings from this project continue to inform my approach to design systems and complex workflows."
      >
        <Block title="Core insights">
          <p>
            This project has provided valuable insights that continue to shape
            my approach to design systems and complex product ecosystems:
          </p>
          <ul className="list-outside pl-4 space-y-4">
            <li className="list-disc pl-2">
              <b className="font-semibold">Mental models drive adoption:</b>{" "}
              Organizing interfaces around users' conceptual understanding of
              their tasks creates solutions that feel intuitive despite being
              new
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Collaboration builds ownership:</b>{" "}
              Involving stakeholders throughout the process creates advocates
              who drive adoption within their teams
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">
                Flexibility enables standardization:
              </b>{" "}
              The most successful patterns provide just enough structure while
              allowing teams to adapt to their specific requirements
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">
                Systems thinking reveals opportunities:
              </b>{" "}
              Looking beyond individual products to identify common patterns
              uncovers valuable opportunities for improvement
            </li>
          </ul>
        </Block>
        <Block title="Broader applications">
          <p>
            The approach developed for this project has applications well beyond
            this specific pattern:
          </p>
          <ul className="list-outside pl-4 space-y-4">
            <li className="list-disc pl-2">
              <b className="font-semibold">Complex workflow standardization:</b>{" "}
              This methodology can be applied to standardize other complex
              workflows across diverse products
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Cross-functional collaboration:</b>{" "}
              The collaborative approach demonstrates how to build alignment
              across diverse stakeholders with different priorities
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Design system evolution:</b> The
              project provides a model for how design systems can evolve beyond
              components to address workflow-level challenges
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">User-centered standardization:</b>{" "}
              The focus on mental models shows how technical standardization can
              directly improve the user experience
            </li>
          </ul>
        </Block>
        <Blockquote>
          The most lasting impact of this work isn't just in the specific
          pattern we created, but in how it changed our approach to design
          across the organization. By demonstrating the value of looking beyond
          individual products to the larger ecosystem, we've established a
          foundation for more holistic, user-centered design that better serves
          healthcare professionals in their essential work.
        </Blockquote>
      </SectionHighlight>
    </>
  );
}
