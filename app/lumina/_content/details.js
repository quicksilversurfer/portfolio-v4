/* eslint-disable react/no-unescaped-entities */
import SectionHighlight from "@/components/SectionHighlight";
import Media from "@/components/Media";
import ImgContainer from "@/components/ImgContainer";
import Block from "@/components/Block";
import Blockquote from "@/components/Blockquote";

import luminaV1Report from "@/public/images/aws/lumina/lumina_v1_report.png";
import luminaV2_1 from "@/public/images/aws/lumina/luminav2-1.png";
import luminaV2_2 from "@/public/images/aws/lumina/luminav2-2.png";
import luminaV2_3 from "@/public/images/aws/lumina/luminav2-3.png";
import luminaV2_4 from "@/public/images/aws/lumina/luminav2-4.png";
import luminaV2_5 from "@/public/images/aws/lumina/luminav2-5.png";
import luminaV2_6 from "@/public/images/aws/lumina/luminav2-6.png";
import luminaProcess from "@/public/images/aws/lumina/lumina-process.png";
import luminaV2Architecture from "@/public/images/aws/lumina/luminav2-architecture.png";
import luminaV1Architecture from "@/public/images/aws/lumina/luminav1-architecture.png";
import luminaProcess_1 from "@/public/images/aws/lumina/lumina-process-1.png";
import luminaProcess_2 from "@/public/images/aws/lumina/lumina-process-2.png";
import designBreakfastTitle from "@/public/images/aws/lumina/design_breakfast_title.png";
import designBreakfastSlide from "@/public/images/aws/lumina/design_breakfast_slide.png";

