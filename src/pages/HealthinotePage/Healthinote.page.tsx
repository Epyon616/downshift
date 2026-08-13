import {CaseStudyHero, CaseStudyLayout, CaseStudyNavigation, CaseStudySection, CaseStudyStory } from '../../Components';

const HealthinotePage = () => {
  return (
    <CaseStudyLayout>
      <CaseStudyHero
        category="Healthcare · SaaS"
        title="Healthinote"
        subtitle="Personalised healthcare information platform"
        introduction="Senior engineering across a production healthcare platform, spanning frontend development, backend services, API integrations, architecture and technical leadership."
        technologies={['React', 'TypeScript', 'Node.js', 'APIs']}
      />
      <CaseStudySection
        label="The product"
        title="Making healthcare information easier to understand and act on"
      >
        <p>
          Healthinote is Cognitant’s digital health platform for delivering
          accessible, personalised healthcare information and self-management
          tools. It helps patients better understand their health, treatment
          options and medicines, while supporting healthcare organisations and
          life sciences companies with patient education, clinical trial
          engagement, disease awareness and onboarding for new therapies.
        </p>

        <p>
          The platform operates within real healthcare workflows and is approved
          for use by NHS organisations, including integration with NHS login. That
          means the product has to balance accessibility and ease of use with the
          reliability, security and governance expected from production healthcare
          software.
        </p>
      </CaseStudySection>
      <CaseStudySection
        label="My role"
        title="Senior engineering across the product"
      >
        <p>
          I worked across Healthinote as a Senior Software Engineer, contributing to
          frontend and backend development while taking responsibility for technical
          decisions, application architecture and engineering quality.
        </p>
        <div className="case-study-responsibilities">
          <article className="case-study-responsibility">
            <h3>Frontend engineering</h3>
            <p>
              Building and evolving React and TypeScript applications, reusable
              components and user-facing functionality with a focus on accessibility,
              maintainability and performance.
            </p>
          </article>

          <article className="case-study-responsibility">
            <h3>Backend & integrations</h3>
            <p>
              Developing and supporting backend services and APIs, integrating internal
              and external systems and ensuring data moved reliably between different
              parts of the platform.
            </p>
          </article>

          <article className="case-study-responsibility">
            <h3>Architecture & quality</h3>
            <p>
              Contributing to architectural decisions, improving existing application
              structure and establishing practices that made the codebase easier to
              understand, test and evolve.
            </p>
          </article>

          <article className="case-study-responsibility">
            <h3>Technical leadership</h3>
            <p>
              Mentoring junior engineers, reviewing code, introducing shared engineering
              standards and helping the team make considered technical decisions.
            </p>
          </article>
        </div>
      </CaseStudySection>
      <CaseStudySection
        label="The engineering"
        title="Improving the platform while continuing to ship"
      >
        <p>
          Healthinote was an established production platform with active client
          work, so improving the codebase couldn't come at the expense of delivery.
          I focused on making incremental improvements to frontend architecture,
          engineering standards and reusable tooling while continuing to build and
          support new healthcare experiences.
        </p>

        <div className="case-study-stories">
          <CaseStudyStory
            number="01"
            title="Strengthening the frontend foundations"
          >
            <p>
              The frontend had grown organically, with component files often
              exceeding 600 lines and combining rendering, business logic, state
              management, hooks and styling in a single place. Linting existed, but
              wasn't configured strongly enough to provide meaningful consistency or
              protection.
            </p>

            <p>
              I took ownership of improving the frontend engineering practices:
              introducing clearer linting and code-quality rules, adding pre-commit
              checks, breaking large components into smaller focused units and
              introducing tests where they provided useful coverage.
            </p>

            <p>
              Rather than attempting a disruptive rewrite, these improvements were
              introduced incrementally alongside ongoing product development, making
              the codebase easier to understand, review and safely extend.
            </p>
          </CaseStudyStory>
          <CaseStudyStory
            number="02"
            title="Building a reusable component system"
          >
            <p>
              The existing component library had accumulated components that were
              often created for a single use case, limiting reuse and allowing
              inconsistencies to develop across the product.
            </p>

            <p>
              I designed a second-generation component library around atomic design
              principles, starting with foundations such as colour and typography
              before building reusable links, form controls, cards and other
              interface components.
            </p>

            <p>
              Storybook became an important part of that process, providing a shared
              source of truth between design and engineering. It allowed components
              and their variations to be reviewed in isolation, helped identify
              inconsistencies in proposed designs and created a stronger foundation
              for building future product features more quickly and consistently.
            </p>
          </CaseStudyStory>
          <CaseStudyStory
            number="03"
            title="Streamlining client information hub delivery"
          >
            <p>
              New information hubs combined bespoke client requirements with large
              amounts of healthcare content. Designs were typically provided first,
              with the implementation requiring me to determine what was already
              supported by the platform and work with the backend developer to
              introduce any additional API capabilities that were needed.
            </p>

            <p>
              A significant bottleneck was preparing client content. Although content
              documents had been designed around the application's structured JSON
              format, completed documents frequently came back in inconsistent
              formats. This meant valuable development time was being spent manually
              restructuring content before it could be used by the platform.
            </p>

            <p>
              I introduced an LLM-assisted workflow using Kiro to accelerate this
              transformation, converting supplied content into the application's
              established JSON structure rather than repeatedly formatting it by
              hand. This reduced a repetitive part of delivering new hubs while
              keeping the application's existing content model and development
              workflow intact.
            </p>
          </CaseStudyStory>
        </div>
      </CaseStudySection>
      <CaseStudySection
          label="The outcome"
          title="A stronger foundation for continued development"
        >
          <p>
            My work on Healthinote went beyond delivering individual features. By
            improving frontend architecture, establishing stronger engineering
            practices and creating a more reusable component system, I helped make
            ongoing development more consistent and maintainable.
          </p>

          <p>
            These improvements were made alongside continued delivery of client work,
            allowing the platform to evolve without requiring a disruptive rewrite.
            The practices and patterns introduced also gave the wider team a clearer
            foundation for approaching frontend development as the product continued
            to grow.
          </p>

          <div className="case-study-outcomes">
            <div className="case-study-outcome">
              <h3>More maintainable frontend</h3>

              <p>
                Smaller, focused components, stronger code-quality tooling and
                increased test coverage made the application easier to understand and
                change safely.
              </p>
            </div>

            <div className="case-study-outcome">
              <h3>More consistent product development</h3>

              <p>
                A reusable component system and Storybook provided a shared foundation
                for design and engineering, reducing unnecessary one-off
                implementations.
              </p>
            </div>

            <div className="case-study-outcome">
              <h3>More efficient client delivery</h3>

              <p>
                Improved development patterns and an LLM-assisted content workflow
                reduced repetitive work involved in turning client requirements and
                healthcare content into production experiences.
              </p>
            </div>
          </div>
      </CaseStudySection>
      <CaseStudyNavigation
        next={{
          label: 'Next case study',
          title: 'Asset Service',
          to: '/work/asset-service',
        }}
      />
    </CaseStudyLayout>
  );
};

export default HealthinotePage;