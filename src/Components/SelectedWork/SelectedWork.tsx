import { Link } from 'react-router-dom';
import './SelectedWork.scss';
import { useContext } from 'react';
import { ConfigContext } from '../Contexts';
import { SelectedWorkProps } from '../Contexts/ConfigContext/types';

const SelectedWork = () => {
  const { configs: { work: {  selectedWork } } } = useContext(ConfigContext);

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
          {selectedWork.map((project: SelectedWorkProps) => (
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
                {project.technologies.map((technology : string) => (
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