export default function ShuiDetails() {
  return (
    <>
      <div className="border-t border-base-200 dark:border-base-800 my-8"></div>
      <SectionHighlight
        kicker="Design Approach"
        heading="Rethinking Feedback Analysis Through Multi-Dimensional Classification"
        subHeading="How going beyond simple categorization revealed the rich context behind customer feedback and enabled more meaningful insights."
      >
        <Block title="Evolution through iteration">
          <p>
            Lumina's design approach evolved through two major iterations, each
            responding to different aspects of the customer feedback challenge:
          </p>
          <p>
            The initial version (Lumina v1) focused on generating thematic
            reports from feedback, identifying key issues and opportunities to
            help designers develop narratives for driving business outcomes and
            prioritization. While this approach yielded promising results, it
            faced skepticism about the AI-generated insights.
          </p>
          <p>
            This skepticism led to a fundamental rethinking of the approach.
            Rather than simply presenting conclusions, Lumina needed to provide
            transparency into how insights were developed and allow users to
            explore the data themselves. I realized we needed to build a
            framework that could both integrate multiple data sources and build
            trust through evidence and exploration.
          </p>
        </Block>
        <ImgContainer fullWidth>
          <div className="col-span-12">
            <Media
              src={luminaV1Report}
              alt="Lumina V1 report showing structured analysis of customer feedback"
              caption="Lumina's initial version generated structured reports organized by customer segments"
            />
          </div>
        </ImgContainer>

        <Block title="The multi-dimensional classification system">
          <p>
            Through analysis of feedback data and user needs, I designed a
            classification system with four dimensions that could be applied
            consistently across different products and data sources:
          </p>
          <ul className="list-outside pl-4 space-y-4">
            <li className="list-disc pl-2">
              <b className="font-semibold">User Intent:</b> Why customers are
              providing feedback—whether they're seeking knowledge, reporting
              problems, making decisions, or requesting features
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Technical Area:</b> Which specific
              technical domains (security, networking, performance) are involved
              in the feedback
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Service Features:</b> Which specific
              product features or components customers are discussing
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">User Journey Stage:</b> Where
              customers are in their adoption lifecycle, from discovery through
              implementation to optimization
            </li>
          </ul>
          <p>
            This multi-dimensional approach led to several key breakthroughs:
          </p>
          <ul className="list-outside pl-4 space-y-4">
            <li className="list-disc pl-2">
              Discovering that large language models excel at classification
              when given clear, specific instructions through careful prompt
              engineering
            </li>
            <li className="list-disc pl-2">
              Recognizing that different classification dimensions could serve
              different stakeholder needs—from service-specific views for
              product teams to intent analysis for documentation teams
            </li>
            <li className="list-disc pl-2">
              Enabling cross-dimensional analysis to reveal patterns like what
              technical areas generated the most configuration errors or which
              issues appeared across different stages of the customer journey
            </li>
          </ul>
        </Block>
        <ImgContainer fullWidth>
          <div className="col-span-6">
            <Media
              src={luminaV2_1}
              alt="Lumina dashboard showing the service features classification"
            ></Media>
          </div>
          <div className="col-span-6">
            <Media
              src={luminaV2_2}
              alt="Lumina dashboard showing the user intent classification"
            ></Media>
          </div>
          <div className="col-span-6">
            <Media
              src={luminaV2_3}
              alt="Lumina dashboard showing the journey stage classification"
            ></Media>
          </div>
          <div className="col-span-6">
            <Media
              src={luminaV2_4}
              alt="Lumina dashboard showing the technical area classification"
            ></Media>
          </div>
          <span className="col-span-12 text-sm text-base-600 dark:text-base-500 font-sans text-left mt-2">
            The Lumina dashboard showcases multi-dimensional analysis of AWS
            ElastiCache questions posted on rePost, enabling users to explore
            patterns across service features, user intents, journey stages, and
            technical areas. These interconnected views reveal where customers
            face challenges, what they're trying to accomplish, and how issues
            manifest across different stages of product use—creating a
            comprehensive understanding impossible to achieve through
            single-dimension analysis.
          </span>
        </ImgContainer>

        <Block title="Designing for trust and exploration">
          <p>
            Addressing the root causes of skepticism about AI-generated insights
            became a central design challenge. The solution had to build trust
            through transparency while providing flexible exploration
            capabilities for different user roles. This led to several guiding
            principles:
          </p>
          <ul className="list-outside pl-4 space-y-4">
            <li className="list-disc pl-2">
              <b className="font-semibold">Evidence and verification:</b> Teams
              needed to validate AI-generated insights by seeing the original
              feedback. This led to implementing evidence linking, connecting
              every insight to specific customer quotes.
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Exploration over presentation:</b>{" "}
              Different roles (product managers, engineers, documentation
              writers) needed to analyze feedback from different perspectives.
              Rather than providing static reports, an interactive dashboard
              would enable flexible exploration.
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">
                Classification as a lens, not a box:
              </b>{" "}
              Classifications should bring certain aspects of feedback into
              focus without constraining understanding. This led to using large
              language models that could capture nuance rather than
              keyword-based classification.
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Cross-dimensional insights:</b> The
              system needed to reveal patterns at the intersection of different
              dimensions, highlighting relationships that would otherwise remain
              hidden.
            </li>
          </ul>
          <p>
            These principles guided both the technical implementation and
            interface design, ensuring that Lumina would enable teams to
            understand customer needs more deeply rather than simply processing
            feedback more efficiently.
          </p>
        </Block>
        <ImgContainer fullWidth>
          <div className="col-span-6">
            <Media
              src={luminaV2_5}
              alt="Lumina dashboard showing the cross-dimensional analysis"
            ></Media>
          </div>
          <div className="col-span-6">
            <Media
              src={luminaV2_6}
              alt="Lumina dashboard showing the cross-dimensional analysis"
            ></Media>
          </div>
          <span className="col-span-12 text-sm text-base-600 dark:text-base-500 font-sans text-left mt-2">
            Lumina's cross-dimensional analysis visualizes the intersections
            between different aspects of customer feedback, revealing hidden
            patterns like which technical areas generate the most questions at
            specific journey stages, or which features create configuration
            challenges. These relationship matrices and bubble charts expose key
            insights that would remain invisible when examining each dimension
            in isolation.
          </span>
        </ImgContainer>
        <Blockquote>
          When working with AI, the goal isn't to replace human thinking but to
          amplify it. By designing systems that reveal patterns across multiple
          dimensions, we can uncover insights that would otherwise remain hidden
          in the complexity of customer feedback.
        </Blockquote>
      </SectionHighlight>

      <SectionHighlight
        kicker="Technical Implementation"
        heading="Building a Scalable AI-Powered Analytics Platform"
        subHeading="How I leveraged AWS serverless architecture and large language models to create a robust, production-ready system."
      >
        <Block title="From experimentation to production">
          <p>
            Lumina's development followed a path of progressive technical
            complexity, starting from simple experiments and evolving into a
            sophisticated analytics platform:
          </p>
          <p>
            I began with Jupyter notebook experiments to test how AI models
            could help understand customer feedback. Using sample datasets, I
            explored different prompt structures and classification approaches
            to validate that AI could effectively analyze technical product
            feedback.
          </p>
          <p>
            After proving the concept's viability, I built a simple prototype
            using Gradio to provide a visual interface for testing with
            stakeholders. This generated enthusiasm for the potential impact,
            securing support to develop a production solution.
          </p>
        </Block>
        <ImgContainer fullWidth>
          <div className="col-span-12">
            <Media
              src={luminaProcess_1}
              alt="Image showing initial experiments and prototyping of Lumina. Left image shows the Jupyter notebook with initial experiments. Right image shows the Gradio prototype."
            ></Media>
          </div>
          <span className="col-span-12 text-sm text-base-600 dark:text-base-500 font-sans text-left mt-2">
            Initial experimentation and prototyping of Lumina, showing the
            project's evolution from conceptual testing in Jupyter notebooks
            (left) to the first interactive prototype built with Gradio (right).
            These early stages validated the potential of AI-powered feedback
            analysis before scaling to a production solution.
          </span>
        </ImgContainer>

        <Block title="Report generation system (v1)">
          <p>
            The initial production version focused on generating structured
            reports from AWS Console feedback:
          </p>
          <ul className="list-outside pl-4 space-y-4">
            <li className="list-disc pl-2">
              <b className="font-semibold">Feedback collection:</b> The system
              ingested CSV files containing raw customer feedback, creating a
              standardized format for processing
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">AI-powered analysis:</b> Claude
              analyzed each feedback item, generating summaries and categorizing
              content into predefined categories
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Report generation:</b> The system
              aggregated insights by category, creating comprehensive Markdown
              reports highlighting key patterns with representative quotes
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Delivery mechanism:</b> Reports were
              stored in S3 and made accessible through a simple Streamlit
              interface for team consumption
            </li>
          </ul>
          <p>
            This approach delivered immediate value by reducing processing time
            from weeks to minutes, but user interviews revealed limitations in
            verification and exploration capabilities.
          </p>
        </Block>

        <ImgContainer fullWidth>
          <div className="col-span-12">
            <Media
              src="https://d2ilhtd50ueqlk.cloudfront.net/luminav1_demo.webm"
              isVideo={true}
              alt="Video showing the Lumina V1 report generation tool"
              caption="Lumina's first production version: A Streamlit-powered reporting interface for uploading and analyzing AWS service feedback CSVs."
            />
          </div>
        </ImgContainer>

        <Block title="Technical architecture for report generation (v1)">
          <p>
            The first version employed a streamlined serverless architecture
            focused on batch processing:
          </p>
          <ul className="list-outside pl-4 space-y-4">
            <li className="list-disc pl-2">
              <b className="font-semibold">S3 buckets:</b> Stored both raw
              feedback CSV files and generated reports, providing simple storage
              and retrieval
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">AWS Lambda functions:</b> Handled
              data preprocessing, invoked Claude for analysis, and formatted
              final reports
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Step Functions:</b> Orchestrated the
              workflow, ensuring reliable execution for large batches of
              feedback
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Bedrock:</b> Provided access to
              Claude models with appropriate error handling and retry logic
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Streamlit:</b> Offered a simple
              interface for uploading feedback files and viewing generated
              reports
            </li>
          </ul>
          <p>
            This architecture prioritized reliability and simplicity, enabling
            teams to process much larger volumes of feedback than previously
            possible while maintaining a straightforward workflow.
          </p>
        </Block>
        <ImgContainer fullWidth>
          <div className="col-span-12">
            <Media
              src={luminaProcess_2}
              alt="Split-screen IDE view of Python code for Lumina's prompt engineering, showing detailed instructions for Claude to generate executive summaries and analyze customer feedback."
              caption="Python code showing the specialized prompt engineering for Lumina, with executive summary generation on the left and feedback analysis instructions on the right."
            ></Media>
          </div>
        </ImgContainer>
        <ImgContainer fullWidth>
          <div className="col-span-12">
            <Media
              src={luminaV1Architecture}
              alt="Architecture diagram showing the components and data flow of Lumina v1"
              caption="Linear workflow for generating structured reports from AWS Console feedback using Lambda, Step Functions, and Claude."
            ></Media>
          </div>
        </ImgContainer>
        <Blockquote>
          Building technical solutions as a designer isn't just about proving
          concepts—it's about creating bridges between what's possible and
          what's needed. The most meaningful solutions emerge when we deeply
          understand both technical capabilities and human contexts.
        </Blockquote>
      </SectionHighlight>
      <SectionHighlight
        kicker="Evolution & Impact"
        heading="From Reports to Interactive Insights"
        subHeading="How user feedback transformed Lumina and how Lumina transformed product decision-making."
      >
        <Block title="Learning from users">
          <p>
            The initial version of Lumina generated static reports summarizing
            feedback trends. While valuable, user interviews revealed several
            limitations:
          </p>
          <ul className="list-outside pl-4 space-y-4">
            <li className="list-disc pl-2">
              <b className="font-semibold">Trust challenges:</b> Users wanted to
              verify AI-generated insights by seeing the original feedback. They
              were hesitant to act on insights without understanding the source
              and context.
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Context limitations:</b> Static
              reports couldn't provide the full context needed to understand
              complex issues, particularly when they spanned multiple technical
              areas.
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Exploration constraints:</b>{" "}
              Different roles needed to analyze feedback from different
              perspectives, but static reports offered limited flexibility for
              exploration.
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Data source limitations:</b> Teams
              wanted insights from multiple channels, not just console feedback,
              to get a more comprehensive view of customer experiences.
            </li>
          </ul>
          <p>
            This feedback prompted a fundamental shift in our approach. Instead
            of generating static reports, we redesigned Lumina to store rich,
            structured data that could power an interactive dashboard, enabling
            teams to explore feedback from multiple dimensions and drill down to
            specific examples.
          </p>
        </Block>

        <ImgContainer fullWidth>
          <div className="col-span-12">
            <Media
              src={luminaProcess}
              alt="FigJam whiteboard showing a complex design process with multiple sections of prompt designs, classification frameworks, and system architecture diagrams for the Lumina feedback analysis tool."
              caption="Lumina Deep Dive FigJam board documenting my prompt engineering process and architectural planning for the multi-dimensional classification system in Lumina v2."
            />
          </div>
        </ImgContainer>

        <Block title="Enhanced platform with multi-dimensional classification (v2)">
          <p>
            Based on user feedback, I transformed Lumina from a basic report
            generator into a sophisticated interactive analytics platform. The
            heart of this evolution was a fundamental shift in how we approached
            feedback analysis.
          </p>

          <h4 className="text-lg font-medium mt-6 mb-2">
            The four dimensions of understanding
          </h4>
          <p>
            Rather than simple categorization, the new system analyzed feedback
            through four complementary lenses: User Intent (why customers
            reached out), Technical Area (which domains were involved), Service
            Features (which specific components they discussed), and User
            Journey Stage (where they were in their adoption lifecycle). This
            multi-dimensional approach revealed patterns and relationships
            impossible to see through any single perspective.
          </p>

          <h4 className="text-lg font-medium mt-6 mb-2">
            Building a system that builds trust
          </h4>
          <p>
            Earning users' trust required complete transparency. Every insight
            was directly linked to original feedback quotes, allowing teams to
            verify AI-generated classifications. This evidence-based approach
            transformed skepticism into confidence as users could trace
            conclusions back to their source—a crucial step in building trust in
            AI-assisted analysis.
          </p>

          <h4 className="text-lg font-medium mt-6 mb-2">
            Technical foundations
          </h4>
          <p>
            The system's intelligence came from carefully engineered prompts
            that provided Claude with rich context about AWS services, detailed
            classification frameworks, and explicit requirements to cite
            evidence. These prompts, combined with a parallel processing
            architecture that analyzed each dimension independently, reduced
            bias while revealing cross-dimensional patterns that would otherwise
            remain hidden.
          </p>

          <h4 className="text-lg font-medium mt-6 mb-2">
            From passive consumption to active exploration
          </h4>
          <p>
            Rather than static reports, the new architecture stored structured
            data in DynamoDB, powering an interactive dashboard where teams
            could explore feedback dynamically. By expanding data sources beyond
            console feedback to include rePost forums, we provided a more
            comprehensive view of customer experiences across multiple channels.
          </p>

          <p className="mt-4">
            This transformation fundamentally changed how teams engaged with
            customer feedback—shifting from passively consuming occasional
            reports to actively exploring patterns and relationships. Teams
            discovered insights like which technical areas generated the most
            questions at specific journey stages, or how different user intents
            manifested across product features—connections that would remain
            invisible when examining each dimension in isolation.
          </p>
        </Block>

        <ImgContainer fullWidth>
          <div className="col-span-12">
            <Media
              src="https://d2ilhtd50ueqlk.cloudfront.net/luminav2_demo.webm"
              isVideo={true}
              alt="Video showing the enhanced Lumina v2 interactive dashboard"
              caption="Lumina v2: An interactive dashboard enabling multi-dimensional analysis of customer feedback patterns"
            />
          </div>
        </ImgContainer>

        <Block title="Technical architecture for multi-dimensional analysis (v2)">
          <p>
            The enhanced platform required a more sophisticated architecture to
            support interactive exploration:
          </p>
          <ul className="list-outside pl-4 space-y-4">
            <li className="list-disc pl-2">
              <b className="font-semibold">Parallel classification pipeline:</b>{" "}
              Step Functions with Map state processes each dimension
              independently, improving accuracy by reducing sequential bias
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">DynamoDB:</b> Flexible data model
              with multiple global secondary indexes enables efficient querying
              across different dimensions and their combinations
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Advanced prompt engineering:</b>{" "}
              Specialized prompts for each classification dimension include
              detailed examples and domain context for improved consistency
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Streamlit dashboard:</b>{" "}
              Comprehensive visualization interface with cross-dimensional
              analysis capabilities shows relationships between different
              aspects of feedback
            </li>
          </ul>
          <p>
            This architecture prioritized flexibility and exploration,
            separating data processing from visualization to create a system
            that could evolve with user needs while maintaining a consistent
            data foundation.
          </p>
        </Block>

        <ImgContainer fullWidth>
          <div className="col-span-12">
            <Media
              src={luminaV2Architecture}
              alt="Architecture diagram showing the components and data flow of Lumina v2"
              caption="Advanced analytics system with parallel classification pipelines analyzing feedback across multiple dimensions to power an interactive dashboard."
            ></Media>
          </div>
        </ImgContainer>
        <Blockquote>
          The true measure of success isn't just faster processing or more
          data—it's how the system changes conversations. When teams start
          discussing what they're learning from customers instead of whether
          they have time to read feedback, that's when you know you've created
          something valuable.
        </Blockquote>
      </SectionHighlight>

      <SectionHighlight
        kicker="Future Direction"
        heading="Expanding Impact & Possibilities"
        subHeading="Current developments and future opportunities for Lumina."
      >
        <Block title="Current developments">
          <p>
            Lumina continues to evolve with several enhancements currently in
            development:
          </p>
          <ul className="list-outside pl-4 space-y-4">
            <li className="list-disc pl-2">
              <b className="font-semibold">
                Integration with product planning tools:
              </b>{" "}
              Creating direct connections to Asana and other planning systems to
              streamline the transition from insight to action
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Advanced pattern recognition:</b>{" "}
              Implementing more sophisticated trend analysis to identify
              emerging issues earlier
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Temporal Analysis:</b> Creating
              richer temporal analysis to identify trends over time
            </li>
          </ul>
          <p>
            These enhancements focus on making insights more actionable and
            reducing the friction between identifying customer needs and
            implementing solutions.
          </p>
        </Block>

        <Block title="Knowledge sharing">
          <p>
            The success of Lumina has generated significant interest across AWS,
            leading to knowledge-sharing that expands its impact:
          </p>
          <ul className="list-outside pl-4 space-y-4">
            <li className="list-disc pl-2">
              <b className="font-semibold">Conference presentations:</b>{" "}
              Presented Lumina at two internal design conferences, sharing
              insights and implementation approaches with the broader design
              community
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Technical support for colleagues:</b>{" "}
              Provided guidance and support to team members interested in
              applying similar approaches, leading to experimentation from UX
              researchers and other designers
            </li>
          </ul>
          <p>
            This knowledge sharing extends Lumina's impact beyond its direct
            application, inspiring new approaches to customer understanding and
            AI integration throughout the organization.
          </p>
        </Block>
        <ImgContainer fullWidth>
          <div className="col-span-6">
            <Media
              src={designBreakfastTitle}
              alt="Lumina presentation slide showing the title of the project"
            ></Media>
          </div>
          <div className="col-span-6">
            <Media
              src={designBreakfastSlide}
              alt="Lumina presentation slide showing the importance of understanding customer feedback"
            ></Media>
          </div>
          <span className="col-span-12 text-sm text-base-600 dark:text-base-500 font-sans text-left mt-2">
            Presentation slides from a Design Breakfast session in 2025
            showcasing Lumina's impact. I also presented this project at Conflux
            2025, an Amazon wide design conference, as part of the Deep Dive
            into AI sessions.
          </span>
        </ImgContainer>

        <Block title="Broader applications">
          <p>
            Looking beyond its current implementation, Lumina's approach has
            applications across many domains:
          </p>
          <ul className="list-outside pl-4 space-y-4">
            <li className="list-disc pl-2">
              <b className="font-semibold">Cross-service insights:</b> Expanding
              beyond service-specific analysis to identify patterns that span
              multiple products and create a more holistic view of customer
              journeys
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">
                Integrated experience measurement:
              </b>{" "}
              Combining feedback analysis with usage data and other metrics to
              create comprehensive views of product experience
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Strategic pattern recognition:</b>{" "}
              Moving beyond reporting issues to identifying emerging trends and
              opportunities that could shape product strategy
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Cross-domain applications:</b> The
              core pattern—using AI to transform unstructured feedback into
              structured insights—has applications across many domains, from
              product development to healthcare to education
            </li>
          </ul>
          <p>
            The most significant opportunity, however, lies in broadening
            Lumina's approach beyond just AWS services. The core pattern—using
            AI to transform unstructured feedback into structured insights—has
            applications across many domains, from product development to
            healthcare to education.
          </p>
        </Block>
        <Blockquote>
          The most exciting aspect of tools like Lumina isn't what they can do
          today, but how they transform our understanding of what's possible.
          Each application creates new opportunities to bridge the gap between
          complex systems and the humans who use them.
        </Blockquote>
      </SectionHighlight>

      <SectionHighlight
        kicker="Reflections"
        heading="Key Insights from Building Lumina"
        subHeading="What I learned about AI, design, and organizational change through this project."
      >
        <Block title="Design thinking for AI solutions">
          <p>
            Building Lumina taught me several important lessons about designing
            effective AI systems:
          </p>
          <ul className="list-outside pl-4 space-y-4">
            <li className="list-disc pl-2">
              <b className="font-semibold">Trust requires transparency:</b>{" "}
              Users need to see the connection between AI-generated insights and
              the original data to build confidence in the system
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Context is crucial:</b> AI models
              need sufficient domain context to produce meaningful results,
              particularly for technical topics
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">
                Human-AI collaboration works better than automation:
              </b>{" "}
              The most effective approach was not replacing human analysis but
              amplifying it through interactive tools
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Iteration is essential:</b> AI
              systems benefit from continuous refinement based on user feedback
              and changing needs
            </li>
          </ul>
          <p>
            These insights have shaped my approach to all AI-powered design
            work, emphasizing collaboration between human intelligence and
            machine capabilities rather than pure automation.
          </p>
        </Block>

        <Block title="Technical growth">
          <p>
            This project pushed me to develop new technical skills that have
            expanded my capabilities as a designer:
          </p>
          <ul className="list-outside pl-4 space-y-4">
            <li className="list-disc pl-2">
              <b className="font-semibold">Serverless architecture:</b> Gained
              hands-on experience designing and implementing complex workflows
              with AWS Lambda and Step Functions
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Prompt engineering:</b> Developed
              deep expertise in crafting effective prompts for large language
              models, particularly for structured classification tasks
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Data modeling:</b> Created
              sophisticated database schemas that balance performance
              requirements with flexibility for evolving needs
            </li>
            <li className="list-disc pl-2">
              <b className="font-semibold">Full-stack development:</b> Built
              complete solutions from data processing to visualization,
              strengthening my ability to bring design concepts to life
            </li>
          </ul>
          <p>
            These technical capabilities have fundamentally changed how I
            approach design challenges, enabling me to create solutions that
            combine thoughtful user experience with robust implementation.
          </p>
        </Block>

        <Block title="The bigger picture">
          <p>
            Perhaps the most valuable insight from building Lumina was
            recognizing that technical complexity and human-centered design
            aren't opposing forces—they're complementary strengths that can
            create powerful solutions when combined thoughtfully.
          </p>
          <p>
            Lumina represents more than just a feedback tool. It demonstrates
            how designers can help organizations stay connected to customers
            even as products grow more complex and scale to millions of users.
            It shows that technical skills and user advocacy aren't opposites
            but complementary strengths that can help build better products by
            keeping humans at the center of the design process.
          </p>
          <p>
            As AI becomes part of our toolkit and products grow more
            sophisticated, this kind of work becomes increasingly important. We
            need people who can bridge technical complexity and human needs, who
            can build systems that help organizations stay focused on customer
            problems.
          </p>
          <p>
            That's the real value of tools like Lumina—not just processing
            feedback faster, but helping teams build better products by staying
            connected to the humans who use them.
          </p>
        </Block>
        <Blockquote>
          Technical complexity and human-centered design aren't opposing
          forces—they're complementary strengths. When we combine deep technical
          understanding with genuine empathy for users, we create solutions that
          don't just work technically but meaningfully improve how people work
          and live.
        </Blockquote>
      </SectionHighlight>
    </>
  );
}
