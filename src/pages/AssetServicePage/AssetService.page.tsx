import { useContext } from 'react';
import { CaseStudyHero, CaseStudyLayout, CaseStudyNavigation, CaseStudySection, CaseStudyStory } from '../../Components';
import { ConfigContext } from '../../Components/Contexts';
import { useDocumentTitle } from '../../hooks';

const AssetServicePage = () => {
  const { configs: { caseStudies: { assetService: copy }, content: { storyNumbers, pageTitles } } } = useContext(ConfigContext);
  useDocumentTitle(pageTitles.assetService);
  return (
    <CaseStudyLayout>
      <CaseStudyHero
        category={copy.platform_modernisation}
        title={copy.asset_service}
        subtitle={copy.consolidating_production_services_into_a_single}
        introduction={copy.a_legacy_modernisation_project_focused_on}
        technologies={[
          copy.typescript,
          copy.node_js,
          copy.knex,
          copy.postgresql,
          copy.docker,
        ]}
      />
      <CaseStudySection
        label={copy.the_project}
        title={copy.modernising_without_breaking_what_already_works}
      >
        <p>
          {copy.the_asset_service_project_involved_consolidating}</p>

        <p>
          {copy.the_challenge_wasn_t_simply_to}</p>
      </CaseStudySection>
      <CaseStudySection
        label={copy.my_role}
        title={copy.driving_a_safe_incremental_service_consolidation}
      >
        <p>
          {copy.i_was_responsible_for_working_through}</p>

        <div className="case-study-responsibilities">
          <article className="case-study-responsibility">
            <h3>{copy.legacy_analysis}</h3>
            <p>
              {copy.tracing_routes_service_logic_database_access}</p>
          </article>

          <article className="case-study-responsibility">
            <h3>{copy.backend_architecture}</h3>
            <p>
              {copy.establishing_the_shared_service_structure_around}</p>
          </article>

          <article className="case-study-responsibility">
            <h3>{copy.environment_integration}</h3>
            <p>
              {copy.integrating_the_consolidated_service_into_the}</p>
          </article>

          <article className="case-study-responsibility">
            <h3>{copy.testing_compatibility}</h3>
            <p>
              {copy.migrating_existing_tests_adding_integration_coverage}</p>
          </article>
        </div>
      </CaseStudySection>
      <CaseStudySection label={copy.the_engineering} title={copy.consolidating_legacy_services_without_changing_their}>
        <p>
          {copy.the_migration_involved_established_production_services}</p>
        <div className="case-study-stories">
          <CaseStudyStory
            number={storyNumbers[0]}
            title={copy.establishing_shared_database_access}
          >
            <p>
              {copy.the_existing_file_image_and_video}</p>

            <p>
              {copy.i_established_the_database_layer_within}</p>

            <p>
              {copy.i_also_extended_the_service_readiness}</p>
          </CaseStudyStory>
          <CaseStudyStory
            number={storyNumbers[1]}
            title={copy.migrating_behaviour_route_by_route}
          >
            <p>
              {copy.a_wholesale_rewrite_would_have_introduced}</p>

            <p>
              {copy.the_consolidated_implementation_followed_a_clearer}</p>

            <p>
              {copy.routes_request_and_response_formats_status}</p>
          </CaseStudyStory>
          <CaseStudyStory
            number={storyNumbers[2]}
            title={copy.building_confidence_through_integration_testing}
          >
            <p>
              {copy.existing_tests_were_brought_across_as}</p>

            <p>
              {copy.i_supplemented_that_coverage_with_integration}</p>

            <p>
              {copy.the_service_was_also_validated_within}</p>
            </CaseStudyStory>
          </div>
      </CaseStudySection>
      <CaseStudySection
        label={copy.the_outcome}
        title={copy.a_safer_foundation_for_service_consolidation}
      >
        <p>
          {copy.the_migration_established_a_clearer_architecture}</p>

        <p>
          {copy.just_as_importantly_the_approach_made}</p>

        <div className="case-study-outcomes">
          <div className="case-study-outcome">
            <h3>{copy.lower_migration_risk}</h3>

            <p>
              {copy.route_by_route_migration_and_behavioural}</p>
          </div>

          <div className="case-study-outcome">
            <h3>{copy.clearer_architecture}</h3>

            <p>
              {copy.separating_http_concerns_business_logic_and}</p>
          </div>

          <div className="case-study-outcome">
            <h3>{copy.greater_confidence_in_change}</h3>

            <p>
              {copy.existing_tests_new_integration_coverage_and}</p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudyNavigation
        previous={{
          label: 'Previous case study',
          title: 'Healthinote',
          to: '/work/healthinote',
        }}
        next={{
          label: 'Next case study',
          title: 'GuestFlow',
          to: '/work/guestflow',
        }}
      />
    </CaseStudyLayout>
  );
};

export default AssetServicePage;
