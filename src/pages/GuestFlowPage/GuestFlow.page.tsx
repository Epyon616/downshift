import {CaseStudyHero, CaseStudyLayout} from '../../Components';

const GuestFlowPage = () => {
  return (
    <CaseStudyLayout>
      <CaseStudyHero
        category="SaaS · Product"
        title="GuestFlow"
        subtitle="A modern restaurant booking platform for independent restaurants"
        introduction="Designing and building a commercial SaaS product from the ground up, with a focus on simple user experiences, reliable architecture and shipping real customer value."
        technologies={['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Vite']}
      />

      <section className="case-study-placeholder">
        <span>Case study coming soon</span>
      </section>
    </CaseStudyLayout>
  );
};

export default GuestFlowPage;