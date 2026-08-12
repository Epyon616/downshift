import { Link } from 'react-router-dom';

import './SelectedWork.scss';

const projects = [
  {
    title: 'Healthinote',
    category: 'Healthcare · SaaS',
    subtitle: 'Personalised healthcare information platform',
    description:
      'Senior engineering across a production healthcare application, including React and TypeScript development, API integrations, architecture and technical leadership.',
    technologies: ['React', 'TypeScript', 'Node.js', 'APIs'],
    href: '/work/healthinote',
  },
  {
    title: 'Asset Service',
    category: 'Platform · Modernisation',
    subtitle: 'Production service consolidation',
    description:
      'Consolidating three established production services into a single service while preserving existing API contracts, database behaviour and consumer compatibility.',
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Knex', 'Docker'],
    href: '/work/asset-service',
  },
  {
    title: 'GuestFlow',
    category: 'SaaS · Product',
    subtitle: 'Restaurant booking platform',
    description:
      'Designing and building a restaurant booking SaaS from the ground up, covering product decisions, frontend architecture, data modelling and application security.',
    technologies: ['React', 'TypeScript', 'PostgreSQL', 'Supabase', 'Vitest'],
    href: '/work/guestflow',
  },
];

const SelectedWork = () => {
  return (
    <section className="selected-work" aria-labelledby="selected-work-title">
      <div className="selected-work__inner">
        <div className="selected-work__header">
          <h2 id="selected-work-title">Selected work</h2>

          <p>
            A selection of projects that show how I approach product development,
            architecture and complex engineering problems.
          </p>
        </div>

        <div className="selected-work__projects">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card__header">
                <h3>{project.title}</h3>
                <span>{project.category}</span>
              </div>

              <h4>{project.subtitle}</h4>

              <p className="project-card__description">{project.description}</p>

              <ul
                className="project-card__technologies"
                aria-label={`${project.title} technologies`}
              >
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>

              <Link className="project-card__link" to={project.href}>
                View case study <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;