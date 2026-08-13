import { CaseStudyHero, CaseStudyLayout } from '../../Components';

const AssetServicePage = () => {
  return (
    <CaseStudyLayout>
      <CaseStudyHero
        category="Platform · Modernisation"
        title="Asset Service"
        subtitle="Consolidating production services into a single maintainable platform"
        introduction="A legacy modernisation project focused on safely consolidating established file, image and video services while preserving existing production behaviour."
        technologies={['TypeScript', 'Node.js', 'Knex', 'PostgreSQL', 'Docker']}
      />

      <section className="case-study-placeholder">
        <span>Case study coming soon</span>
      </section>
    </CaseStudyLayout>
  );
};

export default AssetServicePage;