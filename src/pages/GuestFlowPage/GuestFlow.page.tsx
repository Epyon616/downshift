import { useContext } from 'react';
import {CaseStudyHero, CaseStudyLayout, CaseStudyNavigation, CaseStudySection, CaseStudyStory} from '../../Components';
import { ConfigContext } from '../../Components/Contexts';
import { useDocumentTitle } from '../../hooks';

const GuestFlowPage = () => {
  const { configs: { caseStudies: { guestFlow: copy }, content: { storyNumbers, pageTitles } } } = useContext(ConfigContext);
  useDocumentTitle(pageTitles.guestFlow);
  return (
    <CaseStudyLayout>
      <CaseStudyHero
        category={copy.saas_product}
        title={copy.guestflow}
        subtitle={copy.building_a_modern_restaurant_booking_platform}
        introduction={copy.designing_and_developing_a_commercial_saas}
        technologies={[
          copy.react,
          copy.typescript,
          copy.supabase,
          copy.postgresql,
          copy.vite,
          copy.scss,
        ]}
      />
      <CaseStudySection
        label={copy.the_product}
        title={copy.a_simpler_approach_to_restaurant_reservations}
      >
        <p>
          {copy.guestflow_is_a_restaurant_booking_saas}</p>

        <p>
          {copy.the_goal_is_to_build_a}</p>
      </CaseStudySection>
      <CaseStudySection
        label={copy.my_role}
        title={copy.owning_the_product_from_concept_to}
      >
        <p>
          {copy.as_the_creator_and_sole_developer}</p>

        <div className="case-study-responsibilities">
          <article className="case-study-responsibility">
            <h3>{copy.product_direction}</h3>

            <p>
              {copy.defining_the_mvp_around_genuine_restaurant}</p>
          </article>

          <article className="case-study-responsibility">
            <h3>{copy.frontend_ux}</h3>

            <p>
              {copy.designing_and_building_the_react_and}</p>
          </article>

          <article className="case-study-responsibility">
            <h3>{copy.backend_data}</h3>

            <p>
              {copy.designing_the_postgresql_data_model_and}</p>
          </article>

          <article className="case-study-responsibility">
            <h3>{copy.engineering_quality}</h3>

            <p>
              {copy.establishing_the_project_architecture_coding_conventions}</p>
          </article>
        </div>
      </CaseStudySection>
      <CaseStudySection label={copy.the_engineering}
        title={copy.building_for_real_requirements_not_imagined}
      >
        <p>
          {copy.building_guestflow_from_scratch_gives_me}</p>
        <CaseStudyStory
          number={storyNumbers[0]}
          title={copy.designing_multi_tenant_security_from_the}
        >
          <p>
            {copy.guestflow_needs_to_support_multiple_restaurants}</p>

          <p>
            {copy.the_postgresql_model_establishes_relationships_between}</p>

          <p>
            {copy.this_provides_defence_in_depth_the}</p>
        </CaseStudyStory>
        <CaseStudyStory
          number={storyNumbers[1]}
          title={copy.modelling_real_restaurant_operations}
        >
          <p>
            {copy.a_useful_reservation_system_needs_to}</p>

          <p>
            {copy.settings_including_booking_duration_booking_intervals}</p>

          <p>
            {copy.building_these_foundations_before_the_reservation}</p>
        </CaseStudyStory>
        <CaseStudyStory
          number={storyNumbers[2]}
          title={copy.keeping_the_architecture_proportional_to_the}
        >
          <p>
            {copy.starting_a_new_saas_product_creates}</p>

          <p>
            {copy.react_and_typescript_provide_the_frontend}</p>

          <p>
            {copy.decisions_are_made_around_the_simplest}</p>
        </CaseStudyStory>
      </CaseStudySection>
      <CaseStudySection
        label={copy.the_outcome}
        title={copy.a_production_quality_foundation_for_the}
      >
        <p>
          {copy.guestflow_is_still_under_active_development}</p>

        <p>
          {copy.more_importantly_the_project_demonstrates_how}</p>

        <div className="case-study-outcomes">
          <div className="case-study-outcome">
            <h3>{copy.secure_by_design}</h3>

            <p>
              {copy.multi_tenant_data_access_and_permissions}</p>
          </div>

          <div className="case-study-outcome">
            <h3>{copy.ready_to_evolve}</h3>

            <p>
              {copy.restaurant_configuration_and_operational_data_provide}</p>
          </div>

          <div className="case-study-outcome">
            <h3>{copy.focused_on_shipping}</h3>

            <p>
              {copy.the_architecture_remains_deliberately_straightforward_allowing}</p>
          </div>
        </div>
      </CaseStudySection>
      <CaseStudyNavigation
        previous={{
          label: 'Previous case study',
          title: 'Asset Service',
          to: '/work/asset-service',
        }}
      />
    </CaseStudyLayout>
  );
};

export default GuestFlowPage;
