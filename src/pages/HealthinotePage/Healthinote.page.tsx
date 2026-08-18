import { useContext } from 'react';
import {CaseStudyHero, CaseStudyLayout, CaseStudyNavigation, CaseStudySection, CaseStudyStory } from '../../Components';
import { ConfigContext } from '../../Components/Contexts';
import { useDocumentTitle } from '../../hooks';

const HealthinotePage = () => {
  const { configs: { caseStudies: { healthinote: copy }, content: { storyNumbers, pageTitles } } } = useContext(ConfigContext);
  useDocumentTitle(pageTitles.healthinote);
  return (
    <CaseStudyLayout>
      <CaseStudyHero
        category={copy.healthcare_saas}
        title={copy.healthinote}
        subtitle={copy.personalised_healthcare_information_platform}
        introduction={copy.senior_engineering_across_a_production_healthcare}
        technologies={[copy.react, copy.typescript, copy.node_js, copy.apis]}
      />
      <CaseStudySection
        label={copy.the_product}
        title={copy.making_healthcare_information_easier_to_understand}
      >
        <p>
          {copy.healthinote_is_cognitant_s_digital_health}</p>

        <p>
          {copy.the_platform_operates_within_real_healthcare}</p>
      </CaseStudySection>
      <CaseStudySection
        label={copy.my_role}
        title={copy.senior_engineering_across_the_product}
      >
        <p>
          {copy.i_worked_across_healthinote_as_a}</p>
        <div className="case-study-responsibilities">
          <article className="case-study-responsibility">
            <h3>{copy.frontend_engineering}</h3>
            <p>
              {copy.building_and_evolving_react_and_typescript}</p>
          </article>

          <article className="case-study-responsibility">
            <h3>{copy.backend_integrations}</h3>
            <p>
              {copy.developing_and_supporting_backend_services_and}</p>
          </article>

          <article className="case-study-responsibility">
            <h3>{copy.architecture_quality}</h3>
            <p>
              {copy.contributing_to_architectural_decisions_improving_existing}</p>
          </article>

          <article className="case-study-responsibility">
            <h3>{copy.technical_leadership}</h3>
            <p>
              {copy.mentoring_junior_engineers_reviewing_code_introducing}</p>
          </article>
        </div>
      </CaseStudySection>
      <CaseStudySection
        label={copy.the_engineering}
        title={copy.improving_the_platform_while_continuing_to}
      >
        <p>
          {copy.healthinote_was_an_established_production_platform}</p>

        <div className="case-study-stories">
          <CaseStudyStory
            number={storyNumbers[0]}
            title={copy.strengthening_the_frontend_foundations}
          >
            <p>
              {copy.the_frontend_had_grown_organically_with}</p>

            <p>
              {copy.i_took_ownership_of_improving_the}</p>

            <p>
              {copy.rather_than_attempting_a_disruptive_rewrite}</p>
          </CaseStudyStory>
          <CaseStudyStory
            number={storyNumbers[1]}
            title={copy.building_a_reusable_component_system}
          >
            <p>
              {copy.the_existing_component_library_had_accumulated}</p>

            <p>
              {copy.i_designed_a_second_generation_component}</p>

            <p>
              {copy.storybook_became_an_important_part_of}</p>
          </CaseStudyStory>
          <CaseStudyStory
            number={storyNumbers[2]}
            title={copy.streamlining_client_information_hub_delivery}
          >
            <p>
              {copy.new_information_hubs_combined_bespoke_client}</p>

            <p>
              {copy.a_significant_bottleneck_was_preparing_client}</p>

            <p>
              {copy.i_introduced_an_llm_assisted_workflow}</p>
          </CaseStudyStory>
        </div>
      </CaseStudySection>
      <CaseStudySection
          label={copy.the_outcome}
          title={copy.a_stronger_foundation_for_continued_development}
        >
          <p>
            {copy.my_work_on_healthinote_went_beyond}</p>

          <p>
            {copy.these_improvements_were_made_alongside_continued}</p>

          <div className="case-study-outcomes">
            <div className="case-study-outcome">
              <h3>{copy.more_maintainable_frontend}</h3>

              <p>
                {copy.smaller_focused_components_stronger_code_quality}</p>
            </div>

            <div className="case-study-outcome">
              <h3>{copy.more_consistent_product_development}</h3>

              <p>
                {copy.a_reusable_component_system_and_storybook}</p>
            </div>

            <div className="case-study-outcome">
              <h3>{copy.more_efficient_client_delivery}</h3>

              <p>
                {copy.improved_development_patterns_and_an_llm}</p>
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
